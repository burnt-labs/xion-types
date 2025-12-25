//! xion.mint.v1 Query Messages — Protobuf Examples
//!
//! This file demonstrates how to construct, encode, and decode
//! query messages from the Minting Module (xion.mint.v1).
//!
//! Queries covered:
//! - QueryParams: Get minting parameters (denom, inflation bounds, blocks/year)
//! - QueryInflation: Get current inflation rate
//! - QueryAnnualProvisions: Get current annual token provisions

use prost::Message;

use xion_types::types::xion_mint_v1::{
    Params, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse,
    QueryInflationRequest, QueryInflationResponse, QueryParamsRequest, QueryParamsResponse,
};

// =============================================================================
// QueryParams
// =============================================================================
// Get the minting module parameters.
// Endpoint: GET /xion/mint/v1/params
// Type URL: /xion.mint.v1.QueryParamsRequest

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
            mint_denom: "uxion".to_string(),
            inflation_rate_change: "0.13".to_string(), // 13% max annual change
            inflation_max: "0.20".to_string(),         // 20% max
            inflation_min: "0.07".to_string(),         // 7% min
            goal_bonded: "0.67".to_string(),           // 67% target
            blocks_per_year: 6311520,
        }),
    };

    println!("3. Constructed Response:");
    if let Some(ref params) = response.params {
        println!("   params.mint_denom: {}", params.mint_denom);
        println!(
            "   params.inflation_rate_change: {} ({}%)",
            params.inflation_rate_change,
            params.inflation_rate_change.parse::<f64>().unwrap_or(0.0) * 100.0
        );
        println!(
            "   params.inflation_max: {} ({}%)",
            params.inflation_max,
            params.inflation_max.parse::<f64>().unwrap_or(0.0) * 100.0
        );
        println!(
            "   params.inflation_min: {} ({}%)",
            params.inflation_min,
            params.inflation_min.parse::<f64>().unwrap_or(0.0) * 100.0
        );
        println!(
            "   params.goal_bonded: {} ({}%)",
            params.goal_bonded,
            params.goal_bonded.parse::<f64>().unwrap_or(0.0) * 100.0
        );
        println!("   params.blocks_per_year: {}", params.blocks_per_year);
    }

    // 4. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response = QueryParamsResponse::decode(encoded_response.as_slice()).unwrap();
    if let Some(params) = decoded_response.params {
        println!("\n4. Decoded params.mint_denom: {}", params.mint_denom);
    }
}

// =============================================================================
// QueryInflation
// =============================================================================
// Get the current minting inflation rate.
// Endpoint: GET /xion/mint/v1/inflation
// Type URL: /xion.mint.v1.QueryInflationRequest

fn query_inflation_examples() {
    println!("\n=== QueryInflation Examples ===\n");

    // 1. Construct request (no parameters needed)
    let request = QueryInflationRequest {};

    println!("1. Constructed QueryInflationRequest:");
    println!("   (no parameters)");

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // === Response ===
    println!("\n--- Response ---");

    // Note: The inflation field is bytes in proto (LegacyDec custom type)
    // Typically the value represents a decimal string like "0.130000000000000000"
    let inflation_str = "0.130000000000000000";
    let response = QueryInflationResponse {
        inflation: inflation_str.as_bytes().to_vec(),
    };

    println!("3. Constructed Response:");
    println!("   inflation (raw bytes): {} bytes", response.inflation.len());

    // Convert bytes to string to interpret the decimal value
    let inflation_decoded = String::from_utf8_lossy(&response.inflation);
    println!("   inflation (as string): {}", inflation_decoded);
    println!(
        "   inflation (percentage): {}%",
        inflation_decoded.parse::<f64>().unwrap_or(0.0) * 100.0
    );

    // 4. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response = QueryInflationResponse::decode(encoded_response.as_slice()).unwrap();
    println!(
        "\n4. Decoded inflation bytes length: {}",
        decoded_response.inflation.len()
    );
}

// =============================================================================
// QueryAnnualProvisions
// =============================================================================
// Get the current annual provisions (tokens to be minted this year).
// Endpoint: GET /xion/mint/v1/annual_provisions
// Type URL: /xion.mint.v1.QueryAnnualProvisionsRequest

