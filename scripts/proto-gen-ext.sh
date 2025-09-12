#!/bin/sh

set -eo pipefail

# Get the directory of this script, used to source other scripts
xion_types_dir="$(cd "$(dirname "$(dirname "$0")")" && pwd)"
xion_dir="$xion_types_dir/xion"
proto_dir="$xion_dir/proto"
buf_dir="$xion_types_dir/buf"

# This functions as an extension of the proto-gen.sh script from xion
# this gives us a consistent souce of proto paths
cd $xion_dir
. ./scripts/proto-gen.sh
cd $xion_types_dir

gen_language() {
  local language=$1
  local skip_problematic=${2:-true}  # Default to true if not specified
  
  local dirs=$(get_proto_dirs "$proto_dir" $proto_paths)  # Use both local and dependency paths
  lang_dir=$xion_types_dir/$language
  types_dir=$lang_dir/types
  mkdir -p $types_dir

  # Work from the proto directory where buf.yaml has dependencies defined
  cd $proto_dir

  # For local plugins, generate file by file (existing behavior)
  for dir in $dirs; do
    for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
      # Skip problematic files if skip_problematic is true
      if [ "$skip_problematic" = "true" ] && echo "$file" | grep -q \
          -e "packet-forward-middleware" \
          -e "regen-network/protobuf" \
          -e "poa/genesis.proto" \
          -e "tokenfactory/v1beta1"; then
        echo "skipping problematic file $file"
        continue
      fi
      echo "generating $language for file $file"

      buf generate $file \
        --include-imports \
        --template "$buf_dir/buf.gen.$language.yaml" \
        --output $xion_types_dir
    done
  done
  
  # Special post-processing for Kotlin
  if [ "$language" = "kotlin" ]; then
    echo "Cleaning up .proto.kt files..."
    find "$lang_dir/types" -name "*.proto.kt" -delete 2>/dev/null || true
  fi
}

show_help() {
  echo "Usage: $0 [OPTIONS]"
  echo ""
  echo "Generate protocol buffer types for various languages"
  echo ""
  echo "OPTIONS:"
  echo "  --cpp        Generate C++ types"
  echo "  --csharp     Generate C# types"
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
    --cpp)
      init_protoc && gen_language cpp
      shift
      ;;
    --csharp)
      init_protoc && gen_language csharp
      shift
      ;;
    --java)
      init_protoc && gen_language java 
      shift
      ;;
    --kotlin)
      init_protoc && gen_language kotlin
      shift
      ;;
    --objc)
      init_protoc && gen_language objc
      shift
      ;;
    --php)
      init_protoc && gen_language php
      shift
      ;;
    --python)
      init_protoc && gen_language python
      shift
      ;;
    --ruby)
      init_protoc && gen_language ruby
      shift
      ;;
    --rust)
      init_rust && gen_language rust
      shift
      ;;
    --scala)
      init_scala && gen_language scala
      shift
      ;;
    --swift)
      init_swift && gen_language swift
      shift
      ;;
    --ts)
      init_ts && gen_language ts
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
