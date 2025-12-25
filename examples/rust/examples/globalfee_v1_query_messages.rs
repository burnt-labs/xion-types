//! xion.globalfee.v1 Query Messages — Protobuf Examples
//!
//! This file demonstrates how to construct, encode, and decode
//! query messages from the Global Fee Module (xion.globalfee.v1).
//!
//! Queries covered:
//! - QueryParams: Get global fee parameters (minimum gas prices, bypass rules)
//!
//! The Global Fee module sets chain-wide minimum gas prices and defines
//! which message types can bypass fee requirements.
//!
//! Note: This module has no transaction messages. Parameters are updated
//! via governance proposals using the standard cosmos-sdk gov module.

use prost::Message;

use xion_types::types::cosmos_base_v1beta1::DecCoin;
use xion_types::types::xion_globalfee_v1::{
    GenesisState, Params, QueryParamsRequest, QueryParamsResponse,
};

// =============================================================================
// QueryParams
// =============================================================================
// Get the global fee module parameters.
// Endpoint: GET /xion/globalfee/v1/params
// Type URL: /xion.globalfee.v1.QueryParamsRequest

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
            // Minimum gas prices - users must pay at least this much per gas unit
            // Multiple denoms = user can pay in ANY of these (not all)
            minimum_gas_prices: vec![DecCoin {
                denom: "uxion".to_string(),
                amount: "0.001".to_string(), // 0.001 uxion per gas
            }],
            // Message types that can bypass minimum fee (still need some fee, but can be zero)
            bypass_min_fee_msg_types: vec![
                "/ibc.core.client.v1.MsgUpdateClient".to_string(),
                "/ibc.core.channel.v1.MsgRecvPacket".to_string(),
                "/ibc.core.channel.v1.MsgAcknowledgement".to_string(),
                "/ibc.core.channel.v1.MsgTimeout".to_string(),
                "/ibc.core.channel.v1.MsgTimeoutOnClose".to_string(),
            ],
            // Max gas for transactions containing only bypass messages
            max_total_bypass_min_fee_msg_gas_usage: 1000000, // 1M gas
        }),
    };

    println!("3. Constructed Response:");
    if let Some(ref params) = response.params {
        println!("   params.minimum_gas_prices:");
        for coin in &params.minimum_gas_prices {
            println!("     - {} {} per gas", coin.amount, coin.denom);
        }
        println!("\n   params.bypass_min_fee_msg_types:");
        for msg_type in &params.bypass_min_fee_msg_types {
            println!("     - {}", msg_type);
        }
        println!(
            "\n   params.max_total_bypass_min_fee_msg_gas_usage: {}",
            params.max_total_bypass_min_fee_msg_gas_usage
        );
    }

    // 4. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response = QueryParamsResponse::decode(encoded_response.as_slice()).unwrap();
    if let Some(params) = decoded_response.params {
        println!(
            "\n4. Decoded minimum_gas_prices count: {}",
            params.minimum_gas_prices.len()
        );
        println!(
            "   Decoded bypass_min_fee_msg_types count: {}",
            params.bypass_min_fee_msg_types.len()
        );
    }
}

// =============================================================================
// Params Type Helper
// =============================================================================
// The Params type defines global fee configuration

fn params_examples() {
    println!("\n=== Params Type Examples ===\n");

    // Construct Params
    let params = Params {
        minimum_gas_prices: vec![
            DecCoin {
                denom: "uxion".to_string(),
                amount: "0.001".to_string(),
            },
            DecCoin {
                denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
                    .to_string(), // ATOM
                amount: "0.0001".to_string(),
            },
        ],
        bypass_min_fee_msg_types: vec![
            "/ibc.core.client.v1.MsgUpdateClient".to_string(),
            "/ibc.core.channel.v1.MsgRecvPacket".to_string(),
        ],
        max_total_bypass_min_fee_msg_gas_usage: 1000000,
    };

    println!("1. Constructed Params:");
    println!("   minimum_gas_prices:");
    for coin in &params.minimum_gas_prices {
        let denom_display = if coin.denom.len() > 30 {
            format!("{}...", &coin.denom[..30])
        } else {
            coin.denom.clone()
        };
        println!("     - {} {}", coin.amount, denom_display);
    }
    println!(
        "\n   bypass_min_fee_msg_types: {} types",
        params.bypass_min_fee_msg_types.len()
    );
    println!(
        "   max_total_bypass_min_fee_msg_gas_usage: {}",
        params.max_total_bypass_min_fee_msg_gas_usage
    );

    // Encode/decode
    let encoded = params.encode_to_vec();
    let decoded = Params::decode(encoded.as_slice()).unwrap();
    println!("\n2. Encoded/Decoded:");
    println!("   Encoded size: {} bytes", encoded.len());
    println!(
        "   Decoded minimum_gas_prices count: {}",
        decoded.minimum_gas_prices.len()
    );
}

