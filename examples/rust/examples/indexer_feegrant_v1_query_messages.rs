//! xion.indexer.feegrant.v1 Query Messages — Protobuf Examples
//!
//! This file demonstrates how to construct, encode, and decode
//! query messages from the Feegrant Indexer Module (xion.indexer.feegrant.v1).
//!
//! Queries covered:
//! - QueryAllowance: Get specific fee allowance between granter and grantee
//! - QueryAllowances: Get all fee allowances received by a grantee
//! - QueryAllowancesByGranter: Get all fee allowances issued by a granter
//!
//! Note: This is an indexer module - it provides efficient queries for
//! fee allowances that would otherwise require scanning the entire state.
//!
//! **IMPORTANT**: This example requires the `xion_indexer_feegrant_v1` module to be
//! exported by the xion-types crate. If you get an "unresolved import" error,
//! the crate needs to be updated to include the indexer module exports.

use prost::Message;

use xion_types::types::xion_indexer_feegrant_v1::{
    QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesByGranterRequest,
    QueryAllowancesByGranterResponse, QueryAllowancesRequest, QueryAllowancesResponse,
};

use xion_types::types::cosmos_base_query_v1beta1::{PageRequest, PageResponse};

// =============================================================================
// QueryAllowance
// =============================================================================
// Get specific fee allowance between granter and grantee.
// Endpoint: GET /xion/indexer/feegrant/v1/allowance/{granter}/{grantee}
// Type URL: /xion.indexer.feegrant.v1.QueryAllowanceRequest

fn query_allowance_examples() {
    println!("=== QueryAllowance Examples ===\n");

    // 1. Construct request
    let request = QueryAllowanceRequest {
        granter: "xion1granter...".to_string(),
        grantee: "xion1grantee...".to_string(),
    };

    println!("1. Constructed QueryAllowanceRequest:");
    println!("   granter: {}", request.granter);
    println!("   grantee: {}", request.grantee);

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode request
    let decoded_request = QueryAllowanceRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded:");
    println!("   granter: {}", decoded_request.granter);
    println!("   grantee: {}", decoded_request.grantee);

    // === Response ===
    println!("\n--- Response ---");

    // Response contains allowance: Option<cosmos.feegrant.v1beta1.Grant>
    let response = QueryAllowanceResponse {
        allowance: None, // Would contain Grant object
    };

    println!("4. Response structure:");
    println!("   allowance: Option<cosmos.feegrant.v1beta1.Grant>");
    println!("     - granter: String");
    println!("     - grantee: String");
    println!("     - allowance: Any (BasicAllowance or PeriodicAllowance)");
    println!("   has_allowance: {}", response.allowance.is_some());
}

// =============================================================================
// QueryAllowances
// =============================================================================
// Get all fee allowances received by a grantee.
// Endpoint: GET /xion/indexer/feegrant/v1/allowances/{grantee}
// Type URL: /xion.indexer.feegrant.v1.QueryAllowancesRequest

fn query_allowances_examples() {
    println!("\n=== QueryAllowances Examples ===\n");

    // 1. Construct request
    let request = QueryAllowancesRequest {
        grantee: "xion1grantee...".to_string(),
        pagination: Some(PageRequest {
            key: vec![],
            offset: 0,
            limit: 10,
            count_total: true,
            reverse: false,
        }),
    };

    println!("1. Constructed QueryAllowancesRequest:");
    println!("   grantee: {}", request.grantee);
    if let Some(ref pagination) = request.pagination {
        println!("   pagination.limit: {}", pagination.limit);
        println!("   pagination.count_total: {}", pagination.count_total);
    }

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode request
    let decoded_request = QueryAllowancesRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded grantee: {}", decoded_request.grantee);

    // === Response ===
    println!("\n--- Response ---");

    // Response contains allowances: Vec<cosmos.feegrant.v1beta1.Grant>
    let response = QueryAllowancesResponse {
        allowances: vec![], // Would contain Grant objects
        pagination: Some(PageResponse {
            next_key: vec![],
            total: 2,
        }),
    };

    println!("4. Response structure:");
    println!("   allowances: Vec<cosmos.feegrant.v1beta1.Grant>");
    println!("   pagination: PageResponse");
    println!("   allowances count: {}", response.allowances.len());
    if let Some(ref pagination) = response.pagination {
        println!("   pagination.total: {}", pagination.total);
    }

    // Use case
    println!("\n--- Use Case ---");
    println!("5. Find all fee grants received by an account:");
    println!("   - Check if someone is paying your transaction fees");
    println!("   - List all accounts sponsoring this wallet");
    println!("   - Useful for gasless/meta-transaction flows");
}

