//! cosmwasm.wasm.v1 Transaction Messages — Protobuf Examples
//!
//! This file demonstrates how to construct, encode, and decode
//! transaction messages for CosmWasm smart contracts.
//!
//! Messages covered:
//! - MsgExecuteContract: Execute a method on a deployed contract
//! - MsgInstantiateContract: Deploy a new contract instance from stored code
//! - MsgMigrateContract: Upgrade a contract to new code
//! - MsgUpdateAdmin: Change contract admin
//! - MsgClearAdmin: Remove contract admin (makes contract immutable)
//!
//! Common use cases:
//! - Executing CW20 token transfers
//! - Interacting with NFT contracts (CW721)
//! - Calling custom contract methods

use prost::Message;
use serde_json::json;

use xion_types::types::cosmos_base_v1beta1::Coin;
use xion_types::types::cosmwasm_wasm_v1::{
    MsgClearAdmin, MsgExecuteContract, MsgInstantiateContract, MsgMigrateContract, MsgUpdateAdmin,
};

// =============================================================================
// MsgExecuteContract
// =============================================================================
// Execute a method on a deployed smart contract.
// Type URL: /cosmwasm.wasm.v1.MsgExecuteContract
// Signer: sender

fn msg_execute_contract_examples() {
    println!("=== MsgExecuteContract Examples ===\n");

    // ---------------------------------------------------------------------------
    // Example 1: Basic contract execution (no funds attached)
    // ---------------------------------------------------------------------------
    // This is the most common pattern for calling contract methods

    let basic_execute_msg = json!({
        "increment": {}  // Contract method with no args
    });

    let basic_msg = MsgExecuteContract {
        sender: "xion1sender...".to_string(),
        contract: "xion1contractaddress...".to_string(),
        msg: serde_json::to_vec(&basic_execute_msg).unwrap(),
        funds: vec![],
    };

    println!("1. Basic MsgExecuteContract (no funds):");
    println!("   sender: {}", basic_msg.sender);
    println!("   contract: {}", basic_msg.contract);
    println!("   msg: {}", String::from_utf8_lossy(&basic_msg.msg));
    println!("   funds: {:?}", basic_msg.funds);

    // ---------------------------------------------------------------------------
    // Example 2: CW20 Token Transfer
    // ---------------------------------------------------------------------------
    // Transfer CW20 tokens to another address

    let cw20_transfer_msg = json!({
        "transfer": {
            "recipient": "xion1recipient...",
            "amount": "1000000"  // Amount in token's smallest unit
        }
    });

    let cw20_transfer = MsgExecuteContract {
        sender: "xion1sender...".to_string(),
        contract: "xion1cw20tokencontract...".to_string(), // CW20 token contract address
        msg: serde_json::to_vec(&cw20_transfer_msg).unwrap(),
        funds: vec![], // CW20 transfers don't attach native funds
    };

    println!("\n2. CW20 Token Transfer:");
    println!("   contract: {}", cw20_transfer.contract);
    println!("   msg: {}", String::from_utf8_lossy(&cw20_transfer.msg));

    // ---------------------------------------------------------------------------
    // Example 3: Contract execution WITH attached funds
    // ---------------------------------------------------------------------------
    // Some contracts require native tokens to be sent with the message

    let buy_nft_msg = json!({
        "buy_nft": {
            "token_id": "42"
        }
    });

    let msg_with_funds = MsgExecuteContract {
        sender: "xion1buyer...".to_string(),
        contract: "xion1nftmarketplace...".to_string(),
        msg: serde_json::to_vec(&buy_nft_msg).unwrap(),
        funds: vec![Coin {
            denom: "uxion".to_string(),
            amount: "5000000".to_string(), // 5 XION
        }],
    };

    println!("\n3. Contract execution with funds:");
    println!("   msg: {}", String::from_utf8_lossy(&msg_with_funds.msg));
    println!("   funds: {:?}", msg_with_funds.funds);

    // ---------------------------------------------------------------------------
    // Example 4: CW721 NFT Transfer
    // ---------------------------------------------------------------------------

    let nft_transfer_msg = json!({
        "transfer_nft": {
            "recipient": "xion1recipient...",
            "token_id": "123"
        }
    });

    let nft_transfer = MsgExecuteContract {
        sender: "xion1owner...".to_string(),
        contract: "xion1nftcontract...".to_string(),
        msg: serde_json::to_vec(&nft_transfer_msg).unwrap(),
        funds: vec![],
    };

    println!("\n4. CW721 NFT Transfer:");
    println!("   msg: {}", String::from_utf8_lossy(&nft_transfer.msg));

    // ---------------------------------------------------------------------------
    // Encoding and Decoding
    // ---------------------------------------------------------------------------
    println!("\n--- Encoding/Decoding ---");

    // 5. Encode to protobuf bytes
    let encoded_bytes = basic_msg.encode_to_vec();
    println!("\n5. Encoded to protobuf bytes:");
    println!("   Length: {} bytes", encoded_bytes.len());

    // 6. Decode from protobuf bytes
    let decoded = MsgExecuteContract::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n6. Decoded from bytes:");
    println!("   sender: {}", decoded.sender);
    println!("   contract: {}", decoded.contract);
    println!("   msg: {}", String::from_utf8_lossy(&decoded.msg));

    // 7. Hex encoding (useful for debugging/logging)
    let hex_encoded = hex::encode(&basic_msg.encode_to_vec());
    println!("\n7. Hex encoded: {}...", &hex_encoded[..50.min(hex_encoded.len())]);

    // 8. Base64 encoding (common in REST APIs)
    let base64_encoded = base64::Engine::encode(
        &base64::engine::general_purpose::STANDARD,
        &basic_msg.encode_to_vec(),
    );
    println!("\n8. Base64 encoded: {}...", &base64_encoded[..50.min(base64_encoded.len())]);
}

