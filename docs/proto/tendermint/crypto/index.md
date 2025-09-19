# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [tendermint/crypto/keys.proto](#tendermint_crypto_keys-proto)
    - [PublicKey](#tendermint-crypto-PublicKey)
  
- [tendermint/crypto/proof.proto](#tendermint_crypto_proof-proto)
    - [DominoOp](#tendermint-crypto-DominoOp)
    - [Proof](#tendermint-crypto-Proof)
    - [ProofOp](#tendermint-crypto-ProofOp)
    - [ProofOps](#tendermint-crypto-ProofOps)
    - [ValueOp](#tendermint-crypto-ValueOp)
  
- [Scalar Value Types](#scalar-value-types)



<a name="tendermint_crypto_keys-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/crypto/keys.proto



<a name="tendermint-crypto-PublicKey"></a>

### PublicKey
PublicKey defines the keys available for use with Validators


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ed25519 | [bytes](#bytes) |  |  |
| secp256k1 | [bytes](#bytes) |  |  |





 

 

 

 



<a name="tendermint_crypto_proof-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/crypto/proof.proto



<a name="tendermint-crypto-DominoOp"></a>

### DominoOp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| input | [string](#string) |  |  |
| output | [string](#string) |  |  |






<a name="tendermint-crypto-Proof"></a>

### Proof



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total | [int64](#int64) |  |  |
| index | [int64](#int64) |  |  |
| leaf_hash | [bytes](#bytes) |  |  |
| aunts | [bytes](#bytes) | repeated |  |






<a name="tendermint-crypto-ProofOp"></a>

### ProofOp
ProofOp defines an operation used for calculating Merkle root
The data could be arbitrary format, providing nessecary data
for example neighbouring node hash


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [string](#string) |  |  |
| key | [bytes](#bytes) |  |  |
| data | [bytes](#bytes) |  |  |






<a name="tendermint-crypto-ProofOps"></a>

### ProofOps
ProofOps is Merkle proof defined by the list of ProofOps


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ops | [ProofOp](#tendermint-crypto-ProofOp) | repeated |  |






<a name="tendermint-crypto-ValueOp"></a>

### ValueOp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  | Encoded in ProofOp.Key. |
| proof | [Proof](#tendermint-crypto-Proof) |  | To encode in ProofOp.Data |





 

 

 

 



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

