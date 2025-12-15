/**
 * xion.feeabs.v1beta1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Fee Abstraction Module (xion.feeabs.v1beta1).
 *
 * Queries covered:
 * - QueryOsmosisArithmeticTwap: Get TWAP price for an IBC token
 * - QueryFeeabsModuleBalances: Get module account balances
 * - QueryHostChainConfig: Get configuration for a specific IBC token
 * - QueryAllHostChainConfig: List all host chain configurations
 */

package examples.kotlin

import xion.feeabs.v1beta1.QueryOuterClass
import xion.feeabs.v1beta1.queryOsmosisArithmeticTwapRequest
import xion.feeabs.v1beta1.queryFeeabsModuleBalancesRequest
import xion.feeabs.v1beta1.queryHostChainConfigRequest
import xion.feeabs.v1beta1.queryAllHostChainConfigRequest
import xion.feeabs.v1beta1.ProposalKt
import cosmos.base.v1beta1.coin

// =============================================================================
// QueryOsmosisArithmeticTwapRequest / Response
// =============================================================================
// Get the Time-Weighted Average Price (TWAP) for an IBC token.
// Endpoint: GET /fee-abstraction/feeabs/v1/osmosis-arithmetic-twap/{ibc_denom}
// Type URL: /xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest

fun queryOsmosisArithmeticTwapExamples() {
    println("=== QueryOsmosisArithmeticTwap Examples ===\n")

    val request = queryOsmosisArithmeticTwapRequest {
        ibcDenom = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2" // ATOM
    }

    println("1. Constructed QueryOsmosisArithmeticTwapRequest:")
    println("   ibcDenom: ${request.ibcDenom}")
    println("   typeUrl: /xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest")

    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryOsmosisArithmeticTwapResponse.newBuilder()
        .setArithmeticTwap("8.500000000000000000")
        .build()

    println("3. Constructed Response:")
    println("   arithmeticTwap: ${response.arithmeticTwap}")
    println("   Interpretation: 1 IBC token = ${response.arithmeticTwap.toDouble()} native tokens")
    println("   typeUrl: /xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapResponse")
}

// =============================================================================
// QueryFeeabsModuleBalancesRequest / Response
// =============================================================================
// Get the balances held by the fee abstraction module account.
// Endpoint: GET /fee-abstraction/feeabs/v1/module-balances
// Type URL: /xion.feeabs.v1beta1.QueryFeeabsModuleBalancesRequest

fun queryFeeabsModuleBalancesExamples() {
    println("\n=== QueryFeeabsModuleBalances Examples ===\n")

    val request = queryFeeabsModuleBalancesRequest {}

    println("1. Constructed QueryFeeabsModuleBalancesRequest:")
    println("   (no parameters)")
    println("   typeUrl: /xion.feeabs.v1beta1.QueryFeeabsModuleBalancesRequest")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryFeeabsModuleBalancesResponse.newBuilder()
        .addBalances(coin {
            denom = "uxion"
            amount = "1000000000000" // 1M XION
        })
        .addBalances(coin {
            denom = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
            amount = "50000000" // 50 ATOM
        })
        .setAddress("xion1feeabsmoduleaddress...")
        .build()

    println("2. Constructed Response:")
    println("   address: ${response.address}")
    println("   balances:")
    response.balancesList.forEach { c ->
        val displayAmount = if (c.denom == "uxion") {
            "${(c.amount.toLong() / 1_000_000).toString().reversed().chunked(3).joinToString(",").reversed()} XION"
        } else {
            "${c.amount} ${c.denom.take(20)}..."
        }
        println("     - $displayAmount")
    }
    println("   typeUrl: /xion.feeabs.v1beta1.QueryFeeabsModuleBalancesResponse")
}

// =============================================================================
// QueryHostChainConfigRequest / Response
// =============================================================================
// Get the configuration for a specific IBC token.
// Endpoint: GET /fee-abstraction/feeabs/v1/host-chain-config/{ibc_denom}
// Type URL: /xion.feeabs.v1beta1.QueryHostChainConfigRequest

