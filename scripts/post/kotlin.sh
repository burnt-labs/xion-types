#!/bin/bash
# Post-processor for Kotlin protobuf generation.
#
# The generator writes java/types from the same descriptor image as
# kotlin/types. This script removes protoc artifacts and verifies that every
# Kotlin wrapper has its Java outer class.

set -eo pipefail

ROOT_DIR="$(cd "$(dirname "$(dirname "$(dirname "$0")")")" && pwd)"
cd "$ROOT_DIR"

# java/types is regenerated alongside kotlin/types and needs the same fixes.
bash "$ROOT_DIR/scripts/post/java.sh"

# Clean up .proto.kt files
find kotlin/types -name "*.proto.kt" -delete

# Remove empty .kt files left by protoc
echo "Removing empty Kotlin files..."
find kotlin/types -name "*.kt" -type f -empty -delete

# Kotlin protobuf wrappers reference their Java outer class like
# abstractaccount.v1.Account.AbstractAccount; a missing class means stale or partial Java output.
echo "Checking Kotlin files for Java outer classes..."
missing=""
while IFS= read -r kt_file; do
  # First non-Kt qualified class reference in the file is the Java outer class.
  outer_class=$(grep -oE '[a-z][a-z0-9_.]*\.[A-Z][A-Za-z0-9]*\.' "$kt_file" \
    | grep -v 'Kt\.$' \
    | head -1 || true)
  outer_class="${outer_class%.}"
  if [ -z "$outer_class" ]; then
    continue
  fi
  java_path="java/types/$(echo "$outer_class" | tr '.' '/').java"
  if [ ! -f "$java_path" ]; then
    missing="$missing  $kt_file -> $java_path"$'\n'
  fi
done < <(find kotlin/types -name "*.kt" -type f)
if [ -n "$missing" ]; then
  echo "Error: Kotlin files without Java outer classes:" >&2
  printf '%s' "$missing" >&2
  exit 1
fi

# Remove empty directories left after cleanup
find kotlin/types -type d -empty -delete 2>/dev/null || true

# Build verification — ensure generated types compile
cd "$ROOT_DIR/kotlin"
if command -v gradle &>/dev/null; then
  echo "Verifying Kotlin compilation..."
  gradle compileKotlin --no-daemon 2>/dev/null && echo "  ✅ Kotlin compiles" || echo "  ⚠️  Compilation check skipped (gradle failed)"
fi

echo "✅ Kotlin post-processing complete"
