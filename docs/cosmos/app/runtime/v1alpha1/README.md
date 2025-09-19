# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/app/runtime/v1alpha1/module.proto](#cosmos_app_runtime_v1alpha1_module-proto)
    - [Module](#cosmos-app-runtime-v1alpha1-Module)
    - [StoreKeyConfig](#cosmos-app-runtime-v1alpha1-StoreKeyConfig)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_app_runtime_v1alpha1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/app/runtime/v1alpha1/module.proto



<a name="cosmos-app-runtime-v1alpha1-Module"></a>

### Module
Module is the config object for the runtime module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app_name | [string](#string) |  | app_name is the name of the app. |
| begin_blockers | [string](#string) | repeated | begin_blockers specifies the module names of begin blockers to call in the order in which they should be called. If this is left empty no begin blocker will be registered. |
| end_blockers | [string](#string) | repeated | end_blockers specifies the module names of the end blockers to call in the order in which they should be called. If this is left empty no end blocker will be registered. |
| init_genesis | [string](#string) | repeated | init_genesis specifies the module names of init genesis functions to call in the order in which they should be called. If this is left empty no init genesis function will be registered. |
| export_genesis | [string](#string) | repeated | export_genesis specifies the order in which to export module genesis data. If this is left empty, the init_genesis order will be used for export genesis if it is specified. |
| override_store_keys | [StoreKeyConfig](#cosmos-app-runtime-v1alpha1-StoreKeyConfig) | repeated | override_store_keys is an optional list of overrides for the module store keys to be used in keeper construction. |
| skip_store_keys | [string](#string) | repeated | skip_store_keys is an optional list of store keys to skip when constructing the module&#39;s keeper. This is useful when a module does not have a store key. NOTE: the provided environment variable will have a fake store service. |
| order_migrations | [string](#string) | repeated | order_migrations defines the order in which module migrations are performed. If this is left empty, it uses the default migration order. https://pkg.go.dev/github.com/cosmos/cosmos-sdk/types/module#DefaultMigrationsOrder |
| precommiters | [string](#string) | repeated | precommiters specifies the module names of the precommiters to call in the order in which they should be called. If this is left empty no precommit function will be registered. |
| prepare_check_staters | [string](#string) | repeated | prepare_check_staters specifies the module names of the prepare_check_staters to call in the order in which they should be called. If this is left empty no preparecheckstate function will be registered. |
| pre_blockers | [string](#string) | repeated | pre_blockers specifies the module names of pre blockers to call in the order in which they should be called. If this is left empty no pre blocker will be registered. |






<a name="cosmos-app-runtime-v1alpha1-StoreKeyConfig"></a>

### StoreKeyConfig
StoreKeyConfig may be supplied to override the default module store key, which
is the module name.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_name | [string](#string) |  | name of the module to override the store key of |
| kv_store_key | [string](#string) |  | the kv store key to use instead of the module name. |





 

 

 

 



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