fun queryHostChainConfigExamples() {
    println("\n=== QueryHostChainConfig Examples ===\n")

    val request = queryHostChainConfigRequest {
        ibcDenom = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
    }

    println("1. Constructed QueryHostChainConfigRequest:")
    println("   ibcDenom: ${request.ibcDenom}")
    println("   typeUrl: /xion.feeabs.v1beta1.QueryHostChainConfigRequest")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryHostChainConfigResponse.newBuilder()
        .setHostChainConfig(ProposalKt.HostChainFeeAbsConfig.newBuilder()
            .setIbcDenom("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2")
            .setOsmosisPoolTokenDenomIn("uatom")
            .setPoolId(1L)
            .setStatus(ProposalKt.HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UPDATED)
            .build())
        .build()

    println("2. Constructed Response:")
    println("   hostChainConfig.ibcDenom: ${response.hostChainConfig.ibcDenom.take(40)}...")
    println("   hostChainConfig.osmosisPoolTokenDenomIn: ${response.hostChainConfig.osmosisPoolTokenDenomIn}")
    println("   hostChainConfig.poolId: ${response.hostChainConfig.poolId}")
    println("   hostChainConfig.status: ${response.hostChainConfig.status}")
    println("   typeUrl: /xion.feeabs.v1beta1.QueryHostChainConfigResponse")
}

// =============================================================================
// QueryAllHostChainConfigRequest / Response
// =============================================================================
// Get all host chain configurations.
// Endpoint: GET /fee-abstraction/feeabs/v1/all-host-chain-config
// Type URL: /xion.feeabs.v1beta1.QueryAllHostChainConfigRequest

fun queryAllHostChainConfigExamples() {
    println("\n=== QueryAllHostChainConfig Examples ===\n")

    val request = queryAllHostChainConfigRequest {}

    println("1. Constructed QueryAllHostChainConfigRequest:")
    println("   (no parameters)")
    println("   typeUrl: /xion.feeabs.v1beta1.QueryAllHostChainConfigRequest")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryAllHostChainConfigResponse.newBuilder()
        .addAllHostChainConfig(listOf(
            ProposalKt.HostChainFeeAbsConfig.newBuilder()
                .setIbcDenom("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2")
                .setOsmosisPoolTokenDenomIn("uatom")
                .setPoolId(1L)
                .setStatus(ProposalKt.HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UPDATED)
                .build(),
            ProposalKt.HostChainFeeAbsConfig.newBuilder()
                .setIbcDenom("ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858")
                .setOsmosisPoolTokenDenomIn("uusdc")
                .setPoolId(678L)
                .setStatus(ProposalKt.HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UPDATED)
                .build()
        ))
        .build()

    println("2. Constructed Response:")
    println("   allHostChainConfig count: ${response.allHostChainConfigCount}")
    response.allHostChainConfigList.forEachIndexed { i, config ->
        println("   [$i] ibcDenom: ${config.ibcDenom.take(40)}...")
        println("       poolId: ${config.poolId}")
        println("       status: ${config.status}")
    }
    println("   typeUrl: /xion.feeabs.v1beta1.QueryAllHostChainConfigResponse")
}

// =============================================================================
// Run All Examples
// =============================================================================

fun main() {
    println("╔════════════════════════════════════════════════════════════╗")
    println("║  xion.feeabs.v1beta1 Query Messages — Protobuf Examples  ║")
    println("╚════════════════════════════════════════════════════════════╝\n")

    queryOsmosisArithmeticTwapExamples()
    queryFeeabsModuleBalancesExamples()
    queryHostChainConfigExamples()
    queryAllHostChainConfigExamples()

    println("\n═══════════════════════════════════════════════════════════════")
    println("Type URL Reference (Requests):")
    println("  QueryOsmosisArithmeticTwapRequest: /xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest")
    println("  QueryFeeabsModuleBalancesRequest:  /xion.feeabs.v1beta1.QueryFeeabsModuleBalancesRequest")
    println("  QueryHostChainConfigRequest:       /xion.feeabs.v1beta1.QueryHostChainConfigRequest")
    println("  QueryAllHostChainConfigRequest:    /xion.feeabs.v1beta1.QueryAllHostChainConfigRequest")
    println("\nREST Endpoints:")
    println("  GET /fee-abstraction/feeabs/v1/osmosis-arithmetic-twap/{ibc_denom}")
    println("  GET /fee-abstraction/feeabs/v1/module-balances")
    println("  GET /fee-abstraction/feeabs/v1/host-chain-config/{ibc_denom}")
    println("  GET /fee-abstraction/feeabs/v1/all-host-chain-config")
    println("═══════════════════════════════════════════════════════════════")
}
