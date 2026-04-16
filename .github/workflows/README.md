# Xion Types CI/CD Workflows

Automated pipelines for generating and publishing multi-language protobuf types from the [xion](https://github.com/burnt-labs/xion) blockchain.

## Architecture

```
┌─────────────────────┐   workflow_call   ┌─────────────────────┐
│  xion repo          │ ─────────────────▶│  release.yaml       │
│  (on tag/release)   │                   │  generate → PR →    │
└─────────────────────┘                   │  enable auto-merge  │
                                          └────────┬────────────┘
                                                   │ PR merges to main
                                                   ▼
                                          ┌─────────────────────┐
                                          │  auto-tag.yaml      │
                                          │  compute next       │
                                          │  v0.<major>.<patch> │
                                          │  tag + gh release   │
                                          └────────┬────────────┘
                                                   │ on: release published
                                                   ▼
                                          ┌─────────────────────┐
                                          │  publish.yaml       │
                                          │  fan-out to all     │
                                          │  publish-*.yaml     │
                                          └─────────────────────┘
```

## Workflows

### Core Pipeline

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| **release.yaml** | `workflow_call` from xion, `workflow_dispatch` | Generates types, opens PR, enables auto-merge |
| **auto-tag.yaml** | `push: main` | Detects auto-merged types PR; tags and cuts a GitHub release |
| **publish.yaml** | `release: published`, `workflow_dispatch` | Fans out to all `publish-*.yaml` workflows |

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

1. **xion** publishes a release → calls `release.yaml` via `workflow_call`
2. `release.yaml`:
   - `resolve-sources`: resolves xion and contracts refs to full SHAs
   - `generate` matrix: generates all languages in parallel
   - `commit-and-pr`: commits to `types/<release_tag>-<xion_short>-<contracts_short>`, opens PR to main, enables auto-merge
3. PR auto-merges once branch protection checks pass
4. `auto-tag.yaml` fires on the resulting push to main:
   - Parses the squash-merged commit subject to recover xion_tag and SHAs
   - Finds the highest existing patch in the `v0.<xion_major>.*` series
   - Tags main with `v0.<xion_major>.<patch>-<xion_short>-<contracts_short>`
   - Creates a GitHub release
5. The `release: published` event triggers `publish.yaml`
6. `publish.yaml` fans out to 6 per-language publish workflows in parallel

### Version tag scheme

The release tag embeds both upstream SHAs and auto-increments a patch
counter per xion major series. Patch resets when the xion major changes.

| Event | Resulting tag |
|-------|---------------|
| First build for xion v29 | `v0.29.0-abc1234-cba4321` |
| Xion commit changes | `v0.29.1-abc1235-cba4321` |
| Contracts commit changes | `v0.29.2-abc1235-cba4322` |
| Xion moves to v30 | `v0.30.0-def0000-cba4322` |

In semver terms, the `-<xion_short>-<contracts_short>` is the pre-release
identifier — `0.29.0`/`0.29.1`/etc. stay monotonically ordered within a
major series.

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
