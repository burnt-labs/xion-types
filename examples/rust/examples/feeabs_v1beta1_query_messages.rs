//! xion.feeabs.v1beta1 Query Messages — Protobuf Examples
//!
//! This file demonstrates how to construct, encode, and decode
//! query messages from the Fee Abstraction Module (xion.feeabs.v1beta1).
//!
//! Queries covered:
//! - QueryOsmosisArithmeticTwap: Get TWAP price for an IBC token
//! - QueryFeeabsModuleBalances: Get module account balances
//! - QueryHostChainConfig: Get configuration for a specific IBC token
//! - QueryAllHostChainConfig: List all host chain configurations
//!
//! Fee Abstraction allows users to pay transaction fees in non-native tokens
//! by swapping them to native tokens via Osmosis cross-chain swaps.

use prost::Message;

use xion_types::types::xion_feeabs_v1beta1::{
    HostChainFeeAbsConfig, HostChainFeeAbsStatus, QueryAllHostChainConfigRequest,
    QueryAllHostChainConfigResponse, QueryFeeabsModuleBalancesRequest,
    QueryFeeabsModuleBalancesResponse, QueryHostChainConfigRequest, QueryHostChainConfigResponse,
    QueryOsmosisArithmeticTwapRequest, QueryOsmosisArithmeticTwapResponse,
};

use xion_types::types::cosmos_base_v1beta1::Coin;

// =============================================================================
// QueryOsmosisArithmeticTwap
// =============================================================================
// Get the Time-Weighted Average Price (TWAP) for an IBC token.
// Endpoint: GET /fee-abstraction/feeabs/v1/osmosis-arithmetic-twap/{ibc_denom}
// Type URL: /xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest

fn query_osmosis_arithmetic_twap_examples() {
    println!("=== QueryOsmosisArithmeticTwap Examples ===\n");

    // 1. Construct request
    let request = QueryOsmosisArithmeticTwapRequest {
        ibc_denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
            .to_string(), // ATOM
    };

    println!("1. Constructed QueryOsmosisArithmeticTwapRequest:");
    println!("   ibc_denom: {}", request.ibc_denom);

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode request
    let decoded_request =
        QueryOsmosisArithmeticTwapRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded ibc_denom: {}", decoded_request.ibc_denom);

    // === Response ===
    println!("\n--- Response ---");

    // TWAP is returned as a decimal string (LegacyDec)
    // Example: "8.500000000000000000" means 1 ATOM = 8.5 XION
    let response = QueryOsmosisArithmeticTwapResponse {
        arithmetic_twap: "8.500000000000000000".to_string(),
    };

    println!("4. Constructed Response:");
    println!("   arithmetic_twap: {}", response.arithmetic_twap);
    println!(
        "   Interpretation: 1 IBC token = {} native tokens",
        response.arithmetic_twap.parse::<f64>().unwrap_or(0.0)
    );

    // 5. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response =
        QueryOsmosisArithmeticTwapResponse::decode(encoded_response.as_slice()).unwrap();
    println!(
        "\n5. Decoded arithmetic_twap: {}",
        decoded_response.arithmetic_twap
    );
}

// =============================================================================
// QueryFeeabsModuleBalances
// =============================================================================
// Get the balances held by the fee abstraction module account.
// Endpoint: GET /fee-abstraction/feeabs/v1/module-balances
// Type URL: /xion.feeabs.v1beta1.QueryFeeabsModuleBalancesRequest

