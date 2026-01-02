use glob::glob;
use regex::Regex;
use std::collections::BTreeSet;
use std::fs;
use std::io::{self, Write};
use std::path::Path;

fn main() {
    println!("cargo:rerun-if-changed=types");

    let manifest_dir = std::env::var("CARGO_MANIFEST_DIR").unwrap();
    let types_dir = Path::new(&manifest_dir).join("types");

    // Apply patches to fix conflicts in generated files
    apply_patches(&types_dir);

    let out_dir = std::env::var("OUT_DIR").unwrap();
    let lib_path = Path::new(&out_dir).join("generated_lib.rs");
    let mut lib_file = fs::File::create(&lib_path).unwrap();

    writeln!(
        lib_file,
        "/// Generated Rust types for Xion blockchain protocol buffers\n"
    )
    .unwrap();

    // Find all .rs files in the types directory
    let mut files: Vec<_> = glob("types/*.rs")
        .unwrap()
        .filter_map(Result::ok)
        .collect();
    files.sort();

    // Collect all module paths and their corresponding files
    // Following cosmos-rust pattern: cosmos.crypto.multisig.rs goes in cosmos::crypto::multisig
    // and cosmos.crypto.multisig.v1beta1.rs goes in cosmos::crypto::multisig::v1beta1
    let mut module_files: BTreeSet<(Vec<String>, String)> = BTreeSet::new();

    for entry in files {
        let filename = entry.file_name().unwrap().to_str().unwrap().to_string();
        let stem = filename.strip_suffix(".rs").unwrap();

        // Split by dots to create module hierarchy
        let parts: Vec<String> = stem.split('.').map(|s| s.to_string()).collect();

        if parts.len() == 1 {
            // Top-level file (e.g., amino.rs, gogoproto.rs)
            module_files.insert((vec![], filename));
        } else {
            // For nested modules like cosmos.crypto.multisig.rs:
            // - File goes in the parent path [cosmos, crypto, multisig]
            // - Not [cosmos, crypto] as before
            // This allows cosmos.crypto.multisig.v1beta1.rs to nest under it
            let parent_path = parts[..parts.len() - 1].to_vec();
            module_files.insert((parent_path, filename));
        }
    }

    // Generate nested module structure
    fn write_modules(
        file: &mut fs::File,
        module_files: &BTreeSet<(Vec<String>, String)>,
        manifest_dir: &str,
    ) {
        // Collect all unique module paths (including intermediate ones)
        let mut all_paths: BTreeSet<Vec<String>> = BTreeSet::new();
        for (path, _) in module_files.iter() {
            // Add all prefixes of this path
            for i in 0..=path.len() {
                all_paths.insert(path[..i].to_vec());
            }
        }

        // Build the tree recursively
        fn write_path(
            file: &mut fs::File,
            all_paths: &BTreeSet<Vec<String>>,
            module_files: &BTreeSet<(Vec<String>, String)>,
            current_path: &[String],
            indent: usize,
            manifest_dir: &str,
        ) {
            let indent_str = "    ".repeat(indent);
            let types_dir = Path::new(manifest_dir).join("types");

            // Find child modules at this level
            let mut children: BTreeSet<String> = BTreeSet::new();
            for path in all_paths.iter() {
                if path.len() == current_path.len() + 1 && path[..current_path.len()] == current_path[..] {
                    children.insert(path[current_path.len()].clone());
                }
            }

            // Write child modules
            for child in &children {
                let mut child_path = current_path.to_vec();
                child_path.push(child.clone());

                writeln!(file, "{}pub mod {} {{", indent_str, child).unwrap();

                // Check if there's a base file for this module (e.g., cosmos.crypto.multisig.rs)
                // that should be included at this level before the nested modules
                let base_filename = if current_path.is_empty() {
                    format!("{}.rs", child)
                } else {
                    format!("{}.{}.rs", current_path.join("."), child)
                };

                let base_file_path = types_dir.join(&base_filename);
                if base_file_path.exists() {
                    let child_indent = "    ".repeat(indent + 1);
                    writeln!(file, "{}include!(\"{}\");\n", child_indent, base_file_path.display()).unwrap();
                }

                write_path(file, all_paths, module_files, &child_path, indent + 1, manifest_dir);
                writeln!(file, "{}}}\n", indent_str).unwrap();
            }

            // Write files at this level
            // Group files by their final module name to detect conflicts
            let mut files_at_level: Vec<(Vec<&str>, String)> = Vec::new();
            for (path, filename) in module_files.iter() {
                if path == current_path {
                    let stem = filename.strip_suffix(".rs").unwrap();
                    let parts: Vec<&str> = stem.split('.').collect();
                    files_at_level.push((parts, filename.clone()));
                }
            }

            for (parts, filename) in files_at_level {
                let mod_name = parts.last().unwrap().replace('-', "_");
                let full_path = types_dir.join(&filename);

                // Check if this is a base module that has versioned siblings
                // E.g., cosmos.crypto.multisig.rs when cosmos.crypto.multisig.v1beta1.rs exists
                let is_base_with_versions = children.contains(&mod_name);

                if is_base_with_versions {
                    // This file should be included inside the module block
                    // It will be handled when we write the child module
                    continue;
                }

                writeln!(file, "{}#[path = \"{}\"]", indent_str, full_path.display()).unwrap();
                writeln!(file, "{}pub mod {};\n", indent_str, mod_name).unwrap();
            }
        }

        write_path(file, &all_paths, module_files, &[], 0, manifest_dir);
    }

    write_modules(&mut lib_file, &module_files, &manifest_dir);
}

/// Apply patches to fix naming conflicts in generated protobuf files
/// Following the cosmos-rust pattern
fn apply_patches(types_dir: &Path) {
    // Fix Validators enum/struct conflict in cosmos.staking.v1beta1
    let staking_file = types_dir.join("cosmos.staking.v1beta1.rs");
    if staking_file.exists() {
        for (pattern, replacement) in [
            ("enum Validators", "enum ValidatorPolicy"),
            ("stake_authorization::Validators", "stake_authorization::ValidatorPolicy"),
        ] {
            if let Err(e) = patch_file(&staking_file, &Regex::new(pattern).unwrap(), replacement) {
                eprintln!("Warning: Failed to patch {}: {}", staking_file.display(), e);
            }
        }
    }

    // Add more patches here as needed for other conflicts
}

/// Patch a file by replacing all matches of a regex pattern
fn patch_file(path: &Path, pattern: &Regex, replacement: &str) -> io::Result<()> {
    let contents = fs::read_to_string(path)?;
    let patched = pattern.replace_all(&contents, replacement);
    fs::write(path, patched.as_ref())
}