// =============================================================================
// MsgInstantiateContract
// =============================================================================
// Create a new contract instance from stored WASM code.
// Type URL: /cosmwasm.wasm.v1.MsgInstantiateContract
// Signer: sender

fn msg_instantiate_contract_examples() {
    println!("\n=== MsgInstantiateContract Examples ===\n");

    // Instantiate message for a CW20 token
    let cw20_instantiate_msg = json!({
        "name": "My Token",
        "symbol": "MTK",
        "decimals": 6,
        "initial_balances": [
            {
                "address": "xion1creator...",
                "amount": "1000000000000"  // 1 million tokens
            }
        ],
        "mint": {
            "minter": "xion1creator..."
        }
    });

    let msg = MsgInstantiateContract {
        sender: "xion1creator...".to_string(),
        admin: "xion1admin...".to_string(), // Optional: address that can migrate contract
        code_id: 123,                        // Code ID from MsgStoreCode
        label: "My CW20 Token".to_string(),  // Human-readable label
        msg: serde_json::to_vec(&cw20_instantiate_msg).unwrap(),
        funds: vec![], // Initial funds to send to contract
    };

    println!("1. Constructed MsgInstantiateContract:");
    println!("   sender: {}", msg.sender);
    println!("   admin: {}", msg.admin);
    println!("   code_id: {}", msg.code_id);
    println!("   label: {}", msg.label);
    println!("   msg: {}", String::from_utf8_lossy(&msg.msg));

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode
    let decoded = MsgInstantiateContract::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded:");
    println!("   code_id: {}", decoded.code_id);
    println!("   label: {}", decoded.label);

    // ---------------------------------------------------------------------------
    // Example: Instantiate with initial funds
    // ---------------------------------------------------------------------------
    // Some contracts require initial funds (e.g., liquidity pools)

    let pool_instantiate_msg = json!({
        "token_a": "xion1tokena...",
        "token_b": "xion1tokenb..."
    });

    let msg_with_funds = MsgInstantiateContract {
        sender: "xion1creator...".to_string(),
        admin: String::new(), // Empty string = no admin (immutable)
        code_id: 456,
        label: "Liquidity Pool".to_string(),
        msg: serde_json::to_vec(&pool_instantiate_msg).unwrap(),
        funds: vec![Coin {
            denom: "uxion".to_string(),
            amount: "10000000".to_string(), // 10 XION initial liquidity
        }],
    };

    println!("\n4. Instantiate with funds:");
    println!(
        "   admin: {}",
        if msg_with_funds.admin.is_empty() {
            "(none - immutable)"
        } else {
            &msg_with_funds.admin
        }
    );
    println!("   funds: {:?}", msg_with_funds.funds);
}

// =============================================================================
// MsgMigrateContract
// =============================================================================
// Upgrade a contract to new code (requires admin permission).
// Type URL: /cosmwasm.wasm.v1.MsgMigrateContract
// Signer: sender (must be contract admin)

fn msg_migrate_contract_examples() {
    println!("\n=== MsgMigrateContract Examples ===\n");

    // Migration message (contract-specific)
    let migrate_msg = json!({
        "new_feature_enabled": true,
        "migration_version": "2.0.0"
    });

    let msg = MsgMigrateContract {
        sender: "xion1admin...".to_string(), // Must be the contract's admin
        contract: "xion1contractaddress...".to_string(),
        code_id: 789, // New code ID to migrate to
        msg: serde_json::to_vec(&migrate_msg).unwrap(),
    };

    println!("1. Constructed MsgMigrateContract:");
    println!("   sender: {}", msg.sender);
    println!("   contract: {}", msg.contract);
    println!("   code_id: {}", msg.code_id);
    println!("   msg: {}", String::from_utf8_lossy(&msg.msg));

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode
    let decoded = MsgMigrateContract::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded code_id: {}", decoded.code_id);
}

// =============================================================================
// MsgUpdateAdmin / MsgClearAdmin
// =============================================================================
// Change or remove the contract admin.
// Type URL: /cosmwasm.wasm.v1.MsgUpdateAdmin
// Type URL: /cosmwasm.wasm.v1.MsgClearAdmin
// Signer: sender (must be current admin)

