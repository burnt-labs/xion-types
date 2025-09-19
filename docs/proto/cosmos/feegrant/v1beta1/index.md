# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/feegrant/v1beta1/feegrant.proto](#cosmos_feegrant_v1beta1_feegrant-proto)
    - [AllowedMsgAllowance](#cosmos-feegrant-v1beta1-AllowedMsgAllowance)
    - [BasicAllowance](#cosmos-feegrant-v1beta1-BasicAllowance)
    - [Grant](#cosmos-feegrant-v1beta1-Grant)
    - [PeriodicAllowance](#cosmos-feegrant-v1beta1-PeriodicAllowance)
  
- [cosmos/feegrant/v1beta1/genesis.proto](#cosmos_feegrant_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-feegrant-v1beta1-GenesisState)
  
- [cosmos/feegrant/v1beta1/query.proto](#cosmos_feegrant_v1beta1_query-proto)
    - [QueryAllowanceRequest](#cosmos-feegrant-v1beta1-QueryAllowanceRequest)
    - [QueryAllowanceResponse](#cosmos-feegrant-v1beta1-QueryAllowanceResponse)
    - [QueryAllowancesByGranterRequest](#cosmos-feegrant-v1beta1-QueryAllowancesByGranterRequest)
    - [QueryAllowancesByGranterResponse](#cosmos-feegrant-v1beta1-QueryAllowancesByGranterResponse)
    - [QueryAllowancesRequest](#cosmos-feegrant-v1beta1-QueryAllowancesRequest)
    - [QueryAllowancesResponse](#cosmos-feegrant-v1beta1-QueryAllowancesResponse)
  
    - [Query](#cosmos-feegrant-v1beta1-Query)
  
- [cosmos/feegrant/v1beta1/tx.proto](#cosmos_feegrant_v1beta1_tx-proto)
    - [MsgGrantAllowance](#cosmos-feegrant-v1beta1-MsgGrantAllowance)
    - [MsgGrantAllowanceResponse](#cosmos-feegrant-v1beta1-MsgGrantAllowanceResponse)
    - [MsgPruneAllowances](#cosmos-feegrant-v1beta1-MsgPruneAllowances)
    - [MsgPruneAllowancesResponse](#cosmos-feegrant-v1beta1-MsgPruneAllowancesResponse)
    - [MsgRevokeAllowance](#cosmos-feegrant-v1beta1-MsgRevokeAllowance)
    - [MsgRevokeAllowanceResponse](#cosmos-feegrant-v1beta1-MsgRevokeAllowanceResponse)
  
    - [Msg](#cosmos-feegrant-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_feegrant_v1beta1_feegrant-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/feegrant/v1beta1/feegrant.proto



<a name="cosmos-feegrant-v1beta1-AllowedMsgAllowance"></a>

### AllowedMsgAllowance
AllowedMsgAllowance creates allowance only for specified message types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowance | [google.protobuf.Any](#google-protobuf-Any) |  | allowance can be any of basic and periodic fee allowance. |
| allowed_messages | [string](#string) | repeated | allowed_messages are the messages for which the grantee has the access. |






<a name="cosmos-feegrant-v1beta1-BasicAllowance"></a>

### BasicAllowance
BasicAllowance implements Allowance with a one-time grant of coins
that optionally expires. The grantee can use up to SpendLimit to cover fees.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spend_limit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | spend_limit specifies the maximum amount of coins that can be spent by this allowance and will be updated as coins are spent. If it is empty, there is no spend limit and any amount of coins can be spent. |
| expiration | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | expiration specifies an optional time when this allowance expires |






<a name="cosmos-feegrant-v1beta1-Grant"></a>

### Grant
Grant is stored in the KVStore to record a grant with full context


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  | granter is the address of the user granting an allowance of their funds. |
| grantee | [string](#string) |  | grantee is the address of the user being granted an allowance of another user&#39;s funds. |
| allowance | [google.protobuf.Any](#google-protobuf-Any) |  | allowance can be any of basic, periodic, allowed fee allowance. |






<a name="cosmos-feegrant-v1beta1-PeriodicAllowance"></a>

### PeriodicAllowance
PeriodicAllowance extends Allowance to allow for both a maximum cap,
as well as a limit per time period.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| basic | [BasicAllowance](#cosmos-feegrant-v1beta1-BasicAllowance) |  | basic specifies a struct of `BasicAllowance` |
| period | [google.protobuf.Duration](#google-protobuf-Duration) |  | period specifies the time duration in which period_spend_limit coins can be spent before that allowance is reset |
| period_spend_limit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | period_spend_limit specifies the maximum number of coins that can be spent in the period |
| period_can_spend | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | period_can_spend is the number of coins left to be spent before the period_reset time |
| period_reset | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | period_reset is the time at which this period resets and a new one begins, it is calculated from the start time of the first transaction after the last period ended |





 

 

 

 



<a name="cosmos_feegrant_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/feegrant/v1beta1/genesis.proto



<a name="cosmos-feegrant-v1beta1-GenesisState"></a>

### GenesisState
GenesisState contains a set of fee allowances, persisted from the store


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowances | [Grant](#cosmos-feegrant-v1beta1-Grant) | repeated |  |





 

 

 

 



<a name="cosmos_feegrant_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/feegrant/v1beta1/query.proto



<a name="cosmos-feegrant-v1beta1-QueryAllowanceRequest"></a>

### QueryAllowanceRequest
QueryAllowanceRequest is the request type for the Query/Allowance RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  | granter is the address of the user granting an allowance of their funds. |
| grantee | [string](#string) |  | grantee is the address of the user being granted an allowance of another user&#39;s funds. |






<a name="cosmos-feegrant-v1beta1-QueryAllowanceResponse"></a>

### QueryAllowanceResponse
QueryAllowanceResponse is the response type for the Query/Allowance RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowance | [Grant](#cosmos-feegrant-v1beta1-Grant) |  | allowance is a allowance granted for grantee by granter. |






<a name="cosmos-feegrant-v1beta1-QueryAllowancesByGranterRequest"></a>

### QueryAllowancesByGranterRequest
QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an pagination for the request. |






<a name="cosmos-feegrant-v1beta1-QueryAllowancesByGranterResponse"></a>

### QueryAllowancesByGranterResponse
QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowances | [Grant](#cosmos-feegrant-v1beta1-Grant) | repeated | allowances that have been issued by the granter. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines an pagination for the response. |






<a name="cosmos-feegrant-v1beta1-QueryAllowancesRequest"></a>

### QueryAllowancesRequest
QueryAllowancesRequest is the request type for the Query/Allowances RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grantee | [string](#string) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an pagination for the request. |






<a name="cosmos-feegrant-v1beta1-QueryAllowancesResponse"></a>

### QueryAllowancesResponse
QueryAllowancesResponse is the response type for the Query/Allowances RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowances | [Grant](#cosmos-feegrant-v1beta1-Grant) | repeated | allowances are allowance&#39;s granted for grantee by granter. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines an pagination for the response. |





 

 

 


<a name="cosmos-feegrant-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Allowance | [QueryAllowanceRequest](#cosmos-feegrant-v1beta1-QueryAllowanceRequest) | [QueryAllowanceResponse](#cosmos-feegrant-v1beta1-QueryAllowanceResponse) | Allowance returns granted allwance to the grantee by the granter. |
| Allowances | [QueryAllowancesRequest](#cosmos-feegrant-v1beta1-QueryAllowancesRequest) | [QueryAllowancesResponse](#cosmos-feegrant-v1beta1-QueryAllowancesResponse) | Allowances returns all the grants for the given grantee address. |
| AllowancesByGranter | [QueryAllowancesByGranterRequest](#cosmos-feegrant-v1beta1-QueryAllowancesByGranterRequest) | [QueryAllowancesByGranterResponse](#cosmos-feegrant-v1beta1-QueryAllowancesByGranterResponse) | AllowancesByGranter returns all the grants given by an address |

 



<a name="cosmos_feegrant_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/feegrant/v1beta1/tx.proto



<a name="cosmos-feegrant-v1beta1-MsgGrantAllowance"></a>

### MsgGrantAllowance
MsgGrantAllowance adds permission for Grantee to spend up to Allowance
of fees from the account of Granter.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  | granter is the address of the user granting an allowance of their funds. |
| grantee | [string](#string) |  | grantee is the address of the user being granted an allowance of another user&#39;s funds. |
| allowance | [google.protobuf.Any](#google-protobuf-Any) |  | allowance can be any of basic, periodic, allowed fee allowance. |






<a name="cosmos-feegrant-v1beta1-MsgGrantAllowanceResponse"></a>

### MsgGrantAllowanceResponse
MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type.






<a name="cosmos-feegrant-v1beta1-MsgPruneAllowances"></a>

### MsgPruneAllowances
MsgPruneAllowances prunes expired fee allowances.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pruner | [string](#string) |  | pruner is the address of the user pruning expired allowances. |






<a name="cosmos-feegrant-v1beta1-MsgPruneAllowancesResponse"></a>

### MsgPruneAllowancesResponse
MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.






<a name="cosmos-feegrant-v1beta1-MsgRevokeAllowance"></a>

### MsgRevokeAllowance
MsgRevokeAllowance removes any existing Allowance from Granter to Grantee.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  | granter is the address of the user granting an allowance of their funds. |
| grantee | [string](#string) |  | grantee is the address of the user being granted an allowance of another user&#39;s funds. |






<a name="cosmos-feegrant-v1beta1-MsgRevokeAllowanceResponse"></a>

### MsgRevokeAllowanceResponse
MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type.





 

 

 


<a name="cosmos-feegrant-v1beta1-Msg"></a>

### Msg
Msg defines the feegrant msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GrantAllowance | [MsgGrantAllowance](#cosmos-feegrant-v1beta1-MsgGrantAllowance) | [MsgGrantAllowanceResponse](#cosmos-feegrant-v1beta1-MsgGrantAllowanceResponse) | GrantAllowance grants fee allowance to the grantee on the granter&#39;s account with the provided expiration time. |
| RevokeAllowance | [MsgRevokeAllowance](#cosmos-feegrant-v1beta1-MsgRevokeAllowance) | [MsgRevokeAllowanceResponse](#cosmos-feegrant-v1beta1-MsgRevokeAllowanceResponse) | RevokeAllowance revokes any fee allowance of granter&#39;s account that has been granted to the grantee. |
| PruneAllowances | [MsgPruneAllowances](#cosmos-feegrant-v1beta1-MsgPruneAllowances) | [MsgPruneAllowancesResponse](#cosmos-feegrant-v1beta1-MsgPruneAllowancesResponse) | PruneAllowances prunes expired fee allowances, currently up to 75 at a time. |

 



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

