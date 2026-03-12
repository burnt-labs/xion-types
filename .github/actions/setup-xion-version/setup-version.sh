#!/bin/bash
set -eo pipefail

VERSION="${INPUT_VERSION}"

if [[ -z "$VERSION" ]]; then
  echo "Error: INPUT_VERSION is not set"
  exit 1
fi

if [[ "$VERSION" == "dev" ]]; then
  echo "📦 Dev build - using xion HEAD"

  # Initialize and update xion submodule
  git submodule update --init xion

  # Get short SHA
  XION_SHA=$(git -C xion rev-parse --short HEAD)

  # Package version for dev builds
  PACKAGE_VERSION="0.0.0-dev.${XION_SHA}"

  echo "✅ Dev version: ${PACKAGE_VERSION} (xion@${XION_SHA})"

elif [[ "$VERSION" == v* ]]; then
  echo "📦 Release build - version input: ${VERSION}"

  # Initialize xion submodule
  git submodule init xion
  git submodule update --init xion

  cd xion
  git fetch --tags origin

  # Try checking out as a tag first; if not found, treat the
  # trailing segment after the semver as a commit short-hash.
  # e.g. v26.0.1 → tag checkout, v26.0.1-abcd124 → commit abcd124
  if git rev-parse --verify "refs/tags/$VERSION" >/dev/null 2>&1; then
    echo "Checking out tag: $VERSION"
    git checkout "$VERSION"
  elif COMMIT=$(echo "$VERSION" | grep -oP '(?<=-)([0-9a-f]{7,40})$'); then
    echo "Tag not found; checking out commit: $COMMIT"
    git fetch origin
    if ! git cat-file -t "$COMMIT" >/dev/null 2>&1; then
      echo "::error::Commit '$COMMIT' does not exist in xion repo"
      exit 1
    fi
    git checkout "$COMMIT"
  else
    echo "::error::release_tag '$VERSION' is neither a valid tag nor ends with a commit hash"
    exit 1
  fi

  XION_SHA=$(git rev-parse --short HEAD)
  cd ..

  # Stage submodule change so Make's submodule target
  # does not reset it back to the old commit.
  git add xion

  # Strip "v" prefix for package version
  PACKAGE_VERSION="${VERSION#v}"

  echo "✅ Release version: ${PACKAGE_VERSION} (xion@${XION_SHA})"

else
  echo "::error::version must start with 'v' (e.g., v1.2.3, v1.2.3-abcd124) or be 'dev'"
  exit 1
fi

# Set outputs
echo "package_version=${PACKAGE_VERSION}" >> $GITHUB_OUTPUT
echo "xion_sha=${XION_SHA}" >> $GITHUB_OUTPUT
