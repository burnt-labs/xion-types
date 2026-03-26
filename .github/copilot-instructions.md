# Copilot Instructions for xion-types

## Project Overview

**xion-types** is a multi-language type library for the XION blockchain that provides automatically generated protocol buffer (protobuf) types across 13+ programming languages. This repository is **fully automated code generation** - all content is regenerated on each XION chain release.

### Critical Rule

**DO NOT ADD MANUAL CODE TO GENERATED OUTPUT DIRECTORIES IN THIS REPOSITORY.** All type definitions in language directories (`ts/types/`, `rust/types/`, `python/xion_types/`, etc.) are auto-generated and will be overwritten on the next release.

### What This Repository Provides

- TypeScript, Rust, Python, Go, and 10+ other language bindings for XION blockchain protocols
- Generated from protobuf definitions via Buf Schema Registry (BSR)
- CosmWasm contract client types (TypeScript only)
- Published to multiple package registries (npm, PyPI, crates.io, RubyGems, Maven Central, CocoaPods)

## Repository Structure

```
xion-types/
├── ts/                          # TypeScript package (@burnt-labs/xion-types)
│   ├── types/                   # Generated TypeScript types (DO NOT EDIT)
│   │   ├── abstractaccount/    # XION-specific AbstractAccount types
│   │   ├── cosmos/             # Cosmos SDK types
│   │   ├── cosmwasm/           # CosmWasm types
│   │   ├── ibc/                # IBC protocol types
│   │   ├── tendermint/         # Tendermint types
│   │   ├── xion/               # XION blockchain types
│   │   └── contracts/          # CosmWasm contract client types
│   ├── package.json
│   ├── tsconfig.json
│   └── USAGE.md                # Important TypeScript usage guide
│
├── rust/                        # Rust crate (xion-types)
│   ├── types/                   # Generated .rs files (DO NOT EDIT)
│   ├── src/lib.rs              # Rust library entry point
│   ├── Cargo.toml
│   └── build.rs                # Build script for module organization
│
├── python/                      # Python package (xion-types)
│   └── xion_types/             # Generated Python modules (DO NOT EDIT)
│
├── [c, cpp, csharp, java, kotlin, objc, php, ruby, scala, swift]/
│   └── types/                   # Generated types for each language
│
├── buf/                         # Buf code generation configs
│   ├── buf.gen.ts.yaml         # TypeScript protoc-gen-ts_proto config
│   ├── buf.gen.rust.yaml       # Rust prost config
│   └── [12+ other language configs]
│
├── scripts/
│   ├── proto-gen-ext.sh        # Main generation script
│   ├── proto-sources.conf      # BSR module sources list
│   ├── post/                   # Post-processing scripts per language
│   │   ├── ts.sh              # TypeScript post-processor
│   │   ├── rust.py            # Rust deduplication
│   │   ├── contracts-codegen.sh # CosmWasm contract codegen
│   │   └── [others]
│   └── ci/                     # CI helper scripts
│
├── .github/workflows/
│   ├── release.yaml            # Main release pipeline
│   ├── publish.yaml            # Fan-out to all publish workflows
│   ├── publish-ts.yaml         # npm publish
│   └── [6+ other publish workflows]
│
├── Makefile                     # Docker-based generation targets
└── README.md
```

## Technologies and Tools

### Core Generation Stack
- **Buf CLI**: Protocol buffer code generation orchestration
- **Buf Schema Registry (BSR)**: Source of protobuf definitions
- **Docker**: Containerized build environment (Alpine-based, includes all protoc plugins)

### TypeScript Stack
- **ts-proto**: TypeScript protobuf code generator (v2.11.5)
- **@cosmwasm/ts-codegen**: CosmWasm contract type generator (v1.12.1)
- **pnpm**: Package manager (v9.15.4) - **MUST use pnpm, not npm or yarn**
- **TypeScript**: v5.8.3
- **Peer dependencies**: @cosmjs/proto-signing, @cosmjs/stargate, @cosmjs/tendermint-rpc (>=0.32.3)

### Rust Stack
- **prost**: Rust protobuf library (v0.13)
- **protoc-gen-prost**: Rust protobuf plugin (v0.3.1)
- **cargo**: Build tool

### Python Stack
- **protobuf**: >=5.29.0
- **grpcio-tools**: For Python protobuf generation
- **setuptools**: Build system

### Protobuf Sources (Order Matters!)
Sources are loaded from `scripts/proto-sources.conf` in order:
1. github.com/cosmos/ibc-apps (packet-forward-middleware)
2. buf.build/cosmos/ibc
3. buf.build/cosmwasm/wasmd
4. buf.build/cosmos/cosmos-sdk
5. buf.build/burnt-labs/abstractaccount
6. buf.build/burnt-labs/tokenfactory
7. **buf.build/burnt-labs/xion (MUST BE LAST - overwrites shared imports)**

