# Python Package Publishing Guide

This guide explains how to publish the `xion-types` Python package to PyPI.

## ✅ What's Already Done

All package structure files have been created:

- ✅ `pyproject.toml` - Modern Python package configuration
- ✅ `python/__init__.py` - Package initialization
- ✅ `python/types/__init__.py` - Types module initialization
- ✅ `python/README.md` - Python-specific documentation
- ✅ `MANIFEST.in` - Package file inclusion rules
- ✅ `LICENSE` - Apache 2.0 license
- ✅ `requirements.txt` - Dependencies list
- ✅ `.github/workflows/publish-python.yaml` - **Independent Python publishing workflow**
- ✅ `.github/workflows/typescript-ci.yaml` - Main workflow that triggers Python publishing
- ✅ Main `README.md` - Updated with Python installation instructions

## 🏗️ Workflow Architecture

The Python publishing uses an **independent workflow** structure:

1. **`typescript-ci.yaml`** (Main Workflow)
   - Generates Python types from `.proto` files
   - Uploads artifacts with 30-day retention
   - Optionally triggers `publish-python.yaml`

2. **`publish-python.yaml`** (Publishing Workflow)
   - **Can run independently** from type generation
   - Downloads generated types from artifacts
   - Builds, tests, and publishes the package
   - Can be triggered manually or automatically

## 📋 Before Publishing - Required Setup

### 1. Create PyPI Account

1. Go to https://pypi.org/account/register/
2. Verify your email address
3. Enable 2FA (required for publishing)

### 2. Generate PyPI API Token

1. Log in to PyPI
2. Go to Account Settings → API tokens
3. Click "Add API token"
4. Name: `xion-types-github-ci`
5. Scope: Select "Entire account" (or specific project after first publish)
6. Copy the token (starts with `pypi-`)

### 3. Add Token to GitHub Secrets

1. Go to your GitHub repository: https://github.com/burnt-labs/xion-types
2. Navigate to: Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `PYPI_TOKEN`
5. Value: Paste the PyPI token
6. Click "Add secret"

## 🚀 How to Publish

### Scenario 1: Fresh Generation + Publish (Full Pipeline)

**Use when**: You want to generate types from latest `.proto` files and publish immediately.

1. Go to GitHub Actions → "Publish Types CI/CD" workflow
2. Click "Run workflow"
3. Enter version (e.g., `0.1.0`)
4. Click "Run workflow"

This will:
- ✅ Generate Python protobuf types
- ✅ Automatically trigger Python publishing workflow
- ✅ Build the package
- ✅ Test on Python 3.8-3.12
- ✅ Publish to PyPI
- ✅ Verify publication

### Scenario 2: Publish Without Regenerating (Independent)

**Use when**: Types were already generated, and you want to republish or test publishing.

1. Go to GitHub Actions → **"Publish Python Package"** workflow
2. Click "Run workflow"
3. Fill in:
   - **Version**: `0.1.0` (version to publish)
   - **Artifact run ID**: Leave empty for latest, or specify a run ID
   - **Skip publish**: ✅ Check to test without publishing
4. Click "Run workflow"

This will:
- ✅ Download previously generated types
- ✅ Build the package
- ✅ Test on Python 3.8-3.12
- ✅ Publish to PyPI (unless skip_publish is checked)

### Scenario 3: Automatic on Release

**Use when**: Release is created in the `burnt-labs/xion` repository.

When a release is published:
- ✅ Main workflow automatically generates types
- ✅ Python publishing workflow is automatically triggered
- ✅ Version is extracted from release tag
- ✅ Package is built and published

### Scenario 4: Test Build Only (No Publishing)

**Use when**: You want to test the build process without publishing to PyPI.

1. Go to GitHub Actions → "Publish Python Package"
2. Click "Run workflow"
3. Fill in:
   - **Version**: `0.1.0-test`
   - **Skip publish**: ✅ **Check this box**
4. Click "Run workflow"

This will:
- ✅ Build and test the package
- ❌ Skip publishing to PyPI

## 📦 What Gets Published

The package includes:
- All generated `*_pb2.py` files in `python/types/`
- Package metadata from `pyproject.toml`
- README and LICENSE files

## 🧪 Testing Locally Before Publishing

### 1. Install Development Dependencies

```bash
pip install build twine
```

### 2. Build the Package

```bash
python -m build
```

This creates:
- `dist/xion_types-0.1.0-py3-none-any.whl` (wheel)
- `dist/xion-types-0.1.0.tar.gz` (source distribution)

### 3. Check Package Quality

```bash
twine check dist/*
```

### 4. Test Installation Locally

```bash
pip install dist/*.whl
```

### 5. Test Imports

