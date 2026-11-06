#!/bin/bash
# Post-processor for Java protobuf generation.
#
# protoc 24 gencode reads descriptor.proto messages through their PARSER
# field, which protobuf-java 4.x makes private; parser() works on 3.x and 4.x.

set -eo pipefail

ROOT_DIR="$(cd "$(dirname "$(dirname "$(dirname "$0")")")" && pwd)"
cd "$ROOT_DIR"

if sed --version >/dev/null 2>&1; then
  SED_INPLACE=(sed -i)
else
  SED_INPLACE=(sed -i '')
fi
files=$(grep -rlE 'com\.google\.protobuf\.DescriptorProtos\.[A-Za-z]+\.PARSER' java/types || true)
for f in $files; do
  "${SED_INPLACE[@]}" -E 's/(com\.google\.protobuf\.DescriptorProtos\.[A-Za-z]+)\.PARSER/\1.parser()/g' "$f"
done

echo "✅ Java post-processing complete"
