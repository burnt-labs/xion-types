#!/bin/sh

set -eo pipefail

# Get the directory of this script
base_dir="$(cd "$(dirname "$(dirname "$0")")" && pwd)"
xion_dir="$base_dir/xion"
script_dir="$(dirname "$0")"

show_help() {
  echo "Usage: $0 [TAG]"
  echo ""
  echo "Initialize/update the xion submodule and checkout a specific tag"
  echo ""
  echo "ARGUMENTS:"
  echo "  TAG          Git tag to checkout (optional)"
  echo ""
  echo "OPTIONS:"
  echo "  -h, --help   Show this help message"
  echo ""
  echo "If no tag is provided, the latest release will be fetched from GitHub API"
  echo ""
  echo "This script will automatically initialize and update the xion submodule before"
  echo "checking out the specified tag."
}

checkout_tag() {
  local tag="$1"
  
  # Initialize and update the xion submodule specifically
  echo "Initializing and updating xion submodule..."
  cd "$base_dir"
  git submodule init xion
  git submodule update xion 
  
  if [ ! -d "$xion_dir" ]; then
    echo "Error: xion submodule directory not found at $xion_dir after submodule update" >&2
    exit 1
  fi
  
  echo "Entering xion submodule directory: $xion_dir"
  cd "$xion_dir"
  
  # Fetch all tags
  echo "Fetching tags..."
  git fetch --tags
  
  # Check if tag exists
  if ! git rev-parse --verify "refs/tags/$tag" >/dev/null 2>&1; then
    echo "Error: Tag '$tag' does not exist" >&2
    exit 1
  fi
  
  # Checkout the tag
  echo "Checking out tag: $tag"
  git checkout "$tag"
  
  echo "Successfully checked out xion submodule to tag: $tag"
}

main() {
  # Show help if requested
  if [[ "$1" == "-h" ]] || [[ "$1" == "--help" ]]; then
    show_help
    exit 0
  fi
  
  local tag="$1"
  
  # If no tag provided, get latest release
  if [ -z "$tag" ]; then
    tag=$("$script_dir/get-xion-latest.sh")
    echo "Using latest release tag: $tag"
  fi
  
  checkout_tag "$tag"

  # tmp script fix
  cd "$xion_dir"
  git checkout d0d7b49405da8fa368729ee5cff99504a7927412 scripts/proto-gen.sh
}

# Only execute main if script is run directly (not sourced)
if [ "${0##*/}" = "checkout-xion-tag.sh" ]; then
  main "$@"
fi
