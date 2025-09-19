# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/benchmark/module/v1/module.proto](#cosmos_benchmark_module_v1_module-proto)
    - [GeneratorParams](#cosmos-benchmark-module-v1-GeneratorParams)
    - [Module](#cosmos-benchmark-module-v1-Module)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_benchmark_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/benchmark/module/v1/module.proto



<a name="cosmos-benchmark-module-v1-GeneratorParams"></a>

### GeneratorParams
GenesisParams defines the genesis parameters for the benchmark module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| seed | [uint64](#uint64) |  | seed is the seed for the random number generator. |
| bucket_count | [uint64](#uint64) |  | bucket_count is the number of store keys to uniformly distribute genesis_count keys across. |
| key_mean | [uint64](#uint64) |  | key_mean is the mean size (in normal distribution) of keys in each bucket. |
| key_std_dev | [uint64](#uint64) |  | key_std_dev is the standard deviation of key sizes in each bucket. |
| value_mean | [uint64](#uint64) |  | value_mean is the mean size (in normal distribution) of values in each bucket. |
| value_std_dev | [uint64](#uint64) |  | value_std_dev is the standard deviation of value sizes in each bucket. |
| genesis_count | [uint64](#uint64) |  | genesis_count is the number of keys to insert in the store, distributed across all buckets. |
| insert_weight | [float](#float) |  | insert_weight is the weight of insert operations. |
| update_weight | [float](#float) |  | update_weight is the weight of update operations. |
| get_weight | [float](#float) |  | get_weight is the weight of get operations. |
| delete_weight | [float](#float) |  | delete_weight is the weight of delete operations. |






<a name="cosmos-benchmark-module-v1-Module"></a>

### Module
Module is the config object of the benchmark module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| genesis_params | [GeneratorParams](#cosmos-benchmark-module-v1-GeneratorParams) |  |  |





 

 

 

 



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

