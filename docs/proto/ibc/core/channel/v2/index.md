# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/core/channel/v2/genesis.proto](#ibc_core_channel_v2_genesis-proto)
    - [GenesisState](#ibc-core-channel-v2-GenesisState)
    - [PacketSequence](#ibc-core-channel-v2-PacketSequence)
    - [PacketState](#ibc-core-channel-v2-PacketState)
  
- [ibc/core/channel/v2/packet.proto](#ibc_core_channel_v2_packet-proto)
    - [Acknowledgement](#ibc-core-channel-v2-Acknowledgement)
    - [Packet](#ibc-core-channel-v2-Packet)
    - [Payload](#ibc-core-channel-v2-Payload)
    - [RecvPacketResult](#ibc-core-channel-v2-RecvPacketResult)
  
    - [PacketStatus](#ibc-core-channel-v2-PacketStatus)
  
- [ibc/core/channel/v2/query.proto](#ibc_core_channel_v2_query-proto)
    - [QueryNextSequenceSendRequest](#ibc-core-channel-v2-QueryNextSequenceSendRequest)
    - [QueryNextSequenceSendResponse](#ibc-core-channel-v2-QueryNextSequenceSendResponse)
    - [QueryPacketAcknowledgementRequest](#ibc-core-channel-v2-QueryPacketAcknowledgementRequest)
    - [QueryPacketAcknowledgementResponse](#ibc-core-channel-v2-QueryPacketAcknowledgementResponse)
    - [QueryPacketAcknowledgementsRequest](#ibc-core-channel-v2-QueryPacketAcknowledgementsRequest)
    - [QueryPacketAcknowledgementsResponse](#ibc-core-channel-v2-QueryPacketAcknowledgementsResponse)
    - [QueryPacketCommitmentRequest](#ibc-core-channel-v2-QueryPacketCommitmentRequest)
    - [QueryPacketCommitmentResponse](#ibc-core-channel-v2-QueryPacketCommitmentResponse)
    - [QueryPacketCommitmentsRequest](#ibc-core-channel-v2-QueryPacketCommitmentsRequest)
    - [QueryPacketCommitmentsResponse](#ibc-core-channel-v2-QueryPacketCommitmentsResponse)
    - [QueryPacketReceiptRequest](#ibc-core-channel-v2-QueryPacketReceiptRequest)
    - [QueryPacketReceiptResponse](#ibc-core-channel-v2-QueryPacketReceiptResponse)
    - [QueryUnreceivedAcksRequest](#ibc-core-channel-v2-QueryUnreceivedAcksRequest)
    - [QueryUnreceivedAcksResponse](#ibc-core-channel-v2-QueryUnreceivedAcksResponse)
    - [QueryUnreceivedPacketsRequest](#ibc-core-channel-v2-QueryUnreceivedPacketsRequest)
    - [QueryUnreceivedPacketsResponse](#ibc-core-channel-v2-QueryUnreceivedPacketsResponse)
  
    - [Query](#ibc-core-channel-v2-Query)
  
- [ibc/core/channel/v2/tx.proto](#ibc_core_channel_v2_tx-proto)
    - [MsgAcknowledgement](#ibc-core-channel-v2-MsgAcknowledgement)
    - [MsgAcknowledgementResponse](#ibc-core-channel-v2-MsgAcknowledgementResponse)
    - [MsgRecvPacket](#ibc-core-channel-v2-MsgRecvPacket)
    - [MsgRecvPacketResponse](#ibc-core-channel-v2-MsgRecvPacketResponse)
    - [MsgSendPacket](#ibc-core-channel-v2-MsgSendPacket)
    - [MsgSendPacketResponse](#ibc-core-channel-v2-MsgSendPacketResponse)
    - [MsgTimeout](#ibc-core-channel-v2-MsgTimeout)
    - [MsgTimeoutResponse](#ibc-core-channel-v2-MsgTimeoutResponse)
  
    - [ResponseResultType](#ibc-core-channel-v2-ResponseResultType)
  
    - [Msg](#ibc-core-channel-v2-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_core_channel_v2_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v2/genesis.proto



<a name="ibc-core-channel-v2-GenesisState"></a>

### GenesisState
GenesisState defines the ibc channel/v2 submodule&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| acknowledgements | [PacketState](#ibc-core-channel-v2-PacketState) | repeated |  |
| commitments | [PacketState](#ibc-core-channel-v2-PacketState) | repeated |  |
| receipts | [PacketState](#ibc-core-channel-v2-PacketState) | repeated |  |
| async_packets | [PacketState](#ibc-core-channel-v2-PacketState) | repeated |  |
| send_sequences | [PacketSequence](#ibc-core-channel-v2-PacketSequence) | repeated |  |






<a name="ibc-core-channel-v2-PacketSequence"></a>

### PacketSequence
PacketSequence defines the genesis type necessary to retrieve and store next send sequences.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier. |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v2-PacketState"></a>

### PacketState
PacketState defines the generic type necessary to retrieve and store
packet commitments, acknowledgements, and receipts.
Caller is responsible for knowing the context necessary to interpret this
state as a commitment, acknowledgement, or a receipt.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier. |
| sequence | [uint64](#uint64) |  | packet sequence. |
| data | [bytes](#bytes) |  | embedded data that represents packet state. |





 

 

 

 



<a name="ibc_core_channel_v2_packet-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v2/packet.proto



<a name="ibc-core-channel-v2-Acknowledgement"></a>

### Acknowledgement
Acknowledgement contains a list of all ack results associated with a single packet.
In the case of a successful receive, the acknowledgement will contain an app acknowledgement
for each application that received a payload in the same order that the payloads were sent
in the packet.
If the receive is not successful, the acknowledgement will contain a single app acknowledgment
which will be a constant error acknowledgment as defined by the IBC v2 protocol.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app_acknowledgements | [bytes](#bytes) | repeated |  |






<a name="ibc-core-channel-v2-Packet"></a>

### Packet
Packet defines a type that carries data across different chains through IBC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | number corresponds to the order of sends and receives, where a Packet with an earlier sequence number must be sent and received before a Packet with a later sequence number. |
| source_client | [string](#string) |  | identifies the sending client on the sending chain. |
| destination_client | [string](#string) |  | identifies the receiving client on the receiving chain. |
| timeout_timestamp | [uint64](#uint64) |  | timeout timestamp in seconds after which the packet times out. |
| payloads | [Payload](#ibc-core-channel-v2-Payload) | repeated | a list of payloads, each one for a specific application. |






<a name="ibc-core-channel-v2-Payload"></a>

### Payload
Payload contains the source and destination ports and payload for the application (version, encoding, raw bytes)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source_port | [string](#string) |  | specifies the source port of the packet. |
| destination_port | [string](#string) |  | specifies the destination port of the packet. |
| version | [string](#string) |  | version of the specified application. |
| encoding | [string](#string) |  | the encoding used for the provided value. |
| value | [bytes](#bytes) |  | the raw bytes for the payload. |






<a name="ibc-core-channel-v2-RecvPacketResult"></a>

### RecvPacketResult
RecvPacketResult speecifies the status of a packet as well as the acknowledgement bytes.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [PacketStatus](#ibc-core-channel-v2-PacketStatus) |  | status of the packet |
| acknowledgement | [bytes](#bytes) |  | acknowledgement of the packet |





 


<a name="ibc-core-channel-v2-PacketStatus"></a>

### PacketStatus
PacketStatus specifies the status of a RecvPacketResult.

| Name | Number | Description |
| ---- | ------ | ----------- |
| PACKET_STATUS_UNSPECIFIED | 0 | PACKET_STATUS_UNSPECIFIED indicates an unknown packet status. |
| PACKET_STATUS_SUCCESS | 1 | PACKET_STATUS_SUCCESS indicates a successful packet receipt. |
| PACKET_STATUS_FAILURE | 2 | PACKET_STATUS_FAILURE indicates a failed packet receipt. |
| PACKET_STATUS_ASYNC | 3 | PACKET_STATUS_ASYNC indicates an async packet receipt. |


 

 

 



<a name="ibc_core_channel_v2_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v2/query.proto



<a name="ibc-core-channel-v2-QueryNextSequenceSendRequest"></a>

### QueryNextSequenceSendRequest
QueryNextSequenceSendRequest is the request type for the Query/QueryNextSequenceSend RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |






<a name="ibc-core-channel-v2-QueryNextSequenceSendResponse"></a>

### QueryNextSequenceSendResponse
QueryNextSequenceSendResponse is the response type for the Query/QueryNextSequenceSend RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| next_sequence_send | [uint64](#uint64) |  | next sequence send number |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v2-QueryPacketAcknowledgementRequest"></a>

### QueryPacketAcknowledgementRequest
QueryPacketAcknowledgementRequest is the request type for the Query/PacketAcknowledgement RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v2-QueryPacketAcknowledgementResponse"></a>

### QueryPacketAcknowledgementResponse
QueryPacketAcknowledgementResponse is the response type for the Query/PacketAcknowledgement RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| acknowledgement | [bytes](#bytes) |  | acknowledgement associated with the request fields |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v2-QueryPacketAcknowledgementsRequest"></a>

### QueryPacketAcknowledgementsRequest
QueryPacketAcknowledgementsRequest is the request type for the
Query/QueryPacketCommitments RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |
| packet_commitment_sequences | [uint64](#uint64) | repeated | list of packet sequences |






<a name="ibc-core-channel-v2-QueryPacketAcknowledgementsResponse"></a>

### QueryPacketAcknowledgementsResponse
QueryPacketAcknowledgemetsResponse is the request type for the
Query/QueryPacketAcknowledgements RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| acknowledgements | [PacketState](#ibc-core-channel-v2-PacketState) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v2-QueryPacketCommitmentRequest"></a>

### QueryPacketCommitmentRequest
QueryPacketCommitmentRequest is the request type for the Query/PacketCommitment RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v2-QueryPacketCommitmentResponse"></a>

### QueryPacketCommitmentResponse
QueryPacketCommitmentResponse is the response type for the Query/PacketCommitment RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commitment | [bytes](#bytes) |  | packet associated with the request fields |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v2-QueryPacketCommitmentsRequest"></a>

### QueryPacketCommitmentsRequest
QueryPacketCommitmentsRequest is the request type for the Query/PacketCommitments RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-channel-v2-QueryPacketCommitmentsResponse"></a>

### QueryPacketCommitmentsResponse
QueryPacketCommitmentResponse is the response type for the Query/PacketCommitment RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commitments | [PacketState](#ibc-core-channel-v2-PacketState) | repeated | collection of packet commitments for the requested channel identifier. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response. |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height. |






<a name="ibc-core-channel-v2-QueryPacketReceiptRequest"></a>

### QueryPacketReceiptRequest
QueryPacketReceiptRequest is the request type for the Query/PacketReceipt RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v2-QueryPacketReceiptResponse"></a>

### QueryPacketReceiptResponse
QueryPacketReceiptResponse is the response type for the Query/PacketReceipt RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| received | [bool](#bool) |  | success flag for if receipt exists |
| proof | [bytes](#bytes) |  | merkle proof of existence or absence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v2-QueryUnreceivedAcksRequest"></a>

### QueryUnreceivedAcksRequest
QueryUnreceivedAcks is the request type for the
Query/UnreceivedAcks RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| packet_ack_sequences | [uint64](#uint64) | repeated | list of acknowledgement sequences |






<a name="ibc-core-channel-v2-QueryUnreceivedAcksResponse"></a>

### QueryUnreceivedAcksResponse
QueryUnreceivedAcksResponse is the response type for the
Query/UnreceivedAcks RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequences | [uint64](#uint64) | repeated | list of unreceived acknowledgement sequences |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v2-QueryUnreceivedPacketsRequest"></a>

### QueryUnreceivedPacketsRequest
QueryUnreceivedPacketsRequest is the request type for the Query/UnreceivedPackets RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| sequences | [uint64](#uint64) | repeated | list of packet sequences |






<a name="ibc-core-channel-v2-QueryUnreceivedPacketsResponse"></a>

### QueryUnreceivedPacketsResponse
QueryUnreceivedPacketsResponse is the response type for the Query/UnreceivedPacketCommitments RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequences | [uint64](#uint64) | repeated | list of unreceived packet sequences |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |





 

 

 


<a name="ibc-core-channel-v2-Query"></a>

### Query
Query provides defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| NextSequenceSend | [QueryNextSequenceSendRequest](#ibc-core-channel-v2-QueryNextSequenceSendRequest) | [QueryNextSequenceSendResponse](#ibc-core-channel-v2-QueryNextSequenceSendResponse) | NextSequenceSend returns the next send sequence for a given channel. |
| PacketCommitment | [QueryPacketCommitmentRequest](#ibc-core-channel-v2-QueryPacketCommitmentRequest) | [QueryPacketCommitmentResponse](#ibc-core-channel-v2-QueryPacketCommitmentResponse) | PacketCommitment queries a stored packet commitment hash. |
| PacketCommitments | [QueryPacketCommitmentsRequest](#ibc-core-channel-v2-QueryPacketCommitmentsRequest) | [QueryPacketCommitmentsResponse](#ibc-core-channel-v2-QueryPacketCommitmentsResponse) | PacketCommitments queries a stored packet commitment hash. |
| PacketAcknowledgement | [QueryPacketAcknowledgementRequest](#ibc-core-channel-v2-QueryPacketAcknowledgementRequest) | [QueryPacketAcknowledgementResponse](#ibc-core-channel-v2-QueryPacketAcknowledgementResponse) | PacketAcknowledgement queries a stored acknowledgement commitment hash. |
| PacketAcknowledgements | [QueryPacketAcknowledgementsRequest](#ibc-core-channel-v2-QueryPacketAcknowledgementsRequest) | [QueryPacketAcknowledgementsResponse](#ibc-core-channel-v2-QueryPacketAcknowledgementsResponse) | PacketAcknowledgements returns all packet acknowledgements associated with a channel. |
| PacketReceipt | [QueryPacketReceiptRequest](#ibc-core-channel-v2-QueryPacketReceiptRequest) | [QueryPacketReceiptResponse](#ibc-core-channel-v2-QueryPacketReceiptResponse) | PacketReceipt queries a stored packet receipt. |
| UnreceivedPackets | [QueryUnreceivedPacketsRequest](#ibc-core-channel-v2-QueryUnreceivedPacketsRequest) | [QueryUnreceivedPacketsResponse](#ibc-core-channel-v2-QueryUnreceivedPacketsResponse) | UnreceivedPackets returns all the unreceived IBC packets associated with a channel and sequences. |
| UnreceivedAcks | [QueryUnreceivedAcksRequest](#ibc-core-channel-v2-QueryUnreceivedAcksRequest) | [QueryUnreceivedAcksResponse](#ibc-core-channel-v2-QueryUnreceivedAcksResponse) | UnreceivedAcks returns all the unreceived IBC acknowledgements associated with a channel and sequences. |

 



<a name="ibc_core_channel_v2_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v2/tx.proto



<a name="ibc-core-channel-v2-MsgAcknowledgement"></a>

### MsgAcknowledgement
MsgAcknowledgement receives incoming IBC acknowledgement.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v2-Packet) |  |  |
| acknowledgement | [Acknowledgement](#ibc-core-channel-v2-Acknowledgement) |  |  |
| proof_acked | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v2-MsgAcknowledgementResponse"></a>

### MsgAcknowledgementResponse
MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v2-ResponseResultType) |  |  |






<a name="ibc-core-channel-v2-MsgRecvPacket"></a>

### MsgRecvPacket
MsgRecvPacket receives an incoming IBC packet.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v2-Packet) |  |  |
| proof_commitment | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v2-MsgRecvPacketResponse"></a>

### MsgRecvPacketResponse
MsgRecvPacketResponse defines the Msg/RecvPacket response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v2-ResponseResultType) |  |  |






<a name="ibc-core-channel-v2-MsgSendPacket"></a>

### MsgSendPacket
MsgSendPacket sends an outgoing IBC packet.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source_client | [string](#string) |  |  |
| timeout_timestamp | [uint64](#uint64) |  |  |
| payloads | [Payload](#ibc-core-channel-v2-Payload) | repeated |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v2-MsgSendPacketResponse"></a>

### MsgSendPacketResponse
MsgSendPacketResponse defines the Msg/SendPacket response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  |  |






<a name="ibc-core-channel-v2-MsgTimeout"></a>

### MsgTimeout
MsgTimeout receives timed-out packet


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v2-Packet) |  |  |
| proof_unreceived | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v2-MsgTimeoutResponse"></a>

### MsgTimeoutResponse
MsgTimeoutResponse defines the Msg/Timeout response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v2-ResponseResultType) |  |  |





 


<a name="ibc-core-channel-v2-ResponseResultType"></a>

### ResponseResultType
ResponseResultType defines the possible outcomes of the execution of a message

| Name | Number | Description |
| ---- | ------ | ----------- |
| RESPONSE_RESULT_TYPE_UNSPECIFIED | 0 | Default zero value enumeration |
| RESPONSE_RESULT_TYPE_NOOP | 1 | The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) |
| RESPONSE_RESULT_TYPE_SUCCESS | 2 | The message was executed successfully |
| RESPONSE_RESULT_TYPE_FAILURE | 3 | The message was executed unsuccessfully |


 

 


<a name="ibc-core-channel-v2-Msg"></a>

### Msg
Msg defines the ibc/channel/v2 Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SendPacket | [MsgSendPacket](#ibc-core-channel-v2-MsgSendPacket) | [MsgSendPacketResponse](#ibc-core-channel-v2-MsgSendPacketResponse) | SendPacket defines a rpc handler method for MsgSendPacket. |
| RecvPacket | [MsgRecvPacket](#ibc-core-channel-v2-MsgRecvPacket) | [MsgRecvPacketResponse](#ibc-core-channel-v2-MsgRecvPacketResponse) | RecvPacket defines a rpc handler method for MsgRecvPacket. |
| Timeout | [MsgTimeout](#ibc-core-channel-v2-MsgTimeout) | [MsgTimeoutResponse](#ibc-core-channel-v2-MsgTimeoutResponse) | Timeout defines a rpc handler method for MsgTimeout. |
| Acknowledgement | [MsgAcknowledgement](#ibc-core-channel-v2-MsgAcknowledgement) | [MsgAcknowledgementResponse](#ibc-core-channel-v2-MsgAcknowledgementResponse) | Acknowledgement defines a rpc handler method for MsgAcknowledgement. |

 



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

