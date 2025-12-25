/**
 * xion.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Core Xion Module (xion.v1).
 *
 * Queries covered:
 * - QueryWebAuthNVerifyRegister: Verify WebAuthN registration
 * - QueryWebAuthNVerifyAuthenticate: Verify WebAuthN authentication
 * - QueryPlatformPercentage: Get current platform fee percentage
 * - QueryPlatformMinimum: Get current minimum platform fees
 */

package examples.kotlin

import xion.v1.QueryOuterClass
import xion.v1.queryWebAuthNVerifyRegisterRequest
import xion.v1.queryWebAuthNVerifyAuthenticateRequest
import xion.v1.queryPlatformPercentageRequest
import xion.v1.queryPlatformMinimumRequest
import cosmos.base.v1beta1.CoinOuterClass
import cosmos.base.v1beta1.coin
import java.util.Base64

// =============================================================================
// QueryWebAuthNVerifyRegisterRequest / Response
// =============================================================================
// Verify a WebAuthN registration credential.
// Type URL: /xion.v1.QueryWebAuthNVerifyRegisterRequest

fun queryWebAuthNVerifyRegisterExamples() {
    println("=== QueryWebAuthNVerifyRegister Examples ===\n")

    // 1. Construct request
    val request = queryWebAuthNVerifyRegisterRequest {
        addr = "xion1user..."
        challenge = "random-challenge-string-from-server"
        rp = "your-app.example.com" // Relying Party ID
        data = com.google.protobuf.ByteString.copyFrom(byteArrayOf(0x01, 0x02, 0x03, 0x04)) // WebAuthN attestation data
    }

    println("1. Constructed QueryWebAuthNVerifyRegisterRequest:")
    println("   addr: ${request.addr}")
    println("   challenge: ${request.challenge}")
    println("   rp: ${request.rp}")
    println("   data length: ${request.data.size()} bytes")
    println("   typeUrl: /xion.v1.QueryWebAuthNVerifyRegisterRequest")

    // 2. Encode request
    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // 3. Decode request
    val decodedRequest = QueryOuterClass.QueryWebAuthNVerifyRegisterRequest.parseFrom(encodedRequest)
    println("\n3. Decoded addr: ${decodedRequest.addr}")
    println("   Decoded challenge: ${decodedRequest.challenge}")

    // 4. Type URL
    val typeUrl = "/xion.v1.QueryWebAuthNVerifyRegisterRequest"
    println("\n4. Type URL: $typeUrl")

    // 5. Base64 encoding
    val base64 = Base64.getEncoder().encodeToString(request.data.toByteArray())
    println("\n5. Base64 format:")
    println("   addr: ${request.addr}")
    println("   challenge: ${request.challenge}")
    println("   rp: ${request.rp}")
    println("   data (base64): $base64")

    // === Response ===
    println("\n--- Response ---")

    // Construct response (typically received from chain)
    val response = QueryOuterClass.QueryWebAuthNVerifyRegisterResponse.newBuilder()
        .setCredential(com.google.protobuf.ByteString.copyFrom(byteArrayOf(0xAA.toByte(), 0xBB.toByte(), 0xCC.toByte(), 0xDD.toByte())))
        .build()

    println("6. Constructed Response:")
    println("   credential length: ${response.credential.size()} bytes")
    println("   typeUrl: /xion.v1.QueryWebAuthNVerifyRegisterResponse")

    // Encode/decode response
    val encodedResponse = response.toByteArray()
    val decodedResponse = QueryOuterClass.QueryWebAuthNVerifyRegisterResponse.parseFrom(encodedResponse)
    println("\n7. Decoded credential length: ${decodedResponse.credential.size()} bytes")
}

// =============================================================================
// QueryWebAuthNVerifyAuthenticateRequest / Response
// =============================================================================
// Verify a WebAuthN authentication assertion.
// Type URL: /xion.v1.QueryWebAuthNVerifyAuthenticateRequest