## Development Workflows

### TypeScript Development

**Building the TypeScript package:**
```bash
cd ts
pnpm install          # MUST use pnpm (specified in package.json packageManager)
pnpm run build        # Compiles TS to dist/ (CommonJS + ESM)
pnpm run typecheck    # Type checking
pnpm run clean        # Remove dist/
```

**Build scripts explanation:**
- `build`: Cleans, compiles to CommonJS and ESM, copies metadata and contract schemas
- `typecheck`: Runs TypeScript type checking without emitting files
- `copy`: Copies LICENSE, README, package.json, and contract JSON schemas to dist/

### Regenerating Types Manually

**Prerequisites:**
- `buf` CLI installed
- Docker (if using Make targets)
- Internet access (to fetch from BSR)
- No Go toolchain needed (protos come from BSR)

**Manual generation:**
```bash
# Generate TypeScript types for a specific XION version
XION_BSR_MODULE="buf.build/burnt-labs/xion:v28.1.0" ./scripts/proto-gen-ext.sh ts

# Generate all languages
XION_BSR_MODULE="buf.build/burnt-labs/xion:v26.0.0" ./scripts/proto-gen-ext.sh all

# Using Make targets (requires Docker)
make proto-gen-ts BSR_MODULE=buf.build/burnt-labs/xion:v26.0.0
make proto-gen-python
```

### Contract Code Generation

**Only runs if the contracts submodule is checked out/initialized** (checks for `contracts/contracts/` directory):
```bash
make contract-code-gen
# Internally calls scripts/post/contracts-codegen.sh
# Generates JSON schemas from Rust contracts, then TypeScript types via ts-codegen
```

## CI/CD Pipeline Architecture

### Release Flow
```
xion repo release → workflow_call → release.yaml
  ↓
  1. Discover languages (from buf.gen.*.yaml files)
  2. Build proto-builder Docker image
  3. Generate all languages in parallel (matrix strategy)
  4. Download artifacts, commit to types/<tag> branch
  5. Create PR to main, auto-merge
  6. Create GitHub release
  ↓
  on: release published → publish.yaml
  ↓
  Fan out to 6 parallel publish workflows:
    - publish-ts.yaml → npm
    - publish-python.yaml → PyPI
    - publish-rust.yaml → crates.io
    - publish-ruby.yaml → RubyGems
    - publish-kotlin.yaml → Maven Central
    - publish-swift.yaml → CocoaPods
```

### Key Workflows
- **release.yaml**: Main release pipeline (generates, PRs, merges, releases)
- **publish.yaml**: Fan-out orchestrator to all publish workflows
- **publish-ts.yaml**: Builds tarball, tests compatibility with dependent projects, publishes to npm
- **dev-build.yaml**: Manual dev builds for any/all languages with optional publish
- **typecheck-ts.yaml**: TypeScript type checking CI

### TypeScript Publish Process
1. Build tarball with `pnpm pack`
2. Test compatibility with dependent projects (xion-explorer, xion-faucet, xion-staking)
3. Publish to npm registry with `pnpm publish` (as in `scripts/ci/ts.sh`)

## Coding Conventions and Patterns

### TypeScript Generated Code Patterns

**File structure:**
- `*.ts`: Type definitions and encode/decode functions
- `*.amino.ts`: Amino encoding helpers
- `*.registry.ts`: Cosmos SDK message registry
- `*.lcd.ts`: LCD client interfaces
- `rpc.query.ts`, `rpc.tx.ts`: RPC client interfaces
- `bundle.ts`: Re-exports all types from a module
- `client.ts`: Aggregated client interfaces

**Type conventions:**
- Uses `bigint` for int64/uint64 (configured via `forceLong=bigint` in buf.gen.ts.yaml)
- Interfaces for message types
- `createBase*()` factory functions for constructors
- `MessageFns<T>` pattern with encode/decode/fromJSON/toJSON/fromPartial methods

**Contract types (in ts/types/contracts/):**
- Generated by @cosmwasm/ts-codegen from JSON schemas
- Includes `.types.ts`, `.client.ts`, `.message-composer.ts`
- Schemas copied to `contracts/*/schema/raw/*.json` in dist

### Rust Generated Code Patterns
- **Module organization**: Build script (build.rs) organizes generated files into modules
- **Prost conventions**: Each protobuf package becomes a Rust module
- **Feature flags**: `default`, `cosmos`, `cosmwasm`, `ibc`, `tendermint`, `xion`
- **Deduplication**: Post-processor merges duplicate types from different BSR sources

