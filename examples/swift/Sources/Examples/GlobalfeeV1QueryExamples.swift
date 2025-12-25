/**
 * xion.globalfee.v1 Query Messages — SwiftProtobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Global Fee Module (xion.globalfee.v1).
 *
 * Queries covered:
 * - QueryParams: Get global fee parameters (minimum gas prices, bypass rules)
 *
 * Note: This module is query-only. Fee parameters are set via governance.
 */

import Foundation
import SwiftProtobuf

enum GlobalfeeV1QueryExamples {
    
    // MARK: - Run All Examples
    
    static func runAll() {
        print("=== xion.globalfee.v1 Query Messages ===\n")
        
        queryParamsExamples()
        
        printTypeURLReference()
    }
    
    // MARK: - QueryParams
    // Get global fee parameters.
    // Type URL: /xion.globalfee.v1.QueryParamsRequest
    
    static func queryParamsExamples() {
        print("--- QueryParams Examples ---\n")
        
        // 1. Construct request (no parameters needed)
        let request = Xion_Globalfee_V1_QueryParamsRequest()
        
        print("1. Constructed QueryParamsRequest:")
        print("   (no parameters)")
        print("   typeURL: \(Xion_Globalfee_V1_QueryParamsRequest.protoMessageName)")
        
        do {
            // 2. Encode request
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
            
            // 3. Decode request
            _ = try Xion_Globalfee_V1_QueryParamsRequest(serializedData: encodedRequest)
            print("\n3. Decoded successfully")
            
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        
        // The response contains Params with:
        // - minimumGasPrices: Minimum gas prices for all transactions
        // - bypassMinFeeMsgTypes: Message types exempt from fees
        // - maxTotalBypassMinFeeMsgGasUsage: Max gas for bypass transactions
        
        var params = Xion_Globalfee_V1_Params()
        params.minimumGasPrices = [
            makeDecCoin(denom: "uxion", amount: "0.001"),
        ]
        params.bypassMinFeeMsgTypes = [
            "/ibc.core.client.v1.MsgUpdateClient",
            "/ibc.core.channel.v1.MsgRecvPacket",
            "/ibc.core.channel.v1.MsgAcknowledgement",
        ]
        params.maxTotalBypassMinFeeMsgGasUsage = 1000000
        
        var response = Xion_Globalfee_V1_QueryParamsResponse()
        response.params = params
        
        print("4. Constructed Response:")
        print("   minimumGasPrices:")
        for coin in response.params.minimumGasPrices {
            print("     - \(coin.amount) \(coin.denom)")
        }
        print("   bypassMinFeeMsgTypes:")
        for msgType in response.params.bypassMinFeeMsgTypes {
            print("     - \(msgType)")
        }
        print("   maxTotalBypassMinFeeMsgGasUsage: \(response.params.maxTotalBypassMinFeeMsgGasUsage)")
        print("   typeURL: \(Xion_Globalfee_V1_QueryParamsResponse.protoMessageName)")
        
        do {
            // Encode/decode response
            let encodedResponse = try response.serializedData()
            let decodedResponse = try Xion_Globalfee_V1_QueryParamsResponse(serializedData: encodedResponse)
            print("\n5. Decoded:")
            print("   minimumGasPrices count: \(decodedResponse.params.minimumGasPrices.count)")
            print("   bypassMinFeeMsgTypes count: \(decodedResponse.params.bypassMinFeeMsgTypes.count)")
            
        } catch {
            print("Error: \(error)")
        }
        
        // Example: Check if a message type bypasses fees
        print("\n--- Usage Example ---")
        let msgTypeToCheck = "/ibc.core.channel.v1.MsgRecvPacket"
        let bypassesFees = response.params.bypassMinFeeMsgTypes.contains(msgTypeToCheck)
        print("6. Does '\(msgTypeToCheck)' bypass fees?")
        print("   Result: \(bypassesFees)")
        
        print()
    }
    
    // MARK: - Helpers
    
    static func makeDecCoin(denom: String, amount: String) -> Cosmos_Base_V1beta1_DecCoin {
        var coin = Cosmos_Base_V1beta1_DecCoin()
        coin.denom = denom
        coin.amount = amount
        return coin
    }
    
    // MARK: - Type URL Reference
    
    static func printTypeURLReference() {
        print("═══════════════════════════════════════════════════════════════")
        print("Type URL Reference (xion.globalfee.v1):")
        print("  QueryParamsRequest:  /\(Xion_Globalfee_V1_QueryParamsRequest.protoMessageName)")
        print("  QueryParamsResponse: /\(Xion_Globalfee_V1_QueryParamsResponse.protoMessageName)")
        print("═══════════════════════════════════════════════════════════════\n")
    }
}

