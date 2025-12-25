/**
 * xion.mint.v1 Transaction Messages — SwiftProtobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * transaction messages from the Minting Module (xion.mint.v1).
 *
 * Messages covered:
 * - MsgUpdateParams: Update minting parameters (governance only)
 */

import Foundation
import SwiftProtobuf

enum MintV1TransactionExamples {
    
    // MARK: - Run All Examples
    
    static func runAll() {
        print("=== xion.mint.v1 Transaction Messages ===\n")
        
        msgUpdateParamsExamples()
        
        printTypeURLReference()
    }
    
    // MARK: - MsgUpdateParams
    // Update minting parameters (governance message).
    // Type URL: /xion.mint.v1.MsgUpdateParams
    // Signer: authority (governance address)
    
    static func msgUpdateParamsExamples() {
        print("--- MsgUpdateParams Examples ---\n")
        
        // 1. Construct minting parameters
        var params = Xion_Mint_V1_Params()
        params.mintDenom = "uxion"
        params.inflationRateChange = "0.130000000000000000" // 13% max annual change
        params.inflationMax = "0.200000000000000000" // 20% max
        params.inflationMin = "0.070000000000000000" // 7% min
        params.goalBonded = "0.670000000000000000" // 67% target
        params.blocksPerYear = 6311520 // ~5 second blocks
        
        // 2. Construct message
        var msg = Xion_Mint_V1_MsgUpdateParams()
        msg.authority = "xion1governance..." // Governance module address
        msg.params = params
        
        print("1. Constructed MsgUpdateParams:")
        print("   authority: \(msg.authority)")
        print("   params.mintDenom: \(msg.params.mintDenom)")
        print("   params.inflationMax: \(msg.params.inflationMax) (20%)")
        print("   params.inflationMin: \(msg.params.inflationMin) (7%)")
        print("   params.goalBonded: \(msg.params.goalBonded) (67%)")
        print("   params.blocksPerYear: \(msg.params.blocksPerYear)")
        print("   typeURL: \(Xion_Mint_V1_MsgUpdateParams.protoMessageName)")
        
        do {
            // 3. Encode
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
            
            // 4. Decode
            let decoded = try Xion_Mint_V1_MsgUpdateParams(serializedData: encodedBytes)
            print("\n3. Decoded:")
            print("   authority: \(decoded.authority)")
            print("   params.mintDenom: \(decoded.params.mintDenom)")
            print("   params.blocksPerYear: \(decoded.params.blocksPerYear)")
            
            // 5. JSON encoding
            let jsonData = try msg.jsonUTF8Data()
            let jsonString = String(data: jsonData, encoding: .utf8) ?? ""
            print("\n4. JSON format:")
            print("   \(String(jsonString.prefix(100)))...")
            
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        let response = Xion_Mint_V1_MsgUpdateParamsResponse()
        print("5. Response (empty = success):")
        print("   typeURL: \(Xion_Mint_V1_MsgUpdateParamsResponse.protoMessageName)")
        
        print()
    }
    
    // MARK: - Type URL Reference
    
    static func printTypeURLReference() {
        print("═══════════════════════════════════════════════════════════════")
        print("Type URL Reference (xion.mint.v1):")
        print("  MsgUpdateParams: /\(Xion_Mint_V1_MsgUpdateParams.protoMessageName)")
        print("═══════════════════════════════════════════════════════════════\n")
    }
}

