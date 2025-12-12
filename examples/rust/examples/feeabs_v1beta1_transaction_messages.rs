//! xion.feeabs.v1beta1 Transaction Messages — Protobuf Examples
//!
//! This file demonstrates how to construct, encode, and decode
//! transaction messages from the Fee Abstraction Module (xion.feeabs.v1beta1).
//!
//! Messages covered:
//! - MsgFundFeeAbsModuleAccount: Fund the fee abstraction module
//! - MsgSendQueryIbcDenomTWAP: Query TWAP price from Osmosis
//! - MsgSwapCrossChain: Execute cross-chain swap for fee payment
//! - MsgUpdateParams: Update module parameters (governance)
//! - MsgAddHostZone: Add new host chain configuration (governance)
//! - MsgUpdateHostZone: Update host chain configuration (governance)
//! - MsgRemoveHostZone: Remove host chain configuration (governance)
//!
//! Fee Abstraction allows users to pay transaction fees in non-native tokens
//! by swapping them to native tokens via Osmosis cross-chain swaps.

use prost::Message;

use xion_types::types::cosmos_base_v1beta1::Coin;
use xion_types::types::xion_feeabs_v1beta1::{
    HostChainFeeAbsConfig, HostChainFeeAbsStatus, MsgAddHostZone, MsgFundFeeAbsModuleAccount,
    MsgRemoveHostZone, MsgSendQueryIbcDenomTwap, MsgSwapCrossChain, MsgUpdateHostZone,
    MsgUpdateParams, Params,
};

// =============================================================================
// MsgFundFeeAbsModuleAccount
// =============================================================================
// Fund the fee abstraction module account with tokens.
// Type URL: /xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount
// Signer: sender
//
// Use case: Add liquidity to the feeabs module so it can perform swaps.

fn msg_fund_fee_abs_module_account_examples() {
    println!("=== MsgFundFeeAbsModuleAccount Examples ===\n");

    // 1. Construct message
    let msg = MsgFundFeeAbsModuleAccount {
        sender: "xion1sender...".to_string(),
        amount: vec![Coin {
            denom: "uxion".to_string(),
            amount: "1000000000".to_string(), // 1000 XION
        }],
    };

    println!("1. Constructed MsgFundFeeAbsModuleAccount:");
    println!("   sender: {}", msg.sender);
    println!("   amount:");
    for coin in &msg.amount {
        println!("     - {} {}", coin.amount, coin.denom);
    }

    // 2. Encode to protobuf bytes
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode from protobuf bytes
    let decoded = MsgFundFeeAbsModuleAccount::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded sender: {}", decoded.sender);
    println!(
        "   Decoded amount: {} {}",
        decoded.amount[0].amount, decoded.amount[0].denom
    );
}

// =============================================================================
// MsgSendQueryIbcDenomTWAP
// =============================================================================
// Send a TWAP (Time-Weighted Average Price) query to Osmosis.
// Type URL: /xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP
// Signer: sender
//
// Use case: Query the current exchange rate for an IBC token on Osmosis.

fn msg_send_query_ibc_denom_twap_examples() {
    println!("\n=== MsgSendQueryIbcDenomTWAP Examples ===\n");

    // 1. Construct message
    let msg = MsgSendQueryIbcDenomTwap {
        sender: "xion1sender...".to_string(),
    };

    println!("1. Constructed MsgSendQueryIbcDenomTwap:");
    println!("   sender: {}", msg.sender);

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode
    let decoded = MsgSendQueryIbcDenomTwap::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded sender: {}", decoded.sender);
}

// =============================================================================
// MsgSwapCrossChain
// =============================================================================
// Execute a cross-chain swap via Osmosis.
// Type URL: /xion.feeabs.v1beta1.MsgSwapCrossChain
// Signer: sender
//
// Use case: Swap IBC tokens to native tokens for fee payment.

