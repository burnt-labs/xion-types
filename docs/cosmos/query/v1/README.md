# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/query/v1/query.proto](#cosmos_query_v1_query-proto)
    - [File-level Extensions](#cosmos_query_v1_query-proto-extensions)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_query_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/query/v1/query.proto


 

 


<a name="cosmos_query_v1_query-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| module_query_safe | bool | .google.protobuf.MethodOptions | 11110001 | module_query_safe is set to true when the query is safe to be called from within the state machine, for example from another module&#39;s Keeper, via ADR-033 calls or from CosmWasm contracts. Concretely, it means that the query is: 1. deterministic: given a block height, returns the exact same response upon multiple calls; and doesn&#39;t introduce any state-machine-breaking changes across SDK patch version. 2. consumes gas correctly.

If you are a module developer and want to add this annotation to one of your own queries, please make sure that the corresponding query: 1. is deterministic and won&#39;t introduce state-machine-breaking changes without a coordinated upgrade path, 2. has its gas tracked, to avoid the attack vector where no gas is accounted for on potentially high-computation queries.

For queries that potentially consume a large amount of gas (for example those with pagination, if the pagination field is incorrectly set), we also recommend adding Protobuf comments to warn module developers consuming these queries.

When set to true, the query can safely be called |

 

 



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

