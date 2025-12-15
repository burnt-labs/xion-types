/**
 * xion.indexer.feegrant.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Feegrant Indexer Module (xion.indexer.feegrant.v1).
 *
 * Queries covered:
 * - QueryAllowance: Get fee allowance between specific granter and grantee
 * - QueryAllowances: List all allowances received by a grantee
 * - QueryAllowancesByGranter: List all allowances issued by a granter
 *
 * The Feegrant Indexer provides optimized queries for fee allowances,
 * allowing efficient lookup of who can pay fees on behalf of whom.
 *
 * Note: This is an indexer module with query-only messages.
 * To create/revoke allowances, use the standard cosmos.feegrant.v1beta1 module.
 */

package examples.kotlin

import xion.indexer.feegrant.v1.QueryOuterClass
import xion.indexer.feegrant.v1.queryAllowanceRequest
import xion.indexer.feegrant.v1.queryAllowancesRequest
import xion.indexer.feegrant.v1.queryAllowancesByGranterRequest
import cosmos.base.query.v1beta1.pageRequest
import com.google.protobuf.Any
import com.google.protobuf.Timestamp

// =============================================================================
// QueryAllowanceRequest / Response
// =============================================================================
// Get fee allowance between a specific granter and grantee.
// Endpoint: GET /xion/indexer/feegrant/v1/allowance/{granter}/{grantee}
// Type URL: /xion.indexer.feegrant.v1.QueryAllowanceRequest

fun queryAllowanceExamples() {
    println("=== QueryAllowance Examples ===\n")

    val request = queryAllowanceRequest {
        granter = "xion1granter..."
        grantee = "xion1grantee..."
    }

    println("1. Constructed QueryAllowanceRequest:")
    println("   granter: ${request.granter}")
    println("   grantee: ${request.grantee}")
    println("   typeUrl: /xion.indexer.feegrant.v1.QueryAllowanceRequest")

    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryAllowanceResponse.newBuilder()
        .setAllowance(QueryOuterClass.Grant.newBuilder()
            .setAllowance(Any.newBuilder()
                .setTypeUrl("/cosmos.feegrant.v1beta1.BasicAllowance")
                .setValue(com.google.protobuf.ByteString.copyFrom(byteArrayOf(10, 20, 10, 5, 117, 120, 105, 111, 110)))
                .build())
            .setExpiration(Timestamp.newBuilder()
                .setSeconds(1735689600L)
                .build())
            .build())
        .build()

    println("3. Constructed Response:")
    println("   allowance.allowance.typeUrl: ${response.allowance.allowance.typeUrl}")
    println("   allowance.expiration: ${response.allowance.expiration.seconds} (unix)")
    println("   typeUrl: /xion.indexer.feegrant.v1.QueryAllowanceResponse")
}

// =============================================================================
// QueryAllowancesRequest / Response
// =============================================================================
// List all fee allowances received by a specific grantee.
// Endpoint: GET /xion/indexer/feegrant/v1/allowances/{grantee}
// Type URL: /xion.indexer.feegrant.v1.QueryAllowancesRequest

fun queryAllowancesExamples() {
    println("\n=== QueryAllowances Examples ===\n")

    val request = queryAllowancesRequest {
        grantee = "xion1grantee..."
        pagination = pageRequest {
            limit = 20
            countTotal = true
        }
    }

    println("1. Constructed QueryAllowancesRequest:")
    println("   grantee: ${request.grantee}")
    println("   pagination.limit: ${request.pagination.limit}")
    println("   typeUrl: /xion.indexer.feegrant.v1.QueryAllowancesRequest")

    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryAllowancesResponse.newBuilder()
        .addAllowances(QueryOuterClass.Grant.newBuilder()
            .setAllowance(Any.newBuilder()
                .setTypeUrl("/cosmos.feegrant.v1beta1.BasicAllowance")
                .setValue(com.google.protobuf.ByteString.copyFrom(byteArrayOf(10, 20, 10, 5, 117, 120, 105, 111, 110)))
                .build())
            .setExpiration(Timestamp.newBuilder()
                .setSeconds(1735689600L)
                .build())
            .build())
        .addAllowances(QueryOuterClass.Grant.newBuilder()
            .setAllowance(Any.newBuilder()
                .setTypeUrl("/cosmos.feegrant.v1beta1.PeriodicAllowance")
                .setValue(com.google.protobuf.ByteString.copyFrom(byteArrayOf(10, 30, 18, 20)))
                .build())
            .setExpiration(Timestamp.newBuilder()
                .setSeconds(1767225600L)
                .build())
            .build())
        .setPagination(cosmos.base.query.v1beta1.Pagination.PageResponse.newBuilder()
            .setTotal(2)
            .build())
        .build()

    println("3. Constructed Response:")
    println("   allowances count: ${response.allowancesCount}")
    response.allowancesList.forEachIndexed { i, grant ->
        println("\n   [$i] Grant:")
        println("       allowance.typeUrl: ${grant.allowance.typeUrl}")
        println("       expiration: ${grant.expiration.seconds}")
    }
    println("\n   pagination.total: ${response.pagination.total}")
    println("   typeUrl: /xion.indexer.feegrant.v1.QueryAllowancesResponse")
}

