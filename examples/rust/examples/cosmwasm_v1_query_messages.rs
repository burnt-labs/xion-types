//! cosmwasm.wasm.v1 Query Messages — Protobuf Examples
//!
//! This file demonstrates how to construct, encode, and decode
//! query messages for CosmWasm smart contracts.
//!
//! Queries covered:
//! - QuerySmartContractStateRequest: Execute a read-only query on a contract
//! - QueryContractInfoRequest: Get contract metadata (code ID, admin, label)
//! - QueryContractsByCodeRequest: List all contracts using a specific code ID
//! - QueryRawContractStateRequest: Read raw storage by key
//! - QueryContractHistoryRequest: Get contract's code migration history
//!
//! Common use cases:
//! - Querying CW20 token balances
//! - Getting NFT metadata and ownership
//! - Reading contract configuration

use prost::Message;
use serde_json::json;

use xion_types::types::cosmwasm_wasm_v1::{
    ContractCodeHistoryEntry, ContractCodeHistoryOperationType, ContractInfo,
    QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractInfoRequest,
    QueryContractInfoResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse,
    QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest,
    QuerySmartContractStateResponse,
};

use xion_types::types::cosmos_base_query_v1beta1::{PageRequest, PageResponse};

// =============================================================================
// QuerySmartContractState
// =============================================================================
// Execute a read-only query on a smart contract.
// This is the most common way to read contract state.
// Type URL: /cosmwasm.wasm.v1.QuerySmartContractStateRequest

fn query_smart_contract_state_examples() {
    println!("=== QuerySmartContractState Examples ===\n");

    // ---------------------------------------------------------------------------
    // Example 1: CW20 Balance Query
    // ---------------------------------------------------------------------------
    let balance_query = json!({
        "balance": {
            "address": "xion1holder..."
        }
    });

    let balance_request = QuerySmartContractStateRequest {
        address: "xion1cw20tokencontract...".to_string(),
        query_data: serde_json::to_vec(&balance_query).unwrap(),
    };

    println!("1. CW20 Balance Query:");
    println!("   contract: {}", balance_request.address);
    println!(
        "   query: {}",
        String::from_utf8_lossy(&balance_request.query_data)
    );

    // ---------------------------------------------------------------------------
    // Example 2: CW20 Token Info Query
    // ---------------------------------------------------------------------------
    let token_info_query = json!({
        "token_info": {}
    });

    let token_info_request = QuerySmartContractStateRequest {
        address: "xion1cw20tokencontract...".to_string(),
        query_data: serde_json::to_vec(&token_info_query).unwrap(),
    };

    println!("\n2. CW20 Token Info Query:");
    println!(
        "   query: {}",
        String::from_utf8_lossy(&token_info_request.query_data)
    );

    // ---------------------------------------------------------------------------
    // Example 3: CW721 NFT Owner Query
    // ---------------------------------------------------------------------------
    let owner_of_query = json!({
        "owner_of": {
            "token_id": "123",
            "include_expired": false
        }
    });

    let owner_request = QuerySmartContractStateRequest {
        address: "xion1nftcontract...".to_string(),
        query_data: serde_json::to_vec(&owner_of_query).unwrap(),
    };

    println!("\n3. CW721 Owner Of Query:");
    println!(
        "   query: {}",
        String::from_utf8_lossy(&owner_request.query_data)
    );

    // ---------------------------------------------------------------------------
    // Example 4: CW721 NFT Info Query
    // ---------------------------------------------------------------------------
    let nft_info_query = json!({
        "nft_info": {
            "token_id": "123"
        }
    });

    let nft_info_request = QuerySmartContractStateRequest {
        address: "xion1nftcontract...".to_string(),
        query_data: serde_json::to_vec(&nft_info_query).unwrap(),
    };

    println!("\n4. CW721 NFT Info Query:");
    println!(
        "   query: {}",
        String::from_utf8_lossy(&nft_info_request.query_data)
    );

    // ---------------------------------------------------------------------------
    // Encoding and Decoding
    // ---------------------------------------------------------------------------
    println!("\n--- Encoding/Decoding ---");

    // 5. Encode request to protobuf bytes
    let encoded_request = balance_request.encode_to_vec();
    println!("\n5. Encoded request: {} bytes", encoded_request.len());

    // 6. Decode request from protobuf bytes
    let decoded_request =
        QuerySmartContractStateRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n6. Decoded:");
    println!("   address: {}", decoded_request.address);
    println!(
        "   query: {}",
        String::from_utf8_lossy(&decoded_request.query_data)
    );

    // ---------------------------------------------------------------------------
    // Response Handling
    // ---------------------------------------------------------------------------
    println!("\n--- Response ---");

    // Simulated response (balance query returns { "balance": "1000000" })
    let balance_response_data = json!({ "balance": "1000000" });
    let response = QuerySmartContractStateResponse {
        data: serde_json::to_vec(&balance_response_data).unwrap(),
    };

    println!("\n7. Constructed Response:");
    println!("   data: {}", String::from_utf8_lossy(&response.data));

    // Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response =
        QuerySmartContractStateResponse::decode(encoded_response.as_slice()).unwrap();
    println!(
        "\n8. Decoded response: {}",
        String::from_utf8_lossy(&decoded_response.data)
    );
}

