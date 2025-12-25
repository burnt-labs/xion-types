/**
 * xion.feeabs.v1beta1 Transaction Messages — SwiftProtobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * transaction messages from the Fee Abstraction Module (xion.feeabs.v1beta1).
 *
 * Messages covered:
 * - MsgFundFeeAbsModuleAccount: Fund the fee abstraction module
 * - MsgSendQueryIbcDenomTWAP: Query TWAP price from Osmosis
 * - MsgSwapCrossChain: Execute cross-chain swap for fee payment
 * - MsgUpdateParams: Update module parameters (governance)
 * - MsgAddHostZone: Add new host chain configuration (governance)
 * - MsgUpdateHostZone: Update host chain configuration (governance)
 * - MsgRemoveHostZone: Remove host chain configuration (governance)
 */

import Foundation
import SwiftProtobuf

enum FeeabsV1beta1TransactionExamples {
    
    // MARK: - Run All Examples
    
    static func runAll() {
        print("=== xion.feeabs.v1beta1 Transaction Messages ===\n")
        
        msgFundFeeAbsModuleAccountExamples()
        msgSendQueryIbcDenomTWAPExamples()
        msgSwapCrossChainExamples()
        msgUpdateParamsExamples()
        msgAddHostZoneExamples()
        msgUpdateHostZoneExamples()
        msgRemoveHostZoneExamples()
        
        printTypeURLReference()
    }
    
    // MARK: - MsgFundFeeAbsModuleAccount
    // Fund the fee abstraction module account with tokens.
    // Type URL: /xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount
    // Signer: sender
    
