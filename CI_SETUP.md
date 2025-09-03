# CI/CD Setup for @burnt-labs/xion-types

## Overview

This document explains the automated CI/CD pipeline that publishes the `@burnt-labs/xion-types` package to npm whenever changes are pushed to the main branch.

## Workflow Structure

The CI/CD pipeline consists of three main jobs:

### 1. Test Job
- **Purpose**: Ensures code quality and functionality
- **Triggers**: All pushes and pull requests
- **Actions**:
  - Installs dependencies
  - Runs tests
  - Builds the package
  - Performs type checking

### 2. Generate Protobuf Job
- **Purpose**: Generates TypeScript types from Protocol Buffer definitions
- **Triggers**: All pushes and pull requests
- **Actions**:
  - Uses the existing `proto-gen.sh` script
  - Generates TypeScript types from Xion and Cosmos SDK protobuf files
  - Verifies generated types
  - Uploads types as artifacts for the publish job

### 3. Publish Job
- **Purpose**: Publishes the package to npm
- **Triggers**: Only pushes to main branch
- **Actions**:
  - Downloads generated types
  - Bumps package version (patch by default)
  - Builds the final package
  - Publishes to npm
  - Creates a GitHub release

## Key Features

### Automatic Version Bumping
- **Patch**: Default behavior for regular commits
- **Minor/Major**: Can be manually triggered via workflow dispatch
- **No Git Tags**: Uses `--no-git-tag-version` to avoid conflicts

### Smart Triggers
- **Path-based**: Only runs when relevant files change
- **Branch-based**: Publishing only happens on main branch
- **Manual Override**: Can be manually triggered with custom version bump

### Quality Gates
- Tests must pass
- TypeScript compilation must succeed
- Generated types must be valid
- All jobs must complete successfully

## Required Secrets

The workflow requires these GitHub secrets:

- `NPM_TOKEN`: NPM authentication token for publishing
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

## Package Structure

The published package includes:

```
dist/
├── index.js          # Main entry point
├── index.d.ts        # TypeScript declarations
├── types/            # Generated type definitions
│   ├── cosmos/       # Cosmos SDK types
│   ├── xion/         # Xion-specific types
│   ├── ibc/          # IBC protocol types
│   └── cosmwasm/     # Smart contract types
└── package.json      # Package metadata
```

## Usage Examples

### Automatic Release
```bash
# Push to main branch - triggers automatic patch version bump and release
git push origin main
```

### Manual Release with Custom Version
1. Go to Actions tab in GitHub
2. Select "TypeScript Package CI/CD" workflow
3. Click "Run workflow"
4. Choose version bump type (patch, minor, major)
5. Click "Run workflow"

### Installing the Package
```bash
# Latest version
npm install @burnt-labs/xion-types

# Specific version
npm install @burnt-labs/xion-types@16.0.0
```

### Using Types in Code
```typescript
import { MsgSend } from '@burnt-labs/xion-types/cosmos/bank/v1beta1/tx';
import { Coin } from '@burnt-labs/xion-types/cosmos/base/v1beta1/coin';

const msg: MsgSend = {
  fromAddress: "xion1...",
  toAddress: "xion1...",
  amount: [{ denom: "uxion", amount: "1000000" }]
};
```

## Troubleshooting

### Common Issues

1. **Build Failures**: Check that all dependencies are properly installed
2. **Type Generation Issues**: Verify protobuf files are accessible
3. **NPM Publishing Errors**: Ensure NPM_TOKEN secret is valid
4. **Version Conflicts**: Check for existing versions on npm

### Debug Steps

1. Check GitHub Actions logs for detailed error messages
2. Verify generated types in the artifacts
3. Test build process locally: `cd ts && npm run build`
4. Check npm registry for package status

## Maintenance

### Updating Dependencies
- Update `package.json` in the `ts/` directory
- Commit and push changes
- CI will automatically test and build with new dependencies

### Modifying the Workflow
- Edit `.github/workflows/typescript-ci.yaml`
- Test changes in a feature branch first
- Ensure all jobs still complete successfully

### Monitoring
- Watch GitHub Actions for any failures
- Monitor npm package downloads and versions
- Check for issues in generated types
