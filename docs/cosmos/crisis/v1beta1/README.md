# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/crisis/v1beta1/genesis.proto](#cosmos_crisis_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-crisis-v1beta1-GenesisState)
  
- [cosmos/crisis/v1beta1/tx.proto](#cosmos_crisis_v1beta1_tx-proto)
    - [MsgUpdateParams](#cosmos-crisis-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-crisis-v1beta1-MsgUpdateParamsResponse)
    - [MsgVerifyInvariant](#cosmos-crisis-v1beta1-MsgVerifyInvariant)
    - [MsgVerifyInvariantResponse](#cosmos-crisis-v1beta1-MsgVerifyInvariantResponse)
  
    - [Msg](#cosmos-crisis-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_crisis_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/crisis/v1beta1/genesis.proto



<a name="cosmos-crisis-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the crisis module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| constant_fee | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | constant_fee is the fee used to verify the invariant in the crisis module. |





 

 

 

 



<a name="cosmos_crisis_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/crisis/v1beta1/tx.proto



<a name="cosmos-crisis-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| constant_fee | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | constant_fee defines the x/crisis parameter. |






<a name="cosmos-crisis-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.






<a name="cosmos-crisis-v1beta1-MsgVerifyInvariant"></a>

### MsgVerifyInvariant
MsgVerifyInvariant represents a message to verify a particular invariance.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | sender is the account address of private key to send coins to fee collector account. |
| invariant_module_name | [string](#string) |  | name of the invariant module. |
| invariant_route | [string](#string) |  | invariant_route is the msg&#39;s invariant route. |






<a name="cosmos-crisis-v1beta1-MsgVerifyInvariantResponse"></a>

### MsgVerifyInvariantResponse
MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type.





 

 

 


<a name="cosmos-crisis-v1beta1-Msg"></a>

### Msg
Msg defines the bank Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| VerifyInvariant | [MsgVerifyInvariant](#cosmos-crisis-v1beta1-MsgVerifyInvariant) | [MsgVerifyInvariantResponse](#cosmos-crisis-v1beta1-MsgVerifyInvariantResponse) | VerifyInvariant defines a method to verify a particular invariant. |
| UpdateParams | [MsgUpdateParams](#cosmos-crisis-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-crisis-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/crisis module parameters. The authority is defined in the keeper. |

 



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

