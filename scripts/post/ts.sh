#!/bin/bash
# Post-processor for ts (Telescope): generate CosmWasm contract client types
set -eo pipefail

ROOT_DIR="$(cd "$(dirname "$(dirname "$(dirname "$0")")")" && pwd)"

bash "$ROOT_DIR/scripts/post/contracts-codegen.sh" "$ROOT_DIR/ts/types/contracts"
