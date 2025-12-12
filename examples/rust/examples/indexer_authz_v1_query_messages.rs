//! xion.indexer.authz.v1 Query Messages — Protobuf Examples
//!
//! This file demonstrates how to construct, encode, and decode
//! query messages from the Authz Indexer Module (xion.indexer.authz.v1).
//!
//! Queries covered:
//! - QueryGrants: Get grants between specific granter and grantee
//! - QueryGranterGrants: Get all grants issued by a granter
//! - QueryGranteeGrants: Get all grants received by a grantee
//!
//! Note: This is an indexer module - it provides efficient queries for
//! authorization grants that would otherwise require scanning the entire state.
//!
//! **IMPORTANT**: This example requires the `xion_indexer_authz_v1` module to be
//! exported by the xion-types crate. If you get an "unresolved import" error,
//! the crate needs to be updated to include the indexer module exports.

use prost::Message;

use xion_types::types::xion_indexer_authz_v1::{
    QueryGranteeGrantsRequest, QueryGranteeGrantsResponse, QueryGranterGrantsRequest,
    QueryGranterGrantsResponse, QueryGrantsRequest, QueryGrantsResponse,
};

use xion_types::types::cosmos_base_query_v1beta1::{PageRequest, PageResponse};

// =============================================================================
// QueryGrants
// =============================================================================
// Get grants between specific granter and grantee.
// Endpoint: GET /xion/indexer/authz/v1/grants
// Type URL: /xion.indexer.authz.v1.QueryGrantsRequest

fn query_grants_examples() {
    println!("=== QueryGrants Examples ===\n");

    // 1. Construct request
    let request = QueryGrantsRequest {
        granter: "xion1granter...".to_string(),
        grantee: "xion1grantee...".to_string(),
        msg_type_url: "/cosmos.bank.v1beta1.MsgSend".to_string(), // Optional filter
        pagination: Some(PageRequest {
            key: vec![],
            offset: 0,
            limit: 10,
            count_total: false,
            reverse: false,
        }),
    };

    println!("1. Constructed QueryGrantsRequest:");
    println!("   granter: {}", request.granter);
    println!("   grantee: {}", request.grantee);
    println!("   msg_type_url: {}", request.msg_type_url);
    if let Some(ref pagination) = request.pagination {
        println!("   pagination.limit: {}", pagination.limit);
    }

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode request
    let decoded_request = QueryGrantsRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded:");
    println!("   granter: {}", decoded_request.granter);
    println!("   grantee: {}", decoded_request.grantee);
    println!("   msg_type_url: {}", decoded_request.msg_type_url);

    // === Response ===
    println!("\n--- Response ---");

    // Response contains grants: Vec<cosmos.authz.v1beta1.Grant>
    let response = QueryGrantsResponse {
        grants: vec![], // Would contain Grant objects
        pagination: Some(PageResponse {
            next_key: vec![],
            total: 0,
        }),
    };

    println!("4. Response structure:");
    println!("   grants: Vec<cosmos.authz.v1beta1.Grant>");
    println!("   pagination: PageResponse");
    println!("   grants count: {}", response.grants.len());
}

// =============================================================================
// QueryGranterGrants
// =============================================================================
// Get all grants issued by a granter.
// Endpoint: GET /xion/indexer/authz/v1/grants/granter/{granter}
// Type URL: /xion.indexer.authz.v1.QueryGranterGrantsRequest

fn query_granter_grants_examples() {
    println!("\n=== QueryGranterGrants Examples ===\n");

    // 1. Construct request
    let request = QueryGranterGrantsRequest {
        granter: "xion1granter...".to_string(),
        pagination: Some(PageRequest {
            key: vec![],
            offset: 0,
            limit: 20,
            count_total: true,
            reverse: false,
        }),
    };

    println!("1. Constructed QueryGranterGrantsRequest:");
    println!("   granter: {}", request.granter);
    if let Some(ref pagination) = request.pagination {
        println!("   pagination.limit: {}", pagination.limit);
        println!("   pagination.count_total: {}", pagination.count_total);
    }

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode request
    let decoded_request = QueryGranterGrantsRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded granter: {}", decoded_request.granter);

    // === Response ===
    println!("\n--- Response ---");

    // Response contains grants: Vec<cosmos.authz.v1beta1.GrantAuthorization>
    let response = QueryGranterGrantsResponse {
        grants: vec![], // Would contain GrantAuthorization objects
        pagination: Some(PageResponse {
            next_key: vec![],
            total: 5,
        }),
    };

    println!("4. Response structure:");
    println!("   grants: Vec<cosmos.authz.v1beta1.GrantAuthorization>");
    println!("   pagination: PageResponse");
    if let Some(ref pagination) = response.pagination {
        println!("   pagination.total: {}", pagination.total);
    }

    // Use case
    println!("\n--- Use Case ---");
    println!("5. Find all permissions granted BY an account:");
    println!("   - Lists all authorizations this account has given to others");
    println!("   - Useful for auditing delegated permissions");
    println!("   - Returns grantee addresses and authorization details");
}