fun queryWebAuthNVerifyAuthenticateExamples() {
    println("\n=== QueryWebAuthNVerifyAuthenticate Examples ===\n")

    // 1. Construct request
    val request = queryWebAuthNVerifyAuthenticateRequest {
        addr = "xion1user..."
        challenge = "random-challenge-string"
        rp = "your-app.example.com"
        credential = com.google.protobuf.ByteString.copyFrom(byteArrayOf(0xAA.toByte(), 0xBB.toByte(), 0xCC.toByte(), 0xDD.toByte())) // Stored credential
        data = com.google.protobuf.ByteString.copyFrom(byteArrayOf(0x01, 0x02, 0x03, 0x04)) // Authenticator assertion data
    }

    println("1. Constructed QueryWebAuthNVerifyAuthenticateRequest:")
    println("   addr: ${request.addr}")
    println("   challenge: ${request.challenge}")
    println("   rp: ${request.rp}")
    println("   credential length: ${request.credential.size()} bytes")
    println("   data length: ${request.data.size()} bytes")
    println("   typeUrl: /xion.v1.QueryWebAuthNVerifyAuthenticateRequest")

    // 2. Encode
    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // 3. Decode
    val decodedRequest = QueryOuterClass.QueryWebAuthNVerifyAuthenticateRequest.parseFrom(encodedRequest)
    println("\n3. Decoded addr: ${decodedRequest.addr}")

    // 4. Type URL
    val typeUrl = "/xion.v1.QueryWebAuthNVerifyAuthenticateRequest"
    println("\n4. Type URL: $typeUrl")

    // 5. Base64 encoding
    val credentialBase64 = Base64.getEncoder().encodeToString(request.credential.toByteArray())
    val dataBase64 = Base64.getEncoder().encodeToString(request.data.toByteArray())
    println("\n5. Base64 format:")
    println("   addr: ${request.addr}")
    println("   credential (base64): $credentialBase64")
    println("   data (base64): $dataBase64")

    // === Response ===
    println("\n--- Response ---")

    // Response is empty (success = no error thrown)
    val response = QueryOuterClass.QueryWebAuthNVerifyAuthenticateResponse.newBuilder().build()

    println("6. Constructed Response (empty = success):")
    println("   typeUrl: /xion.v1.QueryWebAuthNVerifyAuthenticateResponse")

    val encodedResponse = response.toByteArray()
    println("   Encoded length: ${encodedResponse.size} bytes")
}

// =============================================================================
// QueryPlatformPercentageRequest / Response
// =============================================================================
// Get the current platform fee percentage.
// Type URL: /xion.v1.QueryPlatformPercentageRequest

fun queryPlatformPercentageExamples() {
    println("\n=== QueryPlatformPercentage Examples ===\n")

    // 1. Construct request (no parameters needed)
    val request = queryPlatformPercentageRequest {}

    println("1. Constructed QueryPlatformPercentageRequest:")
    println("   (no parameters)")
    println("   typeUrl: /xion.v1.QueryPlatformPercentageRequest")

    // 2. Encode request
    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // 3. Type URL
    val typeUrl = "/xion.v1.QueryPlatformPercentageRequest"
    println("\n3. Type URL: $typeUrl")

    // === Response ===
    println("\n--- Response ---")

    // Construct response (typically received from chain)
    // platformPercentage is stored as long, multiplied by 10000
    val response = QueryOuterClass.QueryPlatformPercentageResponse.newBuilder()
        .setPlatformPercentage(500L) // 5% = 500/10000
        .build()

    println("4. Constructed Response:")
    println("   platformPercentage (raw): ${response.platformPercentage}")
    println("   platformPercentage (%): ${response.platformPercentage / 100}%")
    println("   typeUrl: /xion.v1.QueryPlatformPercentageResponse")

    // 5. Encode/decode response
    val encodedResponse = response.toByteArray()
    val decodedResponse = QueryOuterClass.QueryPlatformPercentageResponse.parseFrom(encodedResponse)
    println("\n5. Decoded platformPercentage: ${decodedResponse.platformPercentage}")
}

// =============================================================================
// QueryPlatformMinimumRequest / Response
// =============================================================================
// Get the current minimum platform fees.
// Type URL: /xion.v1.QueryPlatformMinimumRequest