// =============================================================================
// QueryAllowancesByGranter
// =============================================================================
// Get all fee allowances issued by a granter.
// Endpoint: GET /xion/indexer/feegrant/v1/issued/{granter}
// Type URL: /xion.indexer.feegrant.v1.QueryAllowancesByGranterRequest

fn query_allowances_by_granter_examples() {
    println!("\n=== QueryAllowancesByGranter Examples ===\n");

    // 1. Construct request
    let request = QueryAllowancesByGranterRequest {
        granter: "xion1granter...".to_string(),
        pagination: Some(PageRequest {
            key: vec![],
            offset: 0,
            limit: 20,
            count_total: true,
            reverse: false,
        }),
    };

    println!("1. Constructed QueryAllowancesByGranterRequest:");
    println!("   granter: {}", request.granter);
    if let Some(ref pagination) = request.pagination {
        println!("   pagination.limit: {}", pagination.limit);
    }

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode request
    let decoded_request =
        QueryAllowancesByGranterRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded granter: {}", decoded_request.granter);

    // === Response ===
    println!("\n--- Response ---");

    // Response contains allowances: Vec<cosmos.feegrant.v1beta1.Grant>
    let response = QueryAllowancesByGranterResponse {
        allowances: vec![], // Would contain Grant objects
        pagination: Some(PageResponse {
            next_key: vec![],
            total: 5,
        }),
    };

    println!("4. Response structure:");
    println!("   allowances: Vec<cosmos.feegrant.v1beta1.Grant>");
    println!("   pagination: PageResponse");
    println!("   allowances count: {}", response.allowances.len());
    if let Some(ref pagination) = response.pagination {
        println!("   pagination.total: {}", pagination.total);
    }

    // Use case
    println!("\n--- Use Case ---");
    println!("5. Find all fee grants issued by an account:");
    println!("   - Audit who you're sponsoring for transaction fees");
    println!("   - Monitor fee grant expenditure");
    println!("   - Manage gasless transaction sponsorship");
}

// =============================================================================
// Understanding Feegrant Indexer
// =============================================================================

fn feegrant_indexer_explanation() {
    println!("\n=== Understanding Feegrant Indexer ===\n");

    println!("The Feegrant Indexer provides efficient queries for fee allowances.\n");

    println!("Key Concepts:\n");

    println!("1. Fee Allowance:");
    println!("   - Allows granter to pay transaction fees for grantee");
    println!("   - Enables gasless transactions for end users");
    println!("   - Can have spending limits and expiration\n");

    println!("2. Allowance Types:");
    let allowance_types = [
        ("BasicAllowance", "Simple spend limit with optional expiration"),
        (
            "PeriodicAllowance",
            "Resets spending limit periodically (daily, weekly, etc.)",
        ),
        (
            "AllowedMsgAllowance",
            "Wraps another allowance with message type restrictions",
        ),
    ];
    for (name, desc) in &allowance_types {
        println!("   - {}: {}", name, desc);
    }

    println!("\n3. Why Use the Indexer?");
    println!("   - Standard feegrant queries require knowing both granter AND grantee");
    println!("   - Indexer allows querying by granter OR grantee alone");
    println!("   - Essential for apps showing all sponsored users\n");

    println!("4. Common Use Cases:");
    println!("   - Gasless onboarding: App pays fees for new users");
    println!("   - Subscription services: Pay fees for premium users");
    println!("   - DAO operations: Treasury pays member transaction fees");
}

// =============================================================================
// Run All Examples
// =============================================================================

fn main() {
    println!("╔════════════════════════════════════════════════════════════╗");
    println!("║  xion.indexer.feegrant.v1 Query Messages — Examples        ║");
    println!("╚════════════════════════════════════════════════════════════╝\n");

    query_allowance_examples();
    query_allowances_examples();
    query_allowances_by_granter_examples();
    feegrant_indexer_explanation();

    println!("\n═══════════════════════════════════════════════════════════════");
    println!("Type URL Reference:");
    println!("  QueryAllowanceRequest:          /xion.indexer.feegrant.v1.QueryAllowanceRequest");
    println!("  QueryAllowancesRequest:         /xion.indexer.feegrant.v1.QueryAllowancesRequest");
    println!(
        "  QueryAllowancesByGranterRequest: /xion.indexer.feegrant.v1.QueryAllowancesByGranterRequest"
    );
    println!("\nREST Endpoints:");
    println!("  GET /xion/indexer/feegrant/v1/allowance/{{granter}}/{{grantee}}");
    println!("  GET /xion/indexer/feegrant/v1/allowances/{{grantee}}");
    println!("  GET /xion/indexer/feegrant/v1/issued/{{granter}}");
    println!("\nNote: This is a query-only indexer module.");
    println!("═══════════════════════════════════════════════════════════════");
}
