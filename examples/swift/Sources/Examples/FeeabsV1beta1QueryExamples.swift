/**
 * xion.feeabs.v1beta1 Query Messages — SwiftProtobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Fee Abstraction Module (xion.feeabs.v1beta1).
 *
 * Queries covered:
 * - QueryOsmosisArithmeticTwap: Get TWAP for IBC denom
 * - QueryFeeabsModuleBalances: Get module account balances
 * - QueryHostChainConfig: Get host chain config for IBC denom
 * - QueryAllHostChainConfig: List all host chain configs
 */

import Foundation
import SwiftProtobuf

enum FeeabsV1beta1QueryExamples {
    
    // MARK: - Run All Examples
    
    static func runAll() {
        print("=== xion.feeabs.v1beta1 Query Messages ===\n")
        
        queryOsmosisArithmeticTwapExamples()
        queryFeeabsModuleBalancesExamples()
        queryHostChainConfigExamples()
        queryAllHostChainConfigExamples()
        
        printTypeURLReference()
    }
    
    // MARK: - QueryOsmosisArithmeticTwap
    // Get TWAP for IBC denom.
    // Type URL: /xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest
    
    static func queryOsmosisArithmeticTwapExamples() {
        print("--- QueryOsmosisArithmeticTwap Examples ---\n")
        
        var request = Xion_Feeabs_V1beta1_QueryOsmosisArithmeticTwapRequest()
        request.ibcDenom = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
        
        print("1. Constructed QueryOsmosisArithmeticTwapRequest:")
        print("   ibcDenom: \(String(request.ibcDenom.prefix(30)))...")
        print("   typeURL: \(Xion_Feeabs_V1beta1_QueryOsmosisArithmeticTwapRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        var response = Xion_Feeabs_V1beta1_QueryOsmosisArithmeticTwapResponse()
        response.arithmeticTwap = "1.234567890"
        
        print("3. Constructed Response:")
        print("   arithmeticTwap: \(response.arithmeticTwap)")
        
        print()
    }
    
    // MARK: - QueryFeeabsModuleBalances
    // Get module account balances.
    // Type URL: /xion.feeabs.v1beta1.QueryFeeabsModuleBalancesRequest
    
    static func queryFeeabsModuleBalancesExamples() {
        print("--- QueryFeeabsModuleBalances Examples ---\n")
        
        let request = Xion_Feeabs_V1beta1_QueryFeeabsModuleBalancesRequest()
        
        print("1. Constructed QueryFeeabsModuleBalancesRequest:")
        print("   (no parameters)")
        print("   typeURL: \(Xion_Feeabs_V1beta1_QueryFeeabsModuleBalancesRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        var response = Xion_Feeabs_V1beta1_QueryFeeabsModuleBalancesResponse()
        response.balances = [
            makeCoin(denom: "uxion", amount: "1000000000"),
            makeCoin(denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2", amount: "500000000"),
        ]
        response.address = "xion1feeabsmoduleaccount..."
        
        print("3. Constructed Response:")
        print("   address: \(response.address)")
        print("   balances:")
        for balance in response.balances {
            print("     - \(balance.amount) \(String(balance.denom.prefix(20)))...")
        }
        
        print()
    }
    
    // MARK: - QueryHostChainConfig
    // Get host chain config for IBC denom.
    // Type URL: /xion.feeabs.v1beta1.QueryHostChainConfigRequest
    
    static func queryHostChainConfigExamples() {
        print("--- QueryHostChainConfig Examples ---\n")
        
        var request = Xion_Feeabs_V1beta1_QueryHostChainConfigRequest()
        request.ibcDenom = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
        
        print("1. Constructed QueryHostChainConfigRequest:")
        print("   ibcDenom: \(String(request.ibcDenom.prefix(30)))...")
        print("   typeURL: \(Xion_Feeabs_V1beta1_QueryHostChainConfigRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        var config = Xion_Feeabs_V1beta1_HostChainFeeAbsConfig()
        config.ibcDenom = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
        config.osmosisPoolTokenDenomIn = "uosmo"
        config.poolID = 1
        config.status = .updated
        
        var response = Xion_Feeabs_V1beta1_QueryHostChainConfigResponse()
        response.hostChainConfig = config
        
        print("3. Constructed Response:")
        print("   poolID: \(response.hostChainConfig.poolID)")
        print("   osmosisPoolTokenDenomIn: \(response.hostChainConfig.osmosisPoolTokenDenomIn)")
        print("   status: \(response.hostChainConfig.status)")
        
        print()
    }
    
    // MARK: - QueryAllHostChainConfig
    // List all host chain configs.
    // Type URL: /xion.feeabs.v1beta1.QueryAllHostChainConfigRequest
    
    static func queryAllHostChainConfigExamples() {
        print("--- QueryAllHostChainConfig Examples ---\n")
        
        let request = Xion_Feeabs_V1beta1_QueryAllHostChainConfigRequest()
        
        print("1. Constructed QueryAllHostChainConfigRequest:")
        print("   (no parameters)")
        print("   typeURL: \(Xion_Feeabs_V1beta1_QueryAllHostChainConfigRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        var config1 = Xion_Feeabs_V1beta1_HostChainFeeAbsConfig()
        config1.ibcDenom = "ibc/ATOM..."
        config1.poolID = 1
        config1.status = .updated
        
        var config2 = Xion_Feeabs_V1beta1_HostChainFeeAbsConfig()
        config2.ibcDenom = "ibc/OSMO..."
        config2.poolID = 2
        config2.status = .updated
        
        var response = Xion_Feeabs_V1beta1_QueryAllHostChainConfigResponse()
        response.allHostChainConfig = [config1, config2]
        
        print("3. Constructed Response:")
        print("   configs: \(response.allHostChainConfig.count)")
        for config in response.allHostChainConfig {
            print("     - poolID: \(config.poolID), denom: \(config.ibcDenom)")
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
    
    // MARK: - Type URL Reference
    
    static func printTypeURLReference() {
        print("═══════════════════════════════════════════════════════════════")
        print("Type URL Reference (xion.feeabs.v1beta1 Queries):")
        print("  QueryOsmosisArithmeticTwapRequest:  /\(Xion_Feeabs_V1beta1_QueryOsmosisArithmeticTwapRequest.protoMessageName)")
        print("  QueryFeeabsModuleBalancesRequest:   /\(Xion_Feeabs_V1beta1_QueryFeeabsModuleBalancesRequest.protoMessageName)")
        print("  QueryHostChainConfigRequest:        /\(Xion_Feeabs_V1beta1_QueryHostChainConfigRequest.protoMessageName)")
        print("  QueryAllHostChainConfigRequest:     /\(Xion_Feeabs_V1beta1_QueryAllHostChainConfigRequest.protoMessageName)")
        print("═══════════════════════════════════════════════════════════════\n")
    }
}

