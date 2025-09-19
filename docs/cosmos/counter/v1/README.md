# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/counter/v1/query.proto](#cosmos_counter_v1_query-proto)
    - [QueryGetCountRequest](#cosmos-counter-v1-QueryGetCountRequest)
    - [QueryGetCountResponse](#cosmos-counter-v1-QueryGetCountResponse)
  
    - [Query](#cosmos-counter-v1-Query)
  
- [cosmos/counter/v1/tx.proto](#cosmos_counter_v1_tx-proto)
    - [MsgIncreaseCountResponse](#cosmos-counter-v1-MsgIncreaseCountResponse)
    - [MsgIncreaseCounter](#cosmos-counter-v1-MsgIncreaseCounter)
  
    - [Msg](#cosmos-counter-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_counter_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/counter/v1/query.proto



<a name="cosmos-counter-v1-QueryGetCountRequest"></a>

### QueryGetCountRequest
QueryGetCountRequest defines the request type for querying x/mock count.






<a name="cosmos-counter-v1-QueryGetCountResponse"></a>

### QueryGetCountResponse
QueryGetCountResponse defines the response type for querying x/mock count.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total_count | [int64](#int64) |  |  |





 

 

 


<a name="cosmos-counter-v1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetCount | [QueryGetCountRequest](#cosmos-counter-v1-QueryGetCountRequest) | [QueryGetCountResponse](#cosmos-counter-v1-QueryGetCountResponse) | GetCount queries the parameters of x/Counter module. |

 



<a name="cosmos_counter_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/counter/v1/tx.proto



<a name="cosmos-counter-v1-MsgIncreaseCountResponse"></a>

### MsgIncreaseCountResponse
MsgIncreaseCountResponse is the Msg/Counter response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| new_count | [int64](#int64) |  | new_count is the number of times the counter was incremented. |






<a name="cosmos-counter-v1-MsgIncreaseCounter"></a>

### MsgIncreaseCounter
MsgIncreaseCounter defines a count Msg service counter.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer is the address that controls the module (defaults to x/gov unless overwritten). |
| count | [int64](#int64) |  | count is the number of times to increment the counter. |





 

 

 


<a name="cosmos-counter-v1-Msg"></a>

### Msg
Msg defines the counter Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| IncreaseCount | [MsgIncreaseCounter](#cosmos-counter-v1-MsgIncreaseCounter) | [MsgIncreaseCountResponse](#cosmos-counter-v1-MsgIncreaseCountResponse) | IncreaseCount increments the counter by the specified amount. |

 



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

