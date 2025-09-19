# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/core/connection/v1/connection.proto](#ibc_core_connection_v1_connection-proto)
    - [ClientPaths](#ibc-core-connection-v1-ClientPaths)
    - [ConnectionEnd](#ibc-core-connection-v1-ConnectionEnd)
    - [ConnectionPaths](#ibc-core-connection-v1-ConnectionPaths)
    - [Counterparty](#ibc-core-connection-v1-Counterparty)
    - [IdentifiedConnection](#ibc-core-connection-v1-IdentifiedConnection)
    - [Params](#ibc-core-connection-v1-Params)
    - [Version](#ibc-core-connection-v1-Version)
  
    - [State](#ibc-core-connection-v1-State)
  
- [ibc/core/connection/v1/genesis.proto](#ibc_core_connection_v1_genesis-proto)
    - [GenesisState](#ibc-core-connection-v1-GenesisState)
  
- [ibc/core/connection/v1/query.proto](#ibc_core_connection_v1_query-proto)
    - [QueryClientConnectionsRequest](#ibc-core-connection-v1-QueryClientConnectionsRequest)
    - [QueryClientConnectionsResponse](#ibc-core-connection-v1-QueryClientConnectionsResponse)
    - [QueryConnectionClientStateRequest](#ibc-core-connection-v1-QueryConnectionClientStateRequest)
    - [QueryConnectionClientStateResponse](#ibc-core-connection-v1-QueryConnectionClientStateResponse)
    - [QueryConnectionConsensusStateRequest](#ibc-core-connection-v1-QueryConnectionConsensusStateRequest)
    - [QueryConnectionConsensusStateResponse](#ibc-core-connection-v1-QueryConnectionConsensusStateResponse)
    - [QueryConnectionParamsRequest](#ibc-core-connection-v1-QueryConnectionParamsRequest)
    - [QueryConnectionParamsResponse](#ibc-core-connection-v1-QueryConnectionParamsResponse)
    - [QueryConnectionRequest](#ibc-core-connection-v1-QueryConnectionRequest)
    - [QueryConnectionResponse](#ibc-core-connection-v1-QueryConnectionResponse)
    - [QueryConnectionsRequest](#ibc-core-connection-v1-QueryConnectionsRequest)
    - [QueryConnectionsResponse](#ibc-core-connection-v1-QueryConnectionsResponse)
  
    - [Query](#ibc-core-connection-v1-Query)
  
- [ibc/core/connection/v1/tx.proto](#ibc_core_connection_v1_tx-proto)
    - [MsgConnectionOpenAck](#ibc-core-connection-v1-MsgConnectionOpenAck)
    - [MsgConnectionOpenAckResponse](#ibc-core-connection-v1-MsgConnectionOpenAckResponse)
    - [MsgConnectionOpenConfirm](#ibc-core-connection-v1-MsgConnectionOpenConfirm)
    - [MsgConnectionOpenConfirmResponse](#ibc-core-connection-v1-MsgConnectionOpenConfirmResponse)
    - [MsgConnectionOpenInit](#ibc-core-connection-v1-MsgConnectionOpenInit)
    - [MsgConnectionOpenInitResponse](#ibc-core-connection-v1-MsgConnectionOpenInitResponse)
    - [MsgConnectionOpenTry](#ibc-core-connection-v1-MsgConnectionOpenTry)
    - [MsgConnectionOpenTryResponse](#ibc-core-connection-v1-MsgConnectionOpenTryResponse)
    - [MsgUpdateParams](#ibc-core-connection-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#ibc-core-connection-v1-MsgUpdateParamsResponse)
  
    - [Msg](#ibc-core-connection-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_core_connection_v1_connection-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/connection/v1/connection.proto



<a name="ibc-core-connection-v1-ClientPaths"></a>

### ClientPaths
ClientPaths define all the connection paths for a client state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| paths | [string](#string) | repeated | list of connection paths |






<a name="ibc-core-connection-v1-ConnectionEnd"></a>

### ConnectionEnd
ConnectionEnd defines a stateful object on a chain connected to another
separate one.
NOTE: there must only be 2 defined ConnectionEnds to establish
a connection between two chains.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client associated with this connection. |
| versions | [Version](#ibc-core-connection-v1-Version) | repeated | IBC version which can be utilised to determine encodings or protocols for channels or packets utilising this connection. |
| state | [State](#ibc-core-connection-v1-State) |  | current state of the connection end. |
| counterparty | [Counterparty](#ibc-core-connection-v1-Counterparty) |  | counterparty chain associated with this connection. |
| delay_period | [uint64](#uint64) |  | delay period that must pass before a consensus state can be used for packet-verification NOTE: delay period logic is only implemented by some clients. |






<a name="ibc-core-connection-v1-ConnectionPaths"></a>

### ConnectionPaths
ConnectionPaths define all the connection paths for a given client state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client state unique identifier |
| paths | [string](#string) | repeated | list of connection paths |






<a name="ibc-core-connection-v1-Counterparty"></a>

### Counterparty
Counterparty defines the counterparty chain associated with a connection end.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | identifies the client on the counterparty chain associated with a given connection. |
| connection_id | [string](#string) |  | identifies the connection end on the counterparty chain associated with a given connection. |
| prefix | [ibc.core.commitment.v1.MerklePrefix](#ibc-core-commitment-v1-MerklePrefix) |  | commitment merkle prefix of the counterparty chain. |






<a name="ibc-core-connection-v1-IdentifiedConnection"></a>

### IdentifiedConnection
IdentifiedConnection defines a connection with additional connection
identifier field.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | connection identifier. |
| client_id | [string](#string) |  | client associated with this connection. |
| versions | [Version](#ibc-core-connection-v1-Version) | repeated | IBC version which can be utilised to determine encodings or protocols for channels or packets utilising this connection |
| state | [State](#ibc-core-connection-v1-State) |  | current state of the connection end. |
| counterparty | [Counterparty](#ibc-core-connection-v1-Counterparty) |  | counterparty chain associated with this connection. |
| delay_period | [uint64](#uint64) |  | delay period associated with this connection. |






<a name="ibc-core-connection-v1-Params"></a>

### Params
Params defines the set of Connection parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_expected_time_per_block | [uint64](#uint64) |  | maximum expected time per block (in nanoseconds), used to enforce block delay. This parameter should reflect the largest amount of time that the chain might reasonably take to produce the next block under normal operating conditions. A safe choice is 3-5x the expected time per block. |






<a name="ibc-core-connection-v1-Version"></a>

### Version
Version defines the versioning scheme used to negotiate the IBC version in
the connection handshake.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) |  | unique version identifier |
| features | [string](#string) | repeated | list of features compatible with the specified identifier |





 


<a name="ibc-core-connection-v1-State"></a>

### State
State defines if a connection is in one of the following states:
INIT, TRYOPEN, OPEN or UNINITIALIZED.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STATE_UNINITIALIZED_UNSPECIFIED | 0 | Default State |
| STATE_INIT | 1 | A connection end has just started the opening handshake. |
| STATE_TRYOPEN | 2 | A connection end has acknowledged the handshake step on the counterparty chain. |
| STATE_OPEN | 3 | A connection end has completed the handshake. |


 

 

 



<a name="ibc_core_connection_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/connection/v1/genesis.proto



<a name="ibc-core-connection-v1-GenesisState"></a>

### GenesisState
GenesisState defines the ibc connection submodule&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connections | [IdentifiedConnection](#ibc-core-connection-v1-IdentifiedConnection) | repeated |  |
| client_connection_paths | [ConnectionPaths](#ibc-core-connection-v1-ConnectionPaths) | repeated |  |
| next_connection_sequence | [uint64](#uint64) |  | the sequence for the next generated connection identifier |
| params | [Params](#ibc-core-connection-v1-Params) |  |  |





 

 

 

 



<a name="ibc_core_connection_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/connection/v1/query.proto



<a name="ibc-core-connection-v1-QueryClientConnectionsRequest"></a>

### QueryClientConnectionsRequest
QueryClientConnectionsRequest is the request type for the
Query/ClientConnections RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier associated with a connection |






<a name="ibc-core-connection-v1-QueryClientConnectionsResponse"></a>

### QueryClientConnectionsResponse
QueryClientConnectionsResponse is the response type for the
Query/ClientConnections RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_paths | [string](#string) | repeated | slice of all the connection paths associated with a client. |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was generated |






<a name="ibc-core-connection-v1-QueryConnectionClientStateRequest"></a>

### QueryConnectionClientStateRequest
QueryConnectionClientStateRequest is the request type for the
Query/ConnectionClientState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  | connection identifier |






<a name="ibc-core-connection-v1-QueryConnectionClientStateResponse"></a>

### QueryConnectionClientStateResponse
QueryConnectionClientStateResponse is the response type for the
Query/ConnectionClientState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identified_client_state | [ibc.core.client.v1.IdentifiedClientState](#ibc-core-client-v1-IdentifiedClientState) |  | client state associated with the channel |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-connection-v1-QueryConnectionConsensusStateRequest"></a>

### QueryConnectionConsensusStateRequest
QueryConnectionConsensusStateRequest is the request type for the
Query/ConnectionConsensusState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  | connection identifier |
| revision_number | [uint64](#uint64) |  |  |
| revision_height | [uint64](#uint64) |  |  |






<a name="ibc-core-connection-v1-QueryConnectionConsensusStateResponse"></a>

### QueryConnectionConsensusStateResponse
QueryConnectionConsensusStateResponse is the response type for the
Query/ConnectionConsensusState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | consensus state associated with the channel |
| client_id | [string](#string) |  | client ID associated with the consensus state |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-connection-v1-QueryConnectionParamsRequest"></a>

### QueryConnectionParamsRequest
QueryConnectionParamsRequest is the request type for the Query/ConnectionParams RPC method.






<a name="ibc-core-connection-v1-QueryConnectionParamsResponse"></a>

### QueryConnectionParamsResponse
QueryConnectionParamsResponse is the response type for the Query/ConnectionParams RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#ibc-core-connection-v1-Params) |  | params defines the parameters of the module. |






<a name="ibc-core-connection-v1-QueryConnectionRequest"></a>

### QueryConnectionRequest
QueryConnectionRequest is the request type for the Query/Connection RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  | connection unique identifier |






<a name="ibc-core-connection-v1-QueryConnectionResponse"></a>

### QueryConnectionResponse
QueryConnectionResponse is the response type for the Query/Connection RPC
method. Besides the connection end, it includes a proof and the height from
which the proof was retrieved.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection | [ConnectionEnd](#ibc-core-connection-v1-ConnectionEnd) |  | connection associated with the request identifier |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-connection-v1-QueryConnectionsRequest"></a>

### QueryConnectionsRequest
QueryConnectionsRequest is the request type for the Query/Connections RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  |  |






<a name="ibc-core-connection-v1-QueryConnectionsResponse"></a>

### QueryConnectionsResponse
QueryConnectionsResponse is the response type for the Query/Connections RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connections | [IdentifiedConnection](#ibc-core-connection-v1-IdentifiedConnection) | repeated | list of stored connections of the chain. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |





 

 

 


<a name="ibc-core-connection-v1-Query"></a>

### Query
Query provides defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Connection | [QueryConnectionRequest](#ibc-core-connection-v1-QueryConnectionRequest) | [QueryConnectionResponse](#ibc-core-connection-v1-QueryConnectionResponse) | Connection queries an IBC connection end. |
| Connections | [QueryConnectionsRequest](#ibc-core-connection-v1-QueryConnectionsRequest) | [QueryConnectionsResponse](#ibc-core-connection-v1-QueryConnectionsResponse) | Connections queries all the IBC connections of a chain. |
| ClientConnections | [QueryClientConnectionsRequest](#ibc-core-connection-v1-QueryClientConnectionsRequest) | [QueryClientConnectionsResponse](#ibc-core-connection-v1-QueryClientConnectionsResponse) | ClientConnections queries the connection paths associated with a client state. |
| ConnectionClientState | [QueryConnectionClientStateRequest](#ibc-core-connection-v1-QueryConnectionClientStateRequest) | [QueryConnectionClientStateResponse](#ibc-core-connection-v1-QueryConnectionClientStateResponse) | ConnectionClientState queries the client state associated with the connection. |
| ConnectionConsensusState | [QueryConnectionConsensusStateRequest](#ibc-core-connection-v1-QueryConnectionConsensusStateRequest) | [QueryConnectionConsensusStateResponse](#ibc-core-connection-v1-QueryConnectionConsensusStateResponse) | ConnectionConsensusState queries the consensus state associated with the connection. |
| ConnectionParams | [QueryConnectionParamsRequest](#ibc-core-connection-v1-QueryConnectionParamsRequest) | [QueryConnectionParamsResponse](#ibc-core-connection-v1-QueryConnectionParamsResponse) | ConnectionParams queries all parameters of the ibc connection submodule. |

 



<a name="ibc_core_connection_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/connection/v1/tx.proto



<a name="ibc-core-connection-v1-MsgConnectionOpenAck"></a>

### MsgConnectionOpenAck
MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
acknowledge the change of connection state to TRYOPEN on Chain B.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  |  |
| counterparty_connection_id | [string](#string) |  |  |
| version | [Version](#ibc-core-connection-v1-Version) |  |  |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  | **Deprecated.** Deprecated: this field is unused. |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| proof_try | [bytes](#bytes) |  | proof of the initialization the connection on Chain B: `UNINITIALIZED -&gt; TRYOPEN` |
| proof_client | [bytes](#bytes) |  | **Deprecated.** Deprecated: this field is unused. |
| proof_consensus | [bytes](#bytes) |  | **Deprecated.** Deprecated: this field is unused. |
| consensus_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | **Deprecated.** Deprecated: this field is unused. |
| signer | [string](#string) |  |  |
| host_consensus_state_proof | [bytes](#bytes) |  | **Deprecated.** Deprecated: this field is unused. |






<a name="ibc-core-connection-v1-MsgConnectionOpenAckResponse"></a>

### MsgConnectionOpenAckResponse
MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type.






<a name="ibc-core-connection-v1-MsgConnectionOpenConfirm"></a>

### MsgConnectionOpenConfirm
MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
acknowledge the change of connection state to OPEN on Chain A.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  |  |
| proof_ack | [bytes](#bytes) |  | proof for the change of the connection state on Chain A: `INIT -&gt; OPEN` |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-connection-v1-MsgConnectionOpenConfirmResponse"></a>

### MsgConnectionOpenConfirmResponse
MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
response type.






<a name="ibc-core-connection-v1-MsgConnectionOpenInit"></a>

### MsgConnectionOpenInit
MsgConnectionOpenInit defines the msg sent by an account on Chain A to
initialize a connection with Chain B.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  |  |
| counterparty | [Counterparty](#ibc-core-connection-v1-Counterparty) |  |  |
| version | [Version](#ibc-core-connection-v1-Version) |  |  |
| delay_period | [uint64](#uint64) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-connection-v1-MsgConnectionOpenInitResponse"></a>

### MsgConnectionOpenInitResponse
MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
type.






<a name="ibc-core-connection-v1-MsgConnectionOpenTry"></a>

### MsgConnectionOpenTry
MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
connection on Chain B.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  |  |
| previous_connection_id | [string](#string) |  | **Deprecated.** Deprecated: this field is unused. Crossing hellos are no longer supported in core IBC. |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  | **Deprecated.** Deprecated: this field is unused. |
| counterparty | [Counterparty](#ibc-core-connection-v1-Counterparty) |  |  |
| delay_period | [uint64](#uint64) |  |  |
| counterparty_versions | [Version](#ibc-core-connection-v1-Version) | repeated |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| proof_init | [bytes](#bytes) |  | proof of the initialization the connection on Chain A: `UNINITIALIZED -&gt; INIT` |
| proof_client | [bytes](#bytes) |  | **Deprecated.** Deprecated: this field is unused. |
| proof_consensus | [bytes](#bytes) |  | **Deprecated.** Deprecated: this field is unused. |
| consensus_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | **Deprecated.** Deprecated: this field is unused. |
| signer | [string](#string) |  |  |
| host_consensus_state_proof | [bytes](#bytes) |  | **Deprecated.** Deprecated: this field is unused. |






<a name="ibc-core-connection-v1-MsgConnectionOpenTryResponse"></a>

### MsgConnectionOpenTryResponse
MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type.






<a name="ibc-core-connection-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams defines the sdk.Msg type to update the connection parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| params | [Params](#ibc-core-connection-v1-Params) |  | params defines the connection parameters to update.

NOTE: All parameters must be supplied. |






<a name="ibc-core-connection-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the MsgUpdateParams response type.





 

 

 


<a name="ibc-core-connection-v1-Msg"></a>

### Msg
Msg defines the ibc/connection Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ConnectionOpenInit | [MsgConnectionOpenInit](#ibc-core-connection-v1-MsgConnectionOpenInit) | [MsgConnectionOpenInitResponse](#ibc-core-connection-v1-MsgConnectionOpenInitResponse) | ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. |
| ConnectionOpenTry | [MsgConnectionOpenTry](#ibc-core-connection-v1-MsgConnectionOpenTry) | [MsgConnectionOpenTryResponse](#ibc-core-connection-v1-MsgConnectionOpenTryResponse) | ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. |
| ConnectionOpenAck | [MsgConnectionOpenAck](#ibc-core-connection-v1-MsgConnectionOpenAck) | [MsgConnectionOpenAckResponse](#ibc-core-connection-v1-MsgConnectionOpenAckResponse) | ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. |
| ConnectionOpenConfirm | [MsgConnectionOpenConfirm](#ibc-core-connection-v1-MsgConnectionOpenConfirm) | [MsgConnectionOpenConfirmResponse](#ibc-core-connection-v1-MsgConnectionOpenConfirmResponse) | ConnectionOpenConfirm defines a rpc handler method for MsgConnectionOpenConfirm. |
| UpdateConnectionParams | [MsgUpdateParams](#ibc-core-connection-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#ibc-core-connection-v1-MsgUpdateParamsResponse) | UpdateConnectionParams defines a rpc handler method for MsgUpdateParams. |

 



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

