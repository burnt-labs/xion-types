//! xion.v1 Query Messages — Protobuf Examples
//!
//! This file demonstrates how to construct, encode, and decode
//! query messages from the Core Xion Module (xion.v1).
//!
//! Queries covered:
//! - QueryWebAuthNVerifyRegister: Verify WebAuthN registration
//! - QueryWebAuthNVerifyAuthenticate: Verify WebAuthN authentication
//! - QueryPlatformPercentage: Get current platform fee percentage
//! - QueryPlatformMinimum: Get current minimum platform fees

use prost::Message;

use xion_types::types::cosmos_base_v1beta1::Coin;
use xion_types::types::xion_v1::{
    QueryPlatformMinimumRequest, QueryPlatformMinimumResponse, QueryPlatformPercentageRequest,
    QueryPlatformPercentageResponse, QueryWebAuthNVerifyAuthenticateRequest,
    QueryWebAuthNVerifyAuthenticateResponse, QueryWebAuthNVerifyRegisterRequest,
    QueryWebAuthNVerifyRegisterResponse,
};

// =============================================================================
// QueryWebAuthNVerifyRegister
// =============================================================================
// Verify a WebAuthN registration credential.
// Type URL: /xion.v1.QueryWebAuthNVerifyRegisterRequest

fn query_webauthn_verify_register_examples() {
    println!("=== QueryWebAuthNVerifyRegister Examples ===\n");

    // 1. Construct request
    let request = QueryWebAuthNVerifyRegisterRequest {
        addr: "xion1user...".to_string(),
        challenge: "random-challenge-string-from-server".to_string(),
        rp: "your-app.example.com".to_string(), // Relying Party ID
        data: vec![0x01, 0x02, 0x03, 0x04],     // WebAuthN attestation data
    };

    println!("1. Constructed QueryWebAuthNVerifyRegisterRequest:");
    println!("   addr: {}", request.addr);
    println!("   challenge: {}", request.challenge);
    println!("   rp: {}", request.rp);
    println!("   data length: {} bytes", request.data.len());

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode request
    let decoded_request =
        QueryWebAuthNVerifyRegisterRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded addr: {}", decoded_request.addr);
    println!("   Decoded challenge: {}", decoded_request.challenge);

    // === Response ===
    println!("\n--- Response ---");

    // Construct response (typically received from chain)
    let response = QueryWebAuthNVerifyRegisterResponse {
        credential: vec![0xAA, 0xBB, 0xCC, 0xDD], // WebAuthN credential
    };

    println!("4. Constructed Response:");
    println!("   credential length: {} bytes", response.credential.len());

    // Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response =
        QueryWebAuthNVerifyRegisterResponse::decode(encoded_response.as_slice()).unwrap();
    println!(
        "\n5. Decoded credential length: {} bytes",
        decoded_response.credential.len()
    );
}

// =============================================================================
// QueryWebAuthNVerifyAuthenticate
// =============================================================================
// Verify a WebAuthN authentication assertion.
// Type URL: /xion.v1.QueryWebAuthNVerifyAuthenticateRequest

fn query_webauthn_verify_authenticate_examples() {
    println!("\n=== QueryWebAuthNVerifyAuthenticate Examples ===\n");

    // 1. Construct request
    let request = QueryWebAuthNVerifyAuthenticateRequest {
        addr: "xion1user...".to_string(),
        challenge: "random-challenge-string".to_string(),
        rp: "your-app.example.com".to_string(),
        credential: vec![0xAA, 0xBB, 0xCC, 0xDD], // Stored credential
        data: vec![0x01, 0x02, 0x03, 0x04],       // Authenticator assertion data
    };

    println!("1. Constructed QueryWebAuthNVerifyAuthenticateRequest:");
    println!("   addr: {}", request.addr);
    println!("   challenge: {}", request.challenge);
    println!("   rp: {}", request.rp);
    println!("   credential length: {} bytes", request.credential.len());
    println!("   data length: {} bytes", request.data.len());

    // 2. Encode
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode
    let decoded_request =
        QueryWebAuthNVerifyAuthenticateRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded addr: {}", decoded_request.addr);

    // === Response ===
    println!("\n--- Response ---");

    // Response is empty (success = no error thrown)
    let response = QueryWebAuthNVerifyAuthenticateResponse {};

    println!("4. Constructed Response (empty = success)");

    let encoded_response = response.encode_to_vec();
    println!("   Encoded length: {} bytes", encoded_response.len());
}

// =============================================================================
// QueryPlatformPercentage
// =============================================================================
// Get the current platform fee percentage.
// Type URL: /xion.v1.QueryPlatformPercentageRequest

