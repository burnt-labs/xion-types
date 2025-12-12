//! xion.jwk.v1 Transaction Messages — Protobuf Examples
//!
//! This file demonstrates how to construct, encode, and decode
//! transaction messages from the JSON Web Key Module (xion.jwk.v1).
//!
//! Messages covered:
//! - MsgCreateAudience: Register a new OAuth audience (e.g., Google, Apple)
//! - MsgUpdateAudience: Update an existing audience configuration
//! - MsgDeleteAudience: Remove an audience
//! - MsgCreateAudienceClaim: Claim ownership of an audience hash
//! - MsgDeleteAudienceClaim: Remove an audience claim

use prost::Message;

use xion_types::types::xion_jwk_v1::{
    Audience, MsgCreateAudience, MsgCreateAudienceClaim, MsgDeleteAudience,
    MsgDeleteAudienceClaim, MsgUpdateAudience,
};

// =============================================================================
// MsgCreateAudience
// =============================================================================
// Register a new OAuth audience for JWT/OIDC authentication.
// Type URL: /xion.jwk.v1.MsgCreateAudience
// Signer: admin
//
// Use case: Register an OAuth provider (Google, Apple, custom) so users can
// authenticate using JWTs from that provider.

fn msg_create_audience_examples() {
    println!("=== MsgCreateAudience Examples ===\n");

    // 1. Construct message
    // The 'aud' field is typically the OAuth client ID
    // The 'key' field is the public key (JWKS) for verifying JWTs
    let msg = MsgCreateAudience {
        admin: "xion1admin...".to_string(), // Admin who controls this audience
        aud: "123456789-abc.apps.googleusercontent.com".to_string(), // OAuth client ID
        key: r#"{"kty":"RSA","n":"...","e":"AQAB"}"#.to_string(), // JWKS public key (JSON string)
    };

    println!("1. Constructed MsgCreateAudience:");
    println!("   admin: {}", msg.admin);
    println!("   aud: {}", msg.aud);
    println!("   key: {}...", &msg.key[..50.min(msg.key.len())]);

    // 2. Encode to protobuf bytes
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded to protobuf bytes:");
    println!("   Length: {} bytes", encoded_bytes.len());
    println!("   Hex: {}...", &hex::encode(&encoded_bytes)[..60.min(hex::encode(&encoded_bytes).len())]);

    // 3. Decode from protobuf bytes
    let decoded = MsgCreateAudience::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded from bytes:");
    println!("   admin: {}", decoded.admin);
    println!("   aud: {}", decoded.aud);
}

// =============================================================================
// MsgUpdateAudience
// =============================================================================
// Update an existing audience configuration.
// Type URL: /xion.jwk.v1.MsgUpdateAudience
// Signer: admin (current admin)
//
// Use case: Rotate keys, transfer admin control, or update the audience ID.

fn msg_update_audience_examples() {
    println!("\n=== MsgUpdateAudience Examples ===\n");

    // 1. Construct message
    let msg = MsgUpdateAudience {
        admin: "xion1currentadmin...".to_string(),   // Current admin (signer)
        new_admin: "xion1newadmin...".to_string(),   // New admin (can be same as current)
        aud: "123456789-abc.apps.googleusercontent.com".to_string(), // Current audience ID
        key: r#"{"kty":"RSA","n":"...","e":"AQAB"}"#.to_string(), // Current key
        new_aud: "123456789-abc.apps.googleusercontent.com".to_string(), // New audience ID (can be same)
    };

    println!("1. Constructed MsgUpdateAudience:");
    println!("   admin (current): {}", msg.admin);
    println!("   new_admin: {}", msg.new_admin);
    println!("   aud (current): {}", msg.aud);
    println!("   new_aud: {}", msg.new_aud);

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode
    let decoded = MsgUpdateAudience::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded admin: {}", decoded.admin);
    println!("   Decoded new_admin: {}", decoded.new_admin);
}

// =============================================================================
// MsgDeleteAudience
// =============================================================================
// Remove an audience from the registry.
// Type URL: /xion.jwk.v1.MsgDeleteAudience
// Signer: admin
//
// Use case: Decommission an OAuth provider integration.

fn msg_delete_audience_examples() {
    println!("\n=== MsgDeleteAudience Examples ===\n");

    // 1. Construct message
    let msg = MsgDeleteAudience {
        admin: "xion1admin...".to_string(),          // Admin (signer)
        aud: "123456789-abc.apps.googleusercontent.com".to_string(), // Audience ID to delete
    };

    println!("1. Constructed MsgDeleteAudience:");
    println!("   admin: {}", msg.admin);
    println!("   aud: {}", msg.aud);

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode
    let decoded = MsgDeleteAudience::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded aud: {}", decoded.aud);
}

// =============================================================================
// MsgCreateAudienceClaim
// =============================================================================
// Claim ownership of an audience hash.
// Type URL: /xion.jwk.v1.MsgCreateAudienceClaim
// Signer: admin
//
// Use case: Link an account to an audience via a hashed claim.

