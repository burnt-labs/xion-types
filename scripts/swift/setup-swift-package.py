#!/usr/bin/env python3
"""
Setup Swift Package Structure

This script creates a complete Swift package structure from generated protobuf types.
It splits the types into multiple targets to avoid Swift Package Manager race conditions.

Usage: python3 setup-swift-package.py
Must be run from the xion-types repository root.
"""

import os
import shutil
import re
from pathlib import Path
from collections import defaultdict

def main():
    types_dir = Path("swift/types")
    sources_base = Path("swift/Sources")

    # Use very small targets (10 files max) to avoid SPM race condition
    # Exception: cosmos files (includes tendermint, abstractaccount, xion, osmosis, cosmwasm, ibc) must stay together
    MAX_FILES_PER_TARGET = 10
    MAX_FILES_PER_TARGET_COSMOS = 1000  # Keep all cosmos-related files together (very large target)

    if not types_dir.exists():
        print("❌ swift/types directory not found")
        exit(1)

    # Create base directories
    Path("swift/Sources/XionTypes").mkdir(parents=True, exist_ok=True)
    Path("swift/Tests/XionTypesTests").mkdir(parents=True, exist_ok=True)

    # Group files by top-level directory
    # Special case: merge all blockchain-related modules into cosmos
    # They heavily depend on each other and protobuf types are internal by default
    files_by_topdir = defaultdict(list)
    for swift_file in types_dir.rglob("*.swift"):
        # Get top-level directory (first component of relative path)
        rel_path = swift_file.relative_to(types_dir)
        top_dir = rel_path.parts[0] if rel_path.parts else "root"
        # Merge into cosmos since they're tightly coupled and share types
        if top_dir in ["tendermint", "abstractaccount", "xion", "osmosis", "cosmwasm", "ibc"]:
            top_dir = "cosmos"
        files_by_topdir[top_dir].append(swift_file)

    print(f"Found {sum(len(files) for files in files_by_topdir.values())} total Swift files in {len(files_by_topdir)} top-level directories")
    if "cosmos" in files_by_topdir:
        cosmos_count = len(files_by_topdir["cosmos"])
        print(f"Cosmos target will contain {cosmos_count} files (includes cosmos, tendermint, abstractaccount, xion, osmosis, cosmwasm, ibc)")

    # Create targets: one per top-level directory, split if too large
    targets = []

    for top_dir, files in sorted(files_by_topdir.items()):
        files.sort()

        # Use larger limit for cosmos to keep all files together
        if top_dir == "cosmos":
            max_files = MAX_FILES_PER_TARGET_COSMOS
        else:
            max_files = MAX_FILES_PER_TARGET

        # If directory has many files, split it into multiple targets
        if len(files) <= max_files:
            # Single target for this directory
            target_name = f"XionTypes{top_dir.capitalize().replace('_', '')}"
            target_path = sources_base / target_name
            target_path.mkdir(parents=True, exist_ok=True)

            # Copy files with unique names to avoid Swift filename conflicts
            seen_filenames = {}
            for src_file in files:
                rel_path = src_file.relative_to(types_dir)
                # Create unique filename by replacing path separators with underscores
                unique_name = str(rel_path).replace('/', '_').replace('\\', '_')
                # If filename already seen in this target, add a counter
                if unique_name in seen_filenames:
                    seen_filenames[unique_name] += 1
                    base_name = unique_name.rsplit('.', 1)
                    if len(base_name) == 2:
                        unique_name = f"{base_name[0]}_{seen_filenames[unique_name]}.{base_name[1]}"
                    else:
                        unique_name = f"{unique_name}_{seen_filenames[unique_name]}"
                else:
                    seen_filenames[unique_name] = 0

                dest_file = target_path / unique_name
                shutil.copy2(src_file, dest_file)

            targets.append({
                "name": target_name,
                "path": f"Sources/{target_name}",
                "file_count": len(files),
                "top_dir": top_dir
            })
            print(f"Created target {target_name} with {len(files)} Swift files from {top_dir}/")
        else:
            # Split large directory into multiple targets
            num_splits = (len(files) + max_files - 1) // max_files
            for split_idx in range(num_splits):
                start_idx = split_idx * max_files
                end_idx = min(start_idx + max_files, len(files))
                split_files = files[start_idx:end_idx]

                target_name = f"XionTypes{top_dir.capitalize().replace('_', '')}Part{split_idx:02d}"
                target_path = sources_base / target_name
                target_path.mkdir(parents=True, exist_ok=True)

                # Copy files with unique names
                seen_filenames = {}
                for src_file in split_files:
                    rel_path = src_file.relative_to(types_dir)
                    unique_name = str(rel_path).replace('/', '_').replace('\\', '_')
                    if unique_name in seen_filenames:
                        seen_filenames[unique_name] += 1
                        base_name = unique_name.rsplit('.', 1)
                        if len(base_name) == 2:
                            unique_name = f"{base_name[0]}_{seen_filenames[unique_name]}.{base_name[1]}"
                        else:
                            unique_name = f"{unique_name}_{seen_filenames[unique_name]}"
                    else:
                        seen_filenames[unique_name] = 0

                    dest_file = target_path / unique_name
                    shutil.copy2(src_file, dest_file)

                targets.append({
                    "name": target_name,
                    "path": f"Sources/{target_name}",
                    "file_count": len(split_files),
                    "top_dir": top_dir
                })
                print(f"Created target {target_name} with {len(split_files)} Swift files from {top_dir}/ (split {split_idx + 1}/{num_splits})")

    # Generate Package.swift content
    lines = []
    lines.append("// swift-tools-version:5.9")
    lines.append("import PackageDescription")
    lines.append("")
    lines.append("let package = Package(")
    lines.append('    name: "XionTypes",')
    lines.append("    platforms: [")
    lines.append("        .iOS(.v13),")
    lines.append("        .macOS(.v10_15),")
    lines.append("        .watchOS(.v6),")
    lines.append("        .tvOS(.v13)")
    lines.append("    ],")
    lines.append("    products: [")
    lines.append('        .library(')
    lines.append('            name: "XionTypes",')
    lines.append('            targets: ["XionTypes"])')
    lines.append("    ],")
    lines.append("    dependencies: [")
    lines.append('        .package(url: "https://github.com/apple/swift-protobuf.git", from: "1.28.0")')
    lines.append("    ],")
    lines.append("    targets: [")

    # Add all sub-targets with proper dependency ordering
    all_target_names = [t["name"] for t in targets]

    # Identify base targets
    google_targets = [t["name"] for t in targets if t.get("top_dir", "").lower() == "google"]
    gogoproto_targets = [t["name"] for t in targets if t.get("top_dir", "").lower() == "gogoproto"]
    cosmos_proto_targets = [t["name"] for t in targets if t.get("top_dir", "").lower() == "cosmos_proto"]
    cosmos_targets = [t["name"] for t in targets if t.get("top_dir", "").lower() == "cosmos"]

    print(f"Found {len(google_targets)} google targets, {len(gogoproto_targets)} gogoproto targets, {len(cosmos_proto_targets)} cosmos_proto targets, {len(cosmos_targets)} cosmos targets")

    for target in targets:
        lines.append(f'        .target(')
        lines.append(f'            name: "{target["name"]}",')
        lines.append("            dependencies: [")

        target_top_dir = target.get("top_dir", "unknown")
        target_top_dir_lower = target_top_dir.lower()
        target_name = target["name"]

        # Collect all additional dependencies
        additional_deps = []

        # Add dependencies on previous parts from same directory
        if "Part" in target_name:
            match = re.search(r'Part(\d+)', target_name)
            if match:
                part_num = int(match.group(1))
                for other_target in targets:
                    if other_target.get("top_dir", "").lower() == target_top_dir_lower and other_target["name"] != target_name:
                        other_match = re.search(r'Part(\d+)', other_target["name"])
                        if other_match and int(other_match.group(1)) < part_num:
                            additional_deps.append(f'                "{other_target["name"]}",')

        # Add base dependencies in order (avoid cycles):
        # 1. google and gogoproto are base
        # 2. cosmos_proto depends on google/gogoproto
        # 3. cosmos depends on cosmos_proto, google, gogoproto
        # 4. Everything else depends on cosmos, google, cosmos_proto, gogoproto

        if target_top_dir_lower == "cosmos_proto":
            for google_target in google_targets:
                additional_deps.append(f'                "{google_target}",')
            for gogoproto_target in gogoproto_targets:
                additional_deps.append(f'                "{gogoproto_target}",')
        elif target_top_dir_lower == "cosmos":
            for cosmos_proto_target in cosmos_proto_targets:
                additional_deps.append(f'                "{cosmos_proto_target}",')
            for google_target in google_targets:
                additional_deps.append(f'                "{google_target}",')
            for gogoproto_target in gogoproto_targets:
                additional_deps.append(f'                "{gogoproto_target}",')
        elif target_top_dir_lower not in ["google", "gogoproto", "cosmos_proto", "cosmos"]:
            for cosmos_target in cosmos_targets:
                additional_deps.append(f'                "{cosmos_target}",')
            for cosmos_proto_target in cosmos_proto_targets:
                additional_deps.append(f'                "{cosmos_proto_target}",')
            for google_target in google_targets:
                additional_deps.append(f'                "{google_target}",')
            for gogoproto_target in gogoproto_targets:
                additional_deps.append(f'                "{gogoproto_target}",')

        # Add SwiftProtobuf dependency
        if additional_deps:
            lines.append('                .product(name: "SwiftProtobuf", package: "swift-protobuf"),')
        else:
            lines.append('                .product(name: "SwiftProtobuf", package: "swift-protobuf")')

        lines.extend(additional_deps)

        lines.append("            ],")
        lines.append(f'            path: "{target["path"]}"),')

    # Add main XionTypes target that depends on all sub-targets
    lines.append('        .target(')
    lines.append('            name: "XionTypes",')
    lines.append("            dependencies: [")
    lines.append('                .product(name: "SwiftProtobuf", package: "swift-protobuf"),')
    for name in all_target_names:
        lines.append(f'                "{name}",')
    lines.append("            ],")
    lines.append('            path: "Sources/XionTypes"),')
    lines.append('        .testTarget(')
    lines.append('            name: "XionTypesTests",')
    lines.append('            dependencies: ["XionTypes"],')
    lines.append('            path: "Tests/XionTypesTests")')
    lines.append("    ]")
    lines.append(")")

    # Write Package.swift
    with open("swift/Package.swift", "w") as f:
        f.write("\n".join(lines))

    print(f"✅ Generated Package.swift with {len(targets)} sub-targets")
    print(f"Total targets: {len(targets) + 1} (including main XionTypes target)")

    # Create main XionTypes re-export file
    with open("swift/Sources/XionTypes/XionTypes.swift", "w") as f:
        f.write("// Main XionTypes module - re-exports all sub-modules\n")
        f.write("// This file can be used for any module-level declarations\n")

    # Create version file
    with open("swift/Sources/XionTypes/Version.swift", "w") as f:
        f.write("// Generated version file\n")
        f.write("public enum XionTypesVersion {\n")
        f.write("    public static let version = \"0.1.0\"\n")
        f.write("}\n")

    # Create minimal test file if it doesn't exist
    test_file = Path("swift/Tests/XionTypesTests/XionTypesTests.swift")
    if not test_file.exists():
        with open(test_file, "w") as f:
            f.write("import XCTest\n")
            f.write("@testable import XionTypes\n\n")
            f.write("final class XionTypesTests: XCTestCase {\n")
            f.write("    func testExample() {\n")
            f.write("        // Placeholder test to ensure the package builds correctly\n")
            f.write("        XCTAssertTrue(true)\n")
            f.write("    }\n")
            f.write("}\n")
        print("✅ Created swift/Tests/XionTypesTests/XionTypesTests.swift")

    # Move types directory outside package to prevent SPM from scanning it
    if Path("swift/types").exists():
        print("Moving types directory outside package structure...")
        try:
            Path("swift/types").rename("swift-types-temp")
        except:
            pass

    # Verify the structure
    total_files = len(list(Path("swift/Sources").rglob("*.swift")))
    print(f"Total Swift files organized: {total_files}")

    print("✅ Swift package structure created successfully")

if __name__ == "__main__":
    main()
