#!/usr/bin/env bash
# Stamp version and build Python wheel for xion-types.
#
# Usage: python.sh <version>
#
# Arguments:
#   version   Semver string (with or without v prefix)
#
# Outputs:
#   Wheel and sdist in dist/
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
cd "$ROOT"

# Stamp version
sed -i "s/^version = .*/version = \"$VERSION\"/" pyproject.toml
sed -i "s/__version__ = .*/__version__ = \"$VERSION\"/" python/__init__.py
echo "Stamped version: $VERSION"

pip install build twine
python -m build --wheel --sdist
twine check dist/*

# Verify package contents
unzip -l dist/*.whl | grep -q "xion_types/cosmos/" || { echo "cosmos missing from wheel"; exit 1; }
unzip -l dist/*.whl | grep -q "xion_types/xion/"   || { echo "xion missing from wheel"; exit 1; }
echo "Package built and verified: $VERSION"