fn msg_create_audience_claim_examples() {
    println!("\n=== MsgCreateAudienceClaim Examples ===\n");

    // 1. Construct message
    // aud_hash is the hash of the audience claim data
    let aud_hash = b"sha256-hash-of-audience-claim".to_vec();

    let msg = MsgCreateAudienceClaim {
        admin: "xion1admin...".to_string(), // Admin (signer)
        aud_hash: aud_hash.clone(),         // Hash of the audience claim
    };

    println!("1. Constructed MsgCreateAudienceClaim:");
    println!("   admin: {}", msg.admin);
    println!("   aud_hash length: {} bytes", msg.aud_hash.len());
    println!("   aud_hash (hex): {}", hex::encode(&msg.aud_hash));

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode
    let decoded = MsgCreateAudienceClaim::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded admin: {}", decoded.admin);
    println!(
        "   Decoded aud_hash length: {} bytes",
        decoded.aud_hash.len()
    );
}

// =============================================================================
// MsgDeleteAudienceClaim
// =============================================================================
// Remove an audience claim.
// Type URL: /xion.jwk.v1.MsgDeleteAudienceClaim
// Signer: admin
//
// Use case: Revoke a claim linking an account to an audience.

fn msg_delete_audience_claim_examples() {
    println!("\n=== MsgDeleteAudienceClaim Examples ===\n");

    // 1. Construct message
    let aud_hash = b"sha256-hash-of-audience-claim".to_vec();

    let msg = MsgDeleteAudienceClaim {
        admin: "xion1admin...".to_string(),
        aud_hash: aud_hash.clone(),
    };

    println!("1. Constructed MsgDeleteAudienceClaim:");
    println!("   admin: {}", msg.admin);
    println!("   aud_hash length: {} bytes", msg.aud_hash.len());

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode
    let decoded = MsgDeleteAudienceClaim::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded admin: {}", decoded.admin);
}

// =============================================================================
// Audience Type Helper
// =============================================================================
// The Audience type represents a registered OAuth provider

fn audience_examples() {
    println!("\n=== Audience Type Examples ===\n");

    // Construct an Audience
    let audience = Audience {
        aud: "123456789-abc.apps.googleusercontent.com".to_string(),
        key: r#"{"kty":"RSA","n":"0vx7agoebGcQSuuPiLJXZptN9nndrQmbXEps2aiAFbWhM78LhWx4cbbfAAtVT86zwu1RK7aPFFxuhDR1L6tSoc_BJECPebWKRXjBZCiFV4n3oknjhMstn64tZ_2W-5JsGY4Hc5n9yBXArwl93lqt7_RN5w6Cf0h4QyQ5v-65YGjQR0_FDW2QvzqY368QQMicAtaSqzs8KJZgnYb9c7d0zgdAZHzu6qMQvRL5hajrn1n91CbOpbISD08qNLyrdkt-bFTWhAI4vMQFh6WeZu0fM4lFd2NcRwr3XPksINHaQ-G_xBniIqbw0Ls1jF44-csFCur-kEgU8awapJzKnqDKgw","e":"AQAB"}"#.to_string(),
        admin: "xion1admin...".to_string(),
    };

    println!("1. Constructed Audience:");
    println!("   aud: {}", audience.aud);
    println!("   admin: {}", audience.admin);
    println!(
        "   key (truncated): {}...",
        &audience.key[..50.min(audience.key.len())]
    );

    // Encode/decode
    let encoded = audience.encode_to_vec();
    let decoded = Audience::decode(encoded.as_slice()).unwrap();
    println!("\n2. Encoded/Decoded:");
    println!("   Encoded size: {} bytes", encoded.len());
    println!("   Decoded aud: {}", decoded.aud);
}

// =============================================================================
// Run All Examples
// =============================================================================

fn main() {
    println!("╔════════════════════════════════════════════════════════════╗");
    println!("║  xion.jwk.v1 Transaction Messages — Protobuf Examples      ║");
    println!("╚════════════════════════════════════════════════════════════╝\n");

    msg_create_audience_examples();
    msg_update_audience_examples();
    msg_delete_audience_examples();
    msg_create_audience_claim_examples();
    msg_delete_audience_claim_examples();
    audience_examples();

    println!("\n═══════════════════════════════════════════════════════════════");
    println!("Type URL Reference:");
    println!("  MsgCreateAudience:       /xion.jwk.v1.MsgCreateAudience");
    println!("  MsgUpdateAudience:       /xion.jwk.v1.MsgUpdateAudience");
    println!("  MsgDeleteAudience:       /xion.jwk.v1.MsgDeleteAudience");
    println!("  MsgCreateAudienceClaim:  /xion.jwk.v1.MsgCreateAudienceClaim");
    println!("  MsgDeleteAudienceClaim:  /xion.jwk.v1.MsgDeleteAudienceClaim");
    println!("═══════════════════════════════════════════════════════════════");
}
