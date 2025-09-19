# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/applications/interchain_accounts/host/v1/host.proto](#ibc_applications_interchain_accounts_host_v1_host-proto)
    - [Params](#ibc-applications-interchain_accounts-host-v1-Params)
    - [QueryRequest](#ibc-applications-interchain_accounts-host-v1-QueryRequest)
  
- [ibc/applications/interchain_accounts/host/v1/query.proto](#ibc_applications_interchain_accounts_host_v1_query-proto)
    - [QueryParamsRequest](#ibc-applications-interchain_accounts-host-v1-QueryParamsRequest)
    - [QueryParamsResponse](#ibc-applications-interchain_accounts-host-v1-QueryParamsResponse)
  
    - [Query](#ibc-applications-interchain_accounts-host-v1-Query)
  
- [ibc/applications/interchain_accounts/host/v1/tx.proto](#ibc_applications_interchain_accounts_host_v1_tx-proto)
    - [MsgModuleQuerySafe](#ibc-applications-interchain_accounts-host-v1-MsgModuleQuerySafe)
    - [MsgModuleQuerySafeResponse](#ibc-applications-interchain_accounts-host-v1-MsgModuleQuerySafeResponse)
    - [MsgUpdateParams](#ibc-applications-interchain_accounts-host-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#ibc-applications-interchain_accounts-host-v1-MsgUpdateParamsResponse)
  
    - [Msg](#ibc-applications-interchain_accounts-host-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_applications_interchain_accounts_host_v1_host-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/host/v1/host.proto



<a name="ibc-applications-interchain_accounts-host-v1-Params"></a>

### Params
Params defines the set of on-chain interchain accounts parameters.
The following parameters may be used to disable the host submodule.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| host_enabled | [bool](#bool) |  | host_enabled enables or disables the host submodule. |
| allow_messages | [string](#string) | repeated | allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. |






<a name="ibc-applications-interchain_accounts-host-v1-QueryRequest"></a>

### QueryRequest
QueryRequest defines the parameters for a particular query request
by an interchain account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [string](#string) |  | path defines the path of the query request as defined by ADR-021. https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing |
| data | [bytes](#bytes) |  | data defines the payload of the query request as defined by ADR-021. https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing |





 

 

 

 



<a name="ibc_applications_interchain_accounts_host_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/host/v1/query.proto



<a name="ibc-applications-interchain_accounts-host-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="ibc-applications-interchain_accounts-host-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#ibc-applications-interchain_accounts-host-v1-Params) |  | params defines the parameters of the module. |





 

 

 


<a name="ibc-applications-interchain_accounts-host-v1-Query"></a>

### Query
Query provides defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#ibc-applications-interchain_accounts-host-v1-QueryParamsRequest) | [QueryParamsResponse](#ibc-applications-interchain_accounts-host-v1-QueryParamsResponse) | Params queries all parameters of the ICA host submodule. |

 



<a name="ibc_applications_interchain_accounts_host_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/host/v1/tx.proto



<a name="ibc-applications-interchain_accounts-host-v1-MsgModuleQuerySafe"></a>

### MsgModuleQuerySafe
MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| requests | [QueryRequest](#ibc-applications-interchain_accounts-host-v1-QueryRequest) | repeated | requests defines the module safe queries to execute. |






<a name="ibc-applications-interchain_accounts-host-v1-MsgModuleQuerySafeResponse"></a>

### MsgModuleQuerySafeResponse
MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [uint64](#uint64) |  | height at which the responses were queried |
| responses | [bytes](#bytes) | repeated | protobuf encoded responses for each query |






<a name="ibc-applications-interchain_accounts-host-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams defines the payload for Msg/UpdateParams


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| params | [Params](#ibc-applications-interchain_accounts-host-v1-Params) |  | params defines the 27-interchain-accounts/host parameters to update.

NOTE: All parameters must be supplied. |






<a name="ibc-applications-interchain_accounts-host-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response for Msg/UpdateParams





 

 

 


<a name="ibc-applications-interchain_accounts-host-v1-Msg"></a>

### Msg
Msg defines the 27-interchain-accounts/host Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UpdateParams | [MsgUpdateParams](#ibc-applications-interchain_accounts-host-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#ibc-applications-interchain_accounts-host-v1-MsgUpdateParamsResponse) | UpdateParams defines a rpc handler for MsgUpdateParams. |
| ModuleQuerySafe | [MsgModuleQuerySafe](#ibc-applications-interchain_accounts-host-v1-MsgModuleQuerySafe) | [MsgModuleQuerySafeResponse](#ibc-applications-interchain_accounts-host-v1-MsgModuleQuerySafeResponse) | ModuleQuerySafe defines a rpc handler for MsgModuleQuerySafe. |

 



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

