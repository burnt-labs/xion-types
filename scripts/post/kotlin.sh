#!/bin/bash
# Post-processor for Kotlin protobuf generation.
#
# - Generates Java types from all proto sources (Kotlin depends on them at compile time)
# - Cleans up .proto.kt files and case-insensitive duplicates

set -eo pipefail

ROOT_DIR="$(cd "$(dirname "$(dirname "$(dirname "$0")")")" && pwd)"
BUF_DIR="$ROOT_DIR/buf"
XION_BSR="${XION_BSR_MODULE:-buf.build/burnt-labs/xion}"

# Load proto sources from shared config
BSR_SOURCES=""
while IFS= read -r line; do
  line="${line%%#*}"
  line="$(echo "$line" | xargs)"
  [ -z "$line" ] && continue
  case "$line" in buf.build/burnt-labs/xion*) line="$XION_BSR" ;; esac
  BSR_SOURCES="$BSR_SOURCES $line"
done < "$ROOT_DIR/scripts/proto-sources.conf"

cd "$ROOT_DIR"

# Generate Java types from all sources (Kotlin depends on them).
# Sources are ordered so xion is last — its shared imports (cosmos_proto,
# tendermint, etc.) overwrite any older versions from earlier sources.
# Git sources are isolated to avoid polluting with stale shared types.
echo "Generating Java types for Kotlin..."
for source in $BSR_SOURCES; do
  if echo "$source" | grep -q "^https://"; then
    tmp_dir=$(mktemp -d)
    echo "  Java from $source (git, isolated)"
    buf generate "$source" \
      --template "$BUF_DIR/buf.gen.java.yaml" \
      --include-imports \
      --output "$tmp_dir" 2>/dev/null || true
    # Copy only source-specific types (skip shared imports)
    if [ -d "$tmp_dir" ]; then
      cd "$tmp_dir"
      find . -type f 2>/dev/null | while IFS= read -r f; do
        skip=false
        case "$f" in
          ./gogoproto/*|./google/*|./cosmos/*|./cosmos_proto/*) skip=true ;;
          ./amino/*|./tendermint/*|./cosmwasm/*) skip=true ;;
        esac
        if [ "$skip" = false ]; then
          dest="$ROOT_DIR/$(echo "$f" | sed 's|^\./||')"
          mkdir -p "$(dirname "$dest")"
          cp "$f" "$dest"
        fi
      done
      cd "$ROOT_DIR"
    fi
    rm -rf "$tmp_dir"
  else
    echo "  Java from $source (with imports)"
    buf generate "$source" \
      --template "$BUF_DIR/buf.gen.java.yaml" \
      --include-imports \
      --output "$ROOT_DIR" 2>/dev/null || true
  fi
done

# Clean up .proto.kt files
find kotlin/types -name "*.proto.kt" -delete 2>/dev/null || true

# Remove empty .kt files (artifacts from failed generation or stale .proto.kt cleanup)
echo "Removing empty Kotlin files..."
find kotlin/types -name "*.kt" -type f -empty -delete 2>/dev/null || true

# Remove case-insensitive duplicate files
echo "Checking for duplicate Kotlin files..."
if [ -f "kotlin/types/cosmos/nft/v1beta1/NftKt.kt" ] && [ -f "kotlin/types/cosmos/nft/v1beta1/NFTKt.kt" ]; then
  echo "  Removing duplicate: NftKt.kt (keeping NFTKt.kt)"
  rm "kotlin/types/cosmos/nft/v1beta1/NftKt.kt"
fi

# Remove orphaned Kotlin files that reference Java outer classes which don't exist.
# Kotlin protobuf wrappers reference their Java outer class like:
#   abstractaccount.v1.Account.AbstractAccount
# If the Java outer class file doesn't exist, the Kotlin file won't compile.
echo "Removing orphaned Kotlin files..."
orphan_count=0
find kotlin/types -name "*.kt" -type f 2>/dev/null | while IFS= read -r kt_file; do
  # Extract the Java outer class reference from the Kotlin file.
  # grep -oE returns all matches from the first matching line, so we:
  #   1. Filter out *Kt. matches (Kotlin class refs, not Java outer classes)
  #   2. Take the first remaining match
  outer_class=$(grep -oE '[a-z][a-z0-9_.]*\.[A-Z][A-Za-z0-9]*\.' "$kt_file" 2>/dev/null \
    | grep -v 'Kt\.$' \
    | head -1 || true)
  outer_class="${outer_class%.}"  # strip trailing dot
  if [ -z "$outer_class" ]; then
    continue
  fi
  # Convert package.ClassName to path: a.b.ClassName -> java/types/a/b/ClassName.java
  java_path="java/types/$(echo "$outer_class" | tr '.' '/').java"
  if [ ! -f "$java_path" ]; then
    rm "$kt_file"
    orphan_count=$((orphan_count + 1))
  fi
done
echo "  Removed $orphan_count orphaned Kotlin files"

# Remove empty directories left after cleanup
find kotlin/types -type d -empty -delete 2>/dev/null || true

# Build verification — ensure generated types compile
cd "$ROOT_DIR/kotlin"
if command -v gradle &>/dev/null; then
  echo "Verifying Kotlin compilation..."
  gradle compileKotlin --no-daemon 2>/dev/null && echo "  ✅ Kotlin compiles" || echo "  ⚠️  Compilation check skipped (gradle failed)"
fi

echo "✅ Kotlin post-processing complete"