// =============================================================================
// QueryContractInfo
// =============================================================================
// Get metadata about a deployed contract.
// Type URL: /cosmwasm.wasm.v1.QueryContractInfoRequest

fn query_contract_info_examples() {
    println!("\n=== QueryContractInfo Examples ===\n");

    // 1. Construct request
    let request = QueryContractInfoRequest {
        address: "xion1contractaddress...".to_string(),
    };

    println!("1. Constructed QueryContractInfoRequest:");
    println!("   address: {}", request.address);

    // 2. Encode
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode
    let decoded_request = QueryContractInfoRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded address: {}", decoded_request.address);

    // --- Response ---
    println!("\n--- Response ---");

    // The response contains ContractInfo with:
    // - code_id: The code ID this contract was instantiated from
    // - creator: Address that instantiated the contract
    // - admin: Address that can migrate the contract (empty = immutable)
    // - label: Human-readable label
    // - created: Block height when created
    // - ibc_port_id: IBC port if contract supports IBC

    let response = QueryContractInfoResponse {
        address: "xion1contractaddress...".to_string(),
        contract_info: Some(ContractInfo {
            code_id: 123,
            creator: "xion1creator...".to_string(),
            admin: "xion1admin...".to_string(),
            label: "My Token Contract".to_string(),
            created: None, // AbsoluteTxPosition
            ibc_port_id: String::new(),
            ibc2_port_id: String::new(),
            extension: None,
        }),
    };

    println!("4. Constructed Response:");
    println!("   address: {}", response.address);
    if let Some(ref info) = response.contract_info {
        println!("   code_id: {}", info.code_id);
        println!("   creator: {}", info.creator);
        println!(
            "   admin: {}",
            if info.admin.is_empty() {
                "(none - immutable)"
            } else {
                &info.admin
            }
        );
        println!("   label: {}", info.label);
    }
}

// =============================================================================
// QueryContractsByCode
// =============================================================================
// List all contract instances created from a specific code ID.
// Type URL: /cosmwasm.wasm.v1.QueryContractsByCodeRequest

fn query_contracts_by_code_examples() {
    println!("\n=== QueryContractsByCode Examples ===\n");

    // 1. Construct request (with pagination)
    let request = QueryContractsByCodeRequest {
        code_id: 123,
        pagination: Some(PageRequest {
            key: vec![],
            offset: 0,
            limit: 10,
            count_total: true,
            reverse: false,
        }),
    };

    println!("1. Constructed QueryContractsByCodeRequest:");
    println!("   code_id: {}", request.code_id);
    if let Some(ref pagination) = request.pagination {
        println!("   pagination limit: {}", pagination.limit);
    }

    // 2. Encode
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Request without pagination
    let simple_request = QueryContractsByCodeRequest {
        code_id: 123,
        pagination: None,
    };
    println!("\n3. Simple request (no pagination):");
    println!("   code_id: {}", simple_request.code_id);

    // --- Response ---
    println!("\n--- Response ---");

    let response = QueryContractsByCodeResponse {
        contracts: vec![
            "xion1contract1...".to_string(),
            "xion1contract2...".to_string(),
            "xion1contract3...".to_string(),
        ],
        pagination: Some(PageResponse {
            next_key: vec![],
            total: 3,
        }),
    };

    println!("4. Constructed Response:");
    println!("   contracts: {:?}", response.contracts);
    if let Some(ref pagination) = response.pagination {
        println!("   total: {}", pagination.total);
    }
}

