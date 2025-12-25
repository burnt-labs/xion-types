# Xion Protobuf Modules & Messages

This document catalogs all protobuf modules in the Xion blockchain, their transaction messages, query messages, and data types.

---

## Table of Contents

1. [xion.v1 — Core Xion Module](#xionv1--core-xion-module)
2. [xion.jwk.v1 — JSON Web Key Module](#xionjwkv1--json-web-key-module)
3. [xion.mint.v1 — Minting Module](#xionmintv1--minting-module)
4. [xion.feeabs.v1beta1 — Fee Abstraction Module](#xionfeeabsv1beta1--fee-abstraction-module)
5. [xion.globalfee.v1 — Global Fee Module](#xionglobalfeev1--global-fee-module)
6. [xion.indexer.authz.v1 — Authz Indexer](#xionindexerauthzv1--authz-indexer)
7. [xion.indexer.feegrant.v1 — Feegrant Indexer](#xionindexerfeegrantv1--feegrant-indexer)

---

## xion.v1 — Core Xion Module

Token transfers, platform fees, WebAuthN verification

### Transaction Messages (Msg Service)

| Message | Signer | Description |
|---------|--------|-------------|
| `MsgSend` | `from_address` | Send coins from one address to another |
| `MsgMultiSend` | `inputs` | Multi-input, multi-output send |
| `MsgSetPlatformPercentage` | `authority` | Set platform percentage fee (governance) |
| `MsgSetPlatformMinimum` | `authority` | Set minimum platform fees (governance) |

### Query Messages

| RPC | Request | Response | Description |
|-----|---------|----------|-------------|
| `WebAuthNVerifyRegister` | `QueryWebAuthNVerifyRegisterRequest` | `QueryWebAuthNVerifyRegisterResponse` | Verify WebAuthN registration |
| `WebAuthNVerifyAuthenticate` | `QueryWebAuthNVerifyAuthenticateRequest` | `QueryWebAuthNVerifyAuthenticateResponse` | Verify WebAuthN authentication |
| `PlatformPercentage` | `QueryPlatformPercentageRequest` | `QueryPlatformPercentageResponse` | Get platform fee percentage |
| `PlatformMinimum` | `QueryPlatformMinimumRequest` | `QueryPlatformMinimumResponse` | Get platform minimum fees |

### Data Types

| Message | Description |
|---------|-------------|
| `GenesisState` | Initial module state (platform_percentage, platform_minimums) |
| `AuthzAllowance` | Fee allowance restricted to authz grantees |
| `ContractsAllowance` | Fee allowance restricted to specific contract addresses |
| `MultiAnyAllowance` | Composite allowance that passes if any child allowance passes |

### Message Details

#### MsgSend
```protobuf
message MsgSend {
  string from_address = 1;  // Sender address
  string to_address = 2;    // Recipient address
  repeated Coin amount = 3; // Coins to send
}
```

#### MsgSetPlatformPercentage
```protobuf
message MsgSetPlatformPercentage {
  string authority = 1;          // Governance address
  uint32 platform_percentage = 2; // Fee percentage × 10000
}
```

---

## xion.jwk.v1 — JSON Web Key Module

JWT/OIDC authentication, OAuth audience management (Google, Apple, etc.)

### Transaction Messages (Msg Service)

| Message | Signer | Description |
|---------|--------|-------------|
| `MsgCreateAudience` | `admin` | Register a new OAuth audience |
| `MsgUpdateAudience` | `admin` | Update audience admin/key/identifier |
| `MsgDeleteAudience` | `admin` | Remove an audience |
| `MsgCreateAudienceClaim` | `admin` | Claim ownership of an audience hash |
| `MsgDeleteAudienceClaim` | `admin` | Remove an audience claim |

### Query Messages

| RPC | Request | Response | Endpoint | Description |
|-----|---------|----------|----------|-------------|
| `Params` | `QueryParamsRequest` | `QueryParamsResponse` | `/xion/jwk/params` | Get module parameters |
| `Audience` | `QueryAudienceRequest` | `QueryAudienceResponse` | `/xion/jwk/audience/{aud}` | Get single audience by ID |
| `AudienceAll` | `QueryAudienceAllRequest` | `QueryAudienceAllResponse` | `/xion/jwk/audience` | List all audiences (paginated) |
| `AudienceClaim` | `QueryAudienceClaimRequest` | `QueryAudienceClaimResponse` | `/xion/jwk/audience_claim/{hash}` | Get audience claim by hash |
| `ValidateJWT` | `QueryValidateJWTRequest` | `QueryValidateJWTResponse` | `/xion/jwk/validate_jwt/{aud}/{sub}/{sig_bytes}` | Validate a JWT signature |

### Data Types

| Message | Description |
|---------|-------------|
| `Audience` | Audience configuration (aud, key, admin) |
| `AudienceClaim` | Links an account to an audience via signer |
| `Params` | Module params: time_offset, deployment_gas |
| `PrivateClaim` | Key-value pair extracted from JWT |
| `GenesisState` | Initial module state |

### Message Details

#### Audience
```protobuf
message Audience {
  string aud = 1;   // Audience identifier (e.g., OAuth client ID)
  string key = 2;   // Public key for JWT verification
  string admin = 3; // Admin address that controls this audience
}
```

#### MsgCreateAudience
```protobuf
message MsgCreateAudience {
  string admin = 1; // Admin creating the audience
  string aud = 2;   // Audience identifier
  string key = 3;   // Public key
}
```

---

## xion.mint.v1 — Minting Module

Token inflation and minting mechanics

### Transaction Messages (Msg Service)

| Message | Signer | Description |
|---------|--------|-------------|
| `MsgUpdateParams` | `authority` | Update mint parameters (governance) |

### Query Messages

| RPC | Request | Response | Endpoint | Description |
|-----|---------|----------|----------|-------------|
| `Params` | `QueryParamsRequest` | `QueryParamsResponse` | `/xion/mint/v1/params` | Get minting parameters |
| `Inflation` | `QueryInflationRequest` | `QueryInflationResponse` | `/xion/mint/v1/inflation` | Get current inflation rate |
| `AnnualProvisions` | `QueryAnnualProvisionsRequest` | `QueryAnnualProvisionsResponse` | `/xion/mint/v1/annual_provisions` | Get annual provisions |

### Data Types

| Message | Description |
|---------|-------------|
| `Minter` | Current minting state (inflation, annual_provisions) |
| `Params` | Minting parameters |
| `GenesisState` | Initial module state |

### Message Details

#### Params
```protobuf
message Params {
  string mint_denom = 1;           // Token denom to mint
  string inflation_rate_change = 2; // Max annual inflation change
  string inflation_max = 3;         // Maximum inflation rate
  string inflation_min = 4;         // Minimum inflation rate
  string goal_bonded = 5;           // Target bonded ratio
  uint64 blocks_per_year = 6;       // Expected blocks per year
}
```

#### Minter
```protobuf
message Minter {
  string inflation = 1;         // Current annual inflation rate
  string annual_provisions = 2; // Current annual expected provisions
}
```

---

## xion.feeabs.v1beta1 — Fee Abstraction Module

Pay transaction fees in non-native tokens via cross-chain swaps with Osmosis

### Transaction Messages (Msg Service)

| Message | Signer | Description |
|---------|--------|-------------|
| `MsgSendQueryIbcDenomTWAP` | `sender` | Query TWAP price from Osmosis |
| `MsgSwapCrossChain` | `sender` | Execute cross-chain swap for fee payment |
| `MsgFundFeeAbsModuleAccount` | `sender` | Fund the fee abstraction module |
| `MsgUpdateParams` | `authority` | Update module parameters (governance) |
| `MsgAddHostZone` | `authority` | Add new host chain configuration |
| `MsgUpdateHostZone` | `authority` | Update existing host chain configuration |
| `MsgRemoveHostZone` | `authority` | Remove host chain configuration |

### Query Messages

| RPC | Request | Response | Endpoint | Description |
|-----|---------|----------|----------|-------------|
| `OsmosisArithmeticTwap` | `QueryOsmosisArithmeticTwapRequest` | `QueryOsmosisArithmeticTwapResponse` | `/fee-abstraction/feeabs/v1/osmosis-arithmetic-twap/{ibc_denom}` | Get TWAP for IBC denom |
| `FeeabsModuleBalances` | `QueryFeeabsModuleBalancesRequest` | `QueryFeeabsModuleBalancesResponse` | `/fee-abstraction/feeabs/v1/module-balances` | Get module account balances |
| `HostChainConfig` | `QueryHostChainConfigRequest` | `QueryHostChainConfigResponse` | `/fee-abstraction/feeabs/v1/host-chain-config/{ibc_denom}` | Get host chain config |
| `AllHostChainConfig` | `QueryAllHostChainConfigRequest` | `QueryAllHostChainConfigResponse` | `/fee-abstraction/feeabs/v1/all-host-chain-config` | List all host chain configs |

### Data Types

| Message | Description |
|---------|-------------|
| `HostChainFeeAbsConfig` | Host chain swap configuration |
| `Params` | Module parameters (Osmosis paths, channels) |
| `AddHostZoneProposal` | Governance proposal to add host zone |
| `DeleteHostZoneProposal` | Governance proposal to delete host zone |
| `SetHostZoneProposal` | Governance proposal to update host zone |
| `GenesisState` | Initial module state |

### Enums

#### HostChainFeeAbsStatus
```protobuf
enum HostChainFeeAbsStatus {
  HOST_CHAIN_FEE_ABS_STATUS_UNSPECIFIED = 0;
  HOST_CHAIN_FEE_ABS_STATUS_UPDATED = 1;   // Configuration is current
  HOST_CHAIN_FEE_ABS_STATUS_OUTDATED = 2;  // Configuration needs update
  HOST_CHAIN_FEE_ABS_STATUS_FROZEN = 3;    // Configuration is frozen
}
```

### Message Details

#### HostChainFeeAbsConfig
```protobuf
message HostChainFeeAbsConfig {
  string ibc_denom = 1;                    // IBC token allowed as fee
  string osmosis_pool_token_denom_in = 2;  // Token in for Osmosis swap
  uint64 pool_id = 3;                      // Osmosis pool ID
  HostChainFeeAbsStatus status = 4;        // Connection status
}
```

#### Params
```protobuf
message Params {
  string native_ibced_in_osmosis = 1;         // Native token on Osmosis
  string osmosis_query_twap_path = 2;         // TWAP query path
  string chain_name = 3;                      // Chain name for IBC unwinding
  string ibc_transfer_channel = 4;            // Transfer channel to Osmosis
  string ibc_query_icq_channel = 5;           // ICQ channel to Osmosis
  string osmosis_crosschain_swap_address = 6; // Swap contract address
}
```

---

## xion.globalfee.v1 — Global Fee Module

Chain-wide minimum gas prices and fee bypass rules

### Query Messages

| RPC | Request | Response | Endpoint | Description |
|-----|---------|----------|----------|-------------|
| `Params` | `QueryParamsRequest` | `QueryParamsResponse` | `/xion/globalfee/v1/params` | Get global fee parameters |

### Data Types

| Message | Description |
|---------|-------------|
| `GenesisState` | Initial module state |
| `Params` | Global fee parameters |

### Message Details

#### Params
```protobuf
message Params {
  repeated DecCoin minimum_gas_prices = 1;        // Min gas prices for all TX
  repeated string bypass_min_fee_msg_types = 2;   // Msg types exempt from fees
  uint64 max_total_bypass_min_fee_msg_gas_usage = 3; // Max gas for bypass TXs
}
```

---

## xion.indexer.authz.v1 — Authz Indexer

Optimized queries for authorization grants

### Query Messages

| RPC | Request | Response | Endpoint | Description |
|-----|---------|----------|----------|-------------|
| `Grants` | `QueryGrantsRequest` | `QueryGrantsResponse` | `/xion/indexer/authz/v1/grants` | Get grants between granter/grantee |
| `GranterGrants` | `QueryGranterGrantsRequest` | `QueryGranterGrantsResponse` | `/xion/indexer/authz/v1/grants/granter/{granter}` | List all grants by granter |
| `GranteeGrants` | `QueryGranteeGrantsRequest` | `QueryGranteeGrantsResponse` | `/xion/indexer/authz/v1/grants/grantee/{grantee}` | List all grants to grantee |

### Message Details

#### QueryGrantsRequest
```protobuf
message QueryGrantsRequest {
  string granter = 1;      // Granter address
  string grantee = 2;      // Grantee address
  string msg_type_url = 3; // Optional: filter by msg type
  PageRequest pagination = 4;
}
```

---

## xion.indexer.feegrant.v1 — Feegrant Indexer

Optimized queries for fee allowances

### Query Messages

| RPC | Request | Response | Endpoint | Description |
|-----|---------|----------|----------|-------------|
| `Allowance` | `QueryAllowanceRequest` | `QueryAllowanceResponse` | `/xion/indexer/feegrant/v1/allowance/{granter}/{grantee}` | Get specific allowance |
| `Allowances` | `QueryAllowancesRequest` | `QueryAllowancesResponse` | `/xion/indexer/feegrant/v1/allowances/{grantee}` | List allowances for grantee |
| `AllowancesByGranter` | `QueryAllowancesByGranterRequest` | `QueryAllowancesByGranterResponse` | `/xion/indexer/feegrant/v1/issued/{granter}` | List allowances from granter |

### Message Details

#### QueryAllowanceRequest
```protobuf
message QueryAllowanceRequest {
  string granter = 1; // Address granting the allowance
  string grantee = 2; // Address receiving the allowance
}
```

---

## Quick Reference

### All Transaction Messages

| Module | Message | Signer Field |
|--------|---------|--------------|
| `xion.v1` | `MsgSend` | `from_address` |
| `xion.v1` | `MsgMultiSend` | `inputs` |
| `xion.v1` | `MsgSetPlatformPercentage` | `authority` |
| `xion.v1` | `MsgSetPlatformMinimum` | `authority` |
| `xion.jwk.v1` | `MsgCreateAudience` | `admin` |
| `xion.jwk.v1` | `MsgUpdateAudience` | `admin` |
| `xion.jwk.v1` | `MsgDeleteAudience` | `admin` |
| `xion.jwk.v1` | `MsgCreateAudienceClaim` | `admin` |
| `xion.jwk.v1` | `MsgDeleteAudienceClaim` | `admin` |
| `xion.mint.v1` | `MsgUpdateParams` | `authority` |
| `xion.feeabs.v1beta1` | `MsgSendQueryIbcDenomTWAP` | `sender` |
| `xion.feeabs.v1beta1` | `MsgSwapCrossChain` | `sender` |
| `xion.feeabs.v1beta1` | `MsgFundFeeAbsModuleAccount` | `sender` |
| `xion.feeabs.v1beta1` | `MsgUpdateParams` | `authority` |
| `xion.feeabs.v1beta1` | `MsgAddHostZone` | `authority` |
| `xion.feeabs.v1beta1` | `MsgUpdateHostZone` | `authority` |
| `xion.feeabs.v1beta1` | `MsgRemoveHostZone` | `authority` |

### Module Dependencies

```
buf.build/burnt-labs/xion
├── buf.build/cosmos/cosmos-sdk
├── buf.build/cosmos/cosmos-proto
├── buf.build/cosmos/gogo-proto
├── buf.build/googleapis/googleapis
├── buf.build/tendermint/tendermint
├── buf.build/protocolbuffers/wellknowntypes
├── buf.build/burnt-labs/abstractaccount
└── buf.build/burnt-labs/tokenfactory
```

