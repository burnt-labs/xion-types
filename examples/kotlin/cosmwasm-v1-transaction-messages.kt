/**
 * cosmwasm.wasm.v1 Transaction Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * transaction messages for CosmWasm smart contracts.
 *
 * Messages covered:
 * - MsgExecuteContract: Execute a method on a deployed contract
 * - MsgInstantiateContract: Deploy a new contract instance from stored code
 * - MsgMigrateContract: Upgrade a contract to new code
 * - MsgUpdateAdmin: Change contract admin
 * - MsgClearAdmin: Remove contract admin (makes contract immutable)
 */

package examples.kotlin

import cosmwasm.wasm.v1.Tx
import cosmwasm.wasm.v1.msgExecuteContract
import cosmwasm.wasm.v1.msgInstantiateContract
import cosmwasm.wasm.v1.msgMigrateContract
import cosmwasm.wasm.v1.msgUpdateAdmin
import cosmwasm.wasm.v1.msgClearAdmin
import cosmos.base.v1beta1.coin

// =============================================================================
// MsgExecuteContract
// =============================================================================
// Execute a method on a deployed smart contract.
// Type URL: /cosmwasm.wasm.v1.MsgExecuteContract
// Signer: sender

fun msgExecuteContractExamples() {
    println("=== MsgExecuteContract Examples ===\n")

    // Example 1: Basic contract execution (no funds attached)
    val basicExecuteMsg = """{"increment": {}}"""

    val basicMsg = msgExecuteContract {
        sender = "xion1sender..."
        contract = "xion1contractaddress..."
        msg = basicExecuteMsg.toByteArray(Charsets.UTF_8)
    }

    println("1. Basic MsgExecuteContract (no funds):")
    println("   sender: ${basicMsg.sender}")
    println("   contract: ${basicMsg.contract}")
    println("   msg: ${String(basicMsg.msg.toByteArray(), Charsets.UTF_8)}")
    println("   typeUrl: /cosmwasm.wasm.v1.MsgExecuteContract")

    // Example 2: CW20 Token Transfer
    val cw20TransferMsg = """
        {
            "transfer": {
                "recipient": "xion1recipient...",
                "amount": "1000000"
            }
        }
    """.trimIndent()

    val cw20Transfer = msgExecuteContract {
        sender = "xion1sender..."
        contract = "xion1cw20tokencontract..."
        msg = cw20TransferMsg.toByteArray(Charsets.UTF_8)
    }

    println("\n2. CW20 Token Transfer:")
    println("   contract: ${cw20Transfer.contract}")

    // Example 3: Contract execution WITH attached funds
    val buyNftMsg = """{"buy_nft": {"token_id": "42"}}"""

    val msgWithFunds = msgExecuteContract {
        sender = "xion1buyer..."
        contract = "xion1nftmarketplace..."
        msg = buyNftMsg.toByteArray(Charsets.UTF_8)
        funds += coin {
            denom = "uxion"
            amount = "5000000" // 5 XION
        }
    }

    println("\n3. Contract execution with funds:")
    println("   funds: ${msgWithFunds.fundsList.size} coin(s)")

    // Encoding
    val encodedBytes = basicMsg.toByteArray()
    println("\n4. Encoded: ${encodedBytes.size} bytes")

    val decoded = Tx.MsgExecuteContract.parseFrom(encodedBytes)
    println("5. Decoded sender: ${decoded.sender}")
}

// =============================================================================
// MsgInstantiateContract
// =============================================================================
// Create a new contract instance from stored WASM code.
// Type URL: /cosmwasm.wasm.v1.MsgInstantiateContract
// Signer: sender

fun msgInstantiateContractExamples() {
    println("\n=== MsgInstantiateContract Examples ===\n")

    val cw20InstantiateMsg = """
        {
            "name": "My Token",
            "symbol": "MTK",
            "decimals": 6,
            "initial_balances": [
                {
                    "address": "xion1creator...",
                    "amount": "1000000000000"
                }
            ],
            "mint": {
                "minter": "xion1creator..."
            }
        }
    """.trimIndent()

    val msg = msgInstantiateContract {
        sender = "xion1creator..."
        admin = "xion1admin..."
        codeId = 123L
        label = "My CW20 Token"
        msg = cw20InstantiateMsg.toByteArray(Charsets.UTF_8)
    }

    println("1. Constructed MsgInstantiateContract:")
    println("   sender: ${msg.sender}")
    println("   admin: ${msg.admin}")
    println("   codeId: ${msg.codeId}")
    println("   label: ${msg.label}")
    println("   typeUrl: /cosmwasm.wasm.v1.MsgInstantiateContract")

    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")
}

