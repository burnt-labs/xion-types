/**
 * xion.indexer.authz.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Authz Indexer Module (xion.indexer.authz.v1).
 *
 * Queries covered:
 * - QueryGrants: Get grants between specific granter and grantee
 * - QueryGranterGrants: List all grants issued by a granter
 * - QueryGranteeGrants: List all grants received by a grantee
 *
 * The Authz Indexer provides optimized queries for authorization grants,
 * allowing efficient lookup of who can act on behalf of whom.
 *
 * Note: This is an indexer module with query-only messages.
 * To create/revoke grants, use the standard cosmos.authz.v1beta1 module.
 */

package examples.kotlin

import xion.indexer.authz.v1.QueryOuterClass
import xion.indexer.authz.v1.queryGrantsRequest
import xion.indexer.authz.v1.queryGranterGrantsRequest
import xion.indexer.authz.v1.queryGranteeGrantsRequest
import cosmos.base.query.v1beta1.pageRequest
import com.google.protobuf.Any
import com.google.protobuf.Timestamp

// =============================================================================
// QueryGrantsRequest / Response
// =============================================================================
// Get grants between a specific granter and grantee.
// Endpoint: GET /xion/indexer/authz/v1/grants
// Type URL: /xion.indexer.authz.v1.QueryGrantsRequest

