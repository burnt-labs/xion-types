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

Proto-derived reference docs are generated into [`docs/PROTO_DOCS.md`](docs/PROTO_DOCS.md).

## Proto sources

Sources are pinned in [`scripts/proto-sources.conf`](scripts/proto-sources.conf) to match the XION chain build (Cosmos SDK v0.55.0). Each source is exported without imports, unioned into one proto tree (conflicting files are a hard error), and every language is generated from a single descriptor image of that tree:

- `github.com/cosmos/cosmos-sdk` `v0.55.0` (`cosmos/`, `amino/`, `tendermint/`)
- `github.com/cosmos/ibc-go` v11 commit (`ibc/`, including packet-forward-middleware)
- `github.com/burnt-labs/wasmd` `v0.70.5-xion.4` (`cosmwasm/`)
- `github.com/burnt-labs/tokenfactory` `v0.55.0-xion.1` (`osmosis/`)
- `github.com/burnt-labs/xion` commit (`xion/`, `abstractaccount/`) *(overridable via `XION_BSR_MODULE` or `--module`)*
- BSR commits for `cosmos-proto`, `gogo-proto`, `googleapis`, `wellknowntypes` and `ics23` (imports only)

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
# One language, specific xion commit
make proto-gen-ts XION_BSR_MODULE="https://github.com/burnt-labs/xion.git#subdir=proto,ref=<sha>"

# Any language: c, cpp, csharp, docs, java, kotlin, objc, php, python, ruby, rust, scala, swift, ts
make proto-gen-python
```

Without Docker, `./scripts/proto-gen-ext.sh <lang>` works too, but requires `buf` and each language's plugins on `$PATH`.

## TypeScript usage

See [`ts/USAGE.md`](ts/USAGE.md) for import rules, the cosmjs bigint-compatibility split, and integration with xion.js.