### General Generation Patterns
- **Staged generation for git sources**: Git-based proto sources generate into temp dirs to avoid polluting with stale shared imports
- **Exclusion of test packages**: `test_proto`, `proto3_proto`, `com`, `capability` removed after generation
- **Order matters**: XION BSR module MUST be last in proto-sources.conf to overwrite older shared imports

## Important Files to Reference

### TypeScript
- `ts/USAGE.md` - **Critical usage guide** with bigint migration notes and import patterns
- `ts/package.json` - Dependencies and build scripts
- `buf/buf.gen.ts.yaml` - ts-proto configuration options
- `scripts/post/ts.sh` - Post-generation processing logic

### Generation & CI/CD
- `scripts/proto-gen-ext.sh` - Main generation orchestrator
- `scripts/proto-sources.conf` - Proto source order (XION must be last!)
- `Makefile` - Make targets for Docker-based generation
- `.github/workflows/README.md` - Pipeline architecture documentation
- `.github/workflows/release.yaml` - Main release pipeline

## Common Issues and Workarounds

### Issue: TypeScript bigint vs Long incompatibility (historical)
**Context**: In releases prior to `forceLong=bigint` being added to `buf/buf.gen.ts.yaml`, generated proto types used the `Long` type, which was incompatible with CosmJS 0.32+ which uses native `bigint`. This caused type errors at interface boundaries in consuming projects.

**Current status**: Generated types in this repo already use native `bigint` for int64/uint64 fields (via `forceLong=bigint` in `buf/buf.gen.ts.yaml`). There are no `Long` imports in `ts/types/`. The workaround below applied only to older releases:

**Old workaround** (no longer needed with current types):
```typescript
// Previously needed to work around Long/bigint mismatch
import { SignDoc, TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

// XION-specific types were always fine to import directly
import { AbstractAccount } from '@burnt-labs/xion-types/abstractaccount/v1/account';
```

### Issue: pnpm not installed
**Problem**: CI or local builds fail with "pnpm: command not found"

**Solution**: Install pnpm globally or use the version specified in package.json:
```bash
npm install -g pnpm
# Or use corepack (Node 16.9+)
corepack enable
```

### Issue: Buf generation warnings
**Problem**: Buf/protoc emits non-actionable warnings during generation

**Solution**: The script `proto-gen-ext.sh` includes a `filter_buf_warnings()` function that suppresses known non-actionable warnings:
- "file does not exist" - git sources can't resolve BSR-only imports
- "proto3 .proto files" - PHP can't handle proto2 (gogoproto)
- "raise an issue with the maintainer" - upstream plugin deprecation noise

### Issue: Contract codegen fails
**Problem**: Contract code generation fails or is skipped

**Solution**: Contract codegen requires the `contracts/` git submodule. If not needed, it's safe to skip. If needed:
```bash
git submodule update --init contracts/
make contract-code-gen
```

### Issue: Wrong proto source order
**Problem**: Generated types reference wrong/older versions of shared imports

**Solution**: Always ensure XION BSR module is LAST in `scripts/proto-sources.conf`. The XION module overwrites shared imports from cosmos-sdk, wasmd, etc. with the versions it expects.

### Issue: Build artifacts in git
**Problem**: Generated files or build artifacts accidentally committed

**Solution**: Check `.gitignore` and ensure these directories are excluded:
- `ts/dist/`, `ts/node_modules/`
- `rust/target/`
- `.rust-staged/`, `.ts-codegen-tmp/`, `.buf-stderr`
- `proto_deps/`, `swift-types-temp/`

### Issue: TypeScript build fails after generation
**Problem**: TypeScript compilation errors after regenerating types