// =============================================================================
// QueryAllowancesByGranterRequest / Response
// =============================================================================
// List all fee allowances issued by a specific granter.
// Endpoint: GET /xion/indexer/feegrant/v1/issued/{granter}
// Type URL: /xion.indexer.feegrant.v1.QueryAllowancesByGranterRequest

fun queryAllowancesByGranterExamples() {
    println("\n=== QueryAllowancesByGranter Examples ===\n")

    val request = queryAllowancesByGranterRequest {
        granter = "xion1granter..."
        pagination = pageRequest {
            limit = 20
            countTotal = true
        }
    }

    println("1. Constructed QueryAllowancesByGranterRequest:")
    println("   granter: ${request.granter}")
    println("   pagination.limit: ${request.pagination.limit}")
    println("   typeUrl: /xion.indexer.feegrant.v1.QueryAllowancesByGranterRequest")

    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryAllowancesByGranterResponse.newBuilder()
        .addAllowances(QueryOuterClass.Grant.newBuilder()
            .setAllowance(Any.newBuilder()
                .setTypeUrl("/cosmos.feegrant.v1beta1.BasicAllowance")
                .setValue(com.google.protobuf.ByteString.copyFrom(byteArrayOf(10, 20, 10, 5, 117, 120, 105, 111, 110)))
                .build())
            .setExpiration(Timestamp.newBuilder()
                .setSeconds(1735689600L)
                .build())
            .build())
        .setPagination(cosmos.base.query.v1beta1.Pagination.PageResponse.newBuilder()
            .setTotal(1)
            .build())
        .build()

    println("3. Constructed Response:")
    println("   allowances count: ${response.allowancesCount}")
    response.allowancesList.forEachIndexed { i, grant ->
        println("\n   [$i] Grant:")
        println("       allowance.typeUrl: ${grant.allowance.typeUrl}")
        println("       expiration: ${grant.expiration.seconds}")
    }
    println("\n   pagination.total: ${response.pagination.total}")
    println("   typeUrl: /xion.indexer.feegrant.v1.QueryAllowancesByGranterResponse")
}

// =============================================================================
// Understanding Fee Grants
// =============================================================================

fun feegrantExplanation() {
    println("\n=== Understanding Fee Grants ===\n")

    println("Fee Grants allow one account to pay transaction fees on behalf of another.\n")

    println("Key Concepts:\n")
    println("  1. Granter: The account paying the fees")
    println("  2. Grantee: The account whose transactions get fee-paid")
    println("  3. Allowance: The spending limit and rules\n")

    println("Common Allowance Types:\n")
    println("  • BasicAllowance:")
    println("    Simple spending limit (e.g., 1000 uxion max)\n")
    println("  • PeriodicAllowance:")
    println("    Recurring allowance with period and budget\n")
    println("  • AllowedMsgAllowance:")
    println("    Restricts which message types can use the allowance\n")

    println("Use Cases:\n")
    println("  • Gasless UX: Users can transact without holding native tokens")
    println("  • Sponsored transactions: Apps pay fees for users")
    println("  • Abstract accounts: Meta-transactions")
    println("  • Developer tooling: Test accounts with fee grants\n")

    println("Indexer vs Standard Feegrant:\n")
    println("  • This module provides OPTIMIZED QUERIES for allowances")
    println("  • To CREATE allowances, use: cosmos.feegrant.v1beta1.MsgGrantAllowance")
    println("  • To REVOKE allowances, use: cosmos.feegrant.v1beta1.MsgRevokeAllowance")
}

// =============================================================================
// Run All Examples
// =============================================================================

fun main() {
    println("╔════════════════════════════════════════════════════════════╗")
    println("║  xion.indexer.feegrant.v1 Query Messages — Examples       ║")
    println("╚════════════════════════════════════════════════════════════╝\n")

    queryAllowanceExamples()
    queryAllowancesExamples()
    queryAllowancesByGranterExamples()
    feegrantExplanation()

    println("\n═══════════════════════════════════════════════════════════════")
    println("Type URL Reference (Requests):")
    println("  QueryAllowanceRequest:        /xion.indexer.feegrant.v1.QueryAllowanceRequest")
    println("  QueryAllowancesRequest:       /xion.indexer.feegrant.v1.QueryAllowancesRequest")
    println("  QueryAllowancesByGranterRequest: /xion.indexer.feegrant.v1.QueryAllowancesByGranterRequest")
    println("\nREST Endpoints:")
    println("  GET /xion/indexer/feegrant/v1/allowance/{granter}/{grantee}")
    println("  GET /xion/indexer/feegrant/v1/allowances/{grantee}")
    println("  GET /xion/indexer/feegrant/v1/issued/{granter}")
    println("\nNote: This is an indexer module (query-only).")
    println("Use cosmos.feegrant.v1beta1 for grant/revoke transactions.")
    println("═══════════════════════════════════════════════════════════════")
}
