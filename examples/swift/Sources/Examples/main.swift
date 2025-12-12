/**
 * Xion Types Swift Examples
 *
 * This executable demonstrates how to use the generated SwiftProtobuf types
 * for Xion blockchain messages.
 *
 * Run with: swift run XionTypesExamples
 */

import Foundation
import SwiftProtobuf
import XionTypes

// Run all examples
func main() {
    print("╔════════════════════════════════════════════════════════════╗")
    print("║  Xion Types Swift Examples                                 ║")
    print("╚════════════════════════════════════════════════════════════╝\n")
    
    // CosmWasm contract messages
    CosmWasmTransactionExamples.runAll()
    CosmWasmQueryExamples.runAll()
    
    // Core Xion messages
    XionV1TransactionExamples.runAll()
    XionV1QueryExamples.runAll()
    
    // JWK module (JWT/OIDC authentication)
    JwkV1TransactionExamples.runAll()
    JwkV1QueryExamples.runAll()
    
    // Fee Abstraction module
    FeeabsV1beta1TransactionExamples.runAll()
    FeeabsV1beta1QueryExamples.runAll()
    
    // Mint module
    MintV1TransactionExamples.runAll()
    MintV1QueryExamples.runAll()
    
    // Global Fee module
    GlobalfeeV1QueryExamples.runAll()
    
    // Indexer modules
    IndexerAuthzV1QueryExamples.runAll()
    IndexerFeegrantV1QueryExamples.runAll()
    
    print("\n═══════════════════════════════════════════════════════════════")
    print("All examples completed successfully!")
    print("═══════════════════════════════════════════════════════════════")
}

main()

