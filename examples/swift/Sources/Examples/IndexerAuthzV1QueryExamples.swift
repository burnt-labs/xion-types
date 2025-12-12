/**
 * xion.indexer.authz.v1 Query Messages — SwiftProtobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Authz Indexer Module (xion.indexer.authz.v1).
 *
 * Queries covered:
 * - QueryGrants: Get grants between specific granter and grantee
 * - QueryGranterGrants: Get all grants issued by a granter
 * - QueryGranteeGrants: Get all grants received by a grantee
 *
 * Note: This is an indexer module - it provides efficient queries for
 * authorization grants that would otherwise require scanning the entire state.
 */

import Foundation
import SwiftProtobuf

enum IndexerAuthzV1QueryExamples {
    
    // MARK: - Run All Examples
    
    static func runAll() {
        print("=== xion.indexer.authz.v1 Query Messages ===\n")
        
        queryGrantsExamples()
        queryGranterGrantsExamples()
        queryGranteeGrantsExamples()
        
        printTypeURLReference()
    }
    
    // MARK: - QueryGrants
    // Get grants between specific granter and grantee.
    // Type URL: /xion.indexer.authz.v1.QueryGrantsRequest
    
    static func queryGrantsExamples() {
        print("--- QueryGrants Examples ---\n")
        
        var request = Xion_Indexer_Authz_V1_QueryGrantsRequest()
        request.granter = "xion1granter..."
        request.grantee = "xion1grantee..."
        request.msgTypeURL = "/cosmos.bank.v1beta1.MsgSend" // Optional: filter by msg type
        
        var pagination = Cosmos_Base_Query_V1beta1_PageRequest()
        pagination.limit = 10
        request.pagination = pagination
        
        print("1. Constructed QueryGrantsRequest:")
        print("   granter: \(request.granter)")
        print("   grantee: \(request.grantee)")
        print("   msgTypeURL: \(request.msgTypeURL)")
        print("   pagination.limit: \(request.pagination.limit)")
        print("   typeURL: \(Xion_Indexer_Authz_V1_QueryGrantsRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
            
            let decoded = try Xion_Indexer_Authz_V1_QueryGrantsRequest(serializedData: encodedRequest)
            print("\n3. Decoded:")
            print("   granter: \(decoded.granter)")
            print("   grantee: \(decoded.grantee)")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        var response = Xion_Indexer_Authz_V1_QueryGrantsResponse()
        // Response contains grants: [Cosmos_Authz_V1beta1_Grant]
        print("4. Response structure:")
        print("   grants: [Cosmos_Authz_V1beta1_Grant]")
        print("   pagination: Cosmos_Base_Query_V1beta1_PageResponse")
        print("   typeURL: \(Xion_Indexer_Authz_V1_QueryGrantsResponse.protoMessageName)")
        
        print()
    }
    
    // MARK: - QueryGranterGrants
    // Get all grants issued by a granter.
    // Type URL: /xion.indexer.authz.v1.QueryGranterGrantsRequest
    
    static func queryGranterGrantsExamples() {
        print("--- QueryGranterGrants Examples ---\n")
        
        var request = Xion_Indexer_Authz_V1_QueryGranterGrantsRequest()
        request.granter = "xion1granter..."
        
        var pagination = Cosmos_Base_Query_V1beta1_PageRequest()
        pagination.limit = 20
        request.pagination = pagination
        
        print("1. Constructed QueryGranterGrantsRequest:")
        print("   granter: \(request.granter)")
        print("   pagination.limit: \(request.pagination.limit)")
        print("   typeURL: \(Xion_Indexer_Authz_V1_QueryGranterGrantsRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        print("3. Response structure:")
        print("   grants: [Cosmos_Authz_V1beta1_GrantAuthorization]")
        print("   pagination: Cosmos_Base_Query_V1beta1_PageResponse")
        print("   typeURL: \(Xion_Indexer_Authz_V1_QueryGranterGrantsResponse.protoMessageName)")
        
        // Use case
        print("\n--- Use Case ---")
        print("4. Find all permissions granted by an account:")
        print("   - Lists all authorizations this account has given to others")
        print("   - Useful for auditing delegated permissions")
        print("   - Returns grantee addresses and authorization details")
        
        print()
    }
    
    // MARK: - QueryGranteeGrants
    // Get all grants received by a grantee.
    // Type URL: /xion.indexer.authz.v1.QueryGranteeGrantsRequest
    
    static func queryGranteeGrantsExamples() {
        print("--- QueryGranteeGrants Examples ---\n")
        
        var request = Xion_Indexer_Authz_V1_QueryGranteeGrantsRequest()
        request.grantee = "xion1grantee..."
        
        var pagination = Cosmos_Base_Query_V1beta1_PageRequest()
        pagination.limit = 20
        request.pagination = pagination
        
        print("1. Constructed QueryGranteeGrantsRequest:")
        print("   grantee: \(request.grantee)")
        print("   pagination.limit: \(request.pagination.limit)")
        print("   typeURL: \(Xion_Indexer_Authz_V1_QueryGranteeGrantsRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        print("3. Response structure:")
        print("   grants: [Cosmos_Authz_V1beta1_GrantAuthorization]")
        print("   pagination: Cosmos_Base_Query_V1beta1_PageResponse")
        print("   typeURL: \(Xion_Indexer_Authz_V1_QueryGranteeGrantsResponse.protoMessageName)")
        
        // Use case
        print("\n--- Use Case ---")
        print("4. Find all permissions received by an account:")
        print("   - Lists all authorizations granted TO this account")
        print("   - Shows what actions this account can perform on behalf of others")
        print("   - Useful for understanding delegated capabilities")
        
        print()
    }
    
    // MARK: - Type URL Reference
    
    static func printTypeURLReference() {
        print("═══════════════════════════════════════════════════════════════")
        print("Type URL Reference (xion.indexer.authz.v1):")
        print("  QueryGrantsRequest:        /\(Xion_Indexer_Authz_V1_QueryGrantsRequest.protoMessageName)")
        print("  QueryGranterGrantsRequest: /\(Xion_Indexer_Authz_V1_QueryGranterGrantsRequest.protoMessageName)")
        print("  QueryGranteeGrantsRequest: /\(Xion_Indexer_Authz_V1_QueryGranteeGrantsRequest.protoMessageName)")
        print("═══════════════════════════════════════════════════════════════\n")
    }
}

