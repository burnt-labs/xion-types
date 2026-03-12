#!/usr/bin/env bash
# Check whether a version is published for a given language's package registry.
#
# Usage: check-registries.sh <language> <tags_json>
#
# Arguments:
#   language    One of: ts, python, rust, ruby, kotlin, swift
#   tags_json   JSON array of tags, e.g. '["v26.0.0","v26.1.0"]'
#
# Outputs (stdout):
#   Per-tag status lines.
#   Final line: "missing=<space-separated tags>" or "missing=" if all published.
#
# Exit code:
#   0  always (check "missing=" output to determine result)
set -euo pipefail

show_help() {
  sed -n '2,/^set /{ /^#/s/^# \?//p }' "$0"
}

if [[ "${1:-}" == "-h" ]] || [[ "${1:-}" == "--help" ]]; then
  show_help
  exit 0
fi

LANGUAGE="${1:-${LANGUAGE:-}}"
TAGS_JSON="${2:-${TAGS_JSON:-}}"

if [[ -z "$LANGUAGE" ]] || [[ -z "$TAGS_JSON" ]]; then
  echo "Error: language and tags_json are required" >&2
  show_help >&2
  exit 1
fi

MISSING=""

for TAG in $(echo "$TAGS_JSON" | jq -r '.[]'); do
  VERSION="${TAG#v}"
  PUBLISHED=false

  case "$LANGUAGE" in
    ts)
      if npm view "@burnt-labs/xion-types@$VERSION" version >/dev/null 2>&1; then
        PUBLISHED=true
      fi
      ;;
    python)
      HTTP=$(curl -s -o /dev/null -w '%{http_code}' "https://pypi.org/pypi/xion-types/$VERSION/json")
      if [ "$HTTP" = "200" ]; then
        PUBLISHED=true
      fi
      ;;
    rust)
      HTTP=$(curl -s -o /dev/null -w '%{http_code}' "https://crates.io/api/v1/crates/xion-types/$VERSION")
      if [ "$HTTP" = "200" ]; then
        PUBLISHED=true
      fi
      ;;
    ruby)
      VERSIONS=$(curl -s "https://rubygems.org/api/v1/versions/xion_types.json" 2>/dev/null || echo "[]")
      if echo "$VERSIONS" | jq -e ".[] | select(.number == \"$VERSION\")" >/dev/null 2>&1; then
        PUBLISHED=true
      fi
      ;;
    kotlin)
      HTTP=$(curl -s -o /dev/null -w '%{http_code}' \
        "https://repo1.maven.org/maven2/io/github/burnt-labs/xion-types-kotlin/$VERSION/xion-types-kotlin-$VERSION.pom")
      if [ "$HTTP" = "200" ]; then
        PUBLISHED=true
      fi
      ;;
    swift)
      HTTP=$(curl -s -o /dev/null -w '%{http_code}' \
        "https://raw.githubusercontent.com/CocoaPods/Specs/master/Specs/a/7/5/XionTypes/$VERSION/XionTypes.podspec.json")
      if [ "$HTTP" = "200" ]; then
        PUBLISHED=true
      else
        if git tag -l "$TAG" | grep -q "$TAG"; then
          PUBLISHED=true
        fi
      fi
      ;;
    *)
      echo "Unknown language: $LANGUAGE" >&2
      exit 1
      ;;
  esac

  if [ "$PUBLISHED" = "false" ]; then
    echo "MISSING $LANGUAGE: $VERSION (tag $TAG)"
    MISSING="$MISSING $TAG"
  else
    echo "OK $LANGUAGE: $VERSION (tag $TAG)"
  fi
done

MISSING=$(echo "$MISSING" | xargs)
echo "missing=$MISSING"