// =============================================================================
// GenesisState Type Helper
// =============================================================================

fn genesis_state_examples() {
    println!("\n=== GenesisState Type Examples ===\n");

    // Construct GenesisState
    let genesis = GenesisState {
        params: Some(Params {
            minimum_gas_prices: vec![DecCoin {
                denom: "uxion".to_string(),
                amount: "0.001".to_string(),
            }],
            bypass_min_fee_msg_types: vec!["/ibc.core.client.v1.MsgUpdateClient".to_string()],
            max_total_bypass_min_fee_msg_gas_usage: 1000000,
        }),
    };

    println!("1. Constructed GenesisState:");
    if let Some(ref params) = genesis.params {
        println!(
            "   params.minimum_gas_prices: {} entries",
            params.minimum_gas_prices.len()
        );
        println!(
            "   params.bypass_min_fee_msg_types: {} types",
            params.bypass_min_fee_msg_types.len()
        );
    }

    // Encode/decode
    let encoded = genesis.encode_to_vec();
    let decoded = GenesisState::decode(encoded.as_slice()).unwrap();
    println!("\n2. Encoded/Decoded:");
    println!("   Encoded size: {} bytes", encoded.len());
    println!("   Decoded successfully: {}", decoded.params.is_some());
}

// =============================================================================
// Understanding Global Fees
// =============================================================================

fn global_fee_explanation() {
    println!("\n=== Understanding Global Fees ===\n");

    println!("The Global Fee module enforces chain-wide minimum gas prices.\n");

    println!("Key Concepts:\n");

    println!("1. minimum_gas_prices:");
    println!("   - Sets minimum price per unit of gas");
    println!("   - Multiple denoms = user can pay in ANY of them");
    println!("   - Example: 0.001 uxion means 1M gas costs at least 1000 uxion\n");

    println!("2. bypass_min_fee_msg_types:");
    println!("   - Messages that can skip minimum fee requirement");
    println!("   - Typically IBC relay messages (to not block relayers)");
    println!("   - TX must ONLY contain bypass messages to qualify\n");

    println!("3. max_total_bypass_min_fee_msg_gas_usage:");
    println!("   - Maximum gas for a \"bypass\" transaction");
    println!("   - Prevents abuse of fee bypass\n");

    println!("Fee Calculation Example:");
    println!("  Gas limit: 200,000");
    println!("  Min gas price: 0.001 uxion");
    println!("  Minimum fee: 200,000 × 0.001 = 200 uxion\n");

    println!("Common Bypass Message Types:");
    let bypass_types = [
        "/ibc.core.client.v1.MsgUpdateClient",
        "/ibc.core.channel.v1.MsgRecvPacket",
        "/ibc.core.channel.v1.MsgAcknowledgement",
        "/ibc.core.channel.v1.MsgTimeout",
        "/ibc.core.channel.v1.MsgTimeoutOnClose",
    ];
    for t in &bypass_types {
        println!("  - {}", t);
    }
}

// =============================================================================
// Run All Examples
// =============================================================================

fn main() {
    println!("╔════════════════════════════════════════════════════════════╗");
    println!("║  xion.globalfee.v1 Query Messages — Protobuf Examples      ║");
    println!("╚════════════════════════════════════════════════════════════╝\n");

    query_params_examples();
    params_examples();
    genesis_state_examples();
    global_fee_explanation();

    println!("\n═══════════════════════════════════════════════════════════════");
    println!("Type URL Reference:");
    println!("  QueryParamsRequest:  /xion.globalfee.v1.QueryParamsRequest");
    println!("  QueryParamsResponse: /xion.globalfee.v1.QueryParamsResponse");
    println!("\nREST Endpoint:");
    println!("  GET /xion/globalfee/v1/params");
    println!("\nNote: This module has no transaction messages.");
    println!("Parameters are updated via governance proposals.");
    println!("═══════════════════════════════════════════════════════════════");
}
