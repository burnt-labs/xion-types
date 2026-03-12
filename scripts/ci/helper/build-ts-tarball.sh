#!/usr/bin/env bash
# Build a publishable tarball from the ts/ package.
#
# Usage: build-ts-tarball.sh [output_dir]
#
# Arguments:
#   output_dir   Where to place the .tgz (default: ts/)
#
# Outputs the tarball filename to stdout.
set -euo pipefail

show_help() {
  sed -n '2,/^set /{ /^#/s/^# \?//p }' "$0"
}

if [[ "${1:-}" == "-h" ]] || [[ "${1:-}" == "--help" ]]; then
  show_help
  exit 0
fi

ROOT="$(git rev-parse --show-toplevel)"
OUTPUT_DIR="${1:-$ROOT/ts}"

cd "$ROOT/ts"
pnpm install
pnpm run build

cd dist
node -e "const p=require('./package.json');delete p.scripts.prepare;require('fs').writeFileSync('./package.json',JSON.stringify(p,null,2))"
pnpm pack --pack-destination "$OUTPUT_DIR"

TGZ=$(ls "$OUTPUT_DIR"/*.tgz 2>/dev/null | head -1)
echo "$TGZ"