fun queryPlatformMinimumExamples() {
    println("\n=== QueryPlatformMinimum Examples ===\n")

    // 1. Construct request (no parameters needed)
    val request = queryPlatformMinimumRequest {}

    println("1. Constructed QueryPlatformMinimumRequest:")
    println("   (no parameters)")
    println("   typeUrl: /xion.v1.QueryPlatformMinimumRequest")

    // 2. Encode request
    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // 3. Type URL
    val typeUrl = "/xion.v1.QueryPlatformMinimumRequest"
    println("\n3. Type URL: $typeUrl")

    // === Response ===
    println("\n--- Response ---")

    // Construct response with minimum fees
    val response = QueryOuterClass.QueryPlatformMinimumResponse.newBuilder()
        .addMinimums(coin {
            denom = "uxion"
            amount = "1000"
        })
        .addMinimums(coin {
            denom = "uatom"
            amount = "500"
        })
        .build()

    println("4. Constructed Response:")
    println("   minimums:")
    response.minimumsList.forEach { m ->
        println("     - ${m.amount} ${m.denom}")
    }
    println("   typeUrl: /xion.v1.QueryPlatformMinimumResponse")

    // 5. Encode/decode response
    val encodedResponse = response.toByteArray()
    val decodedResponse = QueryOuterClass.QueryPlatformMinimumResponse.parseFrom(encodedResponse)
    println("\n5. Decoded minimums count: ${decodedResponse.minimumsList.size}")
}

// =============================================================================
// Working with ByteArray (bytes)
// =============================================================================
// Many WebAuthN fields use bytes (ByteArray). Here's how to work with them.

fun bytesExamples() {
    println("\n=== Working with Bytes (ByteArray) ===\n")

    // 1. Create from array of bytes
    val bytes1 = byteArrayOf(0x01, 0x02, 0x03, 0x04)
    println("1. From array: ${bytes1.contentToString()}")

    // 2. Create from String (UTF-8)
    val bytes2 = "hello".toByteArray(Charsets.UTF_8)
    println("2. From String: ${bytes2.contentToString()}")

    // 3. Create from base64
    val base64 = "AQIDBA==" // [1, 2, 3, 4]
    val bytes3 = Base64.getDecoder().decode(base64)
    println("3. From base64: ${bytes3.contentToString()}")

    // 4. Convert to base64
    val toBase64 = Base64.getEncoder().encodeToString(bytes1)
    println("4. To base64: $toBase64")

    // 5. Convert to hex
    val toHex = bytes1.joinToString("") { "%02x".format(it) }
    println("5. To hex: $toHex")

    // 6. Create from hex
    val bytes4 = "01020304".chunked(2).map { it.toInt(16).toByte() }.toByteArray()
    println("6. From hex: ${bytes4.contentToString()}")
}

// =============================================================================
// Run All Examples
// =============================================================================

fun main() {
    println("╔════════════════════════════════════════════════════════════╗")
    println("║  xion.v1 Query Messages — Protobuf Examples                ║")
    println("╚════════════════════════════════════════════════════════════╝\n")

    queryWebAuthNVerifyRegisterExamples()
    queryWebAuthNVerifyAuthenticateExamples()
    queryPlatformPercentageExamples()
    queryPlatformMinimumExamples()
    bytesExamples()

    println("\n═══════════════════════════════════════════════════════════════")
    println("Type URL Reference (Requests):")
    println("  QueryWebAuthNVerifyRegisterRequest:    /xion.v1.QueryWebAuthNVerifyRegisterRequest")
    println("  QueryWebAuthNVerifyAuthenticateRequest: /xion.v1.QueryWebAuthNVerifyAuthenticateRequest")
    println("  QueryPlatformPercentageRequest:        /xion.v1.QueryPlatformPercentageRequest")
    println("  QueryPlatformMinimumRequest:           /xion.v1.QueryPlatformMinimumRequest")
    println("\nType URL Reference (Responses):")
    println("  QueryWebAuthNVerifyRegisterResponse:    /xion.v1.QueryWebAuthNVerifyRegisterResponse")
    println("  QueryWebAuthNVerifyAuthenticateResponse: /xion.v1.QueryWebAuthNVerifyAuthenticateResponse")
    println("  QueryPlatformPercentageResponse:        /xion.v1.QueryPlatformPercentageResponse")
    println("  QueryPlatformMinimumResponse:           /xion.v1.QueryPlatformMinimumResponse")
    println("═══════════════════════════════════════════════════════════════")
}
