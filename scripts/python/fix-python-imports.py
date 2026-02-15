#!/usr/bin/env python3
"""
Fix Python Protobuf Imports

Rewrites absolute imports to xion_types.* imports in-place,
creates stub files for gogoproto and cosmos_proto,
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


def create_stubs():
    """Create gogoproto and cosmos_proto stubs (buf doesn't generate these for Python)."""
    for pkg, proto_name in [("gogoproto", "gogo"), ("cosmos_proto", "cosmos")]:
        pkg_dir = TYPES_DIR / pkg
        pkg_dir.mkdir(parents=True, exist_ok=True)

        # Write stub .proto
        proto_file = pkg_dir / f"{proto_name}.proto"
        proto_file.write_text(f'syntax = "proto3";\npackage {pkg};\n')

        # Generate pb2 from proto
        try:
            subprocess.run(
                [
                    "python3", "-m", "grpc_tools.protoc",
                    f"--python_out={TYPES_DIR}",
                    f"--proto_path={TYPES_DIR}",
                    str(proto_file),
                ],
                check=False,
                capture_output=True,
            )
        except Exception:
            pass

        # Fix imports in generated stub
        pb2 = pkg_dir / f"{proto_name}_pb2.py"
        if pb2.exists():
            content = pb2.read_text()
            content = re.sub(
                rf'^from {pkg}', f'from xion_types.{pkg}',
                content, flags=re.MULTILINE,
            )
            pb2.write_text(content)

        # __init__.py
        (pkg_dir / "__init__.py").write_text(
            f'"""Stub for {pkg} — not used in Python protobuf"""\n'
        )
        print(f"  Created {pkg} stub")


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

    # Install grpcio-tools if available (needed for stubs)
    try:
        subprocess.run(["pip", "install", "--quiet", "grpcio-tools"],
                       check=True, capture_output=True)
    except Exception:
        pass

    fix_imports()
    create_stubs()
    create_init_files()
    print("✅ Python package ready in python/xion_types/")


if __name__ == "__main__":
    main()