// =============================================================================
// QueryGranteeGrants
// =============================================================================
// Get all grants received by a grantee.
// Endpoint: GET /xion/indexer/authz/v1/grants/grantee/{grantee}
// Type URL: /xion.indexer.authz.v1.QueryGranteeGrantsRequest

fn query_grantee_grants_examples() {
    println!("\n=== QueryGranteeGrants Examples ===\n");

    // 1. Construct request
    let request = QueryGranteeGrantsRequest {
        grantee: "xion1grantee...".to_string(),
        pagination: Some(PageRequest {
            key: vec![],
            offset: 0,
            limit: 20,
            count_total: true,
            reverse: false,
        }),
    };

    println!("1. Constructed QueryGranteeGrantsRequest:");
    println!("   grantee: {}", request.grantee);
    if let Some(ref pagination) = request.pagination {
        println!("   pagination.limit: {}", pagination.limit);
    }

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode request
    let decoded_request = QueryGranteeGrantsRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded grantee: {}", decoded_request.grantee);

    // === Response ===
    println!("\n--- Response ---");

    // Response contains grants: Vec<cosmos.authz.v1beta1.GrantAuthorization>
    let response = QueryGranteeGrantsResponse {
        grants: vec![], // Would contain GrantAuthorization objects
        pagination: Some(PageResponse {
            next_key: vec![],
            total: 3,
        }),
    };

    println!("4. Response structure:");
    println!("   grants: Vec<cosmos.authz.v1beta1.GrantAuthorization>");
    println!("   pagination: PageResponse");
    if let Some(ref pagination) = response.pagination {
        println!("   pagination.total: {}", pagination.total);
    }

    // Use case
    println!("\n--- Use Case ---");
    println!("5. Find all permissions received BY an account:");
    println!("   - Lists all authorizations granted TO this account");
    println!("   - Shows what actions this account can perform on behalf of others");
    println!("   - Useful for understanding delegated capabilities");
}

// =============================================================================
// Understanding Authz Indexer
// =============================================================================

fn authz_indexer_explanation() {
    println!("\n=== Understanding Authz Indexer ===\n");

    println!("The Authz Indexer provides efficient queries for authorization grants.\n");

    println!("Key Concepts:\n");

    println!("1. Grant:");
    println!("   - An authorization given from granter to grantee");
    println!("   - Allows grantee to execute specific messages on granter's behalf");
    println!("   - Has an expiration time\n");

    println!("2. GrantAuthorization:");
    println!("   - Extended grant info including granter/grantee addresses");
    println!("   - Used in list responses\n");

    println!("3. Common Authorization Types:");
    let auth_types = [
        ("GenericAuthorization", "Allows any message type"),
        ("SendAuthorization", "Allows bank sends with optional limits"),
        ("StakeAuthorization", "Allows staking operations"),
    ];
    for (name, desc) in &auth_types {
        println!("   - {}: {}", name, desc);
    }

    println!("\n4. Why Use the Indexer?");
    println!("   - Standard authz queries require knowing both granter AND grantee");
    println!("   - Indexer allows querying by granter OR grantee alone");
    println!("   - Much more efficient for listing all grants for an address");
}

// =============================================================================
// Run All Examples
// =============================================================================

fn main() {
    println!("╔════════════════════════════════════════════════════════════╗");
    println!("║  xion.indexer.authz.v1 Query Messages — Protobuf Examples  ║");
    println!("╚════════════════════════════════════════════════════════════╝\n");

    query_grants_examples();
    query_granter_grants_examples();
    query_grantee_grants_examples();
    authz_indexer_explanation();

    println!("\n═══════════════════════════════════════════════════════════════");
    println!("Type URL Reference:");
    println!("  QueryGrantsRequest:        /xion.indexer.authz.v1.QueryGrantsRequest");
    println!("  QueryGranterGrantsRequest: /xion.indexer.authz.v1.QueryGranterGrantsRequest");
    println!("  QueryGranteeGrantsRequest: /xion.indexer.authz.v1.QueryGranteeGrantsRequest");
    println!("\nREST Endpoints:");
    println!("  GET /xion/indexer/authz/v1/grants");
    println!("  GET /xion/indexer/authz/v1/grants/granter/{{granter}}");
    println!("  GET /xion/indexer/authz/v1/grants/grantee/{{grantee}}");
    println!("\nNote: This is a query-only indexer module.");
    println!("═══════════════════════════════════════════════════════════════");
}
