/**
 * cosmwasm.wasm.v1 Query Messages — SwiftProtobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages for CosmWasm smart contracts.
 *
 * Queries covered:
 * - QuerySmartContractState: Execute a read-only query on a contract
 * - QueryContractInfo: Get contract metadata (code ID, admin, label)
 * - QueryContractsByCode: List all contracts using a specific code ID
 * - QueryRawContractState: Read raw storage by key
 * - QueryContractHistory: Get contract's code migration history
 *
 * Common use cases:
 * - Querying CW20 token balances
 * - Getting NFT metadata and ownership
 * - Reading contract configuration
 */

import Foundation
import SwiftProtobuf

enum CosmWasmQueryExamples {
    
    // MARK: - Run All Examples
    
    static func runAll() {
        print("=== cosmwasm.wasm.v1 Query Messages ===\n")
        
        querySmartContractStateExamples()
        queryContractInfoExamples()
        queryContractsByCodeExamples()
        queryRawContractStateExamples()
        queryContractHistoryExamples()
        commonQueryPatterns()
        
        printTypeURLReference()
    }
    
    // MARK: - QuerySmartContractState
    // Execute a read-only query on a smart contract.
    // This is the most common way to read contract state.
    // Type URL: /cosmwasm.wasm.v1.QuerySmartContractStateRequest
    
