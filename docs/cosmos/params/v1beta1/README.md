# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/params/v1beta1/params.proto](#cosmos_params_v1beta1_params-proto)
    - [ParamChange](#cosmos-params-v1beta1-ParamChange)
    - [ParameterChangeProposal](#cosmos-params-v1beta1-ParameterChangeProposal)
  
- [cosmos/params/v1beta1/query.proto](#cosmos_params_v1beta1_query-proto)
    - [QueryParamsRequest](#cosmos-params-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-params-v1beta1-QueryParamsResponse)
    - [QuerySubspacesRequest](#cosmos-params-v1beta1-QuerySubspacesRequest)
    - [QuerySubspacesResponse](#cosmos-params-v1beta1-QuerySubspacesResponse)
    - [Subspace](#cosmos-params-v1beta1-Subspace)
  
    - [Query](#cosmos-params-v1beta1-Query)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_params_v1beta1_params-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/params/v1beta1/params.proto



<a name="cosmos-params-v1beta1-ParamChange"></a>

### ParamChange
ParamChange defines an individual parameter change, for use in
ParameterChangeProposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subspace | [string](#string) |  |  |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="cosmos-params-v1beta1-ParameterChangeProposal"></a>

### ParameterChangeProposal
ParameterChangeProposal defines a proposal to change one or more parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| changes | [ParamChange](#cosmos-params-v1beta1-ParamChange) | repeated |  |





 

 

 

 



<a name="cosmos_params_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/params/v1beta1/query.proto



<a name="cosmos-params-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is request type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subspace | [string](#string) |  | subspace defines the module to query the parameter for. |
| key | [string](#string) |  | key defines the key of the parameter in the subspace. |






<a name="cosmos-params-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| param | [ParamChange](#cosmos-params-v1beta1-ParamChange) |  | param defines the queried parameter. |






<a name="cosmos-params-v1beta1-QuerySubspacesRequest"></a>

### QuerySubspacesRequest
QuerySubspacesRequest defines a request type for querying for all registered
subspaces and all keys for a subspace.






<a name="cosmos-params-v1beta1-QuerySubspacesResponse"></a>

### QuerySubspacesResponse
QuerySubspacesResponse defines the response types for querying for all
registered subspaces and all keys for a subspace.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subspaces | [Subspace](#cosmos-params-v1beta1-Subspace) | repeated |  |






<a name="cosmos-params-v1beta1-Subspace"></a>

### Subspace
Subspace defines a parameter subspace name and all the keys that exist for
the subspace.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subspace | [string](#string) |  |  |
| keys | [string](#string) | repeated |  |





 

 

 


<a name="cosmos-params-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#cosmos-params-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-params-v1beta1-QueryParamsResponse) | Params queries a specific parameter of a module, given its subspace and key. |
| Subspaces | [QuerySubspacesRequest](#cosmos-params-v1beta1-QuerySubspacesRequest) | [QuerySubspacesResponse](#cosmos-params-v1beta1-QuerySubspacesResponse) | Subspaces queries for all registered subspaces and all keys for a subspace. |

 



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

