#!/usr/bin/env bash
# Publish TypeScript protobuf types to npm registry via pnpm.
#
# Usage: ts.sh [--dry-run] <version>
#
# Arguments:
#   version     Semver string (with or without v prefix, e.g. v1.2.3 or 1.2.3)
#
# Flags:
#   --dry-run   Pack without publishing
#   -h, --help  Show this help
set -euo pipefail

show_help() {
  sed -n '2,/^set /{ /^#/s/^# \?//p }' "$0"
}

DRY_RUN=false
VERSION=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    -h|--help)    show_help; exit 0 ;;
    --dry-run)    DRY_RUN=true; shift ;;
    -*)           echo "Unknown flag: $1" >&2; show_help >&2; exit 1 ;;
    *)            VERSION="$1"; shift ;;
  esac
done

VERSION="${VERSION#v}"

if [[ -z "$VERSION" ]]; then
  echo "Error: version is required" >&2
  show_help >&2
  exit 1
fi

cd "$(git rev-parse --show-toplevel)/ts"

# Stamp version
pnpm version "$VERSION" --no-git-tag-version --allow-same-version
echo "Set version: $VERSION"

# Install deps and build
pnpm install
pnpm build

# Determine dist-tag
if echo "$VERSION" | grep -qE '\-rc[0-9]*$'; then
  TAG=rc
else
  TAG=latest
fi
echo "dist-tag: $TAG"

PROVENANCE_FLAG=""
if [[ "${GITHUB_ACTIONS:-}" == "true" ]]; then
  PROVENANCE_FLAG="--provenance"
fi

# Publish from dist/ (where the compiled output lives)
cd dist

# Stamp version into the dist copy of package.json
node -e "const p=require('./package.json');p.version='$VERSION';delete p.scripts;require('fs').writeFileSync('./package.json',JSON.stringify(p,null,2))"

if [[ "$DRY_RUN" == "true" ]]; then
  echo "DRY_RUN: would run pnpm publish $PROVENANCE_FLAG --access public --tag $TAG"
  pnpm pack
else
  pnpm publish $PROVENANCE_FLAG --access public --tag "$TAG" --no-git-checks --verbose
fi

echo "Published @burnt-labs/xion-types@$VERSION (tag=$TAG)"
