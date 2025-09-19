# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/core/client/v2/config.proto](#ibc_core_client_v2_config-proto)
    - [Config](#ibc-core-client-v2-Config)
  
- [ibc/core/client/v2/counterparty.proto](#ibc_core_client_v2_counterparty-proto)
    - [CounterpartyInfo](#ibc-core-client-v2-CounterpartyInfo)
  
- [ibc/core/client/v2/genesis.proto](#ibc_core_client_v2_genesis-proto)
    - [GenesisCounterpartyInfo](#ibc-core-client-v2-GenesisCounterpartyInfo)
    - [GenesisState](#ibc-core-client-v2-GenesisState)
  
- [ibc/core/client/v2/query.proto](#ibc_core_client_v2_query-proto)
    - [QueryConfigRequest](#ibc-core-client-v2-QueryConfigRequest)
    - [QueryConfigResponse](#ibc-core-client-v2-QueryConfigResponse)
    - [QueryCounterpartyInfoRequest](#ibc-core-client-v2-QueryCounterpartyInfoRequest)
    - [QueryCounterpartyInfoResponse](#ibc-core-client-v2-QueryCounterpartyInfoResponse)
  
    - [Query](#ibc-core-client-v2-Query)
  
- [ibc/core/client/v2/tx.proto](#ibc_core_client_v2_tx-proto)
    - [MsgRegisterCounterparty](#ibc-core-client-v2-MsgRegisterCounterparty)
    - [MsgRegisterCounterpartyResponse](#ibc-core-client-v2-MsgRegisterCounterpartyResponse)
    - [MsgUpdateClientConfig](#ibc-core-client-v2-MsgUpdateClientConfig)
    - [MsgUpdateClientConfigResponse](#ibc-core-client-v2-MsgUpdateClientConfigResponse)
  
    - [Msg](#ibc-core-client-v2-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_core_client_v2_config-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v2/config.proto



<a name="ibc-core-client-v2-Config"></a>

### Config
Config is a **per-client** configuration struct that sets which relayers are allowed to relay v2 IBC messages
for a given client.
If it is set, then only relayers in the allow list can send v2 messages
If it is not set, then the client allows permissionless relaying of v2 messages


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowed_relayers | [string](#string) | repeated | allowed_relayers defines the set of allowed relayers for IBC V2 protocol for the given client |





 

 

 

 



<a name="ibc_core_client_v2_counterparty-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v2/counterparty.proto



<a name="ibc-core-client-v2-CounterpartyInfo"></a>

### CounterpartyInfo
CounterpartyInfo defines the key that the counterparty will use to message our client


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| merkle_prefix | [bytes](#bytes) | repeated | merkle prefix key is the prefix that ics provable keys are stored under |
| client_id | [string](#string) |  | client identifier is the identifier used to send packet messages to our client |





 

 

 

 



<a name="ibc_core_client_v2_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v2/genesis.proto



<a name="ibc-core-client-v2-GenesisCounterpartyInfo"></a>

### GenesisCounterpartyInfo
GenesisCounterpartyInfo defines the state associating a client with a counterparty.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | ClientId is the ID of the given client. |
| counterparty_info | [CounterpartyInfo](#ibc-core-client-v2-CounterpartyInfo) |  | CounterpartyInfo is the counterparty info of the given client. |






<a name="ibc-core-client-v2-GenesisState"></a>

### GenesisState
GenesisState defines the ibc client v2 submodule&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| counterparty_infos | [GenesisCounterpartyInfo](#ibc-core-client-v2-GenesisCounterpartyInfo) | repeated | counterparty info for each client |





 

 

 

 



<a name="ibc_core_client_v2_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v2/query.proto



<a name="ibc-core-client-v2-QueryConfigRequest"></a>

### QueryConfigRequest
QueryConfigRequest is the request type for the Query/Config RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client state unique identifier |






<a name="ibc-core-client-v2-QueryConfigResponse"></a>

### QueryConfigResponse
QueryConfigResponse is the response type for the Query/Config RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| config | [Config](#ibc-core-client-v2-Config) |  |  |






<a name="ibc-core-client-v2-QueryCounterpartyInfoRequest"></a>

### QueryCounterpartyInfoRequest
QueryCounterpartyInfoRequest is the request type for the Query/CounterpartyInfo RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client state unique identifier |






<a name="ibc-core-client-v2-QueryCounterpartyInfoResponse"></a>

### QueryCounterpartyInfoResponse
QueryCounterpartyInfoResponse is the response type for the
Query/CounterpartyInfo RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| counterparty_info | [CounterpartyInfo](#ibc-core-client-v2-CounterpartyInfo) |  |  |





 

 

 


<a name="ibc-core-client-v2-Query"></a>

### Query
Query provides defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CounterpartyInfo | [QueryCounterpartyInfoRequest](#ibc-core-client-v2-QueryCounterpartyInfoRequest) | [QueryCounterpartyInfoResponse](#ibc-core-client-v2-QueryCounterpartyInfoResponse) | CounterpartyInfo queries an IBC light counter party info. |
| Config | [QueryConfigRequest](#ibc-core-client-v2-QueryConfigRequest) | [QueryConfigResponse](#ibc-core-client-v2-QueryConfigResponse) | Config queries the IBC client v2 configuration for a given client. |

 



<a name="ibc_core_client_v2_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v2/tx.proto



<a name="ibc-core-client-v2-MsgRegisterCounterparty"></a>

### MsgRegisterCounterparty
MsgRegisterCounterparty defines a message to register a counterparty on a client


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| counterparty_merkle_prefix | [bytes](#bytes) | repeated | counterparty merkle prefix |
| counterparty_client_id | [string](#string) |  | counterparty client identifier |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v2-MsgRegisterCounterpartyResponse"></a>

### MsgRegisterCounterpartyResponse
MsgRegisterCounterpartyResponse defines the Msg/RegisterCounterparty response type.






<a name="ibc-core-client-v2-MsgUpdateClientConfig"></a>

### MsgUpdateClientConfig
MsgUpdateClientConfig defines the sdk.Msg type to update the configuration for a given client


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| config | [Config](#ibc-core-client-v2-Config) |  | allowed relayers

NOTE: All fields in the config must be supplied. |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v2-MsgUpdateClientConfigResponse"></a>

### MsgUpdateClientConfigResponse
MsgUpdateClientConfigResponse defines the MsgUpdateClientConfig response type.





 

 

 


<a name="ibc-core-client-v2-Msg"></a>

### Msg
Msg defines the ibc/client/v2 Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| RegisterCounterparty | [MsgRegisterCounterparty](#ibc-core-client-v2-MsgRegisterCounterparty) | [MsgRegisterCounterpartyResponse](#ibc-core-client-v2-MsgRegisterCounterpartyResponse) | RegisterCounterparty defines a rpc handler method for MsgRegisterCounterparty. |
| UpdateClientConfig | [MsgUpdateClientConfig](#ibc-core-client-v2-MsgUpdateClientConfig) | [MsgUpdateClientConfigResponse](#ibc-core-client-v2-MsgUpdateClientConfigResponse) | UpdateClientConfig defines a rpc handler method for MsgUpdateClientConfig. |

 



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

