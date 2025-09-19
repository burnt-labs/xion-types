# Xion Types CI/CD Workflow

This document explains the automated workflow for publishing TypeScript types based on releases from the main Xion repository.

## Overview

The workflow system consists of three interconnected components that work together to automatically generate and publish TypeScript type definitions when new releases are created in the `burnt-labs/xion` repository.

## Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────────┐
│   xion repo     │    │publish-types.yaml│    │   xion-types repo   │
│                 │    │    workflow      │    │                     │
│ create-release  │───▶│                  │───▶│  typescript-ci.yaml │
│                 │    │                  │    │                     │
└─────────────────┘    └──────────────────┘    └─────────────────────┘
```

## Workflow Components

### 1. Xion Repository (`burnt-labs/xion`)

**File:** `.github/workflows/create-release.yaml`

- **Trigger:** Manual release creation or automated release process
- **Action:** Calls the `publish-types.yaml` workflow
- **Purpose:** Initiates the type generation and publishing process

```yaml
publish-types:
  name: Publish Typescript Types
  needs: build-release
  uses: burnt-labs/xion/.github/workflows/publish-types.yaml@workflows/main
  secrets: inherit
```

### 2. Publish Types Workflow (`burnt-labs/xion`)

**File:** `.github/workflows/publish-types.yaml`

- **Trigger:** Called by `create-release.yaml`
- **Action:** Sends `repository_dispatch` event to `xion-types` repository
- **Purpose:** Bridge between xion releases and type generation

**Key Features:**
- Determines release type (`latest` vs `published`) based on release properties
- Sends release metadata (tag name, release name, type) to xion-types
- Uses `REPO_DISPATCH_TOKEN` for cross-repository communication

```yaml
client-payload: |
  {
    "release_type": "${{ github.event.release.prerelease == false && github.event.release.draft == false && github.event.release.make_latest == 'true' && 'latest' || 'published' }}",
    "tag_name": "${{ github.event.release.tag_name }}",
    "release_name": "${{ github.event.release.name }}"
  }
```

### 3. TypeScript CI/CD Workflow (`burnt-labs/xion-types`)

**File:** `.github/workflows/typescript-ci.yaml`

- **Triggers:**
  - `repository_dispatch` with type `xion-types-release-trigger`
  - `workflow_dispatch` (manual)
- **Purpose:** Generates protobuf types and conditionally publishes to NPM

## Workflow Behavior

### Release Type Logic

The workflow behaves differently based on the release type:

| Release Type | Generate Types | Publish to NPM | Use Case |
|-------------|----------------|----------------|----------|
| `latest`    | ✅ Yes         | ✅ Yes         | Stable releases |
| `published` | ✅ Yes         | ❌ No          | Prereleases, beta versions |

### Version Handling

The workflow supports three version sources:

1. **Manual Input** (`workflow_dispatch`):
   - Uses the `next_version` input parameter
   - Always publishes to NPM

2. **Repository Dispatch** (`repository_dispatch`):
   - Uses the `tag_name` from the release payload
   - Removes 'v' prefix if present (e.g., `v1.2.3` → `1.2.3`)
   - Conditional publishing based on `release_type`

3. **Direct Release** (legacy, currently disabled):
   - Would use `github.event.release.tag_name`
   - Currently not used in the flow

## Workflow Steps

### 1. Generate Protobuf Types

**Job:** `generate-protobuf`
- **Always runs** for all triggers
- Generates TypeScript definitions from protobuf files
- Uploads generated types as artifacts
- Supports matrix strategy for multiple languages (currently only TypeScript)

### 2. Publish to NPM

**Job:** `publish`
- **Conditional execution** based on trigger type
- Downloads generated types from previous job
- Sets package version in `package.json`
- Publishes to NPM with appropriate tag

**Publish Conditions:**
```yaml
if: github.event.client_payload.release_type == 'latest' || github.event_name == 'workflow_dispatch'
```

## Environment Variables

| Variable | Source | Purpose |
|----------|--------|---------|
| `NEW_VERSION` | Generated from `package.json` | Package version for publishing |
| `TAG` | Same as `NEW_VERSION` | NPM distribution tag |
| `NODE_VERSION` | Workflow env | Node.js version for builds |
| `REGISTRY_URL` | Workflow env | NPM registry URL |

## Required Secrets

| Secret | Repository | Purpose |
|--------|------------|---------|
| `NPM_TOKEN` | xion-types | NPM publishing authentication |
| `GITHUB_TOKEN` | xion-types | Repository access (auto-provided) |
| `REPO_DISPATCH_TOKEN` | xion | Cross-repository workflow triggering |

## Example Flow

### Stable Release (v1.2.3)

1. **xion** creates release with tag `v1.2.3` (not prerelease, not draft, make_latest=true)
2. **create-release.yaml** triggers **publish-types.yaml**
3. **publish-types.yaml** determines `release_type: "latest"`
4. **publish-types.yaml** sends `repository_dispatch` to **xion-types**
5. **xion-types** runs `generate-protobuf` job
6. **xion-types** runs `publish` job (because `release_type == "latest"`)
7. Package `@burnt-labs/xion-types@1.2.3` is published to NPM

### Prerelease (v1.3.0-beta.1)

1. **xion** creates prerelease with tag `v1.3.0-beta.1`
2. **create-release.yaml** triggers **publish-types.yaml**
3. **publish-types.yaml** determines `release_type: "published"`
4. **publish-types.yaml** sends `repository_dispatch` to **xion-types**
5. **xion-types** runs `generate-protobuf` job
6. **xion-types** skips `publish` job (because `release_type != "latest"`)
7. Types are generated but not published to NPM

## Manual Trigger

You can manually trigger the workflow with a specific version:

1. Go to **Actions** → **Publish Types CI/CD** → **Run workflow**
2. Enter the desired version (e.g., `1.2.3`)
3. The workflow will generate types and publish to NPM

## Troubleshooting

### Common Issues

1. **Workflow not triggering:**
   - Check that `REPO_DISPATCH_TOKEN` is set in xion repository
   - Verify event type matches (`xion-types-release-trigger`)

2. **Version not found:**
   - Ensure release has a valid tag name
   - Check that tag follows semantic versioning

3. **Publish job skipped:**
   - Verify `release_type` is `"latest"` for stable releases
   - Check publish job condition logic

### Debug Information

The workflow includes detailed logging:
- Version resolution steps
- Release type determination
- NPM publish dry-run output
- Artifact upload/download status

## Future Enhancements

- [ ] Support for multiple languages (currently only TypeScript)
- [ ] Dependent project compatibility testing
- [ ] Automated package validation
- [ ] Release notes generation
- [ ] Rollback capabilities
