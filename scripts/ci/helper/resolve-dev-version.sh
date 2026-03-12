#!/usr/bin/env bash
# Resolve a dev build version from BSR ref and optional base version.
#
# Usage: resolve-dev-version.sh [--ref <bsr_ref>] [--base <base_version>]
#
# Options:
#   --ref   BSR label — tag (v26.0.0), commit label, or empty for latest
#   --base  Base version override (e.g. v26.1.0)
#
# Outputs (one per line):
#   version=<semver>
#   release_tag=<tag>
#   bsr_module=<bsr_ref>
set -euo pipefail

show_help() {
  sed -n '2,/^set /{ /^#/s/^# \?//p }' "$0"
}

REF=""
BASE=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    -h|--help) show_help; exit 0 ;;
    --ref)  REF="$2"; shift 2 ;;
    --base) BASE="$2"; shift 2 ;;
    *) echo "Unknown option: $1" >&2; show_help >&2; exit 1 ;;
  esac
done

# Build BSR module reference
if [[ -n "$REF" ]]; then
  BSR_MODULE="buf.build/burnt-labs/xion:${REF}"
else
  BSR_MODULE="buf.build/burnt-labs/xion"
fi

if [[ "$REF" == v* ]] && [[ -z "$BASE" ]]; then
  # Explicit tag like v26.0.0 — use as-is
  VERSION="${REF#v}"
  TAG="$REF"
else
  # No tag or dev build — build a pre-release version
  SHORT="${REF:-dev}"
  if [[ -n "$BASE" ]]; then
    BASE_VER="${BASE#v}"
  else
    if [[ "$REF" == v* ]]; then
      BASE_VER="${REF#v}"
    else
      BASE_VER="0.0.1"
    fi
  fi
  VERSION="${BASE_VER}-dev.${SHORT}"
  TAG="v${VERSION}"
fi

echo "version=$VERSION"
echo "release_tag=$TAG"
echo "bsr_module=$BSR_MODULE"
