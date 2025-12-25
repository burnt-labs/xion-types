/**
 * xion.feeabs.v1beta1 Transaction Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * transaction messages from the Fee Abstraction Module (xion.feeabs.v1beta1).
 *
 * Messages covered:
 * - MsgFundFeeAbsModuleAccount: Fund the fee abstraction module
 * - MsgSendQueryIbcDenomTWAP: Query TWAP price from Osmosis
 * - MsgSwapCrossChain: Execute cross-chain swap for fee payment
 * - MsgUpdateParams: Update module parameters (governance)
 * - MsgAddHostZone: Add new host chain configuration (governance)
 * - MsgUpdateHostZone: Update host chain configuration (governance)
 * - MsgRemoveHostZone: Remove host chain configuration (governance)
 */

package examples.kotlin

import xion.feeabs.v1beta1.Tx
import xion.feeabs.v1beta1.msgFundFeeAbsModuleAccount
import xion.feeabs.v1beta1.msgSendQueryIbcDenomTWAP
import xion.feeabs.v1beta1.msgSwapCrossChain
import xion.feeabs.v1beta1.msgUpdateParams
import xion.feeabs.v1beta1.msgAddHostZone
import xion.feeabs.v1beta1.msgUpdateHostZone
import xion.feeabs.v1beta1.msgRemoveHostZone
import xion.feeabs.v1beta1.ProposalKt
import cosmos.base.v1beta1.coin

// =============================================================================
// MsgFundFeeAbsModuleAccount
// =============================================================================
// Fund the fee abstraction module account with tokens.
// Type URL: /xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount
// Signer: sender

fun msgFundFeeAbsModuleAccountExamples() {
    println("=== MsgFundFeeAbsModuleAccount Examples ===\n")

    val msg = msgFundFeeAbsModuleAccount {
        sender = "xion1sender..."
        amount += coin {
            denom = "uxion"
            amount = "1000000000" // 1000 XION
        }
    }

    println("1. Constructed MsgFundFeeAbsModuleAccount:")
    println("   sender: ${msg.sender}")
    println("   amount: ${msg.amountList.size} coin(s)")
    msg.amountList.forEach { c ->
        println("     - ${c.amount} ${c.denom}")
    }
    println("   typeUrl: /xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount")

    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")
}

// =============================================================================
// MsgSendQueryIbcDenomTWAP
// =============================================================================
// Send a TWAP (Time-Weighted Average Price) query to Osmosis.
// Type URL: /xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP
// Signer: sender

fun msgSendQueryIbcDenomTWAPExamples() {
    println("\n=== MsgSendQueryIbcDenomTWAP Examples ===\n")

    val msg = msgSendQueryIbcDenomTWAP {
        sender = "xion1sender..."
    }

    println("1. Constructed MsgSendQueryIbcDenomTWAP:")
    println("   sender: ${msg.sender}")
    println("   typeUrl: /xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP")

    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")
}

// =============================================================================
// MsgSwapCrossChain
// =============================================================================
// Execute a cross-chain swap via Osmosis.
// Type URL: /xion.feeabs.v1beta1.MsgSwapCrossChain
// Signer: sender

fun msgSwapCrossChainExamples() {
    println("\n=== MsgSwapCrossChain Examples ===\n")

    val msg = msgSwapCrossChain {
        sender = "xion1sender..."
        ibcDenom = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2" // ATOM
    }

    println("1. Constructed MsgSwapCrossChain:")
    println("   sender: ${msg.sender}")
    println("   ibcDenom: ${msg.ibcDenom}")
    println("   typeUrl: /xion.feeabs.v1beta1.MsgSwapCrossChain")

    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")
}

// =============================================================================
// MsgUpdateParams
// =============================================================================
// Update the fee abstraction module parameters (governance).
// Type URL: /xion.feeabs.v1beta1.MsgUpdateParams
// Signer: authority (governance)

fun msgUpdateParamsExamples() {
    println("\n=== MsgUpdateParams Examples ===\n")

    val msg = msgUpdateParams {
        authority = "xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe"
        params = xion.feeabs.v1beta1.ParamsOuterClass.Params.newBuilder()
            .setNativeIbcedInOsmosis("ibc/XION_ON_OSMOSIS_HASH")
            .setOsmosisQueryTwapPath("/osmosis.twap.v1beta1.Query/ArithmeticTwap")
            .setChainName("xion")
            .setIbcTransferChannel("channel-0")
            .setIbcQueryIcqChannel("channel-1")
            .setOsmosisCrosschainSwapAddress("osmo1crosschainswap...")
            .build()
    }

    println("1. Constructed MsgUpdateParams:")
    println("   authority: ${msg.authority}")
    println("   params.chainName: ${msg.params.chainName}")
    println("   params.ibcTransferChannel: ${msg.params.ibcTransferChannel}")
    println("   typeUrl: /xion.feeabs.v1beta1.MsgUpdateParams")

    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")
}

