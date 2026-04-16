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

Proto sources come from BSR (`buf.build/…`), not git — see [scripts/proto-sources.conf](scripts/proto-sources.conf). Only the xion entry is version-pinned (via `BSR_MODULE`); the rest resolve to each module's main.

## GitHub Workflows

### `release.yaml` — Main Orchestrator

**Triggered by:**
- `workflow_call` from **`burnt-labs/xion`** `release-downstream.yaml` (via `trigger-types.yaml`)
- `workflow_dispatch` — manual with inputs: `release_tag` (xion ref; tag or SHA), `contracts_ref` (burnt-labs/contracts ref; tag or SHA; default `v1.0.1`)

**What it does:**

1. `resolve-sources`: resolves both refs to full git SHAs via the GitHub API and composes `<release_tag>-<xion_short>-<contracts_short>` (e.g. `v28.1.0-0ae6add-3d49b1d`)
2. Discovers language targets dynamically from `buf/buf.gen.*.yaml` files
3. Builds a shared `proto-builder` Docker image once
4. Checks out `burnt-labs/contracts` at the resolved SHA (no submodule) and runs protobuf generation in parallel per language (matrix)
5. Commits all generated files to branch `types/<composite_tag>`
6. Opens a PR to main and enables auto-merge

### `auto-tag.yaml` — Post-merge release cutter

**Triggered by:** `push: main`

When an auto-generated types PR merges to main, this workflow parses the squash-merge commit subject, looks up the highest existing patch in the `v0.<xion_major>.*` series, and cuts a GitHub release:

`v0.<xion_major>.<patch>-<xion_short>-<contracts_short>`

Patch resets when xion major changes. Creating the release fires `publish.yaml`.

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

### `claude.yml`

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

## Working with this repo

- Validate workflow edits locally: `python3 -c "import yaml; yaml.safe_load(open('.github/workflows/X.yaml'))"`. Multiline shell strings in `run: |` that dedent past the block indent break the YAML silently — use multiple `-m` flags for commit messages and mktemp-heredoc + `gh ... --body-file` for PR bodies.
- Editing any workflow triggers a one-shot security-reminder hook that blocks the first `Edit`/`Write`. Re-issuing the same call proceeds. The warning is about untrusted-input injection (`${{ github.event.* }}` in `run:`); apply it only when actually interpolating event data.
- Check action versions with `gh api repos/<org>/<repo>/releases/latest --jq .tag_name` rather than guessing — majors shift faster than training data.
- `contracts/` and `xion/` at the repo root are ephemeral CI checkouts (gitignored). Don't add files there. `release.yaml` clones `burnt-labs/contracts` at the `contracts_ref` input (default `v1.0.1`); contract codegen runs inside the `proto-builder` docker image (cargo preinstalled).
- macOS FS case-collision: `kotlin/types/ibc/applications/transfer/v1/DenomTraceKt.kt` and `DenomtraceKt.kt` are both tracked in git but fold to one file on case-insensitive filesystems, so `git status` will perpetually show one as modified after any checkout. Unrelated to any task — ignore or `git stash` it; do not try to "fix" by editing.
- Local regen for a specific xion tag (requires Docker): `make proto-gen-<lang> BSR_MODULE=buf.build/burnt-labs/xion:vX.Y.Z`. The Makefile variable is `BSR_MODULE`; the script reads `XION_BSR_MODULE` and the recipe bridges the two — setting `XION_BSR_MODULE` in the shell alone does not propagate through Make.

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
