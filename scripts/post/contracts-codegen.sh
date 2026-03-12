#!/bin/bash
# Shared contract codegen: generate CosmWasm contract client types.
#
# Usage: contracts-codegen.sh <output-dir>
#
# Generates JSON schemas from Rust contracts via `cargo schema`,
# then TypeScript client types via `ts-codegen`.
#
# Required tools: cargo, ts-codegen
# Required: contracts submodule checked out

set -eo pipefail

OUTPUT_DIR="$1"
if [ -z "$OUTPUT_DIR" ]; then
  echo "Usage: contracts-codegen.sh <output-dir>"
  exit 1
fi

ROOT_DIR="$(cd "$(dirname "$(dirname "$(dirname "$0")")")" && pwd)"
CONTRACTS_DIR="$ROOT_DIR/contracts/contracts"
CODEGEN_TMP="$ROOT_DIR/.ts-codegen-tmp"

if [ ! -d "$CONTRACTS_DIR" ]; then
  echo "⚠️  contracts submodule not found, skipping contract codegen"
  exit 0
fi

if ! command -v cargo &>/dev/null; then
  echo "⚠️  cargo not found, skipping contract codegen"
  exit 0
fi
if ! command -v ts-codegen &>/dev/null; then
  echo "⚠️  ts-codegen not found, skipping contract codegen"
  exit 0
fi

rm -rf "$CODEGEN_TMP"

# Generate JSON schemas from Rust contracts
cd "$CONTRACTS_DIR"
for dir in */; do
  dir="${dir%/}"
  echo "  schema: $dir"
  cargo schema --manifest-path "$dir/Cargo.toml"
  mkdir -p "$CODEGEN_TMP/$dir/schema"
  mv schema "$CODEGEN_TMP/$dir/"
done

# Generate TypeScript client types from schemas
cd "$ROOT_DIR"
for contract in "account" "treasury"; do
  echo "  ts-codegen: $contract"
  ts-codegen generate \
    --plugin client \
    --plugin react-query \
    --plugin message-composer \
    --schema "$CODEGEN_TMP/$contract/schema" \
    --out "$OUTPUT_DIR/$contract/ts" \
    --name "$contract" \
    --no-bundle \
    --version v4 \
    --optionalClient \
    --mutations \
    --queryKeys \
    --queryFactory
done

# Clean up temp dir
rm -rf "$CODEGEN_TMP"

echo "  ✅ Contract types generated in $OUTPUT_DIR"
