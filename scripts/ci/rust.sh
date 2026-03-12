#!/usr/bin/env bash
# Stamp version and publish Rust crate for xion-types.
#
# Usage: rust.sh <version>
#
# Arguments:
#   version   Semver string (with or without v prefix)
#
# Environment (optional):
#   CARGO_REGISTRY_TOKEN  crates.io token (required for publish)
#   PUBLISH               set to "true" to publish after build
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
cd "$ROOT/rust"

# Stamp version
sed -i "s/^version = .*/version = \"$VERSION\"/" Cargo.toml
echo "Stamped version: $VERSION"

cargo build --release
cargo package --allow-dirty
echo "Crate packaged: $VERSION"

if [[ "${PUBLISH:-}" == "true" ]]; then
  cargo publish --allow-dirty
  echo "Published xion-types@$VERSION to crates.io"
fi