// =============================================================================
// MsgMigrateContract
// =============================================================================
// Upgrade a contract to new code (requires admin permission).
// Type URL: /cosmwasm.wasm.v1.MsgMigrateContract
// Signer: sender (must be contract admin)

fun msgMigrateContractExamples() {
    println("\n=== MsgMigrateContract Examples ===\n")

    val migrateMsg = """
        {
            "new_feature_enabled": true,
            "migration_version": "2.0.0"
        }
    """.trimIndent()

    val msg = msgMigrateContract {
        sender = "xion1admin..."
        contract = "xion1contractaddress..."
        codeId = 789L
        msg = migrateMsg.toByteArray(Charsets.UTF_8)
    }

    println("1. Constructed MsgMigrateContract:")
    println("   sender: ${msg.sender}")
    println("   contract: ${msg.contract}")
    println("   codeId: ${msg.codeId}")
    println("   typeUrl: /cosmwasm.wasm.v1.MsgMigrateContract")

    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")
}

// =============================================================================
// MsgUpdateAdmin / MsgClearAdmin
// =============================================================================
// Change or remove the contract admin.
// Type URL: /cosmwasm.wasm.v1.MsgUpdateAdmin
// Type URL: /cosmwasm.wasm.v1.MsgClearAdmin
// Signer: sender (must be current admin)

fun msgAdminExamples() {
    println("\n=== MsgUpdateAdmin / MsgClearAdmin Examples ===\n")

    // MsgUpdateAdmin
    val updateAdminMsg = msgUpdateAdmin {
        sender = "xion1currentadmin..."
        newAdmin = "xion1newadmin..."
        contract = "xion1contractaddress..."
    }

    println("1. MsgUpdateAdmin:")
    println("   sender: ${updateAdminMsg.sender}")
    println("   newAdmin: ${updateAdminMsg.newAdmin}")
    println("   contract: ${updateAdminMsg.contract}")
    println("   typeUrl: /cosmwasm.wasm.v1.MsgUpdateAdmin")

    val encodedUpdate = updateAdminMsg.toByteArray()
    println("\n2. Encoded: ${encodedUpdate.size} bytes")

    // MsgClearAdmin
    val clearAdminMsg = msgClearAdmin {
        sender = "xion1currentadmin..."
        contract = "xion1contractaddress..."
    }

    println("\n3. MsgClearAdmin (WARNING: makes contract immutable):")
    println("   sender: ${clearAdminMsg.sender}")
    println("   contract: ${clearAdminMsg.contract}")
    println("   typeUrl: /cosmwasm.wasm.v1.MsgClearAdmin")

    val encodedClear = clearAdminMsg.toByteArray()
    println("\n4. Encoded: ${encodedClear.size} bytes")
}

// =============================================================================
// Run All Examples
// =============================================================================

fun main() {
    println("╔════════════════════════════════════════════════════════════╗")
    println("║  cosmwasm.wasm.v1 Transaction Messages — Examples          ║")
    println("╚════════════════════════════════════════════════════════════╝\n")

    msgExecuteContractExamples()
    msgInstantiateContractExamples()
    msgMigrateContractExamples()
    msgAdminExamples()

    println("\n═══════════════════════════════════════════════════════════════")
    println("Type URL Reference:")
    println("  MsgExecuteContract:     /cosmwasm.wasm.v1.MsgExecuteContract")
    println("  MsgInstantiateContract: /cosmwasm.wasm.v1.MsgInstantiateContract")
    println("  MsgMigrateContract:     /cosmwasm.wasm.v1.MsgMigrateContract")
    println("  MsgUpdateAdmin:         /cosmwasm.wasm.v1.MsgUpdateAdmin")
    println("  MsgClearAdmin:          /cosmwasm.wasm.v1.MsgClearAdmin")
    println("═══════════════════════════════════════════════════════════════")
}
