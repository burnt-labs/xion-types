# xion-types

Generated multi-language types for the XION blockchain. All content is regenerated on each xion chain release — do not add manual code.

## Languages

| Language | Output | Published |
|----------|--------|-----------|
| TypeScript | `ts/` | npm `@burnt-labs/xion-types` |
| Rust | `rust/` | crates.io |
| Python | `python/` | PyPI |
| Go | via `xion` module directly | — |
| + C, C++, C#, Java, Kotlin, Ruby, Swift, Scala | `<lang>/` | — |

## How types are generated

Types are regenerated automatically on each xion chain release:

```
xion release tag
  → .github/workflows/generate-protobuf.yaml   (buf generate per language)
  → .github/workflows/publish-ts.yaml          (npm publish)
  → .github/workflows/publish-*.yaml           (other language registries)
```

Proto sources are pulled from BSR and configured in [`scripts/proto-sources.conf`](scripts/proto-sources.conf):
- `buf.build/cosmos/cosmos-sdk`
- `buf.build/cosmwasm/wasmd`
- `buf.build/cosmos/ibc`
- `buf.build/burnt-labs/abstractaccount`
- `buf.build/burnt-labs/xion`

## Regenerating manually

Requires `buf` CLI and internet access. No Go toolchain needed.

```bash
# Regenerate a specific language (e.g. ts)
XION_BSR_MODULE="buf.build/burnt-labs/xion:v26.0.0" ./scripts/proto-gen-ext.sh ts

# Regenerate all languages
XION_BSR_MODULE="buf.build/burnt-labs/xion:v26.0.0" ./scripts/proto-gen-ext.sh all
```

## TypeScript

See [`ts/USAGE.md`](ts/USAGE.md) for import rules, the cosmjs bigint compatibility split, and how to use `@burnt-labs/xion-types` in xion.js projects.
