/**
 * xion.v1 Transaction Messages — SwiftProtobuf Examples
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

import Foundation
import SwiftProtobuf

enum XionV1TransactionExamples {
    
    // MARK: - Run All Examples
    
    static func runAll() {
        print("=== xion.v1 Transaction Messages ===\n")
        
        msgSendExamples()
        msgMultiSendExamples()
        msgSetPlatformPercentageExamples()
        msgSetPlatformMinimumExamples()
        coinExamples()
        
        printTypeURLReference()
    }
    
    // MARK: - MsgSend
    // Transfer coins from one address to another.
    // Type URL: /xion.v1.MsgSend
    // Signer: fromAddress
    
    static func msgSendExamples() {
        print("--- MsgSend Examples ---\n")
        
        // 1. Construct message
        var msgSend = Xion_V1_MsgSend()
        msgSend.fromAddress = "xion1sender..."
        msgSend.toAddress = "xion1recipient..."
        msgSend.amount = [
            makeCoin(denom: "uxion", amount: "1000000") // 1 XION = 1,000,000 uxion
        ]
        
        print("1. Constructed MsgSend:")
        print("   fromAddress: \(msgSend.fromAddress)")
        print("   toAddress: \(msgSend.toAddress)")
        print("   amount: \(msgSend.amount.map { "\($0.amount) \($0.denom)" })")
        print("   typeURL: \(Xion_V1_MsgSend.protoMessageName)")
        
        // 2. Encode to protobuf bytes
        do {
            let encodedData = try msgSend.serializedData()
            print("\n2. Encoded to protobuf bytes:")
            print("   Length: \(encodedData.count) bytes")
            print("   Hex: \(encodedData.map { String(format: "%02x", $0) }.joined())")
            
            // 3. Decode from protobuf bytes
            let decoded = try Xion_V1_MsgSend(serializedData: encodedData)
            print("\n3. Decoded from bytes:")
            print("   fromAddress: \(decoded.fromAddress)")
            print("   toAddress: \(decoded.toAddress)")
            
            // 4. JSON encoding
            let jsonData = try msgSend.jsonUTF8Data()
            let jsonString = String(data: jsonData, encoding: .utf8) ?? ""
            print("\n4. JSON format:")
            print("   \(jsonString)")
            
            // 5. Decode from JSON
            let fromJson = try Xion_V1_MsgSend(jsonUTF8Data: jsonData)
            print("\n5. Decoded from JSON:")
            print("   fromAddress: \(fromJson.fromAddress)")
            
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgMultiSend
    // Multi-input, multi-output transfer.
    // Type URL: /xion.v1.MsgMultiSend
    
    static func msgMultiSendExamples() {
        print("--- MsgMultiSend Examples ---\n")
        
        // 1. Construct inputs and outputs
        var input = Cosmos_Bank_V1beta1_Input()
        input.address = "xion1sender..."
        input.coins = [makeCoin(denom: "uxion", amount: "3000000")] // Total: 3 XION
        
        var output1 = Cosmos_Bank_V1beta1_Output()
        output1.address = "xion1recipient1..."
        output1.coins = [makeCoin(denom: "uxion", amount: "1000000")] // 1 XION
        
        var output2 = Cosmos_Bank_V1beta1_Output()
        output2.address = "xion1recipient2..."
        output2.coins = [makeCoin(denom: "uxion", amount: "2000000")] // 2 XION
        
        // 2. Construct MsgMultiSend
        var msgMultiSend = Xion_V1_MsgMultiSend()
        msgMultiSend.inputs = [input] // Only ONE input allowed
        msgMultiSend.outputs = [output1, output2]
        
        print("1. Constructed MsgMultiSend:")
        print("   inputs: \(msgMultiSend.inputs.count)")
        print("   outputs: \(msgMultiSend.outputs.count)")
        print("   typeURL: \(Xion_V1_MsgMultiSend.protoMessageName)")
        
        // 3. Encode
        do {
            let encodedData = try msgMultiSend.serializedData()
            print("\n2. Encoded: \(encodedData.count) bytes")
            
            // 4. Decode
            let decoded = try Xion_V1_MsgMultiSend(serializedData: encodedData)
            print("\n3. Decoded outputs:")
            for (i, output) in decoded.outputs.enumerated() {
                let coin = output.coins.first
                print("   Output \(i): \(output.address) -> \(coin?.amount ?? "0") \(coin?.denom ?? "")")
            }
            
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgSetPlatformPercentage
    // Set the platform fee percentage (governance message).
    // Type URL: /xion.v1.MsgSetPlatformPercentage
    // Note: platformPercentage is multiplied by 10000 (e.g., 500 = 5%)
    
    static func msgSetPlatformPercentageExamples() {
        print("--- MsgSetPlatformPercentage Examples ---\n")
        
        // 1. Construct message
        // platformPercentage is multiplied by 10000
        // Example: 500 = 5%, 100 = 1%, 10000 = 100%
        var msg = Xion_V1_MsgSetPlatformPercentage()
        msg.authority = "xion1governance..."
        msg.platformPercentage = 500 // 5% fee
        
        print("1. Constructed MsgSetPlatformPercentage:")
        print("   authority: \(msg.authority)")
        print("   platformPercentage (raw): \(msg.platformPercentage)")
        print("   platformPercentage (%): \(Double(msg.platformPercentage) / 100)%")
        print("   typeURL: \(Xion_V1_MsgSetPlatformPercentage.protoMessageName)")
        
        // 2. Encode
        do {
            let encodedData = try msg.serializedData()
            print("\n2. Encoded: \(encodedData.count) bytes")
            
            // 3. Decode
            let decoded = try Xion_V1_MsgSetPlatformPercentage(serializedData: encodedData)
            print("\n3. Decoded platformPercentage: \(decoded.platformPercentage)")
            
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgSetPlatformMinimum
    // Set the minimum platform fees (governance message).
    // Type URL: /xion.v1.MsgSetPlatformMinimum
    
    static func msgSetPlatformMinimumExamples() {
        print("--- MsgSetPlatformMinimum Examples ---\n")
        
        // 1. Construct message with multiple minimum fee denominations
        var msg = Xion_V1_MsgSetPlatformMinimum()
        msg.authority = "xion1governance..."
        msg.minimums = [
            makeCoin(denom: "uxion", amount: "1000"),  // Minimum 0.001 XION
            makeCoin(denom: "uatom", amount: "500"),   // Can set for other denoms too
        ]
        
        print("1. Constructed MsgSetPlatformMinimum:")
        print("   authority: \(msg.authority)")
        print("   minimums:")
        for m in msg.minimums {
            print("     - \(m.amount) \(m.denom)")
        }
        print("   typeURL: \(Xion_V1_MsgSetPlatformMinimum.protoMessageName)")
        
        // 2. Encode
        do {
            let encodedData = try msg.serializedData()
            print("\n2. Encoded: \(encodedData.count) bytes")
            
            // 3. Decode
            let decoded = try Xion_V1_MsgSetPlatformMinimum(serializedData: encodedData)
            print("\n3. Decoded minimums: \(decoded.minimums.count) entries")
            
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - Coin Helper
    
    static func coinExamples() {
        print("--- Coin Helper Examples ---\n")
        
        // Construct a Coin
        let coin = makeCoin(denom: "uxion", amount: "1000000")
        print("Coin: \(coin.amount) \(coin.denom)")
        
        // Encode/decode
        do {
            let encoded = try coin.serializedData()
            let decoded = try Cosmos_Base_V1beta1_Coin(serializedData: encoded)
            print("Decoded: \(decoded.amount) \(decoded.denom)")
            
            // JSON
            let jsonData = try coin.jsonUTF8Data()
            let jsonString = String(data: jsonData, encoding: .utf8) ?? ""
            print("JSON: \(jsonString)")
            
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - Helpers
    
    static func makeCoin(denom: String, amount: String) -> Cosmos_Base_V1beta1_Coin {
        var coin = Cosmos_Base_V1beta1_Coin()
        coin.denom = denom
        coin.amount = amount
        return coin
    }
    
    static func printTypeURLReference() {
        print("═══════════════════════════════════════════════════════════════")
        print("Type URL Reference (xion.v1):")
        print("  MsgSend:                  /\(Xion_V1_MsgSend.protoMessageName)")
        print("  MsgMultiSend:             /\(Xion_V1_MsgMultiSend.protoMessageName)")
        print("  MsgSetPlatformPercentage: /\(Xion_V1_MsgSetPlatformPercentage.protoMessageName)")
        print("  MsgSetPlatformMinimum:    /\(Xion_V1_MsgSetPlatformMinimum.protoMessageName)")
        print("═══════════════════════════════════════════════════════════════\n")
    }
}

