# xion-types

Generated Rust types for Xion blockchain protocol buffers.

## Usage

Add this to your `Cargo.toml`:

```toml
[dependencies]
xion-types = { git = "https://github.com/burnt-labs/xion-types" }
```

Or use a specific version from crates.io:

```toml
[dependencies]
xion-types = "0.1.0"
```

## Regeneration

Run `make proto-gen-rust` from the repository root using the pinned sources in
`scripts/proto-sources.conf`. The postprocessor emits
`stake_authorization::ValidatorPolicyEnum` and its references without changing
the nested `Validators` message or wire tags. Cargo builds never rewrite sources.

## License

Apache-2.0
