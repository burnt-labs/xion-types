# Xion Types CI/CD Workflows

Automated pipelines for generating and publishing multi-language protobuf types from the [xion](https://github.com/burnt-labs/xion) blockchain.

## Architecture

```
┌─────────────────────┐     workflow_call      ┌─────────────────────┐
│  xion repo          │ ─────────────────────▶ │  release.yaml       │
│  create-release.yaml│                        │  (generate → PR →   │
└─────────────────────┘                        │   merge → release)  │
                                               └────────┬────────────┘
                                                        │ on: release published
                                                        ▼
                                               ┌─────────────────────┐
                                               │  publish.yaml       │
                                               │  (fan-out to all    │
                                               │   publish-*.yaml)   │
                                               └─────────────────────┘
```

## Workflows

### Core Pipeline

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| **release.yaml** | `workflow_call` from xion, `workflow_dispatch` | Generates all types, commits to branch, opens PR, auto-merges, creates GitHub release |
| **publish.yaml** | `release: published`, `workflow_dispatch` | Fans out to all `publish-*.yaml` workflows |
| **generate-protobuf.yaml** | `workflow_call`, `workflow_dispatch` | Reusable: generates types for all 13 languages via matrix strategy |

### Per-Language Publish

Each is a reusable `workflow_call` workflow with build → test → publish stages:

| Workflow | Registry | Package |
|----------|----------|---------|
| **publish-ts.yaml** | npm | `@burnt-labs/xion-types` |
| **publish-python.yaml** | PyPI | `xion-types` |
| **publish-rust.yaml** | crates.io | `xion-types` |
| **publish-ruby.yaml** | RubyGems | `xion_types` |
| **publish-kotlin.yaml** | Maven Central | `io.github.burnt-labs:xion-types-kotlin` |
| **publish-swift.yaml** | CocoaPods | `XionTypes` |

### Utility

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| **dev-build.yaml** | `workflow_dispatch` | Manual dev builds for any/all languages with optional publish |
| **check-unpublished-tags.yaml** | Weekly cron, `workflow_dispatch` | Detects release tags missing from package registries, alerts Slack |

## Release Flow

1. **xion** creates a release → calls `release.yaml` via `workflow_call`
2. `release.yaml` calls `generate-protobuf.yaml` (13 languages in parallel)
3. Downloads all artifacts, commits to a `types/<tag>` branch, opens PR to main
4. PR auto-merges, then a GitHub release is created matching the xion tag
5. The `release: published` event triggers `publish.yaml`
6. `publish.yaml` fans out to 6 per-language publish workflows in parallel

## Dev Build Flow

1. Manually trigger `dev-build.yaml` with a language, xion ref, and optional base version
2. Resolves version (e.g. `0.0.0-dev.<sha>` or explicit tag)
3. Calls `generate-protobuf.yaml`
4. Optionally commits, tags, and publishes to registries

## Shared Components

- **`scripts/proto-gen-ext.sh`** — Post-processing hooks (`post_swift`, `post_python`, etc.) that make `make proto-gen-<lang>` produce publish-ready packages

## External Source Refs

- **Xion protos** — Pulled from BSR (`buf.build/burnt-labs/xion:<release_tag>`). No git checkout of `burnt-labs/xion` is required.
- **CosmWasm contracts** — Checked out from `burnt-labs/contracts` into `contracts/` at the `contracts_ref` workflow input (default: `v1.0.1`). Used only by the TS post-processor to generate client types via `ts-codegen`.

## Required Secrets

| Secret | Purpose |
|--------|---------|
| `GH_PAT` | Cross-repo operations, PR creation/merge |
| `NPM_TOKEN` | npm publish |
| `PYPI_TOKEN` | PyPI publish |
| `CRATESIO_ACCESS_TOKEN` | crates.io publish |
| `RUBYGEMS_API_KEY` | RubyGems publish |
| `COCOAPODS_TRUNK_TOKEN` | CocoaPods publish |
| `GPG_PRIVATE_KEY` / `GPG_PASSPHRASE` | Maven Central signing |
| `MAVEN_CENTRAL_USERNAME` / `MAVEN_CENTRAL_PASSWORD` | Maven Central upload |
| `NOTIFY_DEVOPS_SLACK_APP_BOT_TOKEN` | Slack notifications |
| `DEVOPS_NOTIFICATIONS_SLACK_CHANNEL_ID` | Slack channel target |