// =============================================================================
// QueryRawContractState
// =============================================================================
// Read raw contract storage by key.
// Useful for advanced use cases or debugging.
// Type URL: /cosmwasm.wasm.v1.QueryRawContractStateRequest

fn query_raw_contract_state_examples() {
    println!("\n=== QueryRawContractState Examples ===\n");

    // Storage keys are typically namespaced. Common patterns:
    // - Single items: "config" or namespace + "config"
    // - Maps: namespace + key bytes

    // 1. Query raw storage by key
    let request = QueryRawContractStateRequest {
        address: "xion1contractaddress...".to_string(),
        query_data: b"config".to_vec(), // Storage key
    };

    println!("1. Constructed QueryRawContractStateRequest:");
    println!("   address: {}", request.address);
    println!(
        "   key: {}",
        String::from_utf8_lossy(&request.query_data)
    );

    // 2. Encode
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Query with hex key (for map lookups)
    // CosmWasm uses length-prefixed keys for maps
    let hex_key = hex::decode("0005746f6b656e").unwrap(); // Length-prefixed "token"
    let map_request = QueryRawContractStateRequest {
        address: "xion1contractaddress...".to_string(),
        query_data: hex_key.clone(),
    };
    println!(
        "\n3. Map query with hex key: {}",
        hex::encode(&map_request.query_data)
    );

    // --- Response ---
    println!("\n--- Response ---");

    // Raw response is the stored bytes (usually JSON)
    let config_data = json!({ "owner": "xion1owner...", "paused": false });
    let response = QueryRawContractStateResponse {
        data: serde_json::to_vec(&config_data).unwrap(),
    };

    println!("4. Constructed Response:");
    println!("   data: {}", String::from_utf8_lossy(&response.data));
}

// =============================================================================
// QueryContractHistory
// =============================================================================
// Get the code migration history of a contract.
// Type URL: /cosmwasm.wasm.v1.QueryContractHistoryRequest

fn query_contract_history_examples() {
    println!("\n=== QueryContractHistory Examples ===\n");

    // 1. Construct request
    let request = QueryContractHistoryRequest {
        address: "xion1contractaddress...".to_string(),
        pagination: Some(PageRequest {
            key: vec![],
            offset: 0,
            limit: 10,
            count_total: false,
            reverse: false,
        }),
    };

    println!("1. Constructed QueryContractHistoryRequest:");
    println!("   address: {}", request.address);

    // 2. Encode
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // --- Response ---
    println!("\n--- Response ---");

    // History entries show each code change (instantiate, migrate)
    // ContractCodeHistoryOperationType: Init = 1, Migrate = 2, Genesis = 3
    let response = QueryContractHistoryResponse {
        entries: vec![
            ContractCodeHistoryEntry {
                operation: ContractCodeHistoryOperationType::Init as i32,
                code_id: 100,
                updated: None,
                msg: serde_json::to_vec(&json!({ "name": "Token v1" })).unwrap(),
            },
            ContractCodeHistoryEntry {
                operation: ContractCodeHistoryOperationType::Migrate as i32,
                code_id: 123,
                updated: None,
                msg: serde_json::to_vec(&json!({ "migrate_version": "2.0" })).unwrap(),
            },
        ],
        pagination: Some(PageResponse {
            next_key: vec![],
            total: 2,
        }),
    };

    println!("3. Constructed Response:");
    println!("   entries: {}", response.entries.len());
    for (i, entry) in response.entries.iter().enumerate() {
        let op_name = match entry.operation {
            1 => "INIT",
            2 => "MIGRATE",
            3 => "GENESIS",
            _ => "UNSPECIFIED",
        };
        println!("   Entry {}: {} -> code_id {}", i, op_name, entry.code_id);
    }
}

