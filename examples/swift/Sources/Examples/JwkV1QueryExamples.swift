/**
 * xion.jwk.v1 Query Messages — SwiftProtobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the JSON Web Key Module (xion.jwk.v1).
 *
 * Queries covered:
 * - QueryParams: Get module parameters
 * - QueryAudience: Get single audience by ID
 * - QueryAudienceAll: List all audiences (paginated)
 * - QueryAudienceClaim: Get audience claim by hash
 * - QueryValidateJWT: Validate a JWT signature
 */

import Foundation
import SwiftProtobuf

enum JwkV1QueryExamples {
    
    // MARK: - Run All Examples
    
    static func runAll() {
        print("=== xion.jwk.v1 Query Messages ===\n")
        
        queryParamsExamples()
        queryAudienceExamples()
        queryAudienceAllExamples()
        queryAudienceClaimExamples()
        queryValidateJWTExamples()
        
        printTypeURLReference()
    }
    
    // MARK: - QueryParams
    // Get module parameters.
    // Type URL: /xion.jwk.v1.QueryParamsRequest
    
    static func queryParamsExamples() {
        print("--- QueryParams Examples ---\n")
        
        let request = Xion_Jwk_V1_QueryParamsRequest()
        
        print("1. Constructed QueryParamsRequest:")
        print("   (no parameters)")
        print("   typeURL: \(Xion_Jwk_V1_QueryParamsRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        var response = Xion_Jwk_V1_QueryParamsResponse()
        var params = Xion_Jwk_V1_Params()
        params.timeOffset = 300 // 5 minutes
        params.deploymentGas = 500000
        response.params = params
        
        print("3. Constructed Response:")
        print("   timeOffset: \(response.params.timeOffset)")
        print("   deploymentGas: \(response.params.deploymentGas)")
        
        print()
    }
    
    // MARK: - QueryAudience
    // Get single audience by ID.
    // Type URL: /xion.jwk.v1.QueryAudienceRequest
    
    static func queryAudienceExamples() {
        print("--- QueryAudience Examples ---\n")
        
        var request = Xion_Jwk_V1_QueryAudienceRequest()
        request.aud = "123456789-abc.apps.googleusercontent.com"
        
        print("1. Constructed QueryAudienceRequest:")
        print("   aud: \(request.aud)")
        print("   typeURL: \(Xion_Jwk_V1_QueryAudienceRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        var audience = Xion_Jwk_V1_Audience()
        audience.aud = "123456789-abc.apps.googleusercontent.com"
        audience.key = "{\"kty\":\"RSA\",\"n\":\"...\",\"e\":\"AQAB\"}"
        audience.admin = "xion1admin..."
        
        var response = Xion_Jwk_V1_QueryAudienceResponse()
        response.audience = audience
        
        print("3. Constructed Response:")
        print("   audience.aud: \(response.audience.aud)")
        print("   audience.admin: \(response.audience.admin)")
        
        print()
    }
    
    // MARK: - QueryAudienceAll
    // List all audiences (paginated).
    // Type URL: /xion.jwk.v1.QueryAudienceAllRequest
    
    static func queryAudienceAllExamples() {
        print("--- QueryAudienceAll Examples ---\n")
        
        var request = Xion_Jwk_V1_QueryAudienceAllRequest()
        var pagination = Cosmos_Base_Query_V1beta1_PageRequest()
        pagination.limit = 10
        request.pagination = pagination
        
        print("1. Constructed QueryAudienceAllRequest:")
        print("   pagination.limit: \(request.pagination.limit)")
        print("   typeURL: \(Xion_Jwk_V1_QueryAudienceAllRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        var aud1 = Xion_Jwk_V1_Audience()
        aud1.aud = "google-client-id"
        aud1.admin = "xion1admin1..."
        
        var aud2 = Xion_Jwk_V1_Audience()
        aud2.aud = "apple-client-id"
        aud2.admin = "xion1admin2..."
        
        var response = Xion_Jwk_V1_QueryAudienceAllResponse()
        response.audience = [aud1, aud2]
        
        print("3. Constructed Response:")
        print("   audiences: \(response.audience.count)")
        for aud in response.audience {
            print("     - \(aud.aud)")
        }
        
        print()
    }
    
    // MARK: - QueryAudienceClaim
    // Get audience claim by hash.
    // Type URL: /xion.jwk.v1.QueryAudienceClaimRequest
    
    static func queryAudienceClaimExamples() {
        print("--- QueryAudienceClaim Examples ---\n")
        
        var request = Xion_Jwk_V1_QueryAudienceClaimRequest()
        request.hash = Data([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08])
        
        print("1. Constructed QueryAudienceClaimRequest:")
        print("   hash: \(request.hash.map { String(format: "%02x", $0) }.joined())")
        print("   typeURL: \(Xion_Jwk_V1_QueryAudienceClaimRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - QueryValidateJWT
    // Validate a JWT signature.
    // Type URL: /xion.jwk.v1.QueryValidateJWTRequest
    
    static func queryValidateJWTExamples() {
        print("--- QueryValidateJWT Examples ---\n")
        
        var request = Xion_Jwk_V1_QueryValidateJWTRequest()
        request.aud = "123456789-abc.apps.googleusercontent.com"
        request.sub = "user@example.com" // JWT subject
        request.sigBytes = Data([0xAA, 0xBB, 0xCC, 0xDD]) // JWT signature bytes
        
        print("1. Constructed QueryValidateJWTRequest:")
        print("   aud: \(request.aud)")
        print("   sub: \(request.sub)")
        print("   sigBytes: \(request.sigBytes.count) bytes")
        print("   typeURL: \(Xion_Jwk_V1_QueryValidateJWTRequest.protoMessageName)")
        
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        var response = Xion_Jwk_V1_QueryValidateJWTResponse()
        response.isValid = true
        
        print("3. Constructed Response:")
        print("   isValid: \(response.isValid)")
        
        print()
    }
    
    // MARK: - Type URL Reference
    
    static func printTypeURLReference() {
        print("═══════════════════════════════════════════════════════════════")
        print("Type URL Reference (xion.jwk.v1 Queries):")
        print("  QueryParamsRequest:        /\(Xion_Jwk_V1_QueryParamsRequest.protoMessageName)")
        print("  QueryAudienceRequest:      /\(Xion_Jwk_V1_QueryAudienceRequest.protoMessageName)")
        print("  QueryAudienceAllRequest:   /\(Xion_Jwk_V1_QueryAudienceAllRequest.protoMessageName)")
        print("  QueryAudienceClaimRequest: /\(Xion_Jwk_V1_QueryAudienceClaimRequest.protoMessageName)")
        print("  QueryValidateJWTRequest:   /\(Xion_Jwk_V1_QueryValidateJWTRequest.protoMessageName)")
        print("═══════════════════════════════════════════════════════════════\n")
    }
}

