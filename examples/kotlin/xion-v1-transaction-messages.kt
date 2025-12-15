/**
 * xion.v1 Transaction Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * transaction messages from the Core Xion Module (xion.v1).
 *
 * Messages covered:
 * - MsgSend: Transfer coins between addresses
 * - MsgMultiSend: Multi-input, multi-output transfers
 * - MsgSetPlatformPercentage: Set platform fee percentage (governance)
 * - MsgSetPlatformMinimum: Set minimum platform fees (governance)
 */

package examples.kotlin

import xion.v1.Tx
import xion.v1.msgSend
import xion.v1.msgMultiSend
import xion.v1.msgSetPlatformPercentage
import xion.v1.msgSetPlatformMinimum
import cosmos.base.v1beta1.CoinOuterClass
import cosmos.base.v1beta1.coin
import cosmos.bank.v1beta1.Bank
import cosmos.bank.v1beta1.input
import cosmos.bank.v1beta1.output
import java.util.Base64

// Note: Import paths assume the generated Kotlin types are in the classpath
// Adjust imports based on your project structure

// =============================================================================
// MsgSend
// =============================================================================
// Transfer coins from one address to another.
// Type URL: /xion.v1.MsgSend
// Signer: from_address

fun msgSendExamples() {
    println("=== MsgSend Examples ===\n")

    // 1. Construct message using Kotlin DSL
    val msgSend = msgSend {
        fromAddress = "xion1sender..."
        toAddress = "xion1recipient..."
        amount += coin {
            denom = "uxion"
            amount = "1000000" // 1 XION = 1,000,000 uxion
        }
    }

    println("1. Constructed MsgSend:")
    println("   fromAddress: ${msgSend.fromAddress}")
    println("   toAddress: ${msgSend.toAddress}")
    println("   amount: ${msgSend.amountList[0].amount} ${msgSend.amountList[0].denom}")
    println("   typeUrl: /xion.v1.MsgSend")

    // 2. Encode to protobuf bytes
    val encodedBytes = msgSend.toByteArray()
    println("\n2. Encoded to protobuf bytes:")
    println("   Length: ${encodedBytes.size} bytes")
    println("   Hex: ${encodedBytes.joinToString("") { "%02x".format(it) }.take(60)}...")

    // 3. Alternative: Using builder directly
    val protoBytes = msgSend.toByteArray()
    println("\n3. Using toByteArray():")
    println("   Same result: ${protoBytes.contentEquals(encodedBytes)}")

    // 4. Decode from protobuf bytes
    val decoded = Tx.MsgSend.parseFrom(encodedBytes)
    println("\n4. Decoded from bytes:")
    println("   fromAddress: ${decoded.fromAddress}")
    println("   toAddress: ${decoded.toAddress}")

    // 5. Type URL for signing
    val typeUrl = "/xion.v1.MsgSend"
    println("\n5. Type URL for signing:")
    println("   typeUrl: $typeUrl")
    println("   value (bytes): ${encodedBytes.size} bytes")

    // 6. Base64 encoding (common in REST APIs)
    val base64 = Base64.getEncoder().encodeToString(encodedBytes)
    println("\n6. Base64 format:")
    println("   base64: ${base64.take(60)}...")

    // 7. Hex encoding
    val hex = encodedBytes.joinToString("") { "%02x".format(it) }
    println("\n7. Hex format:")
    println("   hex: ${hex.take(60)}...")
}

// =============================================================================
// MsgMultiSend
// =============================================================================
// Multi-input, multi-output transfer.
// Type URL: /xion.v1.MsgMultiSend
// Signer: inputs (note: only one input is allowed despite being repeated)

fun msgMultiSendExamples() {
    println("\n=== MsgMultiSend Examples ===\n")

    // 1. Construct inputs and outputs
    val input = input {
        address = "xion1sender..."
        coins += coin {
            denom = "uxion"
            amount = "3000000" // Total: 3 XION
        }
    }

    val outputs = listOf(
        output {
            address = "xion1recipient1..."
            coins += coin {
                denom = "uxion"
                amount = "1000000" // 1 XION
            }
        },
        output {
            address = "xion1recipient2..."
            coins += coin {
                denom = "uxion"
                amount = "2000000" // 2 XION
            }
        }
    )

    // 2. Construct MsgMultiSend
    val msgMultiSend = msgMultiSend {
        inputs += input // Only ONE input allowed
        outputs += outputs
    }

    println("1. Constructed MsgMultiSend:")
    println("   inputs: ${msgMultiSend.inputsList.size}")
    println("   outputs: ${msgMultiSend.outputsList.size}")
    println("   typeUrl: /xion.v1.MsgMultiSend")

    // 3. Encode to protobuf
    val encodedBytes = msgMultiSend.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")

    // 4. Decode
    val decoded = Tx.MsgMultiSend.parseFrom(encodedBytes)
    println("\n3. Decoded outputs:")
    decoded.outputsList.forEachIndexed { i, o ->
        println("   Output $i: ${o.address} -> ${o.coinsList[0].amount} ${o.coinsList[0].denom}")
    }

    // 5. Type URL
    val typeUrl = "/xion.v1.MsgMultiSend"
    println("\n4. Type URL: $typeUrl")
}

