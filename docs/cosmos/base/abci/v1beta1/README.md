# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/base/abci/v1beta1/abci.proto](#cosmos_base_abci_v1beta1_abci-proto)
    - [ABCIMessageLog](#cosmos-base-abci-v1beta1-ABCIMessageLog)
    - [Attribute](#cosmos-base-abci-v1beta1-Attribute)
    - [GasInfo](#cosmos-base-abci-v1beta1-GasInfo)
    - [MsgData](#cosmos-base-abci-v1beta1-MsgData)
    - [Result](#cosmos-base-abci-v1beta1-Result)
    - [SearchBlocksResult](#cosmos-base-abci-v1beta1-SearchBlocksResult)
    - [SearchTxsResult](#cosmos-base-abci-v1beta1-SearchTxsResult)
    - [SimulationResponse](#cosmos-base-abci-v1beta1-SimulationResponse)
    - [StringEvent](#cosmos-base-abci-v1beta1-StringEvent)
    - [TxMsgData](#cosmos-base-abci-v1beta1-TxMsgData)
    - [TxResponse](#cosmos-base-abci-v1beta1-TxResponse)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_base_abci_v1beta1_abci-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/abci/v1beta1/abci.proto



<a name="cosmos-base-abci-v1beta1-ABCIMessageLog"></a>

### ABCIMessageLog
ABCIMessageLog defines a structure containing an indexed tx ABCI message log.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_index | [uint32](#uint32) |  |  |
| log | [string](#string) |  |  |
| events | [StringEvent](#cosmos-base-abci-v1beta1-StringEvent) | repeated | Events contains a slice of Event objects that were emitted during some execution. |






<a name="cosmos-base-abci-v1beta1-Attribute"></a>

### Attribute
Attribute defines an attribute wrapper where the key and value are
strings instead of raw bytes.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="cosmos-base-abci-v1beta1-GasInfo"></a>

### GasInfo
GasInfo defines tx execution gas context.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| gas_wanted | [uint64](#uint64) |  | GasWanted is the maximum units of work we allow this tx to perform. |
| gas_used | [uint64](#uint64) |  | GasUsed is the amount of gas actually consumed. |






<a name="cosmos-base-abci-v1beta1-MsgData"></a>

### MsgData
MsgData defines the data returned in a Result object during message
execution.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_type | [string](#string) |  |  |
| data | [bytes](#bytes) |  |  |






<a name="cosmos-base-abci-v1beta1-Result"></a>

### Result
Result is the union of ResponseFormat and ResponseCheckTx.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | **Deprecated.** Data is any data returned from message or handler execution. It MUST be length prefixed in order to separate data from multiple message executions. Deprecated. This field is still populated, but prefer msg_response instead because it also contains the Msg response typeURL. |
| log | [string](#string) |  | Log contains the log information from message or handler execution. |
| events | [tendermint.abci.Event](#tendermint-abci-Event) | repeated | Events contains a slice of Event objects that were emitted during message or handler execution. |
| msg_responses | [google.protobuf.Any](#google-protobuf-Any) | repeated | msg_responses contains the Msg handler responses type packed in Anys. |






<a name="cosmos-base-abci-v1beta1-SearchBlocksResult"></a>

### SearchBlocksResult
SearchBlocksResult defines a structure for querying blocks pageable


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total_count | [int64](#int64) |  | Count of all blocks |
| count | [int64](#int64) |  | Count of blocks in current page |
| page_number | [int64](#int64) |  | Index of current page, start from 1 |
| page_total | [int64](#int64) |  | Count of total pages |
| limit | [int64](#int64) |  | Max count blocks per page |
| blocks | [tendermint.types.Block](#tendermint-types-Block) | repeated | List of blocks in current page |






<a name="cosmos-base-abci-v1beta1-SearchTxsResult"></a>

### SearchTxsResult
SearchTxsResult defines a structure for querying txs pageable


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total_count | [uint64](#uint64) |  | Count of all txs |
| count | [uint64](#uint64) |  | Count of txs in current page |
| page_number | [uint64](#uint64) |  | Index of current page, start from 1 |
| page_total | [uint64](#uint64) |  | Count of total pages |
| limit | [uint64](#uint64) |  | Max count txs per page |
| txs | [TxResponse](#cosmos-base-abci-v1beta1-TxResponse) | repeated | List of txs in current page |






<a name="cosmos-base-abci-v1beta1-SimulationResponse"></a>

### SimulationResponse
SimulationResponse defines the response generated when a transaction is
successfully simulated.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| gas_info | [GasInfo](#cosmos-base-abci-v1beta1-GasInfo) |  |  |
| result | [Result](#cosmos-base-abci-v1beta1-Result) |  |  |






<a name="cosmos-base-abci-v1beta1-StringEvent"></a>

### StringEvent
StringEvent defines en Event object wrapper where all the attributes
contain key/value pairs that are strings instead of raw bytes.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [string](#string) |  |  |
| attributes | [Attribute](#cosmos-base-abci-v1beta1-Attribute) | repeated |  |






<a name="cosmos-base-abci-v1beta1-TxMsgData"></a>

### TxMsgData
TxMsgData defines a list of MsgData. A transaction will have a MsgData object
for each message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [MsgData](#cosmos-base-abci-v1beta1-MsgData) | repeated | **Deprecated.** data field is deprecated and not populated. |
| msg_responses | [google.protobuf.Any](#google-protobuf-Any) | repeated | msg_responses contains the Msg handler responses packed into Anys. |






<a name="cosmos-base-abci-v1beta1-TxResponse"></a>

### TxResponse
TxResponse defines a structure containing relevant tx data and metadata. The
tags are stringified and the log is JSON decoded.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  | The block height |
| txhash | [string](#string) |  | The transaction hash. |
| codespace | [string](#string) |  | Namespace for the Code |
| code | [uint32](#uint32) |  | Response code. |
| data | [string](#string) |  | Result bytes, if any. |
| raw_log | [string](#string) |  | The output of the application&#39;s logger (raw string). May be non-deterministic. |
| logs | [ABCIMessageLog](#cosmos-base-abci-v1beta1-ABCIMessageLog) | repeated | The output of the application&#39;s logger (typed). May be non-deterministic. |
| info | [string](#string) |  | Additional information. May be non-deterministic. |
| gas_wanted | [int64](#int64) |  | Amount of gas requested for transaction. |
| gas_used | [int64](#int64) |  | Amount of gas consumed by transaction. |
| tx | [google.protobuf.Any](#google-protobuf-Any) |  | The request transaction bytes. |
| timestamp | [string](#string) |  | Time of the previous block. For heights &gt; 1, it&#39;s the weighted median of the timestamps of the valid votes in the block.LastCommit. For height == 1, it&#39;s genesis time. |
| events | [tendermint.abci.Event](#tendermint-abci-Event) | repeated | Events defines all the events emitted by processing a transaction. Note, these events include those emitted by processing all the messages and those emitted from the ante. Whereas Logs contains the events, with additional metadata, emitted only by processing the messages. |





 

 

 

 



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

