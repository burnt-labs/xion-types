/**
 * xion.v1 Query Messages — SwiftProtobuf Examples
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

import Foundation
import SwiftProtobuf

enum XionV1QueryExamples {
    
    // MARK: - Run All Examples
    
    static func runAll() {
        print("=== xion.v1 Query Messages ===\n")
        
        queryWebAuthNVerifyRegisterExamples()
        queryWebAuthNVerifyAuthenticateExamples()
        queryPlatformPercentageExamples()
        queryPlatformMinimumExamples()
        bytesExamples()
        
        printTypeURLReference()
    }
    
    // MARK: - QueryWebAuthNVerifyRegister
    // Verify a WebAuthN registration credential.
    // Type URL: /xion.v1.QueryWebAuthNVerifyRegisterRequest
    
    static func queryWebAuthNVerifyRegisterExamples() {
        print("--- QueryWebAuthNVerifyRegister Examples ---\n")
        
        // 1. Construct request
        var request = Xion_V1_QueryWebAuthNVerifyRegisterRequest()
        request.addr = "xion1user..."
        request.challenge = "random-challenge-string-from-server"
        request.rp = "your-app.example.com" // Relying Party ID
        request.data = Data([0x01, 0x02, 0x03, 0x04]) // WebAuthN attestation data
        
        print("1. Constructed QueryWebAuthNVerifyRegisterRequest:")
        print("   addr: \(request.addr)")
        print("   challenge: \(request.challenge)")
        print("   rp: \(request.rp)")
        print("   data length: \(request.data.count) bytes")
        print("   typeURL: \(Xion_V1_QueryWebAuthNVerifyRegisterRequest.protoMessageName)")
        
        // 2. Encode request
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
            
            // 3. Decode request
            let decodedRequest = try Xion_V1_QueryWebAuthNVerifyRegisterRequest(serializedData: encodedRequest)
            print("\n3. Decoded addr: \(decodedRequest.addr)")
            print("   Decoded challenge: \(decodedRequest.challenge)")
            
        } catch {
            print("Error: \(error)")
        }
        
        // Response example
        print("\n--- Response ---")
        
        var response = Xion_V1_QueryWebAuthNVerifyRegisterResponse()
        response.credential = Data([0xAA, 0xBB, 0xCC, 0xDD]) // WebAuthN credential
        
        print("4. Constructed Response:")
        print("   credential length: \(response.credential.count) bytes")
        print("   typeURL: \(Xion_V1_QueryWebAuthNVerifyRegisterResponse.protoMessageName)")
        
        print()
    }
    
    // MARK: - QueryWebAuthNVerifyAuthenticate
    // Verify a WebAuthN authentication assertion.
    // Type URL: /xion.v1.QueryWebAuthNVerifyAuthenticateRequest
    
    static func queryWebAuthNVerifyAuthenticateExamples() {
        print("--- QueryWebAuthNVerifyAuthenticate Examples ---\n")
        
        // 1. Construct request
        var request = Xion_V1_QueryWebAuthNVerifyAuthenticateRequest()
        request.addr = "xion1user..."
        request.challenge = "random-challenge-string"
        request.rp = "your-app.example.com"
        request.credential = Data([0xAA, 0xBB, 0xCC, 0xDD]) // Stored credential
        request.data = Data([0x01, 0x02, 0x03, 0x04]) // Authenticator assertion data
        
        print("1. Constructed QueryWebAuthNVerifyAuthenticateRequest:")
        print("   addr: \(request.addr)")
        print("   challenge: \(request.challenge)")
        print("   rp: \(request.rp)")
        print("   credential length: \(request.credential.count) bytes")
        print("   data length: \(request.data.count) bytes")
        print("   typeURL: \(Xion_V1_QueryWebAuthNVerifyAuthenticateRequest.protoMessageName)")
        
        // 2. Encode
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
            
            // 3. Decode
            let decodedRequest = try Xion_V1_QueryWebAuthNVerifyAuthenticateRequest(serializedData: encodedRequest)
            print("\n3. Decoded addr: \(decodedRequest.addr)")
            
        } catch {
            print("Error: \(error)")
        }
        
        // Response (empty = success)
        print("\n--- Response ---")
        let response = Xion_V1_QueryWebAuthNVerifyAuthenticateResponse()
        print("4. Constructed Response (empty = success):")
        print("   typeURL: \(Xion_V1_QueryWebAuthNVerifyAuthenticateResponse.protoMessageName)")
        
        print()
    }
    
    // MARK: - QueryPlatformPercentage
    // Get the current platform fee percentage.
    // Type URL: /xion.v1.QueryPlatformPercentageRequest
    
    static func queryPlatformPercentageExamples() {
        print("--- QueryPlatformPercentage Examples ---\n")
        
        // 1. Construct request (no parameters needed)
        let request = Xion_V1_QueryPlatformPercentageRequest()
        
        print("1. Constructed QueryPlatformPercentageRequest:")
        print("   (no parameters)")
        print("   typeURL: \(Xion_V1_QueryPlatformPercentageRequest.protoMessageName)")
        
        // 2. Encode request
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
            
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        
        // Construct response (typically received from chain)
        // platformPercentage is multiplied by 10000
        var response = Xion_V1_QueryPlatformPercentageResponse()
        response.platformPercentage = 500 // 5% = 500/10000
        
        print("3. Constructed Response:")
        print("   platformPercentage (raw): \(response.platformPercentage)")
        print("   platformPercentage (%): \(Double(response.platformPercentage) / 100)%")
        print("   typeURL: \(Xion_V1_QueryPlatformPercentageResponse.protoMessageName)")
        
        do {
            let encodedResponse = try response.serializedData()
            let decodedResponse = try Xion_V1_QueryPlatformPercentageResponse(serializedData: encodedResponse)
            print("\n4. Decoded platformPercentage: \(decodedResponse.platformPercentage)")
            
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - QueryPlatformMinimum
    // Get the current minimum platform fees.
    // Type URL: /xion.v1.QueryPlatformMinimumRequest
    
    static func queryPlatformMinimumExamples() {
        print("--- QueryPlatformMinimum Examples ---\n")
        
        // 1. Construct request (no parameters needed)
        let request = Xion_V1_QueryPlatformMinimumRequest()
        
        print("1. Constructed QueryPlatformMinimumRequest:")
        print("   (no parameters)")
        print("   typeURL: \(Xion_V1_QueryPlatformMinimumRequest.protoMessageName)")
        
        // 2. Encode request
        do {
            let encodedRequest = try request.serializedData()
            print("\n2. Encoded request: \(encodedRequest.count) bytes")
            
        } catch {
            print("Error: \(error)")
        }
        
        // Response
        print("\n--- Response ---")
        
        var response = Xion_V1_QueryPlatformMinimumResponse()
        response.minimums = [
            makeCoin(denom: "uxion", amount: "1000"),
            makeCoin(denom: "uatom", amount: "500"),
        ]
        
        print("3. Constructed Response:")
        print("   minimums:")
        for m in response.minimums {
            print("     - \(m.amount) \(m.denom)")
        }
        print("   typeURL: \(Xion_V1_QueryPlatformMinimumResponse.protoMessageName)")
        
        do {
            let encodedResponse = try response.serializedData()
            let decodedResponse = try Xion_V1_QueryPlatformMinimumResponse(serializedData: encodedResponse)
            print("\n4. Decoded minimums count: \(decodedResponse.minimums.count)")
            
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - Working with Data (bytes)
    
    static func bytesExamples() {
        print("--- Working with Data (bytes) ---\n")
        
        // 1. Create from array of bytes
        let data1 = Data([0x01, 0x02, 0x03, 0x04])
        print("1. From array: \(data1.map { String(format: "%02x", $0) }.joined())")
        
        // 2. Create from string
        let data2 = "hello".data(using: .utf8)!
        print("2. From string: \(data2.map { String(format: "%02x", $0) }.joined())")
        
        // 3. Create from base64
        let base64 = "AQIDBA==" // [1, 2, 3, 4]
        let data3 = Data(base64Encoded: base64)!
        print("3. From base64: \(data3.map { String(format: "%02x", $0) }.joined())")
        
        // 4. Convert to base64
        let toBase64 = data1.base64EncodedString()
        print("4. To base64: \(toBase64)")
        
        // 5. Convert to hex
        let toHex = data1.map { String(format: "%02x", $0) }.joined()
        print("5. To hex: \(toHex)")
        
        // 6. Create from hex
        let hexString = "01020304"
        var data4 = Data()
        var index = hexString.startIndex
        while index < hexString.endIndex {
            let nextIndex = hexString.index(index, offsetBy: 2)
            if let byte = UInt8(hexString[index..<nextIndex], radix: 16) {
                data4.append(byte)
            }
            index = nextIndex
        }
        print("6. From hex: \(data4.map { String(format: "%02x", $0) }.joined())")
        
        print()
    }
    
    // MARK: - Helpers
    
    static func makeCoin(denom: String, amount: String) -> Cosmos_Base_V1beta1_Coin {
        var coin = Cosmos_Base_V1beta1_Coin()
        coin.denom = denom
        coin.amount = amount
        return coin
    }
    
    static func printTypeURLReference() {
        print("═══════════════════════════════════════════════════════════════")
        print("Type URL Reference (xion.v1 Queries):")
        print("  QueryWebAuthNVerifyRegisterRequest:     /\(Xion_V1_QueryWebAuthNVerifyRegisterRequest.protoMessageName)")
        print("  QueryWebAuthNVerifyAuthenticateRequest: /\(Xion_V1_QueryWebAuthNVerifyAuthenticateRequest.protoMessageName)")
        print("  QueryPlatformPercentageRequest:         /\(Xion_V1_QueryPlatformPercentageRequest.protoMessageName)")
        print("  QueryPlatformMinimumRequest:            /\(Xion_V1_QueryPlatformMinimumRequest.protoMessageName)")
        print("═══════════════════════════════════════════════════════════════\n")
    }
}

