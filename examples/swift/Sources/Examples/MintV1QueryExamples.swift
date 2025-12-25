/**
 * xion.mint.v1 Query Messages — SwiftProtobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Minting Module (xion.mint.v1).
 *
 * Queries covered:
 * - QueryParams: Get current minting parameters
 * - QueryInflation: Get current inflation rate
 * - QueryAnnualProvisions: Get current annual provisions
 */

import Foundation
import SwiftProtobuf

enum MintV1QueryExamples {
    
    // MARK: - Run All Examples
    
    static func runAll() {
        print("=== xion.mint.v1 Query Messages ===\n")
        
        queryParamsExamples()
        queryInflationExamples()
        queryAnnualProvisionsExamples()
        
        printTypeURLReference()
    }
    
    // MARK: - QueryParams
    // Get current minting parameters.
    // Type URL: /xion.mint.v1.QueryParamsRequest
    
    static func queryParamsExamples() {
        print("--- QueryParams Examples ---\n")
        
        // 1. Construct request (no parameters needed)
        let request = Xion_Mint_V1_QueryParamsRequest()
        
        print("1. Constructed QueryParamsRequest:")
        print("   (no parameters)")
        print("   typeURL: \(Xion_Mint_V1_QueryParamsRequest.protoMessageName)")
        
        do {
            // 2. Encode request
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        
        var params = Xion_Mint_V1_Params()
        params.mintDenom = "uxion"
        params.inflationRateChange = "0.130000000000000000"
        params.inflationMax = "0.200000000000000000"
        params.inflationMin = "0.070000000000000000"
        params.goalBonded = "0.670000000000000000"
        params.blocksPerYear = 6311520
        
        var response = Xion_Mint_V1_QueryParamsResponse()
        response.params = params
        
        print("3. Constructed Response:")
        print("   mintDenom: \(response.params.mintDenom)")
        print("   inflationMax: \(response.params.inflationMax)")
        print("   inflationMin: \(response.params.inflationMin)")
        print("   goalBonded: \(response.params.goalBonded)")
        print("   blocksPerYear: \(response.params.blocksPerYear)")
        print("   typeURL: \(Xion_Mint_V1_QueryParamsResponse.protoMessageName)")
        
        do {
            let encodedResponse = try response.serializedData()
            let decodedResponse = try Xion_Mint_V1_QueryParamsResponse(serializedData: encodedResponse)
            print("\n4. Decoded mintDenom: \(decodedResponse.params.mintDenom)")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - QueryInflation
    // Get current inflation rate.
    // Type URL: /xion.mint.v1.QueryInflationRequest
    
    static func queryInflationExamples() {
        print("--- QueryInflation Examples ---\n")
        
        // 1. Construct request (no parameters needed)
        let request = Xion_Mint_V1_QueryInflationRequest()
        
        print("1. Constructed QueryInflationRequest:")
        print("   (no parameters)")
        print("   typeURL: \(Xion_Mint_V1_QueryInflationRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        
        var response = Xion_Mint_V1_QueryInflationResponse()
        // Inflation is returned as bytes representing a decimal string
        response.inflation = "0.130000000000000000".data(using: .utf8)!
        
        print("3. Constructed Response:")
        let inflationString = String(data: response.inflation, encoding: .utf8) ?? "0"
        print("   inflation: \(inflationString) (13%)")
        print("   typeURL: \(Xion_Mint_V1_QueryInflationResponse.protoMessageName)")
        
        print()
    }
    
    // MARK: - QueryAnnualProvisions
    // Get current annual provisions.
    // Type URL: /xion.mint.v1.QueryAnnualProvisionsRequest
    
    static func queryAnnualProvisionsExamples() {
        print("--- QueryAnnualProvisions Examples ---\n")
        
        // 1. Construct request (no parameters needed)
        let request = Xion_Mint_V1_QueryAnnualProvisionsRequest()
        
        print("1. Constructed QueryAnnualProvisionsRequest:")
        print("   (no parameters)")
        print("   typeURL: \(Xion_Mint_V1_QueryAnnualProvisionsRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        
        var response = Xion_Mint_V1_QueryAnnualProvisionsResponse()
        // Annual provisions is returned as bytes representing a decimal string
        response.annualProvisions = "13000000000000.000000000000000000".data(using: .utf8)!
        
        print("3. Constructed Response:")
        let provisionsString = String(data: response.annualProvisions, encoding: .utf8) ?? "0"
        print("   annualProvisions: \(provisionsString)")
        print("   typeURL: \(Xion_Mint_V1_QueryAnnualProvisionsResponse.protoMessageName)")
        
        print()
    }
    
    // MARK: - Type URL Reference
    
    static func printTypeURLReference() {
        print("═══════════════════════════════════════════════════════════════")
        print("Type URL Reference (xion.mint.v1 Queries):")
        print("  QueryParamsRequest:           /\(Xion_Mint_V1_QueryParamsRequest.protoMessageName)")
        print("  QueryInflationRequest:        /\(Xion_Mint_V1_QueryInflationRequest.protoMessageName)")
        print("  QueryAnnualProvisionsRequest: /\(Xion_Mint_V1_QueryAnnualProvisionsRequest.protoMessageName)")
        print("═══════════════════════════════════════════════════════════════\n")
    }
}

