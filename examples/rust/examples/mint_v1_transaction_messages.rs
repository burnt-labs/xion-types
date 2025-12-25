//! xion.mint.v1 Transaction Messages — Protobuf Examples
//!
//! This file demonstrates how to construct, encode, and decode
//! transaction messages from the Minting Module (xion.mint.v1).
//!
//! Messages covered:
//! - MsgUpdateParams: Update minting parameters (governance)
//!
//! Note: This module only has one transaction message, used for
//! governance proposals to update minting parameters.

use prost::Message;

use xion_types::types::xion_mint_v1::{Minter, MsgUpdateParams, Params};

// =============================================================================
// MsgUpdateParams
// =============================================================================
// Update the minting module parameters via governance.
// Type URL: /xion.mint.v1.MsgUpdateParams
// Signer: authority (governance module address)
//
// Use case: Governance proposals to adjust inflation rates, blocks per year,
// or the mint denomination.

fn msg_update_params_examples() {
    println!("=== MsgUpdateParams Examples ===\n");

    // 1. Construct message with all required params
    // Note: All decimal values (inflation, etc.) are strings representing decimals
    // e.g., "0.13" = 13%, "0.20" = 20%
    let msg = MsgUpdateParams {
        authority: "xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe".to_string(), // Governance module address
        params: Some(Params {
            mint_denom: "uxion".to_string(),            // Token to mint
            inflation_rate_change: "0.13".to_string(), // Max annual change: 13%
            inflation_max: "0.20".to_string(),         // Max inflation: 20%
            inflation_min: "0.07".to_string(),         // Min inflation: 7%
            goal_bonded: "0.67".to_string(),           // Target bonded ratio: 67%
            blocks_per_year: 6311520,                  // ~5 second blocks
        }),
    };

    println!("1. Constructed MsgUpdateParams:");
    println!("   authority: {}", msg.authority);
    if let Some(ref params) = msg.params {
        println!("   params.mint_denom: {}", params.mint_denom);
        println!(
            "   params.inflation_rate_change: {}",
            params.inflation_rate_change
        );
        println!("   params.inflation_max: {}", params.inflation_max);
        println!("   params.inflation_min: {}", params.inflation_min);
        println!("   params.goal_bonded: {}", params.goal_bonded);
        println!("   params.blocks_per_year: {}", params.blocks_per_year);
    }

    // 2. Encode to protobuf bytes
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded to protobuf bytes:");
    println!("   Length: {} bytes", encoded_bytes.len());
    println!(
        "   Hex: {}...",
        &hex::encode(&encoded_bytes)[..60.min(hex::encode(&encoded_bytes).len())]
    );

    // 3. Decode from protobuf bytes
    let decoded = MsgUpdateParams::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded from bytes:");
    println!("   authority: {}", decoded.authority);
    if let Some(params) = decoded.params {
        println!("   params.mint_denom: {}", params.mint_denom);
        println!("   params.blocks_per_year: {}", params.blocks_per_year);
    }
}

// =============================================================================
// Params Type Helper
// =============================================================================
// The Params type defines all minting configuration

fn params_examples() {
    println!("\n=== Params Type Examples ===\n");

    // Construct Params
    let params = Params {
        mint_denom: "uxion".to_string(),
        inflation_rate_change: "0.13".to_string(), // 13% max annual change
        inflation_max: "0.20".to_string(),         // 20% max
        inflation_min: "0.07".to_string(),         // 7% min
        goal_bonded: "0.67".to_string(),           // 67% target bonded
        blocks_per_year: 6311520,                  // ~5 second blocks
    };

    println!("1. Constructed Params:");
    println!("   mint_denom: {}", params.mint_denom);
    println!(
        "   inflation_rate_change: {} ({}%)",
        params.inflation_rate_change,
        params.inflation_rate_change.parse::<f64>().unwrap_or(0.0) * 100.0
    );
    println!(
        "   inflation_max: {} ({}%)",
        params.inflation_max,
        params.inflation_max.parse::<f64>().unwrap_or(0.0) * 100.0
    );
    println!(
        "   inflation_min: {} ({}%)",
        params.inflation_min,
        params.inflation_min.parse::<f64>().unwrap_or(0.0) * 100.0
    );
    println!(
        "   goal_bonded: {} ({}%)",
        params.goal_bonded,
        params.goal_bonded.parse::<f64>().unwrap_or(0.0) * 100.0
    );
    println!("   blocks_per_year: {}", params.blocks_per_year);

    // Calculate blocks per day/hour for reference
    let blocks_per_day = params.blocks_per_year as f64 / 365.0;
    let blocks_per_hour = blocks_per_day / 24.0;
    let seconds_per_block = (365.0 * 24.0 * 3600.0) / params.blocks_per_year as f64;
    println!("\n   Calculated:");
    println!("     Blocks per day: {}", blocks_per_day as u64);
    println!("     Blocks per hour: {}", blocks_per_hour as u64);
    println!("     Seconds per block: {:.2}", seconds_per_block);

    // Encode/decode
    let encoded = params.encode_to_vec();
    let decoded = Params::decode(encoded.as_slice()).unwrap();
    println!("\n2. Encoded/Decoded:");
    println!("   Encoded size: {} bytes", encoded.len());
    println!("   Decoded mint_denom: {}", decoded.mint_denom);
}

