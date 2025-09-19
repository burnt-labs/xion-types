# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/store/streaming/abci/grpc.proto](#cosmos_store_streaming_abci_grpc-proto)
    - [ListenCommitRequest](#cosmos-store-streaming-abci-ListenCommitRequest)
    - [ListenCommitResponse](#cosmos-store-streaming-abci-ListenCommitResponse)
    - [ListenFinalizeBlockRequest](#cosmos-store-streaming-abci-ListenFinalizeBlockRequest)
    - [ListenFinalizeBlockResponse](#cosmos-store-streaming-abci-ListenFinalizeBlockResponse)
  
    - [ABCIListenerService](#cosmos-store-streaming-abci-ABCIListenerService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_store_streaming_abci_grpc-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/store/streaming/abci/grpc.proto



<a name="cosmos-store-streaming-abci-ListenCommitRequest"></a>

### ListenCommitRequest
ListenCommitRequest is the request type for the ListenCommit RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_height | [int64](#int64) |  | explicitly pass in block height as ResponseCommit does not contain this info |
| res | [tendermint.abci.ResponseCommit](#tendermint-abci-ResponseCommit) |  |  |
| change_set | [cosmos.store.v1beta1.StoreKVPair](#cosmos-store-v1beta1-StoreKVPair) | repeated |  |






<a name="cosmos-store-streaming-abci-ListenCommitResponse"></a>

### ListenCommitResponse
ListenCommitResponse is the response type for the ListenCommit RPC method






<a name="cosmos-store-streaming-abci-ListenFinalizeBlockRequest"></a>

### ListenFinalizeBlockRequest
ListenEndBlockRequest is the request type for the ListenEndBlock RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| req | [tendermint.abci.RequestFinalizeBlock](#tendermint-abci-RequestFinalizeBlock) |  |  |
| res | [tendermint.abci.ResponseFinalizeBlock](#tendermint-abci-ResponseFinalizeBlock) |  |  |






<a name="cosmos-store-streaming-abci-ListenFinalizeBlockResponse"></a>

### ListenFinalizeBlockResponse
ListenEndBlockResponse is the response type for the ListenEndBlock RPC method





 

 

 


<a name="cosmos-store-streaming-abci-ABCIListenerService"></a>

### ABCIListenerService
ABCIListenerService is the service for the BaseApp ABCIListener interface

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListenFinalizeBlock | [ListenFinalizeBlockRequest](#cosmos-store-streaming-abci-ListenFinalizeBlockRequest) | [ListenFinalizeBlockResponse](#cosmos-store-streaming-abci-ListenFinalizeBlockResponse) | ListenFinalizeBlock is the corresponding endpoint for ABCIListener.ListenEndBlock |
| ListenCommit | [ListenCommitRequest](#cosmos-store-streaming-abci-ListenCommitRequest) | [ListenCommitResponse](#cosmos-store-streaming-abci-ListenCommitResponse) | ListenCommit is the corresponding endpoint for ABCIListener.ListenCommit |

 



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

