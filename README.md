# @burnt-labs/xion-types

Generated type definitions for the [Xion blockchain](https://github.com/burnt-labs/xion) across multiple languages.

## Supported Languages

| Language | Registry | Package |
|----------|----------|---------|
| TypeScript | npm | `@burnt-labs/xion-types` |
| Python | PyPI | `xion-types` |
| Rust | crates.io | `xion-types` |
| Ruby | RubyGems | `xion_types` |
| Swift | GitHub Release | `XionTypes` |
| Kotlin | Maven Central | `com.burnt.xion:xion-types` |
| C, C++, C#, Java, ObjC, PHP, Scala | — | Generated, not published |

## Installation

```bash
# TypeScript
npm install @burnt-labs/xion-types

# Python
pip install xion-types

# Rust
cargo add xion-types

# Ruby
gem install xion_types

# Kotlin (build.gradle.kts)
implementation("com.burnt.xion:xion-types:<version>")
```

## How Releases Work

Types are generated automatically when the upstream [xion](https://github.com/burnt-labs/xion) repo creates a release:

1. Xion creates a release (e.g. `v26.0.0`)
2. `trigger-types.yaml` in xion calls `release.yaml` here
3. All types are generated in parallel across 13 languages
4. Generated types are committed, PR'd to main, and auto-merged
5. A matching GitHub release (`v26.0.0`) is created
6. `publish.yaml` fires on the release event and publishes to all registries

## Dev & Fix Builds

Use the **Dev Build** workflow (Actions → Dev Build → Run workflow) to build and optionally publish types from any xion ref.

### Inputs

| Input | Description | Examples |
|-------|-------------|---------|
| **language** | Language to build | `ts`, `python`, `rust`, `ruby`, `swift`, `kotlin`, `all` |
| **xion_ref** | Xion git ref | `dev` (HEAD), `v26.0.0` (tag), `abc1234` (commit) |
| **base_version** | Version override | `v26.1.0` (optional — auto-detects from nearest tag if empty) |
| **publish** | Publish to registry? | `true` / `false` |

### Version Resolution

| xion_ref | base_version | Resulting version | Tag |
|----------|-------------|-------------------|-----|
| `v26.0.0` | _(empty)_ | `26.0.0` | `v26.0.0` |
| `abc1234` | _(empty)_ | `26.0.1-abc1234` _(auto patch bump)_ | `v26.0.1-abc1234` |
| `abc1234` | `v26.1.0` | `26.1.0-abc1234` | `v26.1.0-abc1234` |
| `dev` | _(empty)_ | `26.0.1-f3a9b12` _(from HEAD)_ | `v26.0.1-f3a9b12` |

### Examples

**Quick test** — generate Python types from xion HEAD, don't publish:
> language=`python`, xion_ref=`dev`, publish=`false`

**Hotfix** — publish a TypeScript fix from a specific xion commit:
> language=`ts`, xion_ref=`abc1234`, base_version=`v26.1.0`, publish=`true`
>
> Publishes `@burnt-labs/xion-types@26.1.0-abc1234` to npm.

**Re-publish a release for one language** — e.g. if Ruby failed during the full release:
> language=`ruby`, xion_ref=`v26.0.0`, publish=`true`

## Local Development

```bash
# 1. Init submodules
make submodules

# 2. Build the protobuf builder Docker image
make build-proto-builder-image

# 3. Generate types for a specific language
make proto-gen-ts
make proto-gen-python
make proto-gen-rust
make proto-gen-kotlin
# ... or all at once:
make proto-gen-all

# Available targets:
#   proto-gen-{c,cpp,csharp,docs,java,kotlin,objc,php,python,ruby,rust,scala,swift,ts}
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