// =============================================================================
// Common Contract Query Patterns
// =============================================================================

fn common_query_patterns() {
    println!("\n=== Common Contract Query Patterns ===\n");

    // CW20 queries
    let cw20_queries = vec![
        ("balance", json!({ "balance": { "address": "xion1..." } })),
        ("token_info", json!({ "token_info": {} })),
        ("minter", json!({ "minter": {} })),
        (
            "allowance",
            json!({ "allowance": { "owner": "xion1...", "spender": "xion1..." } }),
        ),
        (
            "all_allowances",
            json!({ "all_allowances": { "owner": "xion1..." } }),
        ),
        ("all_accounts", json!({ "all_accounts": {} })),
    ];
    println!(
        "1. CW20 query types: {:?}",
        cw20_queries.iter().map(|(k, _)| k).collect::<Vec<_>>()
    );

    // CW721 queries
    let cw721_queries = vec![
        ("owner_of", json!({ "owner_of": { "token_id": "1" } })),
        ("nft_info", json!({ "nft_info": { "token_id": "1" } })),
        ("all_nft_info", json!({ "all_nft_info": { "token_id": "1" } })),
        ("tokens", json!({ "tokens": { "owner": "xion1..." } })),
        ("all_tokens", json!({ "all_tokens": {} })),
        ("contract_info", json!({ "contract_info": {} })),
        ("num_tokens", json!({ "num_tokens": {} })),
    ];
    println!(
        "2. CW721 query types: {:?}",
        cw721_queries.iter().map(|(k, _)| k).collect::<Vec<_>>()
    );

    // Generic patterns
    println!("\n3. Generic patterns:");
    println!("   - {{ config: {{}} }} - Get contract configuration");
    println!("   - {{ state: {{}} }} - Get contract state");
    println!("   - {{ info: {{}} }} - Get contract info");
    println!("   - {{ get_xxx: {{ key: value }} }} - Get specific item");
    println!("   - {{ list_xxx: {{ start_after: \"...\", limit: 10 }} }} - Paginated list");
}

// =============================================================================
// Run All Examples
// =============================================================================

fn main() {
    println!("╔════════════════════════════════════════════════════════════╗");
    println!("║  cosmwasm.wasm.v1 Query Messages — Protobuf Examples       ║");
    println!("╚════════════════════════════════════════════════════════════╝\n");

    query_smart_contract_state_examples();
    query_contract_info_examples();
    query_contracts_by_code_examples();
    query_raw_contract_state_examples();
    query_contract_history_examples();
    common_query_patterns();

    println!("\n═══════════════════════════════════════════════════════════════");
    println!("Type URL Reference (Requests):");
    println!("  QuerySmartContractStateRequest:  /cosmwasm.wasm.v1.QuerySmartContractStateRequest");
    println!("  QueryContractInfoRequest:        /cosmwasm.wasm.v1.QueryContractInfoRequest");
    println!("  QueryContractsByCodeRequest:     /cosmwasm.wasm.v1.QueryContractsByCodeRequest");
    println!("  QueryRawContractStateRequest:    /cosmwasm.wasm.v1.QueryRawContractStateRequest");
    println!("  QueryContractHistoryRequest:     /cosmwasm.wasm.v1.QueryContractHistoryRequest");
    println!("\nType URL Reference (Responses):");
    println!("  QuerySmartContractStateResponse: /cosmwasm.wasm.v1.QuerySmartContractStateResponse");
    println!("  QueryContractInfoResponse:       /cosmwasm.wasm.v1.QueryContractInfoResponse");
    println!("  QueryContractsByCodeResponse:    /cosmwasm.wasm.v1.QueryContractsByCodeResponse");
    println!("  QueryRawContractStateResponse:   /cosmwasm.wasm.v1.QueryRawContractStateResponse");
    println!("  QueryContractHistoryResponse:    /cosmwasm.wasm.v1.QueryContractHistoryResponse");
    println!("═══════════════════════════════════════════════════════════════");
}
