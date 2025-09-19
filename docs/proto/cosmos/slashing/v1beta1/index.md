# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/slashing/v1beta1/slashing.proto](#cosmos_slashing_v1beta1_slashing-proto)
    - [Params](#cosmos-slashing-v1beta1-Params)
    - [ValidatorSigningInfo](#cosmos-slashing-v1beta1-ValidatorSigningInfo)
  
- [cosmos/slashing/v1beta1/genesis.proto](#cosmos_slashing_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-slashing-v1beta1-GenesisState)
    - [MissedBlock](#cosmos-slashing-v1beta1-MissedBlock)
    - [SigningInfo](#cosmos-slashing-v1beta1-SigningInfo)
    - [ValidatorMissedBlocks](#cosmos-slashing-v1beta1-ValidatorMissedBlocks)
  
- [cosmos/slashing/v1beta1/query.proto](#cosmos_slashing_v1beta1_query-proto)
    - [QueryParamsRequest](#cosmos-slashing-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-slashing-v1beta1-QueryParamsResponse)
    - [QuerySigningInfoRequest](#cosmos-slashing-v1beta1-QuerySigningInfoRequest)
    - [QuerySigningInfoResponse](#cosmos-slashing-v1beta1-QuerySigningInfoResponse)
    - [QuerySigningInfosRequest](#cosmos-slashing-v1beta1-QuerySigningInfosRequest)
    - [QuerySigningInfosResponse](#cosmos-slashing-v1beta1-QuerySigningInfosResponse)
  
    - [Query](#cosmos-slashing-v1beta1-Query)
  
- [cosmos/slashing/v1beta1/tx.proto](#cosmos_slashing_v1beta1_tx-proto)
    - [MsgUnjail](#cosmos-slashing-v1beta1-MsgUnjail)
    - [MsgUnjailResponse](#cosmos-slashing-v1beta1-MsgUnjailResponse)
    - [MsgUpdateParams](#cosmos-slashing-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-slashing-v1beta1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmos-slashing-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_slashing_v1beta1_slashing-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/slashing/v1beta1/slashing.proto



<a name="cosmos-slashing-v1beta1-Params"></a>

### Params
Params represents the parameters used for by the slashing module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signed_blocks_window | [int64](#int64) |  |  |
| min_signed_per_window | [bytes](#bytes) |  |  |
| downtime_jail_duration | [google.protobuf.Duration](#google-protobuf-Duration) |  |  |
| slash_fraction_double_sign | [bytes](#bytes) |  |  |
| slash_fraction_downtime | [bytes](#bytes) |  |  |






<a name="cosmos-slashing-v1beta1-ValidatorSigningInfo"></a>

### ValidatorSigningInfo
ValidatorSigningInfo defines a validator&#39;s signing info for monitoring their
liveness activity.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| start_height | [int64](#int64) |  | Height at which validator was first a candidate OR was un-jailed |
| index_offset | [int64](#int64) |  | Index which is incremented every time a validator is bonded in a block and _may_ have signed a pre-commit or not. This in conjunction with the signed_blocks_window param determines the index in the missed block bitmap. |
| jailed_until | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Timestamp until which the validator is jailed due to liveness downtime. |
| tombstoned | [bool](#bool) |  | Whether or not a validator has been tombstoned (killed out of validator set). It is set once the validator commits an equivocation or for any other configured misbehavior. |
| missed_blocks_counter | [int64](#int64) |  | A counter of missed (unsigned) blocks. It is used to avoid unnecessary reads in the missed block bitmap. |





 

 

 

 



<a name="cosmos_slashing_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/slashing/v1beta1/genesis.proto



<a name="cosmos-slashing-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the slashing module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-slashing-v1beta1-Params) |  | params defines all the parameters of the module. |
| signing_infos | [SigningInfo](#cosmos-slashing-v1beta1-SigningInfo) | repeated | signing_infos represents a map between validator addresses and their signing infos. |
| missed_blocks | [ValidatorMissedBlocks](#cosmos-slashing-v1beta1-ValidatorMissedBlocks) | repeated | missed_blocks represents a map between validator addresses and their missed blocks. |






<a name="cosmos-slashing-v1beta1-MissedBlock"></a>

### MissedBlock
MissedBlock contains height and missed status as boolean.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [int64](#int64) |  | index is the height at which the block was missed. |
| missed | [bool](#bool) |  | missed is the missed status. |






<a name="cosmos-slashing-v1beta1-SigningInfo"></a>

### SigningInfo
SigningInfo stores validator signing info of corresponding address.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the validator address. |
| validator_signing_info | [ValidatorSigningInfo](#cosmos-slashing-v1beta1-ValidatorSigningInfo) |  | validator_signing_info represents the signing info of this validator. |






<a name="cosmos-slashing-v1beta1-ValidatorMissedBlocks"></a>

### ValidatorMissedBlocks
ValidatorMissedBlocks contains array of missed blocks of corresponding
address.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the validator address. |
| missed_blocks | [MissedBlock](#cosmos-slashing-v1beta1-MissedBlock) | repeated | missed_blocks is an array of missed blocks by the validator. |





 

 

 

 



<a name="cosmos_slashing_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/slashing/v1beta1/query.proto



<a name="cosmos-slashing-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method






<a name="cosmos-slashing-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-slashing-v1beta1-Params) |  |  |






<a name="cosmos-slashing-v1beta1-QuerySigningInfoRequest"></a>

### QuerySigningInfoRequest
QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cons_address | [string](#string) |  | cons_address is the address to query signing info of |






<a name="cosmos-slashing-v1beta1-QuerySigningInfoResponse"></a>

### QuerySigningInfoResponse
QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| val_signing_info | [ValidatorSigningInfo](#cosmos-slashing-v1beta1-ValidatorSigningInfo) |  | val_signing_info is the signing info of requested val cons address |






<a name="cosmos-slashing-v1beta1-QuerySigningInfosRequest"></a>

### QuerySigningInfosRequest
QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  |  |






<a name="cosmos-slashing-v1beta1-QuerySigningInfosResponse"></a>

### QuerySigningInfosResponse
QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| info | [ValidatorSigningInfo](#cosmos-slashing-v1beta1-ValidatorSigningInfo) | repeated | info is the signing info of all validators |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  |  |





 

 

 


<a name="cosmos-slashing-v1beta1-Query"></a>

### Query
Query provides defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#cosmos-slashing-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-slashing-v1beta1-QueryParamsResponse) | Params queries the parameters of slashing module |
| SigningInfo | [QuerySigningInfoRequest](#cosmos-slashing-v1beta1-QuerySigningInfoRequest) | [QuerySigningInfoResponse](#cosmos-slashing-v1beta1-QuerySigningInfoResponse) | SigningInfo queries the signing info of given cons address |
| SigningInfos | [QuerySigningInfosRequest](#cosmos-slashing-v1beta1-QuerySigningInfosRequest) | [QuerySigningInfosResponse](#cosmos-slashing-v1beta1-QuerySigningInfosResponse) | SigningInfos queries signing info of all validators |

 



<a name="cosmos_slashing_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/slashing/v1beta1/tx.proto



<a name="cosmos-slashing-v1beta1-MsgUnjail"></a>

### MsgUnjail
MsgUnjail defines the Msg/Unjail request type


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_addr | [string](#string) |  |  |






<a name="cosmos-slashing-v1beta1-MsgUnjailResponse"></a>

### MsgUnjailResponse
MsgUnjailResponse defines the Msg/Unjail response type






<a name="cosmos-slashing-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-slashing-v1beta1-Params) |  | params defines the x/slashing parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-slashing-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="cosmos-slashing-v1beta1-Msg"></a>

### Msg
Msg defines the slashing Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Unjail | [MsgUnjail](#cosmos-slashing-v1beta1-MsgUnjail) | [MsgUnjailResponse](#cosmos-slashing-v1beta1-MsgUnjailResponse) | Unjail defines a method for unjailing a jailed validator, thus returning them into the bonded validator set, so they can begin receiving provisions and rewards again. |
| UpdateParams | [MsgUpdateParams](#cosmos-slashing-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-slashing-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/slashing module parameters. The authority defaults to the x/gov module account. |

 



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

