# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/core/channel/v1/channel.proto](#ibc_core_channel_v1_channel-proto)
    - [Acknowledgement](#ibc-core-channel-v1-Acknowledgement)
    - [Channel](#ibc-core-channel-v1-Channel)
    - [Counterparty](#ibc-core-channel-v1-Counterparty)
    - [IdentifiedChannel](#ibc-core-channel-v1-IdentifiedChannel)
    - [Packet](#ibc-core-channel-v1-Packet)
    - [PacketId](#ibc-core-channel-v1-PacketId)
    - [PacketState](#ibc-core-channel-v1-PacketState)
    - [Timeout](#ibc-core-channel-v1-Timeout)
  
    - [Order](#ibc-core-channel-v1-Order)
    - [State](#ibc-core-channel-v1-State)
  
- [ibc/core/channel/v1/genesis.proto](#ibc_core_channel_v1_genesis-proto)
    - [GenesisState](#ibc-core-channel-v1-GenesisState)
    - [PacketSequence](#ibc-core-channel-v1-PacketSequence)
  
- [ibc/core/channel/v1/query.proto](#ibc_core_channel_v1_query-proto)
    - [QueryChannelClientStateRequest](#ibc-core-channel-v1-QueryChannelClientStateRequest)
    - [QueryChannelClientStateResponse](#ibc-core-channel-v1-QueryChannelClientStateResponse)
    - [QueryChannelConsensusStateRequest](#ibc-core-channel-v1-QueryChannelConsensusStateRequest)
    - [QueryChannelConsensusStateResponse](#ibc-core-channel-v1-QueryChannelConsensusStateResponse)
    - [QueryChannelRequest](#ibc-core-channel-v1-QueryChannelRequest)
    - [QueryChannelResponse](#ibc-core-channel-v1-QueryChannelResponse)
    - [QueryChannelsRequest](#ibc-core-channel-v1-QueryChannelsRequest)
    - [QueryChannelsResponse](#ibc-core-channel-v1-QueryChannelsResponse)
    - [QueryConnectionChannelsRequest](#ibc-core-channel-v1-QueryConnectionChannelsRequest)
    - [QueryConnectionChannelsResponse](#ibc-core-channel-v1-QueryConnectionChannelsResponse)
    - [QueryNextSequenceReceiveRequest](#ibc-core-channel-v1-QueryNextSequenceReceiveRequest)
    - [QueryNextSequenceReceiveResponse](#ibc-core-channel-v1-QueryNextSequenceReceiveResponse)
    - [QueryNextSequenceSendRequest](#ibc-core-channel-v1-QueryNextSequenceSendRequest)
    - [QueryNextSequenceSendResponse](#ibc-core-channel-v1-QueryNextSequenceSendResponse)
    - [QueryPacketAcknowledgementRequest](#ibc-core-channel-v1-QueryPacketAcknowledgementRequest)
    - [QueryPacketAcknowledgementResponse](#ibc-core-channel-v1-QueryPacketAcknowledgementResponse)
    - [QueryPacketAcknowledgementsRequest](#ibc-core-channel-v1-QueryPacketAcknowledgementsRequest)
    - [QueryPacketAcknowledgementsResponse](#ibc-core-channel-v1-QueryPacketAcknowledgementsResponse)
    - [QueryPacketCommitmentRequest](#ibc-core-channel-v1-QueryPacketCommitmentRequest)
    - [QueryPacketCommitmentResponse](#ibc-core-channel-v1-QueryPacketCommitmentResponse)
    - [QueryPacketCommitmentsRequest](#ibc-core-channel-v1-QueryPacketCommitmentsRequest)
    - [QueryPacketCommitmentsResponse](#ibc-core-channel-v1-QueryPacketCommitmentsResponse)
    - [QueryPacketReceiptRequest](#ibc-core-channel-v1-QueryPacketReceiptRequest)
    - [QueryPacketReceiptResponse](#ibc-core-channel-v1-QueryPacketReceiptResponse)
    - [QueryUnreceivedAcksRequest](#ibc-core-channel-v1-QueryUnreceivedAcksRequest)
    - [QueryUnreceivedAcksResponse](#ibc-core-channel-v1-QueryUnreceivedAcksResponse)
    - [QueryUnreceivedPacketsRequest](#ibc-core-channel-v1-QueryUnreceivedPacketsRequest)
    - [QueryUnreceivedPacketsResponse](#ibc-core-channel-v1-QueryUnreceivedPacketsResponse)
  
    - [Query](#ibc-core-channel-v1-Query)
  
- [ibc/core/channel/v1/tx.proto](#ibc_core_channel_v1_tx-proto)
    - [MsgAcknowledgement](#ibc-core-channel-v1-MsgAcknowledgement)
    - [MsgAcknowledgementResponse](#ibc-core-channel-v1-MsgAcknowledgementResponse)
    - [MsgChannelCloseConfirm](#ibc-core-channel-v1-MsgChannelCloseConfirm)
    - [MsgChannelCloseConfirmResponse](#ibc-core-channel-v1-MsgChannelCloseConfirmResponse)
    - [MsgChannelCloseInit](#ibc-core-channel-v1-MsgChannelCloseInit)
    - [MsgChannelCloseInitResponse](#ibc-core-channel-v1-MsgChannelCloseInitResponse)
    - [MsgChannelOpenAck](#ibc-core-channel-v1-MsgChannelOpenAck)
    - [MsgChannelOpenAckResponse](#ibc-core-channel-v1-MsgChannelOpenAckResponse)
    - [MsgChannelOpenConfirm](#ibc-core-channel-v1-MsgChannelOpenConfirm)
    - [MsgChannelOpenConfirmResponse](#ibc-core-channel-v1-MsgChannelOpenConfirmResponse)
    - [MsgChannelOpenInit](#ibc-core-channel-v1-MsgChannelOpenInit)
    - [MsgChannelOpenInitResponse](#ibc-core-channel-v1-MsgChannelOpenInitResponse)
    - [MsgChannelOpenTry](#ibc-core-channel-v1-MsgChannelOpenTry)
    - [MsgChannelOpenTryResponse](#ibc-core-channel-v1-MsgChannelOpenTryResponse)
    - [MsgRecvPacket](#ibc-core-channel-v1-MsgRecvPacket)
    - [MsgRecvPacketResponse](#ibc-core-channel-v1-MsgRecvPacketResponse)
    - [MsgTimeout](#ibc-core-channel-v1-MsgTimeout)
    - [MsgTimeoutOnClose](#ibc-core-channel-v1-MsgTimeoutOnClose)
    - [MsgTimeoutOnCloseResponse](#ibc-core-channel-v1-MsgTimeoutOnCloseResponse)
    - [MsgTimeoutResponse](#ibc-core-channel-v1-MsgTimeoutResponse)
  
    - [ResponseResultType](#ibc-core-channel-v1-ResponseResultType)
  
    - [Msg](#ibc-core-channel-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_core_channel_v1_channel-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v1/channel.proto



<a name="ibc-core-channel-v1-Acknowledgement"></a>

### Acknowledgement
Acknowledgement is the recommended acknowledgement format to be used by
app-specific protocols.
NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
conflicts with other protobuf message formats used for acknowledgements.
The first byte of any message with this format will be the non-ASCII values
`0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [bytes](#bytes) |  |  |
| error | [string](#string) |  |  |






<a name="ibc-core-channel-v1-Channel"></a>

### Channel
Channel defines pipeline for exactly-once packet delivery between specific
modules on separate blockchains, which has at least one end capable of
sending packets and one end capable of receiving packets.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [State](#ibc-core-channel-v1-State) |  | current state of the channel end |
| ordering | [Order](#ibc-core-channel-v1-Order) |  | whether the channel is ordered or unordered |
| counterparty | [Counterparty](#ibc-core-channel-v1-Counterparty) |  | counterparty channel end |
| connection_hops | [string](#string) | repeated | list of connection identifiers, in order, along which packets sent on this channel will travel |
| version | [string](#string) |  | opaque channel version, which is agreed upon during the handshake |






<a name="ibc-core-channel-v1-Counterparty"></a>

### Counterparty
Counterparty defines a channel end counterparty


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port on the counterparty chain which owns the other end of the channel. |
| channel_id | [string](#string) |  | channel end on the counterparty chain |






<a name="ibc-core-channel-v1-IdentifiedChannel"></a>

### IdentifiedChannel
IdentifiedChannel defines a channel with additional port and channel
identifier fields.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [State](#ibc-core-channel-v1-State) |  | current state of the channel end |
| ordering | [Order](#ibc-core-channel-v1-Order) |  | whether the channel is ordered or unordered |
| counterparty | [Counterparty](#ibc-core-channel-v1-Counterparty) |  | counterparty channel end |
| connection_hops | [string](#string) | repeated | list of connection identifiers, in order, along which packets sent on this channel will travel |
| version | [string](#string) |  | opaque channel version, which is agreed upon during the handshake |
| port_id | [string](#string) |  | port identifier |
| channel_id | [string](#string) |  | channel identifier |






<a name="ibc-core-channel-v1-Packet"></a>

### Packet
Packet defines a type that carries data across different chains through IBC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | number corresponds to the order of sends and receives, where a Packet with an earlier sequence number must be sent and received before a Packet with a later sequence number. |
| source_port | [string](#string) |  | identifies the port on the sending chain. |
| source_channel | [string](#string) |  | identifies the channel end on the sending chain. |
| destination_port | [string](#string) |  | identifies the port on the receiving chain. |
| destination_channel | [string](#string) |  | identifies the channel end on the receiving chain. |
| data | [bytes](#bytes) |  | actual opaque bytes transferred directly to the application module |
| timeout_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | block height after which the packet times out |
| timeout_timestamp | [uint64](#uint64) |  | block timestamp (in nanoseconds) after which the packet times out |






<a name="ibc-core-channel-v1-PacketId"></a>

### PacketId
PacketId is an identifier for a unique Packet
Source chains refer to packets by source port/channel
Destination chains refer to packets by destination port/channel


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | channel port identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v1-PacketState"></a>

### PacketState
PacketState defines the generic type necessary to retrieve and store
packet commitments, acknowledgements, and receipts.
Caller is responsible for knowing the context necessary to interpret this
state as a commitment, acknowledgement, or a receipt.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | channel port identifier. |
| channel_id | [string](#string) |  | channel unique identifier. |
| sequence | [uint64](#uint64) |  | packet sequence. |
| data | [bytes](#bytes) |  | embedded data that represents packet state. |






<a name="ibc-core-channel-v1-Timeout"></a>

### Timeout
Timeout defines an execution deadline structure for 04-channel handlers.
This includes packet lifecycle handlers.
A valid Timeout contains either one or both of a timestamp and block height (sequence).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | block height after which the packet times out |
| timestamp | [uint64](#uint64) |  | block timestamp (in nanoseconds) after which the packet times out |





 


<a name="ibc-core-channel-v1-Order"></a>

### Order
Order defines if a channel is ORDERED or UNORDERED

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_NONE_UNSPECIFIED | 0 | zero-value for channel ordering |
| ORDER_UNORDERED | 1 | packets can be delivered in any order, which may differ from the order in which they were sent. |
| ORDER_ORDERED | 2 | packets are delivered exactly in the order which they were sent |



<a name="ibc-core-channel-v1-State"></a>

### State
State defines if a channel is in one of the following states:
CLOSED, INIT, TRYOPEN, OPEN, or UNINITIALIZED.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STATE_UNINITIALIZED_UNSPECIFIED | 0 | Default State |
| STATE_INIT | 1 | A channel has just started the opening handshake. |
| STATE_TRYOPEN | 2 | A channel has acknowledged the handshake step on the counterparty chain. |
| STATE_OPEN | 3 | A channel has completed the handshake. Open channels are ready to send and receive packets. |
| STATE_CLOSED | 4 | A channel has been closed and can no longer be used to send or receive packets. |


 

 

 



<a name="ibc_core_channel_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v1/genesis.proto



<a name="ibc-core-channel-v1-GenesisState"></a>

### GenesisState
GenesisState defines the ibc channel submodule&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channels | [IdentifiedChannel](#ibc-core-channel-v1-IdentifiedChannel) | repeated |  |
| acknowledgements | [PacketState](#ibc-core-channel-v1-PacketState) | repeated |  |
| commitments | [PacketState](#ibc-core-channel-v1-PacketState) | repeated |  |
| receipts | [PacketState](#ibc-core-channel-v1-PacketState) | repeated |  |
| send_sequences | [PacketSequence](#ibc-core-channel-v1-PacketSequence) | repeated |  |
| recv_sequences | [PacketSequence](#ibc-core-channel-v1-PacketSequence) | repeated |  |
| ack_sequences | [PacketSequence](#ibc-core-channel-v1-PacketSequence) | repeated |  |
| next_channel_sequence | [uint64](#uint64) |  | the sequence for the next generated channel identifier |






<a name="ibc-core-channel-v1-PacketSequence"></a>

### PacketSequence
PacketSequence defines the genesis type necessary to retrieve and store
next send and receive sequences.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |
| sequence | [uint64](#uint64) |  |  |





 

 

 

 



<a name="ibc_core_channel_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v1/query.proto



<a name="ibc-core-channel-v1-QueryChannelClientStateRequest"></a>

### QueryChannelClientStateRequest
QueryChannelClientStateRequest is the request type for the Query/ClientState
RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |






<a name="ibc-core-channel-v1-QueryChannelClientStateResponse"></a>

### QueryChannelClientStateResponse
QueryChannelClientStateResponse is the Response type for the
Query/QueryChannelClientState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identified_client_state | [ibc.core.client.v1.IdentifiedClientState](#ibc-core-client-v1-IdentifiedClientState) |  | client state associated with the channel |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryChannelConsensusStateRequest"></a>

### QueryChannelConsensusStateRequest
QueryChannelConsensusStateRequest is the request type for the
Query/ConsensusState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| revision_number | [uint64](#uint64) |  | revision number of the consensus state |
| revision_height | [uint64](#uint64) |  | revision height of the consensus state |






<a name="ibc-core-channel-v1-QueryChannelConsensusStateResponse"></a>

### QueryChannelConsensusStateResponse
QueryChannelClientStateResponse is the Response type for the
Query/QueryChannelClientState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | consensus state associated with the channel |
| client_id | [string](#string) |  | client ID associated with the consensus state |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryChannelRequest"></a>

### QueryChannelRequest
QueryChannelRequest is the request type for the Query/Channel RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |






<a name="ibc-core-channel-v1-QueryChannelResponse"></a>

### QueryChannelResponse
QueryChannelResponse is the response type for the Query/Channel RPC method.
Besides the Channel end, it includes a proof and the height from which the
proof was retrieved.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channel | [Channel](#ibc-core-channel-v1-Channel) |  | channel associated with the request identifiers |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryChannelsRequest"></a>

### QueryChannelsRequest
QueryChannelsRequest is the request type for the Query/Channels RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-channel-v1-QueryChannelsResponse"></a>

### QueryChannelsResponse
QueryChannelsResponse is the response type for the Query/Channels RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channels | [IdentifiedChannel](#ibc-core-channel-v1-IdentifiedChannel) | repeated | list of stored channels of the chain. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v1-QueryConnectionChannelsRequest"></a>

### QueryConnectionChannelsRequest
QueryConnectionChannelsRequest is the request type for the
Query/QueryConnectionChannels RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection | [string](#string) |  | connection unique identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-channel-v1-QueryConnectionChannelsResponse"></a>

### QueryConnectionChannelsResponse
QueryConnectionChannelsResponse is the Response type for the
Query/QueryConnectionChannels RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channels | [IdentifiedChannel](#ibc-core-channel-v1-IdentifiedChannel) | repeated | list of channels associated with a connection. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v1-QueryNextSequenceReceiveRequest"></a>

### QueryNextSequenceReceiveRequest
QueryNextSequenceReceiveRequest is the request type for the
Query/QueryNextSequenceReceiveRequest RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |






<a name="ibc-core-channel-v1-QueryNextSequenceReceiveResponse"></a>

### QueryNextSequenceReceiveResponse
QuerySequenceResponse is the response type for the
Query/QueryNextSequenceReceiveResponse RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| next_sequence_receive | [uint64](#uint64) |  | next sequence receive number |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryNextSequenceSendRequest"></a>

### QueryNextSequenceSendRequest
QueryNextSequenceSendRequest is the request type for the
Query/QueryNextSequenceSend RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |






<a name="ibc-core-channel-v1-QueryNextSequenceSendResponse"></a>

### QueryNextSequenceSendResponse
QueryNextSequenceSendResponse is the request type for the
Query/QueryNextSequenceSend RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| next_sequence_send | [uint64](#uint64) |  | next sequence send number |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryPacketAcknowledgementRequest"></a>

### QueryPacketAcknowledgementRequest
QueryPacketAcknowledgementRequest is the request type for the
Query/PacketAcknowledgement RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v1-QueryPacketAcknowledgementResponse"></a>

### QueryPacketAcknowledgementResponse
QueryPacketAcknowledgementResponse defines the client query response for a
packet which also includes a proof and the height from which the
proof was retrieved


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| acknowledgement | [bytes](#bytes) |  | packet associated with the request fields |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryPacketAcknowledgementsRequest"></a>

### QueryPacketAcknowledgementsRequest
QueryPacketAcknowledgementsRequest is the request type for the
Query/QueryPacketCommitments RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |
| packet_commitment_sequences | [uint64](#uint64) | repeated | list of packet sequences |






<a name="ibc-core-channel-v1-QueryPacketAcknowledgementsResponse"></a>

### QueryPacketAcknowledgementsResponse
QueryPacketAcknowledgemetsResponse is the request type for the
Query/QueryPacketAcknowledgements RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| acknowledgements | [PacketState](#ibc-core-channel-v1-PacketState) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v1-QueryPacketCommitmentRequest"></a>

### QueryPacketCommitmentRequest
QueryPacketCommitmentRequest is the request type for the
Query/PacketCommitment RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v1-QueryPacketCommitmentResponse"></a>

### QueryPacketCommitmentResponse
QueryPacketCommitmentResponse defines the client query response for a packet
which also includes a proof and the height from which the proof was
retrieved


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commitment | [bytes](#bytes) |  | packet associated with the request fields |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryPacketCommitmentsRequest"></a>

### QueryPacketCommitmentsRequest
QueryPacketCommitmentsRequest is the request type for the
Query/QueryPacketCommitments RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-channel-v1-QueryPacketCommitmentsResponse"></a>

### QueryPacketCommitmentsResponse
QueryPacketCommitmentsResponse is the request type for the
Query/QueryPacketCommitments RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commitments | [PacketState](#ibc-core-channel-v1-PacketState) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v1-QueryPacketReceiptRequest"></a>

### QueryPacketReceiptRequest
QueryPacketReceiptRequest is the request type for the
Query/PacketReceipt RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v1-QueryPacketReceiptResponse"></a>

### QueryPacketReceiptResponse
QueryPacketReceiptResponse defines the client query response for a packet
receipt which also includes a proof, and the height from which the proof was
retrieved


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| received | [bool](#bool) |  | success flag for if receipt exists |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryUnreceivedAcksRequest"></a>

### QueryUnreceivedAcksRequest
QueryUnreceivedAcks is the request type for the
Query/UnreceivedAcks RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| packet_ack_sequences | [uint64](#uint64) | repeated | list of acknowledgement sequences |






<a name="ibc-core-channel-v1-QueryUnreceivedAcksResponse"></a>

### QueryUnreceivedAcksResponse
QueryUnreceivedAcksResponse is the response type for the
Query/UnreceivedAcks RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequences | [uint64](#uint64) | repeated | list of unreceived acknowledgement sequences |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v1-QueryUnreceivedPacketsRequest"></a>

### QueryUnreceivedPacketsRequest
QueryUnreceivedPacketsRequest is the request type for the
Query/UnreceivedPackets RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| packet_commitment_sequences | [uint64](#uint64) | repeated | list of packet sequences |






<a name="ibc-core-channel-v1-QueryUnreceivedPacketsResponse"></a>

### QueryUnreceivedPacketsResponse
QueryUnreceivedPacketsResponse is the response type for the
Query/UnreceivedPacketCommitments RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequences | [uint64](#uint64) | repeated | list of unreceived packet sequences |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |





 

 

 


<a name="ibc-core-channel-v1-Query"></a>

### Query
Query provides defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Channel | [QueryChannelRequest](#ibc-core-channel-v1-QueryChannelRequest) | [QueryChannelResponse](#ibc-core-channel-v1-QueryChannelResponse) | Channel queries an IBC Channel. |
| Channels | [QueryChannelsRequest](#ibc-core-channel-v1-QueryChannelsRequest) | [QueryChannelsResponse](#ibc-core-channel-v1-QueryChannelsResponse) | Channels queries all the IBC channels of a chain. |
| ConnectionChannels | [QueryConnectionChannelsRequest](#ibc-core-channel-v1-QueryConnectionChannelsRequest) | [QueryConnectionChannelsResponse](#ibc-core-channel-v1-QueryConnectionChannelsResponse) | ConnectionChannels queries all the channels associated with a connection end. |
| ChannelClientState | [QueryChannelClientStateRequest](#ibc-core-channel-v1-QueryChannelClientStateRequest) | [QueryChannelClientStateResponse](#ibc-core-channel-v1-QueryChannelClientStateResponse) | ChannelClientState queries for the client state for the channel associated with the provided channel identifiers. |
| ChannelConsensusState | [QueryChannelConsensusStateRequest](#ibc-core-channel-v1-QueryChannelConsensusStateRequest) | [QueryChannelConsensusStateResponse](#ibc-core-channel-v1-QueryChannelConsensusStateResponse) | ChannelConsensusState queries for the consensus state for the channel associated with the provided channel identifiers. |
| PacketCommitment | [QueryPacketCommitmentRequest](#ibc-core-channel-v1-QueryPacketCommitmentRequest) | [QueryPacketCommitmentResponse](#ibc-core-channel-v1-QueryPacketCommitmentResponse) | PacketCommitment queries a stored packet commitment hash. |
| PacketCommitments | [QueryPacketCommitmentsRequest](#ibc-core-channel-v1-QueryPacketCommitmentsRequest) | [QueryPacketCommitmentsResponse](#ibc-core-channel-v1-QueryPacketCommitmentsResponse) | PacketCommitments returns all the packet commitments hashes associated with a channel. |
| PacketReceipt | [QueryPacketReceiptRequest](#ibc-core-channel-v1-QueryPacketReceiptRequest) | [QueryPacketReceiptResponse](#ibc-core-channel-v1-QueryPacketReceiptResponse) | PacketReceipt queries if a given packet sequence has been received on the queried chain |
| PacketAcknowledgement | [QueryPacketAcknowledgementRequest](#ibc-core-channel-v1-QueryPacketAcknowledgementRequest) | [QueryPacketAcknowledgementResponse](#ibc-core-channel-v1-QueryPacketAcknowledgementResponse) | PacketAcknowledgement queries a stored packet acknowledgement hash. |
| PacketAcknowledgements | [QueryPacketAcknowledgementsRequest](#ibc-core-channel-v1-QueryPacketAcknowledgementsRequest) | [QueryPacketAcknowledgementsResponse](#ibc-core-channel-v1-QueryPacketAcknowledgementsResponse) | PacketAcknowledgements returns all the packet acknowledgements associated with a channel. |
| UnreceivedPackets | [QueryUnreceivedPacketsRequest](#ibc-core-channel-v1-QueryUnreceivedPacketsRequest) | [QueryUnreceivedPacketsResponse](#ibc-core-channel-v1-QueryUnreceivedPacketsResponse) | UnreceivedPackets returns all the unreceived IBC packets associated with a channel and sequences. |
| UnreceivedAcks | [QueryUnreceivedAcksRequest](#ibc-core-channel-v1-QueryUnreceivedAcksRequest) | [QueryUnreceivedAcksResponse](#ibc-core-channel-v1-QueryUnreceivedAcksResponse) | UnreceivedAcks returns all the unreceived IBC acknowledgements associated with a channel and sequences. |
| NextSequenceReceive | [QueryNextSequenceReceiveRequest](#ibc-core-channel-v1-QueryNextSequenceReceiveRequest) | [QueryNextSequenceReceiveResponse](#ibc-core-channel-v1-QueryNextSequenceReceiveResponse) | NextSequenceReceive returns the next receive sequence for a given channel. |
| NextSequenceSend | [QueryNextSequenceSendRequest](#ibc-core-channel-v1-QueryNextSequenceSendRequest) | [QueryNextSequenceSendResponse](#ibc-core-channel-v1-QueryNextSequenceSendResponse) | NextSequenceSend returns the next send sequence for a given channel. |

 



<a name="ibc_core_channel_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v1/tx.proto



<a name="ibc-core-channel-v1-MsgAcknowledgement"></a>

### MsgAcknowledgement
MsgAcknowledgement receives incoming IBC acknowledgement


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v1-Packet) |  |  |
| acknowledgement | [bytes](#bytes) |  |  |
| proof_acked | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgAcknowledgementResponse"></a>

### MsgAcknowledgementResponse
MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v1-ResponseResultType) |  |  |






<a name="ibc-core-channel-v1-MsgChannelCloseConfirm"></a>

### MsgChannelCloseConfirm
MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
to acknowledge the change of channel state to CLOSED on Chain A.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |
| proof_init | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelCloseConfirmResponse"></a>

### MsgChannelCloseConfirmResponse
MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
type.






<a name="ibc-core-channel-v1-MsgChannelCloseInit"></a>

### MsgChannelCloseInit
MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
to close a channel with Chain B.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelCloseInitResponse"></a>

### MsgChannelCloseInitResponse
MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type.






<a name="ibc-core-channel-v1-MsgChannelOpenAck"></a>

### MsgChannelOpenAck
MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
the change of channel state to TRYOPEN on Chain B.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |
| counterparty_channel_id | [string](#string) |  |  |
| counterparty_version | [string](#string) |  |  |
| proof_try | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelOpenAckResponse"></a>

### MsgChannelOpenAckResponse
MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type.






<a name="ibc-core-channel-v1-MsgChannelOpenConfirm"></a>

### MsgChannelOpenConfirm
MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
acknowledge the change of channel state to OPEN on Chain A.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |
| proof_ack | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelOpenConfirmResponse"></a>

### MsgChannelOpenConfirmResponse
MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
type.






<a name="ibc-core-channel-v1-MsgChannelOpenInit"></a>

### MsgChannelOpenInit
MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
is called by a relayer on Chain A.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel | [Channel](#ibc-core-channel-v1-Channel) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelOpenInitResponse"></a>

### MsgChannelOpenInitResponse
MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channel_id | [string](#string) |  |  |
| version | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelOpenTry"></a>

### MsgChannelOpenTry
MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
on Chain B. The version field within the Channel field has been deprecated. Its
value will be ignored by core IBC.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| previous_channel_id | [string](#string) |  | **Deprecated.** Deprecated: this field is unused. Crossing hello&#39;s are no longer supported in core IBC. |
| channel | [Channel](#ibc-core-channel-v1-Channel) |  | NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. |
| counterparty_version | [string](#string) |  |  |
| proof_init | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelOpenTryResponse"></a>

### MsgChannelOpenTryResponse
MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgRecvPacket"></a>

### MsgRecvPacket
MsgRecvPacket receives incoming IBC packet


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v1-Packet) |  |  |
| proof_commitment | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgRecvPacketResponse"></a>

### MsgRecvPacketResponse
MsgRecvPacketResponse defines the Msg/RecvPacket response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v1-ResponseResultType) |  |  |






<a name="ibc-core-channel-v1-MsgTimeout"></a>

### MsgTimeout
MsgTimeout receives timed-out packet


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v1-Packet) |  |  |
| proof_unreceived | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| next_sequence_recv | [uint64](#uint64) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgTimeoutOnClose"></a>

### MsgTimeoutOnClose
MsgTimeoutOnClose timed-out packet upon counterparty channel closure.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v1-Packet) |  |  |
| proof_unreceived | [bytes](#bytes) |  |  |
| proof_close | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| next_sequence_recv | [uint64](#uint64) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgTimeoutOnCloseResponse"></a>

### MsgTimeoutOnCloseResponse
MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v1-ResponseResultType) |  |  |






<a name="ibc-core-channel-v1-MsgTimeoutResponse"></a>

### MsgTimeoutResponse
MsgTimeoutResponse defines the Msg/Timeout response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v1-ResponseResultType) |  |  |





 


<a name="ibc-core-channel-v1-ResponseResultType"></a>

### ResponseResultType
ResponseResultType defines the possible outcomes of the execution of a message

| Name | Number | Description |
| ---- | ------ | ----------- |
| RESPONSE_RESULT_TYPE_UNSPECIFIED | 0 | Default zero value enumeration |
| RESPONSE_RESULT_TYPE_NOOP | 1 | The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) |
| RESPONSE_RESULT_TYPE_SUCCESS | 2 | The message was executed successfully |
| RESPONSE_RESULT_TYPE_FAILURE | 3 | The message was executed unsuccessfully |


 

 


<a name="ibc-core-channel-v1-Msg"></a>

### Msg
Msg defines the ibc/channel Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ChannelOpenInit | [MsgChannelOpenInit](#ibc-core-channel-v1-MsgChannelOpenInit) | [MsgChannelOpenInitResponse](#ibc-core-channel-v1-MsgChannelOpenInitResponse) | ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. |
| ChannelOpenTry | [MsgChannelOpenTry](#ibc-core-channel-v1-MsgChannelOpenTry) | [MsgChannelOpenTryResponse](#ibc-core-channel-v1-MsgChannelOpenTryResponse) | ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. |
| ChannelOpenAck | [MsgChannelOpenAck](#ibc-core-channel-v1-MsgChannelOpenAck) | [MsgChannelOpenAckResponse](#ibc-core-channel-v1-MsgChannelOpenAckResponse) | ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. |
| ChannelOpenConfirm | [MsgChannelOpenConfirm](#ibc-core-channel-v1-MsgChannelOpenConfirm) | [MsgChannelOpenConfirmResponse](#ibc-core-channel-v1-MsgChannelOpenConfirmResponse) | ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. |
| ChannelCloseInit | [MsgChannelCloseInit](#ibc-core-channel-v1-MsgChannelCloseInit) | [MsgChannelCloseInitResponse](#ibc-core-channel-v1-MsgChannelCloseInitResponse) | ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. |
| ChannelCloseConfirm | [MsgChannelCloseConfirm](#ibc-core-channel-v1-MsgChannelCloseConfirm) | [MsgChannelCloseConfirmResponse](#ibc-core-channel-v1-MsgChannelCloseConfirmResponse) | ChannelCloseConfirm defines a rpc handler method for MsgChannelCloseConfirm. |
| RecvPacket | [MsgRecvPacket](#ibc-core-channel-v1-MsgRecvPacket) | [MsgRecvPacketResponse](#ibc-core-channel-v1-MsgRecvPacketResponse) | RecvPacket defines a rpc handler method for MsgRecvPacket. |
| Timeout | [MsgTimeout](#ibc-core-channel-v1-MsgTimeout) | [MsgTimeoutResponse](#ibc-core-channel-v1-MsgTimeoutResponse) | Timeout defines a rpc handler method for MsgTimeout. |
| TimeoutOnClose | [MsgTimeoutOnClose](#ibc-core-channel-v1-MsgTimeoutOnClose) | [MsgTimeoutOnCloseResponse](#ibc-core-channel-v1-MsgTimeoutOnCloseResponse) | TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. |
| Acknowledgement | [MsgAcknowledgement](#ibc-core-channel-v1-MsgAcknowledgement) | [MsgAcknowledgementResponse](#ibc-core-channel-v1-MsgAcknowledgementResponse) | Acknowledgement defines a rpc handler method for MsgAcknowledgement. |

 



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

