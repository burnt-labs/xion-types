# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/core/client/v1/client.proto](#ibc_core_client_v1_client-proto)
    - [ClientConsensusStates](#ibc-core-client-v1-ClientConsensusStates)
    - [ConsensusStateWithHeight](#ibc-core-client-v1-ConsensusStateWithHeight)
    - [Height](#ibc-core-client-v1-Height)
    - [IdentifiedClientState](#ibc-core-client-v1-IdentifiedClientState)
    - [Params](#ibc-core-client-v1-Params)
  
- [ibc/core/client/v1/genesis.proto](#ibc_core_client_v1_genesis-proto)
    - [GenesisMetadata](#ibc-core-client-v1-GenesisMetadata)
    - [GenesisState](#ibc-core-client-v1-GenesisState)
    - [IdentifiedGenesisMetadata](#ibc-core-client-v1-IdentifiedGenesisMetadata)
  
- [ibc/core/client/v1/query.proto](#ibc_core_client_v1_query-proto)
    - [QueryClientCreatorRequest](#ibc-core-client-v1-QueryClientCreatorRequest)
    - [QueryClientCreatorResponse](#ibc-core-client-v1-QueryClientCreatorResponse)
    - [QueryClientParamsRequest](#ibc-core-client-v1-QueryClientParamsRequest)
    - [QueryClientParamsResponse](#ibc-core-client-v1-QueryClientParamsResponse)
    - [QueryClientStateRequest](#ibc-core-client-v1-QueryClientStateRequest)
    - [QueryClientStateResponse](#ibc-core-client-v1-QueryClientStateResponse)
    - [QueryClientStatesRequest](#ibc-core-client-v1-QueryClientStatesRequest)
    - [QueryClientStatesResponse](#ibc-core-client-v1-QueryClientStatesResponse)
    - [QueryClientStatusRequest](#ibc-core-client-v1-QueryClientStatusRequest)
    - [QueryClientStatusResponse](#ibc-core-client-v1-QueryClientStatusResponse)
    - [QueryConsensusStateHeightsRequest](#ibc-core-client-v1-QueryConsensusStateHeightsRequest)
    - [QueryConsensusStateHeightsResponse](#ibc-core-client-v1-QueryConsensusStateHeightsResponse)
    - [QueryConsensusStateRequest](#ibc-core-client-v1-QueryConsensusStateRequest)
    - [QueryConsensusStateResponse](#ibc-core-client-v1-QueryConsensusStateResponse)
    - [QueryConsensusStatesRequest](#ibc-core-client-v1-QueryConsensusStatesRequest)
    - [QueryConsensusStatesResponse](#ibc-core-client-v1-QueryConsensusStatesResponse)
    - [QueryUpgradedClientStateRequest](#ibc-core-client-v1-QueryUpgradedClientStateRequest)
    - [QueryUpgradedClientStateResponse](#ibc-core-client-v1-QueryUpgradedClientStateResponse)
    - [QueryUpgradedConsensusStateRequest](#ibc-core-client-v1-QueryUpgradedConsensusStateRequest)
    - [QueryUpgradedConsensusStateResponse](#ibc-core-client-v1-QueryUpgradedConsensusStateResponse)
    - [QueryVerifyMembershipRequest](#ibc-core-client-v1-QueryVerifyMembershipRequest)
    - [QueryVerifyMembershipResponse](#ibc-core-client-v1-QueryVerifyMembershipResponse)
  
    - [Query](#ibc-core-client-v1-Query)
  
- [ibc/core/client/v1/tx.proto](#ibc_core_client_v1_tx-proto)
    - [MsgCreateClient](#ibc-core-client-v1-MsgCreateClient)
    - [MsgCreateClientResponse](#ibc-core-client-v1-MsgCreateClientResponse)
    - [MsgDeleteClientCreator](#ibc-core-client-v1-MsgDeleteClientCreator)
    - [MsgDeleteClientCreatorResponse](#ibc-core-client-v1-MsgDeleteClientCreatorResponse)
    - [MsgIBCSoftwareUpgrade](#ibc-core-client-v1-MsgIBCSoftwareUpgrade)
    - [MsgIBCSoftwareUpgradeResponse](#ibc-core-client-v1-MsgIBCSoftwareUpgradeResponse)
    - [MsgRecoverClient](#ibc-core-client-v1-MsgRecoverClient)
    - [MsgRecoverClientResponse](#ibc-core-client-v1-MsgRecoverClientResponse)
    - [MsgSubmitMisbehaviour](#ibc-core-client-v1-MsgSubmitMisbehaviour)
    - [MsgSubmitMisbehaviourResponse](#ibc-core-client-v1-MsgSubmitMisbehaviourResponse)
    - [MsgUpdateClient](#ibc-core-client-v1-MsgUpdateClient)
    - [MsgUpdateClientResponse](#ibc-core-client-v1-MsgUpdateClientResponse)
    - [MsgUpdateParams](#ibc-core-client-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#ibc-core-client-v1-MsgUpdateParamsResponse)
    - [MsgUpgradeClient](#ibc-core-client-v1-MsgUpgradeClient)
    - [MsgUpgradeClientResponse](#ibc-core-client-v1-MsgUpgradeClientResponse)
  
    - [Msg](#ibc-core-client-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_core_client_v1_client-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v1/client.proto



<a name="ibc-core-client-v1-ClientConsensusStates"></a>

### ClientConsensusStates
ClientConsensusStates defines all the stored consensus states for a given
client.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| consensus_states | [ConsensusStateWithHeight](#ibc-core-client-v1-ConsensusStateWithHeight) | repeated | consensus states and their heights associated with the client |






<a name="ibc-core-client-v1-ConsensusStateWithHeight"></a>

### ConsensusStateWithHeight
ConsensusStateWithHeight defines a consensus state with an additional height
field.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [Height](#ibc-core-client-v1-Height) |  | consensus state height |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | consensus state |






<a name="ibc-core-client-v1-Height"></a>

### Height
Height is a monotonically increasing data type
that can be compared against another Height for the purposes of updating and
freezing clients

Normally the RevisionHeight is incremented at each height while keeping
RevisionNumber the same. However some consensus algorithms may choose to
reset the height in certain conditions e.g. hard forks, state-machine
breaking changes In these cases, the RevisionNumber is incremented so that
height continues to be monitonically increasing even as the RevisionHeight
gets reset

Please note that json tags for generated Go code are overridden to explicitly exclude the omitempty jsontag.
This enforces the Go json marshaller to always emit zero values for both revision_number and revision_height.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| revision_number | [uint64](#uint64) |  | the revision that the client is currently on |
| revision_height | [uint64](#uint64) |  | the height within the given revision |






<a name="ibc-core-client-v1-IdentifiedClientState"></a>

### IdentifiedClientState
IdentifiedClientState defines a client state with an additional client
identifier field.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  | client state |






<a name="ibc-core-client-v1-Params"></a>

### Params
Params defines the set of IBC light client parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowed_clients | [string](#string) | repeated | allowed_clients defines the list of allowed client state types which can be created and interacted with. If a client type is removed from the allowed clients list, usage of this client will be disabled until it is added again to the list. |





 

 

 

 



<a name="ibc_core_client_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v1/genesis.proto



<a name="ibc-core-client-v1-GenesisMetadata"></a>

### GenesisMetadata
GenesisMetadata defines the genesis type for metadata that will be used
to export all client store keys that are not client or consensus states.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  | store key of metadata without clientID-prefix |
| value | [bytes](#bytes) |  | metadata value |






<a name="ibc-core-client-v1-GenesisState"></a>

### GenesisState
GenesisState defines the ibc client submodule&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| clients | [IdentifiedClientState](#ibc-core-client-v1-IdentifiedClientState) | repeated | client states with their corresponding identifiers |
| clients_consensus | [ClientConsensusStates](#ibc-core-client-v1-ClientConsensusStates) | repeated | consensus states from each client |
| clients_metadata | [IdentifiedGenesisMetadata](#ibc-core-client-v1-IdentifiedGenesisMetadata) | repeated | metadata from each client |
| params | [Params](#ibc-core-client-v1-Params) |  |  |
| create_localhost | [bool](#bool) |  | **Deprecated.** Deprecated: create_localhost has been deprecated. The localhost client is automatically created at genesis. |
| next_client_sequence | [uint64](#uint64) |  | the sequence for the next generated client identifier |






<a name="ibc-core-client-v1-IdentifiedGenesisMetadata"></a>

### IdentifiedGenesisMetadata
IdentifiedGenesisMetadata has the client metadata with the corresponding
client id.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  |  |
| client_metadata | [GenesisMetadata](#ibc-core-client-v1-GenesisMetadata) | repeated |  |





 

 

 

 



<a name="ibc_core_client_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v1/query.proto



<a name="ibc-core-client-v1-QueryClientCreatorRequest"></a>

### QueryClientCreatorRequest
QueryClientCreatorRequest is the request type for the Query/ClientCreator RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |






<a name="ibc-core-client-v1-QueryClientCreatorResponse"></a>

### QueryClientCreatorResponse
QueryClientCreatorResponse is the response type for the Query/ClientCreator RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creator | [string](#string) |  | creator of the client |






<a name="ibc-core-client-v1-QueryClientParamsRequest"></a>

### QueryClientParamsRequest
QueryClientParamsRequest is the request type for the Query/ClientParams RPC
method.






<a name="ibc-core-client-v1-QueryClientParamsResponse"></a>

### QueryClientParamsResponse
QueryClientParamsResponse is the response type for the Query/ClientParams RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#ibc-core-client-v1-Params) |  | params defines the parameters of the module. |






<a name="ibc-core-client-v1-QueryClientStateRequest"></a>

### QueryClientStateRequest
QueryClientStateRequest is the request type for the Query/ClientState RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client state unique identifier |






<a name="ibc-core-client-v1-QueryClientStateResponse"></a>

### QueryClientStateResponse
QueryClientStateResponse is the response type for the Query/ClientState RPC
method. Besides the client state, it includes a proof and the height from
which the proof was retrieved.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  | client state associated with the request identifier |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-client-v1-QueryClientStatesRequest"></a>

### QueryClientStatesRequest
QueryClientStatesRequest is the request type for the Query/ClientStates RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-client-v1-QueryClientStatesResponse"></a>

### QueryClientStatesResponse
QueryClientStatesResponse is the response type for the Query/ClientStates RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_states | [IdentifiedClientState](#ibc-core-client-v1-IdentifiedClientState) | repeated | list of stored ClientStates of the chain. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |






<a name="ibc-core-client-v1-QueryClientStatusRequest"></a>

### QueryClientStatusRequest
QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |






<a name="ibc-core-client-v1-QueryClientStatusResponse"></a>

### QueryClientStatusResponse
QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
method. It returns the current status of the IBC client.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [string](#string) |  |  |






<a name="ibc-core-client-v1-QueryConsensusStateHeightsRequest"></a>

### QueryConsensusStateHeightsRequest
QueryConsensusStateHeightsRequest is the request type for Query/ConsensusStateHeights
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-client-v1-QueryConsensusStateHeightsResponse"></a>

### QueryConsensusStateHeightsResponse
QueryConsensusStateHeightsResponse is the response type for the
Query/ConsensusStateHeights RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| consensus_state_heights | [Height](#ibc-core-client-v1-Height) | repeated | consensus state heights |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |






<a name="ibc-core-client-v1-QueryConsensusStateRequest"></a>

### QueryConsensusStateRequest
QueryConsensusStateRequest is the request type for the Query/ConsensusState
RPC method. Besides the consensus state, it includes a proof and the height
from which the proof was retrieved.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| revision_number | [uint64](#uint64) |  | consensus state revision number |
| revision_height | [uint64](#uint64) |  | consensus state revision height |
| latest_height | [bool](#bool) |  | latest_height overrides the height field and queries the latest stored ConsensusState |






<a name="ibc-core-client-v1-QueryConsensusStateResponse"></a>

### QueryConsensusStateResponse
QueryConsensusStateResponse is the response type for the Query/ConsensusState
RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | consensus state associated with the client identifier at the given height |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-client-v1-QueryConsensusStatesRequest"></a>

### QueryConsensusStatesRequest
QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-client-v1-QueryConsensusStatesResponse"></a>

### QueryConsensusStatesResponse
QueryConsensusStatesResponse is the response type for the
Query/ConsensusStates RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| consensus_states | [ConsensusStateWithHeight](#ibc-core-client-v1-ConsensusStateWithHeight) | repeated | consensus states associated with the identifier |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |






<a name="ibc-core-client-v1-QueryUpgradedClientStateRequest"></a>

### QueryUpgradedClientStateRequest
QueryUpgradedClientStateRequest is the request type for the
Query/UpgradedClientState RPC method






<a name="ibc-core-client-v1-QueryUpgradedClientStateResponse"></a>

### QueryUpgradedClientStateResponse
QueryUpgradedClientStateResponse is the response type for the
Query/UpgradedClientState RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| upgraded_client_state | [google.protobuf.Any](#google-protobuf-Any) |  | client state associated with the request identifier |






<a name="ibc-core-client-v1-QueryUpgradedConsensusStateRequest"></a>

### QueryUpgradedConsensusStateRequest
QueryUpgradedConsensusStateRequest is the request type for the
Query/UpgradedConsensusState RPC method






<a name="ibc-core-client-v1-QueryUpgradedConsensusStateResponse"></a>

### QueryUpgradedConsensusStateResponse
QueryUpgradedConsensusStateResponse is the response type for the
Query/UpgradedConsensusState RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| upgraded_consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | Consensus state associated with the request identifier |






<a name="ibc-core-client-v1-QueryVerifyMembershipRequest"></a>

### QueryVerifyMembershipRequest
QueryVerifyMembershipRequest is the request type for the Query/VerifyMembership RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier. |
| proof | [bytes](#bytes) |  | the proof to be verified by the client. |
| proof_height | [Height](#ibc-core-client-v1-Height) |  | the height of the commitment root at which the proof is verified. |
| value | [bytes](#bytes) |  | the value which is proven. |
| time_delay | [uint64](#uint64) |  | optional time delay |
| block_delay | [uint64](#uint64) |  | optional block delay |
| merkle_path | [ibc.core.commitment.v2.MerklePath](#ibc-core-commitment-v2-MerklePath) |  | the commitment key path. |






<a name="ibc-core-client-v1-QueryVerifyMembershipResponse"></a>

### QueryVerifyMembershipResponse
QueryVerifyMembershipResponse is the response type for the Query/VerifyMembership RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  | boolean indicating success or failure of proof verification. |





 

 

 


<a name="ibc-core-client-v1-Query"></a>

### Query
Query provides defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ClientState | [QueryClientStateRequest](#ibc-core-client-v1-QueryClientStateRequest) | [QueryClientStateResponse](#ibc-core-client-v1-QueryClientStateResponse) | ClientState queries an IBC light client. |
| ClientStates | [QueryClientStatesRequest](#ibc-core-client-v1-QueryClientStatesRequest) | [QueryClientStatesResponse](#ibc-core-client-v1-QueryClientStatesResponse) | ClientStates queries all the IBC light clients of a chain. |
| ConsensusState | [QueryConsensusStateRequest](#ibc-core-client-v1-QueryConsensusStateRequest) | [QueryConsensusStateResponse](#ibc-core-client-v1-QueryConsensusStateResponse) | ConsensusState queries a consensus state associated with a client state at a given height. |
| ConsensusStates | [QueryConsensusStatesRequest](#ibc-core-client-v1-QueryConsensusStatesRequest) | [QueryConsensusStatesResponse](#ibc-core-client-v1-QueryConsensusStatesResponse) | ConsensusStates queries all the consensus state associated with a given client. |
| ConsensusStateHeights | [QueryConsensusStateHeightsRequest](#ibc-core-client-v1-QueryConsensusStateHeightsRequest) | [QueryConsensusStateHeightsResponse](#ibc-core-client-v1-QueryConsensusStateHeightsResponse) | ConsensusStateHeights queries the height of every consensus states associated with a given client. |
| ClientStatus | [QueryClientStatusRequest](#ibc-core-client-v1-QueryClientStatusRequest) | [QueryClientStatusResponse](#ibc-core-client-v1-QueryClientStatusResponse) | Status queries the status of an IBC client. |
| ClientParams | [QueryClientParamsRequest](#ibc-core-client-v1-QueryClientParamsRequest) | [QueryClientParamsResponse](#ibc-core-client-v1-QueryClientParamsResponse) | ClientParams queries all parameters of the ibc client submodule. |
| ClientCreator | [QueryClientCreatorRequest](#ibc-core-client-v1-QueryClientCreatorRequest) | [QueryClientCreatorResponse](#ibc-core-client-v1-QueryClientCreatorResponse) | ClientCreator queries the creator of a given client. |
| UpgradedClientState | [QueryUpgradedClientStateRequest](#ibc-core-client-v1-QueryUpgradedClientStateRequest) | [QueryUpgradedClientStateResponse](#ibc-core-client-v1-QueryUpgradedClientStateResponse) | UpgradedClientState queries an Upgraded IBC light client. |
| UpgradedConsensusState | [QueryUpgradedConsensusStateRequest](#ibc-core-client-v1-QueryUpgradedConsensusStateRequest) | [QueryUpgradedConsensusStateResponse](#ibc-core-client-v1-QueryUpgradedConsensusStateResponse) | UpgradedConsensusState queries an Upgraded IBC consensus state. |
| VerifyMembership | [QueryVerifyMembershipRequest](#ibc-core-client-v1-QueryVerifyMembershipRequest) | [QueryVerifyMembershipResponse](#ibc-core-client-v1-QueryVerifyMembershipResponse) | VerifyMembership queries an IBC light client for proof verification of a value at a given key path. |

 



<a name="ibc_core_client_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v1/tx.proto



<a name="ibc-core-client-v1-MsgCreateClient"></a>

### MsgCreateClient
MsgCreateClient defines a message to create an IBC client


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  | light client state |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | consensus state associated with the client that corresponds to a given height. |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v1-MsgCreateClientResponse"></a>

### MsgCreateClientResponse
MsgCreateClientResponse defines the Msg/CreateClient response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  |  |






<a name="ibc-core-client-v1-MsgDeleteClientCreator"></a>

### MsgDeleteClientCreator
MsgDeleteClientCreator defines a message to delete the client creator of a client


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v1-MsgDeleteClientCreatorResponse"></a>

### MsgDeleteClientCreatorResponse
MsgDeleteClientCreatorResponse defines the Msg/DeleteClientCreator response type.






<a name="ibc-core-client-v1-MsgIBCSoftwareUpgrade"></a>

### MsgIBCSoftwareUpgrade
MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| plan | [cosmos.upgrade.v1beta1.Plan](#cosmos-upgrade-v1beta1-Plan) |  |  |
| upgraded_client_state | [google.protobuf.Any](#google-protobuf-Any) |  | An UpgradedClientState must be provided to perform an IBC breaking upgrade. This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs, so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the previous version of the chain. This will allow IBC connections to persist smoothly across planned chain upgrades. Correspondingly, the UpgradedClientState field has been deprecated in the Cosmos SDK to allow for this logic to exist solely in the 02-client module. |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v1-MsgIBCSoftwareUpgradeResponse"></a>

### MsgIBCSoftwareUpgradeResponse
MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type.






<a name="ibc-core-client-v1-MsgRecoverClient"></a>

### MsgRecoverClient
MsgRecoverClient defines the message used to recover a frozen or expired client.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subject_client_id | [string](#string) |  | the client identifier for the client to be updated if the proposal passes |
| substitute_client_id | [string](#string) |  | the substitute client identifier for the client which will replace the subject client |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v1-MsgRecoverClientResponse"></a>

### MsgRecoverClientResponse
MsgRecoverClientResponse defines the Msg/RecoverClient response type.






<a name="ibc-core-client-v1-MsgSubmitMisbehaviour"></a>

### MsgSubmitMisbehaviour
MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
light client misbehaviour.
This message has been deprecated. Use MsgUpdateClient instead.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| misbehaviour | [google.protobuf.Any](#google-protobuf-Any) |  | misbehaviour used for freezing the light client |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v1-MsgSubmitMisbehaviourResponse"></a>

### MsgSubmitMisbehaviourResponse
MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
type.






<a name="ibc-core-client-v1-MsgUpdateClient"></a>

### MsgUpdateClient
MsgUpdateClient defines an sdk.Msg to update a IBC client state using
the given client message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| client_message | [google.protobuf.Any](#google-protobuf-Any) |  | client message to update the light client |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v1-MsgUpdateClientResponse"></a>

### MsgUpdateClientResponse
MsgUpdateClientResponse defines the Msg/UpdateClient response type.






<a name="ibc-core-client-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams defines the sdk.Msg type to update the client parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| params | [Params](#ibc-core-client-v1-Params) |  | params defines the client parameters to update.

NOTE: All parameters must be supplied. |






<a name="ibc-core-client-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the MsgUpdateParams response type.






<a name="ibc-core-client-v1-MsgUpgradeClient"></a>

### MsgUpgradeClient
MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  | upgraded client state |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | upgraded consensus state, only contains enough information to serve as a basis of trust in update logic |
| proof_upgrade_client | [bytes](#bytes) |  | proof that old chain committed to new client |
| proof_upgrade_consensus_state | [bytes](#bytes) |  | proof that old chain committed to new consensus state |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v1-MsgUpgradeClientResponse"></a>

### MsgUpgradeClientResponse
MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.





 

 

 


<a name="ibc-core-client-v1-Msg"></a>

### Msg
Msg defines the ibc/client Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateClient | [MsgCreateClient](#ibc-core-client-v1-MsgCreateClient) | [MsgCreateClientResponse](#ibc-core-client-v1-MsgCreateClientResponse) | CreateClient defines a rpc handler method for MsgCreateClient. |
| UpdateClient | [MsgUpdateClient](#ibc-core-client-v1-MsgUpdateClient) | [MsgUpdateClientResponse](#ibc-core-client-v1-MsgUpdateClientResponse) | UpdateClient defines a rpc handler method for MsgUpdateClient. |
| UpgradeClient | [MsgUpgradeClient](#ibc-core-client-v1-MsgUpgradeClient) | [MsgUpgradeClientResponse](#ibc-core-client-v1-MsgUpgradeClientResponse) | UpgradeClient defines a rpc handler method for MsgUpgradeClient. |
| SubmitMisbehaviour | [MsgSubmitMisbehaviour](#ibc-core-client-v1-MsgSubmitMisbehaviour) | [MsgSubmitMisbehaviourResponse](#ibc-core-client-v1-MsgSubmitMisbehaviourResponse) | SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. |
| RecoverClient | [MsgRecoverClient](#ibc-core-client-v1-MsgRecoverClient) | [MsgRecoverClientResponse](#ibc-core-client-v1-MsgRecoverClientResponse) | RecoverClient defines a rpc handler method for MsgRecoverClient. |
| IBCSoftwareUpgrade | [MsgIBCSoftwareUpgrade](#ibc-core-client-v1-MsgIBCSoftwareUpgrade) | [MsgIBCSoftwareUpgradeResponse](#ibc-core-client-v1-MsgIBCSoftwareUpgradeResponse) | IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade. |
| UpdateClientParams | [MsgUpdateParams](#ibc-core-client-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#ibc-core-client-v1-MsgUpdateParamsResponse) | UpdateClientParams defines a rpc handler method for MsgUpdateParams. |
| DeleteClientCreator | [MsgDeleteClientCreator](#ibc-core-client-v1-MsgDeleteClientCreator) | [MsgDeleteClientCreatorResponse](#ibc-core-client-v1-MsgDeleteClientCreatorResponse) | DeleteClientCreator defines a rpc handler method for MsgDeleteClientCreator. |

 



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

