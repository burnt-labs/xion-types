#!/usr/bin/env bash
# Publish TypeScript protobuf types to npm registry via pnpm.
#
# Usage: ts.sh <version>
#
# Arguments:
#   version   Semver string (with or without v prefix, e.g. v1.2.3 or 1.2.3)
#
# Environment (optional):
#   NODE_AUTH_TOKEN  npm publish token (required for actual publish)
#   DRY_RUN          set to "true" to skip the actual publish
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
  echo "Error: version is required (pass as argument or set VERSION env)" >&2
  show_help >&2
  exit 1
fi

cd "$(git rev-parse --show-toplevel)/ts"

# Stamp version
pnpm version "$VERSION" --no-git-tag-version
echo "Set version: $VERSION"

# Install deps
pnpm install

# Determine dist-tag
if echo "$VERSION" | grep -qE '\-rc[0-9]*$'; then
  TAG=rc
else
  TAG=latest
fi
echo "dist-tag: $TAG"

# Publish
if [[ "${DRY_RUN:-}" == "true" ]]; then
  echo "DRY_RUN: would run pnpm publish --provenance --access public --tag $TAG"
  pnpm pack --dry-run
else
  pnpm publish --provenance --access public --tag "$TAG" --verbose
fi

echo "Published @burnt-labs/xion-types@$VERSION (tag=$TAG)"
