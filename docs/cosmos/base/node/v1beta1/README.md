# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/base/node/v1beta1/query.proto](#cosmos_base_node_v1beta1_query-proto)
    - [ConfigRequest](#cosmos-base-node-v1beta1-ConfigRequest)
    - [ConfigResponse](#cosmos-base-node-v1beta1-ConfigResponse)
    - [StatusRequest](#cosmos-base-node-v1beta1-StatusRequest)
    - [StatusResponse](#cosmos-base-node-v1beta1-StatusResponse)
  
    - [Service](#cosmos-base-node-v1beta1-Service)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_base_node_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/node/v1beta1/query.proto



<a name="cosmos-base-node-v1beta1-ConfigRequest"></a>

### ConfigRequest
ConfigRequest defines the request structure for the Config gRPC query.






<a name="cosmos-base-node-v1beta1-ConfigResponse"></a>

### ConfigResponse
ConfigResponse defines the response structure for the Config gRPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| minimum_gas_price | [string](#string) |  |  |
| pruning_keep_recent | [string](#string) |  |  |
| pruning_interval | [string](#string) |  |  |
| halt_height | [uint64](#uint64) |  |  |






<a name="cosmos-base-node-v1beta1-StatusRequest"></a>

### StatusRequest
StateRequest defines the request structure for the status of a node.






<a name="cosmos-base-node-v1beta1-StatusResponse"></a>

### StatusResponse
StateResponse defines the response structure for the status of a node.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| earliest_store_height | [uint64](#uint64) |  | earliest block height available in the store |
| height | [uint64](#uint64) |  | current block height |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | block height timestamp |
| app_hash | [bytes](#bytes) |  | app hash of the current block |
| validator_hash | [bytes](#bytes) |  | validator hash provided by the consensus header |





 

 

 


<a name="cosmos-base-node-v1beta1-Service"></a>

### Service
Service defines the gRPC querier service for node related queries.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Config | [ConfigRequest](#cosmos-base-node-v1beta1-ConfigRequest) | [ConfigResponse](#cosmos-base-node-v1beta1-ConfigResponse) | Config queries for the operator configuration. |
| Status | [StatusRequest](#cosmos-base-node-v1beta1-StatusRequest) | [StatusResponse](#cosmos-base-node-v1beta1-StatusResponse) | Status queries for the node status. |

 



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