// =============================================================================
// MsgSetPlatformPercentage
// =============================================================================
// Set the platform fee percentage (governance message).
// Type URL: /xion.v1.MsgSetPlatformPercentage
// Signer: authority (governance address)
// Note: platform_percentage is multiplied by 10000 (e.g., 500 = 5%)

fun msgSetPlatformPercentageExamples() {
    println("\n=== MsgSetPlatformPercentage Examples ===\n")

    // 1. Construct message
    // platformPercentage is multiplied by 10000
    // Example: 500 = 5%, 100 = 1%, 10000 = 100%
    val msg = msgSetPlatformPercentage {
        authority = "xion1governance..." // Governance module address
        platformPercentage = 500L // 5% fee
    }

    println("1. Constructed MsgSetPlatformPercentage:")
    println("   authority: ${msg.authority}")
    println("   platformPercentage: ${msg.platformPercentage}")
    println("   Actual percentage: ${msg.platformPercentage / 100}%")
    println("   typeUrl: /xion.v1.MsgSetPlatformPercentage")

    // 2. Encode
    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")

    // 3. Decode
    val decoded = Tx.MsgSetPlatformPercentage.parseFrom(encodedBytes)
    println("\n3. Decoded platformPercentage: ${decoded.platformPercentage}")

    // 4. Type URL
    val typeUrl = "/xion.v1.MsgSetPlatformPercentage"
    println("\n4. Type URL: $typeUrl")
}

// =============================================================================
// MsgSetPlatformMinimum
// =============================================================================
// Set the minimum platform fees (governance message).
// Type URL: /xion.v1.MsgSetPlatformMinimum
// Signer: authority (governance address)

fun msgSetPlatformMinimumExamples() {
    println("\n=== MsgSetPlatformMinimum Examples ===\n")

    // 1. Construct message with multiple minimum fee denominations
    val msg = msgSetPlatformMinimum {
        authority = "xion1governance..."
        minimums += coin {
            denom = "uxion"
            amount = "1000" // Minimum 0.001 XION
        }
        minimums += coin {
            denom = "uatom"
            amount = "500" // Can set for other denoms too
        }
    }

    println("1. Constructed MsgSetPlatformMinimum:")
    println("   authority: ${msg.authority}")
    println("   minimums:")
    msg.minimumsList.forEach { m ->
        println("     - ${m.amount} ${m.denom}")
    }
    println("   typeUrl: /xion.v1.MsgSetPlatformMinimum")

    // 2. Encode
    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")

    // 3. Decode
    val decoded = Tx.MsgSetPlatformMinimum.parseFrom(encodedBytes)
    println("\n3. Decoded minimums: ${decoded.minimumsList.size} entries")

    // 4. Type URL
    val typeUrl = "/xion.v1.MsgSetPlatformMinimum"
    println("\n4. Type URL: $typeUrl")
}

// =============================================================================
// Coin Helper
// =============================================================================
// The Coin type is used by many messages

fun coinExamples() {
    println("\n=== Coin Helper Examples ===\n")

    // Construct a Coin
    val coin = coin {
        denom = "uxion"
        amount = "1000000"
    }

    println("Coin: ${coin.amount} ${coin.denom}")

    // Encode/decode
    val encoded = coin.toByteArray()
    val decoded = CoinOuterClass.Coin.parseFrom(encoded)
    println("Decoded: ${decoded.amount} ${decoded.denom}")

    // Base64
    val base64 = Base64.getEncoder().encodeToString(encoded)
    println("Base64: ${base64.take(40)}...")
}

// =============================================================================
// Run All Examples
// =============================================================================

fun main() {
    println("╔════════════════════════════════════════════════════════════╗")
    println("║  xion.v1 Transaction Messages — Protobuf Examples          ║")
    println("╚════════════════════════════════════════════════════════════╝\n")

    msgSendExamples()
    msgMultiSendExamples()
    msgSetPlatformPercentageExamples()
    msgSetPlatformMinimumExamples()
    coinExamples()

    println("\n═══════════════════════════════════════════════════════════════")
    println("Type URL Reference:")
    println("  MsgSend:                  /xion.v1.MsgSend")
    println("  MsgMultiSend:             /xion.v1.MsgMultiSend")
    println("  MsgSetPlatformPercentage: /xion.v1.MsgSetPlatformPercentage")
    println("  MsgSetPlatformMinimum:    /xion.v1.MsgSetPlatformMinimum")
    println("═══════════════════════════════════════════════════════════════")
}
