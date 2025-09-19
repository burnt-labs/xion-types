# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/tx/signing/v1beta1/signing.proto](#cosmos_tx_signing_v1beta1_signing-proto)
    - [SignatureDescriptor](#cosmos-tx-signing-v1beta1-SignatureDescriptor)
    - [SignatureDescriptor.Data](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data)
    - [SignatureDescriptor.Data.Multi](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data-Multi)
    - [SignatureDescriptor.Data.Single](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data-Single)
    - [SignatureDescriptors](#cosmos-tx-signing-v1beta1-SignatureDescriptors)
  
    - [SignMode](#cosmos-tx-signing-v1beta1-SignMode)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_tx_signing_v1beta1_signing-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/tx/signing/v1beta1/signing.proto



<a name="cosmos-tx-signing-v1beta1-SignatureDescriptor"></a>

### SignatureDescriptor
SignatureDescriptor is a convenience type which represents the full data for
a signature including the public key of the signer, signing modes and the
signature itself. It is primarily used for coordinating signatures between
clients.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| public_key | [google.protobuf.Any](#google-protobuf-Any) |  | public_key is the public key of the signer |
| data | [SignatureDescriptor.Data](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data) |  |  |
| sequence | [uint64](#uint64) |  | sequence is the sequence of the account, which describes the number of committed transactions signed by a given address. It is used to prevent replay attacks. |






<a name="cosmos-tx-signing-v1beta1-SignatureDescriptor-Data"></a>

### SignatureDescriptor.Data
Data represents signature data


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| single | [SignatureDescriptor.Data.Single](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data-Single) |  | single represents a single signer |
| multi | [SignatureDescriptor.Data.Multi](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data-Multi) |  | multi represents a multisig signer |






<a name="cosmos-tx-signing-v1beta1-SignatureDescriptor-Data-Multi"></a>

### SignatureDescriptor.Data.Multi
Multi is the signature data for a multisig public key


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bitarray | [cosmos.crypto.multisig.v1beta1.CompactBitArray](#cosmos-crypto-multisig-v1beta1-CompactBitArray) |  | bitarray specifies which keys within the multisig are signing |
| signatures | [SignatureDescriptor.Data](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data) | repeated | signatures is the signatures of the multi-signature |






<a name="cosmos-tx-signing-v1beta1-SignatureDescriptor-Data-Single"></a>

### SignatureDescriptor.Data.Single
Single is the signature data for a single signer


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mode | [SignMode](#cosmos-tx-signing-v1beta1-SignMode) |  | mode is the signing mode of the single signer |
| signature | [bytes](#bytes) |  | signature is the raw signature bytes |






<a name="cosmos-tx-signing-v1beta1-SignatureDescriptors"></a>

### SignatureDescriptors
SignatureDescriptors wraps multiple SignatureDescriptor&#39;s.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signatures | [SignatureDescriptor](#cosmos-tx-signing-v1beta1-SignatureDescriptor) | repeated | signatures are the signature descriptors |





 


<a name="cosmos-tx-signing-v1beta1-SignMode"></a>

### SignMode
SignMode represents a signing mode with its own security guarantees.

This enum should be considered a registry of all known sign modes
in the Cosmos ecosystem. Apps are not expected to support all known
sign modes. Apps that would like to support custom  sign modes are
encouraged to open a small PR against this file to add a new case
to this SignMode enum describing their sign mode so that different
apps have a consistent version of this enum.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SIGN_MODE_UNSPECIFIED | 0 | SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be rejected. |
| SIGN_MODE_DIRECT | 1 | SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is verified with raw bytes from Tx. |
| SIGN_MODE_TEXTUAL | 2 | SIGN_MODE_TEXTUAL is a future signing mode that will verify some human-readable textual representation on top of the binary representation from SIGN_MODE_DIRECT.

Since: cosmos-sdk 0.50 |
| SIGN_MODE_DIRECT_AUX | 3 | SIGN_MODE_DIRECT_AUX specifies a signing mode which uses SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not require signers signing over other signers&#39; `signer_info`.

Since: cosmos-sdk 0.46 |
| SIGN_MODE_LEGACY_AMINO_JSON | 127 | SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses Amino JSON and will be removed in the future. |
| SIGN_MODE_EIP_191 | 191 | SIGN_MODE_EIP_191 specifies the sign mode for EIP 191 signing on the Cosmos SDK. Ref: https://eips.ethereum.org/EIPS/eip-191

Currently, SIGN_MODE_EIP_191 is registered as a SignMode enum variant, but is not implemented on the SDK by default. To enable EIP-191, you need to pass a custom `TxConfig` that has an implementation of `SignModeHandler` for EIP-191. The SDK may decide to fully support EIP-191 in the future.

Since: cosmos-sdk 0.45.2 |


 

 

 



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

