/**
 * xion.jwk.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the JSON Web Key Module (xion.jwk.v1).
 *
 * Queries covered:
 * - QueryParams: Get module parameters (time_offset, deployment_gas)
 * - QueryAudience: Get a single audience by ID
 * - QueryAudienceAll: List all registered audiences (paginated)
 * - QueryAudienceClaim: Get an audience claim by hash
 * - QueryValidateJWT: Validate a JWT signature
 */

package examples.kotlin

import xion.jwk.v1.QueryOuterClass
import xion.jwk.v1.queryParamsRequest
import xion.jwk.v1.queryAudienceRequest
import xion.jwk.v1.queryAudienceAllRequest
import xion.jwk.v1.queryAudienceClaimRequest
import xion.jwk.v1.queryValidateJWTRequest
import xion.jwk.v1.audience
import xion.jwk.v1.audienceClaim
import xion.jwk.v1.privateClaim
import cosmos.base.query.v1beta1.Pagination
import cosmos.base.query.v1beta1.pageRequest
import java.util.Base64

// =============================================================================
// QueryParamsRequest / Response
// =============================================================================
// Get the JWK module parameters.
// Endpoint: GET /xion/jwk/params
// Type URL: /xion.jwk.v1.QueryParamsRequest

fun queryParamsExamples() {
    println("=== QueryParams Examples ===\n")

    // 1. Construct request (no parameters needed)
    val request = queryParamsRequest {}

    println("1. Constructed QueryParamsRequest:")
    println("   (no parameters)")
    println("   typeUrl: /xion.jwk.v1.QueryParamsRequest")

    // 2. Encode request
    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryParamsResponse.newBuilder()
        .setParams(xion.jwk.v1.ParamsOuterClass.Params.newBuilder()
            .setTimeOffset(300000000000L) // 5 minutes in nanoseconds
            .setDeploymentGas(100000L)
            .build())
        .build()

    println("3. Constructed Response:")
    println("   params.timeOffset: ${response.params.timeOffset} ns")
    println("   params.timeOffset (minutes): ${response.params.timeOffset / 60_000_000_000}")
    println("   params.deploymentGas: ${response.params.deploymentGas}")
    println("   typeUrl: /xion.jwk.v1.QueryParamsResponse")
}

// =============================================================================
// QueryAudienceRequest / Response
// =============================================================================
// Get a single audience by its identifier.
// Endpoint: GET /xion/jwk/audience/{aud}
// Type URL: /xion.jwk.v1.QueryAudienceRequest

fun queryAudienceExamples() {
    println("\n=== QueryAudience Examples ===\n")

    val request = queryAudienceRequest {
        aud = "123456789-abc.apps.googleusercontent.com"
    }

    println("1. Constructed QueryAudienceRequest:")
    println("   aud: ${request.aud}")
    println("   typeUrl: /xion.jwk.v1.QueryAudienceRequest")

    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryAudienceResponse.newBuilder()
        .setAudience(audience {
            aud = "123456789-abc.apps.googleusercontent.com"
            key = """{"kty":"RSA","n":"...","e":"AQAB"}"""
            admin = "xion1admin..."
        })
        .build()

    println("3. Constructed Response:")
    println("   audience.aud: ${response.audience.aud}")
    println("   audience.admin: ${response.audience.admin}")
    println("   typeUrl: /xion.jwk.v1.QueryAudienceResponse")
}

// =============================================================================
// QueryAudienceAllRequest / Response
// =============================================================================
// List all registered audiences with pagination.
// Endpoint: GET /xion/jwk/audience
// Type URL: /xion.jwk.v1.QueryAudienceAllRequest

fun queryAudienceAllExamples() {
    println("\n=== QueryAudienceAll Examples ===\n")

    val request = queryAudienceAllRequest {
        pagination = pageRequest {
            limit = 10
            countTotal = true
        }
    }

    println("1. Constructed QueryAudienceAllRequest:")
    println("   pagination.limit: ${request.pagination.limit}")
    println("   typeUrl: /xion.jwk.v1.QueryAudienceAllRequest")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryAudienceAllResponse.newBuilder()
        .addAudience(audience {
            aud = "google-client-id.apps.googleusercontent.com"
            key = """{"kty":"RSA","n":"..."}"""
            admin = "xion1admin1..."
        })
        .addAudience(audience {
            aud = "apple-client-id"
            key = """{"kty":"EC","crv":"P-256",...}"""
            admin = "xion1admin2..."
        })
        .setPagination(Pagination.PageResponse.newBuilder()
            .setTotal(2)
            .build())
        .build()

    println("2. Constructed Response:")
    println("   audience count: ${response.audienceCount}")
    response.audienceList.forEachIndexed { i, aud ->
        println("   [$i] aud: ${aud.aud.take(30)}...")
        println("       admin: ${aud.admin}")
    }
    println("   pagination.total: ${response.pagination.total}")
}

