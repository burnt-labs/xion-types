//! xion.jwk.v1 Query Messages — Protobuf Examples
//!
//! This file demonstrates how to construct, encode, and decode
//! query messages from the JSON Web Key Module (xion.jwk.v1).
//!
//! Queries covered:
//! - QueryParams: Get module parameters (time_offset, deployment_gas)
//! - QueryAudience: Get a single audience by ID
//! - QueryAudienceAll: List all registered audiences (paginated)
//! - QueryAudienceClaim: Get an audience claim by hash
//! - QueryValidateJWT: Validate a JWT signature

use prost::Message;

use xion_types::types::cosmos_base_query_v1beta1::{PageRequest, PageResponse};
use xion_types::types::xion_jwk_v1::{
    Audience, AudienceClaim, Params, PrivateClaim, QueryAudienceAllRequest,
    QueryAudienceAllResponse, QueryAudienceClaimRequest, QueryAudienceClaimResponse,
    QueryAudienceRequest, QueryAudienceResponse, QueryParamsRequest, QueryParamsResponse,
    QueryValidateJwtRequest, QueryValidateJwtResponse,
};

// =============================================================================
// QueryParams
// =============================================================================
// Get the JWK module parameters.
// Endpoint: GET /xion/jwk/params
// Type URL: /xion.jwk.v1.QueryParamsRequest

fn query_params_examples() {
    println!("=== QueryParams Examples ===\n");

    // 1. Construct request (no parameters needed)
    let request = QueryParamsRequest {};

    println!("1. Constructed QueryParamsRequest:");
    println!("   (no parameters)");

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // === Response ===
    println!("\n--- Response ---");

    // Construct response (typically received from chain)
    let response = QueryParamsResponse {
        params: Some(Params {
            time_offset: 300000000000, // 5 minutes in nanoseconds
            deployment_gas: 100000,    // Gas required to deploy audience
        }),
    };

    println!("3. Constructed Response:");
    if let Some(ref params) = response.params {
        println!("   params.time_offset: {} ns", params.time_offset);
        println!(
            "   params.time_offset (minutes): {}",
            params.time_offset as f64 / 60_000_000_000.0
        );
        println!("   params.deployment_gas: {}", params.deployment_gas);
    }

    // 4. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response = QueryParamsResponse::decode(encoded_response.as_slice()).unwrap();
    if let Some(params) = decoded_response.params {
        println!("\n4. Decoded params.time_offset: {}", params.time_offset);
    }
}

// =============================================================================
// QueryAudience
// =============================================================================
// Get a single audience by its identifier.
// Endpoint: GET /xion/jwk/audience/{aud}
// Type URL: /xion.jwk.v1.QueryAudienceRequest

fn query_audience_examples() {
    println!("\n=== QueryAudience Examples ===\n");

    // 1. Construct request
    let request = QueryAudienceRequest {
        aud: "123456789-abc.apps.googleusercontent.com".to_string(), // OAuth client ID
    };

    println!("1. Constructed QueryAudienceRequest:");
    println!("   aud: {}", request.aud);

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode request
    let decoded_request = QueryAudienceRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded aud: {}", decoded_request.aud);

    // === Response ===
    println!("\n--- Response ---");

    let response = QueryAudienceResponse {
        audience: Some(Audience {
            aud: "123456789-abc.apps.googleusercontent.com".to_string(),
            key: r#"{"kty":"RSA","n":"...","e":"AQAB"}"#.to_string(),
            admin: "xion1admin...".to_string(),
        }),
    };

    println!("4. Constructed Response:");
    if let Some(ref audience) = response.audience {
        println!("   audience.aud: {}", audience.aud);
        println!("   audience.admin: {}", audience.admin);
        println!(
            "   audience.key (truncated): {}...",
            &audience.key[..30.min(audience.key.len())]
        );
    }

    // 5. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response = QueryAudienceResponse::decode(encoded_response.as_slice()).unwrap();
    if let Some(audience) = decoded_response.audience {
        println!("\n5. Decoded audience.aud: {}", audience.aud);
    }
}

// =============================================================================
// QueryAudienceAll
// =============================================================================
// List all registered audiences with pagination.
// Endpoint: GET /xion/jwk/audience
// Type URL: /xion.jwk.v1.QueryAudienceAllRequest