fn query_feeabs_module_balances_examples() {
    println!("\n=== QueryFeeabsModuleBalances Examples ===\n");

    // 1. Construct request (no parameters needed)
    let request = QueryFeeabsModuleBalancesRequest {};

    println!("1. Constructed QueryFeeabsModuleBalancesRequest:");
    println!("   (no parameters)");

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // === Response ===
    println!("\n--- Response ---");

    let response = QueryFeeabsModuleBalancesResponse {
        balances: vec![
            Coin {
                denom: "uxion".to_string(),
                amount: "1000000000000".to_string(), // 1M XION
            },
            Coin {
                denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
                    .to_string(),
                amount: "50000000".to_string(), // 50 ATOM
            },
        ],
        address: "xion1feeabsmoduleaddress...".to_string(),
    };

    println!("3. Constructed Response:");
    println!("   address: {}", response.address);
    println!("   balances:");
    for coin in &response.balances {
        println!("     - {} {}", coin.amount, &coin.denom[..20.min(coin.denom.len())]);
    }

    // 4. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response =
        QueryFeeabsModuleBalancesResponse::decode(encoded_response.as_slice()).unwrap();
    println!(
        "\n4. Decoded balances count: {}",
        decoded_response.balances.len()
    );
    println!("   Decoded address: {}", decoded_response.address);
}

// =============================================================================
// QueryHostChainConfig
// =============================================================================
// Get the configuration for a specific IBC token.
// Endpoint: GET /fee-abstraction/feeabs/v1/host-chain-config/{ibc_denom}
// Type URL: /xion.feeabs.v1beta1.QueryHostChainConfigRequest

fn query_host_chain_config_examples() {
    println!("\n=== QueryHostChainConfig Examples ===\n");

    // 1. Construct request
    let request = QueryHostChainConfigRequest {
        ibc_denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
            .to_string(),
    };

    println!("1. Constructed QueryHostChainConfigRequest:");
    println!("   ibc_denom: {}", request.ibc_denom);

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // 3. Decode request
    let decoded_request =
        QueryHostChainConfigRequest::decode(encoded_request.as_slice()).unwrap();
    println!("\n3. Decoded ibc_denom: {}", decoded_request.ibc_denom);

    // === Response ===
    println!("\n--- Response ---");

    let response = QueryHostChainConfigResponse {
        host_chain_config: Some(HostChainFeeAbsConfig {
            ibc_denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
                .to_string(),
            osmosis_pool_token_denom_in: "uatom".to_string(),
            pool_id: 1,
            status: HostChainFeeAbsStatus::Updated as i32,
        }),
    };

    println!("4. Constructed Response:");
    if let Some(ref config) = response.host_chain_config {
        println!("   host_chain_config.ibc_denom: {}...", &config.ibc_denom[..40]);
        println!(
            "   host_chain_config.osmosis_pool_token_denom_in: {}",
            config.osmosis_pool_token_denom_in
        );
        println!("   host_chain_config.pool_id: {}", config.pool_id);
        println!("   host_chain_config.status: {} (UPDATED)", config.status);
    }

    // 5. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response =
        QueryHostChainConfigResponse::decode(encoded_response.as_slice()).unwrap();
    if let Some(config) = decoded_response.host_chain_config {
        println!("\n5. Decoded pool_id: {}", config.pool_id);
    }
}

// =============================================================================
// QueryAllHostChainConfig
// =============================================================================
// Get all host chain configurations.
// Endpoint: GET /fee-abstraction/feeabs/v1/all-host-chain-config
// Type URL: /xion.feeabs.v1beta1.QueryAllHostChainConfigRequest

