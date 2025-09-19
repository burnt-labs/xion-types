# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/store/snapshots/v1/snapshot.proto](#cosmos_store_snapshots_v1_snapshot-proto)
    - [Metadata](#cosmos-store-snapshots-v1-Metadata)
    - [Snapshot](#cosmos-store-snapshots-v1-Snapshot)
    - [SnapshotExtensionMeta](#cosmos-store-snapshots-v1-SnapshotExtensionMeta)
    - [SnapshotExtensionPayload](#cosmos-store-snapshots-v1-SnapshotExtensionPayload)
    - [SnapshotIAVLItem](#cosmos-store-snapshots-v1-SnapshotIAVLItem)
    - [SnapshotItem](#cosmos-store-snapshots-v1-SnapshotItem)
    - [SnapshotStoreItem](#cosmos-store-snapshots-v1-SnapshotStoreItem)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_store_snapshots_v1_snapshot-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/store/snapshots/v1/snapshot.proto



<a name="cosmos-store-snapshots-v1-Metadata"></a>

### Metadata
Metadata contains SDK-specific snapshot metadata.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chunk_hashes | [bytes](#bytes) | repeated | SHA-256 chunk hashes |






<a name="cosmos-store-snapshots-v1-Snapshot"></a>

### Snapshot
Snapshot contains Tendermint state sync snapshot info.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [uint64](#uint64) |  |  |
| format | [uint32](#uint32) |  |  |
| chunks | [uint32](#uint32) |  |  |
| hash | [bytes](#bytes) |  |  |
| metadata | [Metadata](#cosmos-store-snapshots-v1-Metadata) |  |  |






<a name="cosmos-store-snapshots-v1-SnapshotExtensionMeta"></a>

### SnapshotExtensionMeta
SnapshotExtensionMeta contains metadata about an external snapshotter.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| format | [uint32](#uint32) |  |  |






<a name="cosmos-store-snapshots-v1-SnapshotExtensionPayload"></a>

### SnapshotExtensionPayload
SnapshotExtensionPayload contains payloads of an external snapshotter.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| payload | [bytes](#bytes) |  |  |






<a name="cosmos-store-snapshots-v1-SnapshotIAVLItem"></a>

### SnapshotIAVLItem
SnapshotIAVLItem is an exported IAVL node.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |
| value | [bytes](#bytes) |  |  |
| version | [int64](#int64) |  | version is block height |
| height | [int32](#int32) |  | height is depth of the tree. |






<a name="cosmos-store-snapshots-v1-SnapshotItem"></a>

### SnapshotItem
SnapshotItem is an item contained in a rootmulti.Store snapshot.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| store | [SnapshotStoreItem](#cosmos-store-snapshots-v1-SnapshotStoreItem) |  |  |
| iavl | [SnapshotIAVLItem](#cosmos-store-snapshots-v1-SnapshotIAVLItem) |  |  |
| extension | [SnapshotExtensionMeta](#cosmos-store-snapshots-v1-SnapshotExtensionMeta) |  |  |
| extension_payload | [SnapshotExtensionPayload](#cosmos-store-snapshots-v1-SnapshotExtensionPayload) |  |  |






<a name="cosmos-store-snapshots-v1-SnapshotStoreItem"></a>

### SnapshotStoreItem
SnapshotStoreItem contains metadata about a snapshotted store.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |





 

 

 

 



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