fn msg_swap_cross_chain_examples() {
    println!("\n=== MsgSwapCrossChain Examples ===\n");

    // 1. Construct message
    // ibc_denom is the IBC denomination of the token to swap
    // Format: ibc/HASH where HASH is derived from the channel path
    let msg = MsgSwapCrossChain {
        sender: "xion1sender...".to_string(),
        ibc_denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
            .to_string(), // ATOM on Xion
    };

    println!("1. Constructed MsgSwapCrossChain:");
    println!("   sender: {}", msg.sender);
    println!("   ibc_denom: {}", msg.ibc_denom);

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode
    let decoded = MsgSwapCrossChain::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded sender: {}", decoded.sender);
    println!("   Decoded ibc_denom: {}", decoded.ibc_denom);
}

// =============================================================================
// MsgUpdateParams
// =============================================================================
// Update the fee abstraction module parameters (governance).
// Type URL: /xion.feeabs.v1beta1.MsgUpdateParams
// Signer: authority (governance)
//
// Use case: Change Osmosis connection settings, channels, swap contract.

fn msg_update_params_examples() {
    println!("\n=== MsgUpdateParams Examples ===\n");

    // 1. Construct message with all params
    let msg = MsgUpdateParams {
        authority: "xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe".to_string(), // Governance address
        params: Some(Params {
            native_ibced_in_osmosis: "ibc/XION_ON_OSMOSIS_HASH".to_string(),
            osmosis_query_twap_path: "/osmosis.twap.v1beta1.Query/ArithmeticTwap".to_string(),
            chain_name: "xion".to_string(),
            ibc_transfer_channel: "channel-0".to_string(),
            ibc_query_icq_channel: "channel-1".to_string(),
            osmosis_crosschain_swap_address: "osmo1crosschainswap...".to_string(),
        }),
    };

    println!("1. Constructed MsgUpdateParams:");
    println!("   authority: {}", msg.authority);
    if let Some(ref params) = msg.params {
        println!(
            "   params.native_ibced_in_osmosis: {}",
            params.native_ibced_in_osmosis
        );
        println!("   params.chain_name: {}", params.chain_name);
        println!(
            "   params.ibc_transfer_channel: {}",
            params.ibc_transfer_channel
        );
        println!(
            "   params.ibc_query_icq_channel: {}",
            params.ibc_query_icq_channel
        );
    }

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode
    let decoded = MsgUpdateParams::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded authority: {}", decoded.authority);
    if let Some(params) = decoded.params {
        println!("   Decoded params.chain_name: {}", params.chain_name);
    }
}

// =============================================================================
// MsgAddHostZone
// =============================================================================
// Add a new host chain configuration (governance).
// Type URL: /xion.feeabs.v1beta1.MsgAddHostZone
// Signer: authority (governance)
//
// Use case: Enable a new IBC token to be used for fee payment.

fn msg_add_host_zone_examples() {
    println!("\n=== MsgAddHostZone Examples ===\n");

    // 1. Construct message
    let msg = MsgAddHostZone {
        authority: "xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe".to_string(),
        host_chain_config: Some(HostChainFeeAbsConfig {
            ibc_denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
                .to_string(), // ATOM
            osmosis_pool_token_denom_in: "uatom".to_string(),
            pool_id: 1, // Osmosis pool ID for ATOM/OSMO
            status: HostChainFeeAbsStatus::Updated as i32,
        }),
    };

    println!("1. Constructed MsgAddHostZone:");
    println!("   authority: {}", msg.authority);
    if let Some(ref config) = msg.host_chain_config {
        println!(
            "   host_chain_config.ibc_denom: {}...",
            &config.ibc_denom[..40]
        );
        println!(
            "   host_chain_config.osmosis_pool_token_denom_in: {}",
            config.osmosis_pool_token_denom_in
        );
        println!("   host_chain_config.pool_id: {}", config.pool_id);
        println!(
            "   host_chain_config.status: {} (UPDATED)",
            config.status
        );
    }

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode
    let decoded = MsgAddHostZone::decode(encoded_bytes.as_slice()).unwrap();
    if let Some(config) = decoded.host_chain_config {
        println!("\n3. Decoded pool_id: {}", config.pool_id);
    }
}

// =============================================================================
// MsgUpdateHostZone
// =============================================================================
// Update an existing host chain configuration (governance).
// Type URL: /xion.feeabs.v1beta1.MsgUpdateHostZone
// Signer: authority (governance)

