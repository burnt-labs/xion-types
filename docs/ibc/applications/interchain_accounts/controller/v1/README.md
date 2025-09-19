# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/applications/interchain_accounts/controller/v1/controller.proto](#ibc_applications_interchain_accounts_controller_v1_controller-proto)
    - [Params](#ibc-applications-interchain_accounts-controller-v1-Params)
  
- [ibc/applications/interchain_accounts/controller/v1/query.proto](#ibc_applications_interchain_accounts_controller_v1_query-proto)
    - [QueryInterchainAccountRequest](#ibc-applications-interchain_accounts-controller-v1-QueryInterchainAccountRequest)
    - [QueryInterchainAccountResponse](#ibc-applications-interchain_accounts-controller-v1-QueryInterchainAccountResponse)
    - [QueryParamsRequest](#ibc-applications-interchain_accounts-controller-v1-QueryParamsRequest)
    - [QueryParamsResponse](#ibc-applications-interchain_accounts-controller-v1-QueryParamsResponse)
  
    - [Query](#ibc-applications-interchain_accounts-controller-v1-Query)
  
- [ibc/applications/interchain_accounts/controller/v1/tx.proto](#ibc_applications_interchain_accounts_controller_v1_tx-proto)
    - [MsgRegisterInterchainAccount](#ibc-applications-interchain_accounts-controller-v1-MsgRegisterInterchainAccount)
    - [MsgRegisterInterchainAccountResponse](#ibc-applications-interchain_accounts-controller-v1-MsgRegisterInterchainAccountResponse)
    - [MsgSendTx](#ibc-applications-interchain_accounts-controller-v1-MsgSendTx)
    - [MsgSendTxResponse](#ibc-applications-interchain_accounts-controller-v1-MsgSendTxResponse)
    - [MsgUpdateParams](#ibc-applications-interchain_accounts-controller-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#ibc-applications-interchain_accounts-controller-v1-MsgUpdateParamsResponse)
  
    - [Msg](#ibc-applications-interchain_accounts-controller-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_applications_interchain_accounts_controller_v1_controller-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/controller/v1/controller.proto



<a name="ibc-applications-interchain_accounts-controller-v1-Params"></a>

### Params
Params defines the set of on-chain interchain accounts parameters.
The following parameters may be used to disable the controller submodule.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| controller_enabled | [bool](#bool) |  | controller_enabled enables or disables the controller submodule. |





 

 

 

 



<a name="ibc_applications_interchain_accounts_controller_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/controller/v1/query.proto



<a name="ibc-applications-interchain_accounts-controller-v1-QueryInterchainAccountRequest"></a>

### QueryInterchainAccountRequest
QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| owner | [string](#string) |  |  |
| connection_id | [string](#string) |  |  |






<a name="ibc-applications-interchain_accounts-controller-v1-QueryInterchainAccountResponse"></a>

### QueryInterchainAccountResponse
QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |






<a name="ibc-applications-interchain_accounts-controller-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="ibc-applications-interchain_accounts-controller-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#ibc-applications-interchain_accounts-controller-v1-Params) |  | params defines the parameters of the module. |





 

 

 


<a name="ibc-applications-interchain_accounts-controller-v1-Query"></a>

### Query
Query provides defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| InterchainAccount | [QueryInterchainAccountRequest](#ibc-applications-interchain_accounts-controller-v1-QueryInterchainAccountRequest) | [QueryInterchainAccountResponse](#ibc-applications-interchain_accounts-controller-v1-QueryInterchainAccountResponse) | InterchainAccount returns the interchain account address for a given owner address on a given connection |
| Params | [QueryParamsRequest](#ibc-applications-interchain_accounts-controller-v1-QueryParamsRequest) | [QueryParamsResponse](#ibc-applications-interchain_accounts-controller-v1-QueryParamsResponse) | Params queries all parameters of the ICA controller submodule. |

 



<a name="ibc_applications_interchain_accounts_controller_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/controller/v1/tx.proto



<a name="ibc-applications-interchain_accounts-controller-v1-MsgRegisterInterchainAccount"></a>

### MsgRegisterInterchainAccount
MsgRegisterInterchainAccount defines the payload for Msg/RegisterAccount


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| owner | [string](#string) |  |  |
| connection_id | [string](#string) |  |  |
| version | [string](#string) |  |  |
| ordering | [ibc.core.channel.v1.Order](#ibc-core-channel-v1-Order) |  |  |






<a name="ibc-applications-interchain_accounts-controller-v1-MsgRegisterInterchainAccountResponse"></a>

### MsgRegisterInterchainAccountResponse
MsgRegisterInterchainAccountResponse defines the response for Msg/RegisterAccount


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channel_id | [string](#string) |  |  |
| port_id | [string](#string) |  |  |






<a name="ibc-applications-interchain_accounts-controller-v1-MsgSendTx"></a>

### MsgSendTx
MsgSendTx defines the payload for Msg/SendTx


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| owner | [string](#string) |  |  |
| connection_id | [string](#string) |  |  |
| packet_data | [ibc.applications.interchain_accounts.v1.InterchainAccountPacketData](#ibc-applications-interchain_accounts-v1-InterchainAccountPacketData) |  |  |
| relative_timeout | [uint64](#uint64) |  | Relative timeout timestamp provided will be added to the current block time during transaction execution. The timeout timestamp must be non-zero. |






<a name="ibc-applications-interchain_accounts-controller-v1-MsgSendTxResponse"></a>

### MsgSendTxResponse
MsgSendTxResponse defines the response for MsgSendTx


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  |  |






<a name="ibc-applications-interchain_accounts-controller-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams defines the payload for Msg/UpdateParams


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| params | [Params](#ibc-applications-interchain_accounts-controller-v1-Params) |  | params defines the 27-interchain-accounts/controller parameters to update.

NOTE: All parameters must be supplied. |






<a name="ibc-applications-interchain_accounts-controller-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response for Msg/UpdateParams





 

 

 


<a name="ibc-applications-interchain_accounts-controller-v1-Msg"></a>

### Msg
Msg defines the 27-interchain-accounts/controller Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| RegisterInterchainAccount | [MsgRegisterInterchainAccount](#ibc-applications-interchain_accounts-controller-v1-MsgRegisterInterchainAccount) | [MsgRegisterInterchainAccountResponse](#ibc-applications-interchain_accounts-controller-v1-MsgRegisterInterchainAccountResponse) | RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount. |
| SendTx | [MsgSendTx](#ibc-applications-interchain_accounts-controller-v1-MsgSendTx) | [MsgSendTxResponse](#ibc-applications-interchain_accounts-controller-v1-MsgSendTxResponse) | SendTx defines a rpc handler for MsgSendTx. |
| UpdateParams | [MsgUpdateParams](#ibc-applications-interchain_accounts-controller-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#ibc-applications-interchain_accounts-controller-v1-MsgUpdateParamsResponse) | UpdateParams defines a rpc handler for MsgUpdateParams. |

 



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