fn query_audience_all_examples() {
    println!("\n=== QueryAudienceAll Examples ===\n");

    // 1. Construct request with pagination
    let request = QueryAudienceAllRequest {
        pagination: Some(PageRequest {
            key: vec![],       // Empty for first page
            offset: 0,
            limit: 10,         // Get 10 results
            count_total: true,
            reverse: false,
        }),
    };

    println!("1. Constructed QueryAudienceAllRequest:");
    if let Some(ref pagination) = request.pagination {
        println!("   pagination.limit: {}", pagination.limit);
        println!("   pagination.count_total: {}", pagination.count_total);
    }

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // === Response ===
    println!("\n--- Response ---");

    let response = QueryAudienceAllResponse {
        audience: vec![
            Audience {
                aud: "google-client-id.apps.googleusercontent.com".to_string(),
                key: r#"{"kty":"RSA","n":"..."}"#.to_string(),
                admin: "xion1admin1...".to_string(),
            },
            Audience {
                aud: "apple-client-id".to_string(),
                key: r#"{"kty":"EC","crv":"P-256",...}"#.to_string(),
                admin: "xion1admin2...".to_string(),
            },
        ],
        pagination: Some(PageResponse {
            next_key: vec![], // Empty = no more pages
            total: 2,
        }),
    };

    println!("3. Constructed Response:");
    println!("   audience count: {}", response.audience.len());
    for (i, aud) in response.audience.iter().enumerate() {
        println!("   [{}] aud: {}...", i, &aud.aud[..30.min(aud.aud.len())]);
        println!("       admin: {}", aud.admin);
    }
    if let Some(ref pagination) = response.pagination {
        println!("   pagination.total: {}", pagination.total);
    }

    // 4. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response = QueryAudienceAllResponse::decode(encoded_response.as_slice()).unwrap();
    println!("\n4. Decoded audience count: {}", decoded_response.audience.len());
}

// =============================================================================
// QueryAudienceClaim
// =============================================================================
// Get an audience claim by its hash.
// Endpoint: GET /xion/jwk/audience_claim/{hash}
// Type URL: /xion.jwk.v1.QueryAudienceClaimRequest

fn query_audience_claim_examples() {
    println!("\n=== QueryAudienceClaim Examples ===\n");

    // 1. Construct request
    let claim_hash = b"sha256-hash-of-claim".to_vec();

    let request = QueryAudienceClaimRequest {
        hash: claim_hash.clone(),
    };

    println!("1. Constructed QueryAudienceClaimRequest:");
    println!("   hash length: {} bytes", request.hash.len());
    println!("   hash (hex): {}", hex::encode(&request.hash));

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode request
    let decoded_request = QueryAudienceClaimRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded hash length: {} bytes", decoded_request.hash.len());

    // === Response ===
    println!("\n--- Response ---");

    let response = QueryAudienceClaimResponse {
        claim: Some(AudienceClaim {
            signer: "xion1claimant...".to_string(),
        }),
    };

    println!("4. Constructed Response:");
    if let Some(ref claim) = response.claim {
        println!("   claim.signer: {}", claim.signer);
    }

    // 5. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response = QueryAudienceClaimResponse::decode(encoded_response.as_slice()).unwrap();
    if let Some(claim) = decoded_response.claim {
        println!("\n5. Decoded claim.signer: {}", claim.signer);
    }
}

// =============================================================================
// QueryValidateJWT
// =============================================================================
// Validate a JWT signature against a registered audience.
// Endpoint: GET /xion/jwk/validate_jwt/{aud}/{sub}/{sig_bytes}
// Type URL: /xion.jwk.v1.QueryValidateJWTRequest

