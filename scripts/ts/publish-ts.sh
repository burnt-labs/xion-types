#!/usr/bin/env bash
# Publish TypeScript protobuf types to npm.
#
# Required env:
#   VERSION          - semver without v prefix (e.g. 1.2.3)
#   NODE_AUTH_TOKEN  - npm publish token
#
# Optional env:
#   DRY_RUN          - set to "true" to skip the actual publish
set -euo pipefail

: "${VERSION:?VERSION is required}"

cd "$(git rev-parse --show-toplevel)/ts"

# Stamp version
npm version "$VERSION" --no-git-tag-version
echo "✅ Set version: $VERSION"

# Install deps
npm install

# Determine dist-tag
if echo "$VERSION" | grep -qE '\-rc[0-9]*$'; then
  TAG=rc
else
  TAG=latest
fi
echo "📦 npm dist-tag: $TAG"

# Publish
if [[ "${DRY_RUN:-}" == "true" ]]; then
  echo "🏜️  DRY_RUN: would run npm publish --provenance --access public --tag $TAG"
  npm pack --dry-run
else
  npm publish --provenance --access public --tag "$TAG" --verbose
fi

echo "✅ Published @burnt-labs/xion-types@$VERSION to npm (tag=$TAG)"
