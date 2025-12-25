/**
 * cosmwasm.wasm.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages for CosmWasm smart contracts.
 *
 * Queries covered:
 * - QuerySmartContractState: Execute a read-only query on a contract
 * - QueryContractInfo: Get contract metadata (code ID, admin, label)
 * - QueryContractsByCode: List all contracts using a specific code ID
 * - QueryRawContractState: Read raw storage by key
 */

package examples.kotlin

import cosmwasm.wasm.v1.QueryOuterClass
import cosmwasm.wasm.v1.querySmartContractStateRequest
import cosmwasm.wasm.v1.queryContractInfoRequest
import cosmwasm.wasm.v1.queryContractsByCodeRequest
import cosmwasm.wasm.v1.queryRawContractStateRequest

// =============================================================================
// QuerySmartContractState
// =============================================================================
// Execute a read-only query on a smart contract.
// Type URL: /cosmwasm.wasm.v1.QuerySmartContractStateRequest

fun querySmartContractStateExamples() {
    println("=== QuerySmartContractState Examples ===\n")

    // Example 1: CW20 Balance Query
    val balanceQuery = """
        {
            "balance": {
                "address": "xion1holder..."
            }
        }
    """.trimIndent()

    val balanceRequest = querySmartContractStateRequest {
        address = "xion1cw20tokencontract..."
        queryData = balanceQuery.toByteArray(Charsets.UTF_8)
    }

    println("1. CW20 Balance Query:")
    println("   contract: ${balanceRequest.address}")
    println("   query: ${String(balanceRequest.queryData.toByteArray(), Charsets.UTF_8)}")
    println("   typeUrl: /cosmwasm.wasm.v1.QuerySmartContractStateRequest")

    // Example 2: CW20 Token Info Query
    val tokenInfoQuery = """{"token_info": {}}"""

    val tokenInfoRequest = querySmartContractStateRequest {
        address = "xion1cw20tokencontract..."
        queryData = tokenInfoQuery.toByteArray(Charsets.UTF_8)
    }

    println("\n2. CW20 Token Info Query:")
    println("   query: ${String(tokenInfoRequest.queryData.toByteArray(), Charsets.UTF_8)}")

    // Example 3: CW721 NFT Owner Query
    val ownerOfQuery = """
        {
            "owner_of": {
                "token_id": "123",
                "include_expired": false
            }
        }
    """.trimIndent()

    val ownerRequest = querySmartContractStateRequest {
        address = "xion1nftcontract..."
        queryData = ownerOfQuery.toByteArray(Charsets.UTF_8)
    }

    println("\n3. CW721 Owner Of Query:")
    println("   query: ${String(ownerRequest.queryData.toByteArray(), Charsets.UTF_8)}")

    // Encoding
    val encodedRequest = balanceRequest.toByteArray()
    println("\n4. Encoded request: ${encodedRequest.size} bytes")

    // === Response ===
    println("\n--- Response ---")

    val balanceResponseData = """{"balance": "1000000"}"""
    val response = QueryOuterClass.QuerySmartContractStateResponse.newBuilder()
        .setData(com.google.protobuf.ByteString.copyFrom(balanceResponseData.toByteArray(Charsets.UTF_8)))
        .build()

    println("5. Constructed Response:")
    println("   data: ${String(response.data.toByteArray(), Charsets.UTF_8)}")
    println("   typeUrl: /cosmwasm.wasm.v1.QuerySmartContractStateResponse")
}

// =============================================================================
// QueryContractInfo
// =============================================================================
// Get contract metadata (code ID, admin, label).
// Type URL: /cosmwasm.wasm.v1.QueryContractInfoRequest