fn msg_admin_examples() {
    println!("\n=== MsgUpdateAdmin / MsgClearAdmin Examples ===\n");

    // --- MsgUpdateAdmin ---
    let update_admin_msg = MsgUpdateAdmin {
        sender: "xion1currentadmin...".to_string(),
        new_admin: "xion1newadmin...".to_string(),
        contract: "xion1contractaddress...".to_string(),
    };

    println!("1. MsgUpdateAdmin:");
    println!("   sender: {}", update_admin_msg.sender);
    println!("   new_admin: {}", update_admin_msg.new_admin);
    println!("   contract: {}", update_admin_msg.contract);

    let encoded_update = update_admin_msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_update.len());

    // --- MsgClearAdmin ---
    // WARNING: This makes the contract immutable - no more migrations possible
    let clear_admin_msg = MsgClearAdmin {
        sender: "xion1currentadmin...".to_string(),
        contract: "xion1contractaddress...".to_string(),
    };

    println!("\n3. MsgClearAdmin (WARNING: makes contract immutable):");
    println!("   sender: {}", clear_admin_msg.sender);
    println!("   contract: {}", clear_admin_msg.contract);

    let encoded_clear = clear_admin_msg.encode_to_vec();
    println!("\n4. Encoded: {} bytes", encoded_clear.len());
}

// =============================================================================
// Helper: Constructing Contract Messages
// =============================================================================
// Tips for working with contract messages

fn contract_msg_helpers() {
    println!("\n=== Contract Message Helpers ===\n");

    // The `msg` field is always a JSON object encoded as Vec<u8>
    // Here are common patterns:

    // 1. Encode JSON to Vec<u8>
    let json_msg = json!({ "transfer": { "recipient": "xion1...", "amount": "1000" } });
    let encoded = serde_json::to_vec(&json_msg).unwrap();
    println!("1. JSON to Vec<u8>: {} bytes", encoded.len());

    // 2. Decode Vec<u8> back to JSON
    let decoded: serde_json::Value = serde_json::from_slice(&encoded).unwrap();
    println!("2. Vec<u8> to JSON: {}", decoded);

    // 3. Using raw bytes (advanced)
    let raw_msg = b"{\"transfer\":{\"recipient\":\"xion1...\",\"amount\":\"1000\"}}";
    println!("3. Raw bytes: {} bytes", raw_msg.len());

    // 4. Common CW20 messages
    let cw20_messages = vec![
        ("transfer", json!({ "recipient": "xion1...", "amount": "1000" })),
        ("send", json!({ "contract": "xion1...", "amount": "1000", "msg": "base64encodedmsg" })),
        ("increase_allowance", json!({ "spender": "xion1...", "amount": "1000" })),
        ("decrease_allowance", json!({ "spender": "xion1...", "amount": "1000" })),
        ("transfer_from", json!({ "owner": "xion1...", "recipient": "xion1...", "amount": "1000" })),
        ("burn", json!({ "amount": "1000" })),
        ("mint", json!({ "recipient": "xion1...", "amount": "1000" })),
    ];
    println!(
        "\n4. Common CW20 message types: {:?}",
        cw20_messages.iter().map(|(k, _)| k).collect::<Vec<_>>()
    );

    // 5. Common CW721 messages
    let cw721_messages = vec![
        ("transfer_nft", json!({ "recipient": "xion1...", "token_id": "1" })),
        ("send_nft", json!({ "contract": "xion1...", "token_id": "1", "msg": "base64encodedmsg" })),
        ("approve", json!({ "spender": "xion1...", "token_id": "1" })),
        ("revoke", json!({ "spender": "xion1...", "token_id": "1" })),
        ("approve_all", json!({ "operator": "xion1..." })),
        ("revoke_all", json!({ "operator": "xion1..." })),
        ("mint", json!({ "token_id": "1", "owner": "xion1...", "token_uri": "ipfs://..." })),
        ("burn", json!({ "token_id": "1" })),
    ];
    println!(
        "5. Common CW721 message types: {:?}",
        cw721_messages.iter().map(|(k, _)| k).collect::<Vec<_>>()
    );
}

// =============================================================================
// Run All Examples
// =============================================================================

fn main() {
    println!("╔════════════════════════════════════════════════════════════╗");
    println!("║  cosmwasm.wasm.v1 Transaction Messages — Protobuf Examples ║");
    println!("╚════════════════════════════════════════════════════════════╝\n");

    msg_execute_contract_examples();
    msg_instantiate_contract_examples();
    msg_migrate_contract_examples();
    msg_admin_examples();
    contract_msg_helpers();

    println!("\n═══════════════════════════════════════════════════════════════");
    println!("Type URL Reference:");
    println!("  MsgExecuteContract:     /cosmwasm.wasm.v1.MsgExecuteContract");
    println!("  MsgInstantiateContract: /cosmwasm.wasm.v1.MsgInstantiateContract");
    println!("  MsgMigrateContract:     /cosmwasm.wasm.v1.MsgMigrateContract");
    println!("  MsgUpdateAdmin:         /cosmwasm.wasm.v1.MsgUpdateAdmin");
    println!("  MsgClearAdmin:          /cosmwasm.wasm.v1.MsgClearAdmin");
    println!("═══════════════════════════════════════════════════════════════");
}