fun queryGrantsExamples() {
    println("=== QueryGrants Examples ===\n")

    val request = queryGrantsRequest {
        granter = "xion1granter..."
        grantee = "xion1grantee..."
        msgTypeUrl = "/cosmos.bank.v1beta1.MsgSend" // Optional: filter by message type
        pagination = pageRequest {
            limit = 10
            countTotal = true
        }
    }

    println("1. Constructed QueryGrantsRequest:")
    println("   granter: ${request.granter}")
    println("   grantee: ${request.grantee}")
    println("   msgTypeUrl: ${request.msgTypeUrl}")
    println("   pagination.limit: ${request.pagination.limit}")
    println("   typeUrl: /xion.indexer.authz.v1.QueryGrantsRequest")

    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryGrantsResponse.newBuilder()
        .addGrants(QueryOuterClass.Grant.newBuilder()
            .setAuthorization(Any.newBuilder()
                .setTypeUrl("/cosmos.authz.v1beta1.GenericAuthorization")
                .setValue(com.google.protobuf.ByteString.copyFrom(byteArrayOf(10, 30, 47, 99, 111, 115, 109, 111, 115)))
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
    println("   grants count: ${response.grantsCount}")
    response.grantsList.forEachIndexed { i, grant ->
        println("\n   [$i] Grant:")
        println("       authorization.typeUrl: ${grant.authorization.typeUrl}")
        println("       expiration: ${grant.expiration.seconds} (unix)")
    }
    println("\n   pagination.total: ${response.pagination.total}")
    println("   typeUrl: /xion.indexer.authz.v1.QueryGrantsResponse")
}

// =============================================================================
// QueryGranterGrantsRequest / Response
// =============================================================================
// List all grants issued by a specific granter.
// Endpoint: GET /xion/indexer/authz/v1/grants/granter/{granter}
// Type URL: /xion.indexer.authz.v1.QueryGranterGrantsRequest

fun queryGranterGrantsExamples() {
    println("\n=== QueryGranterGrants Examples ===\n")

    val request = queryGranterGrantsRequest {
        granter = "xion1granter..."
        pagination = pageRequest {
            limit = 20
            countTotal = true
        }
    }

    println("1. Constructed QueryGranterGrantsRequest:")
    println("   granter: ${request.granter}")
    println("   pagination.limit: ${request.pagination.limit}")
    println("   typeUrl: /xion.indexer.authz.v1.QueryGranterGrantsRequest")

    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryGranterGrantsResponse.newBuilder()
        .addGrants(QueryOuterClass.GrantAuthorization.newBuilder()
            .setGranter("xion1granter...")
            .setGrantee("xion1grantee1...")
            .setAuthorization(Any.newBuilder()
                .setTypeUrl("/cosmos.authz.v1beta1.GenericAuthorization")
                .setValue(com.google.protobuf.ByteString.copyFrom(byteArrayOf(10, 30, 47, 99, 111, 115, 109, 111, 115)))
                .build())
            .setExpiration(Timestamp.newBuilder()
                .setSeconds(1735689600L)
                .build())
            .build())
        .addGrants(QueryOuterClass.GrantAuthorization.newBuilder()
            .setGranter("xion1granter...")
            .setGrantee("xion1grantee2...")
            .setAuthorization(Any.newBuilder()
                .setTypeUrl("/cosmos.bank.v1beta1.SendAuthorization")
                .setValue(com.google.protobuf.ByteString.copyFrom(byteArrayOf(10, 20, 10, 5, 117, 120, 105, 111, 110)))
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
    println("   grants count: ${response.grantsCount}")
    response.grantsList.forEachIndexed { i, grant ->
        println("\n   [$i] GrantAuthorization:")
        println("       granter: ${grant.granter}")
        println("       grantee: ${grant.grantee}")
        println("       authorization.typeUrl: ${grant.authorization.typeUrl}")
    }
    println("\n   pagination.total: ${response.pagination.total}")
    println("   typeUrl: /xion.indexer.authz.v1.QueryGranterGrantsResponse")
}

// =============================================================================
// QueryGranteeGrantsRequest / Response
// =============================================================================
// List all grants received by a specific grantee.
// Endpoint: GET /xion/indexer/authz/v1/grants/grantee/{grantee}
// Type URL: /xion.indexer.authz.v1.QueryGranteeGrantsRequest

fun queryGranteeGrantsExamples() {
    println("\n=== QueryGranteeGrants Examples ===\n")

    val request = queryGranteeGrantsRequest {
        grantee = "xion1grantee..."
        pagination = pageRequest {
            limit = 20
            countTotal = true
        }
    }

    println("1. Constructed QueryGranteeGrantsRequest:")
    println("   grantee: ${request.grantee}")
    println("   pagination.limit: ${request.pagination.limit}")
    println("   typeUrl: /xion.indexer.authz.v1.QueryGranteeGrantsRequest")

    val encodedRequest = request.toByteArray()
    println("\n2. Encoded request: ${encodedRequest.size} bytes")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryGranteeGrantsResponse.newBuilder()
        .addGrants(QueryOuterClass.GrantAuthorization.newBuilder()
            .setGranter("xion1granter1...")
            .setGrantee("xion1grantee...")
            .setAuthorization(Any.newBuilder()
                .setTypeUrl("/cosmos.authz.v1beta1.GenericAuthorization")
                .setValue(com.google.protobuf.ByteString.copyFrom(byteArrayOf(10, 30, 47, 99, 111, 115, 109, 111, 115)))
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
    println("   grants count: ${response.grantsCount}")
    response.grantsList.forEachIndexed { i, grant ->
        println("\n   [$i] GrantAuthorization:")
        println("       granter: ${grant.granter}")
        println("       grantee: ${grant.grantee}")
        println("       authorization.typeUrl: ${grant.authorization.typeUrl}")
    }
    println("\n   pagination.total: ${response.pagination.total}")
    println("   typeUrl: /xion.indexer.authz.v1.QueryGranteeGrantsResponse")
}

// =============================================================================
// Understanding Authz Grants
// =============================================================================

fun authzExplanation() {
    println("\n=== Understanding Authz Grants ===\n")

    println("Authz (Authorization) allows one account to act on behalf of another.\n")

    println("Key Concepts:\n")
    println("  1. Granter: The account giving permission")
    println("  2. Grantee: The account receiving permission")
    println("  3. Authorization: What actions are permitted\n")

    println("Common Authorization Types:\n")
    println("  • GenericAuthorization:")
    println("    Allows any message of a specific type\n")
    println("  • SendAuthorization:")
    println("    Allows sending up to a spend limit\n")
    println("  • StakeAuthorization:")
    println("    Allows staking operations (delegate, undelegate, redelegate)\n")

    println("Use Cases:\n")
    println("  • Fee grants: Let another account pay your fees")
    println("  • Automated staking: Let a bot manage your delegations")
    println("  • Multi-sig alternatives: Grant specific permissions to team members")
    println("  • Abstract accounts: Meta-transactions and gasless UX\n")

    println("Indexer vs Standard Authz:\n")
    println("  • This module provides OPTIMIZED QUERIES for grants")
    println("  • To CREATE grants, use: cosmos.authz.v1beta1.MsgGrant")
    println("  • To REVOKE grants, use: cosmos.authz.v1beta1.MsgRevoke")
    println("  • To EXECUTE with grant, use: cosmos.authz.v1beta1.MsgExec")
}

// =============================================================================
// Run All Examples
// =============================================================================

fun main() {
    println("╔════════════════════════════════════════════════════════════╗")
    println("║  xion.indexer.authz.v1 Query Messages — Protobuf Examples ║")
    println("╚════════════════════════════════════════════════════════════╝\n")

    queryGrantsExamples()
    queryGranterGrantsExamples()
    queryGranteeGrantsExamples()
    authzExplanation()

    println("\n═══════════════════════════════════════════════════════════════")
    println("Type URL Reference (Requests):")
    println("  QueryGrantsRequest:        /xion.indexer.authz.v1.QueryGrantsRequest")
    println("  QueryGranterGrantsRequest: /xion.indexer.authz.v1.QueryGranterGrantsRequest")
    println("  QueryGranteeGrantsRequest: /xion.indexer.authz.v1.QueryGranteeGrantsRequest")
    println("\nREST Endpoints:")
    println("  GET /xion/indexer/authz/v1/grants")
    println("  GET /xion/indexer/authz/v1/grants/granter/{granter}")
    println("  GET /xion/indexer/authz/v1/grants/grantee/{grantee}")
    println("\nNote: This is an indexer module (query-only).")
    println("Use cosmos.authz.v1beta1 for grant/revoke transactions.")
    println("═══════════════════════════════════════════════════════════════")
}
