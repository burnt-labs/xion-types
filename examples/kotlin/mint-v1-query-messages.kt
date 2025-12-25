/**
 * xion.mint.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Minting Module (xion.mint.v1).
 *
 * Queries covered:
 * - QueryParams: Get minting parameters (denom, inflation bounds, blocks/year)
 * - QueryInflation: Get current inflation rate
 * - QueryAnnualProvisions: Get current annual token provisions
 */

package examples.kotlin

import xion.mint.v1.QueryOuterClass
import xion.mint.v1.queryParamsRequest
import xion.mint.v1.queryInflationRequest
import xion.mint.v1.queryAnnualProvisionsRequest

// =============================================================================
// QueryParamsRequest / Response
// =============================================================================
// Get the minting module parameters.
// Endpoint: GET /xion/mint/v1/params
// Type URL: /xion.mint.v1.QueryParamsRequest

fun queryParamsExamples() {
    println("=== QueryParams Examples ===\n")

    val request = queryParamsRequest {}

    println("1. Constructed QueryParamsRequest:")
    println("   (no parameters)")
    println("   typeUrl: /xion.mint.v1.QueryParamsRequest")

    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryParamsResponse.newBuilder()
        .setParams(xion.mint.v1.Mint.Params.newBuilder()
            .setMintDenom("uxion")
            .setInflationRateChange("0.13")
            .setInflationMax("0.20")
            .setInflationMin("0.07")
            .setGoalBonded("0.67")
            .setBlocksPerYear(6311520L)
            .build())
        .build()

    println("3. Constructed Response:")
    println("   params.mintDenom: ${response.params.mintDenom}")
    println("   params.inflationRateChange: ${response.params.inflationRateChange} (${response.params.inflationRateChange.toDouble() * 100}%)")
    println("   params.inflationMax: ${response.params.inflationMax} (${response.params.inflationMax.toDouble() * 100}%)")
    println("   params.inflationMin: ${response.params.inflationMin} (${response.params.inflationMin.toDouble() * 100}%)")
    println("   params.goalBonded: ${response.params.goalBonded} (${response.params.goalBonded.toDouble() * 100}%)")
    println("   params.blocksPerYear: ${response.params.blocksPerYear}")
    println("   typeUrl: /xion.mint.v1.QueryParamsResponse")
}

// =============================================================================
// QueryInflationRequest / Response
// =============================================================================
// Get the current minting inflation rate.
// Endpoint: GET /xion/mint/v1/inflation
// Type URL: /xion.mint.v1.QueryInflationRequest

fun queryInflationExamples() {
    println("\n=== QueryInflation Examples ===\n")

    val request = queryInflationRequest {}

    println("1. Constructed QueryInflationRequest:")
    println("   (no parameters)")
    println("   typeUrl: /xion.mint.v1.QueryInflationRequest")

    // === Response ===
    println("\n--- Response ---")

    // Note: inflation is bytes (LegacyDec custom type)
    val inflationStr = "0.130000000000000000"
    val response = QueryOuterClass.QueryInflationResponse.newBuilder()
        .setInflation(com.google.protobuf.ByteString.copyFrom(inflationStr.toByteArray(Charsets.UTF_8)))
        .build()

    println("2. Constructed Response:")
    println("   inflation (raw bytes): ${response.inflation.size()} bytes")
    println("   inflation (as string): $inflationStr")
    println("   inflation (percentage): ${inflationStr.toDouble() * 100}%")
    println("   typeUrl: /xion.mint.v1.QueryInflationResponse")
}

// =============================================================================
// QueryAnnualProvisionsRequest / Response
// =============================================================================
// Get the current annual provisions (tokens to be minted this year).
// Endpoint: GET /xion/mint/v1/annual_provisions
// Type URL: /xion.mint.v1.QueryAnnualProvisionsRequest

fun queryAnnualProvisionsExamples() {
    println("\n=== QueryAnnualProvisions Examples ===\n")

    val request = queryAnnualProvisionsRequest {}

    println("1. Constructed QueryAnnualProvisionsRequest:")
    println("   (no parameters)")
    println("   typeUrl: /xion.mint.v1.QueryAnnualProvisionsRequest")

    // === Response ===
    println("\n--- Response ---")

    val annualProvisions = "1000000000000.000000000000000000"
    val response = QueryOuterClass.QueryAnnualProvisionsResponse.newBuilder()
        .setAnnualProvisions(com.google.protobuf.ByteString.copyFrom(annualProvisions.toByteArray(Charsets.UTF_8)))
        .build()

    println("2. Constructed Response:")
    println("   annualProvisions (as string): $annualProvisions")

    val provisions = annualProvisions.toDouble()
    println("   annualProvisions (uxion): ${provisions.toLong().toString().reversed().chunked(3).joinToString(",").reversed()}")
    println("   annualProvisions (XION): ${(provisions / 1_000_000).toLong().toString().reversed().chunked(3).joinToString(",").reversed()}")

    val dailyProvisions = provisions / 365
    val hourlyProvisions = dailyProvisions / 24
    val perBlockProvisions = provisions / 6311520

    println("\n   Derived values (at current rate):")
    println("     Daily provisions: ${dailyProvisions.toInt().toString().reversed().chunked(3).joinToString(",").reversed()} uxion")
    println("     Hourly provisions: ${hourlyProvisions.toInt().toString().reversed().chunked(3).joinToString(",").reversed()} uxion")
    println("     Per-block provisions: ${"%.2f".format(perBlockProvisions)} uxion")
    println("   typeUrl: /xion.mint.v1.QueryAnnualProvisionsResponse")
}

// =============================================================================
// Run All Examples
// =============================================================================

fun main() {
    println("╔════════════════════════════════════════════════════════════╗")
    println("║  xion.mint.v1 Query Messages — Protobuf Examples           ║")
    println("╚════════════════════════════════════════════════════════════╝\n")

    queryParamsExamples()
    queryInflationExamples()
    queryAnnualProvisionsExamples()

    println("\n═══════════════════════════════════════════════════════════════")
    println("Type URL Reference (Requests):")
    println("  QueryParamsRequest:           /xion.mint.v1.QueryParamsRequest")
    println("  QueryInflationRequest:        /xion.mint.v1.QueryInflationRequest")
    println("  QueryAnnualProvisionsRequest: /xion.mint.v1.QueryAnnualProvisionsRequest")
    println("\nREST Endpoints:")
    println("  GET /xion/mint/v1/params")
    println("  GET /xion/mint/v1/inflation")
    println("  GET /xion/mint/v1/annual_provisions")
    println("═══════════════════════════════════════════════════════════════")
}
