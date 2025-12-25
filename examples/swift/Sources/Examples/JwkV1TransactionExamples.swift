/**
 * xion.jwk.v1 Transaction Messages — SwiftProtobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * transaction messages from the JSON Web Key Module (xion.jwk.v1).
 *
 * Messages covered:
 * - MsgCreateAudience: Register a new OAuth audience (e.g., Google, Apple)
 * - MsgUpdateAudience: Update an existing audience configuration
 * - MsgDeleteAudience: Remove an audience
 * - MsgCreateAudienceClaim: Claim ownership of an audience hash
 * - MsgDeleteAudienceClaim: Remove an audience claim
 */

import Foundation
import SwiftProtobuf

enum JwkV1TransactionExamples {
    
    // MARK: - Run All Examples
    
    static func runAll() {
        print("=== xion.jwk.v1 Transaction Messages ===\n")
        
        msgCreateAudienceExamples()
        msgUpdateAudienceExamples()
        msgDeleteAudienceExamples()
        msgCreateAudienceClaimExamples()
        msgDeleteAudienceClaimExamples()
        
        printTypeURLReference()
    }
    
    // MARK: - MsgCreateAudience
    // Register a new OAuth audience for JWT/OIDC authentication.
    // Type URL: /xion.jwk.v1.MsgCreateAudience
    // Signer: admin
    
    static func msgCreateAudienceExamples() {
        print("--- MsgCreateAudience Examples ---\n")
        
        // 1. Construct message
        var msg = Xion_Jwk_V1_MsgCreateAudience()
        msg.admin = "xion1admin..."
        msg.aud = "123456789-abc.apps.googleusercontent.com" // OAuth client ID
        msg.key = "{\"kty\":\"RSA\",\"n\":\"...\",\"e\":\"AQAB\"}" // JWKS public key
        
        print("1. Constructed MsgCreateAudience:")
        print("   admin: \(msg.admin)")
        print("   aud: \(msg.aud)")
        print("   key: \(String(msg.key.prefix(50)))...")
        print("   typeURL: \(Xion_Jwk_V1_MsgCreateAudience.protoMessageName)")
        
        do {
            // 2. Encode
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
            
            // 3. Decode
            let decoded = try Xion_Jwk_V1_MsgCreateAudience(serializedData: encodedBytes)
            print("\n3. Decoded:")
            print("   admin: \(decoded.admin)")
            print("   aud: \(decoded.aud)")
            
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgUpdateAudience
    // Update an existing audience configuration.
    // Type URL: /xion.jwk.v1.MsgUpdateAudience
    // Signer: admin
    
    static func msgUpdateAudienceExamples() {
        print("--- MsgUpdateAudience Examples ---\n")
        
        var msg = Xion_Jwk_V1_MsgUpdateAudience()
        msg.admin = "xion1currentadmin..."
        msg.newAdmin = "xion1newadmin..." // Optional: transfer admin
        msg.aud = "123456789-abc.apps.googleusercontent.com"
        msg.newAud = "" // Empty = keep current
        msg.key = "{\"kty\":\"RSA\",\"n\":\"...\",\"e\":\"AQAB\"}" // Updated key
        
        print("1. Constructed MsgUpdateAudience:")
        print("   admin: \(msg.admin)")
        print("   newAdmin: \(msg.newAdmin)")
        print("   aud: \(msg.aud)")
        print("   typeURL: \(Xion_Jwk_V1_MsgUpdateAudience.protoMessageName)")
        
        do {
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgDeleteAudience
    // Remove an audience.
    // Type URL: /xion.jwk.v1.MsgDeleteAudience
    // Signer: admin
    
    static func msgDeleteAudienceExamples() {
        print("--- MsgDeleteAudience Examples ---\n")
        
        var msg = Xion_Jwk_V1_MsgDeleteAudience()
        msg.admin = "xion1admin..."
        msg.aud = "123456789-abc.apps.googleusercontent.com"
        
        print("1. Constructed MsgDeleteAudience:")
        print("   admin: \(msg.admin)")
        print("   aud: \(msg.aud)")
        print("   typeURL: \(Xion_Jwk_V1_MsgDeleteAudience.protoMessageName)")
        
        do {
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgCreateAudienceClaim
    // Claim ownership of an audience hash.
    // Type URL: /xion.jwk.v1.MsgCreateAudienceClaim
    // Signer: admin
    
    static func msgCreateAudienceClaimExamples() {
        print("--- MsgCreateAudienceClaim Examples ---\n")
        
        var msg = Xion_Jwk_V1_MsgCreateAudienceClaim()
        msg.admin = "xion1admin..."
        msg.audHash = Data([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08]) // SHA256 hash
        
        print("1. Constructed MsgCreateAudienceClaim:")
        print("   admin: \(msg.admin)")
        print("   audHash: \(msg.audHash.map { String(format: "%02x", $0) }.joined())")
        print("   typeURL: \(Xion_Jwk_V1_MsgCreateAudienceClaim.protoMessageName)")
        
        do {
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgDeleteAudienceClaim
    // Remove an audience claim.
    // Type URL: /xion.jwk.v1.MsgDeleteAudienceClaim
    // Signer: admin
    
    static func msgDeleteAudienceClaimExamples() {
        print("--- MsgDeleteAudienceClaim Examples ---\n")
        
        var msg = Xion_Jwk_V1_MsgDeleteAudienceClaim()
        msg.admin = "xion1admin..."
        msg.audHash = Data([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08])
        
        print("1. Constructed MsgDeleteAudienceClaim:")
        print("   admin: \(msg.admin)")
        print("   audHash: \(msg.audHash.map { String(format: "%02x", $0) }.joined())")
        print("   typeURL: \(Xion_Jwk_V1_MsgDeleteAudienceClaim.protoMessageName)")
        
        do {
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - Type URL Reference
    
    static func printTypeURLReference() {
        print("═══════════════════════════════════════════════════════════════")
        print("Type URL Reference (xion.jwk.v1):")
        print("  MsgCreateAudience:      /\(Xion_Jwk_V1_MsgCreateAudience.protoMessageName)")
        print("  MsgUpdateAudience:      /\(Xion_Jwk_V1_MsgUpdateAudience.protoMessageName)")
        print("  MsgDeleteAudience:      /\(Xion_Jwk_V1_MsgDeleteAudience.protoMessageName)")
        print("  MsgCreateAudienceClaim: /\(Xion_Jwk_V1_MsgCreateAudienceClaim.protoMessageName)")
        print("  MsgDeleteAudienceClaim: /\(Xion_Jwk_V1_MsgDeleteAudienceClaim.protoMessageName)")
        print("═══════════════════════════════════════════════════════════════\n")
    }
}