fn query_annual_provisions_examples() {
    println!("\n=== QueryAnnualProvisions Examples ===\n");

    // 1. Construct request (no parameters needed)
    let request = QueryAnnualProvisionsRequest {};

    println!("1. Constructed QueryAnnualProvisionsRequest:");
    println!("   (no parameters)");

    // 2. Encode request
    let encoded_request = request.encode_to_vec();
    println!("\n2. Encoded request: {} bytes", encoded_request.len());

    // === Response ===
    println!("\n--- Response ---");

    // Note: annual_provisions is bytes (LegacyDec custom type)
    // Represents the total tokens to be minted this year in base denomination
    let annual_provisions = "1000000000000.000000000000000000"; // 1 trillion uxion
    let response = QueryAnnualProvisionsResponse {
        annual_provisions: annual_provisions.as_bytes().to_vec(),
    };

    println!("3. Constructed Response:");
    println!(
        "   annual_provisions (raw bytes): {} bytes",
        response.annual_provisions.len()
    );

    // Convert bytes to string to interpret the value
    let provisions_str = String::from_utf8_lossy(&response.annual_provisions);
    println!("   annual_provisions (as string): {}", provisions_str);

    // Parse and display in more readable formats
    let provisions: f64 = provisions_str
        .split('.')
        .next()
        .unwrap_or("0")
        .parse()
        .unwrap_or(0.0);
    println!("   annual_provisions (uxion): {}", provisions as u64);
    println!("   annual_provisions (XION): {}", provisions / 1_000_000.0);

    // Calculate derived values
    let daily_provisions = provisions / 365.0;
    let hourly_provisions = daily_provisions / 24.0;
    let per_block_provisions = provisions / 6311520.0; // Using default blocks/year

    println!("\n   Derived values (at current rate):");
    println!("     Daily provisions: {} uxion", daily_provisions as u64);
    println!("     Hourly provisions: {} uxion", hourly_provisions as u64);
    println!("     Per-block provisions: {:.2} uxion", per_block_provisions);

    // 4. Encode/decode response
    let encoded_response = response.encode_to_vec();
    let decoded_response =
        QueryAnnualProvisionsResponse::decode(encoded_response.as_slice()).unwrap();
    println!(
        "\n4. Decoded annual_provisions bytes length: {}",
        decoded_response.annual_provisions.len()
    );
}

// =============================================================================
// Understanding Mint Economics
// =============================================================================
// Helper to understand how minting economics work

fn mint_economics_examples() {
    println!("\n=== Understanding Mint Economics ===\n");

    // Example chain state
    let total_supply: f64 = 1_000_000_000_000_000.0; // 1 billion XION in uxion
    let bonded_ratio = 0.45; // 45% of tokens staked
    let goal_bonded = 0.67; // 67% target
    let inflation_min = 0.07; // 7%
    let inflation_max = 0.20; // 20%

    println!("Example Chain State:");
    println!(
        "   Total Supply: {} XION",
        (total_supply / 1_000_000.0) as u64
    );
    println!("   Bonded Ratio: {}%", bonded_ratio * 100.0);
    println!("   Goal Bonded: {}%", goal_bonded * 100.0);
    println!(
        "   Inflation Range: {}% - {}%",
        inflation_min * 100.0,
        inflation_max * 100.0
    );

    // Inflation adjusts based on bonded ratio vs goal
    // If bonded < goal: inflation increases (incentivize staking)
    // If bonded > goal: inflation decreases (reduce dilution)
    let bonded_diff = goal_bonded - bonded_ratio;

    println!("\n   Analysis:");
    if bonded_diff > 0.0 {
        println!(
            "   Bonded ratio ({}%) below goal ({}%)",
            bonded_ratio * 100.0,
            goal_bonded * 100.0
        );
        println!("   → Inflation will INCREASE to incentivize staking");
    } else if bonded_diff < 0.0 {
        println!(
            "   Bonded ratio ({}%) above goal ({}%)",
            bonded_ratio * 100.0,
            goal_bonded * 100.0
        );
        println!("   → Inflation will DECREASE to reduce dilution");
    } else {
        println!("   Bonded ratio at goal - inflation stable");
    }

    // Calculate approximate annual provisions at different inflation rates
    println!("\n   Annual Provisions at Different Inflation Rates:");
    for rate in &[0.07, 0.10, 0.13, 0.20] {
        let provisions = total_supply * rate;
        println!(
            "     {}%: {} XION/year",
            rate * 100.0,
            (provisions / 1_000_000.0) as u64
        );
    }
}

// =============================================================================
// Run All Examples
// =============================================================================

fn main() {
    println!("╔════════════════════════════════════════════════════════════╗");
    println!("║  xion.mint.v1 Query Messages — Protobuf Examples           ║");
    println!("╚════════════════════════════════════════════════════════════╝\n");

    query_params_examples();
    query_inflation_examples();
    query_annual_provisions_examples();
    mint_economics_examples();

    println!("\n═══════════════════════════════════════════════════════════════");
    println!("Type URL Reference (Requests):");
    println!("  QueryParamsRequest:            /xion.mint.v1.QueryParamsRequest");
    println!("  QueryInflationRequest:         /xion.mint.v1.QueryInflationRequest");
    println!("  QueryAnnualProvisionsRequest:  /xion.mint.v1.QueryAnnualProvisionsRequest");
    println!("\nREST Endpoints:");
    println!("  GET /xion/mint/v1/params");
    println!("  GET /xion/mint/v1/inflation");
    println!("  GET /xion/mint/v1/annual_provisions");
    println!("═══════════════════════════════════════════════════════════════");
}
