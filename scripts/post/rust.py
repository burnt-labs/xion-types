#!/usr/bin/env python3
"""
Setup Rust package structure for generated protobuf types.

This script:
1. Generates mod.rs files recursively for the types directory
2. Creates lib.rs entry point
3. Fixes module paths in generated files (super:: -> crate::types::)
4. Fixes various compilation issues (enum conflicts, Copy derive, doctests)
"""

import re
import shutil
import subprocess
import sys
from pathlib import Path


def dedup_prost_file(filepath):
    """Deduplicate a prost-generated .rs file that may have been built by
    concatenating output from multiple BSR sources.

    Each source produces a complete file ending with:
      // @@protoc_insertion_point(module)
    We split on these boundaries to get per-source segments, then merge
    all unique top-level items across segments.
    """
    content = filepath.read_text()

    # Split into per-source segments using the insertion point marker
    segments = re.split(r'// @@protoc_insertion_point\(module\)\n?(?:// @generated\n?)?', content)
    segments = [s.strip() for s in segments if s.strip()]

    if len(segments) <= 1:
        return False  # Only one source, nothing to dedup

    # Parse each segment into top-level items using brace-depth tracking
    def parse_items(text):
        """Split a prost segment into top-level items (struct/enum/impl/mod blocks)."""
        lines = text.split('\n')
        items = []
        current = []
        depth = 0
        max_depth = 0

        for line in lines:
            stripped = line.strip()
            # At depth 0 after a braced block, start a new item
            if depth == 0 and current and max_depth > 0:
                items.append('\n'.join(current))
                current = []
                max_depth = 0

            for ch in stripped:
                if ch == '{':
                    depth += 1
                    max_depth = max(max_depth, depth)
                elif ch == '}':
                    depth = max(0, depth - 1)

            current.append(line)

        if current:
            text = '\n'.join(current).strip()
            if text:
                items.append('\n'.join(current))
        return items

    def get_sig(item_text):
        for iline in item_text.split('\n'):
            s = iline.strip()
            m = re.match(r'pub\s+(struct|enum)\s+(\w+)', s)
            if m:
                return f"{m.group(1)} {m.group(2)}"
            m = re.match(r'pub\s+mod\s+(\w+)', s)
            if m:
                return f"mod {m.group(1)}"
            m = re.match(r'impl\s+(.*?)\s+for\s+(\w+)', s)
            if m:
                return f"impl {m.group(1).strip()} for {m.group(2)}"
            m = re.match(r'impl\s+(\w+)\s*\{', s)
            if m:
                return f"impl {m.group(1)}"
        return None

    # Collect all items from all segments, dedup by signature (keep larger)
    sig_to_idx = {}
    unique_items = []

    for segment in segments:
        for item in parse_items(segment):
            sig = get_sig(item)
            if sig and sig in sig_to_idx:
                idx = sig_to_idx[sig]
                if len(item) > len(unique_items[idx]):
                    unique_items[idx] = item
                continue
            if sig:
                sig_to_idx[sig] = len(unique_items)
            # Skip orphaned doc comments (no definition following)
            elif item.strip().startswith('///'):
                continue
            unique_items.append(item)

    deduped = '\n'.join(unique_items)
    deduped += '\n// @@protoc_insertion_point(module)\n'
    deduped = deduped.rstrip() + '\n'
    original = content.rstrip() + '\n'
    if deduped != original:
        filepath.write_text(deduped)
        return True
    return False


