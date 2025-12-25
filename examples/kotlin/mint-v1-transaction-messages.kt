/**
 * xion.mint.v1 Transaction Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * transaction messages from the Minting Module (xion.mint.v1).
 *
 * Messages covered:
 * - MsgUpdateParams: Update minting parameters (governance)
 *
 * Note: This module only has one transaction message, used for
 * governance proposals to update minting parameters.
 */

package examples.kotlin

import xion.mint.v1.Tx
import xion.mint.v1.msgUpdateParams
import xion.mint.v1.Mint
import xion.mint.v1.params
import xion.mint.v1.minter

// =============================================================================
// MsgUpdateParams
// =============================================================================
// Update the minting module parameters via governance.
// Type URL: /xion.mint.v1.MsgUpdateParams
// Signer: authority (governance module address)

fun msgUpdateParamsExamples() {
    println("=== MsgUpdateParams Examples ===\n")

    // 1. Construct message with all required params
    val msg = msgUpdateParams {
        authority = "xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe"
        params = params {
            mintDenom = "uxion"
            inflationRateChange = "0.13" // Max annual change: 13%
            inflationMax = "0.20" // Max inflation: 20%
            inflationMin = "0.07" // Min inflation: 7%
            goalBonded = "0.67" // Target bonded ratio: 67%
            blocksPerYear = 6311520L // ~5 second blocks
        }
    }

    println("1. Constructed MsgUpdateParams:")
    println("   authority: ${msg.authority}")
    println("   params.mintDenom: ${msg.params.mintDenom}")
    println("   params.inflationRateChange: ${msg.params.inflationRateChange} (${msg.params.inflationRateChange.toDouble() * 100}%)")
    println("   params.inflationMax: ${msg.params.inflationMax} (${msg.params.inflationMax.toDouble() * 100}%)")
    println("   params.inflationMin: ${msg.params.inflationMin} (${msg.params.inflationMin.toDouble() * 100}%)")
    println("   params.goalBonded: ${msg.params.goalBonded} (${msg.params.goalBonded.toDouble() * 100}%)")
    println("   params.blocksPerYear: ${msg.params.blocksPerYear}")
    println("   typeUrl: /xion.mint.v1.MsgUpdateParams")

    // 2. Encode
    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")

    // 3. Decode
    val decoded = Tx.MsgUpdateParams.parseFrom(encodedBytes)
    println("\n3. Decoded authority: ${decoded.authority}")
    println("   Decoded params.mintDenom: ${decoded.params.mintDenom}")

    // 4. Type URL
    val typeUrl = "/xion.mint.v1.MsgUpdateParams"
    println("\n4. Type URL: $typeUrl")
}

// =============================================================================
// Params Type Helper
// =============================================================================

fun paramsExamples() {
    println("\n=== Params Type Examples ===\n")

    val params = params {
        mintDenom = "uxion"
        inflationRateChange = "0.13"
        inflationMax = "0.20"
        inflationMin = "0.07"
        goalBonded = "0.67"
        blocksPerYear = 6311520L
    }

    println("1. Constructed Params:")
    println("   mintDenom: ${params.mintDenom}")
    println("   inflationRateChange: ${params.inflationRateChange} (${params.inflationRateChange.toDouble() * 100}%)")

    val blocksPerDay = params.blocksPerYear / 365.0
    val secondsPerBlock = (365 * 24 * 3600) / params.blocksPerYear.toDouble()
    println("\n   Calculated:")
    println("     Blocks per day: ${blocksPerDay.toInt()}")
    println("     Seconds per block: ${secondsPerBlock.format(2)}")

    val encoded = params.toByteArray()
    val decoded = Mint.Params.parseFrom(encoded)
    println("\n2. Encoded/Decoded:")
    println("   Encoded size: ${encoded.size} bytes")
    println("   Decoded mintDenom: ${decoded.mintDenom}")
}

// =============================================================================
// Minter Type Helper
// =============================================================================

fun minterExamples() {
    println("\n=== Minter Type Examples ===\n")

    val minter = minter {
        inflation = "0.13"
        annualProvisions = "1000000000000"
    }

    println("1. Constructed Minter:")
    println("   inflation: ${minter.inflation} (${minter.inflation.toDouble() * 100}% annual)")
    println("   annualProvisions: ${minter.annualProvisions}")

    val annualProvisions = minter.annualProvisions.toDouble()
    val dailyProvisions = annualProvisions / 365
    println("\n   Calculated:")
    println("     Daily provisions: ${dailyProvisions.toInt().toString().reversed().chunked(3).joinToString(",").reversed()} uxion")
    println("     Hourly provisions: ${(dailyProvisions / 24).toInt().toString().reversed().chunked(3).joinToString(",").reversed()} uxion")
}

// =============================================================================
// Run All Examples
// =============================================================================

fun main() {
    println("╔════════════════════════════════════════════════════════════╗")
    println("║  xion.mint.v1 Transaction Messages — Protobuf Examples     ║")
    println("╚════════════════════════════════════════════════════════════╝\n")

    msgUpdateParamsExamples()
    paramsExamples()
    minterExamples()

    println("\n═══════════════════════════════════════════════════════════════")
    println("Type URL Reference:")
    println("  MsgUpdateParams:         /xion.mint.v1.MsgUpdateParams")
    println("  MsgUpdateParamsResponse: /xion.mint.v1.MsgUpdateParamsResponse")
    println("═══════════════════════════════════════════════════════════════")
}

// Helper extension for formatting
fun Double.format(decimals: Int): String = "%.${decimals}f".format(this)