fn query_all_host_chain_config_examples() {
    println!("\n=== QueryAllHostChainConfig Examples ===\n");

    // 1. Construct request (no parameters needed)
    let request = QueryAllHostChainConfigRequest {};

    println!("1. Constructed QueryAllHostChainConfigRequest:");
    println!("   (no parameters)");

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // === Response ===
    println!("\n--- Response ---");

    let response = QueryAllHostChainConfigResponse {
        all_host_chain_config: vec![
            HostChainFeeAbsConfig {
                ibc_denom:
                    "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
                        .to_string(),
                osmosis_pool_token_denom_in: "uatom".to_string(),
                pool_id: 1,
                status: HostChainFeeAbsStatus::Updated as i32,
            },
            HostChainFeeAbsConfig {
                ibc_denom:
                    "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858"
                        .to_string(),
                osmosis_pool_token_denom_in: "uusdc".to_string(),
                pool_id: 678,
                status: HostChainFeeAbsStatus::Updated as i32,
            },
            HostChainFeeAbsConfig {
                ibc_denom:
                    "ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4"
                        .to_string(),
                osmosis_pool_token_denom_in: "uosmo".to_string(),
                pool_id: 1,
                status: HostChainFeeAbsStatus::Outdated as i32,
            },
        ],
    };

    println!("3. Constructed Response:");
    println!(
        "   all_host_chain_config count: {}",
        response.all_host_chain_config.len()
    );
    for (i, config) in response.all_host_chain_config.iter().enumerate() {
        let status_name = match config.status {
            1 => "UPDATED",
            2 => "OUTDATED",
            3 => "FROZEN",
            _ => "UNSPECIFIED",
        };
        println!("\n   [{}] {}:", i, config.osmosis_pool_token_denom_in);
        println!("       ibc_denom: {}...", &config.ibc_denom[..30]);
        println!("       pool_id: {}", config.pool_id);
        println!("       status: {}", status_name);
    }

    // 4. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response =
        QueryAllHostChainConfigResponse::decode(encoded_response.as_slice()).unwrap();
    println!(
        "\n4. Decoded config count: {}",
        decoded_response.all_host_chain_config.len()
    );
}

// =============================================================================
// Understanding Fee Abstraction Flow
// =============================================================================

fn fee_abstraction_flow_examples() {
    println!("\n=== Understanding Fee Abstraction Flow ===\n");

    println!("Fee Abstraction allows users to pay fees in non-native tokens.\n");

    println!("Flow:");
    println!("  1. User wants to pay fees in ATOM (IBC token)");
    println!("  2. Query TWAP to get current ATOM/XION price");
    println!("  3. FeeAbs module swaps ATOM → XION via Osmosis");
    println!("  4. Swapped XION is used to pay the actual fee\n");

    println!("Requirements:");
    println!("  • Host chain config must exist for the IBC token");
    println!("  • Config status must be UPDATED (TWAP is current)");
    println!("  • FeeAbs module must have sufficient balance");
    println!("  • Osmosis pool must have liquidity\n");

    println!("IBC Denom Format:");
    println!("  ibc/HASH");
    println!("  where HASH = SHA256(path/channel-id/denom)\n");

    println!("Common IBC Tokens:");
    println!("  • ATOM: ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2");
    println!("  • USDC: ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858");
    println!("  • OSMO: ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4");
}

// =============================================================================
// Run All Examples
// =============================================================================

fn main() {
    println!("╔════════════════════════════════════════════════════════════╗");
    println!("║  xion.feeabs.v1beta1 Query Messages — Protobuf Examples    ║");
    println!("╚════════════════════════════════════════════════════════════╝\n");

    query_osmosis_arithmetic_twap_examples();
    query_feeabs_module_balances_examples();
    query_host_chain_config_examples();
    query_all_host_chain_config_examples();
    fee_abstraction_flow_examples();

    println!("\n═══════════════════════════════════════════════════════════════");
    println!("Type URL Reference (Requests):");
    println!("  QueryOsmosisArithmeticTwapRequest:  /xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest");
    println!("  QueryFeeabsModuleBalancesRequest:   /xion.feeabs.v1beta1.QueryFeeabsModuleBalancesRequest");
    println!("  QueryHostChainConfigRequest:        /xion.feeabs.v1beta1.QueryHostChainConfigRequest");
    println!("  QueryAllHostChainConfigRequest:     /xion.feeabs.v1beta1.QueryAllHostChainConfigRequest");
    println!("\nREST Endpoints:");
    println!("  GET /fee-abstraction/feeabs/v1/osmosis-arithmetic-twap/{{ibc_denom}}");
    println!("  GET /fee-abstraction/feeabs/v1/module-balances");
    println!("  GET /fee-abstraction/feeabs/v1/host-chain-config/{{ibc_denom}}");
    println!("  GET /fee-abstraction/feeabs/v1/all-host-chain-config");
    println!("═══════════════════════════════════════════════════════════════");
}
