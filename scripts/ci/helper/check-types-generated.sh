#!/usr/bin/env bash
# Verify that protobuf generation produced output for a given language.
#
# Usage: check-types-generated.sh <language>
#
# Arguments:
#   language   Language name matching buf.gen.<lang>.yaml conventions
set -euo pipefail

show_help() {
  sed -n '2,/^set /{ /^#/s/^# \?//p }' "$0"
}

if [[ "${1:-}" == "-h" ]] || [[ "${1:-}" == "--help" ]]; then
  show_help
  exit 0
fi

LANGUAGE="${1:-}"

if [[ -z "$LANGUAGE" ]]; then
  echo "Error: language is required" >&2
  show_help >&2
  exit 1
fi

# Determine output directory (must match buf.gen.<lang>.yaml output paths)
case "$LANGUAGE" in
  python) DIR="python/xion_types" ;;
  ruby)   DIR="ruby/lib/xion_types" ;;
  swift)  DIR="swift/Sources" ;;
  docs)   DIR="docs" ;;
  *)      DIR="${LANGUAGE}/types" ;;
esac

if [ -d "$DIR" ] && [ "$(ls -A "$DIR")" ]; then
  COUNT=$(find "$DIR" -type f | wc -l)
  echo "$LANGUAGE: $COUNT files generated in $DIR"
else
  echo "$LANGUAGE: no output in $DIR" >&2
  exit 1
fi
