# xion-types — CLAUDE.md

Protobuf type generation repository for Xion. Auto-generates client SDKs in TypeScript, Python, Rust, Go, Kotlin, Ruby, Swift, and C# from the Xion proto definitions.

**Important: Do not manually edit generated type files.** All types in language subdirectories are auto-generated. Improve the tooling/scripts, not the output.

## Repository Structure

```
buf/                      # Buf build configs (buf.gen.<language>.yaml per language)
scripts/
  post/                   # Post-generation scripts (e.g., ts.sh for index.ts exports)
ts/, python/, rust/, ...  # Generated language output directories
Makefile                  # proto-gen-ts, proto-gen-python, etc.
```

## GitHub Workflows

### `release.yaml` — Main Orchestrator

**Triggered by:**
- `workflow_call` from **`burnt-labs/xion`** `release-downstream.yaml` (via `trigger-types.yaml`)
- `workflow_dispatch` — manual with input: `release_tag`

**What it does:**
1. Discovers language targets dynamically from `buf/buf.gen.*.yaml` files
2. Builds a shared `proto-builder` Docker image once
3. Runs protobuf generation in parallel per language (matrix)
4. Commits all generated files to branch `types/<release_tag>`
5. Creates a PR to main

### Language Publish Workflows (reusable, `workflow_call` + manual)

| Workflow | Publishes to |
|----------|-------------|
| `publish-ts.yaml` | npm (`@burnt-labs/xion-types`) |
| `publish-python.yaml` | PyPI |
| `publish-ruby.yaml` | RubyGems |
| `publish-kotlin.yaml` | Maven Central |
| `publish-rust.yaml` | crates.io |
| `publish-swift.yaml` | CocoaPods |

### `typecheck-ts.yaml`

TypeScript bigint compatibility check — triggered on PRs and manually.

### `publish.yaml`

Manual-only: publishes all language packages for a given tag.

### `claude-code-review.yml` / `claude.yml`

Claude AI PR review and code agent.

## Upstream Triggers

| Source | Workflow | Condition |
|--------|----------|-----------|
| `burnt-labs/xion` | `trigger-types.yaml` → `release-downstream.yaml` | Any xion release published |

## Downstream Triggers

None — publish workflows are called as part of the release flow but don't trigger other repos.

## Adding a New Language

1. Add `buf/buf.gen.<language>.yaml`
2. The `discover-languages` step in `release.yaml` will automatically include it in the matrix
3. Add a `publish-<language>.yaml` workflow if publishing to a package registry

## Secrets Required

| Secret | Purpose |
|--------|---------|
| `BUF_TOKEN` | Buf registry access |
| `NPM_TOKEN` | npm publish |
| `PYPI_TOKEN` | PyPI publish |
| `RUBYGEMS_API_KEY` | RubyGems publish |
| `MAVEN_CENTRAL_USERNAME` / `MAVEN_CENTRAL_PASSWORD` | Maven Central |
| `CRATESIO_ACCESS_TOKEN` | crates.io publish |
| `COCOAPODS_TRUNK_TOKEN` | CocoaPods publish |
| `GITHUB_TOKEN` | PR creation, branch push |
