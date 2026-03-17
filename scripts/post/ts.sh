#!/bin/bash
# Post-processor for ts: generate CosmWasm contract client types
# and fix ts-proto codegen issues.
set -eo pipefail

ROOT_DIR="$(cd "$(dirname "$(dirname "$(dirname "$0")")")" && pwd)"
TS_TYPES="$ROOT_DIR/ts/types"

bash "$ROOT_DIR/scripts/post/contracts-codegen.sh" "$TS_TYPES/contracts"

# ts-proto emits `interface UnaryMethodDefinitionishR` as non-exported,
# which causes TS4023 errors when bundle.ts re-exports those modules.
# macOS (BSD) sed requires -i '' while GNU sed uses -i alone.
if sed --version >/dev/null 2>&1; then
  SED_INPLACE=(sed -i)
else
  SED_INPLACE=(sed -i '')
fi
find "$TS_TYPES" -name '*.ts' -exec \
  "${SED_INPLACE[@]}" 's/^interface UnaryMethodDefinitionishR/export interface UnaryMethodDefinitionishR/' {} +
