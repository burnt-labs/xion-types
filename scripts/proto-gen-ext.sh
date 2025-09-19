#!/bin/sh

set -eo pipefail

# Get the directory of this script, used to source other scripts
xion_types_dir="$(cd "$(dirname "$(dirname "$0")")" && pwd)"
xion_dir="$xion_types_dir/xion"
proto_dir="$xion_dir/proto"
buf_dir="$xion_types_dir/buf"

# Source dependencies from .env file
env_file="$xion_types_dir/.env"
if [ ! -f "$env_file" ]; then
  echo "Error: .env file not found at $env_file"
  exit 1
fi

source "$env_file"

if [ -z "$DEPS" ]; then
  echo "Error: DEPS variable not found in .env file"
  exit 1
fi

deps="$DEPS"

# Install selected dependencies from go.mod
echo "installing dependencies"
cd ${xion_dir} 
go mod download $deps

# Get dependency paths
echo "getting paths for $deps"
proto_paths=$(go list -f '{{ .Dir }}' -m $deps | sed "s/$/\/proto/")

cd $xion_types_dir

gen_language() {
  local language=$1
  local skip_problematic=${2:-true}  # Default to true if not specified
  
  local dirs="$proto_dir $proto_paths"  # Use both local and dependency paths
  lang_dir=$xion_types_dir/$language
  types_dir=$lang_dir/types
  mkdir -p $types_dir

  # Work from the proto directory where buf.yaml has dependencies defined
  cd $proto_dir

  # For local plugins, generate file by file (existing behavior)
  for dir in $dirs; do
    # Skip problematic files if skip_problematic is true
    if [ "$skip_problematic" = "true" ] && echo "$file" | grep -q \
        -e "poa"; then
      echo "skipping problematic dir $file"
      continue
    fi
    echo "generating $language for dir $dir"

    buf generate $dir \
      --template "$buf_dir/buf.gen.$language.yaml" \
      --output $xion_types_dir 2>&1 | grep -v "duplicate generated file name" || true
  done
}

post_kotlin() { 
  # Special post-processing for Kotlin
    echo "Cleaning up .proto.kt files..."
    find "$lang_dir/types" -name "*.proto.kt" -delete 2>/dev/null || true
}

gen_ts() {
  echo "🔭 Generating TypeScript types..."
  
  # Install npm dependencies
  ts_dir=$xion_types_dir/ts
  cd $ts_dir
  npm install

  # Download .proto files (deps will be read from deps.txt)
  npm run download-protos

  # Run codegen (deps will be read from deps.txt)
  npm run codegen
}

gen_docs() {
  go install github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc@latest #2>/dev/null
  local dirs="$proto_dir $proto_paths"

  tmp_dir=$(mktemp -d -t tmp-XXXXXX)
  cd $tmp_dir
  
  # Generate docs for each proto file
  for dir in $dirs; do
  
  # Check if directory is within the proto module
    # Skip problematic dependencies
    case "$dir" in
      # missing or incorrectly identified cosmos_proto/cosmos.proto
      *"burnt-labs/abstract-account"*)
        continue
        ;;
    esac

    module_dir=$(dirname $dir)

    local deep_proto_dirs=$(find "$dir" -name '*.proto' -print0 2>/dev/null | \
      xargs -0 -n1 dirname 2>/dev/null | \
      sort -u 2>/dev/null || true)

    for deep_proto_dir in $deep_proto_dirs; do
      # For files within our module, use the module root with the specific file
      buf generate "$module_dir" \
        --output $tmp_dir/$deep_proto_dir \
        --template "$buf_dir/buf.gen.docs.yaml" \
        --path "$deep_proto_dir"
      destination_dir="$xion_types_dir/docs/$(echo $deep_proto_dir | sed "s|$module_dir||" | sed 's|^/||')"
      mkdir -p "$destination_dir"
      cp -rv $tmp_dir/$deep_proto_dir/* "$destination_dir/"
    done
  done

}


show_help() {
  echo "Usage: $0 [OPTIONS]"
  echo ""
  echo "Generate protocol buffer types for various languages"
  echo ""
  echo "OPTIONS:"
  echo "  --c          Generate C types"
  echo "  --cpp        Generate C++ types"
  echo "  --docs       Generate Markdown documentation"
  echo "  --java       Generate Java types"
  echo "  --kotlin     Generate Kotlin types"
  echo "  --objc       Generate Objective-C types"
  echo "  --php        Generate PHP types"
  echo "  --python     Generate Python types"
  echo "  --ruby       Generate Ruby types"
  echo "  --rust       Generate Rust types"
  echo "  --scala      Generate scala types"
  echo "  --swift      Generate Swift types"
  echo "  --ts         Generate TypeScript types"
  echo "  --swagger    Generate Swagger documentation"
  echo "  -h, --help   Show this help message"
}

main() {
# Show help if no arguments provided
  if [[ $# -eq 0 ]]; then
    show_help
    exit 0
  fi

# Parse CLI parameters
  while [[ $# -gt 0 ]]; do
    case $1 in
    --all)
      gen_language all && post_kotlin && gen_ts && gen_docs
      shift
      ;;
    --c)
      gen_language c
      shift
      ;;
    --cpp)
      gen_language cpp
      shift
      ;;
    --docs)
      gen_docs
      shift
      ;;
    --java)
      gen_language java 
      shift
      ;;
    --kotlin)
      gen_language kotlin && post_kotlin
      shift
      ;;
    --objc)
      gen_language objc
      shift
      ;;
    --php)
      gen_language php
      shift
      ;;
    --python)
      gen_language python
      shift
      ;;
    --ruby)
      gen_language ruby
      shift
      ;;
    --rust)
      gen_language rust
      shift
      ;;
    --scala)
      gen_language scala
      shift
      ;;
    --swift)
      gen_language swift
      shift
      ;;
    --ts)
      #gen_language ts && 
      gen_ts
      shift
      ;;
    --swagger)
      exec $xion_dir/scripts/proto-gen.sh --swagger
      shift
      ;;
    -h|--help)
      show_help
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
    esac
  done
}

# Only execute main if script is run directly (not sourced)
# This works in all POSIX shells including ash, bash, zsh, dash
if [ "${0##*/}" = "proto-gen-ext.sh" ]; then
  main "$@"
fi
