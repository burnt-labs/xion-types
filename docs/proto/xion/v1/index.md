# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [xion/v1/feegrant.proto](#xion_v1_feegrant-proto)
    - [AuthzAllowance](#xion-v1-AuthzAllowance)
    - [ContractsAllowance](#xion-v1-ContractsAllowance)
    - [MultiAnyAllowance](#xion-v1-MultiAnyAllowance)
  
- [xion/v1/genesis.proto](#xion_v1_genesis-proto)
    - [GenesisState](#xion-v1-GenesisState)
  
- [xion/v1/query.proto](#xion_v1_query-proto)
    - [QueryPlatformMinimumRequest](#xion-v1-QueryPlatformMinimumRequest)
    - [QueryPlatformMinimumResponse](#xion-v1-QueryPlatformMinimumResponse)
    - [QueryPlatformPercentageRequest](#xion-v1-QueryPlatformPercentageRequest)
    - [QueryPlatformPercentageResponse](#xion-v1-QueryPlatformPercentageResponse)
    - [QueryWebAuthNVerifyAuthenticateRequest](#xion-v1-QueryWebAuthNVerifyAuthenticateRequest)
    - [QueryWebAuthNVerifyAuthenticateResponse](#xion-v1-QueryWebAuthNVerifyAuthenticateResponse)
    - [QueryWebAuthNVerifyRegisterRequest](#xion-v1-QueryWebAuthNVerifyRegisterRequest)
    - [QueryWebAuthNVerifyRegisterResponse](#xion-v1-QueryWebAuthNVerifyRegisterResponse)
  
    - [Query](#xion-v1-Query)
  
- [xion/v1/tx.proto](#xion_v1_tx-proto)
    - [MsgMultiSend](#xion-v1-MsgMultiSend)
    - [MsgMultiSendResponse](#xion-v1-MsgMultiSendResponse)
    - [MsgSend](#xion-v1-MsgSend)
    - [MsgSendResponse](#xion-v1-MsgSendResponse)
    - [MsgSetPlatformMinimum](#xion-v1-MsgSetPlatformMinimum)
    - [MsgSetPlatformMinimumResponse](#xion-v1-MsgSetPlatformMinimumResponse)
    - [MsgSetPlatformPercentage](#xion-v1-MsgSetPlatformPercentage)
    - [MsgSetPlatformPercentageResponse](#xion-v1-MsgSetPlatformPercentageResponse)
  
    - [Msg](#xion-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="xion_v1_feegrant-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/v1/feegrant.proto



<a name="xion-v1-AuthzAllowance"></a>

### AuthzAllowance
AuthzAllowance creates allowance only authz message for a specific grantee


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowance | [google.protobuf.Any](#google-protobuf-Any) |  | allowance can be any of basic and periodic fee allowance. |
| authz_grantee | [string](#string) |  | The address that can use this authorization-based allowance |






<a name="xion-v1-ContractsAllowance"></a>

### ContractsAllowance
ContractsAllowance creates allowance only for specific contracts


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowance | [google.protobuf.Any](#google-protobuf-Any) |  | allowance can be any allowance interface type. |
| contract_addresses | [string](#string) | repeated | List of contract addresses that this allowance applies to |






<a name="xion-v1-MultiAnyAllowance"></a>

### MultiAnyAllowance
MultiAnyAllowance creates an allowance that pays if any of the internal
allowances are met


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowances | [google.protobuf.Any](#google-protobuf-Any) | repeated | allowance can be any allowance interface type. |





 

 

 

 



<a name="xion_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/v1/genesis.proto



<a name="xion-v1-GenesisState"></a>

### GenesisState
GenesisState defines the xion module&#39;s genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| platform_percentage | [uint32](#uint32) |  | The percentage fee taken by the platform |
| platform_minimums | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Minimum amounts required for platform operations |





 

 

 

 



<a name="xion_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/v1/query.proto



<a name="xion-v1-QueryPlatformMinimumRequest"></a>

### QueryPlatformMinimumRequest
QueryPlatformMinimumRequest is the request type for querying platform minimum
fees






<a name="xion-v1-QueryPlatformMinimumResponse"></a>

### QueryPlatformMinimumResponse
QueryPlatformMinimumResponse is the response type for querying platform
minimum fees


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| minimums | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | The minimum fees required by the platform |






<a name="xion-v1-QueryPlatformPercentageRequest"></a>

### QueryPlatformPercentageRequest
QueryPlatformPercentageRequest is the request type for querying platform
percentage






<a name="xion-v1-QueryPlatformPercentageResponse"></a>

### QueryPlatformPercentageResponse
QueryPlatformPercentageResponse is the response type for querying platform
percentage


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| platform_percentage | [uint64](#uint64) |  | The platform percentage fee |






<a name="xion-v1-QueryWebAuthNVerifyAuthenticateRequest"></a>

### QueryWebAuthNVerifyAuthenticateRequest
QueryWebAuthNVerifyAuthenticateRequest is the request type for WebAuthN
authentication verification


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addr | [string](#string) |  | The account address |
| challenge | [string](#string) |  | The challenge string for authentication |
| rp | [string](#string) |  | The relying party identifier |
| credential | [bytes](#bytes) |  | The credential to verify |
| data | [bytes](#bytes) |  | The authentication data |






<a name="xion-v1-QueryWebAuthNVerifyAuthenticateResponse"></a>

### QueryWebAuthNVerifyAuthenticateResponse
QueryWebAuthNVerifyAuthenticateResponse is the response type for WebAuthN
authentication verification






<a name="xion-v1-QueryWebAuthNVerifyRegisterRequest"></a>

### QueryWebAuthNVerifyRegisterRequest
QueryWebAuthNVerifyRegisterRequest is the request type for WebAuthN
registration verification


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addr | [string](#string) |  | The account address |
| challenge | [string](#string) |  | The challenge string for registration |
| rp | [string](#string) |  | The relying party identifier |
| data | [bytes](#bytes) |  | The registration data |






<a name="xion-v1-QueryWebAuthNVerifyRegisterResponse"></a>

### QueryWebAuthNVerifyRegisterResponse
QueryWebAuthNVerifyRegisterResponse is the response type for WebAuthN
registration verification


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| credential | [bytes](#bytes) |  | The generated credential |





 

 

 


<a name="xion-v1-Query"></a>

### Query
Query defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| WebAuthNVerifyRegister | [QueryWebAuthNVerifyRegisterRequest](#xion-v1-QueryWebAuthNVerifyRegisterRequest) | [QueryWebAuthNVerifyRegisterResponse](#xion-v1-QueryWebAuthNVerifyRegisterResponse) | WebAuthNVerifyRegister verifies a WebAuthN registration |
| WebAuthNVerifyAuthenticate | [QueryWebAuthNVerifyAuthenticateRequest](#xion-v1-QueryWebAuthNVerifyAuthenticateRequest) | [QueryWebAuthNVerifyAuthenticateResponse](#xion-v1-QueryWebAuthNVerifyAuthenticateResponse) | WebAuthNVerifyAuthenticate verifies a WebAuthN authentication |
| PlatformPercentage | [QueryPlatformPercentageRequest](#xion-v1-QueryPlatformPercentageRequest) | [QueryPlatformPercentageResponse](#xion-v1-QueryPlatformPercentageResponse) | PlatformPercentage queries the platform percentage fee |
| PlatformMinimum | [QueryPlatformMinimumRequest](#xion-v1-QueryPlatformMinimumRequest) | [QueryPlatformMinimumResponse](#xion-v1-QueryPlatformMinimumResponse) | PlatformMinimum queries the platform minimum fees |

 



<a name="xion_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/v1/tx.proto



<a name="xion-v1-MsgMultiSend"></a>

### MsgMultiSend
MsgMultiSend represents an arbitrary multi-in, multi-out send message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inputs | [cosmos.bank.v1beta1.Input](#cosmos-bank-v1beta1-Input) | repeated | Inputs, despite being `repeated`, only allows one sender input. This is checked in MsgMultiSend&#39;s ValidateBasic. |
| outputs | [cosmos.bank.v1beta1.Output](#cosmos-bank-v1beta1-Output) | repeated | The outputs specifying recipient addresses and amounts |






<a name="xion-v1-MsgMultiSendResponse"></a>

### MsgMultiSendResponse
MsgMultiSendResponse defines the Msg/MultiSend response type.






<a name="xion-v1-MsgSend"></a>

### MsgSend
MsgSend represents a message to send coins from one account to another.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_address | [string](#string) |  | The address sending the coins |
| to_address | [string](#string) |  | The address receiving the coins |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | The amount of coins to send |






<a name="xion-v1-MsgSendResponse"></a>

### MsgSendResponse
MsgSendResponse defines the Msg/Send response type.






<a name="xion-v1-MsgSetPlatformMinimum"></a>

### MsgSetPlatformMinimum
MsgSetPlatformMinimum defines the message for setting platform minimum fees


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | The authority address that can set the platform minimums |
| minimums | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | The minimum fees required by the platform |






<a name="xion-v1-MsgSetPlatformMinimumResponse"></a>

### MsgSetPlatformMinimumResponse
MsgSetPlatformMinimumResponse defines the response for setting platform
minimum fees






<a name="xion-v1-MsgSetPlatformPercentage"></a>

### MsgSetPlatformPercentage
MsgSetPlatformPercentage defines the message for setting platform percentage


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | The authority address that can set the platform percentage |
| platform_percentage | [uint32](#uint32) |  | platform_percentage is the platform fee percentage to multiplied by 10000 |






<a name="xion-v1-MsgSetPlatformPercentageResponse"></a>

### MsgSetPlatformPercentageResponse
MsgSetPlatformPercentageResponse defines the response for setting platform
percentage





 

 

 


<a name="xion-v1-Msg"></a>

### Msg
Msg defines the xion Msg service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Send | [MsgSend](#xion-v1-MsgSend) | [MsgSendResponse](#xion-v1-MsgSendResponse) | Send defines a method for sending coins from one account to another account. |
| MultiSend | [MsgMultiSend](#xion-v1-MsgMultiSend) | [MsgMultiSendResponse](#xion-v1-MsgMultiSendResponse) | MultiSend defines a method for sending coins from some accounts to other accounts. |
| SetPlatformPercentage | [MsgSetPlatformPercentage](#xion-v1-MsgSetPlatformPercentage) | [MsgSetPlatformPercentageResponse](#xion-v1-MsgSetPlatformPercentageResponse) | SetPlatformPercentage defines the method for updating the platform percentage fee |
| SetPlatformMinimum | [MsgSetPlatformMinimum](#xion-v1-MsgSetPlatformMinimum) | [MsgSetPlatformMinimumResponse](#xion-v1-MsgSetPlatformMinimumResponse) | SetPlatformMinimum defines the method for updating the platform percentage fee |

 



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

