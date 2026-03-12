#!/usr/bin/env bash
# Stamp version and build Ruby gem for xion_types.
#
# Usage: ruby.sh <version>
#
# Arguments:
#   version   Semver string (with or without v prefix)
#
# Environment (optional):
#   RUBYGEMS_API_KEY  RubyGems API key (required for publish)
#   PUBLISH           set to "true" to publish after build
set -euo pipefail

show_help() {
  sed -n '2,/^set /{ /^#/s/^# \?//p }' "$0"
}

if [[ "${1:-}" == "-h" ]] || [[ "${1:-}" == "--help" ]]; then
  show_help
  exit 0
fi

VERSION="${1:-${VERSION:-}}"
VERSION="${VERSION#v}"

if [[ -z "$VERSION" ]]; then
  echo "Error: version is required" >&2
  show_help >&2
  exit 1
fi

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT/ruby"

# Stamp version
sed -i "s/VERSION = .*/VERSION = \"$VERSION\"/" lib/xion_types/version.rb
echo "Stamped version: $VERSION"

gem build xion_types.gemspec
echo "Gem built: $(ls *.gem)"

if [[ "${PUBLISH:-}" == "true" ]]; then
  if [[ -z "${RUBYGEMS_API_KEY:-}" ]]; then
    echo "Error: RUBYGEMS_API_KEY is required for publish" >&2
    exit 1
  fi
  mkdir -p ~/.gem
  printf -- "---\n:rubygems_api_key: %s\n" "$RUBYGEMS_API_KEY" > ~/.gem/credentials
  chmod 600 ~/.gem/credentials
  gem push *.gem
  echo "Published xion_types@$VERSION to RubyGems"
fi