def merge_staged(repo_root, types_dir):
    """Merge staged Rust outputs from multiple BSR sources into rust/types/.

    gen_buf stages each BSR source separately into .rust-staged/<id>/ to avoid
    prost silently overwriting types from earlier sources. This function merges
    them: identical files are copied once; differing files are concatenated so
    dedup_prost_file can deduplicate the result.
    """
    staged_root = repo_root / ".rust-staged"
    if not staged_root.exists():
        return

    staged_dirs = sorted(d for d in staged_root.iterdir() if d.is_dir())
    if not staged_dirs:
        shutil.rmtree(staged_root)
        return

    types_dir.mkdir(parents=True, exist_ok=True)

    all_files = set()
    for staged_dir in staged_dirs:
        for f in staged_dir.rglob("*.rs"):
            all_files.add(f.relative_to(staged_dir))

    merged = 0
    for rel_path in sorted(all_files):
        versions = [d / rel_path for d in staged_dirs if (d / rel_path).exists()]
        dest = repo_root / rel_path
        dest.parent.mkdir(parents=True, exist_ok=True)

        if len(versions) == 1:
            shutil.copy2(versions[0], dest)
        elif all(v.read_bytes() == versions[0].read_bytes() for v in versions[1:]):
            shutil.copy2(versions[0], dest)
        else:
            # Concatenate — dedup_prost_file will deduplicate below
            with dest.open("w") as out:
                for v in versions:
                    out.write(v.read_text())
            merged += 1

    shutil.rmtree(staged_root)
    if merged:
        print(f"  Merged {merged} .rs files from {len(staged_dirs)} BSR sources")


