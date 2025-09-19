# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/benchmark/v1/benchmark.proto](#cosmos_benchmark_v1_benchmark-proto)
    - [Op](#cosmos-benchmark-v1-Op)
  
- [cosmos/benchmark/v1/tx.proto](#cosmos_benchmark_v1_tx-proto)
    - [MsgLoadTest](#cosmos-benchmark-v1-MsgLoadTest)
    - [MsgLoadTestResponse](#cosmos-benchmark-v1-MsgLoadTestResponse)
  
    - [Msg](#cosmos-benchmark-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_benchmark_v1_benchmark-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/benchmark/v1/benchmark.proto



<a name="cosmos-benchmark-v1-Op"></a>

### Op
Op is a message describing a benchmark operation.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| seed | [uint64](#uint64) |  |  |
| actor | [string](#string) |  |  |
| key_length | [uint64](#uint64) |  |  |
| value_length | [uint64](#uint64) |  |  |
| iterations | [uint32](#uint32) |  |  |
| delete | [bool](#bool) |  |  |
| exists | [bool](#bool) |  |  |





 

 

 

 



<a name="cosmos_benchmark_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/benchmark/v1/tx.proto



<a name="cosmos-benchmark-v1-MsgLoadTest"></a>

### MsgLoadTest
MsgLoadTestOps defines a message containing a sequence of load test operations.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| caller | [bytes](#bytes) |  |  |
| ops | [Op](#cosmos-benchmark-v1-Op) | repeated |  |






<a name="cosmos-benchmark-v1-MsgLoadTestResponse"></a>

### MsgLoadTestResponse
MsgLoadTestResponse defines a message containing the results of a load test operation.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total_time | [uint64](#uint64) |  |  |
| total_errors | [uint64](#uint64) |  |  |





 

 

 


<a name="cosmos-benchmark-v1-Msg"></a>

### Msg
Msg defines the benchmark Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| LoadTest | [MsgLoadTest](#cosmos-benchmark-v1-MsgLoadTest) | [MsgLoadTestResponse](#cosmos-benchmark-v1-MsgLoadTestResponse) | LoadTest defines a method for executing a sequence of load test operations. |

 



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

