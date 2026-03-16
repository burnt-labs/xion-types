#!/usr/bin/env bash
# Test TypeScript proto compatibility against a dependent project.
#
# Usage: test-ts-compat.sh <project_dir> <tarball>
#
# Arguments:
#   project_dir   Path to the checked-out dependent project
#   tarball       Path to the xion-types .tgz tarball
set -euo pipefail

show_help() {
  sed -n '2,/^set /{ /^#/s/^# \?//p }' "$0"
}

if [[ "${1:-}" == "-h" ]] || [[ "${1:-}" == "--help" ]]; then
  show_help
  exit 0
fi

PROJECT_DIR="${1:-}"
TARBALL="${2:-}"

if [[ -z "$PROJECT_DIR" ]] || [[ -z "$TARBALL" ]]; then
  echo "Error: project_dir and tarball are required" >&2
  show_help >&2
  exit 1
fi

# Resolve tarball to absolute path before changing directories
TARBALL="$(cd "$(dirname "$TARBALL")" && pwd)/$(basename "$TARBALL")"

cd "$PROJECT_DIR"
npm install --ignore-scripts --legacy-peer-deps

# Nuxt projects need type generation
if grep -q '"nuxt"' package.json; then
  NUXT_PUBLIC_TURNSTILE_SITE_KEY=x NUXT_FAUCET_MNEMONIC=x NUXT_FAUCET_PATH_PATTERN=x \
  NUXT_TURNSTILE_SECRET_KEY=x NUXT_XION_TESTNET_1_MNEMONIC=x NUXT_XION_TESTNET_2_MNEMONIC=x \
  NUXT_PUBLIC_XION_TESTNET_2_ADDRESS=x NUXT_PUBLIC_FAUCET_ADDRESS_PREFIX=x \
  NUXT_PUBLIC_FAUCET_AMOUNT_GIVEN=1 NUXT_PUBLIC_FAUCET_COOLDOWN_TIME=1 \
  NUXT_PUBLIC_FAUCET_DENOM=x NUXT_PUBLIC_FAUCET_GAS_LIMIT=1 NUXT_PUBLIC_FAUCET_GAS_PRICE=0 \
  NUXT_PUBLIC_FAUCET_LOGGING=false NUXT_PUBLIC_FAUCET_MEMO=x NUXT_PUBLIC_FAUCET_TOKENS=x \
  NUXT_PUBLIC_XION_TESTNET_1_ADDRESS=x NUXT_PUBLIC_XION_TESTNET_1_RPC_URL=https://x \
  NUXT_PUBLIC_XION_TESTNET_2_RPC_URL=https://x NUXT_DISCORD_APP_ID=x NUXT_DISCORD_TOKEN=x \
  npx nuxt prepare || true
fi

npm install "$TARBALL" --no-save --legacy-peer-deps

npx tsc --noEmit --skipLibCheck > /tmp/tsc.log 2>&1 || true
PROTO_ERRORS=$(grep -E "error TS" /tmp/tsc.log | grep -iE "(xion-types|protobuf|\.proto)" | grep -vE "(Cannot read file|\.nuxt|node_modules|prototype)" || true)
if [ -n "$PROTO_ERRORS" ]; then
  echo "Proto-related TS errors:" >&2
  echo "$PROTO_ERRORS" | head -10 >&2
  exit 1
fi
echo "Proto compatibility confirmed"