def main():
    # Get the directory of this script, then go up to the repo root
    script_dir = Path(__file__).parent.resolve()
    repo_root = script_dir.parent.parent
    types_dir = repo_root / "rust" / "types"

    # Merge staged outputs from gen_buf before anything else
    merge_staged(repo_root, types_dir)

    if not types_dir.exists():
        print("❌ rust/types directory not found")
        sys.exit(1)

    # 0a. Deduplicate .rs files that were built by appending multiple sources
    dedup_count = 0
    for rs_file in types_dir.rglob("*.rs"):
        if rs_file.name == "mod.rs":
            continue
        if dedup_prost_file(rs_file):
            dedup_count += 1
    if dedup_count:
        print(f"  Deduplicated {dedup_count} merged .rs files")

    # 0. Remove conflicting files where both name.rs and name/mod.rs exist
    # Rust doesn't allow both, so we keep the directory version
    # Process recursively to handle nested directories too
    def remove_conflicting_files(dir_path):
        for item in dir_path.iterdir():
            if item.is_dir():
                rs_file = dir_path / f"{item.name}.rs"
                if rs_file.exists():
                    print(f"Removing conflicting file {rs_file} (keeping {item}/ directory)")
                    rs_file.unlink()
                # Recurse into subdirectories
                remove_conflicting_files(item)
    
    remove_conflicting_files(types_dir)

    # 1. Generate mod.rs files recursively
    def create_mod_rs(dir_path):
        rs_files = [f for f in dir_path.glob("*.rs") if f.name != "mod.rs"]
        subdirs = [d for d in dir_path.iterdir() if d.is_dir() and create_mod_rs(d)]
        
        if not rs_files and not subdirs:
            return False
        
        with (dir_path / "mod.rs").open("w") as f:
            f.write("// Auto-generated module\n")
            for rs_file in sorted(rs_files):
                modname = rs_file.stem
                if '.' in modname:
                    f.write(f'#[path = "{rs_file.name}"]\npub mod {modname.replace(".", "_")};\n')
                else:
                    f.write(f"pub mod {modname};\n")
            for subdir in subdirs:
                f.write(f"pub mod {subdir.name};\n")
        return True
    
    # Process subdirectories first
    for item in sorted(types_dir.iterdir()):
        if item.is_dir() and any(item.rglob("*.rs")):
            create_mod_rs(item)
    
    # Create root mod.rs
    # Track modules to prevent duplicates (e.g., if amino/ dir and amino.rs both exist)
    written_modules = set()
    with (types_dir / "mod.rs").open("w") as f:
        f.write("// Auto-generated module\n")
        for item in sorted(types_dir.iterdir()):
            if item.is_dir() and (item / "mod.rs").exists():
                if item.name not in written_modules:
                    f.write(f"pub mod {item.name};\n")
                    written_modules.add(item.name)
            elif item.suffix == ".rs" and item.name != "mod.rs":
                modname = item.stem
                mod_key = modname.replace(".", "_") if '.' in modname else modname
                if mod_key not in written_modules:
                    if '.' in modname:
                        f.write(f'#[path = "{item.name}"]\npub mod {mod_key};\n')
                    else:
                        f.write(f"pub mod {modname};\n")
                    written_modules.add(mod_key)
    
    # 2. Create lib.rs
    lib_rs = repo_root / "rust" / "src" / "lib.rs"
    lib_rs.parent.mkdir(parents=True, exist_ok=True)
    lib_rs.write_text("""//! Generated Rust types for Xion blockchain protocol buffers
          
pub mod types {
    include!(concat!(env!("CARGO_MANIFEST_DIR"), "/types/mod.rs"));
}
""")
    
    # 3. Build module name map from actual files
    module_map = {}
    for rs_file in types_dir.rglob("*.rs"):
        if rs_file.name == "mod.rs":
            continue
        # File: cosmos.base.query.v1beta1.rs -> module: cosmos_base_query_v1beta1
        mod_name = rs_file.stem.replace('.', '_')
        module_map[mod_name] = rs_file
    
    # 4. Fix module paths in generated files
    # Order matters: most specific first
    path_mappings = [
        # IBC multi-level paths (most specific)
        (r'(super::)+ibc::applications::interchain_accounts::controller::v1::', 'crate::types::ibc_applications_interchain_accounts_controller_v1::'),
        (r'(super::)+ibc::applications::interchain_accounts::host::v1::', 'crate::types::ibc_applications_interchain_accounts_host_v1::'),
        (r'(super::)+ibc::applications::interchain_accounts::v1::', 'crate::types::ibc_applications_interchain_accounts_v1::'),
        (r'(super::)+ibc::core::channel::v1::', 'crate::types::ibc_core_channel_v1::'),
        (r'(super::)+ibc::core::channel::v2::', 'crate::types::ibc_core_channel_v2::'),
        (r'(super::)+ibc::core::connection::v1::', 'crate::types::ibc_core_connection_v1::'),
        (r'(super::)+ibc::core::types::v1::', 'crate::types::ibc_core_types_v1::'),
        (r'(super::)+ibc::core::client::v1::', 'crate::types::ibc_core_client_v1::'),
        (r'(super::)+ibc::core::client::v2::', 'crate::types::ibc_core_client_v2::'),
        (r'(super::)+ibc::core::commitment::v1::', 'crate::types::ibc_core_commitment_v1::'),
        (r'(super::)+ibc::core::commitment::v2::', 'crate::types::ibc_core_commitment_v2::'),
        # Cosmos multi-level paths
        (r'(super::)+tendermint::libs::bits::', 'crate::types::tendermint_libs_bits::'),
        (r'(super::)+cosmos::base::tendermint::v1beta1::', 'crate::types::cosmos_base_tendermint_v1beta1::'),
        (r'(super::)+cosmos::base::query::v1beta1::', 'crate::types::cosmos_base_query_v1beta1::'),
        (r'(super::)+cosmos::base::abci::v1beta1::', 'crate::types::cosmos_base_abci_v1beta1::'),
        (r'(super::)+cosmos::base::reflection::v1beta1::', 'crate::types::cosmos_base_reflection_v1beta1::'),
        (r'(super::)+cosmos::base::reflection::v2alpha1::', 'crate::types::cosmos_base_reflection_v2alpha1::'),
        (r'(super::)+cosmos::base::node::v1beta1::', 'crate::types::cosmos_base_node_v1beta1::'),
        (r'(super::)+cosmos::crypto::multisig::v1beta1::', 'crate::types::cosmos_crypto_multisig_v1beta1::'),
        (r'(super::)+cosmos::crypto::hd::v1::', 'crate::types::cosmos_crypto_hd_v1::'),
        (r'(super::)+cosmos::tx::signing::v1beta1::', 'crate::types::cosmos_tx_signing_v1beta1::'),
        (r'(super::)+cosmos::ics23::v1::', 'crate::types::cosmos_ics23_v1::'),
        (r'(super::)+cosmos::upgrade::v1beta1::', 'crate::types::cosmos_upgrade_v1beta1::'),
        (r'(super::)+cosmos::store::v1beta1::', 'crate::types::cosmos_store_v1beta1::'),
        # Two-level paths
        (r'(super::)+tendermint::abci::', 'crate::types::tendermint_abci::'),
        (r'(super::)+tendermint::types::', 'crate::types::tendermint_types::'),
        (r'(super::)+tendermint::version::', 'crate::types::tendermint_version::'),
        (r'(super::)+tendermint::p2p::', 'crate::types::tendermint_p2p::'),
        (r'(super::)+tendermint::crypto::', 'crate::types::tendermint_crypto::'),
        (r'(super::)+cosmos::base::v1beta1::', 'crate::types::cosmos_base_v1beta1::'),
        (r'(super::)+cosmos::bank::v1beta1::', 'crate::types::cosmos_bank_v1beta1::'),
        (r'(super::)+cosmos::auth::v1beta1::', 'crate::types::cosmos_auth_v1beta1::'),
        (r'(super::)+cosmos::authz::v1beta1::', 'crate::types::cosmos_authz_v1beta1::'),
        (r'(super::)+base::query::v1beta1::', 'crate::types::cosmos_base_query_v1beta1::'),
        (r'(super::)+base::v1beta1::', 'crate::types::cosmos_base_v1beta1::'),
        (r'(super::)+base::abci::v1beta1::', 'crate::types::cosmos_base_abci_v1beta1::'),
        # Single-level paths that need context
        (r'(super::)+query::v1beta1::', 'crate::types::cosmos_base_query_v1beta1::'),
        (r'(super::)+hd::v1::', 'crate::types::cosmos_crypto_hd_v1::'),
        (r'(super::)+crypto::multisig::v1beta1::', 'crate::types::cosmos_crypto_multisig_v1beta1::'),
        (r'(super::)+signing::v1beta1::', 'crate::types::cosmos_tx_signing_v1beta1::'),
        (r'(super::)+client::v1::', 'crate::types::ibc_core_client_v1::'),
        (r'(super::)+client::v2::', 'crate::types::ibc_core_client_v2::'),
        (r'(super::)+commitment::v1::', 'crate::types::ibc_core_commitment_v1::'),
        (r'(super::)+commitment::v2::', 'crate::types::ibc_core_commitment_v2::'),
        (r'(super::)+channel::v1::', 'crate::types::ibc_core_channel_v1::'),
        (r'(super::)+channel::v2::', 'crate::types::ibc_core_channel_v2::'),
        (r'(super::)+connection::v1::', 'crate::types::ibc_core_connection_v1::'),
        (r'(super::)+controller::v1::', 'crate::types::ibc_applications_interchain_accounts_controller_v1::'),
        (r'(super::)+host::v1::', 'crate::types::ibc_applications_interchain_accounts_host_v1::'),
        (r'(super::)+v1::', 'crate::types::ibc_applications_interchain_accounts_v1::'),
        (r'(super::)+v1beta1::', 'crate::types::cosmos_store_v1beta1::'),
    ]
    
    # Helper function to convert hierarchical path to flat module name
    def path_to_module(path_parts):
        """Convert ['cosmos', 'base', 'query', 'v1beta1'] to 'cosmos_base_query_v1beta1'"""
        return '_'.join(path_parts)
    
    files_processed = 0
    for rs_file in types_dir.rglob("*.rs"):
        if rs_file.name == "mod.rs":
            continue
        
        content = rs_file.read_text()
        original = content
        
        # Apply specific mappings first
        for pattern_str, replacement in path_mappings:
            content = re.sub(pattern_str, replacement, content)
        
        # Handle remaining super::super::... paths by converting to flat module names
        def replace_path(match):
            path_parts = match.group(2).split('::')
            mod_name = path_to_module(path_parts)
            # Check if module exists, otherwise try common prefixes
            if mod_name in module_map:
                return f'crate::types::{mod_name}::'
            # Try with cosmos prefix
            cosmos_mod = f'cosmos_{mod_name}'
            if cosmos_mod in module_map:
                return f'crate::types::{cosmos_mod}::'
            # Try with ibc prefix
            ibc_mod = f'ibc_{mod_name}'
            if ibc_mod in module_map:
                return f'crate::types::{ibc_mod}::'
            return match.group(0)  # Keep original if can't resolve
        
        # Match remaining super::... paths
        content = re.sub(
            r'(super::)+([a-z_][a-z0-9_]*(?:::[a-z_][a-z0-9_]*)*)::',
            replace_path,
            content
        )
        
        # Fix super::types::, super::crypto::, and super::version:: in tendermint files
        if 'tendermint' in rs_file.stem:
            content = re.sub(r'super::types::', 'crate::types::tendermint_types::', content)
            content = re.sub(r'super::crypto::', 'crate::types::tendermint_crypto::', content)
            content = re.sub(r'super::version::', 'crate::types::tendermint_version::', content)
        
        # Fix context-dependent paths like super::super::v1:: in IBC files
        # From ibc.applications.interchain_accounts.controller.v1.rs, super::super::v1:: -> interchain_accounts.v1
        if 'ibc.applications.interchain_accounts' in rs_file.stem:
            # Extract parent module from filename
            parts = rs_file.stem.split('.')
            if 'controller' in parts or 'host' in parts:
                # super::super::v1:: means go up to interchain_accounts.v1
                parent_mod = '_'.join(parts[:-2])  # Remove controller.v1 or host.v1
                content = re.sub(
                    r'super::super::v1::',
                    f'crate::types::{parent_mod}_v1::',
                    content
                )
        
        # Fix already-converted paths that reference nested modules (e.g., crate::types::query::v1beta1::)
        def fix_nested_path(match):
            path_parts = match.group(1).split('::')
            mod_name = path_to_module(path_parts)
            if mod_name in module_map:
                return f'crate::types::{mod_name}::'
            # Try with cosmos prefix
            cosmos_mod = f'cosmos_{mod_name}'
            if cosmos_mod in module_map:
                return f'crate::types::{cosmos_mod}::'
            # Try with ibc prefix  
            ibc_mod = f'ibc_{mod_name}'
            if ibc_mod in module_map:
                return f'crate::types::{ibc_mod}::'
            return match.group(0)
        
        # Fix paths like crate::types::query::v1beta1:: -> crate::types::cosmos_base_query_v1beta1::
        content = re.sub(
            r'crate::types::([a-z_][a-z0-9_]*(?:::[a-z_][a-z0-9_]*)+)::',
            fix_nested_path,
            content
        )
        
        # Clean up invalid patterns
        content = re.sub(r'crate::types::super::+', 'crate::types::', content)
        
        # Fix MerklePath reference - it's in a nested module but referenced from flat module name
        # Files in ibc/core/client/v1/ reference crate::types::ibc_core_commitment_v1::MerklePath
        # but MerklePath is in the nested ibc/core/commitment/v1/ directory
        # Apply to all files that have this reference (both flat and nested ibc.core.client files)
        content = re.sub(
            r'crate::types::ibc_core_commitment_v1::MerklePath',
            'crate::types::ibc::core::commitment::v1::ibc_core_commitment_v1::MerklePath',
            content
        )
        
        # Fix Validators duplicate (enum conflicts with struct)
        if rs_file.name == 'cosmos.staking.v1beta1.rs':
            # Rename the enum to ValidatorsEnum
            content = re.sub(r'pub enum Validators \{', 'pub enum ValidatorsEnum {', content)
            # Update oneof reference from Validators to ValidatorsEnum
            content = re.sub(
                r'oneof="stake_authorization::Validators"',
                'oneof="stake_authorization::ValidatorsEnum"',
                content
            )
            # Update Option<stake_authorization::Validators> to ValidatorsEnum (but keep struct Validators)
            # This is tricky - we need to update the enum type, not the struct type
            content = re.sub(
                r'Option<stake_authorization::Validators>',
                'Option<stake_authorization::ValidatorsEnum>',
                content
            )
            # Update enum variant references that use the enum type
            content = re.sub(
                r'ValidatorsEnum::(AllowList|DenyList)\(Validators\)',
                r'ValidatorsEnum::\1(Validators)',
                content
            )
        
        # Remove Copy from derive when struct contains non-Copy fields (Duration, Timestamp)
        # Check if struct contains Option<Duration> or Option<Timestamp>
        if 'Option<::prost_types::Duration>' in content or 'Option<::prost_types::Timestamp>' in content:
            # Remove Copy from derive attributes that include prost::Message
            content = re.sub(
                r'#\[derive\(Clone,\s*Copy,\s*PartialEq,\s*::prost::Message\)\]',
                '#[derive(Clone, PartialEq, ::prost::Message)]',
                content
            )
            content = re.sub(
                r'#\[derive\(Clone,\s*Copy,\s*::prost::Message\)\]',
                '#[derive(Clone, ::prost::Message)]',
                content
            )
        
        # Remove Eq and Hash from derive when struct contains Option<prost_types::Any> or Option types
        # that don't implement Eq/Hash. This is a common issue with protobuf-generated code.
        # Check for patterns that indicate problematic fields
        problematic_patterns = [
            r'Option<[^>]*prost_types::Any',
            r'Option<[^>]*::prost_types::Any',
            r'Option<[^>]*::tendermint_types::(ConsensusParams|BlockParams|EvidenceParams|ValidatorParams|AbciParams)',
            r'Option<[^>]*::cosmos_crypto_hd_v1::Bip44Params',
            r'Option<[^>]*::cosmos_base_query_v1beta1::(PageRequest|PageResponse)',
            r'Option<[^>]*::cosmos_base_v1beta1::Coin',
            r'Option<[^>]*prost_types::Duration',
            r'Option<[^>]*::prost_types::Duration',
            r'Option<[^>]*::cosmos_crypto_keyring_v1::record::(Local|Ledger|Multi|Offline)',
            r'Option<[^>]*::cosmos_auth_v1beta1::BaseAccount',
            r'Option<[^>]*::ibc_applications_interchain_accounts_v1::InterchainAccountPacketData',
            r'Option<[^>]*::ibc_core_client_v1::Height',
        ]
        
        has_problematic_fields = any(re.search(pattern, content) for pattern in problematic_patterns)
        
        # Also check if this is an enum with variants that contain problematic types
        is_problematic_enum = (
            re.search(r'pub enum \w+ \{', content) and
            (re.search(r'Local\(Local\)|Ledger\(Ledger\)|Multi\(Multi\)|Offline\(Offline\)', content) or
             re.search(r'Option<[^>]*::cosmos_crypto_keyring_v1::record::', content))
        )
        
        if has_problematic_fields or is_problematic_enum:
            # Remove Eq and Hash from derive attributes
            content = re.sub(
                r'#\[derive\(Clone,\s*PartialEq,\s*Eq,\s*Hash,\s*::prost::Message\)\]',
                '#[derive(Clone, PartialEq, ::prost::Message)]',
                content
            )
            content = re.sub(
                r'#\[derive\(Clone,\s*Copy,\s*PartialEq,\s*Eq,\s*Hash,\s*::prost::Message\)\]',
                '#[derive(Clone, Copy, PartialEq, ::prost::Message)]',
                content
            )
            content = re.sub(
                r'#\[derive\(Clone,\s*PartialEq,\s*Eq,\s*Hash,\s*::prost::Oneof\)\]',
                '#[derive(Clone, PartialEq, ::prost::Oneof)]',
                content
            )
            content = re.sub(
                r'#\[derive\(Clone,\s*PartialEq,\s*Eq,\s*Hash\)\]',
                '#[derive(Clone, PartialEq)]',
                content
            )
            content = re.sub(
                r'#\[derive\(Clone,\s*Copy,\s*PartialEq,\s*Eq,\s*Hash\)\]',
                '#[derive(Clone, Copy, PartialEq)]',
                content
            )
        
        # Fix doctest issues: prevent protobuf/YAML/EBNF code blocks from being compiled
        # Rust doctests extract indented code blocks (4+ spaces) and try to compile them
        # We add `# ` prefix to protobuf examples to make them comments (hidden from doctests)
        def fix_protobuf_code_blocks(text):
            lines = text.split('\n')
            result = []
            i = 0
            in_protobuf_block = False
            
            while i < len(lines):
                line = lines[i]
                protobuf_syntax = False
                
                # Check for ``` code blocks
                if re.match(r'\s*///\s*```(?:rust)?\s*$', line):
                    # Look ahead to see if this code block contains protobuf syntax
                    j = i + 1
                    while j < len(lines) and j < i + 100:
                        if re.match(r'\s*///\s*```\s*$', lines[j]):
                            break
                        if re.search(r'\bservice\s+\w+\s*\{', lines[j]) or \
                           re.search(r'\brpc\s+\w+\(', lines[j]) or \
                           re.search(r'\bmessage\s+\w+\s*\{', lines[j]) or \
                           re.search(r'^\s*http:', lines[j]) or \
                           re.search(r'\\\[.*\\\]', lines[j]):
                            protobuf_syntax = True
                            break
                        j += 1
                    
                    if protobuf_syntax:
                        result.append(re.sub(r'```(?:rust)?\s*$', '```text', line))
                        in_protobuf_block = True
                    else:
                        result.append(line)
                # Check for indented code blocks (4+ spaces after ///) - these are treated as doctests
                elif re.match(r'\s*///\s{4,}', line):
                    # If we're already in a protobuf block, continue adding # to this line
                    if in_protobuf_block:
                        result.append(re.sub(r'(///)(\s+)', r'\1 #\2', line))
                    else:
                        # Check current line first for quick detection
                        protobuf_syntax = (
                            re.search(r'///.*\bservice\s+\w+\s*\{', line) or
                            re.search(r'///.*\brpc\s+\w+\(', line) or
                            re.search(r'///.*\bmessage\s+\w+\s*\{', line) or
                            re.search(r'///.*http:', line) or
                            re.search(r'///.*\\\[.*\\\]', line) or
                            re.search(r'///.*Template\s*=\s*"/"', line) or
                            re.search(r'///.*Variable\s*=\s*"\{', line) or
                            re.search(r'///.*rules:', line) or
                            re.search(r'///.*selector:', line)
                        )
                        
                        # If not found in current line, check nearby lines
                        if not protobuf_syntax:
                            check_lines = [line]
                            for j in range(i + 1, min(i + 20, len(lines))):
                                if not re.match(r'\s*///', lines[j]):
                                    break
                                check_lines.append(lines[j])
                            
                            block_text = '\n'.join(check_lines)
                            protobuf_syntax = (
                                re.search(r'///.*\bservice\s+\w+\s*\{', block_text) or
                                re.search(r'///.*\brpc\s+\w+\(', block_text) or
                                re.search(r'///.*\bmessage\s+\w+\s*\{', block_text) or
                                re.search(r'///.*http:', block_text) or
                                re.search(r'///.*\\\[.*\\\]', block_text) or
                                re.search(r'///.*Template\s*=\s*"/"', block_text) or
                                re.search(r'///.*Variable\s*=\s*"\{', block_text) or
                                re.search(r'///.*rules:', block_text) or
                                re.search(r'///.*selector:', block_text)
                            )
                        
                        if protobuf_syntax:
                            in_protobuf_block = True
                            # Add `# ` prefix after /// to make it a comment (hidden from doctests)
                            # Change `///      code` to `/// #      code` to prevent doctest extraction
                            result.append(re.sub(r'(///)(\s+)', r'\1 #\2', line))
                        else:
                            result.append(line)
                else:
                    # Check if we're ending a protobuf block
                    if in_protobuf_block:
                        if re.match(r'\s*///\s*```\s*$', line):
                            in_protobuf_block = False
                            result.append(line)
                        elif not re.match(r'\s*///', line):
                            in_protobuf_block = False
                            result.append(line)
                        elif re.match(r'\s*///\s*$', line) or re.match(r'\s*///\s{1,3}\S', line):
                            # Non-indented doc comment line - end the block
                            in_protobuf_block = False
                            result.append(line)
                        else:
                            # Still in block but not indented - shouldn't happen, but handle it
                            result.append(line)
                    else:
                        result.append(line)
                
                i += 1
            
            return '\n'.join(result)
        
        content = fix_protobuf_code_blocks(content)
        
        if content != original:
            rs_file.write_text(content)
            files_processed += 1
    
    print(f"✅ Setup complete: processed {files_processed} files")

    # 5. Add stub types for tendermint types that are referenced but not
    # generated by any BSR source (Block, EvidenceList from block.proto/evidence.proto)
    tendermint_types_file = types_dir / "tendermint.types.rs"
    if tendermint_types_file.exists():
        tt_content = tendermint_types_file.read_text()
        stubs_needed = []
        all_rs_content = ""
        for f in types_dir.rglob("*.rs"):
            if f.name != "mod.rs":
                all_rs_content += f.read_text()
        for type_name in ["Block", "EvidenceList", "Evidence"]:
            # Use word boundary to avoid matching BlockId, BlockParams etc.
            ref_pattern = re.compile(r'tendermint_types::' + type_name + r'[^A-Za-z0-9_]')
            if (ref_pattern.search(all_rs_content) and
                    f"pub struct {type_name} " not in tt_content and
                    f"pub struct {type_name} {{" not in tt_content):
                stubs_needed.append(type_name)
        if stubs_needed:
            with tendermint_types_file.open("a") as f:
                for name in stubs_needed:
                    f.write(f"\n/// Stub for tendermint.types.{name} (not in BSR transitive deps).\n")
                    f.write(f"#[allow(clippy::derive_partial_eq_without_eq)]\n")
                    f.write(f"#[derive(Clone, PartialEq, ::prost::Message)]\n")
                    f.write(f"pub struct {name} {{}}\n")
            print(f"  Added stubs for missing tendermint types: {', '.join(stubs_needed)}")

    # Build verification — ensure generated types compile
    rust_dir = repo_root / "rust"
    if shutil.which("cargo"):
        print("Verifying Rust compilation...")
        result = subprocess.run(
            ["cargo", "check"],
            cwd=rust_dir,
            capture_output=True,
            text=True,
        )
        if result.returncode == 0:
            print("  ✅ Rust compiles")
        else:
            print("  ⚠️  Compilation check failed:")
            print(result.stderr[-500:] if len(result.stderr) > 500 else result.stderr)

    # Clean up build artifacts — target/ contains lock files that break
    # artifact uploads in CI
    target_dir = rust_dir / "target"
    if target_dir.exists():
        shutil.rmtree(target_dir)
        print("  Cleaned rust/target/")


if __name__ == "__main__":
    main()