// =============================================================================
// Minter Type Helper
// =============================================================================
// The Minter type represents current minting state

fn minter_examples() {
    println!("\n=== Minter Type Examples ===\n");

    // Construct Minter (current minting state)
    let minter = Minter {
        inflation: "0.13".to_string(),             // Current 13% inflation
        annual_provisions: "1000000000000".to_string(), // Annual provisions in base denom
    };

    println!("1. Constructed Minter:");
    println!(
        "   inflation: {} ({}% annual)",
        minter.inflation,
        minter.inflation.parse::<f64>().unwrap_or(0.0) * 100.0
    );
    println!("   annual_provisions: {}", minter.annual_provisions);

    // Calculate provisions info
    let annual_provisions: f64 = minter.annual_provisions.parse().unwrap_or(0.0);
    let daily_provisions = annual_provisions / 365.0;
    println!("\n   Calculated:");
    println!("     Daily provisions: {} uxion", daily_provisions as u64);
    println!(
        "     Hourly provisions: {} uxion",
        (daily_provisions / 24.0) as u64
    );

    // Encode/decode
    let encoded = minter.encode_to_vec();
    let decoded = Minter::decode(encoded.as_slice()).unwrap();
    println!("\n2. Encoded/Decoded:");
    println!("   Encoded size: {} bytes", encoded.len());
    println!("   Decoded inflation: {}", decoded.inflation);
}

// =============================================================================
// Inflation Rate Examples
// =============================================================================
// Common inflation rate configurations

fn inflation_examples() {
    println!("\n=== Inflation Rate Examples ===\n");

    // Different inflation configurations
    let configs = [
        (
            "Cosmos Hub Default",
            "0.20",
            "0.07",
            "0.13",
            "0.67",
        ),
        (
            "Low Inflation",
            "0.10",
            "0.02",
            "0.05",
            "0.50",
        ),
        (
            "High Inflation",
            "0.50",
            "0.10",
            "0.20",
            "0.67",
        ),
        (
            "Fixed Rate (no change)",
            "0.10",
            "0.10",
            "0.00",
            "0.67",
        ),
    ];

    for (i, (name, max, min, rate_change, goal)) in configs.iter().enumerate() {
        println!("{}. {}:", i + 1, name);
        println!(
            "   Inflation range: {}% - {}%",
            min.parse::<f64>().unwrap_or(0.0) * 100.0,
            max.parse::<f64>().unwrap_or(0.0) * 100.0
        );
        println!(
            "   Rate change: ±{}% per year",
            rate_change.parse::<f64>().unwrap_or(0.0) * 100.0
        );
        println!(
            "   Goal bonded: {}%",
            goal.parse::<f64>().unwrap_or(0.0) * 100.0
        );
        println!();
    }
}

// =============================================================================
// Run All Examples
// =============================================================================

fn main() {
    println!("╔════════════════════════════════════════════════════════════╗");
    println!("║  xion.mint.v1 Transaction Messages — Protobuf Examples     ║");
    println!("╚════════════════════════════════════════════════════════════╝\n");

    msg_update_params_examples();
    params_examples();
    minter_examples();
    inflation_examples();

    println!("\n═══════════════════════════════════════════════════════════════");
    println!("Type URL Reference:");
    println!("  MsgUpdateParams:          /xion.mint.v1.MsgUpdateParams");
    println!("  MsgUpdateParamsResponse:  /xion.mint.v1.MsgUpdateParamsResponse");
    println!("═══════════════════════════════════════════════════════════════");
}