fn query_platform_percentage_examples() {
    println!("\n=== QueryPlatformPercentage Examples ===\n");

    // 1. Construct request (no parameters needed)
    let request = QueryPlatformPercentageRequest {};

    println!("1. Constructed QueryPlatformPercentageRequest:");
    println!("   (no parameters)");

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // === Response ===
    println!("\n--- Response ---");

    // Construct response (typically received from chain)
    // platform_percentage is stored as u32, multiplied by 100 (e.g., 500 = 5%)
    let response = QueryPlatformPercentageResponse {
        platform_percentage: 500, // 5% = 500/10000
    };

    println!("3. Constructed Response:");
    println!(
        "   platform_percentage (raw): {}",
        response.platform_percentage
    );
    println!(
        "   platform_percentage (%): {}%",
        response.platform_percentage as f64 / 100.0
    );

    // 4. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response =
        QueryPlatformPercentageResponse::decode(encoded_response.as_slice()).unwrap();
    println!(
        "\n4. Decoded platform_percentage: {}",
        decoded_response.platform_percentage
    );
}

// =============================================================================
// QueryPlatformMinimum
// =============================================================================
// Get the current minimum platform fees.
// Type URL: /xion.v1.QueryPlatformMinimumRequest

fn query_platform_minimum_examples() {
    println!("\n=== QueryPlatformMinimum Examples ===\n");

    // 1. Construct request (no parameters needed)
    let request = QueryPlatformMinimumRequest {};

    println!("1. Constructed QueryPlatformMinimumRequest:");
    println!("   (no parameters)");

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // === Response ===
    println!("\n--- Response ---");

    // Construct response with minimum fees
    let response = QueryPlatformMinimumResponse {
        minimums: vec![
            Coin {
                denom: "uxion".to_string(),
                amount: "1000".to_string(),
            },
            Coin {
                denom: "uatom".to_string(),
                amount: "500".to_string(),
            },
        ],
    };

    println!("3. Constructed Response:");
    println!("   minimums:");
    for m in &response.minimums {
        println!("     - {} {}", m.amount, m.denom);
    }

    // 4. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response =
        QueryPlatformMinimumResponse::decode(encoded_response.as_slice()).unwrap();
    println!(
        "\n4. Decoded minimums count: {}",
        decoded_response.minimums.len()
    );
}

// =============================================================================
// Working with Bytes (Vec<u8>)
// =============================================================================
// Many WebAuthN fields use bytes. Here's how to work with them.

fn bytes_examples() {
    println!("\n=== Working with Bytes (Vec<u8>) ===\n");

    // 1. Create from array of numbers
    let bytes1: Vec<u8> = vec![0x01, 0x02, 0x03, 0x04];
    println!("1. From array: {:?}", bytes1);

    // 2. Create from string
    let bytes2: Vec<u8> = "hello".as_bytes().to_vec();
    println!("2. From string: {:?}", bytes2);

    // 3. Create from base64
    let base64_str = "AQIDBA=="; // [1, 2, 3, 4]
    let bytes3 = base64::Engine::decode(&base64::engine::general_purpose::STANDARD, base64_str)
        .unwrap_or_default();
    println!("3. From base64: {:?}", bytes3);

    // 4. Convert to base64
    let to_base64 =
        base64::Engine::encode(&base64::engine::general_purpose::STANDARD, &bytes1);
    println!("4. To base64: {}", to_base64);

    // 5. Convert to hex
    let to_hex = hex::encode(&bytes1);
    println!("5. To hex: {}", to_hex);

    // 6. Create from hex
    let bytes4 = hex::decode("01020304").unwrap_or_default();
    println!("6. From hex: {:?}", bytes4);
}

// =============================================================================
// Run All Examples
// =============================================================================

fn main() {
    println!("╔════════════════════════════════════════════════════════════╗");
    println!("║  xion.v1 Query Messages — Protobuf Examples                ║");
    println!("╚════════════════════════════════════════════════════════════╝\n");

    query_webauthn_verify_register_examples();
    query_webauthn_verify_authenticate_examples();
    query_platform_percentage_examples();
    query_platform_minimum_examples();
    bytes_examples();

    println!("\n═══════════════════════════════════════════════════════════════");
    println!("Type URL Reference (Requests):");
    println!("  QueryWebAuthNVerifyRegisterRequest:     /xion.v1.QueryWebAuthNVerifyRegisterRequest");
    println!("  QueryWebAuthNVerifyAuthenticateRequest: /xion.v1.QueryWebAuthNVerifyAuthenticateRequest");
    println!("  QueryPlatformPercentageRequest:         /xion.v1.QueryPlatformPercentageRequest");
    println!("  QueryPlatformMinimumRequest:            /xion.v1.QueryPlatformMinimumRequest");
    println!("═══════════════════════════════════════════════════════════════");
}
