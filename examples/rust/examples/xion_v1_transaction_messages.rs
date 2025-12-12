//! xion.v1 Transaction Messages — Protobuf Examples
//!
//! This file demonstrates how to construct, encode, and decode
//! transaction messages from the Core Xion Module (xion.v1).
//!
//! Messages covered:
//! - MsgSend: Transfer coins between addresses
//! - MsgMultiSend: Multi-input, multi-output transfers
//! - MsgSetPlatformPercentage: Set platform fee percentage (governance)
//! - MsgSetPlatformMinimum: Set minimum platform fees (governance)

use prost::Message;

use xion_types::types::cosmos_bank_v1beta1::{Input, Output};
use xion_types::types::cosmos_base_v1beta1::Coin;
use xion_types::types::xion_v1::{
    MsgMultiSend, MsgSend, MsgSetPlatformMinimum, MsgSetPlatformPercentage,
};

// =============================================================================
// MsgSend
// =============================================================================
// Transfer coins from one address to another.
// Type URL: /xion.v1.MsgSend
// Signer: from_address

fn msg_send_examples() {
    println!("=== MsgSend Examples ===\n");

    // 1. Construct message
    let msg_send = MsgSend {
        from_address: "xion1sender...".to_string(),
        to_address: "xion1recipient...".to_string(),
        amount: vec![Coin {
            denom: "uxion".to_string(),
            amount: "1000000".to_string(), // 1 XION = 1,000,000 uxion
        }],
    };

    println!("1. Constructed MsgSend:");
    println!("   from_address: {}", msg_send.from_address);
    println!("   to_address: {}", msg_send.to_address);
    println!("   amount: {:?}", msg_send.amount);

    // 2. Encode to protobuf bytes
    let encoded_bytes = msg_send.encode_to_vec();
    println!("\n2. Encoded to protobuf bytes:");
    println!("   Length: {} bytes", encoded_bytes.len());
    println!("   Hex: {}", hex::encode(&encoded_bytes));

    // 3. Decode from protobuf bytes
    let decoded = MsgSend::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded from bytes:");
    println!("   from_address: {}", decoded.from_address);
    println!("   to_address: {}", decoded.to_address);
}

// =============================================================================
// MsgMultiSend
// =============================================================================
// Multi-input, multi-output transfer.
// Type URL: /xion.v1.MsgMultiSend
// Signer: inputs (note: only one input is allowed despite being repeated)

fn msg_multi_send_examples() {
    println!("\n=== MsgMultiSend Examples ===\n");

    // 1. Construct inputs and outputs
    let input = Input {
        address: "xion1sender...".to_string(),
        coins: vec![Coin {
            denom: "uxion".to_string(),
            amount: "3000000".to_string(), // Total: 3 XION
        }],
    };

    let outputs = vec![
        Output {
            address: "xion1recipient1...".to_string(),
            coins: vec![Coin {
                denom: "uxion".to_string(),
                amount: "1000000".to_string(), // 1 XION
            }],
        },
        Output {
            address: "xion1recipient2...".to_string(),
            coins: vec![Coin {
                denom: "uxion".to_string(),
                amount: "2000000".to_string(), // 2 XION
            }],
        },
    ];

    // 2. Construct MsgMultiSend
    let msg_multi_send = MsgMultiSend {
        inputs: vec![input], // Only ONE input allowed
        outputs: outputs,
    };

    println!("1. Constructed MsgMultiSend:");
    println!("   inputs: {}", msg_multi_send.inputs.len());
    println!("   outputs: {}", msg_multi_send.outputs.len());

    // 3. Encode to protobuf
    let encoded_bytes = msg_multi_send.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 4. Decode
    let decoded = MsgMultiSend::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded outputs:");
    for (i, o) in decoded.outputs.iter().enumerate() {
        println!(
            "   Output {}: {} -> {} {}",
            i,
            o.address,
            o.coins[0].amount,
            o.coins[0].denom
        );
    }
}

