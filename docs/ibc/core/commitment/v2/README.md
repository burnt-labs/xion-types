# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/core/commitment/v2/commitment.proto](#ibc_core_commitment_v2_commitment-proto)
    - [MerklePath](#ibc-core-commitment-v2-MerklePath)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_core_commitment_v2_commitment-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/commitment/v2/commitment.proto



<a name="ibc-core-commitment-v2-MerklePath"></a>

### MerklePath
MerklePath is the path used to verify commitment proofs, which can be an
arbitrary structured object (defined by a commitment type).
ICS-23 verification supports membership proofs for nested merkle trees.
The ICS-24 standard provable keys MUST be stored in the lowest level tree with an optional prefix.
The IC24 provable tree may then be stored in a higher level tree(s) that hash up to the root hash
stored in the consensus state of the client.
Each element of the path represents the key of a merkle tree from the root to the leaf.
The elements of the path before the final element must be the path to the tree that contains
the ICS24 provable store. Thus, it should remain constant for all ICS24 proofs.
The final element of the path is the key of the leaf in the ICS24 provable store,
Thus IBC core will append the ICS24 path to the final element of the MerklePath
stored in the counterparty to create the full path to the leaf for proof verification.
Examples:
Cosmos SDK:
The Cosmos SDK commits to a multi-tree where each store is an IAVL tree and all store hashes
are hashed in a simple merkle tree to get the final root hash. Thus, the MerklePath in the counterparty
MerklePrefix has the following structure: [&#34;ibc&#34;, &#34;&#34;]
The core IBC handler will append the ICS24 path to the final element of the MerklePath
like so: [&#34;ibc&#34;, &#34;{packetCommitmentPath}&#34;] which will then be used for final verification.
Ethereum:
The Ethereum client commits to a single Patricia merkle trie. The ICS24 provable store is managed
by the smart contract state. Each smart contract has a specific prefix reserved within the global trie.
Thus the MerklePath in the counterparty is the prefix to the smart contract state in the global trie.
Since there is only one tree in the commitment structure of ethereum the MerklePath in the counterparty
MerklePrefix has the following structure: [&#34;IBCCoreContractAddressStoragePrefix&#34;]
The core IBC handler will append the ICS24 path to the final element of the MerklePath
like so: [&#34;IBCCoreContractAddressStoragePrefix{packetCommitmentPath}&#34;] which will then be used for final
verification. Thus the MerklePath in the counterparty MerklePrefix is the nested key path from the root hash of the
consensus state down to the ICS24 provable store. The IBC handler retrieves the counterparty key path to the ICS24
provable store from the MerklePath and appends the ICS24 path to get the final key path to the value being verified
by the client against the root hash in the client&#39;s consensus state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key_path | [bytes](#bytes) | repeated |  |





 

 

 

 



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

