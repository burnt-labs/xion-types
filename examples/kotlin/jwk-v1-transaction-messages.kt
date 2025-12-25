/**
 * xion.jwk.v1 Transaction Messages — Protobuf Examples
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

package examples.kotlin

import xion.jwk.v1.Tx
import xion.jwk.v1.msgCreateAudience
import xion.jwk.v1.msgUpdateAudience
import xion.jwk.v1.msgDeleteAudience
import xion.jwk.v1.msgCreateAudienceClaim
import xion.jwk.v1.msgDeleteAudienceClaim
import xion.jwk.v1.AudienceOuterClass
import xion.jwk.v1.audience
import java.util.Base64

// =============================================================================
// MsgCreateAudience
// =============================================================================
// Register a new OAuth audience for JWT/OIDC authentication.
// Type URL: /xion.jwk.v1.MsgCreateAudience
// Signer: admin

fun msgCreateAudienceExamples() {
    println("=== MsgCreateAudience Examples ===\n")

    // 1. Construct message
    val msg = msgCreateAudience {
        admin = "xion1admin..."
        aud = "123456789-abc.apps.googleusercontent.com"
        key = """{"kty":"RSA","n":"...","e":"AQAB"}"""
    }

    println("1. Constructed MsgCreateAudience:")
    println("   admin: ${msg.admin}")
    println("   aud: ${msg.aud}")
    println("   key: ${msg.key.take(50)}...")
    println("   typeUrl: /xion.jwk.v1.MsgCreateAudience")

    // 2. Encode
    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")

    // 3. Decode
    val decoded = Tx.MsgCreateAudience.parseFrom(encodedBytes)
    println("\n3. Decoded admin: ${decoded.admin}")
    println("   Decoded aud: ${decoded.aud}")

    // 4. Type URL
    val typeUrl = "/xion.jwk.v1.MsgCreateAudience"
    println("\n4. Type URL: $typeUrl")
}

// =============================================================================
// MsgUpdateAudience
// =============================================================================
// Update an existing audience configuration.
// Type URL: /xion.jwk.v1.MsgUpdateAudience
// Signer: admin (current admin)

fun msgUpdateAudienceExamples() {
    println("\n=== MsgUpdateAudience Examples ===\n")

    val msg = msgUpdateAudience {
        admin = "xion1currentadmin..."
        newAdmin = "xion1newadmin..."
        aud = "123456789-abc.apps.googleusercontent.com"
        key = """{"kty":"RSA","n":"...","e":"AQAB"}"""
        newAud = "123456789-abc.apps.googleusercontent.com"
    }

    println("1. Constructed MsgUpdateAudience:")
    println("   admin (current): ${msg.admin}")
    println("   newAdmin: ${msg.newAdmin}")
    println("   typeUrl: /xion.jwk.v1.MsgUpdateAudience")

    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")
}

// =============================================================================
// MsgDeleteAudience
// =============================================================================
// Remove an audience from the registry.
// Type URL: /xion.jwk.v1.MsgDeleteAudience
// Signer: admin

fun msgDeleteAudienceExamples() {
    println("\n=== MsgDeleteAudience Examples ===\n")

    val msg = msgDeleteAudience {
        admin = "xion1admin..."
        aud = "123456789-abc.apps.googleusercontent.com"
    }

    println("1. Constructed MsgDeleteAudience:")
    println("   admin: ${msg.admin}")
    println("   aud: ${msg.aud}")
    println("   typeUrl: /xion.jwk.v1.MsgDeleteAudience")

    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")
}

// =============================================================================
// MsgCreateAudienceClaim
// =============================================================================
// Claim ownership of an audience hash.
// Type URL: /xion.jwk.v1.MsgCreateAudienceClaim
// Signer: admin

fun msgCreateAudienceClaimExamples() {
    println("\n=== MsgCreateAudienceClaim Examples ===\n")

    val audHash = "sha256-hash-of-audience-claim".toByteArray(Charsets.UTF_8)

    val msg = msgCreateAudienceClaim {
        admin = "xion1admin..."
        audHash = com.google.protobuf.ByteString.copyFrom(audHash)
    }

    println("1. Constructed MsgCreateAudienceClaim:")
    println("   admin: ${msg.admin}")
    println("   audHash length: ${msg.audHash.size()} bytes")
    println("   typeUrl: /xion.jwk.v1.MsgCreateAudienceClaim")

    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")
}

// =============================================================================
// MsgDeleteAudienceClaim
// =============================================================================
// Remove an audience claim.
// Type URL: /xion.jwk.v1.MsgDeleteAudienceClaim
// Signer: admin

fun msgDeleteAudienceClaimExamples() {
    println("\n=== MsgDeleteAudienceClaim Examples ===\n")

    val audHash = "sha256-hash-of-audience-claim".toByteArray(Charsets.UTF_8)

    val msg = msgDeleteAudienceClaim {
        admin = "xion1admin..."
        audHash = com.google.protobuf.ByteString.copyFrom(audHash)
    }

    println("1. Constructed MsgDeleteAudienceClaim:")
    println("   admin: ${msg.admin}")
    println("   audHash length: ${msg.audHash.size()} bytes")
    println("   typeUrl: /xion.jwk.v1.MsgDeleteAudienceClaim")

    val encodedBytes = msg.toByteArray()
    println("\n2. Encoded: ${encodedBytes.size} bytes")
}

// =============================================================================
// Audience Type Helper
// =============================================================================

fun audienceExamples() {
    println("\n=== Audience Type Examples ===\n")

    val audience = audience {
        aud = "123456789-abc.apps.googleusercontent.com"
        key = """{"kty":"RSA","n":"...","e":"AQAB"}"""
        admin = "xion1admin..."
    }

    println("1. Constructed Audience:")
    println("   aud: ${audience.aud}")
    println("   admin: ${audience.admin}")

    val encoded = audience.toByteArray()
    val decoded = AudienceOuterClass.Audience.parseFrom(encoded)
    println("\n2. Encoded/Decoded:")
    println("   Encoded size: ${encoded.size} bytes")
    println("   Decoded aud: ${decoded.aud}")
}

// =============================================================================
// Run All Examples
// =============================================================================

fun main() {
    println("╔════════════════════════════════════════════════════════════╗")
    println("║  xion.jwk.v1 Transaction Messages — Protobuf Examples      ║")
    println("╚════════════════════════════════════════════════════════════╝\n")

    msgCreateAudienceExamples()
    msgUpdateAudienceExamples()
    msgDeleteAudienceExamples()
    msgCreateAudienceClaimExamples()
    msgDeleteAudienceClaimExamples()
    audienceExamples()

    println("\n═══════════════════════════════════════════════════════════════")
    println("Type URL Reference:")
    println("  MsgCreateAudience:      /xion.jwk.v1.MsgCreateAudience")
    println("  MsgUpdateAudience:      /xion.jwk.v1.MsgUpdateAudience")
    println("  MsgDeleteAudience:      /xion.jwk.v1.MsgDeleteAudience")
    println("  MsgCreateAudienceClaim: /xion.jwk.v1.MsgCreateAudienceClaim")
    println("  MsgDeleteAudienceClaim: /xion.jwk.v1.MsgDeleteAudienceClaim")
    println("═══════════════════════════════════════════════════════════════")
}