// =============================================================================
// MsgSetPlatformPercentage
// =============================================================================
// Set the platform fee percentage (governance message).
// Type URL: /xion.v1.MsgSetPlatformPercentage
// Signer: authority (governance address)
// Note: platform_percentage is multiplied by 100 (e.g., 500 = 5%)

fn msg_set_platform_percentage_examples() {
    println!("\n=== MsgSetPlatformPercentage Examples ===\n");

    // 1. Construct message
    // platform_percentage is multiplied by 100
    // Example: 500 = 5%, 100 = 1%, 10000 = 100%
    let msg = MsgSetPlatformPercentage {
        authority: "xion1governance...".to_string(), // Governance module address
        platform_percentage: 500,                     // 5% fee
    };

    println!("1. Constructed MsgSetPlatformPercentage:");
    println!("   authority: {}", msg.authority);
    println!("   platform_percentage: {}", msg.platform_percentage);
    println!(
        "   Actual percentage: {}%",
        msg.platform_percentage as f64 / 100.0
    );

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode
    let decoded = MsgSetPlatformPercentage::decode(encoded_bytes.as_slice()).unwrap();
    println!(
        "\n3. Decoded platform_percentage: {}",
        decoded.platform_percentage
    );
}

// =============================================================================
// MsgSetPlatformMinimum
// =============================================================================
// Set the minimum platform fees (governance message).
// Type URL: /xion.v1.MsgSetPlatformMinimum
// Signer: authority (governance address)

fn msg_set_platform_minimum_examples() {
    println!("\n=== MsgSetPlatformMinimum Examples ===\n");

    // 1. Construct message with multiple minimum fee denominations
    let msg = MsgSetPlatformMinimum {
        authority: "xion1governance...".to_string(),
        minimums: vec![
            Coin {
                denom: "uxion".to_string(),
                amount: "1000".to_string(), // Minimum 0.001 XION
            },
            Coin {
                denom: "uatom".to_string(),
                amount: "500".to_string(), // Can set for other denoms too
            },
        ],
    };

    println!("1. Constructed MsgSetPlatformMinimum:");
    println!("   authority: {}", msg.authority);
    println!("   minimums:");
    for m in &msg.minimums {
        println!("     - {} {}", m.amount, m.denom);
    }

    // 2. Encode
    let encoded_bytes = msg.encode_to_vec();
    println!("\n2. Encoded: {} bytes", encoded_bytes.len());

    // 3. Decode
    let decoded = MsgSetPlatformMinimum::decode(encoded_bytes.as_slice()).unwrap();
    println!("\n3. Decoded minimums: {} entries", decoded.minimums.len());
}

// =============================================================================
// Coin Helper
// =============================================================================
// The Coin type is used by many messages

fn coin_examples() {
    println!("\n=== Coin Helper Examples ===\n");

    // Construct a Coin
    let coin = Coin {
        denom: "uxion".to_string(),
        amount: "1000000".to_string(),
    };

    println!("Coin: {} {}", coin.amount, coin.denom);

    // Encode/decode
    let encoded = coin.encode_to_vec();
    let decoded = Coin::decode(encoded.as_slice()).unwrap();
    println!("Decoded: {} {}", decoded.amount, decoded.denom);
}

// =============================================================================
// Run All Examples
// =============================================================================

fn main() {
    println!("╔════════════════════════════════════════════════════════════╗");
    println!("║  xion.v1 Transaction Messages — Protobuf Examples          ║");
    println!("╚════════════════════════════════════════════════════════════╝\n");

    msg_send_examples();
    msg_multi_send_examples();
    msg_set_platform_percentage_examples();
    msg_set_platform_minimum_examples();
    coin_examples();

    println!("\n═══════════════════════════════════════════════════════════════");
    println!("Type URL Reference:");
    println!("  MsgSend:                   /xion.v1.MsgSend");
    println!("  MsgMultiSend:              /xion.v1.MsgMultiSend");
    println!("  MsgSetPlatformPercentage:  /xion.v1.MsgSetPlatformPercentage");
    println!("  MsgSetPlatformMinimum:     /xion.v1.MsgSetPlatformMinimum");
    println!("═══════════════════════════════════════════════════════════════");
}
