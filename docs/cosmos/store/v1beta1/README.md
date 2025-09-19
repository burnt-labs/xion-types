# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/store/v1beta1/commit_info.proto](#cosmos_store_v1beta1_commit_info-proto)
    - [CommitID](#cosmos-store-v1beta1-CommitID)
    - [CommitInfo](#cosmos-store-v1beta1-CommitInfo)
    - [StoreInfo](#cosmos-store-v1beta1-StoreInfo)
  
- [cosmos/store/v1beta1/listening.proto](#cosmos_store_v1beta1_listening-proto)
    - [BlockMetadata](#cosmos-store-v1beta1-BlockMetadata)
    - [StoreKVPair](#cosmos-store-v1beta1-StoreKVPair)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_store_v1beta1_commit_info-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/store/v1beta1/commit_info.proto



<a name="cosmos-store-v1beta1-CommitID"></a>

### CommitID
CommitID defines the commitment information when a specific store is
committed.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [int64](#int64) |  |  |
| hash | [bytes](#bytes) |  |  |






<a name="cosmos-store-v1beta1-CommitInfo"></a>

### CommitInfo
CommitInfo defines commit information used by the multi-store when committing
a version/height.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [int64](#int64) |  |  |
| store_infos | [StoreInfo](#cosmos-store-v1beta1-StoreInfo) | repeated |  |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="cosmos-store-v1beta1-StoreInfo"></a>

### StoreInfo
StoreInfo defines store-specific commit information. It contains a reference
between a store name and the commit ID.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| commit_id | [CommitID](#cosmos-store-v1beta1-CommitID) |  |  |





 

 

 

 



<a name="cosmos_store_v1beta1_listening-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/store/v1beta1/listening.proto



<a name="cosmos-store-v1beta1-BlockMetadata"></a>

### BlockMetadata
BlockMetadata contains all the abci event data of a block
the file streamer dump them into files together with the state changes.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| response_commit | [tendermint.abci.ResponseCommit](#tendermint-abci-ResponseCommit) |  |  |
| request_finalize_block | [tendermint.abci.RequestFinalizeBlock](#tendermint-abci-RequestFinalizeBlock) |  |  |
| response_finalize_block | [tendermint.abci.ResponseFinalizeBlock](#tendermint-abci-ResponseFinalizeBlock) |  | TODO: should we renumber this? |






<a name="cosmos-store-v1beta1-StoreKVPair"></a>

### StoreKVPair
StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
Deletes


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| store_key | [string](#string) |  | the store key for the KVStore this pair originates from |
| delete | [bool](#bool) |  | true indicates a delete operation, false indicates a set operation |
| key | [bytes](#bytes) |  |  |
| value | [bytes](#bytes) |  |  |





 

 

 

 



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