    static func querySmartContractStateExamples() {
        print("--- QuerySmartContractState Examples ---\n")
        
        // Example 1: CW20 Balance Query
        let balanceQuery: [String: Any] = [
            "balance": ["address": "xion1holder..."]
        ]
        
        var balanceRequest = Cosmwasm_Wasm_V1_QuerySmartContractStateRequest()
        balanceRequest.address = "xion1cw20tokencontract..."
        balanceRequest.queryData = jsonToData(balanceQuery)
        
        print("1. CW20 Balance Query:")
        print("   contract: \(balanceRequest.address)")
        print("   query: \(dataToJsonString(balanceRequest.queryData))")
        print("   typeURL: \(Cosmwasm_Wasm_V1_QuerySmartContractStateRequest.protoMessageName)")
        
        // Example 2: CW20 Token Info Query
        let tokenInfoQuery: [String: Any] = ["token_info": [:]]
        
        var tokenInfoRequest = Cosmwasm_Wasm_V1_QuerySmartContractStateRequest()
        tokenInfoRequest.address = "xion1cw20tokencontract..."
        tokenInfoRequest.queryData = jsonToData(tokenInfoQuery)
        
        print("\n2. CW20 Token Info Query:")
        print("   query: \(dataToJsonString(tokenInfoRequest.queryData))")
        
        // Example 3: CW721 NFT Owner Query
        let ownerOfQuery: [String: Any] = [
            "owner_of": [
                "token_id": "123",
                "include_expired": false
            ]
        ]
        
        var ownerRequest = Cosmwasm_Wasm_V1_QuerySmartContractStateRequest()
        ownerRequest.address = "xion1nftcontract..."
        ownerRequest.queryData = jsonToData(ownerOfQuery)
        
        print("\n3. CW721 Owner Of Query:")
        print("   query: \(dataToJsonString(ownerRequest.queryData))")
        
        // Example 4: CW721 NFT Info Query
        let nftInfoQuery: [String: Any] = [
            "nft_info": ["token_id": "123"]
        ]
        
        var nftInfoRequest = Cosmwasm_Wasm_V1_QuerySmartContractStateRequest()
        nftInfoRequest.address = "xion1nftcontract..."
        nftInfoRequest.queryData = jsonToData(nftInfoQuery)
        
        print("\n4. CW721 NFT Info Query:")
        print("   query: \(dataToJsonString(nftInfoRequest.queryData))")
        
        // Encoding/Decoding
        print("\n--- Encoding/Decoding ---")
        
        do {
            // 5. Encode request
            let encodedRequest = try balanceRequest.serializedData()
            print("\n5. Encoded request: \(encodedRequest.count) bytes")
            
            // 6. Decode request
            let decodedRequest = try Cosmwasm_Wasm_V1_QuerySmartContractStateRequest(serializedData: encodedRequest)
            print("\n6. Decoded:")
            print("   address: \(decodedRequest.address)")
            print("   query: \(dataToJsonString(decodedRequest.queryData))")
            
        } catch {
            print("Error: \(error)")
        }
        
        // Response handling
        print("\n--- Response ---")
        
        // Simulated response (balance query returns { "balance": "1000000" })
        let balanceResponseData: [String: Any] = ["balance": "1000000"]
        var response = Cosmwasm_Wasm_V1_QuerySmartContractStateResponse()
        response.data = jsonToData(balanceResponseData)
        
        print("7. Constructed Response:")
        print("   data: \(dataToJsonString(response.data))")
        print("   typeURL: \(Cosmwasm_Wasm_V1_QuerySmartContractStateResponse.protoMessageName)")
        
        do {
            let encodedResponse = try response.serializedData()
            let decodedResponse = try Cosmwasm_Wasm_V1_QuerySmartContractStateResponse(serializedData: encodedResponse)
            print("\n8. Decoded response: \(dataToJsonString(decodedResponse.data))")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - QueryContractInfo
    // Get metadata about a deployed contract.
    // Type URL: /cosmwasm.wasm.v1.QueryContractInfoRequest
    
    static func queryContractInfoExamples() {
        print("--- QueryContractInfo Examples ---\n")
        
        // 1. Construct request
        var request = Cosmwasm_Wasm_V1_QueryContractInfoRequest()
        request.address = "xion1contractaddress..."
        
        print("1. Constructed QueryContractInfoRequest:")
        print("   address: \(request.address)")
        print("   typeURL: \(Cosmwasm_Wasm_V1_QueryContractInfoRequest.protoMessageName)")
        
        do {
            // 2. Encode
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
            
            // 3. Decode
            let decodedRequest = try Cosmwasm_Wasm_V1_QueryContractInfoRequest(serializedData: encodedRequest)
            print("\n3. Decoded address: \(decodedRequest.address)")
            
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        
        // The response contains ContractInfo with:
        // - codeId: The code ID this contract was instantiated from
        // - creator: Address that instantiated the contract
        // - admin: Address that can migrate the contract (empty = immutable)
        // - label: Human-readable label
        
        var contractInfo = Cosmwasm_Wasm_V1_ContractInfo()
        contractInfo.codeID = 123
        contractInfo.creator = "xion1creator..."
        contractInfo.admin = "xion1admin..."
        contractInfo.label = "My Token Contract"
        
        var response = Cosmwasm_Wasm_V1_QueryContractInfoResponse()
        response.address = "xion1contractaddress..."
        response.contractInfo = contractInfo
        
        print("4. Constructed Response:")
        print("   address: \(response.address)")
        print("   codeID: \(response.contractInfo.codeID)")
        print("   creator: \(response.contractInfo.creator)")
        print("   admin: \(response.contractInfo.admin.isEmpty ? "(none - immutable)" : response.contractInfo.admin)")
        print("   label: \(response.contractInfo.label)")
        print("   typeURL: \(Cosmwasm_Wasm_V1_QueryContractInfoResponse.protoMessageName)")
        
        print()
    }
    
    // MARK: - QueryContractsByCode
    // List all contract instances created from a specific code ID.
    // Type URL: /cosmwasm.wasm.v1.QueryContractsByCodeRequest
    
    static func queryContractsByCodeExamples() {
        print("--- QueryContractsByCode Examples ---\n")
        
        // 1. Construct request (with pagination)
        var request = Cosmwasm_Wasm_V1_QueryContractsByCodeRequest()
        request.codeID = 123
        
        var pagination = Cosmos_Base_Query_V1beta1_PageRequest()
        pagination.limit = 10
        pagination.offset = 0
        pagination.countTotal = true
        request.pagination = pagination
        
        print("1. Constructed QueryContractsByCodeRequest:")
        print("   codeID: \(request.codeID)")
        print("   pagination limit: \(request.pagination.limit)")
        print("   typeURL: \(Cosmwasm_Wasm_V1_QueryContractsByCodeRequest.protoMessageName)")
        
        do {
            // 2. Encode
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
            
        } catch {
            print("Error: \(error)")
        }
        
        // 3. Request without pagination
        var simpleRequest = Cosmwasm_Wasm_V1_QueryContractsByCodeRequest()
        simpleRequest.codeID = 123
        print("\n3. Simple request (no pagination):")
        print("   codeID: \(simpleRequest.codeID)")
        
        // Response
        print("\n--- Response ---")
        
        var response = Cosmwasm_Wasm_V1_QueryContractsByCodeResponse()
        response.contracts = [
            "xion1contract1...",
            "xion1contract2...",
            "xion1contract3..."
        ]
        
        var paginationResponse = Cosmos_Base_Query_V1beta1_PageResponse()
        paginationResponse.total = 3
        response.pagination = paginationResponse
        
        print("4. Constructed Response:")
        print("   contracts: \(response.contracts)")
        print("   total: \(response.pagination.total)")
        print("   typeURL: \(Cosmwasm_Wasm_V1_QueryContractsByCodeResponse.protoMessageName)")
        
        print()
    }
    
    // MARK: - QueryRawContractState
    // Read raw contract storage by key.
    // Type URL: /cosmwasm.wasm.v1.QueryRawContractStateRequest
    
    static func queryRawContractStateExamples() {
        print("--- QueryRawContractState Examples ---\n")
        
        // 1. Query raw storage by key
        var request = Cosmwasm_Wasm_V1_QueryRawContractStateRequest()
        request.address = "xion1contractaddress..."
        request.queryData = "config".data(using: .utf8)! // Storage key
        
        print("1. Constructed QueryRawContractStateRequest:")
        print("   address: \(request.address)")
        print("   key: \(String(data: request.queryData, encoding: .utf8) ?? "")")
        print("   typeURL: \(Cosmwasm_Wasm_V1_QueryRawContractStateRequest.protoMessageName)")
        
        do {
            // 2. Encode
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
            
        } catch {
            print("Error: \(error)")
        }
        
        // 3. Query with hex key (for map lookups)
        var mapRequest = Cosmwasm_Wasm_V1_QueryRawContractStateRequest()
        mapRequest.address = "xion1contractaddress..."
        mapRequest.queryData = Data([0x00, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e]) // Length-prefixed "token"
        print("\n3. Map query with hex key: \(mapRequest.queryData.map { String(format: "%02x", $0) }.joined())")
        
        // Response
        print("\n--- Response ---")
        
        let configData: [String: Any] = ["owner": "xion1owner...", "paused": false]
        var response = Cosmwasm_Wasm_V1_QueryRawContractStateResponse()
        response.data = jsonToData(configData)
        
        print("4. Constructed Response:")
        print("   data: \(dataToJsonString(response.data))")
        print("   typeURL: \(Cosmwasm_Wasm_V1_QueryRawContractStateResponse.protoMessageName)")
        
        print()
    }
    
    // MARK: - QueryContractHistory
    // Get the code migration history of a contract.
    // Type URL: /cosmwasm.wasm.v1.QueryContractHistoryRequest
    
    static func queryContractHistoryExamples() {
        print("--- QueryContractHistory Examples ---\n")
        
        // 1. Construct request
        var request = Cosmwasm_Wasm_V1_QueryContractHistoryRequest()
        request.address = "xion1contractaddress..."
        
        var pagination = Cosmos_Base_Query_V1beta1_PageRequest()
        pagination.limit = 10
        request.pagination = pagination
        
        print("1. Constructed QueryContractHistoryRequest:")
        print("   address: \(request.address)")
        print("   typeURL: \(Cosmwasm_Wasm_V1_QueryContractHistoryRequest.protoMessageName)")
        
        do {
            // 2. Encode
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
            
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        
        // History entries show each code change (instantiate, migrate)
        // ContractCodeHistoryOperationType: init = 1, migrate = 2, genesis = 3
        
        var entry1 = Cosmwasm_Wasm_V1_ContractCodeHistoryEntry()
        entry1.operation = .init_ // CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT
        entry1.codeID = 100
        entry1.msg = jsonToData(["name": "Token v1"])
        
        var entry2 = Cosmwasm_Wasm_V1_ContractCodeHistoryEntry()
        entry2.operation = .migrate // CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE
        entry2.codeID = 123
        entry2.msg = jsonToData(["migrate_version": "2.0"])
        
        var response = Cosmwasm_Wasm_V1_QueryContractHistoryResponse()
        response.entries = [entry1, entry2]
        
        var paginationResponse = Cosmos_Base_Query_V1beta1_PageResponse()
        paginationResponse.total = 2
        response.pagination = paginationResponse
        
        print("3. Constructed Response:")
        print("   entries: \(response.entries.count)")
        for (i, entry) in response.entries.enumerated() {
            let opName: String
            switch entry.operation {
            case .init_: opName = "INIT"
            case .migrate: opName = "MIGRATE"
            case .genesis: opName = "GENESIS"
            default: opName = "UNKNOWN"
            }
            print("   Entry \(i): \(opName) -> codeID \(entry.codeID)")
        }
        print("   typeURL: \(Cosmwasm_Wasm_V1_QueryContractHistoryResponse.protoMessageName)")
        
        print()
    }
    
    // MARK: - Common Contract Query Patterns
    
    static func commonQueryPatterns() {
        print("--- Common Contract Query Patterns ---\n")
        
        // CW20 queries
        print("1. CW20 query types:")
        print("   - { \"balance\": { \"address\": \"xion1...\" } }")
        print("   - { \"token_info\": {} }")
        print("   - { \"minter\": {} }")
        print("   - { \"allowance\": { \"owner\": \"...\", \"spender\": \"...\" } }")
        print("   - { \"all_allowances\": { \"owner\": \"...\" } }")
        print("   - { \"all_accounts\": {} }")
        
        // CW721 queries
        print("\n2. CW721 query types:")
        print("   - { \"owner_of\": { \"token_id\": \"1\" } }")
        print("   - { \"nft_info\": { \"token_id\": \"1\" } }")
        print("   - { \"all_nft_info\": { \"token_id\": \"1\" } }")
        print("   - { \"tokens\": { \"owner\": \"xion1...\" } }")
        print("   - { \"all_tokens\": {} }")
        print("   - { \"contract_info\": {} }")
        print("   - { \"num_tokens\": {} }")
        
        // Generic patterns
        print("\n3. Generic patterns:")
        print("   - { \"config\": {} } - Get contract configuration")
        print("   - { \"state\": {} } - Get contract state")
        print("   - { \"info\": {} } - Get contract info")
        print("   - { \"get_xxx\": { \"key\": \"value\" } } - Get specific item")
        print("   - { \"list_xxx\": { \"start_after\": \"...\", \"limit\": 10 } } - Paginated list")
        
        print()
    }
    
    // MARK: - Helpers
    
    static func jsonToData(_ dict: [String: Any]) -> Data {
        do {
            return try JSONSerialization.data(withJSONObject: dict, options: [.sortedKeys])
        } catch {
            return Data()
        }
    }
    
    static func dataToJsonString(_ data: Data) -> String {
        return String(data: data, encoding: .utf8) ?? "{}"
    }
    
    static func printTypeURLReference() {
        print("═══════════════════════════════════════════════════════════════")
        print("Type URL Reference (cosmwasm.wasm.v1 Queries):")
        print("  QuerySmartContractStateRequest: /\(Cosmwasm_Wasm_V1_QuerySmartContractStateRequest.protoMessageName)")
        print("  QueryContractInfoRequest:       /\(Cosmwasm_Wasm_V1_QueryContractInfoRequest.protoMessageName)")
        print("  QueryContractsByCodeRequest:    /\(Cosmwasm_Wasm_V1_QueryContractsByCodeRequest.protoMessageName)")
        print("  QueryRawContractStateRequest:   /\(Cosmwasm_Wasm_V1_QueryRawContractStateRequest.protoMessageName)")
        print("  QueryContractHistoryRequest:    /\(Cosmwasm_Wasm_V1_QueryContractHistoryRequest.protoMessageName)")
        print("═══════════════════════════════════════════════════════════════\n")
    }
}

