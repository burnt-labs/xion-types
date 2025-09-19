# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/crypto/keyring/v1/record.proto](#cosmos_crypto_keyring_v1_record-proto)
    - [Record](#cosmos-crypto-keyring-v1-Record)
    - [Record.Ledger](#cosmos-crypto-keyring-v1-Record-Ledger)
    - [Record.Local](#cosmos-crypto-keyring-v1-Record-Local)
    - [Record.Multi](#cosmos-crypto-keyring-v1-Record-Multi)
    - [Record.Offline](#cosmos-crypto-keyring-v1-Record-Offline)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_crypto_keyring_v1_record-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/crypto/keyring/v1/record.proto



<a name="cosmos-crypto-keyring-v1-Record"></a>

### Record
Record is used for representing a key in the keyring.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name represents a name of Record |
| pub_key | [google.protobuf.Any](#google-protobuf-Any) |  | pub_key represents a public key in any format |
| local | [Record.Local](#cosmos-crypto-keyring-v1-Record-Local) |  | local stores the private key locally. |
| ledger | [Record.Ledger](#cosmos-crypto-keyring-v1-Record-Ledger) |  | ledger stores the information about a Ledger key. |
| multi | [Record.Multi](#cosmos-crypto-keyring-v1-Record-Multi) |  | Multi does not store any other information. |
| offline | [Record.Offline](#cosmos-crypto-keyring-v1-Record-Offline) |  | Offline does not store any other information. |






<a name="cosmos-crypto-keyring-v1-Record-Ledger"></a>

### Record.Ledger
Ledger item


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [cosmos.crypto.hd.v1.BIP44Params](#cosmos-crypto-hd-v1-BIP44Params) |  |  |






<a name="cosmos-crypto-keyring-v1-Record-Local"></a>

### Record.Local
Item is a keyring item stored in a keyring backend.
Local item


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| priv_key | [google.protobuf.Any](#google-protobuf-Any) |  |  |






<a name="cosmos-crypto-keyring-v1-Record-Multi"></a>

### Record.Multi
Multi item






<a name="cosmos-crypto-keyring-v1-Record-Offline"></a>

### Record.Offline
Offline item





 

 

 

 



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