fn query_validate_jwt_examples() {
    println!("\n=== QueryValidateJWT Examples ===\n");

    // 1. Construct request
    let request = QueryValidateJwtRequest {
        aud: "123456789-abc.apps.googleusercontent.com".to_string(), // Audience (OAuth client ID)
        sub: "user-unique-id-from-jwt".to_string(),                  // Subject from JWT
        sig_bytes: "base64-encoded-jwt-signature".to_string(),       // JWT signature
        ..Default::default()
    };

    println!("1. Constructed QueryValidateJwtRequest:");
    println!("   aud: {}", request.aud);
    println!("   sub: {}", request.sub);
    println!("   sig_bytes: {}", request.sig_bytes);

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode request
    let decoded_request = QueryValidateJwtRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded:");
    println!("   aud: {}", decoded_request.aud);
    println!("   sub: {}", decoded_request.sub);

    // === Response ===
    println!("\n--- Response ---");

    // Response contains private claims from the validated JWT
    let response = QueryValidateJwtResponse {
        private_claims: vec![
            PrivateClaim {
                key: "email".to_string(),
                value: "user@example.com".to_string(),
            },
            PrivateClaim {
                key: "email_verified".to_string(),
                value: "true".to_string(),
            },
            PrivateClaim {
                key: "name".to_string(),
                value: "John Doe".to_string(),
            },
            PrivateClaim {
                key: "picture".to_string(),
                value: "https://example.com/photo.jpg".to_string(),
            },
        ],
    };

    println!("4. Constructed Response:");
    println!("   private_claims count: {}", response.private_claims.len());
    for claim in &response.private_claims {
        println!("     {}: {}", claim.key, claim.value);
    }

    // 5. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response = QueryValidateJwtResponse::decode(encoded_response.as_slice()).unwrap();
    println!(
        "\n5. Decoded private_claims count: {}",
        decoded_response.private_claims.len()
    );
}

// =============================================================================
// PrivateClaim Helper
// =============================================================================
// PrivateClaim represents a key-value pair from a JWT

fn private_claim_examples() {
    println!("\n=== PrivateClaim Helper Examples ===\n");

    // Construct PrivateClaims
    let claims = vec![
        PrivateClaim {
            key: "email".to_string(),
            value: "user@example.com".to_string(),
        },
        PrivateClaim {
            key: "email_verified".to_string(),
            value: "true".to_string(),
        },
        PrivateClaim {
            key: "iat".to_string(),
            value: "1699900000".to_string(), // Issued at
        },
        PrivateClaim {
            key: "exp".to_string(),
            value: "1699903600".to_string(), // Expiration
        },
    ];

    println!("1. Constructed PrivateClaims:");
    for claim in &claims {
        println!("   {}: {}", claim.key, claim.value);
    }

    // Encode/decode a single claim
    let encoded = claims[0].encode_to_vec();
    let decoded = PrivateClaim::decode(encoded.as_slice()).unwrap();
    println!("\n2. Encoded/Decoded:");
    println!("   Encoded size: {} bytes", encoded.len());
    println!("   Decoded: {} = {}", decoded.key, decoded.value);
}

// =============================================================================
// Run All Examples
// =============================================================================

fn main() {
    println!("╔════════════════════════════════════════════════════════════╗");
    println!("║  xion.jwk.v1 Query Messages — Protobuf Examples            ║");
    println!("╚════════════════════════════════════════════════════════════╝\n");

    query_params_examples();
    query_audience_examples();
    query_audience_all_examples();
    query_audience_claim_examples();
    query_validate_jwt_examples();
    private_claim_examples();

    println!("\n═══════════════════════════════════════════════════════════════");
    println!("Type URL Reference (Requests):");
    println!("  QueryParamsRequest:         /xion.jwk.v1.QueryParamsRequest");
    println!("  QueryAudienceRequest:       /xion.jwk.v1.QueryAudienceRequest");
    println!("  QueryAudienceAllRequest:    /xion.jwk.v1.QueryAudienceAllRequest");
    println!("  QueryAudienceClaimRequest:  /xion.jwk.v1.QueryAudienceClaimRequest");
    println!("  QueryValidateJWTRequest:    /xion.jwk.v1.QueryValidateJWTRequest");
    println!("\nREST Endpoints:");
    println!("  GET /xion/jwk/params");
    println!("  GET /xion/jwk/audience/{{aud}}");
    println!("  GET /xion/jwk/audience");
    println!("  GET /xion/jwk/audience_claim/{{hash}}");
    println!("  GET /xion/jwk/validate_jwt/{{aud}}/{{sub}}/{{sig_bytes}}");
    println!("═══════════════════════════════════════════════════════════════");
}