// =============================================================================
// QueryAudienceClaimRequest / Response
// =============================================================================
// Get an audience claim by its hash.
// Endpoint: GET /xion/jwk/audience_claim/{hash}
// Type URL: /xion.jwk.v1.QueryAudienceClaimRequest

fun queryAudienceClaimExamples() {
    println("\n=== QueryAudienceClaim Examples ===\n")

    val claimHash = "sha256-hash-of-claim".toByteArray(Charsets.UTF_8)

    val request = queryAudienceClaimRequest {
        hash = com.google.protobuf.ByteString.copyFrom(claimHash)
    }

    println("1. Constructed QueryAudienceClaimRequest:")
    println("   hash length: ${request.hash.size()} bytes")
    println("   hash (hex): ${request.hash.toByteArray().joinToString("") { "%02x".format(it) }}")
    println("   typeUrl: /xion.jwk.v1.QueryAudienceClaimRequest")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryAudienceClaimResponse.newBuilder()
        .setClaim(audienceClaim {
            signer = "xion1claimant..."
        })
        .build()

    println("2. Constructed Response:")
    println("   claim.signer: ${response.claim.signer}")
    println("   typeUrl: /xion.jwk.v1.QueryAudienceClaimResponse")
}

// =============================================================================
// QueryValidateJWTRequest / Response
// =============================================================================
// Validate a JWT signature against a registered audience.
// Endpoint: GET /xion/jwk/validate_jwt/{aud}/{sub}/{sig_bytes}
// Type URL: /xion.jwk.v1.QueryValidateJWTRequest

fun queryValidateJWTExamples() {
    println("\n=== QueryValidateJWT Examples ===\n")

    val request = queryValidateJWTRequest {
        aud = "123456789-abc.apps.googleusercontent.com"
        sub = "user-unique-id-from-jwt"
        sigBytes = "base64-encoded-jwt-signature"
    }

    println("1. Constructed QueryValidateJWTRequest:")
    println("   aud: ${request.aud}")
    println("   sub: ${request.sub}")
    println("   sigBytes: ${request.sigBytes}")
    println("   typeUrl: /xion.jwk.v1.QueryValidateJWTRequest")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryValidateJWTResponse.newBuilder()
        .addPrivateClaims(privateClaim {
            key = "email"
            value = "user@example.com"
        })
        .addPrivateClaims(privateClaim {
            key = "email_verified"
            value = "true"
        })
        .addPrivateClaims(privateClaim {
            key = "name"
            value = "John Doe"
        })
        .build()

    println("2. Constructed Response:")
    println("   privateClaims count: ${response.privateClaimsCount}")
    response.privateClaimsList.forEach { claim ->
        println("     ${claim.key}: ${claim.value}")
    }
    println("   typeUrl: /xion.jwk.v1.QueryValidateJWTResponse")
}

// =============================================================================
// Run All Examples
// =============================================================================

fun main() {
    println("╔════════════════════════════════════════════════════════════╗")
    println("║  xion.jwk.v1 Query Messages — Protobuf Examples            ║")
    println("╚════════════════════════════════════════════════════════════╝\n")

    queryParamsExamples()
    queryAudienceExamples()
    queryAudienceAllExamples()
    queryAudienceClaimExamples()
    queryValidateJWTExamples()

    println("\n═══════════════════════════════════════════════════════════════")
    println("Type URL Reference (Requests):")
    println("  QueryParamsRequest:        /xion.jwk.v1.QueryParamsRequest")
    println("  QueryAudienceRequest:      /xion.jwk.v1.QueryAudienceRequest")
    println("  QueryAudienceAllRequest:   /xion.jwk.v1.QueryAudienceAllRequest")
    println("  QueryAudienceClaimRequest: /xion.jwk.v1.QueryAudienceClaimRequest")
    println("  QueryValidateJWTRequest:   /xion.jwk.v1.QueryValidateJWTRequest")
    println("\nREST Endpoints:")
    println("  GET /xion/jwk/params")
    println("  GET /xion/jwk/audience/{aud}")
    println("  GET /xion/jwk/audience")
    println("  GET /xion/jwk/audience_claim/{hash}")
    println("  GET /xion/jwk/validate_jwt/{aud}/{sub}/{sig_bytes}")
    println("═══════════════════════════════════════════════════════════════")
}