```bash
python -c "from types.cosmos.bank.v1beta1 import tx_pb2; print('✅ Success')"
```

### 6. Uninstall Test Package

```bash
pip uninstall xion-types
```

## 🔍 Verifying Publication

After publishing, verify the package:

1. **Check PyPI page**: https://pypi.org/project/xion-types/
2. **Test installation**:
   ```bash
   pip install xion-types
   python -c "from types.cosmos.bank.v1beta1 import tx_pb2; print('Works!')"
   ```

## 📊 Workflow Jobs

### Main Workflow (`typescript-ci.yaml`)

1. **generate-protobuf** (matrix: python, php, ruby, rust)
   - Generates protobuf types from `.proto` files
   - Uploads artifacts with 30-day retention

2. **trigger-python-publish** (conditional)
   - Only runs on: manual workflow_dispatch with version OR repository release
   - Determines version number
   - Triggers the independent Python publishing workflow

### Publishing Workflow (`publish-python.yaml`)

1. **download-artifacts**
   - Downloads generated Python types
   - From specific run ID or latest successful run
   - Re-uploads for use by subsequent jobs

2. **build-package**
   - Checks out package files (pyproject.toml, etc.)
   - Downloads generated types
   - Sets version in package files
   - Builds wheel and sdist
   - Validates with twine
   - Uploads package artifacts (30-day retention)

3. **test-package** (matrix: Python 3.8-3.12)
   - Installs package on each Python version
   - Tests core imports
   - Tests message creation
   - Tests serialization/deserialization
   - Tests JSON format conversion

4. **publish-to-pypi** (conditional)
   - Skipped if `skip_publish` input is true
   - Downloads package artifacts
   - Publishes to PyPI using API token
   - Skips if version already exists

5. **verify-publication** (conditional)
   - Skipped if `skip_publish` input is true
   - Waits for PyPI propagation
   - Verifies package is installable
   - Tests imports from PyPI package

6. **summary**
   - Generates GitHub Actions summary
   - Shows results of all jobs
   - Provides installation instructions

## 🎯 Benefits of Independent Workflow

✅ **Flexibility**: Publish without regenerating types
✅ **Speed**: Skip generation if types haven't changed
✅ **Testing**: Test publishing without affecting main workflow
✅ **Debugging**: Easier to debug publishing issues in isolation
✅ **Reusability**: Use the same generated types for multiple publishes
✅ **Hotfixes**: Quick republish with metadata fixes
✅ **Control**: Manual trigger with custom version numbers

## 🔍 Finding Artifact Run IDs

If you want to publish from a specific generation run:

1. Go to GitHub Actions → "Publish Types CI/CD"
2. Click on a successful workflow run
3. Copy the run ID from the URL: `https://github.com/burnt-labs/xion-types/actions/runs/[RUN_ID]`
4. Use this run ID in the "Publish Python Package" workflow input

**Example**: For URL `https://github.com/burnt-labs/xion-types/actions/runs/1234567890`
- Run ID = `1234567890`

## 🔧 Troubleshooting

### Issue: "403 Forbidden" when publishing

**Solution**: Ensure `PYPI_TOKEN` is correctly set in GitHub secrets and has proper permissions.

### Issue: "Package already exists"

**Solution**: Bump the version in `pyproject.toml` or the workflow will skip it automatically.

### Issue: Import errors after installation

**Solution**: Check that `__init__.py` files exist in all package directories.

### Issue: Missing dependencies

**Solution**: Ensure `protobuf>=5.29.4` is installed: `pip install protobuf`

### Issue: "Artifact not found" when publishing

**Solution**: 
1. Check artifact retention period (30 days)
2. Verify the run ID is correct
3. Leave `artifact_run_id` empty to use latest successful run
4. Regenerate types if artifacts have expired

## 📝 Version Management

Versions are set in this priority:

1. **Manual workflow input** - When you trigger manually
2. **Release tag** - From `burnt-labs/xion` repository release
3. **Default** - From `pyproject.toml` (for dev builds)

Version format: `MAJOR.MINOR.PATCH` (e.g., `0.1.0`, `1.2.3`)

## 🎯 Next Steps

1. ✅ Set up PyPI account
2. ✅ Generate and add API token to GitHub secrets
3. ✅ Test build locally (optional but recommended)
4. ✅ Trigger manual workflow with version `0.1.0`
5. ✅ Monitor workflow execution
6. ✅ Verify package on PyPI
7. ✅ Test installation: `pip install xion-types`

## 📚 Resources

- [PyPI](https://pypi.org)
- [Python Packaging Guide](https://packaging.python.org)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Protocol Buffers Python](https://protobuf.dev/getting-started/pythontutorial/)

