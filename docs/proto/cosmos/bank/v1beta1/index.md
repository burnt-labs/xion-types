# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/bank/v1beta1/authz.proto](#cosmos_bank_v1beta1_authz-proto)
    - [SendAuthorization](#cosmos-bank-v1beta1-SendAuthorization)
  
- [cosmos/bank/v1beta1/bank.proto](#cosmos_bank_v1beta1_bank-proto)
    - [DenomUnit](#cosmos-bank-v1beta1-DenomUnit)
    - [Input](#cosmos-bank-v1beta1-Input)
    - [Metadata](#cosmos-bank-v1beta1-Metadata)
    - [Output](#cosmos-bank-v1beta1-Output)
    - [Params](#cosmos-bank-v1beta1-Params)
    - [SendEnabled](#cosmos-bank-v1beta1-SendEnabled)
    - [Supply](#cosmos-bank-v1beta1-Supply)
  
- [cosmos/bank/v1beta1/genesis.proto](#cosmos_bank_v1beta1_genesis-proto)
    - [Balance](#cosmos-bank-v1beta1-Balance)
    - [GenesisState](#cosmos-bank-v1beta1-GenesisState)
  
- [cosmos/bank/v1beta1/query.proto](#cosmos_bank_v1beta1_query-proto)
    - [DenomOwner](#cosmos-bank-v1beta1-DenomOwner)
    - [QueryAllBalancesRequest](#cosmos-bank-v1beta1-QueryAllBalancesRequest)
    - [QueryAllBalancesResponse](#cosmos-bank-v1beta1-QueryAllBalancesResponse)
    - [QueryBalanceRequest](#cosmos-bank-v1beta1-QueryBalanceRequest)
    - [QueryBalanceResponse](#cosmos-bank-v1beta1-QueryBalanceResponse)
    - [QueryDenomMetadataByQueryStringRequest](#cosmos-bank-v1beta1-QueryDenomMetadataByQueryStringRequest)
    - [QueryDenomMetadataByQueryStringResponse](#cosmos-bank-v1beta1-QueryDenomMetadataByQueryStringResponse)
    - [QueryDenomMetadataRequest](#cosmos-bank-v1beta1-QueryDenomMetadataRequest)
    - [QueryDenomMetadataResponse](#cosmos-bank-v1beta1-QueryDenomMetadataResponse)
    - [QueryDenomOwnersByQueryRequest](#cosmos-bank-v1beta1-QueryDenomOwnersByQueryRequest)
    - [QueryDenomOwnersByQueryResponse](#cosmos-bank-v1beta1-QueryDenomOwnersByQueryResponse)
    - [QueryDenomOwnersRequest](#cosmos-bank-v1beta1-QueryDenomOwnersRequest)
    - [QueryDenomOwnersResponse](#cosmos-bank-v1beta1-QueryDenomOwnersResponse)
    - [QueryDenomsMetadataRequest](#cosmos-bank-v1beta1-QueryDenomsMetadataRequest)
    - [QueryDenomsMetadataResponse](#cosmos-bank-v1beta1-QueryDenomsMetadataResponse)
    - [QueryParamsRequest](#cosmos-bank-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-bank-v1beta1-QueryParamsResponse)
    - [QuerySendEnabledRequest](#cosmos-bank-v1beta1-QuerySendEnabledRequest)
    - [QuerySendEnabledResponse](#cosmos-bank-v1beta1-QuerySendEnabledResponse)
    - [QuerySpendableBalanceByDenomRequest](#cosmos-bank-v1beta1-QuerySpendableBalanceByDenomRequest)
    - [QuerySpendableBalanceByDenomResponse](#cosmos-bank-v1beta1-QuerySpendableBalanceByDenomResponse)
    - [QuerySpendableBalancesRequest](#cosmos-bank-v1beta1-QuerySpendableBalancesRequest)
    - [QuerySpendableBalancesResponse](#cosmos-bank-v1beta1-QuerySpendableBalancesResponse)
    - [QuerySupplyOfRequest](#cosmos-bank-v1beta1-QuerySupplyOfRequest)
    - [QuerySupplyOfResponse](#cosmos-bank-v1beta1-QuerySupplyOfResponse)
    - [QueryTotalSupplyRequest](#cosmos-bank-v1beta1-QueryTotalSupplyRequest)
    - [QueryTotalSupplyResponse](#cosmos-bank-v1beta1-QueryTotalSupplyResponse)
  
    - [Query](#cosmos-bank-v1beta1-Query)
  
- [cosmos/bank/v1beta1/tx.proto](#cosmos_bank_v1beta1_tx-proto)
    - [MsgMultiSend](#cosmos-bank-v1beta1-MsgMultiSend)
    - [MsgMultiSendResponse](#cosmos-bank-v1beta1-MsgMultiSendResponse)
    - [MsgSend](#cosmos-bank-v1beta1-MsgSend)
    - [MsgSendResponse](#cosmos-bank-v1beta1-MsgSendResponse)
    - [MsgSetSendEnabled](#cosmos-bank-v1beta1-MsgSetSendEnabled)
    - [MsgSetSendEnabledResponse](#cosmos-bank-v1beta1-MsgSetSendEnabledResponse)
    - [MsgUpdateParams](#cosmos-bank-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-bank-v1beta1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmos-bank-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_bank_v1beta1_authz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/bank/v1beta1/authz.proto



<a name="cosmos-bank-v1beta1-SendAuthorization"></a>

### SendAuthorization
SendAuthorization allows the grantee to spend up to spend_limit coins from
the granter&#39;s account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spend_limit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| allow_list | [string](#string) | repeated | allow_list specifies an optional list of addresses to whom the grantee can send tokens on behalf of the granter. If omitted, any recipient is allowed. |





 

 

 

 



<a name="cosmos_bank_v1beta1_bank-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/bank/v1beta1/bank.proto



<a name="cosmos-bank-v1beta1-DenomUnit"></a>

### DenomUnit
DenomUnit represents a struct that describes a given
denomination unit of the basic token.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | denom represents the string name of the given denom unit (e.g uatom). |
| exponent | [uint32](#uint32) |  | exponent represents power of 10 exponent that one must raise the base_denom to in order to equal the given DenomUnit&#39;s denom 1 denom = 10^exponent base_denom (e.g. with a base_denom of uatom, one can create a DenomUnit of &#39;atom&#39; with exponent = 6, thus: 1 atom = 10^6 uatom). |
| aliases | [string](#string) | repeated | aliases is a list of string aliases for the given denom |






<a name="cosmos-bank-v1beta1-Input"></a>

### Input
Input models transaction input.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| coins | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-bank-v1beta1-Metadata"></a>

### Metadata
Metadata represents a struct that describes
a basic token.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| denom_units | [DenomUnit](#cosmos-bank-v1beta1-DenomUnit) | repeated | denom_units represents the list of DenomUnit&#39;s for a given coin |
| base | [string](#string) |  | base represents the base denom (should be the DenomUnit with exponent = 0). |
| display | [string](#string) |  | display indicates the suggested denom that should be displayed in clients. |
| name | [string](#string) |  | name defines the name of the token (eg: Cosmos Atom) |
| symbol | [string](#string) |  | symbol is the token symbol usually shown on exchanges (eg: ATOM). This can be the same as the display. |
| uri | [string](#string) |  | URI to a document (on or off-chain) that contains additional information. Optional. |
| uri_hash | [string](#string) |  | URIHash is a sha256 hash of a document pointed by URI. It&#39;s used to verify that the document didn&#39;t change. Optional. |






<a name="cosmos-bank-v1beta1-Output"></a>

### Output
Output models transaction outputs.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| coins | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-bank-v1beta1-Params"></a>

### Params
Params defines the parameters for the bank module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| send_enabled | [SendEnabled](#cosmos-bank-v1beta1-SendEnabled) | repeated | **Deprecated.** Deprecated: Use of SendEnabled in params is deprecated. For genesis, use the newly added send_enabled field in the genesis object. Storage, lookup, and manipulation of this information is now in the keeper.

As of cosmos-sdk 0.47, this only exists for backwards compatibility of genesis files. |
| default_send_enabled | [bool](#bool) |  |  |






<a name="cosmos-bank-v1beta1-SendEnabled"></a>

### SendEnabled
SendEnabled maps coin denom to a send_enabled status (whether a denom is
sendable).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  |  |
| enabled | [bool](#bool) |  |  |






<a name="cosmos-bank-v1beta1-Supply"></a>

### Supply
Supply represents a struct that passively keeps track of the total supply
amounts in the network.
This message is deprecated now that supply is indexed by denom.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |





 

 

 

 



<a name="cosmos_bank_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/bank/v1beta1/genesis.proto



<a name="cosmos-bank-v1beta1-Balance"></a>

### Balance
Balance defines an account address and balance pair used in the bank module&#39;s
genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address of the balance holder. |
| coins | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | coins defines the different coins this balance holds. |






<a name="cosmos-bank-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the bank module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-bank-v1beta1-Params) |  | params defines all the parameters of the module. |
| balances | [Balance](#cosmos-bank-v1beta1-Balance) | repeated | balances is an array containing the balances of all the accounts. |
| supply | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | supply represents the total supply. If it is left empty, then supply will be calculated based on the provided balances. Otherwise, it will be used to validate that the sum of the balances equals this amount. |
| denom_metadata | [Metadata](#cosmos-bank-v1beta1-Metadata) | repeated | denom_metadata defines the metadata of the different coins. |
| send_enabled | [SendEnabled](#cosmos-bank-v1beta1-SendEnabled) | repeated | send_enabled defines the denoms where send is enabled or disabled. |





 

 

 

 



<a name="cosmos_bank_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/bank/v1beta1/query.proto



<a name="cosmos-bank-v1beta1-DenomOwner"></a>

### DenomOwner
DenomOwner defines structure representing an account that owns or holds a
particular denominated token. It contains the account address and account
balance of the denominated token.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address defines the address that owns a particular denomination. |
| balance | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | balance is the balance of the denominated coin for an account. |






<a name="cosmos-bank-v1beta1-QueryAllBalancesRequest"></a>

### QueryAllBalancesRequest
QueryBalanceRequest is the request type for the Query/AllBalances RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address to query balances for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |
| resolve_denom | [bool](#bool) |  | resolve_denom is the flag to resolve the denom into a human-readable form from the metadata. |






<a name="cosmos-bank-v1beta1-QueryAllBalancesResponse"></a>

### QueryAllBalancesResponse
QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| balances | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | balances is the balances of all the coins. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-bank-v1beta1-QueryBalanceRequest"></a>

### QueryBalanceRequest
QueryBalanceRequest is the request type for the Query/Balance RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address to query balances for. |
| denom | [string](#string) |  | denom is the coin denom to query balances for. |






<a name="cosmos-bank-v1beta1-QueryBalanceResponse"></a>

### QueryBalanceResponse
QueryBalanceResponse is the response type for the Query/Balance RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| balance | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | balance is the balance of the coin. |






<a name="cosmos-bank-v1beta1-QueryDenomMetadataByQueryStringRequest"></a>

### QueryDenomMetadataByQueryStringRequest
QueryDenomMetadataByQueryStringRequest is the request type for the Query/DenomMetadata RPC method.
Identical with QueryDenomMetadataRequest but receives denom as query string.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | denom is the coin denom to query the metadata for. |






<a name="cosmos-bank-v1beta1-QueryDenomMetadataByQueryStringResponse"></a>

### QueryDenomMetadataByQueryStringResponse
QueryDenomMetadataByQueryStringResponse is the response type for the Query/DenomMetadata RPC
method. Identical with QueryDenomMetadataResponse but receives denom as query string in request.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| metadata | [Metadata](#cosmos-bank-v1beta1-Metadata) |  | metadata describes and provides all the client information for the requested token. |






<a name="cosmos-bank-v1beta1-QueryDenomMetadataRequest"></a>

### QueryDenomMetadataRequest
QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | denom is the coin denom to query the metadata for. |






<a name="cosmos-bank-v1beta1-QueryDenomMetadataResponse"></a>

### QueryDenomMetadataResponse
QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| metadata | [Metadata](#cosmos-bank-v1beta1-Metadata) |  | metadata describes and provides all the client information for the requested token. |






<a name="cosmos-bank-v1beta1-QueryDenomOwnersByQueryRequest"></a>

### QueryDenomOwnersByQueryRequest
QueryDenomOwnersByQueryRequest defines the request type for the DenomOwnersByQuery RPC query,
which queries for a paginated set of all account holders of a particular
denomination.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | denom defines the coin denomination to query all account holders for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-bank-v1beta1-QueryDenomOwnersByQueryResponse"></a>

### QueryDenomOwnersByQueryResponse
QueryDenomOwnersByQueryResponse defines the RPC response of a DenomOwnersByQuery RPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom_owners | [DenomOwner](#cosmos-bank-v1beta1-DenomOwner) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-bank-v1beta1-QueryDenomOwnersRequest"></a>

### QueryDenomOwnersRequest
QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
which queries for a paginated set of all account holders of a particular
denomination.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | denom defines the coin denomination to query all account holders for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-bank-v1beta1-QueryDenomOwnersResponse"></a>

### QueryDenomOwnersResponse
QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom_owners | [DenomOwner](#cosmos-bank-v1beta1-DenomOwner) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-bank-v1beta1-QueryDenomsMetadataRequest"></a>

### QueryDenomsMetadataRequest
QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-bank-v1beta1-QueryDenomsMetadataResponse"></a>

### QueryDenomsMetadataResponse
QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| metadatas | [Metadata](#cosmos-bank-v1beta1-Metadata) | repeated | metadata provides the client information for all the registered tokens. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-bank-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest defines the request type for querying x/bank parameters.






<a name="cosmos-bank-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse defines the response type for querying x/bank parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-bank-v1beta1-Params) |  | params provides the parameters of the bank module. |






<a name="cosmos-bank-v1beta1-QuerySendEnabledRequest"></a>

### QuerySendEnabledRequest
QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denoms | [string](#string) | repeated | denoms is the specific denoms you want look up. Leave empty to get all entries. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. This field is only read if the denoms field is empty. |






<a name="cosmos-bank-v1beta1-QuerySendEnabledResponse"></a>

### QuerySendEnabledResponse
QuerySendEnabledResponse defines the RPC response of a SendEnable query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| send_enabled | [SendEnabled](#cosmos-bank-v1beta1-SendEnabled) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. This field is only populated if the denoms field in the request is empty. |






<a name="cosmos-bank-v1beta1-QuerySpendableBalanceByDenomRequest"></a>

### QuerySpendableBalanceByDenomRequest
QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
querying an account&#39;s spendable balance for a specific denom.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address to query balances for. |
| denom | [string](#string) |  | denom is the coin denom to query balances for. |






<a name="cosmos-bank-v1beta1-QuerySpendableBalanceByDenomResponse"></a>

### QuerySpendableBalanceByDenomResponse
QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
querying an account&#39;s spendable balance for a specific denom.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| balance | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | balance is the balance of the coin. |






<a name="cosmos-bank-v1beta1-QuerySpendableBalancesRequest"></a>

### QuerySpendableBalancesRequest
QuerySpendableBalancesRequest defines the gRPC request structure for querying
an account&#39;s spendable balances.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address to query spendable balances for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-bank-v1beta1-QuerySpendableBalancesResponse"></a>

### QuerySpendableBalancesResponse
QuerySpendableBalancesResponse defines the gRPC response structure for querying
an account&#39;s spendable balances.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| balances | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | balances is the spendable balances of all the coins. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-bank-v1beta1-QuerySupplyOfRequest"></a>

### QuerySupplyOfRequest
QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | denom is the coin denom to query balances for. |






<a name="cosmos-bank-v1beta1-QuerySupplyOfResponse"></a>

### QuerySupplyOfResponse
QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | amount is the supply of the coin. |






<a name="cosmos-bank-v1beta1-QueryTotalSupplyRequest"></a>

### QueryTotalSupplyRequest
QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-bank-v1beta1-QueryTotalSupplyResponse"></a>

### QueryTotalSupplyResponse
QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| supply | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | supply is the supply of the coins |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |





 

 

 


<a name="cosmos-bank-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Balance | [QueryBalanceRequest](#cosmos-bank-v1beta1-QueryBalanceRequest) | [QueryBalanceResponse](#cosmos-bank-v1beta1-QueryBalanceResponse) | Balance queries the balance of a single coin for a single account. |
| AllBalances | [QueryAllBalancesRequest](#cosmos-bank-v1beta1-QueryAllBalancesRequest) | [QueryAllBalancesResponse](#cosmos-bank-v1beta1-QueryAllBalancesResponse) | AllBalances queries the balance of all coins for a single account.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| SpendableBalances | [QuerySpendableBalancesRequest](#cosmos-bank-v1beta1-QuerySpendableBalancesRequest) | [QuerySpendableBalancesResponse](#cosmos-bank-v1beta1-QuerySpendableBalancesResponse) | SpendableBalances queries the spendable balance of all coins for a single account.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| SpendableBalanceByDenom | [QuerySpendableBalanceByDenomRequest](#cosmos-bank-v1beta1-QuerySpendableBalanceByDenomRequest) | [QuerySpendableBalanceByDenomResponse](#cosmos-bank-v1beta1-QuerySpendableBalanceByDenomResponse) | SpendableBalanceByDenom queries the spendable balance of a single denom for a single account.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| TotalSupply | [QueryTotalSupplyRequest](#cosmos-bank-v1beta1-QueryTotalSupplyRequest) | [QueryTotalSupplyResponse](#cosmos-bank-v1beta1-QueryTotalSupplyResponse) | TotalSupply queries the total supply of all coins.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| SupplyOf | [QuerySupplyOfRequest](#cosmos-bank-v1beta1-QuerySupplyOfRequest) | [QuerySupplyOfResponse](#cosmos-bank-v1beta1-QuerySupplyOfResponse) | SupplyOf queries the supply of a single coin.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| Params | [QueryParamsRequest](#cosmos-bank-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-bank-v1beta1-QueryParamsResponse) | Params queries the parameters of x/bank module. |
| DenomsMetadata | [QueryDenomsMetadataRequest](#cosmos-bank-v1beta1-QueryDenomsMetadataRequest) | [QueryDenomsMetadataResponse](#cosmos-bank-v1beta1-QueryDenomsMetadataResponse) | DenomsMetadata queries the client metadata for all registered coin denominations. |
| DenomMetadata | [QueryDenomMetadataRequest](#cosmos-bank-v1beta1-QueryDenomMetadataRequest) | [QueryDenomMetadataResponse](#cosmos-bank-v1beta1-QueryDenomMetadataResponse) | DenomMetadata queries the client metadata of a given coin denomination. |
| DenomMetadataByQueryString | [QueryDenomMetadataByQueryStringRequest](#cosmos-bank-v1beta1-QueryDenomMetadataByQueryStringRequest) | [QueryDenomMetadataByQueryStringResponse](#cosmos-bank-v1beta1-QueryDenomMetadataByQueryStringResponse) | DenomMetadataByQueryString queries the client metadata of a given coin denomination. |
| DenomOwners | [QueryDenomOwnersRequest](#cosmos-bank-v1beta1-QueryDenomOwnersRequest) | [QueryDenomOwnersResponse](#cosmos-bank-v1beta1-QueryDenomOwnersResponse) | DenomOwners queries for all account addresses that own a particular token denomination.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| DenomOwnersByQuery | [QueryDenomOwnersByQueryRequest](#cosmos-bank-v1beta1-QueryDenomOwnersByQueryRequest) | [QueryDenomOwnersByQueryResponse](#cosmos-bank-v1beta1-QueryDenomOwnersByQueryResponse) | DenomOwnersByQuery queries for all account addresses that own a particular token denomination. |
| SendEnabled | [QuerySendEnabledRequest](#cosmos-bank-v1beta1-QuerySendEnabledRequest) | [QuerySendEnabledResponse](#cosmos-bank-v1beta1-QuerySendEnabledResponse) | SendEnabled queries for SendEnabled entries.

This query only returns denominations that have specific SendEnabled settings. Any denomination that does not have a specific setting will use the default params.default_send_enabled, and will not be returned by this query. |

 



<a name="cosmos_bank_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/bank/v1beta1/tx.proto



<a name="cosmos-bank-v1beta1-MsgMultiSend"></a>

### MsgMultiSend
MsgMultiSend represents an arbitrary multi-in, multi-out send message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inputs | [Input](#cosmos-bank-v1beta1-Input) | repeated | Inputs, despite being `repeated`, only allows one sender input. This is checked in MsgMultiSend&#39;s ValidateBasic. |
| outputs | [Output](#cosmos-bank-v1beta1-Output) | repeated |  |






<a name="cosmos-bank-v1beta1-MsgMultiSendResponse"></a>

### MsgMultiSendResponse
MsgMultiSendResponse defines the Msg/MultiSend response type.






<a name="cosmos-bank-v1beta1-MsgSend"></a>

### MsgSend
MsgSend represents a message to send coins from one account to another.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_address | [string](#string) |  |  |
| to_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-bank-v1beta1-MsgSendResponse"></a>

### MsgSendResponse
MsgSendResponse defines the Msg/Send response type.






<a name="cosmos-bank-v1beta1-MsgSetSendEnabled"></a>

### MsgSetSendEnabled
MsgSetSendEnabled is the Msg/SetSendEnabled request type.

Only entries to add/update/delete need to be included.
Existing SendEnabled entries that are not included in this
message are left unchanged.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module. |
| send_enabled | [SendEnabled](#cosmos-bank-v1beta1-SendEnabled) | repeated | send_enabled is the list of entries to add or update. |
| use_default_for | [string](#string) | repeated | use_default_for is a list of denoms that should use the params.default_send_enabled value. Denoms listed here will have their SendEnabled entries deleted. If a denom is included that doesn&#39;t have a SendEnabled entry, it will be ignored. |






<a name="cosmos-bank-v1beta1-MsgSetSendEnabledResponse"></a>

### MsgSetSendEnabledResponse
MsgSetSendEnabledResponse defines the Msg/SetSendEnabled response type.






<a name="cosmos-bank-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-bank-v1beta1-Params) |  | params defines the x/bank parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-bank-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="cosmos-bank-v1beta1-Msg"></a>

### Msg
Msg defines the bank Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Send | [MsgSend](#cosmos-bank-v1beta1-MsgSend) | [MsgSendResponse](#cosmos-bank-v1beta1-MsgSendResponse) | Send defines a method for sending coins from one account to another account. |
| MultiSend | [MsgMultiSend](#cosmos-bank-v1beta1-MsgMultiSend) | [MsgMultiSendResponse](#cosmos-bank-v1beta1-MsgMultiSendResponse) | MultiSend defines a method for sending coins from some accounts to other accounts. |
| UpdateParams | [MsgUpdateParams](#cosmos-bank-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-bank-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/bank module parameters. The authority is defined in the keeper. |
| SetSendEnabled | [MsgSetSendEnabled](#cosmos-bank-v1beta1-MsgSetSendEnabled) | [MsgSetSendEnabledResponse](#cosmos-bank-v1beta1-MsgSetSendEnabledResponse) | SetSendEnabled is a governance operation for setting the SendEnabled flag on any number of Denoms. Only the entries to add or update should be included. Entries that already exist in the store, but that aren&#39;t included in this message, will be left unchanged. |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