**Solution**:
1. Ensure all dependencies are installed: `cd ts && pnpm install`
2. Check that peer dependencies match: @cosmjs/* packages should be >=0.32.3
3. Clean and rebuild: `pnpm run clean && pnpm run build`
4. Run type checking: `pnpm run typecheck`

## What You CAN Change

### Configuration Files (Safe to Edit)
- `buf/buf.gen.*.yaml` - Buf generation templates for each language
- `ts/package.json` - Dependencies, version, metadata
- `ts/tsconfig.json` - TypeScript compiler options
- `rust/Cargo.toml` - Rust package metadata and dependencies
- `pyproject.toml` - Python package metadata
- `scripts/proto-sources.conf` - Proto source list and order
- `.github/workflows/*.yaml` - CI/CD pipeline definitions
- `Makefile` - Build targets and Docker configuration
- `README.md`, `ts/USAGE.md` - Documentation

### Scripts and Tooling (Safe to Edit)
- `scripts/proto-gen-ext.sh` - Main generation script
- `scripts/post/*.sh`, `scripts/post/*.py` - Post-processing scripts
- `scripts/ci/*.sh` - CI helper scripts
- `rust/build.rs` - Rust build script

### Infrastructure (Safe to Edit)
- `docker/Dockerfile` - Proto-builder Docker image
- `.gitignore` - Exclude patterns
- `LICENSE` - License file

## What You MUST NOT Change

### Generated Code (Will Be Overwritten)
- **ts/types/** - All TypeScript types
- **rust/types/** - All Rust .rs files
- **python/xion_types/** - All Python modules
- **[c, cpp, csharp, java, kotlin, objc, php, ruby, scala, swift]/types/** - All generated language bindings
- **docs/** - Generated protobuf documentation

Any manual edits to these directories will be lost on the next code generation run.

## Testing and Validation

### TypeScript
```bash
cd ts
pnpm install
pnpm run typecheck    # Type checking without emitting
pnpm run build        # Full build (clean, compile, copy)
```

**Note**: This repository does not have unit tests. Types are validated by:
1. TypeScript compilation success
2. Type checking in CI
3. Compatibility testing with dependent projects during publish

### Rust
```bash
cd rust
cargo build           # Build the crate
cargo test            # Run tests (if any)
cargo check           # Quick check without building
```

### Python
```bash
cd python
python -m pip install -e .
# No test suite defined
```

## File Paths Reference (GitHub Actions Runner Defaults)

> **Note:** These paths reflect the default GitHub Actions runner workspace layout and do not apply to local development or other CI providers. For local development, substitute the actual path where you cloned the repository.

- Root: `/home/runner/work/xion-types/xion-types`
- TypeScript: `/home/runner/work/xion-types/xion-types/ts`
- Rust: `/home/runner/work/xion-types/xion-types/rust`
- Python: `/home/runner/work/xion-types/xion-types/python`
- Scripts: `/home/runner/work/xion-types/xion-types/scripts`
- Workflows: `/home/runner/work/xion-types/xion-types/.github/workflows`

## Best Practices for Contributing

1. **Never edit generated code** - Always modify generation config or post-processors instead
2. **Test locally before pushing** - Run generation and build scripts to verify changes
3. **Update documentation** - Keep README.md and USAGE.md in sync with changes
4. **Use pnpm for TypeScript** - Don't use npm or yarn; package.json specifies pnpm
5. **Preserve proto source order** - XION module must always be last in proto-sources.conf
6. **Consider all languages** - Changes to generation process may affect all 13 languages
7. **Check CI logs** - Buf warnings are filtered; check .buf-stderr for unexpected issues
8. **Test dependent projects** - TypeScript publish workflow tests compatibility automatically

## Quick Start for Common Tasks

### Update TypeScript Dependencies
```bash
cd ts
pnpm update [package-name]
pnpm run build
pnpm run typecheck
```

### Add a New Language
1. Create `buf/buf.gen.<lang>.yaml` with protoc plugin config
2. Add post-processor to `scripts/post/<lang>.{sh,py}` if needed
3. Update `ALL_LANGUAGES` in `scripts/proto-gen-ext.sh`
4. Add publish workflow `.github/workflows/publish-<lang>.yaml`
5. Update `.github/workflows/publish.yaml` to include new language

### Update Buf Configuration
1. Edit relevant `buf/buf.gen.<lang>.yaml`
2. Test locally: `XION_BSR_MODULE="buf.build/burnt-labs/xion:v26.0.0" ./scripts/proto-gen-ext.sh <lang>`
3. Verify generated output
4. Commit config changes only (not generated types)

### Debug Generation Issues
1. Check `.buf-stderr` file in root (if it exists)
2. Run with specific version: `XION_BSR_MODULE="buf.build/burnt-labs/xion:v26.0.0" ./scripts/proto-gen-ext.sh ts`
3. Inspect post-processor logs: `scripts/post/<lang>.{sh,py}`
4. Verify proto-sources.conf order
5. Check Docker image: `make build-proto-builder-image`

## Links and Resources

- **Repository**: https://github.com/burnt-labs/xion-types
- **npm Package**: https://www.npmjs.com/package/@burnt-labs/xion-types
- **Buf Schema Registry**: https://buf.build/burnt-labs/xion
- **XION Blockchain**: https://github.com/burnt-labs/xion
- **Cosmos SDK Docs**: https://docs.cosmos.network/
- **CosmWasm Docs**: https://docs.cosmwasm.com/

---

**Remember**: This is a code generation repository. Your role as a coding agent is to improve the generation process, configuration, and tooling - NOT to manually write the generated types.
