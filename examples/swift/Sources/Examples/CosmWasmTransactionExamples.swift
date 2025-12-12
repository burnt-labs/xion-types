/**
 * cosmwasm.wasm.v1 Transaction Messages — SwiftProtobuf Examples
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
 *
 * Common use cases:
 * - Executing CW20 token transfers
 * - Interacting with NFT contracts (CW721)
 * - Calling custom contract methods
 */

import Foundation
import SwiftProtobuf

enum CosmWasmTransactionExamples {
    
    // MARK: - Run All Examples
    
    static func runAll() {
        print("=== cosmwasm.wasm.v1 Transaction Messages ===\n")
        
        msgExecuteContractExamples()
        msgInstantiateContractExamples()
        msgMigrateContractExamples()
        msgAdminExamples()
        contractMsgHelpers()
        
        printTypeURLReference()
    }
    
    // MARK: - MsgExecuteContract
    // Execute a method on a deployed smart contract.
    // Type URL: /cosmwasm.wasm.v1.MsgExecuteContract
    // Signer: sender
    
    static func msgExecuteContractExamples() {
        print("--- MsgExecuteContract Examples ---\n")
        
        // ---------------------------------------------------------------------------
        // Example 1: Basic contract execution (no funds attached)
        // ---------------------------------------------------------------------------
        
        let basicExecuteMsg: [String: Any] = ["increment": [:]]
        
        var basicMsg = Cosmwasm_Wasm_V1_MsgExecuteContract()
        basicMsg.sender = "xion1sender..."
        basicMsg.contract = "xion1contractaddress..."
        basicMsg.msg = jsonToData(basicExecuteMsg)
        basicMsg.funds = []
        
        print("1. Basic MsgExecuteContract (no funds):")
        print("   sender: \(basicMsg.sender)")
        print("   contract: \(basicMsg.contract)")
        print("   msg: \(dataToJsonString(basicMsg.msg))")
        print("   funds: \(basicMsg.funds)")
        print("   typeURL: \(Cosmwasm_Wasm_V1_MsgExecuteContract.protoMessageName)")
        
        // ---------------------------------------------------------------------------
        // Example 2: CW20 Token Transfer
        // ---------------------------------------------------------------------------
        
        let cw20TransferMsg: [String: Any] = [
            "transfer": [
                "recipient": "xion1recipient...",
                "amount": "1000000"
            ]
        ]
        
        var cw20Transfer = Cosmwasm_Wasm_V1_MsgExecuteContract()
        cw20Transfer.sender = "xion1sender..."
        cw20Transfer.contract = "xion1cw20tokencontract..."
        cw20Transfer.msg = jsonToData(cw20TransferMsg)
        cw20Transfer.funds = []
        
        print("\n2. CW20 Token Transfer:")
        print("   contract: \(cw20Transfer.contract)")
        print("   msg: \(dataToJsonString(cw20Transfer.msg))")
        
        // ---------------------------------------------------------------------------
        // Example 3: Contract execution WITH attached funds
        // ---------------------------------------------------------------------------
        
        let buyNftMsg: [String: Any] = [
            "buy_nft": ["token_id": "42"]
        ]
        
        var msgWithFunds = Cosmwasm_Wasm_V1_MsgExecuteContract()
        msgWithFunds.sender = "xion1buyer..."
        msgWithFunds.contract = "xion1nftmarketplace..."
        msgWithFunds.msg = jsonToData(buyNftMsg)
        msgWithFunds.funds = [makeCoin(denom: "uxion", amount: "5000000")] // 5 XION
        
        print("\n3. Contract execution with funds:")
        print("   msg: \(dataToJsonString(msgWithFunds.msg))")
        print("   funds: \(msgWithFunds.funds.map { "\($0.amount) \($0.denom)" })")
        
        // ---------------------------------------------------------------------------
        // Example 4: CW721 NFT Transfer
        // ---------------------------------------------------------------------------
        
        let nftTransferMsg: [String: Any] = [
            "transfer_nft": [
                "recipient": "xion1recipient...",
                "token_id": "123"
            ]
        ]
        
        var nftTransfer = Cosmwasm_Wasm_V1_MsgExecuteContract()
        nftTransfer.sender = "xion1owner..."
        nftTransfer.contract = "xion1nftcontract..."
        nftTransfer.msg = jsonToData(nftTransferMsg)
        nftTransfer.funds = []
        
        print("\n4. CW721 NFT Transfer:")
        print("   msg: \(dataToJsonString(nftTransfer.msg))")
        
        // ---------------------------------------------------------------------------
        // Encoding and Decoding
        // ---------------------------------------------------------------------------
        
        print("\n--- Encoding/Decoding ---")
        
        do {
            // 5. Encode to protobuf bytes
            let encodedBytes = try basicMsg.serializedData()
            print("\n5. Encoded to protobuf bytes:")
            print("   Length: \(encodedBytes.count) bytes")
            
            // 6. Decode from protobuf bytes
            let decoded = try Cosmwasm_Wasm_V1_MsgExecuteContract(serializedData: encodedBytes)
            print("\n6. Decoded from bytes:")
            print("   sender: \(decoded.sender)")
            print("   contract: \(decoded.contract)")
            print("   msg: \(dataToJsonString(decoded.msg))")
            
            // 7. JSON encoding
            let jsonData = try basicMsg.jsonUTF8Data()
            let jsonString = String(data: jsonData, encoding: .utf8) ?? ""
            print("\n7. JSON format:")
            print("   \(jsonString.prefix(100))...")
            
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgInstantiateContract
    // Create a new contract instance from stored WASM code.
    // Type URL: /cosmwasm.wasm.v1.MsgInstantiateContract
    // Signer: sender
    
    static func msgInstantiateContractExamples() {
        print("--- MsgInstantiateContract Examples ---\n")
        
        // Instantiate message for a CW20 token
        let cw20InstantiateMsg: [String: Any] = [
            "name": "My Token",
            "symbol": "MTK",
            "decimals": 6,
            "initial_balances": [
                ["address": "xion1creator...", "amount": "1000000000000"]
            ],
            "mint": ["minter": "xion1creator..."]
        ]
        
        var msg = Cosmwasm_Wasm_V1_MsgInstantiateContract()
        msg.sender = "xion1creator..."
        msg.admin = "xion1admin..." // Optional: address that can migrate contract
        msg.codeID = 123 // Code ID from MsgStoreCode
        msg.label = "My CW20 Token" // Human-readable label
        msg.msg = jsonToData(cw20InstantiateMsg)
        msg.funds = [] // Initial funds to send to contract
        
        print("1. Constructed MsgInstantiateContract:")
        print("   sender: \(msg.sender)")
        print("   admin: \(msg.admin)")
        print("   codeID: \(msg.codeID)")
        print("   label: \(msg.label)")
        print("   msg: \(dataToJsonString(msg.msg))")
        print("   typeURL: \(Cosmwasm_Wasm_V1_MsgInstantiateContract.protoMessageName)")
        
        do {
            // 2. Encode
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
            
            // 3. Decode
            let decoded = try Cosmwasm_Wasm_V1_MsgInstantiateContract(serializedData: encodedBytes)
            print("\n3. Decoded:")
            print("   codeID: \(decoded.codeID)")
            print("   label: \(decoded.label)")
            
        } catch {
            print("Error: \(error)")
        }
        
        // Example: Instantiate with initial funds
        var msgWithFunds = Cosmwasm_Wasm_V1_MsgInstantiateContract()
        msgWithFunds.sender = "xion1creator..."
        msgWithFunds.admin = "" // Empty string = no admin (immutable)
        msgWithFunds.codeID = 456
        msgWithFunds.label = "Liquidity Pool"
        msgWithFunds.msg = jsonToData(["token_a": "xion1tokena...", "token_b": "xion1tokenb..."])
        msgWithFunds.funds = [makeCoin(denom: "uxion", amount: "10000000")] // 10 XION
        
        print("\n4. Instantiate with funds:")
        print("   admin: \(msgWithFunds.admin.isEmpty ? "(none - immutable)" : msgWithFunds.admin)")
        print("   funds: \(msgWithFunds.funds.map { "\($0.amount) \($0.denom)" })")
        
        print()
    }
    
    // MARK: - MsgMigrateContract
    // Upgrade a contract to new code (requires admin permission).
    // Type URL: /cosmwasm.wasm.v1.MsgMigrateContract
    // Signer: sender (must be contract admin)
    
    static func msgMigrateContractExamples() {
        print("--- MsgMigrateContract Examples ---\n")
        
        // Migration message (contract-specific)
        let migrateMsg: [String: Any] = [
            "new_feature_enabled": true,
            "migration_version": "2.0.0"
        ]
        
        var msg = Cosmwasm_Wasm_V1_MsgMigrateContract()
        msg.sender = "xion1admin..." // Must be the contract's admin
        msg.contract = "xion1contractaddress..."
        msg.codeID = 789 // New code ID to migrate to
        msg.msg = jsonToData(migrateMsg)
        
        print("1. Constructed MsgMigrateContract:")
        print("   sender: \(msg.sender)")
        print("   contract: \(msg.contract)")
        print("   codeID: \(msg.codeID)")
        print("   msg: \(dataToJsonString(msg.msg))")
        print("   typeURL: \(Cosmwasm_Wasm_V1_MsgMigrateContract.protoMessageName)")
        
        do {
            // 2. Encode
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
            
            // 3. Decode
            let decoded = try Cosmwasm_Wasm_V1_MsgMigrateContract(serializedData: encodedBytes)
            print("\n3. Decoded codeID: \(decoded.codeID)")
            
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgUpdateAdmin / MsgClearAdmin
    // Change or remove the contract admin.
    
    static func msgAdminExamples() {
        print("--- MsgUpdateAdmin / MsgClearAdmin Examples ---\n")
        
        // --- MsgUpdateAdmin ---
        var updateAdminMsg = Cosmwasm_Wasm_V1_MsgUpdateAdmin()
        updateAdminMsg.sender = "xion1currentadmin..."
        updateAdminMsg.newAdmin = "xion1newadmin..."
        updateAdminMsg.contract = "xion1contractaddress..."
        
        print("1. MsgUpdateAdmin:")
        print("   sender: \(updateAdminMsg.sender)")
        print("   newAdmin: \(updateAdminMsg.newAdmin)")
        print("   contract: \(updateAdminMsg.contract)")
        print("   typeURL: \(Cosmwasm_Wasm_V1_MsgUpdateAdmin.protoMessageName)")
        
        do {
            let encodedUpdate = try updateAdminMsg.serializedData()
            print("\n2. Encoded: \(encodedUpdate.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // --- MsgClearAdmin ---
        // WARNING: This makes the contract immutable - no more migrations possible
        var clearAdminMsg = Cosmwasm_Wasm_V1_MsgClearAdmin()
        clearAdminMsg.sender = "xion1currentadmin..."
        clearAdminMsg.contract = "xion1contractaddress..."
        
        print("\n3. MsgClearAdmin (WARNING: makes contract immutable):")
        print("   sender: \(clearAdminMsg.sender)")
        print("   contract: \(clearAdminMsg.contract)")
        print("   typeURL: \(Cosmwasm_Wasm_V1_MsgClearAdmin.protoMessageName)")
        
        do {
            let encodedClear = try clearAdminMsg.serializedData()
            print("\n4. Encoded: \(encodedClear.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - Contract Message Helpers
    
    static func contractMsgHelpers() {
        print("--- Contract Message Helpers ---\n")
        
        // The `msg` field is always a JSON object encoded as Data
        
        // 1. Encode JSON dictionary to Data
        let jsonMsg: [String: Any] = ["transfer": ["recipient": "xion1...", "amount": "1000"]]
        let encoded = jsonToData(jsonMsg)
        print("1. JSON to Data: \(encoded.count) bytes")
        
        // 2. Decode Data back to JSON
        let decoded = dataToJsonString(encoded)
        print("2. Data to JSON: \(decoded)")
        
        // 3. Common CW20 messages
        print("\n3. Common CW20 message types:")
        print("   - transfer: { recipient, amount }")
        print("   - send: { contract, amount, msg }")
        print("   - increase_allowance: { spender, amount }")
        print("   - transfer_from: { owner, recipient, amount }")
        print("   - burn: { amount }")
        print("   - mint: { recipient, amount }")
        
        // 4. Common CW721 messages
        print("\n4. Common CW721 message types:")
        print("   - transfer_nft: { recipient, token_id }")
        print("   - send_nft: { contract, token_id, msg }")
        print("   - approve: { spender, token_id }")
        print("   - revoke: { spender, token_id }")
        print("   - mint: { token_id, owner, token_uri }")
        print("   - burn: { token_id }")
        
        print()
    }
    
    // MARK: - Helpers
    
    static func makeCoin(denom: String, amount: String) -> Cosmos_Base_V1beta1_Coin {
        var coin = Cosmos_Base_V1beta1_Coin()
        coin.denom = denom
        coin.amount = amount
        return coin
    }
    
    static func jsonToData(_ dict: [String: Any]) -> Data {
        do {
            return try JSONSerialization.data(withJSONObject: dict, options: [.sortedKeys])
        } catch {
            return Data()
        }
    }
    
    static func dataToJsonString(_ data: Data) -> String {
        return String(data: data, encoding: .utf8) ?? "{}"
    }
    
    static func printTypeURLReference() {
        print("═══════════════════════════════════════════════════════════════")
        print("Type URL Reference (cosmwasm.wasm.v1):")
        print("  MsgExecuteContract:     /\(Cosmwasm_Wasm_V1_MsgExecuteContract.protoMessageName)")
        print("  MsgInstantiateContract: /\(Cosmwasm_Wasm_V1_MsgInstantiateContract.protoMessageName)")
        print("  MsgMigrateContract:     /\(Cosmwasm_Wasm_V1_MsgMigrateContract.protoMessageName)")
        print("  MsgUpdateAdmin:         /\(Cosmwasm_Wasm_V1_MsgUpdateAdmin.protoMessageName)")
        print("  MsgClearAdmin:          /\(Cosmwasm_Wasm_V1_MsgClearAdmin.protoMessageName)")
        print("═══════════════════════════════════════════════════════════════\n")
    }
}