    static func msgFundFeeAbsModuleAccountExamples() {
        print("--- MsgFundFeeAbsModuleAccount Examples ---\n")
        
        var msg = Xion_Feeabs_V1beta1_MsgFundFeeAbsModuleAccount()
        msg.sender = "xion1sender..."
        msg.amount = [makeCoin(denom: "uxion", amount: "1000000000")] // 1000 XION
        
        print("1. Constructed MsgFundFeeAbsModuleAccount:")
        print("   sender: \(msg.sender)")
        print("   amount: \(msg.amount.map { "\($0.amount) \($0.denom)" })")
        print("   typeURL: \(Xion_Feeabs_V1beta1_MsgFundFeeAbsModuleAccount.protoMessageName)")
        
        do {
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgSendQueryIbcDenomTWAP
    // Query TWAP price from Osmosis.
    // Type URL: /xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP
    // Signer: sender
    
    static func msgSendQueryIbcDenomTWAPExamples() {
        print("--- MsgSendQueryIbcDenomTWAP Examples ---\n")
        
        var msg = Xion_Feeabs_V1beta1_MsgSendQueryIbcDenomTWAP()
        msg.sender = "xion1sender..."
        
        print("1. Constructed MsgSendQueryIbcDenomTWAP:")
        print("   sender: \(msg.sender)")
        print("   typeURL: \(Xion_Feeabs_V1beta1_MsgSendQueryIbcDenomTWAP.protoMessageName)")
        
        do {
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgSwapCrossChain
    // Execute cross-chain swap for fee payment.
    // Type URL: /xion.feeabs.v1beta1.MsgSwapCrossChain
    // Signer: sender
    
    static func msgSwapCrossChainExamples() {
        print("--- MsgSwapCrossChain Examples ---\n")
        
        var msg = Xion_Feeabs_V1beta1_MsgSwapCrossChain()
        msg.sender = "xion1sender..."
        msg.ibcDenom = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2" // ATOM
        
        print("1. Constructed MsgSwapCrossChain:")
        print("   sender: \(msg.sender)")
        print("   ibcDenom: \(String(msg.ibcDenom.prefix(30)))...")
        print("   typeURL: \(Xion_Feeabs_V1beta1_MsgSwapCrossChain.protoMessageName)")
        
        do {
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgUpdateParams
    // Update module parameters (governance).
    // Type URL: /xion.feeabs.v1beta1.MsgUpdateParams
    // Signer: authority (governance)
    
    static func msgUpdateParamsExamples() {
        print("--- MsgUpdateParams Examples ---\n")
        
        var params = Xion_Feeabs_V1beta1_Params()
        params.nativeIbcedInOsmosis = "ibc/XION..."
        params.osmosisQueryTwapPath = "/osmosis.twap.v1beta1.Query/ArithmeticTwapToNow"
        params.chainName = "xion"
        params.ibcTransferChannel = "channel-0"
        params.ibcQueryIcqChannel = "channel-1"
        params.osmosisCrosschainSwapAddress = "osmo1crosschainswap..."
        
        var msg = Xion_Feeabs_V1beta1_MsgUpdateParams()
        msg.authority = "xion1governance..."
        msg.params = params
        
        print("1. Constructed MsgUpdateParams:")
        print("   authority: \(msg.authority)")
        print("   params.chainName: \(msg.params.chainName)")
        print("   params.ibcTransferChannel: \(msg.params.ibcTransferChannel)")
        print("   typeURL: \(Xion_Feeabs_V1beta1_MsgUpdateParams.protoMessageName)")
        
        do {
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgAddHostZone
    // Add new host chain configuration (governance).
    // Type URL: /xion.feeabs.v1beta1.MsgAddHostZone
    // Signer: authority (governance)
    
    static func msgAddHostZoneExamples() {
        print("--- MsgAddHostZone Examples ---\n")
        
        var config = Xion_Feeabs_V1beta1_HostChainFeeAbsConfig()
        config.ibcDenom = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
        config.osmosisPoolTokenDenomIn = "uosmo"
        config.poolID = 1
        config.status = .updated
        
        var msg = Xion_Feeabs_V1beta1_MsgAddHostZone()
        msg.authority = "xion1governance..."
        msg.hostChainConfig = config
        
        print("1. Constructed MsgAddHostZone:")
        print("   authority: \(msg.authority)")
        print("   hostChainConfig.poolID: \(msg.hostChainConfig.poolID)")
        print("   hostChainConfig.status: \(msg.hostChainConfig.status)")
        print("   typeURL: \(Xion_Feeabs_V1beta1_MsgAddHostZone.protoMessageName)")
        
        do {
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgUpdateHostZone
    // Update host chain configuration (governance).
    // Type URL: /xion.feeabs.v1beta1.MsgUpdateHostZone
    // Signer: authority (governance)
    
    static func msgUpdateHostZoneExamples() {
        print("--- MsgUpdateHostZone Examples ---\n")
        
        var config = Xion_Feeabs_V1beta1_HostChainFeeAbsConfig()
        config.ibcDenom = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
        config.osmosisPoolTokenDenomIn = "uosmo"
        config.poolID = 2 // Updated pool ID
        config.status = .updated
        
        var msg = Xion_Feeabs_V1beta1_MsgUpdateHostZone()
        msg.authority = "xion1governance..."
        msg.hostChainConfig = config
        
        print("1. Constructed MsgUpdateHostZone:")
        print("   authority: \(msg.authority)")
        print("   hostChainConfig.poolID: \(msg.hostChainConfig.poolID)")
        print("   typeURL: \(Xion_Feeabs_V1beta1_MsgUpdateHostZone.protoMessageName)")
        
        do {
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - MsgRemoveHostZone
    // Remove host chain configuration (governance).
    // Type URL: /xion.feeabs.v1beta1.MsgRemoveHostZone
    // Signer: authority (governance)
    
    static func msgRemoveHostZoneExamples() {
        print("--- MsgRemoveHostZone Examples ---\n")
        
        var msg = Xion_Feeabs_V1beta1_MsgRemoveHostZone()
        msg.authority = "xion1governance..."
        msg.ibcDenom = "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
        
        print("1. Constructed MsgRemoveHostZone:")
        print("   authority: \(msg.authority)")
        print("   ibcDenom: \(String(msg.ibcDenom.prefix(30)))...")
        print("   typeURL: \(Xion_Feeabs_V1beta1_MsgRemoveHostZone.protoMessageName)")
        
        do {
            let encodedBytes = try msg.serializedData()
            print("\n2. Encoded: \(encodedBytes.count) bytes")
        } catch {
            print("Error: \(error)")
        }
        
        print()
    }
    
    // MARK: - Helpers
    
    static func makeCoin(denom: String, amount: String) -> Cosmos_Base_V1beta1_Coin {
        var coin = Cosmos_Base_V1beta1_Coin()
        coin.denom = denom
        coin.amount = amount
        return coin
    }
    
    // MARK: - Type URL Reference
    
    static func printTypeURLReference() {
        print("═══════════════════════════════════════════════════════════════")
        print("Type URL Reference (xion.feeabs.v1beta1):")
        print("  MsgFundFeeAbsModuleAccount: /\(Xion_Feeabs_V1beta1_MsgFundFeeAbsModuleAccount.protoMessageName)")
        print("  MsgSendQueryIbcDenomTWAP:   /\(Xion_Feeabs_V1beta1_MsgSendQueryIbcDenomTWAP.protoMessageName)")
        print("  MsgSwapCrossChain:          /\(Xion_Feeabs_V1beta1_MsgSwapCrossChain.protoMessageName)")
        print("  MsgUpdateParams:            /\(Xion_Feeabs_V1beta1_MsgUpdateParams.protoMessageName)")
        print("  MsgAddHostZone:             /\(Xion_Feeabs_V1beta1_MsgAddHostZone.protoMessageName)")
        print("  MsgUpdateHostZone:          /\(Xion_Feeabs_V1beta1_MsgUpdateHostZone.protoMessageName)")
        print("  MsgRemoveHostZone:          /\(Xion_Feeabs_V1beta1_MsgRemoveHostZone.protoMessageName)")
        print("═══════════════════════════════════════════════════════════════\n")
    }
}

