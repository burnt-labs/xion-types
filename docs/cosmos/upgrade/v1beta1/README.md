# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/upgrade/v1beta1/upgrade.proto](#cosmos_upgrade_v1beta1_upgrade-proto)
    - [CancelSoftwareUpgradeProposal](#cosmos-upgrade-v1beta1-CancelSoftwareUpgradeProposal)
    - [ModuleVersion](#cosmos-upgrade-v1beta1-ModuleVersion)
    - [Plan](#cosmos-upgrade-v1beta1-Plan)
    - [SoftwareUpgradeProposal](#cosmos-upgrade-v1beta1-SoftwareUpgradeProposal)
  
- [cosmos/upgrade/v1beta1/query.proto](#cosmos_upgrade_v1beta1_query-proto)
    - [QueryAppliedPlanRequest](#cosmos-upgrade-v1beta1-QueryAppliedPlanRequest)
    - [QueryAppliedPlanResponse](#cosmos-upgrade-v1beta1-QueryAppliedPlanResponse)
    - [QueryAuthorityRequest](#cosmos-upgrade-v1beta1-QueryAuthorityRequest)
    - [QueryAuthorityResponse](#cosmos-upgrade-v1beta1-QueryAuthorityResponse)
    - [QueryCurrentPlanRequest](#cosmos-upgrade-v1beta1-QueryCurrentPlanRequest)
    - [QueryCurrentPlanResponse](#cosmos-upgrade-v1beta1-QueryCurrentPlanResponse)
    - [QueryModuleVersionsRequest](#cosmos-upgrade-v1beta1-QueryModuleVersionsRequest)
    - [QueryModuleVersionsResponse](#cosmos-upgrade-v1beta1-QueryModuleVersionsResponse)
    - [QueryUpgradedConsensusStateRequest](#cosmos-upgrade-v1beta1-QueryUpgradedConsensusStateRequest)
    - [QueryUpgradedConsensusStateResponse](#cosmos-upgrade-v1beta1-QueryUpgradedConsensusStateResponse)
  
    - [Query](#cosmos-upgrade-v1beta1-Query)
  
- [cosmos/upgrade/v1beta1/tx.proto](#cosmos_upgrade_v1beta1_tx-proto)
    - [MsgCancelUpgrade](#cosmos-upgrade-v1beta1-MsgCancelUpgrade)
    - [MsgCancelUpgradeResponse](#cosmos-upgrade-v1beta1-MsgCancelUpgradeResponse)
    - [MsgSoftwareUpgrade](#cosmos-upgrade-v1beta1-MsgSoftwareUpgrade)
    - [MsgSoftwareUpgradeResponse](#cosmos-upgrade-v1beta1-MsgSoftwareUpgradeResponse)
  
    - [Msg](#cosmos-upgrade-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_upgrade_v1beta1_upgrade-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/upgrade/v1beta1/upgrade.proto



<a name="cosmos-upgrade-v1beta1-CancelSoftwareUpgradeProposal"></a>

### CancelSoftwareUpgradeProposal
CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
upgrade.
Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
proposals, see MsgCancelUpgrade.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | title of the proposal |
| description | [string](#string) |  | description of the proposal |






<a name="cosmos-upgrade-v1beta1-ModuleVersion"></a>

### ModuleVersion
ModuleVersion specifies a module and its consensus version.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name of the app module |
| version | [uint64](#uint64) |  | consensus version of the app module |






<a name="cosmos-upgrade-v1beta1-Plan"></a>

### Plan
Plan specifies information about a planned upgrade and when it should occur.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Sets the name for the upgrade. This name will be used by the upgraded version of the software to apply any special &#34;on-upgrade&#34; commands during the first BeginBlock method after the upgrade is applied. It is also used to detect whether a software version can handle a given upgrade. If no upgrade handler with this name has been set in the software, it will be assumed that the software is out-of-date when the upgrade Time or Height is reached and the software will exit. |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | **Deprecated.** Deprecated: Time based upgrades have been deprecated. Time based upgrade logic has been removed from the SDK. If this field is not empty, an error will be thrown. |
| height | [int64](#int64) |  | The height at which the upgrade must be performed. |
| info | [string](#string) |  | Any application specific upgrade info to be included on-chain such as a git commit that validators could automatically upgrade to |
| upgraded_client_state | [google.protobuf.Any](#google-protobuf-Any) |  | **Deprecated.** Deprecated: UpgradedClientState field has been deprecated. IBC upgrade logic has been moved to the IBC module in the sub module 02-client. If this field is not empty, an error will be thrown. |






<a name="cosmos-upgrade-v1beta1-SoftwareUpgradeProposal"></a>

### SoftwareUpgradeProposal
SoftwareUpgradeProposal is a gov Content type for initiating a software
upgrade.
Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
proposals, see MsgSoftwareUpgrade.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | title of the proposal |
| description | [string](#string) |  | description of the proposal |
| plan | [Plan](#cosmos-upgrade-v1beta1-Plan) |  | plan of the proposal |





 

 

 

 



<a name="cosmos_upgrade_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/upgrade/v1beta1/query.proto



<a name="cosmos-upgrade-v1beta1-QueryAppliedPlanRequest"></a>

### QueryAppliedPlanRequest
QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the name of the applied plan to query for. |






<a name="cosmos-upgrade-v1beta1-QueryAppliedPlanResponse"></a>

### QueryAppliedPlanResponse
QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  | height is the block height at which the plan was applied. |






<a name="cosmos-upgrade-v1beta1-QueryAuthorityRequest"></a>

### QueryAuthorityRequest
QueryAuthorityRequest is the request type for Query/Authority






<a name="cosmos-upgrade-v1beta1-QueryAuthorityResponse"></a>

### QueryAuthorityResponse
QueryAuthorityResponse is the response type for Query/Authority


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |






<a name="cosmos-upgrade-v1beta1-QueryCurrentPlanRequest"></a>

### QueryCurrentPlanRequest
QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
method.






<a name="cosmos-upgrade-v1beta1-QueryCurrentPlanResponse"></a>

### QueryCurrentPlanResponse
QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| plan | [Plan](#cosmos-upgrade-v1beta1-Plan) |  | plan is the current upgrade plan. |






<a name="cosmos-upgrade-v1beta1-QueryModuleVersionsRequest"></a>

### QueryModuleVersionsRequest
QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_name | [string](#string) |  | module_name is a field to query a specific module consensus version from state. Leaving this empty will fetch the full list of module versions from state |






<a name="cosmos-upgrade-v1beta1-QueryModuleVersionsResponse"></a>

### QueryModuleVersionsResponse
QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_versions | [ModuleVersion](#cosmos-upgrade-v1beta1-ModuleVersion) | repeated | module_versions is a list of module names with their consensus versions. |






<a name="cosmos-upgrade-v1beta1-QueryUpgradedConsensusStateRequest"></a>

### QueryUpgradedConsensusStateRequest
QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| last_height | [int64](#int64) |  | last height of the current chain must be sent in request as this is the height under which next consensus state is stored |






<a name="cosmos-upgrade-v1beta1-QueryUpgradedConsensusStateResponse"></a>

### QueryUpgradedConsensusStateResponse
QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| upgraded_consensus_state | [bytes](#bytes) |  |  |





 

 

 


<a name="cosmos-upgrade-v1beta1-Query"></a>

### Query
Query defines the gRPC upgrade querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CurrentPlan | [QueryCurrentPlanRequest](#cosmos-upgrade-v1beta1-QueryCurrentPlanRequest) | [QueryCurrentPlanResponse](#cosmos-upgrade-v1beta1-QueryCurrentPlanResponse) | CurrentPlan queries the current upgrade plan. |
| AppliedPlan | [QueryAppliedPlanRequest](#cosmos-upgrade-v1beta1-QueryAppliedPlanRequest) | [QueryAppliedPlanResponse](#cosmos-upgrade-v1beta1-QueryAppliedPlanResponse) | AppliedPlan queries a previously applied upgrade plan by its name. |
| UpgradedConsensusState | [QueryUpgradedConsensusStateRequest](#cosmos-upgrade-v1beta1-QueryUpgradedConsensusStateRequest) | [QueryUpgradedConsensusStateResponse](#cosmos-upgrade-v1beta1-QueryUpgradedConsensusStateResponse) | UpgradedConsensusState queries the consensus state that will serve as a trusted kernel for the next version of this chain. It will only be stored at the last height of this chain. UpgradedConsensusState RPC not supported with legacy querier This rpc is deprecated now that IBC has its own replacement (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54) |
| ModuleVersions | [QueryModuleVersionsRequest](#cosmos-upgrade-v1beta1-QueryModuleVersionsRequest) | [QueryModuleVersionsResponse](#cosmos-upgrade-v1beta1-QueryModuleVersionsResponse) | ModuleVersions queries the list of module versions from state. |
| Authority | [QueryAuthorityRequest](#cosmos-upgrade-v1beta1-QueryAuthorityRequest) | [QueryAuthorityResponse](#cosmos-upgrade-v1beta1-QueryAuthorityResponse) | Returns the account with authority to conduct upgrades |

 



<a name="cosmos_upgrade_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/upgrade/v1beta1/tx.proto



<a name="cosmos-upgrade-v1beta1-MsgCancelUpgrade"></a>

### MsgCancelUpgrade
MsgCancelUpgrade is the Msg/CancelUpgrade request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |






<a name="cosmos-upgrade-v1beta1-MsgCancelUpgradeResponse"></a>

### MsgCancelUpgradeResponse
MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.






<a name="cosmos-upgrade-v1beta1-MsgSoftwareUpgrade"></a>

### MsgSoftwareUpgrade
MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| plan | [Plan](#cosmos-upgrade-v1beta1-Plan) |  | plan is the upgrade plan. |






<a name="cosmos-upgrade-v1beta1-MsgSoftwareUpgradeResponse"></a>

### MsgSoftwareUpgradeResponse
MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.





 

 

 


<a name="cosmos-upgrade-v1beta1-Msg"></a>

### Msg
Msg defines the upgrade Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SoftwareUpgrade | [MsgSoftwareUpgrade](#cosmos-upgrade-v1beta1-MsgSoftwareUpgrade) | [MsgSoftwareUpgradeResponse](#cosmos-upgrade-v1beta1-MsgSoftwareUpgradeResponse) | SoftwareUpgrade is a governance operation for initiating a software upgrade. |
| CancelUpgrade | [MsgCancelUpgrade](#cosmos-upgrade-v1beta1-MsgCancelUpgrade) | [MsgCancelUpgradeResponse](#cosmos-upgrade-v1beta1-MsgCancelUpgradeResponse) | CancelUpgrade is a governance operation for cancelling a previously approved software upgrade. |

 



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

