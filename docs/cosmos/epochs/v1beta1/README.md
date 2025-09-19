# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/epochs/v1beta1/events.proto](#cosmos_epochs_v1beta1_events-proto)
    - [EventEpochEnd](#cosmos-epochs-v1beta1-EventEpochEnd)
    - [EventEpochStart](#cosmos-epochs-v1beta1-EventEpochStart)
  
- [cosmos/epochs/v1beta1/genesis.proto](#cosmos_epochs_v1beta1_genesis-proto)
    - [EpochInfo](#cosmos-epochs-v1beta1-EpochInfo)
    - [GenesisState](#cosmos-epochs-v1beta1-GenesisState)
  
- [cosmos/epochs/v1beta1/query.proto](#cosmos_epochs_v1beta1_query-proto)
    - [QueryCurrentEpochRequest](#cosmos-epochs-v1beta1-QueryCurrentEpochRequest)
    - [QueryCurrentEpochResponse](#cosmos-epochs-v1beta1-QueryCurrentEpochResponse)
    - [QueryEpochInfosRequest](#cosmos-epochs-v1beta1-QueryEpochInfosRequest)
    - [QueryEpochInfosResponse](#cosmos-epochs-v1beta1-QueryEpochInfosResponse)
  
    - [Query](#cosmos-epochs-v1beta1-Query)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_epochs_v1beta1_events-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/epochs/v1beta1/events.proto



<a name="cosmos-epochs-v1beta1-EventEpochEnd"></a>

### EventEpochEnd
EventEpochEnd is an event emitted when an epoch end.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| epoch_number | [int64](#int64) |  |  |






<a name="cosmos-epochs-v1beta1-EventEpochStart"></a>

### EventEpochStart
EventEpochStart is an event emitted when an epoch start.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| epoch_number | [int64](#int64) |  |  |
| epoch_start_time | [int64](#int64) |  |  |





 

 

 

 



<a name="cosmos_epochs_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/epochs/v1beta1/genesis.proto



<a name="cosmos-epochs-v1beta1-EpochInfo"></a>

### EpochInfo
EpochInfo is a struct that describes the data going into
a timer defined by the x/epochs module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) |  | identifier is a unique reference to this particular timer. |
| start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | start_time is the time at which the timer first ever ticks. If start_time is in the future, the epoch will not begin until the start time. |
| duration | [google.protobuf.Duration](#google-protobuf-Duration) |  | duration is the time in between epoch ticks. In order for intended behavior to be met, duration should be greater than the chains expected block time. Duration must be non-zero. |
| current_epoch | [int64](#int64) |  | current_epoch is the current epoch number, or in other words, how many times has the timer &#39;ticked&#39;. The first tick (current_epoch=1) is defined as the first block whose blocktime is greater than the EpochInfo start_time. |
| current_epoch_start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | current_epoch_start_time describes the start time of the current timer interval. The interval is (current_epoch_start_time, current_epoch_start_time &#43; duration] When the timer ticks, this is set to current_epoch_start_time = last_epoch_start_time &#43; duration only one timer tick for a given identifier can occur per block.

NOTE! The current_epoch_start_time may diverge significantly from the wall-clock time the epoch began at. Wall-clock time of epoch start may be &gt;&gt; current_epoch_start_time. Suppose current_epoch_start_time = 10, duration = 5. Suppose the chain goes offline at t=14, and comes back online at t=30, and produces blocks at every successive time. (t=31, 32, etc.) * The t=30 block will start the epoch for (10, 15] * The t=31 block will start the epoch for (15, 20] * The t=32 block will start the epoch for (20, 25] * The t=33 block will start the epoch for (25, 30] * The t=34 block will start the epoch for (30, 35] * The **t=36** block will start the epoch for (35, 40] |
| epoch_counting_started | [bool](#bool) |  | epoch_counting_started is a boolean, that indicates whether this epoch timer has began yet. |
| current_epoch_start_height | [int64](#int64) |  | current_epoch_start_height is the block height at which the current epoch started. (The block height at which the timer last ticked) |






<a name="cosmos-epochs-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the epochs module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| epochs | [EpochInfo](#cosmos-epochs-v1beta1-EpochInfo) | repeated |  |





 

 

 

 



<a name="cosmos_epochs_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/epochs/v1beta1/query.proto



<a name="cosmos-epochs-v1beta1-QueryCurrentEpochRequest"></a>

### QueryCurrentEpochRequest
QueryCurrentEpochRequest defines the gRPC request structure for
querying an epoch by its identifier.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) |  |  |






<a name="cosmos-epochs-v1beta1-QueryCurrentEpochResponse"></a>

### QueryCurrentEpochResponse
QueryCurrentEpochResponse defines the gRPC response structure for
querying an epoch by its identifier.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| current_epoch | [int64](#int64) |  |  |






<a name="cosmos-epochs-v1beta1-QueryEpochInfosRequest"></a>

### QueryEpochInfosRequest
QueryEpochInfosRequest defines the gRPC request structure for
querying all epoch info.






<a name="cosmos-epochs-v1beta1-QueryEpochInfosResponse"></a>

### QueryEpochInfosResponse
QueryEpochInfosRequest defines the gRPC response structure for
querying all epoch info.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| epochs | [EpochInfo](#cosmos-epochs-v1beta1-EpochInfo) | repeated |  |





 

 

 


<a name="cosmos-epochs-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| EpochInfos | [QueryEpochInfosRequest](#cosmos-epochs-v1beta1-QueryEpochInfosRequest) | [QueryEpochInfosResponse](#cosmos-epochs-v1beta1-QueryEpochInfosResponse) | EpochInfos provide running epochInfos |
| CurrentEpoch | [QueryCurrentEpochRequest](#cosmos-epochs-v1beta1-QueryCurrentEpochRequest) | [QueryCurrentEpochResponse](#cosmos-epochs-v1beta1-QueryCurrentEpochResponse) | CurrentEpoch provide current epoch of specified identifier |

 



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

