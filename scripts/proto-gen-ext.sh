#!/usr/bin/env bash
# proto-gen-ext.sh — Generate protobuf types from BSR for all supported languages.
#
# Usage:
#   ./scripts/proto-gen-ext.sh <language>   # e.g. python, rust, ts, all
#   ./scripts/proto-gen-ext.sh --python     # legacy flag style also works
#   ./scripts/proto-gen-ext.sh --help
#
# Protos are sourced from BSR (and one git ref for packet-forward-middleware).
# No git submodules or Go toolchain required.
#
# Post-processors are auto-discovered from scripts/post/<lang>.{sh,py}.
# Add a new post-processor there and it will be picked up automatically.

set -eo pipefail

ROOT_DIR="$(cd "$(dirname "$(dirname "$0")")" && pwd)"
BUF_DIR="$ROOT_DIR/buf"
POST_DIR="$ROOT_DIR/scripts/post"

# Make locally-installed buf plugins (ts-proto, etc.) available without global install
export PATH="$ROOT_DIR/ts/node_modules/.bin:$PATH"

# Override the xion BSR label (e.g. buf.build/burnt-labs/xion:v26.0.0)
XION_BSR="${XION_BSR_MODULE:-buf.build/burnt-labs/xion}"

# Load proto sources from config, replacing the xion entry with any override.
load_sources() {
  BSR_SOURCES=""
  while IFS= read -r line; do
    line="${line%%#*}"              # strip comments
    line="$(echo "$line" | xargs)" # trim whitespace
    [ -z "$line" ] && continue
    # Replace the default xion ref with the (possibly overridden) one
    case "$line" in
      buf.build/burnt-labs/xion*) line="$XION_BSR" ;;
    esac
    BSR_SOURCES="$BSR_SOURCES $line"
  done < "$ROOT_DIR/scripts/proto-sources.conf"
}

load_sources

ALL_LANGUAGES="c cpp csharp docs java kotlin objc php python ruby rust scala swift ts"

# Leaked test/internal packages to remove after generation.
# These get pulled in by --include-imports but should not be shipped.
# NOTE: gogoproto and google MUST NOT be excluded — generated files across
# all languages (C/C++ #includes, Java/Python/Ruby imports) reference them.
EXCLUDE_PACKAGES="test_proto proto3_proto com capability"

# ─── Helpers ─────────────────────────────────────────────────────────

# Filter known non-actionable warnings from buf/protoc stderr.
# Prints remaining warnings (if any) to stderr.
filter_buf_warnings() {
  local stderr_file="$1"
  [ -f "$stderr_file" ] || return 0
  # Suppress:
  #   - "file does not exist" — git sources can't resolve BSR-only imports
  #   - "proto3 .proto files" — PHP can't handle proto2 (gogoproto)
  #   - "raise an issue with the maintainer" — upstream plugin deprecation noise
  #   - blank lines
  grep -v \
    -e "file does not exist" \
    -e "Can only generate.*proto3" \
    -e "raise an issue with the maintainer" \
    -e "^$" \
    "$stderr_file" >&2 2>/dev/null || true
  rm -f "$stderr_file"
}

# Remove excluded packages from a language's output directory.
# Parses the "out:" field from the buf template to find the output root.
clean_excluded_packages() {
  local language="$1"
  local template="$BUF_DIR/buf.gen.$language.yaml"
  [ -f "$template" ] || return 0

  # Collect all unique output dirs from the template
  local out_dirs
  out_dirs=$(grep '^\s*out:' "$template" | sed 's/.*out:\s*//' | sort -u)

  for out_dir in $out_dirs; do
    for pkg in $EXCLUDE_PACKAGES; do
      local target="$ROOT_DIR/$out_dir/$pkg"
      if [ -d "$target" ]; then
        echo "  removing excluded package: $out_dir/$pkg"
        rm -rf "$target"
      fi
    done
  done
}

# ─── Core generation ─────────────────────────────────────────────────

