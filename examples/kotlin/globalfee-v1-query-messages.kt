/**
 * xion.globalfee.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Global Fee Module (xion.globalfee.v1).
 *
 * Queries covered:
 * - QueryParams: Get global fee parameters (minimum gas prices, bypass rules)
 *
 * The Global Fee module sets chain-wide minimum gas prices and defines
 * which message types can bypass fee requirements.
 *
 * Note: This module has no transaction messages. Parameters are updated
 * via governance proposals using the standard cosmos-sdk gov module.
 */

package examples.kotlin

import xion.globalfee.v1.QueryOuterClass
import xion.globalfee.v1.queryParamsRequest
import xion.globalfee.v1.GenesisKt
import cosmos.base.v1beta1.coin

// =============================================================================
// QueryParamsRequest / Response
// =============================================================================
// Get the global fee module parameters.
// Endpoint: GET /xion/globalfee/v1/params
// Type URL: /xion.globalfee.v1.QueryParamsRequest

fun queryParamsExamples() {
    println("=== QueryParams Examples ===\n")

    val request = queryParamsRequest {}

    println("1. Constructed QueryParamsRequest:")
    println("   (no parameters)")
    println("   typeUrl: /xion.globalfee.v1.QueryParamsRequest")

    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryParamsResponse.newBuilder()
        .setParams(GenesisKt.Params.newBuilder()
            .addMinimumGasPrices(coin {
                denom = "uxion"
                amount = "0.001" // 0.001 uxion per gas
            })
            .addBypassMinFeeMsgTypes("/ibc.core.client.v1.MsgUpdateClient")
            .addBypassMinFeeMsgTypes("/ibc.core.channel.v1.MsgRecvPacket")
            .addBypassMinFeeMsgTypes("/ibc.core.channel.v1.MsgAcknowledgement")
            .addBypassMinFeeMsgTypes("/ibc.core.channel.v1.MsgTimeout")
            .addBypassMinFeeMsgTypes("/ibc.core.channel.v1.MsgTimeoutOnClose")
            .setMaxTotalBypassMinFeeMsgGasUsage(1000000L)
            .build())
        .build()

    println("3. Constructed Response:")
    println("   params.minimumGasPrices:")
    response.params.minimumGasPricesList.forEach { c ->
        println("     - ${c.amount} ${c.denom} per gas")
    }
    println("\n   params.bypassMinFeeMsgTypes:")
    response.params.bypassMinFeeMsgTypesList.forEach { msgType ->
        println("     - $msgType")
    }
    println("\n   params.maxTotalBypassMinFeeMsgGasUsage: ${response.params.maxTotalBypassMinFeeMsgGasUsage}")
    println("   typeUrl: /xion.globalfee.v1.QueryParamsResponse")

    val encodedResponse = response.toByteArray()
    val decodedResponse = QueryOuterClass.QueryParamsResponse.parseFrom(encodedResponse)
    println("\n4. Decoded minimumGasPrices count: ${decodedResponse.params.minimumGasPricesCount}")
    println("   Decoded bypassMinFeeMsgTypes count: ${decodedResponse.params.bypassMinFeeMsgTypesCount}")
}

// =============================================================================
// Params Type Helper
// =============================================================================

fun paramsExamples() {
    println("\n=== Params Type Examples ===\n")

    val params = GenesisKt.Params.newBuilder()
        .addMinimumGasPrices(coin {
            denom = "uxion"
            amount = "0.001"
        })
        .addMinimumGasPrices(coin {
            denom = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
            amount = "0.0001" // ATOM
        })
        .addBypassMinFeeMsgTypes("/ibc.core.client.v1.MsgUpdateClient")
        .addBypassMinFeeMsgTypes("/ibc.core.channel.v1.MsgRecvPacket")
        .setMaxTotalBypassMinFeeMsgGasUsage(1000000L)
        .build()

    println("1. Constructed Params:")
    println("   minimumGasPrices:")
    params.minimumGasPricesList.forEach { c ->
        println("     - ${c.amount} ${c.denom.take(30)}${if (c.denom.length > 30) "..." else ""}")
    }
    println("\n   bypassMinFeeMsgTypes: ${params.bypassMinFeeMsgTypesCount} types")
    println("   maxTotalBypassMinFeeMsgGasUsage: ${params.maxTotalBypassMinFeeMsgGasUsage}")

    val encoded = params.toByteArray()
    val decoded = GenesisKt.Params.parseFrom(encoded)
    println("\n2. Encoded/Decoded:")
    println("   Encoded size: ${encoded.size} bytes")
    println("   Decoded minimumGasPrices count: ${decoded.minimumGasPricesCount}")
}

// =============================================================================
// Understanding Global Fees
// =============================================================================

fun globalFeeExplanation() {
    println("\n=== Understanding Global Fees ===\n")

    println("The Global Fee module enforces chain-wide minimum gas prices.\n")

    println("Key Concepts:\n")

    println("1. minimum_gas_prices:")
    println("   - Sets minimum price per unit of gas")
    println("   - Multiple denoms = user can pay in ANY of them")
    println("   - Example: 0.001 uxion means 1M gas costs at least 1000 uxion\n")

    println("2. bypass_min_fee_msg_types:")
    println("   - Messages that can skip minimum fee requirement")
    println("   - Typically IBC relay messages (to not block relayers)")
    println("   - TX must ONLY contain bypass messages to qualify\n")

    println("3. max_total_bypass_min_fee_msg_gas_usage:")
    println("   - Maximum gas for a \"bypass\" transaction")
    println("   - Prevents abuse of fee bypass\n")

    println("Fee Calculation Example:")
    println("  Gas limit: 200,000")
    println("  Min gas price: 0.001 uxion")
    println("  Minimum fee: 200,000 × 0.001 = 200 uxion\n")

    println("Common Bypass Message Types:")
    listOf(
        "/ibc.core.client.v1.MsgUpdateClient",
        "/ibc.core.channel.v1.MsgRecvPacket",
        "/ibc.core.channel.v1.MsgAcknowledgement",
        "/ibc.core.channel.v1.MsgTimeout",
        "/ibc.core.channel.v1.MsgTimeoutOnClose"
    ).forEach { println("  - $it") }
}

// =============================================================================
// Run All Examples
// =============================================================================

fun main() {
    println("╔════════════════════════════════════════════════════════════╗")
    println("║  xion.globalfee.v1 Query Messages — Protobuf Examples      ║")
    println("╚════════════════════════════════════════════════════════════╝\n")

    queryParamsExamples()
    paramsExamples()
    globalFeeExplanation()

    println("\n═══════════════════════════════════════════════════════════════")
    println("Type URL Reference:")
    println("  QueryParamsRequest:  /xion.globalfee.v1.QueryParamsRequest")
    println("  QueryParamsResponse: /xion.globalfee.v1.QueryParamsResponse")
    println("\nREST Endpoint:")
    println("  GET /xion/globalfee/v1/params")
    println("\nNote: This module has no transaction messages.")
    println("Parameters are updated via governance proposals.")
    println("═══════════════════════════════════════════════════════════════")
}