fn msg_update_host_zone_examples() {
    println!("\n=== MsgUpdateHostZone Examples ===\n");

    // 1. Construct message
    let msg = MsgUpdateHostZone {
        authority: "xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe".to_string(),
        host_chain_config: Some(HostChainFeeAbsConfig {
            ibc_denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
                .to_string(),
            osmosis_pool_token_denom_in: "uatom".to_string(),
            pool_id: 1135, // Updated pool ID
            status: HostChainFeeAbsStatus::Updated as i32,
        }),
    };

    println!("1. Constructed MsgUpdateHostZone:");
    println!("   authority: {}", msg.authority);
    if let Some(ref config) = msg.host_chain_config {
        println!("   host_chain_config.pool_id: {}", config.pool_id);
        println!("   host_chain_config.status: {}", config.status);
    }

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());
}

// =============================================================================
// MsgRemoveHostZone
// =============================================================================
// Remove a host chain configuration (governance).
// Type URL: /xion.feeabs.v1beta1.MsgRemoveHostZone
// Signer: authority (governance)
//
// Use case: Disable an IBC token from being used for fee payment.

fn msg_remove_host_zone_examples() {
    println!("\n=== MsgRemoveHostZone Examples ===\n");

    // 1. Construct message
    let msg = MsgRemoveHostZone {
        authority: "xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe".to_string(),
        ibc_denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
            .to_string(),
    };

    println!("1. Constructed MsgRemoveHostZone:");
    println!("   authority: {}", msg.authority);
    println!("   ibc_denom: {}", msg.ibc_denom);

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode
    let decoded = MsgRemoveHostZone::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded ibc_denom: {}", decoded.ibc_denom);
}

// =============================================================================
// HostChainFeeAbsStatus Enum Helper
// =============================================================================

fn host_chain_status_examples() {
    println!("\n=== HostChainFeeAbsStatus Enum ===\n");

    let statuses = [
        (HostChainFeeAbsStatus::Unspecified as i32, "UNSPECIFIED", "Default/unknown"),
        (HostChainFeeAbsStatus::Updated as i32, "UPDATED", "Configuration is current"),
        (HostChainFeeAbsStatus::Outdated as i32, "OUTDATED", "Needs TWAP update"),
        (HostChainFeeAbsStatus::Frozen as i32, "FROZEN", "Temporarily disabled"),
    ];

    println!("Available status values:");
    for (value, name, desc) in &statuses {
        println!("   {}: {} - {}", value, name, desc);
    }
}

// =============================================================================
// Run All Examples
// =============================================================================

fn main() {
    println!("╔════════════════════════════════════════════════════════════╗");
    println!("║  xion.feeabs.v1beta1 Transaction Messages — Examples       ║");
    println!("╚════════════════════════════════════════════════════════════╝\n");

    msg_fund_fee_abs_module_account_examples();
    msg_send_query_ibc_denom_twap_examples();
    msg_swap_cross_chain_examples();
    msg_update_params_examples();
    msg_add_host_zone_examples();
    msg_update_host_zone_examples();
    msg_remove_host_zone_examples();
    host_chain_status_examples();

    println!("\n═══════════════════════════════════════════════════════════════");
    println!("Type URL Reference:");
    println!("  MsgFundFeeAbsModuleAccount:  /xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount");
    println!("  MsgSendQueryIbcDenomTWAP:    /xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP");
    println!("  MsgSwapCrossChain:           /xion.feeabs.v1beta1.MsgSwapCrossChain");
    println!("  MsgUpdateParams:             /xion.feeabs.v1beta1.MsgUpdateParams");
    println!("  MsgAddHostZone:              /xion.feeabs.v1beta1.MsgAddHostZone");
    println!("  MsgUpdateHostZone:           /xion.feeabs.v1beta1.MsgUpdateHostZone");
    println!("  MsgRemoveHostZone:           /xion.feeabs.v1beta1.MsgRemoveHostZone");
    println!("═══════════════════════════════════════════════════════════════");
}
