#!/usr/bin/env bash
# Organize downloaded GitHub Actions artifacts into their correct directory layout.
#
# Usage: organize-artifacts.sh [directory]
#
# Arguments:
#   directory   Working directory containing generated-types-* dirs (default: .)
#
# Expects directories named generated-types-<language>/ and moves their contents
# into the correct per-language output paths.
set -euo pipefail

show_help() {
  sed -n '2,/^set /{ /^#/s/^# \?//p }' "$0"
}

if [[ "${1:-}" == "-h" ]] || [[ "${1:-}" == "--help" ]]; then
  show_help
  exit 0
fi

WORKDIR="${1:-.}"
cd "$WORKDIR"

for dir in generated-types-*/; do
  [ -d "$dir" ] || continue
  lang="${dir#generated-types-}"
  lang="${lang%/}"
  case "$lang" in
    python) mkdir -p python/xion_types && cp -r "$dir"/* python/xion_types/ ;;
    ruby)   cp -r "$dir"/* ruby/ ;;
    docs)   cp -r "$dir"/* docs/ ;;
    swift)  mkdir -p swift/Sources && cp -r "$dir"/* swift/Sources/ ;;
    *)      mkdir -p "$lang/types" && cp -r "$dir"/* "$lang/types/" ;;
  esac
  echo "Organized: $lang"
done

rm -rf generated-types-*/
echo "Artifacts organized"
