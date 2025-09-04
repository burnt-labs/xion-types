#!/bin/sh

set -eo pipefail

show_help() {
  echo "Usage: $0"
  echo ""
  echo "Get the latest release tag for the xion repository from GitHub API"
  echo ""
  echo "OPTIONS:"
  echo "  -h, --help   Show this help message"
  echo ""
  echo "Outputs the latest release tag to stdout"
}

get_latest_release() {
  local repo="burnt-labs/xion"
  local api_url="https://api.github.com/repos/$repo/releases/latest"
  
  echo "Fetching latest release from GitHub API..." >&2
  
  # Use curl to get the latest release info
  local release_info
  if command -v curl >/dev/null 2>&1; then
    release_info=$(curl -s "$api_url")
  else
    echo "Error: curl is required but not installed" >&2
    exit 1
  fi
  
  # Extract tag_name from JSON response
  local tag_name
  if command -v jq >/dev/null 2>&1; then
    # Clean control characters before passing to jq
    tag_name=$(echo "$release_info" | tr -d '\000-\037' | jq -r '.tag_name' 2>/dev/null || echo "")
  fi
  
  # Fallback to grep if jq failed or is not available
  if [ -z "$tag_name" ] || [ "$tag_name" = "null" ]; then
    tag_name=$(echo "$release_info" | grep -o '"tag_name":"[^"]*"' | cut -d'"' -f4)
  fi
  
  if [ "$tag_name" = "null" ] || [ -z "$tag_name" ]; then
    echo "Error: Could not fetch latest release tag" >&2
    exit 1
  fi
  
  echo "$tag_name"
}

main() {
  # Show help if requested
  if [[ "$1" == "-h" ]] || [[ "$1" == "--help" ]]; then
    show_help
    exit 0
  fi
  
  get_latest_release
}

# Only execute main if script is run directly (not sourced)
if [ "${0##*/}" = "get-xion-latest.sh" ]; then
  main "$@"
fi