// =============================================================================
// MsgAddHostZone
// =============================================================================
// Add a new host chain configuration (governance).
// Type URL: /xion.feeabs.v1beta1.MsgAddHostZone
// Signer: authority (governance)

fun msgAddHostZoneExamples() {
    println("\n=== MsgAddHostZone Examples ===\n")

    val msg = msgAddHostZone {
        authority = "xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe"
        hostChainConfig = ProposalKt.HostChainFeeAbsConfig.newBuilder()
            .setIbcDenom("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2")
            .setOsmosisPoolTokenDenomIn("uatom")
            .setPoolId(1L)
            .setStatus(ProposalKt.HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UPDATED)
            .build()
    }

    println("1. Constructed MsgAddHostZone:")
    println("   authority: ${msg.authority}")
    println("   hostChainConfig.ibcDenom: ${msg.hostChainConfig.ibcDenom.take(40)}...")
    println("   hostChainConfig.poolId: ${msg.hostChainConfig.poolId}")
    println("   typeUrl: /xion.feeabs.v1beta1.MsgAddHostZone")

    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")
}

// =============================================================================
// MsgUpdateHostZone
// =============================================================================
// Update an existing host chain configuration (governance).
// Type URL: /xion.feeabs.v1beta1.MsgUpdateHostZone
// Signer: authority (governance)

fun msgUpdateHostZoneExamples() {
    println("\n=== MsgUpdateHostZone Examples ===\n")

    val msg = msgUpdateHostZone {
        authority = "xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe"
        hostChainConfig = ProposalKt.HostChainFeeAbsConfig.newBuilder()
            .setIbcDenom("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2")
            .setOsmosisPoolTokenDenomIn("uatom")
            .setPoolId(1135L) // Updated pool ID
            .setStatus(ProposalKt.HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UPDATED)
            .build()
    }

    println("1. Constructed MsgUpdateHostZone:")
    println("   authority: ${msg.authority}")
    println("   hostChainConfig.poolId: ${msg.hostChainConfig.poolId}")
    println("   typeUrl: /xion.feeabs.v1beta1.MsgUpdateHostZone")

    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")
}

// =============================================================================
// MsgRemoveHostZone
// =============================================================================
// Remove a host chain configuration (governance).
// Type URL: /xion.feeabs.v1beta1.MsgRemoveHostZone
// Signer: authority (governance)

fun msgRemoveHostZoneExamples() {
    println("\n=== MsgRemoveHostZone Examples ===\n")

    val msg = msgRemoveHostZone {
        authority = "xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe"
        ibcDenom = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
    }

    println("1. Constructed MsgRemoveHostZone:")
    println("   authority: ${msg.authority}")
    println("   ibcDenom: ${msg.ibcDenom.take(40)}...")
    println("   typeUrl: /xion.feeabs.v1beta1.MsgRemoveHostZone")

    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")
}

// =============================================================================
// Run All Examples
// =============================================================================

fun main() {
    println("╔════════════════════════════════════════════════════════════╗")
    println("║  xion.feeabs.v1beta1 Transaction Messages — Examples      ║")
    println("╚════════════════════════════════════════════════════════════╝\n")

    msgFundFeeAbsModuleAccountExamples()
    msgSendQueryIbcDenomTWAPExamples()
    msgSwapCrossChainExamples()
    msgUpdateParamsExamples()
    msgAddHostZoneExamples()
    msgUpdateHostZoneExamples()
    msgRemoveHostZoneExamples()

    println("\n═══════════════════════════════════════════════════════════════")
    println("Type URL Reference:")
    println("  MsgFundFeeAbsModuleAccount: /xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount")
    println("  MsgSendQueryIbcDenomTWAP:   /xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP")
    println("  MsgSwapCrossChain:          /xion.feeabs.v1beta1.MsgSwapCrossChain")
    println("  MsgUpdateParams:            /xion.feeabs.v1beta1.MsgUpdateParams")
    println("  MsgAddHostZone:             /xion.feeabs.v1beta1.MsgAddHostZone")
    println("  MsgUpdateHostZone:          /xion.feeabs.v1beta1.MsgUpdateHostZone")
    println("  MsgRemoveHostZone:          /xion.feeabs.v1beta1.MsgRemoveHostZone")
    println("═══════════════════════════════════════════════════════════════")
}