gen_buf() {
  local language="$1"
  local template="$BUF_DIR/buf.gen.$language.yaml"

  if [ ! -f "$template" ]; then
    echo "Error: No buf template at $template"
    exit 1
  fi

  # Sources are ordered in proto-sources.conf so that xion is LAST.
  # Every BSR source uses --include-imports, so xion (the most complete/newest)
  # overwrites any stale shared imports (cosmos_proto, tendermint, etc.)
  # left by earlier sources.
  #
  # Git sources (https://) are isolated into a temp dir so their stale shared
  # imports don't leak into the output.
  #
  # Rust (prost) special case: prost merges all types from the same protobuf
  # package into a single .rs file. Different BSR sources may include different
  # protos from the same package, so we stage each source's output separately
  # and merge them after the loop. The Rust post-processor deduplicates.
  for source in $BSR_SOURCES; do
    if echo "$source" | grep -q "^https://"; then
      # Git sources generate into a temp dir so we can cherry-pick their
      # unique types without polluting the output with stale shared imports.
      local tmp_dir
      tmp_dir=$(mktemp -d)
      echo "  generating $language from $source (git, isolated)"
      buf generate "$source" \
        --template "$template" \
        --include-imports \
        --output "$tmp_dir" 2>"$ROOT_DIR/.buf-stderr" || true
      filter_buf_warnings "$ROOT_DIR/.buf-stderr"

      # Copy only the source-specific types (skip shared imports)
      if [ -d "$tmp_dir" ]; then
        cd "$tmp_dir"
        find . -type f 2>/dev/null | while IFS= read -r f; do
          local skip=false
          case "$f" in
            ./gogoproto/*|./*/gogoproto/*) skip=true ;;
            ./google/*|./*/google/*)       skip=true ;;
            ./cosmos/*|./*/cosmos/*)       skip=true ;;
            ./cosmos_proto/*|./*/cosmos_proto/*) skip=true ;;
            ./amino/*|./*/amino/*)         skip=true ;;
            ./tendermint/*|./*/tendermint/*) skip=true ;;
            ./cosmwasm/*|./*/cosmwasm/*)   skip=true ;;
          esac
          if [ "$skip" = false ]; then
            local dest="$ROOT_DIR/$(echo "$f" | sed 's|^\./||')"
            mkdir -p "$(dirname "$dest")"
            cp "$f" "$dest"
          fi
        done
        cd "$ROOT_DIR"
      fi
      rm -rf "$tmp_dir"
    elif [ "$language" = "rust" ]; then
      # Prost merges types from the same package into one .rs file, so different
      # BSR sources producing different subsets would silently overwrite each other.
      # Stage each source separately; the Rust post-processor merges and deduplicates.
      local tmp_dir
      tmp_dir=$(mktemp -d)
      echo "  generating $language from $source (staged)"
      buf generate "$source" \
        --template "$template" \
        --include-imports \
        --output "$tmp_dir" 2>"$ROOT_DIR/.buf-stderr" || true
      filter_buf_warnings "$ROOT_DIR/.buf-stderr"

      local stage_id
      stage_id=$(echo "$source" | sed 's|[^a-zA-Z0-9]|_|g')
      mkdir -p "$ROOT_DIR/.rust-staged"
      if [ -d "$tmp_dir" ]; then
        mv "$tmp_dir" "$ROOT_DIR/.rust-staged/$stage_id"
      fi
    else
      echo "  generating $language from $source (with imports)"
      buf generate "$source" \
        --template "$template" \
        --include-imports \
        --output "$ROOT_DIR" 2>"$ROOT_DIR/.buf-stderr" || true
      filter_buf_warnings "$ROOT_DIR/.buf-stderr"
    fi
  done

}

gen_docs() {
  echo "  Generating docs from BSR sources"
  for source in $BSR_SOURCES; do
    echo "    docs from $source"
    buf generate "$source" \
      --template "$BUF_DIR/buf.gen.docs.yaml" \
      --include-imports \
      --output "$ROOT_DIR" 2>"$ROOT_DIR/.buf-stderr" || true
    filter_buf_warnings "$ROOT_DIR/.buf-stderr"
  done
}

# ─── Post-processing (auto-discovered from scripts/post/) ───────────

run_post() {
  local language="$1"
  cd "$ROOT_DIR"

  if [ -f "$POST_DIR/$language.sh" ]; then
    echo "Running post-processor: scripts/post/$language.sh"
    bash "$POST_DIR/$language.sh"
  elif [ -f "$POST_DIR/$language.py" ]; then
    echo "Running post-processor: scripts/post/$language.py"
    python3 "$POST_DIR/$language.py"
  fi
}

# ─── Generate one language ───────────────────────────────────────────

generate_one() {
  local language="$1"
  echo ""
  echo "━━━ $language ━━━"

  case "$language" in
    docs)      gen_docs ;;
    *)         gen_buf "$language" ;;
  esac

  clean_excluded_packages "$language"
  run_post "$language"
  echo "✅ $language done"
}

# ─── Generate all languages ─────────────────────────────────────────

generate_all() {
  for lang in $ALL_LANGUAGES; do
    generate_one "$lang"
  done
  echo ""
  echo "✅ All languages generated"
}

# ─── CLI ─────────────────────────────────────────────────────────────

show_help() {
  echo "Usage: $(basename "$0") [--module <bsr-ref>] <language|all>"
  echo ""
  echo "Generate protocol buffer types for Xion blockchain."
  echo "Xion protos sourced from: $XION_BSR"
  echo ""
  echo "Proto sources:"
  for src in $BSR_SOURCES; do echo "  $src"; done
  echo ""
  echo "Languages: $ALL_LANGUAGES"
  echo "  all     Generate all of the above"
  echo ""
  echo "Options:"
  echo "  --module <ref>  Override xion BSR ref (default: buf.build/burnt-labs/xion)"
  echo "                  e.g. buf.build/burnt-labs/xion:v26.0.0"
  echo ""
  echo "Both bare names and --flags work: 'python' or '--python'"
}

main() {
  if [ $# -eq 0 ] || [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    show_help
    exit 0
  fi

  # Parse --module flag if present (updates XION_BSR and reloads sources)
  if [ "$1" = "--module" ]; then
    XION_BSR="$2"
    load_sources
    shift 2
  fi

  while [ $# -gt 0 ]; do
    # Strip leading -- for backwards compat (--python → python)
    local target="${1#--}"
    shift

    if [ "$target" = "all" ]; then
      generate_all
    elif echo " $ALL_LANGUAGES " | grep -q " $target "; then
      generate_one "$target"
    else
      echo "Unknown language: $target"
      echo "Valid: $ALL_LANGUAGES all"
      exit 1
    fi
  done
}

main "$@"
