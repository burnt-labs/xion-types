# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [xion/feeabs/v1beta1/epoch.proto](#xion_feeabs_v1beta1_epoch-proto)
    - [EpochInfo](#xion-feeabs-v1beta1-EpochInfo)
    - [ExponentialBackoff](#xion-feeabs-v1beta1-ExponentialBackoff)
  
- [xion/feeabs/v1beta1/params.proto](#xion_feeabs_v1beta1_params-proto)
    - [Params](#xion-feeabs-v1beta1-Params)
  
- [xion/feeabs/v1beta1/genesis.proto](#xion_feeabs_v1beta1_genesis-proto)
    - [GenesisState](#xion-feeabs-v1beta1-GenesisState)
  
- [xion/feeabs/v1beta1/osmosisibc.proto](#xion_feeabs_v1beta1_osmosisibc-proto)
    - [CosmosQuery](#xion-feeabs-v1beta1-CosmosQuery)
    - [CosmosResponse](#xion-feeabs-v1beta1-CosmosResponse)
    - [InterchainQueryPacketAck](#xion-feeabs-v1beta1-InterchainQueryPacketAck)
    - [InterchainQueryPacketData](#xion-feeabs-v1beta1-InterchainQueryPacketData)
    - [InterchainQueryRequest](#xion-feeabs-v1beta1-InterchainQueryRequest)
    - [InterchainQueryRequestPacket](#xion-feeabs-v1beta1-InterchainQueryRequestPacket)
    - [QueryArithmeticTwapToNowRequest](#xion-feeabs-v1beta1-QueryArithmeticTwapToNowRequest)
    - [QueryArithmeticTwapToNowResponse](#xion-feeabs-v1beta1-QueryArithmeticTwapToNowResponse)
  
- [xion/feeabs/v1beta1/proposal.proto](#xion_feeabs_v1beta1_proposal-proto)
    - [AddHostZoneProposal](#xion-feeabs-v1beta1-AddHostZoneProposal)
    - [DeleteHostZoneProposal](#xion-feeabs-v1beta1-DeleteHostZoneProposal)
    - [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig)
    - [SetHostZoneProposal](#xion-feeabs-v1beta1-SetHostZoneProposal)
  
    - [HostChainFeeAbsStatus](#xion-feeabs-v1beta1-HostChainFeeAbsStatus)
  
- [xion/feeabs/v1beta1/query.proto](#xion_feeabs_v1beta1_query-proto)
    - [QueryAllHostChainConfigRequest](#xion-feeabs-v1beta1-QueryAllHostChainConfigRequest)
    - [QueryAllHostChainConfigResponse](#xion-feeabs-v1beta1-QueryAllHostChainConfigResponse)
    - [QueryFeeabsModuleBalancesRequest](#xion-feeabs-v1beta1-QueryFeeabsModuleBalancesRequest)
    - [QueryFeeabsModuleBalancesResponse](#xion-feeabs-v1beta1-QueryFeeabsModuleBalancesResponse)
    - [QueryHostChainConfigRequest](#xion-feeabs-v1beta1-QueryHostChainConfigRequest)
    - [QueryHostChainConfigResponse](#xion-feeabs-v1beta1-QueryHostChainConfigResponse)
    - [QueryOsmosisArithmeticTwapRequest](#xion-feeabs-v1beta1-QueryOsmosisArithmeticTwapRequest)
    - [QueryOsmosisArithmeticTwapResponse](#xion-feeabs-v1beta1-QueryOsmosisArithmeticTwapResponse)
  
    - [Query](#xion-feeabs-v1beta1-Query)
  
- [xion/feeabs/v1beta1/tx.proto](#xion_feeabs_v1beta1_tx-proto)
    - [MsgAddHostZone](#xion-feeabs-v1beta1-MsgAddHostZone)
    - [MsgAddHostZoneResponse](#xion-feeabs-v1beta1-MsgAddHostZoneResponse)
    - [MsgFundFeeAbsModuleAccount](#xion-feeabs-v1beta1-MsgFundFeeAbsModuleAccount)
    - [MsgFundFeeAbsModuleAccountResponse](#xion-feeabs-v1beta1-MsgFundFeeAbsModuleAccountResponse)
    - [MsgRemoveHostZone](#xion-feeabs-v1beta1-MsgRemoveHostZone)
    - [MsgRemoveHostZoneResponse](#xion-feeabs-v1beta1-MsgRemoveHostZoneResponse)
    - [MsgSendQueryIbcDenomTWAP](#xion-feeabs-v1beta1-MsgSendQueryIbcDenomTWAP)
    - [MsgSendQueryIbcDenomTWAPResponse](#xion-feeabs-v1beta1-MsgSendQueryIbcDenomTWAPResponse)
    - [MsgSwapCrossChain](#xion-feeabs-v1beta1-MsgSwapCrossChain)
    - [MsgSwapCrossChainResponse](#xion-feeabs-v1beta1-MsgSwapCrossChainResponse)
    - [MsgUpdateHostZone](#xion-feeabs-v1beta1-MsgUpdateHostZone)
    - [MsgUpdateHostZoneResponse](#xion-feeabs-v1beta1-MsgUpdateHostZoneResponse)
    - [MsgUpdateParams](#xion-feeabs-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#xion-feeabs-v1beta1-MsgUpdateParamsResponse)
  
    - [Msg](#xion-feeabs-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="xion_feeabs_v1beta1_epoch-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/epoch.proto



<a name="xion-feeabs-v1beta1-EpochInfo"></a>

### EpochInfo
EpochInfo defines information of a epoch


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






<a name="xion-feeabs-v1beta1-ExponentialBackoff"></a>

### ExponentialBackoff
ExponentialBackoff defines backoff epoch


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| jump | [int64](#int64) |  | jump defines the exponential backoff multiplier |
| future_epoch | [int64](#int64) |  | future_epoch defines the target epoch for the backoff |





 

 

 

 



<a name="xion_feeabs_v1beta1_params-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/params.proto



<a name="xion-feeabs-v1beta1-Params"></a>

### Params
Params defines the parameters for the feeabs module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| native_ibced_in_osmosis | [string](#string) |  | native ibced in osmosis |
| osmosis_query_twap_path | [string](#string) |  | osmosis query TWAP path |
| chain_name | [string](#string) |  | chain name for ibc path unwinding |
| ibc_transfer_channel | [string](#string) |  | transfer channel for cross chain swap with osmosis |
| ibc_query_icq_channel | [string](#string) |  | query twap price icq channel with osmosis |
| osmosis_crosschain_swap_address | [string](#string) |  | osmosis crosschain swap contract address |





 

 

 

 



<a name="xion_feeabs_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/genesis.proto



<a name="xion-feeabs-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the feeabs module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#xion-feeabs-v1beta1-Params) |  | params defines the parameters for the feeabs module |
| epochs | [EpochInfo](#xion-feeabs-v1beta1-EpochInfo) | repeated | epochs defines the list of epoch information |
| port_id | [string](#string) |  | port_id defines the IBC port identifier |





 

 

 

 



<a name="xion_feeabs_v1beta1_osmosisibc-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/osmosisibc.proto



<a name="xion-feeabs-v1beta1-CosmosQuery"></a>

### CosmosQuery
CosmosQuery contains a list of tendermint ABCI query requests. It should be
used when sending queries to an SDK host chain.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requests | [tendermint.abci.RequestQuery](#tendermint-abci-RequestQuery) | repeated | requests defines the list of ABCI query requests |






<a name="xion-feeabs-v1beta1-CosmosResponse"></a>

### CosmosResponse
CosmosResponse contains a list of tendermint ABCI query responses. It should
be used when receiving responses from an SDK host chain.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| responses | [tendermint.abci.ResponseQuery](#tendermint-abci-ResponseQuery) | repeated | responses defines the list of ABCI query responses |






<a name="xion-feeabs-v1beta1-InterchainQueryPacketAck"></a>

### InterchainQueryPacketAck
InterchainQueryPacketAck is comprised of an ABCI query response with
non-deterministic fields left empty (e.g. Codespace, Log, Info and ...).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | data defines the query response data |






<a name="xion-feeabs-v1beta1-InterchainQueryPacketData"></a>

### InterchainQueryPacketData
InterchainQueryPacketData is comprised of raw query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | data defines the raw query data |
| memo | [string](#string) |  | optional memo |






<a name="xion-feeabs-v1beta1-InterchainQueryRequest"></a>

### InterchainQueryRequest
InterchainQueryRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | data defines the raw query data |
| path | [string](#string) |  | path defines the query path |






<a name="xion-feeabs-v1beta1-InterchainQueryRequestPacket"></a>

### InterchainQueryRequestPacket
InterchainQueryRequestPacket


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requests | [InterchainQueryRequest](#xion-feeabs-v1beta1-InterchainQueryRequest) | repeated | requests defines the list of interchain query requests |






<a name="xion-feeabs-v1beta1-QueryArithmeticTwapToNowRequest"></a>

### QueryArithmeticTwapToNowRequest
QueryArithmeticTwapToNowRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  | pool_id defines the pool identifier |
| base_asset | [string](#string) |  | base_asset defines the base asset for the TWAP calculation |
| quote_asset | [string](#string) |  | quote_asset defines the quote asset for the TWAP calculation |
| start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | start_time defines the start time for the TWAP calculation |






<a name="xion-feeabs-v1beta1-QueryArithmeticTwapToNowResponse"></a>

### QueryArithmeticTwapToNowResponse
QueryArithmeticTwapToNowResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| arithmetic_twap | [string](#string) |  | arithmetic_twap defines the calculated arithmetic time-weighted average price |





 

 

 

 



<a name="xion_feeabs_v1beta1_proposal-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/proposal.proto



<a name="xion-feeabs-v1beta1-AddHostZoneProposal"></a>

### AddHostZoneProposal
AddHostZoneProposal


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | the title of the proposal |
| description | [string](#string) |  | the description of the proposal |
| host_chain_config | [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig) |  | the host chain config |






<a name="xion-feeabs-v1beta1-DeleteHostZoneProposal"></a>

### DeleteHostZoneProposal
DeleteHostZoneProposal


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | the title of the proposal |
| description | [string](#string) |  | the description of the proposal |
| ibc_denom | [string](#string) |  | the ibc denom of this token |






<a name="xion-feeabs-v1beta1-HostChainFeeAbsConfig"></a>

### HostChainFeeAbsConfig
HostChainFeeAbsConfig


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ibc_denom | [string](#string) |  | ibc token is allowed to be used as fee token |
| osmosis_pool_token_denom_in | [string](#string) |  | token_in in cross_chain swap contract. |
| pool_id | [uint64](#uint64) |  | pool id |
| status | [HostChainFeeAbsStatus](#xion-feeabs-v1beta1-HostChainFeeAbsStatus) |  | Host chain fee abstraction connection status |






<a name="xion-feeabs-v1beta1-SetHostZoneProposal"></a>

### SetHostZoneProposal
SetHostZoneProposal


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | the title of the proposal |
| description | [string](#string) |  | the description of the proposal |
| host_chain_config | [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig) |  | the host chain config |





 


<a name="xion-feeabs-v1beta1-HostChainFeeAbsStatus"></a>

### HostChainFeeAbsStatus
HostChainFeeAbsStatus represents the status of a host chain fee abstraction
configuration

| Name | Number | Description |
| ---- | ------ | ----------- |
| HOST_CHAIN_FEE_ABS_STATUS_UNSPECIFIED | 0 | HOST_CHAIN_FEE_ABS_STATUS_UNSPECIFIED indicates an unspecified status |
| HOST_CHAIN_FEE_ABS_STATUS_UPDATED | 1 | HOST_CHAIN_FEE_ABS_STATUS_UPDATED indicates the configuration is up to date |
| HOST_CHAIN_FEE_ABS_STATUS_OUTDATED | 2 | HOST_CHAIN_FEE_ABS_STATUS_OUTDATED indicates the configuration is outdated |
| HOST_CHAIN_FEE_ABS_STATUS_FROZEN | 3 | HOST_CHAIN_FEE_ABS_STATUS_FROZEN indicates the configuration is frozen |


 

 

 



<a name="xion_feeabs_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/query.proto



<a name="xion-feeabs-v1beta1-QueryAllHostChainConfigRequest"></a>

### QueryAllHostChainConfigRequest
QueryAllHostChainConfigRequest






<a name="xion-feeabs-v1beta1-QueryAllHostChainConfigResponse"></a>

### QueryAllHostChainConfigResponse
QueryAllHostChainConfigResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| all_host_chain_config | [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig) | repeated | All host chain fee abstraction configurations |






<a name="xion-feeabs-v1beta1-QueryFeeabsModuleBalancesRequest"></a>

### QueryFeeabsModuleBalancesRequest
QueryFeeabsModuleBalancesRequest is the request type for the Query/Feeabs RPC
method.






<a name="xion-feeabs-v1beta1-QueryFeeabsModuleBalancesResponse"></a>

### QueryFeeabsModuleBalancesResponse
QueryFeeabsModuleBalancesResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| balances | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | The coin balances held by the feeabs module |
| address | [string](#string) |  | The address of the feeabs module |






<a name="xion-feeabs-v1beta1-QueryHostChainConfigRequest"></a>

### QueryHostChainConfigRequest
QueryHostChainConfigRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ibc_denom | [string](#string) |  | The IBC denomination to query configuration for |






<a name="xion-feeabs-v1beta1-QueryHostChainConfigResponse"></a>

### QueryHostChainConfigResponse
QueryHostChainConfigResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| host_chain_config | [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig) |  | The host chain fee abstraction configuration |






<a name="xion-feeabs-v1beta1-QueryOsmosisArithmeticTwapRequest"></a>

### QueryOsmosisArithmeticTwapRequest
QueryOsmosisArithmeticTwapRequest is the request type for the Query/Feeabs
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ibc_denom | [string](#string) |  | The IBC denomination to query TWAP for |






<a name="xion-feeabs-v1beta1-QueryOsmosisArithmeticTwapResponse"></a>

### QueryOsmosisArithmeticTwapResponse
QueryOsmosisArithmeticTwapResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| arithmetic_twap | [string](#string) |  | The arithmetic time-weighted average price |





 

 

 


<a name="xion-feeabs-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| OsmosisArithmeticTwap | [QueryOsmosisArithmeticTwapRequest](#xion-feeabs-v1beta1-QueryOsmosisArithmeticTwapRequest) | [QueryOsmosisArithmeticTwapResponse](#xion-feeabs-v1beta1-QueryOsmosisArithmeticTwapResponse) | OsmosisArithmeticTwap return spot price of pair Osmo/nativeToken |
| FeeabsModuleBalances | [QueryFeeabsModuleBalancesRequest](#xion-feeabs-v1beta1-QueryFeeabsModuleBalancesRequest) | [QueryFeeabsModuleBalancesResponse](#xion-feeabs-v1beta1-QueryFeeabsModuleBalancesResponse) | FeeabsModuleBalances return total balances of feeabs module |
| HostChainConfig | [QueryHostChainConfigRequest](#xion-feeabs-v1beta1-QueryHostChainConfigRequest) | [QueryHostChainConfigResponse](#xion-feeabs-v1beta1-QueryHostChainConfigResponse) | HostChainConfig |
| AllHostChainConfig | [QueryAllHostChainConfigRequest](#xion-feeabs-v1beta1-QueryAllHostChainConfigRequest) | [QueryAllHostChainConfigResponse](#xion-feeabs-v1beta1-QueryAllHostChainConfigResponse) | AllHostChainConfig |

 



<a name="xion_feeabs_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/tx.proto



<a name="xion-feeabs-v1beta1-MsgAddHostZone"></a>

### MsgAddHostZone
MsgAddHostZone is the Msg/AddHostZone request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| host_chain_config | [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig) |  | the host chain config |






<a name="xion-feeabs-v1beta1-MsgAddHostZoneResponse"></a>

### MsgAddHostZoneResponse
MsgAddHostZoneResponse






<a name="xion-feeabs-v1beta1-MsgFundFeeAbsModuleAccount"></a>

### MsgFundFeeAbsModuleAccount
MsgFundFeeAbsModuleAccount


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | sender is the that actor that signed the messages |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | The amount of coins to fund to the feeabs module account |






<a name="xion-feeabs-v1beta1-MsgFundFeeAbsModuleAccountResponse"></a>

### MsgFundFeeAbsModuleAccountResponse
MsgFundFeeAbsModuleAccountResponse






<a name="xion-feeabs-v1beta1-MsgRemoveHostZone"></a>

### MsgRemoveHostZone
MsgRemoveHostZone is the Msg/RemoveHostZone request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| ibc_denom | [string](#string) |  | The IBC denomination of the host zone to remove |






<a name="xion-feeabs-v1beta1-MsgRemoveHostZoneResponse"></a>

### MsgRemoveHostZoneResponse
MsgRemoveHostZoneResponse






<a name="xion-feeabs-v1beta1-MsgSendQueryIbcDenomTWAP"></a>

### MsgSendQueryIbcDenomTWAP
MsgSendQueryIbcDenomTWAP


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the that actor that signed the messages |






<a name="xion-feeabs-v1beta1-MsgSendQueryIbcDenomTWAPResponse"></a>

### MsgSendQueryIbcDenomTWAPResponse
MsgSendQueryIbcDenomTWAPResponse






<a name="xion-feeabs-v1beta1-MsgSwapCrossChain"></a>

### MsgSwapCrossChain
MsgSwapCrossChain


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the that actor that signed the messages |
| ibc_denom | [string](#string) |  | The IBC denomination to swap |






<a name="xion-feeabs-v1beta1-MsgSwapCrossChainResponse"></a>

### MsgSwapCrossChainResponse
MsgSwapCrossChainResponse






<a name="xion-feeabs-v1beta1-MsgUpdateHostZone"></a>

### MsgUpdateHostZone
MsgUpdateHostZone is the Msg/UpdateHostZone request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| host_chain_config | [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig) |  | the host chain config |






<a name="xion-feeabs-v1beta1-MsgUpdateHostZoneResponse"></a>

### MsgUpdateHostZoneResponse
MsgUpdateHostZoneResponse






<a name="xion-feeabs-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| params | [Params](#xion-feeabs-v1beta1-Params) |  | params defines the x/feeabs parameters to update.

NOTE: All parameters must be supplied. |






<a name="xion-feeabs-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="xion-feeabs-v1beta1-Msg"></a>

### Msg
Msg defines the wasm Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SendQueryIbcDenomTWAP | [MsgSendQueryIbcDenomTWAP](#xion-feeabs-v1beta1-MsgSendQueryIbcDenomTWAP) | [MsgSendQueryIbcDenomTWAPResponse](#xion-feeabs-v1beta1-MsgSendQueryIbcDenomTWAPResponse) | SendQueryIbcDenomTWAP sends a twap query to osmosis |
| SwapCrossChain | [MsgSwapCrossChain](#xion-feeabs-v1beta1-MsgSwapCrossChain) | [MsgSwapCrossChainResponse](#xion-feeabs-v1beta1-MsgSwapCrossChainResponse) | SwapCrossChain submits a swap cross chain request. |
| FundFeeAbsModuleAccount | [MsgFundFeeAbsModuleAccount](#xion-feeabs-v1beta1-MsgFundFeeAbsModuleAccount) | [MsgFundFeeAbsModuleAccountResponse](#xion-feeabs-v1beta1-MsgFundFeeAbsModuleAccountResponse) | FundFeeAbsModuleAccount funds to feeabs module account. |
| UpdateParams | [MsgUpdateParams](#xion-feeabs-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#xion-feeabs-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/feeabs module parameters. The authority is defined in the keeper. |
| AddHostZone | [MsgAddHostZone](#xion-feeabs-v1beta1-MsgAddHostZone) | [MsgAddHostZoneResponse](#xion-feeabs-v1beta1-MsgAddHostZoneResponse) | AddHostZone adds a new host zone configuration |
| UpdateHostZone | [MsgUpdateHostZone](#xion-feeabs-v1beta1-MsgUpdateHostZone) | [MsgUpdateHostZoneResponse](#xion-feeabs-v1beta1-MsgUpdateHostZoneResponse) | UpdateHostZone updates an existing host zone configuration |
| RemoveHostZone | [MsgRemoveHostZone](#xion-feeabs-v1beta1-MsgRemoveHostZone) | [MsgRemoveHostZoneResponse](#xion-feeabs-v1beta1-MsgRemoveHostZoneResponse) | RemoveHostZone removes a host zone configuration |

 



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

