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

# Ensure osmosis tokenfactory types are exported from index.ts.
# buf generates them into ts/types/osmosis/ but they are not added
# to index.ts automatically (no telescope bundle step for osmosis).
INDEX="$TS_TYPES/index.ts"
OSMOSIS_EXPORTS=(
  "./osmosis/tokenfactory/v1beta1/tx"
  "./osmosis/tokenfactory/v1beta1/query"
  "./osmosis/tokenfactory/v1beta1/genesis"
  "./osmosis/tokenfactory/v1beta1/params"
  "./osmosis/tokenfactory/v1beta1/authorityMetadata"
)
for mod in "${OSMOSIS_EXPORTS[@]}"; do
  export_line="export * from \"$mod\";"
  if [ -f "$TS_TYPES/${mod}.ts" ] && ! grep -qF "$export_line" "$INDEX"; then
    echo "$export_line" >> "$INDEX"
    echo "  added to index.ts: $export_line"
  fi
done
