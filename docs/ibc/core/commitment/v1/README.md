# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/core/commitment/v1/commitment.proto](#ibc_core_commitment_v1_commitment-proto)
    - [MerklePrefix](#ibc-core-commitment-v1-MerklePrefix)
    - [MerkleProof](#ibc-core-commitment-v1-MerkleProof)
    - [MerkleRoot](#ibc-core-commitment-v1-MerkleRoot)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_core_commitment_v1_commitment-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/commitment/v1/commitment.proto



<a name="ibc-core-commitment-v1-MerklePrefix"></a>

### MerklePrefix
MerklePrefix is merkle path prefixed to the key.
The constructed key from the Path and the key will be append(Path.KeyPath,
append(Path.KeyPrefix, key...))


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key_prefix | [bytes](#bytes) |  |  |






<a name="ibc-core-commitment-v1-MerkleProof"></a>

### MerkleProof
MerkleProof is a wrapper type over a chain of CommitmentProofs.
It demonstrates membership or non-membership for an element or set of
elements, verifiable in conjunction with a known commitment root. Proofs
should be succinct.
MerkleProofs are ordered from leaf-to-root


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proofs | [cosmos.ics23.v1.CommitmentProof](#cosmos-ics23-v1-CommitmentProof) | repeated |  |






<a name="ibc-core-commitment-v1-MerkleRoot"></a>

### MerkleRoot
MerkleRoot defines a merkle root hash.
In the Cosmos SDK, the AppHash of a block header becomes the root.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  |  |





 

 

 

 



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

