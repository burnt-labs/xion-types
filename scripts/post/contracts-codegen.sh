#!/bin/bash
# Shared contract codegen: generate CosmWasm contract client types.
#
# Usage: contracts-codegen.sh <output-dir>
#
# Generates JSON schemas from Rust contracts via `cargo run --example schema`,
# then TypeScript client types via `ts-codegen`.
#
# Required tools: cargo, ts-codegen
# Required: burnt-labs/contracts repo checked out at ROOT_DIR/contracts

set -eo pipefail

OUTPUT_DIR="$1"
if [ -z "$OUTPUT_DIR" ]; then
  echo "Usage: contracts-codegen.sh <output-dir>"
  exit 1
fi

ROOT_DIR="$(cd "$(dirname "$(dirname "$(dirname "$0")")")" && pwd)"
CONTRACTS_DIR="$ROOT_DIR/contracts/contracts"
CODEGEN_TMP="$ROOT_DIR/.ts-codegen-tmp"
TS_CODEGEN="$ROOT_DIR/ts/node_modules/.bin/ts-codegen"

if [ ! -d "$CONTRACTS_DIR" ]; then
  echo "⚠️  contracts/ not found, skipping contract codegen (clone burnt-labs/contracts into ./contracts)"
  exit 0
fi

if ! command -v cargo &>/dev/null; then
  echo "⚠️  cargo not found, skipping contract codegen"
  exit 0
fi
if [ ! -x "$TS_CODEGEN" ]; then
  echo "⚠️  ts-codegen not found at $TS_CODEGEN (run pnpm install in ts/)"
  exit 0
fi

rm -rf "$CODEGEN_TMP"
# Clean up any stale schema dirs that would confuse the cargo workspace resolver
rm -rf "$CONTRACTS_DIR/schema"

# Generate JSON schemas from Rust contracts (only those with examples/schema.rs)
for dir in "$CONTRACTS_DIR"/*/; do
  dir="${dir%/}"
  name="$(basename "$dir")"
  [ -f "$dir/examples/schema.rs" ] || continue
  echo "  schema: $name"
  rm -rf "$dir/schema"
  (cd "$dir" && cargo run --example schema)
  mkdir -p "$CODEGEN_TMP/$name"
  mv "$dir/schema" "$CODEGEN_TMP/$name/"
done

# Generate TypeScript client types from schemas and copy schema files to output
cd "$ROOT_DIR"
for contract in "account" "treasury"; do
  echo "  ts-codegen: $contract"
  "$TS_CODEGEN" generate \
    --plugin client \
    --plugin message-composer \
    --schema "$CODEGEN_TMP/$contract/schema" \
    --out "$OUTPUT_DIR/$contract/ts" \
    --name "$contract" \
    --no-bundle \
    --optionalClient

  # Copy schema files to output (alongside the generated ts/ dir)
  cp -r "$CODEGEN_TMP/$contract/schema" "$OUTPUT_DIR/$contract/"
done

# Clean up temp dir
rm -rf "$CODEGEN_TMP"

echo "  ✅ Contract types generated in $OUTPUT_DIR"