fun queryContractInfoExamples() {
    println("\n=== QueryContractInfo Examples ===\n")

    val request = queryContractInfoRequest {
        address = "xion1contractaddress..."
    }

    println("1. Constructed QueryContractInfoRequest:")
    println("   address: ${request.address}")
    println("   typeUrl: /cosmwasm.wasm.v1.QueryContractInfoRequest")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryContractInfoResponse.newBuilder()
        .setContractInfo(cosmwasm.wasm.v1.Types.ContractInfo.newBuilder()
            .setCodeId(123L)
            .setCreator("xion1creator...")
            .setAdmin("xion1admin...")
            .setLabel("My CW20 Token")
            .build())
        .build()

    println("2. Constructed Response:")
    println("   codeId: ${response.contractInfo.codeId}")
    println("   creator: ${response.contractInfo.creator}")
    println("   admin: ${response.contractInfo.admin}")
    println("   label: ${response.contractInfo.label}")
    println("   typeUrl: /cosmwasm.wasm.v1.QueryContractInfoResponse")
}

// =============================================================================
// QueryContractsByCode
// =============================================================================
// List all contracts using a specific code ID.
// Type URL: /cosmwasm.wasm.v1.QueryContractsByCodeRequest

fun queryContractsByCodeExamples() {
    println("\n=== QueryContractsByCode Examples ===\n")

    val request = queryContractsByCodeRequest {
        codeId = 123L
        pagination = cosmos.base.query.v1beta1.pageRequest {
            limit = 10
            countTotal = true
        }
    }

    println("1. Constructed QueryContractsByCodeRequest:")
    println("   codeId: ${request.codeId}")
    println("   pagination.limit: ${request.pagination.limit}")
    println("   typeUrl: /cosmwasm.wasm.v1.QueryContractsByCodeRequest")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryContractsByCodeResponse.newBuilder()
        .addContracts("xion1contract1...")
        .addContracts("xion1contract2...")
        .setPagination(cosmos.base.query.v1beta1.Pagination.PageResponse.newBuilder()
            .setTotal(2)
            .build())
        .build()

    println("2. Constructed Response:")
    println("   contracts count: ${response.contractsCount}")
    response.contractsList.forEachIndexed { i, addr ->
        println("   [$i] $addr")
    }
    println("   pagination.total: ${response.pagination.total}")
}

// =============================================================================
// QueryRawContractState
// =============================================================================
// Read raw storage by key.
// Type URL: /cosmwasm.wasm.v1.QueryRawContractStateRequest

fun queryRawContractStateExamples() {
    println("\n=== QueryRawContractState Examples ===\n")

    val request = queryRawContractStateRequest {
        address = "xion1contractaddress..."
        queryData = com.google.protobuf.ByteString.copyFrom(byteArrayOf(0x01, 0x02, 0x03))
    }

    println("1. Constructed QueryRawContractStateRequest:")
    println("   address: ${request.address}")
    println("   queryData length: ${request.queryData.size()} bytes")
    println("   typeUrl: /cosmwasm.wasm.v1.QueryRawContractStateRequest")

    // === Response ===
    println("\n--- Response ---")

    val response = QueryOuterClass.QueryRawContractStateResponse.newBuilder()
        .setData(com.google.protobuf.ByteString.copyFrom(byteArrayOf(0xAA, 0xBB, 0xCC)))
        .build()

    println("2. Constructed Response:")
    println("   data length: ${response.data.size()} bytes")
    println("   typeUrl: /cosmwasm.wasm.v1.QueryRawContractStateResponse")
}

// =============================================================================
// Run All Examples
// =============================================================================

fun main() {
    println("╔════════════════════════════════════════════════════════════╗")
    println("║  cosmwasm.wasm.v1 Query Messages — Protobuf Examples     ║")
    println("╚════════════════════════════════════════════════════════════╝\n")

    querySmartContractStateExamples()
    queryContractInfoExamples()
    queryContractsByCodeExamples()
    queryRawContractStateExamples()

    println("\n═══════════════════════════════════════════════════════════════")
    println("Type URL Reference:")
    println("  QuerySmartContractStateRequest: /cosmwasm.wasm.v1.QuerySmartContractStateRequest")
    println("  QueryContractInfoRequest:     /cosmwasm.wasm.v1.QueryContractInfoRequest")
    println("  QueryContractsByCodeRequest:   /cosmwasm.wasm.v1.QueryContractsByCodeRequest")
    println("  QueryRawContractStateRequest:  /cosmwasm.wasm.v1.QueryRawContractStateRequest")
    println("═══════════════════════════════════════════════════════════════")
}
