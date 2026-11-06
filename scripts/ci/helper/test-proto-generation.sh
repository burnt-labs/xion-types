#!/usr/bin/env bash
# Self-check for scripts/proto-gen-ext.sh against local fixture sources.
#
# Usage: test-proto-generation.sh
#
# Requires buf, protoc, jq and git on PATH (all present in the proto-builder
# image). Runs the real generator inside an isolated copy of its root; no
# network access is needed.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
for tool in buf protoc jq git; do
  command -v "$tool" >/dev/null || { echo "Error: $tool not found on PATH" >&2; exit 1; }
done

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

fail() {
  echo "FAIL: $*" >&2
  exit 1
}

ROOT="$TMP/root"
mkdir -p "$ROOT/scripts" "$ROOT/buf"
cp "$REPO_ROOT/scripts/proto-gen-ext.sh" "$ROOT/scripts/"
GEN="$ROOT/scripts/proto-gen-ext.sh"
OUT="$ROOT/python/xion_types"

write_template() {
  printf 'version: v2\nplugins:\n  - %s\n    out: python/xion_types\n' "$1" > "$ROOT/buf/buf.gen.python.yaml"
}

proto() {
  mkdir -p "$(dirname "$1")"
  printf 'syntax = "proto3";\npackage %s;\nmessage %s { uint64 account_number = 1; }\n' "$2" "$3" > "$1"
}

# Git fixture: v1 has a.proto and b.proto, v2 drops b.proto.
REPO="$TMP/fixture-repo"
proto "$REPO/proto/foo/v1/a.proto" foo.v1 A
proto "$REPO/proto/foo/v1/b.proto" foo.v1 B
git -C "$REPO" init -q
git -C "$REPO" -c user.name=t -c user.email=t@t add -A
git -C "$REPO" -c user.name=t -c user.email=t@t commit -qm v1
git -C "$REPO" tag v1
git -C "$REPO" rm -q proto/foo/v1/b.proto
git -C "$REPO" -c user.name=t -c user.email=t@t commit -qm v2
git -C "$REPO" tag v2

write_template 'protoc_builtin: python'

# 1. Git URL fragments (#subdir=...,tag=...) survive manifest parsing.
echo "target file://$REPO/.git#subdir=proto,tag=v1 foo" > "$ROOT/scripts/proto-sources.conf"
bash "$GEN" python > "$TMP/gen1.log" 2>&1 || { cat "$TMP/gen1.log"; fail "generation from Git fixture failed"; }
[ -f "$OUT/foo/v1/a_pb2.py" ] || fail "a_pb2.py missing after Git fixture generation"
[ -f "$OUT/foo/v1/b_pb2.py" ] || fail "b_pb2.py missing after Git fixture generation"

# 2. A proto removed from the source does not survive the next generation.
echo "target file://$REPO/.git#subdir=proto,tag=v2 foo" > "$ROOT/scripts/proto-sources.conf"
bash "$GEN" python > "$TMP/gen2.log" 2>&1 || { cat "$TMP/gen2.log"; fail "regeneration from v2 failed"; }
[ -f "$OUT/foo/v1/a_pb2.py" ] || fail "a_pb2.py missing after regeneration"
[ ! -e "$OUT/foo/v1/b_pb2.py" ] || fail "stale b_pb2.py survived regeneration"

# 3. Conflicting bytes for the same path from two sources are a hard error.
proto "$TMP/src-one/foo/v1/c.proto" foo.v1 C
proto "$TMP/src-two/foo/v1/c.proto" foo.v1 Other
printf 'target %s foo\ntarget %s foo\n' "$TMP/src-one" "$TMP/src-two" > "$ROOT/scripts/proto-sources.conf"
if bash "$GEN" python > "$TMP/gen3.log" 2>&1; then
  fail "conflicting definitions did not fail generation"
fi
grep -q "conflicting definitions of foo/v1/c.proto from $TMP/src-one and $TMP/src-two" "$TMP/gen3.log" \
  || { cat "$TMP/gen3.log"; fail "conflict error does not name the path and both sources"; }

# Identical bytes for the same path are accepted.
cp "$TMP/src-one/foo/v1/c.proto" "$TMP/src-two/foo/v1/c.proto"
bash "$GEN" python > "$TMP/gen4.log" 2>&1 || { cat "$TMP/gen4.log"; fail "identical duplicate files failed generation"; }
[ -f "$OUT/foo/v1/c_pb2.py" ] || fail "c_pb2.py missing after identical-duplicate generation"

# 4. A failing generator leaves existing outputs untouched.
before="$(cd "$OUT" && find . -type f | LC_ALL=C sort | xargs cat | cksum)"
write_template 'local: ["false"]'
if bash "$GEN" python > "$TMP/gen5.log" 2>&1; then
  fail "failing plugin did not fail generation"
fi
after="$(cd "$OUT" && find . -type f | LC_ALL=C sort | xargs cat | cksum)"
[ "$before" = "$after" ] || fail "failed generation modified existing outputs"

echo "✅ proto generation self-check passed"
