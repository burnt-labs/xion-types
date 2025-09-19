# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/consensus/v1/query.proto](#cosmos_consensus_v1_query-proto)
    - [QueryParamsRequest](#cosmos-consensus-v1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-consensus-v1-QueryParamsResponse)
  
    - [Query](#cosmos-consensus-v1-Query)
  
- [cosmos/consensus/v1/tx.proto](#cosmos_consensus_v1_tx-proto)
    - [MsgUpdateParams](#cosmos-consensus-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-consensus-v1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmos-consensus-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_consensus_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/consensus/v1/query.proto



<a name="cosmos-consensus-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest defines the request type for querying x/consensus parameters.






<a name="cosmos-consensus-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse defines the response type for querying x/consensus parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [tendermint.types.ConsensusParams](#tendermint-types-ConsensusParams) |  | params are the tendermint consensus params stored in the consensus module. Please note that `params.version` is not populated in this response, it is tracked separately in the x/upgrade module. |





 

 

 


<a name="cosmos-consensus-v1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#cosmos-consensus-v1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-consensus-v1-QueryParamsResponse) | Params queries the parameters of x/consensus module. |

 



<a name="cosmos_consensus_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/consensus/v1/tx.proto



<a name="cosmos-consensus-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| block | [tendermint.types.BlockParams](#tendermint-types-BlockParams) |  | params defines the x/consensus parameters to update. VersionsParams is not included in this Msg because it is tracked separarately in x/upgrade.

NOTE: All parameters must be supplied. |
| evidence | [tendermint.types.EvidenceParams](#tendermint-types-EvidenceParams) |  |  |
| validator | [tendermint.types.ValidatorParams](#tendermint-types-ValidatorParams) |  |  |
| abci | [tendermint.types.ABCIParams](#tendermint-types-ABCIParams) |  |  |






<a name="cosmos-consensus-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="cosmos-consensus-v1-Msg"></a>

### Msg
Msg defines the consensus Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UpdateParams | [MsgUpdateParams](#cosmos-consensus-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-consensus-v1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/consensus module parameters. The authority is defined in the keeper. |

 



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

