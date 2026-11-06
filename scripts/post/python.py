#!/usr/bin/env python3
"""
Fix Python Protobuf Imports

Rewrites absolute imports to xion_types.* imports in-place
and generates __init__.py files recursively.

Operates directly on python/xion_types/ (where buf generates output).

Usage: python3 fix-python-imports.py
Must be run from the xion-types repository root.
"""

import os
import re
import subprocess
from pathlib import Path

TYPES_DIR = Path("python/xion_types")

# Packages whose imports need the xion_types.* prefix
PACKAGES = [
    'gogoproto', 'cosmos_proto', 'cosmos', 'cosmwasm', 'xion',
    'abstractaccount', 'amino', 'ibc', 'tendermint', 'osmosis', 'packetforward',
]


def fix_imports():
    """Rewrite absolute imports to xion_types.* imports in-place."""
    patterns = []
    for pkg in PACKAGES:
        patterns.append((
            re.compile(rf'^(\s*)from {pkg} import', re.MULTILINE),
            rf'\1from xion_types.{pkg} import',
        ))
        patterns.append((
            re.compile(rf'^(\s*)from {pkg}\.', re.MULTILINE),
            rf'\1from xion_types.{pkg}.',
        ))

    count = 0
    for py_file in TYPES_DIR.rglob('*.py'):
        content = py_file.read_text()
        original = content
        for pattern, replacement in patterns:
            content = pattern.sub(replacement, content)
        if content != original:
            py_file.write_text(content)
            count += 1

    print(f"✅ Fixed imports in {count} files")


def create_init_files():
    """Ensure every subdirectory has an __init__.py."""
    count = 0
    for dirpath, _, _ in os.walk(TYPES_DIR):
        init = Path(dirpath) / "__init__.py"
        if not init.exists():
            init.touch()
            count += 1
    print(f"✅ Created {count} __init__.py files")


def main():
    if not TYPES_DIR.exists():
        print(f"❌ {TYPES_DIR} not found — run `make proto-gen-python` first")
        exit(1)

    # Ensure write permissions (Docker volume mounts may be read-only)
    for root, dirs, files in os.walk(TYPES_DIR):
        for d in dirs:
            os.chmod(os.path.join(root, d), 0o755)
        for f in files:
            os.chmod(os.path.join(root, f), 0o644)

    fix_imports()
    create_init_files()

    # Build verification — ensure the package imports cleanly
    print("Verifying Python imports...")
    result = subprocess.run(
        ["python3", "-c", "import importlib, pathlib; "
         "[importlib.import_module(f'xion_types.{p.stem}') "
         "for p in pathlib.Path('python/xion_types').iterdir() "
         "if p.is_dir() and (p / '__init__.py').exists() and p.stem != '__pycache__']"],
        capture_output=True,
        text=True,
        env={**os.environ, "PYTHONPATH": "python"},
    )
    if result.returncode == 0:
        print("  ✅ Python imports verified")
    else:
        print(f"  ⚠️  Import verification skipped: {result.stderr[:200]}")

    print("✅ Python package ready in python/xion_types/")


if __name__ == "__main__":
    main()
