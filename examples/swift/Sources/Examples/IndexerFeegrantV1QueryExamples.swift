/**
 * xion.indexer.feegrant.v1 Query Messages — SwiftProtobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Feegrant Indexer Module (xion.indexer.feegrant.v1).
 *
 * Queries covered:
 * - QueryAllowance: Get specific fee allowance between granter and grantee
 * - QueryAllowances: Get all fee allowances received by a grantee
 * - QueryAllowancesByGranter: Get all fee allowances issued by a granter
 *
 * Note: This is an indexer module - it provides efficient queries for
 * fee allowances that would otherwise require scanning the entire state.
 */

import Foundation
import SwiftProtobuf

enum IndexerFeegrantV1QueryExamples {
    
    // MARK: - Run All Examples
    
    static func runAll() {
        print("=== xion.indexer.feegrant.v1 Query Messages ===\n")
        
        queryAllowanceExamples()
        queryAllowancesExamples()
        queryAllowancesByGranterExamples()
        
        printTypeURLReference()
    }
    
    // MARK: - QueryAllowance
    // Get specific fee allowance between granter and grantee.
    // Type URL: /xion.indexer.feegrant.v1.QueryAllowanceRequest
    
    static func queryAllowanceExamples() {
        print("--- QueryAllowance Examples ---\n")
        
        var request = Xion_Indexer_Feegrant_V1_QueryAllowanceRequest()
        request.granter = "xion1granter..."
        request.grantee = "xion1grantee..."
        
        print("1. Constructed QueryAllowanceRequest:")
        print("   granter: \(request.granter)")
        print("   grantee: \(request.grantee)")
        print("   typeURL: \(Xion_Indexer_Feegrant_V1_QueryAllowanceRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
            
            let decoded = try Xion_Indexer_Feegrant_V1_QueryAllowanceRequest(serializedData: encodedRequest)
            print("\n3. Decoded:")
            print("   granter: \(decoded.granter)")
            print("   grantee: \(decoded.grantee)")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        print("4. Response structure:")
        print("   allowance: Cosmos_Feegrant_V1beta1_Grant")
        print("     - granter: String")
        print("     - grantee: String")
        print("     - allowance: Google_Protobuf_Any (BasicAllowance or PeriodicAllowance)")
        print("   typeURL: \(Xion_Indexer_Feegrant_V1_QueryAllowanceResponse.protoMessageName)")
        
        print()
    }
    
    // MARK: - QueryAllowances
    // Get all fee allowances received by a grantee.
    // Type URL: /xion.indexer.feegrant.v1.QueryAllowancesRequest
    
    static func queryAllowancesExamples() {
        print("--- QueryAllowances Examples ---\n")
        
        var request = Xion_Indexer_Feegrant_V1_QueryAllowancesRequest()
        request.grantee = "xion1grantee..."
        
        var pagination = Cosmos_Base_Query_V1beta1_PageRequest()
        pagination.limit = 10
        request.pagination = pagination
        
        print("1. Constructed QueryAllowancesRequest:")
        print("   grantee: \(request.grantee)")
        print("   pagination.limit: \(request.pagination.limit)")
        print("   typeURL: \(Xion_Indexer_Feegrant_V1_QueryAllowancesRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        print("3. Response structure:")
        print("   allowances: [Cosmos_Feegrant_V1beta1_Grant]")
        print("   pagination: Cosmos_Base_Query_V1beta1_PageResponse")
        print("   typeURL: \(Xion_Indexer_Feegrant_V1_QueryAllowancesResponse.protoMessageName)")
        
        // Use case
        print("\n--- Use Case ---")
        print("4. Find all fee grants received by an account:")
        print("   - Check if someone is paying your transaction fees")
        print("   - List all accounts sponsoring this wallet")
        print("   - Useful for gasless/meta-transaction flows")
        
        print()
    }
    
    // MARK: - QueryAllowancesByGranter
    // Get all fee allowances issued by a granter.
    // Type URL: /xion.indexer.feegrant.v1.QueryAllowancesByGranterRequest
    
    static func queryAllowancesByGranterExamples() {
        print("--- QueryAllowancesByGranter Examples ---\n")
        
        var request = Xion_Indexer_Feegrant_V1_QueryAllowancesByGranterRequest()
        request.granter = "xion1granter..."
        
        var pagination = Cosmos_Base_Query_V1beta1_PageRequest()
        pagination.limit = 20
        request.pagination = pagination
        
        print("1. Constructed QueryAllowancesByGranterRequest:")
        print("   granter: \(request.granter)")
        print("   pagination.limit: \(request.pagination.limit)")
        print("   typeURL: \(Xion_Indexer_Feegrant_V1_QueryAllowancesByGranterRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        print("3. Response structure:")
        print("   allowances: [Cosmos_Feegrant_V1beta1_Grant]")
        print("   pagination: Cosmos_Base_Query_V1beta1_PageResponse")
        print("   typeURL: \(Xion_Indexer_Feegrant_V1_QueryAllowancesByGranterResponse.protoMessageName)")
        
        // Use case
        print("\n--- Use Case ---")
        print("4. Find all fee grants issued by an account:")
        print("   - Audit who you're sponsoring for transaction fees")
        print("   - Monitor fee grant expenditure")
        print("   - Manage gasless transaction sponsorship")
        
        print()
    }
    
    // MARK: - Type URL Reference
    
    static func printTypeURLReference() {
        print("═══════════════════════════════════════════════════════════════")
        print("Type URL Reference (xion.indexer.feegrant.v1):")
        print("  QueryAllowanceRequest:          /\(Xion_Indexer_Feegrant_V1_QueryAllowanceRequest.protoMessageName)")
        print("  QueryAllowancesRequest:         /\(Xion_Indexer_Feegrant_V1_QueryAllowancesRequest.protoMessageName)")
        print("  QueryAllowancesByGranterRequest:/\(Xion_Indexer_Feegrant_V1_QueryAllowancesByGranterRequest.protoMessageName)")
        print("═══════════════════════════════════════════════════════════════\n")
    }
}

