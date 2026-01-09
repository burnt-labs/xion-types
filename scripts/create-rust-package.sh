#!/bin/sh

set -eo pipefail

# Get the directory of this script
script_dir="$(cd "$(dirname "$0")" && pwd)"
project_root="$(dirname "$script_dir")"
rust_dir="$project_root/rust"
types_dir="$rust_dir/types"

show_help() {
  echo "Usage: $0 [OPTIONS]"
  echo ""
  echo "Create the Rust package structure from generated protobuf files"
  echo ""
  echo "This script:"
  echo "  1. Verifies that protobuf files have been generated"
  echo "  2. Runs the Python setup script to create module structure"
  echo "  3. Optionally builds/verifies the package"
  echo ""
  echo "OPTIONS:"
  echo "  --build        Build the package after setup (cargo build)"
  echo "  --check        Check the package after setup (cargo check)"
  echo "  --test         Run tests after setup (cargo test)"
  echo "  --all          Run setup, check, build, and test"
  echo "  -h, --help     Show this help message"
  echo ""
  echo "Prerequisites:"
  echo "  - Python 3.6+ must be installed"
  echo "  - Run 'make proto-gen-rust' first to generate protobuf files"
  echo "  - Rust toolchain must be installed for --build/--check/--test"
}

check_prerequisites() {
  # Check if types directory exists
  if [ ! -d "$types_dir" ]; then
    echo "❌ Error: rust/types directory not found" >&2
    echo "   Run 'make proto-gen-rust' first to generate the Rust types" >&2
    exit 1
  fi

  # Check if there are any .rs files
  rs_file_count=$(find "$types_dir" -name "*.rs" -type f 2>/dev/null | wc -l)
  rs_file_count=$(echo "$rs_file_count" | tr -d '[:space:]')
  if [ -z "$rs_file_count" ] || [ "$rs_file_count" -eq 0 ]; then
    echo "❌ Error: No Rust files found in rust/types/" >&2
    echo "   Run 'make proto-gen-rust' first to generate the Rust types" >&2
    exit 1
  fi

  # Check if Python is available
  if ! command -v python3 >/dev/null 2>&1; then
    echo "❌ Error: python3 is required but not installed" >&2
    exit 1
  fi

  echo "✅ Prerequisites check passed"
}

run_setup() {
  echo "🔧 Setting up Rust package structure..."
  echo "   Running: python3 scripts/setup-rust-package.py"
  
  cd "$project_root"
  if ! python3 "$script_dir/setup-rust-package.py"; then
    echo "❌ Error: Failed to setup Rust package structure" >&2
    exit 1
  fi
  
  echo "✅ Rust package structure created"
}

run_cargo_check() {
  echo "🔍 Checking Rust package..."
  cd "$rust_dir"
  if ! cargo check; then
    echo "❌ Error: Cargo check failed" >&2
    exit 1
  fi
  echo "✅ Cargo check passed"
}

run_cargo_build() {
  echo "🔨 Building Rust package..."
  cd "$rust_dir"
  if ! cargo build; then
    echo "❌ Error: Cargo build failed" >&2
    exit 1
  fi
  echo "✅ Cargo build succeeded"
}

run_cargo_test() {
  echo "🧪 Running Rust tests..."
  cd "$rust_dir"
  if ! cargo test; then
    echo "❌ Error: Cargo test failed" >&2
    exit 1
  fi
  echo "✅ Cargo test passed"
}

main() {
  local do_build=false
  local do_check=false
  local do_test=false

  # Parse arguments
  while [ $# -gt 0 ]; do
    case "$1" in
      -h|--help)
        show_help
        exit 0
        ;;
      --build)
        do_build=true
        shift
        ;;
      --check)
        do_check=true
        shift
        ;;
      --test)
        do_test=true
        shift
        ;;
      --all)
        do_check=true
        do_build=true
        do_test=true
        shift
        ;;
      *)
        echo "Unknown option: $1" >&2
        show_help
        exit 1
        ;;
    esac
  done

  # Run setup
  check_prerequisites
  run_setup

  # Run optional cargo commands
  if [ "$do_check" = true ] || [ "$do_build" = true ] || [ "$do_test" = true ]; then
    # Check if Rust is installed
    if ! command -v cargo >/dev/null 2>&1; then
      echo "⚠️  Warning: cargo is not installed, skipping cargo commands" >&2
      echo "   Install Rust from https://rustup.rs/" >&2
      exit 0
    fi
  fi

  if [ "$do_check" = true ]; then
    run_cargo_check
  fi

  if [ "$do_build" = true ]; then
    run_cargo_build
  fi

  if [ "$do_test" = true ]; then
    run_cargo_test
  fi

  echo ""
  echo "✅ Rust package creation complete!"
  echo "   Package location: $rust_dir"
}

# Only execute main if script is run directly (not sourced)
if [ "${0##*/}" = "create-rust-package.sh" ]; then
  main "$@"
fi

