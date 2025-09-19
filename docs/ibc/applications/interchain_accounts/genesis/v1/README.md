# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/applications/interchain_accounts/genesis/v1/genesis.proto](#ibc_applications_interchain_accounts_genesis_v1_genesis-proto)
    - [ActiveChannel](#ibc-applications-interchain_accounts-genesis-v1-ActiveChannel)
    - [ControllerGenesisState](#ibc-applications-interchain_accounts-genesis-v1-ControllerGenesisState)
    - [GenesisState](#ibc-applications-interchain_accounts-genesis-v1-GenesisState)
    - [HostGenesisState](#ibc-applications-interchain_accounts-genesis-v1-HostGenesisState)
    - [RegisteredInterchainAccount](#ibc-applications-interchain_accounts-genesis-v1-RegisteredInterchainAccount)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_applications_interchain_accounts_genesis_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/genesis/v1/genesis.proto



<a name="ibc-applications-interchain_accounts-genesis-v1-ActiveChannel"></a>

### ActiveChannel
ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
indicate if the channel is middleware enabled


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  |  |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |
| is_middleware_enabled | [bool](#bool) |  |  |






<a name="ibc-applications-interchain_accounts-genesis-v1-ControllerGenesisState"></a>

### ControllerGenesisState
ControllerGenesisState defines the interchain accounts controller genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| active_channels | [ActiveChannel](#ibc-applications-interchain_accounts-genesis-v1-ActiveChannel) | repeated |  |
| interchain_accounts | [RegisteredInterchainAccount](#ibc-applications-interchain_accounts-genesis-v1-RegisteredInterchainAccount) | repeated |  |
| ports | [string](#string) | repeated |  |
| params | [ibc.applications.interchain_accounts.controller.v1.Params](#ibc-applications-interchain_accounts-controller-v1-Params) |  |  |






<a name="ibc-applications-interchain_accounts-genesis-v1-GenesisState"></a>

### GenesisState
GenesisState defines the interchain accounts genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| controller_genesis_state | [ControllerGenesisState](#ibc-applications-interchain_accounts-genesis-v1-ControllerGenesisState) |  |  |
| host_genesis_state | [HostGenesisState](#ibc-applications-interchain_accounts-genesis-v1-HostGenesisState) |  |  |






<a name="ibc-applications-interchain_accounts-genesis-v1-HostGenesisState"></a>

### HostGenesisState
HostGenesisState defines the interchain accounts host genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| active_channels | [ActiveChannel](#ibc-applications-interchain_accounts-genesis-v1-ActiveChannel) | repeated |  |
| interchain_accounts | [RegisteredInterchainAccount](#ibc-applications-interchain_accounts-genesis-v1-RegisteredInterchainAccount) | repeated |  |
| port | [string](#string) |  |  |
| params | [ibc.applications.interchain_accounts.host.v1.Params](#ibc-applications-interchain_accounts-host-v1-Params) |  |  |






<a name="ibc-applications-interchain_accounts-genesis-v1-RegisteredInterchainAccount"></a>

### RegisteredInterchainAccount
RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  |  |
| port_id | [string](#string) |  |  |
| account_address | [string](#string) |  |  |





 

 

 

 



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

