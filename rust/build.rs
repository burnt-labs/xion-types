use glob::glob;
use std::collections::BTreeSet;
use std::fs;
use std::io::Write;
use std::path::Path;

fn main() {
    println!("cargo:rerun-if-changed=types");

    let manifest_dir = std::env::var("CARGO_MANIFEST_DIR").unwrap();
    let out_dir = std::env::var("OUT_DIR").unwrap();
    let lib_path = Path::new(&out_dir).join("generated_lib.rs");
    let mut lib_file = fs::File::create(&lib_path).unwrap();

    writeln!(
        lib_file,
        "//! Generated Rust types for Xion blockchain protocol buffers\n"
    )
    .unwrap();

    // Find all .rs files in the types directory
    let mut files: Vec<_> = glob("types/*.rs")
        .unwrap()
        .filter_map(Result::ok)
        .collect();
    files.sort();

    // Collect all module paths and their corresponding files
    let mut module_files: BTreeSet<(Vec<String>, String)> = BTreeSet::new();

    for entry in files {
        let filename = entry.file_name().unwrap().to_str().unwrap().to_string();
        let stem = filename.strip_suffix(".rs").unwrap();

        // Split by dots to create module hierarchy
        let parts: Vec<String> = stem.split('.').map(|s| s.to_string()).collect();

        if parts.len() == 1 {
            // Top-level file (e.g., amino.rs)
            module_files.insert((vec![], filename));
        } else {
            // Nested file (e.g., cosmos.bank.v1beta1.rs)
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
                write_path(file, all_paths, module_files, &child_path, indent + 1, manifest_dir);
                writeln!(file, "{}}}\n", indent_str).unwrap();
            }

            // Write files at this level
            for (path, filename) in module_files.iter() {
                if path == current_path {
                    let stem = filename.strip_suffix(".rs").unwrap();
                    let parts: Vec<&str> = stem.split('.').collect();
                    let mod_name = parts.last().unwrap().replace('-', "_");
                    let full_path = types_dir.join(filename);

                    writeln!(file, "{}#[path = \"{}\"]", indent_str, full_path.display()).unwrap();
                    writeln!(file, "{}pub mod {};\n", indent_str, mod_name).unwrap();
                }
            }
        }

        write_path(file, &all_paths, module_files, &[], 0, manifest_dir);
    }

    write_modules(&mut lib_file, &module_files, &manifest_dir);
}
