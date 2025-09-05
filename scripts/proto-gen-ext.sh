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


gen_ts() {
  local dirs=$(get_proto_dirs "$proto_dir" $proto_paths)  # Use both local and dependency paths
  ts_dir=$xion_types_dir/ts
  types_dir=$ts_dir/types
  mkdir -p $types_dir

  # Install npm dependencies first
  cd $ts_dir
  npm install

  # Work from the proto directory where buf.yaml has dependencies defined
  cd $proto_dir
  export PATH="$ts_dir/node_modules/.bin:$PATH"

  # # Generate ts for local proto files only, with include-imports to get dependencies
  for dir in $dirs; do
    for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
      echo "generating for file $file"
      buf generate $file \
        --include-imports \
        --template "$buf_dir/buf.gen.ts.yaml" \
        --output $xion_types_dir
    done
  done
}

gen_swift() {
  local dirs=$(get_proto_dirs "$proto_dir" $proto_paths)  # Use both local and dependency paths
  swift_dir=$xion_types_dir/swift
  types_dir=$swift_dir/types
  mkdir -p $types_dir

  # Work from the proto directory where buf.yaml has dependencies defined
  cd $proto_dir
  
  # Generate swift for local proto files only, with include-imports to get dependencies
  for dir in $dirs; do
    for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
      echo "generating for file $file"
      buf generate $file \
        --include-imports \
        --template "$buf_dir/buf.gen.swift.yaml" \
        --output $xion_types_dir
    done
  done
}

gen_kotlin() {
  local dirs=$(get_proto_dirs "$proto_dir" $proto_paths)  # Use both local and dependency paths
  kotlin_dir=$xion_types_dir/kotlin
  types_dir=$kotlin_dir/types
  mkdir -p $types_dir

  # Install protoc if not available (for Alpine Linux in Docker)
  if ! command -v protoc >/dev/null 2>&1; then
    echo "Installing protoc for Kotlin generation..."
    if command -v apk >/dev/null 2>&1; then
      apk add --no-cache protobuf-dev
    fi
  fi

  # Work from the proto directory where buf.yaml has dependencies defined
  cd $proto_dir

  # Generate kotlin for all proto files, with error handling for problematic ones
  for dir in $dirs; do
    for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
      echo "generating for file $file"
      if ! buf generate $file \
        --include-imports \
        --template "$buf_dir/buf.gen.kotlin.yaml" \
        --output $xion_types_dir 2>/dev/null; then
        echo "failed to generate $file (likely due to gogoproto or missing imports), skipping"
        continue
      fi
    done
  done
  
  # Clean up any .proto.kt files (keep only .kt files)
  echo "Cleaning up .proto.kt files..."
  find "$kotlin_dir/types" -name "*.proto.kt" -delete 2>/dev/null || true
}

show_help() {
  echo "Usage: $0 [OPTIONS]"
  echo ""
  echo "Generate protocol buffer types for various languages"
  echo ""
  echo "OPTIONS:"
  echo "  --swagger    Generate Swagger documentation"
  echo "  --ts         Generate TypeScript types"
  echo "  --swift      Generate Swift types"
  echo "  --kotlin     Generate Kotlin types"
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
    --swagger)
      exec $xion_dir/scripts/proto-gen.sh --swagger
      shift
      ;;
    --ts)
      gen_ts
      shift
      ;;
    --swift)
      gen_swift
      shift
      ;;
    --kotlin)
      gen_kotlin
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
