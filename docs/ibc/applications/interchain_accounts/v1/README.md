# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/applications/interchain_accounts/v1/account.proto](#ibc_applications_interchain_accounts_v1_account-proto)
    - [InterchainAccount](#ibc-applications-interchain_accounts-v1-InterchainAccount)
  
- [ibc/applications/interchain_accounts/v1/metadata.proto](#ibc_applications_interchain_accounts_v1_metadata-proto)
    - [Metadata](#ibc-applications-interchain_accounts-v1-Metadata)
  
- [ibc/applications/interchain_accounts/v1/packet.proto](#ibc_applications_interchain_accounts_v1_packet-proto)
    - [CosmosTx](#ibc-applications-interchain_accounts-v1-CosmosTx)
    - [InterchainAccountPacketData](#ibc-applications-interchain_accounts-v1-InterchainAccountPacketData)
  
    - [Type](#ibc-applications-interchain_accounts-v1-Type)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_applications_interchain_accounts_v1_account-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/v1/account.proto



<a name="ibc-applications-interchain_accounts-v1-InterchainAccount"></a>

### InterchainAccount
An InterchainAccount is defined as a BaseAccount &amp; the address of the account owner on the controller chain


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_account | [cosmos.auth.v1beta1.BaseAccount](#cosmos-auth-v1beta1-BaseAccount) |  |  |
| account_owner | [string](#string) |  |  |





 

 

 

 



<a name="ibc_applications_interchain_accounts_v1_metadata-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/v1/metadata.proto



<a name="ibc-applications-interchain_accounts-v1-Metadata"></a>

### Metadata
Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  | version defines the ICS27 protocol version |
| controller_connection_id | [string](#string) |  | controller_connection_id is the connection identifier associated with the controller chain |
| host_connection_id | [string](#string) |  | host_connection_id is the connection identifier associated with the host chain |
| address | [string](#string) |  | address defines the interchain account address to be fulfilled upon the OnChanOpenTry handshake step NOTE: the address field is empty on the OnChanOpenInit handshake step |
| encoding | [string](#string) |  | encoding defines the supported codec format |
| tx_type | [string](#string) |  | tx_type defines the type of transactions the interchain account can execute |





 

 

 

 



<a name="ibc_applications_interchain_accounts_v1_packet-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/v1/packet.proto



<a name="ibc-applications-interchain_accounts-v1-CosmosTx"></a>

### CosmosTx
CosmosTx contains a list of sdk.Msg&#39;s. It should be used when sending transactions to an SDK host chain.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messages | [google.protobuf.Any](#google-protobuf-Any) | repeated |  |






<a name="ibc-applications-interchain_accounts-v1-InterchainAccountPacketData"></a>

### InterchainAccountPacketData
InterchainAccountPacketData is comprised of a raw transaction, type of transaction and optional memo field.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [Type](#ibc-applications-interchain_accounts-v1-Type) |  |  |
| data | [bytes](#bytes) |  |  |
| memo | [string](#string) |  |  |





 


<a name="ibc-applications-interchain_accounts-v1-Type"></a>

### Type
Type defines a classification of message issued from a controller chain to its associated interchain accounts
host

| Name | Number | Description |
| ---- | ------ | ----------- |
| TYPE_UNSPECIFIED | 0 | Default zero value enumeration |
| TYPE_EXECUTE_TX | 1 | Execute a transaction on an interchain accounts host chain |


 

 

 



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

