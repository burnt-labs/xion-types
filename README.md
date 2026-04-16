# xion-types

Auto-generated, multi-language client types for the [XION](https://github.com/burnt-labs/xion) blockchain. Regenerated on every xion release — **do not edit generated files**; improve the tooling instead.

## Languages

| Language | Output | Published as |
|----------|--------|--------------|
| TypeScript | [`ts/`](ts/) | npm [`@burnt-labs/xion-types`](https://www.npmjs.com/package/@burnt-labs/xion-types) |
| Python | [`python/`](python/) | PyPI `xion-types` |
| Rust | [`rust/`](rust/) | crates.io `xion-types` |
| Ruby | [`ruby/`](ruby/) | RubyGems `xion_types` |
| Kotlin | [`kotlin/`](kotlin/) | Maven Central `io.github.burnt-labs:xion-types-kotlin` |
| Swift | [`swift/`](swift/) | CocoaPods `XionTypes` |
| C, C++, C#, Java, Objective-C, PHP, Scala | `<lang>/` | — (generated, unpublished) |

Proto-derived reference docs are generated into [`docs/`](docs/).

## Proto sources

Sources are pulled from BSR at generation time — no git submodules required. Configured in [`scripts/proto-sources.conf`](scripts/proto-sources.conf):

- `github.com/cosmos/ibc-apps` (packet-forward-middleware, git)
- `buf.build/cosmos/ibc`
- `buf.build/cosmwasm/wasmd`
- `buf.build/cosmos/cosmos-sdk`
- `buf.build/burnt-labs/abstractaccount`
- `buf.build/burnt-labs/tokenfactory`
- `buf.build/burnt-labs/xion` *(pinnable via `BSR_MODULE` / `XION_BSR_MODULE`)*

Xion contracts (TypeScript client types only) are fetched from [`burnt-labs/contracts`](https://github.com/burnt-labs/contracts) at release time.

## How releases happen

```text
xion release published
   └─▶ release.yaml            generate all languages in parallel, open PR, enable auto-merge
       └─▶ auto-tag.yaml       on merge: cut v0.<xion_major>.<patch>-<xion_short>-<contracts_short>
           └─▶ publish.yaml    fan out to publish-{ts,python,rust,ruby,kotlin,swift}.yaml
```

See [`.github/workflows/README.md`](.github/workflows/README.md) for the full workflow reference and tag scheme.

## Regenerating locally

Requires **Docker** (builds a pinned `proto-builder` image). No Go or language toolchains needed on the host.

```bash
# One language, specific xion version
make proto-gen-ts BSR_MODULE=buf.build/burnt-labs/xion:v29.0.0

# Any language: c, cpp, csharp, docs, java, kotlin, objc, php, python, ruby, rust, scala, swift, ts
make proto-gen-python
```

Without Docker, `./scripts/proto-gen-ext.sh <lang>` works too, but requires `buf` and each language's plugins on `$PATH`.

## TypeScript usage

See [`ts/USAGE.md`](ts/USAGE.md) for import rules, the cosmjs bigint-compatibility split, and integration with xion.js.
