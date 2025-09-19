# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/distribution/v1beta1/distribution.proto](#cosmos_distribution_v1beta1_distribution-proto)
    - [CommunityPoolSpendProposal](#cosmos-distribution-v1beta1-CommunityPoolSpendProposal)
    - [CommunityPoolSpendProposalWithDeposit](#cosmos-distribution-v1beta1-CommunityPoolSpendProposalWithDeposit)
    - [DelegationDelegatorReward](#cosmos-distribution-v1beta1-DelegationDelegatorReward)
    - [DelegatorStartingInfo](#cosmos-distribution-v1beta1-DelegatorStartingInfo)
    - [FeePool](#cosmos-distribution-v1beta1-FeePool)
    - [Params](#cosmos-distribution-v1beta1-Params)
    - [ValidatorAccumulatedCommission](#cosmos-distribution-v1beta1-ValidatorAccumulatedCommission)
    - [ValidatorCurrentRewards](#cosmos-distribution-v1beta1-ValidatorCurrentRewards)
    - [ValidatorHistoricalRewards](#cosmos-distribution-v1beta1-ValidatorHistoricalRewards)
    - [ValidatorOutstandingRewards](#cosmos-distribution-v1beta1-ValidatorOutstandingRewards)
    - [ValidatorSlashEvent](#cosmos-distribution-v1beta1-ValidatorSlashEvent)
    - [ValidatorSlashEvents](#cosmos-distribution-v1beta1-ValidatorSlashEvents)
  
- [cosmos/distribution/v1beta1/genesis.proto](#cosmos_distribution_v1beta1_genesis-proto)
    - [DelegatorStartingInfoRecord](#cosmos-distribution-v1beta1-DelegatorStartingInfoRecord)
    - [DelegatorWithdrawInfo](#cosmos-distribution-v1beta1-DelegatorWithdrawInfo)
    - [GenesisState](#cosmos-distribution-v1beta1-GenesisState)
    - [ValidatorAccumulatedCommissionRecord](#cosmos-distribution-v1beta1-ValidatorAccumulatedCommissionRecord)
    - [ValidatorCurrentRewardsRecord](#cosmos-distribution-v1beta1-ValidatorCurrentRewardsRecord)
    - [ValidatorHistoricalRewardsRecord](#cosmos-distribution-v1beta1-ValidatorHistoricalRewardsRecord)
    - [ValidatorOutstandingRewardsRecord](#cosmos-distribution-v1beta1-ValidatorOutstandingRewardsRecord)
    - [ValidatorSlashEventRecord](#cosmos-distribution-v1beta1-ValidatorSlashEventRecord)
  
- [cosmos/distribution/v1beta1/query.proto](#cosmos_distribution_v1beta1_query-proto)
    - [QueryCommunityPoolRequest](#cosmos-distribution-v1beta1-QueryCommunityPoolRequest)
    - [QueryCommunityPoolResponse](#cosmos-distribution-v1beta1-QueryCommunityPoolResponse)
    - [QueryDelegationRewardsRequest](#cosmos-distribution-v1beta1-QueryDelegationRewardsRequest)
    - [QueryDelegationRewardsResponse](#cosmos-distribution-v1beta1-QueryDelegationRewardsResponse)
    - [QueryDelegationTotalRewardsRequest](#cosmos-distribution-v1beta1-QueryDelegationTotalRewardsRequest)
    - [QueryDelegationTotalRewardsResponse](#cosmos-distribution-v1beta1-QueryDelegationTotalRewardsResponse)
    - [QueryDelegatorValidatorsRequest](#cosmos-distribution-v1beta1-QueryDelegatorValidatorsRequest)
    - [QueryDelegatorValidatorsResponse](#cosmos-distribution-v1beta1-QueryDelegatorValidatorsResponse)
    - [QueryDelegatorWithdrawAddressRequest](#cosmos-distribution-v1beta1-QueryDelegatorWithdrawAddressRequest)
    - [QueryDelegatorWithdrawAddressResponse](#cosmos-distribution-v1beta1-QueryDelegatorWithdrawAddressResponse)
    - [QueryParamsRequest](#cosmos-distribution-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-distribution-v1beta1-QueryParamsResponse)
    - [QueryValidatorCommissionRequest](#cosmos-distribution-v1beta1-QueryValidatorCommissionRequest)
    - [QueryValidatorCommissionResponse](#cosmos-distribution-v1beta1-QueryValidatorCommissionResponse)
    - [QueryValidatorDistributionInfoRequest](#cosmos-distribution-v1beta1-QueryValidatorDistributionInfoRequest)
    - [QueryValidatorDistributionInfoResponse](#cosmos-distribution-v1beta1-QueryValidatorDistributionInfoResponse)
    - [QueryValidatorOutstandingRewardsRequest](#cosmos-distribution-v1beta1-QueryValidatorOutstandingRewardsRequest)
    - [QueryValidatorOutstandingRewardsResponse](#cosmos-distribution-v1beta1-QueryValidatorOutstandingRewardsResponse)
    - [QueryValidatorSlashesRequest](#cosmos-distribution-v1beta1-QueryValidatorSlashesRequest)
    - [QueryValidatorSlashesResponse](#cosmos-distribution-v1beta1-QueryValidatorSlashesResponse)
  
    - [Query](#cosmos-distribution-v1beta1-Query)
  
- [cosmos/distribution/v1beta1/tx.proto](#cosmos_distribution_v1beta1_tx-proto)
    - [MsgCommunityPoolSpend](#cosmos-distribution-v1beta1-MsgCommunityPoolSpend)
    - [MsgCommunityPoolSpendResponse](#cosmos-distribution-v1beta1-MsgCommunityPoolSpendResponse)
    - [MsgDepositValidatorRewardsPool](#cosmos-distribution-v1beta1-MsgDepositValidatorRewardsPool)
    - [MsgDepositValidatorRewardsPoolResponse](#cosmos-distribution-v1beta1-MsgDepositValidatorRewardsPoolResponse)
    - [MsgFundCommunityPool](#cosmos-distribution-v1beta1-MsgFundCommunityPool)
    - [MsgFundCommunityPoolResponse](#cosmos-distribution-v1beta1-MsgFundCommunityPoolResponse)
    - [MsgSetWithdrawAddress](#cosmos-distribution-v1beta1-MsgSetWithdrawAddress)
    - [MsgSetWithdrawAddressResponse](#cosmos-distribution-v1beta1-MsgSetWithdrawAddressResponse)
    - [MsgUpdateParams](#cosmos-distribution-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-distribution-v1beta1-MsgUpdateParamsResponse)
    - [MsgWithdrawDelegatorReward](#cosmos-distribution-v1beta1-MsgWithdrawDelegatorReward)
    - [MsgWithdrawDelegatorRewardResponse](#cosmos-distribution-v1beta1-MsgWithdrawDelegatorRewardResponse)
    - [MsgWithdrawValidatorCommission](#cosmos-distribution-v1beta1-MsgWithdrawValidatorCommission)
    - [MsgWithdrawValidatorCommissionResponse](#cosmos-distribution-v1beta1-MsgWithdrawValidatorCommissionResponse)
  
    - [Msg](#cosmos-distribution-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_distribution_v1beta1_distribution-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/distribution/v1beta1/distribution.proto



<a name="cosmos-distribution-v1beta1-CommunityPoolSpendProposal"></a>

### CommunityPoolSpendProposal
CommunityPoolSpendProposal details a proposal for use of community funds,
together with how many coins are proposed to be spent, and to which
recipient account.

Deprecated: Do not use. As of the Cosmos SDK release v0.47.x, there is no
longer a need for an explicit CommunityPoolSpendProposal. To spend community
pool funds, a simple MsgCommunityPoolSpend can be invoked from the x/gov
module via a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| recipient | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-distribution-v1beta1-CommunityPoolSpendProposalWithDeposit"></a>

### CommunityPoolSpendProposalWithDeposit
CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
with a deposit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| recipient | [string](#string) |  |  |
| amount | [string](#string) |  |  |
| deposit | [string](#string) |  |  |






<a name="cosmos-distribution-v1beta1-DelegationDelegatorReward"></a>

### DelegationDelegatorReward
DelegationDelegatorReward represents the properties
of a delegator&#39;s delegation reward.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  |  |
| reward | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated |  |






<a name="cosmos-distribution-v1beta1-DelegatorStartingInfo"></a>

### DelegatorStartingInfo
DelegatorStartingInfo represents the starting info for a delegator reward
period. It tracks the previous validator period, the delegation&#39;s amount of
staking token, and the creation height (to check later on if any slashes have
occurred). NOTE: Even though validators are slashed to whole staking tokens,
the delegators within the validator may be left with less than a full token,
thus sdk.Dec is used.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| previous_period | [uint64](#uint64) |  |  |
| stake | [string](#string) |  |  |
| height | [uint64](#uint64) |  |  |






<a name="cosmos-distribution-v1beta1-FeePool"></a>

### FeePool
FeePool is the global fee pool for distribution.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| community_pool | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated |  |






<a name="cosmos-distribution-v1beta1-Params"></a>

### Params
Params defines the set of params for the distribution module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| community_tax | [string](#string) |  |  |
| base_proposer_reward | [string](#string) |  | **Deprecated.** Deprecated: The base_proposer_reward field is deprecated and is no longer used in the x/distribution module&#39;s reward mechanism. |
| bonus_proposer_reward | [string](#string) |  | **Deprecated.** Deprecated: The bonus_proposer_reward field is deprecated and is no longer used in the x/distribution module&#39;s reward mechanism. |
| withdraw_addr_enabled | [bool](#bool) |  |  |






<a name="cosmos-distribution-v1beta1-ValidatorAccumulatedCommission"></a>

### ValidatorAccumulatedCommission
ValidatorAccumulatedCommission represents accumulated commission
for a validator kept as a running counter, can be withdrawn at any time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commission | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated |  |






<a name="cosmos-distribution-v1beta1-ValidatorCurrentRewards"></a>

### ValidatorCurrentRewards
ValidatorCurrentRewards represents current rewards and current
period for a validator kept as a running counter and incremented
each block as long as the validator&#39;s tokens remain constant.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rewards | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated |  |
| period | [uint64](#uint64) |  |  |






<a name="cosmos-distribution-v1beta1-ValidatorHistoricalRewards"></a>

### ValidatorHistoricalRewards
ValidatorHistoricalRewards represents historical rewards for a validator.
Height is implicit within the store key.
Cumulative reward ratio is the sum from the zeroeth period
until this period of rewards / tokens, per the spec.
The reference count indicates the number of objects
which might need to reference this historical entry at any point.
ReferenceCount =
   number of outstanding delegations which ended the associated period (and
   might need to read that record)
 &#43; number of slashes which ended the associated period (and might need to
 read that record)
 &#43; one per validator for the zeroeth period, set on initialization


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cumulative_reward_ratio | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated |  |
| reference_count | [uint32](#uint32) |  |  |






<a name="cosmos-distribution-v1beta1-ValidatorOutstandingRewards"></a>

### ValidatorOutstandingRewards
ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
for a validator inexpensive to track, allows simple sanity checks.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rewards | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated |  |






<a name="cosmos-distribution-v1beta1-ValidatorSlashEvent"></a>

### ValidatorSlashEvent
ValidatorSlashEvent represents a validator slash event.
Height is implicit within the store key.
This is needed to calculate appropriate amount of staking tokens
for delegations which are withdrawn after a slash has occurred.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_period | [uint64](#uint64) |  |  |
| fraction | [string](#string) |  |  |






<a name="cosmos-distribution-v1beta1-ValidatorSlashEvents"></a>

### ValidatorSlashEvents
ValidatorSlashEvents is a collection of ValidatorSlashEvent messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_slash_events | [ValidatorSlashEvent](#cosmos-distribution-v1beta1-ValidatorSlashEvent) | repeated |  |





 

 

 

 



<a name="cosmos_distribution_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/distribution/v1beta1/genesis.proto



<a name="cosmos-distribution-v1beta1-DelegatorStartingInfoRecord"></a>

### DelegatorStartingInfoRecord
DelegatorStartingInfoRecord used for import / export via genesis json.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address is the address of the delegator. |
| validator_address | [string](#string) |  | validator_address is the address of the validator. |
| starting_info | [DelegatorStartingInfo](#cosmos-distribution-v1beta1-DelegatorStartingInfo) |  | starting_info defines the starting info of a delegator. |






<a name="cosmos-distribution-v1beta1-DelegatorWithdrawInfo"></a>

### DelegatorWithdrawInfo
DelegatorWithdrawInfo is the address for where distributions rewards are
withdrawn to by default this struct is only used at genesis to feed in
default withdraw addresses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address is the address of the delegator. |
| withdraw_address | [string](#string) |  | withdraw_address is the address to withdraw the delegation rewards to. |






<a name="cosmos-distribution-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the distribution module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-distribution-v1beta1-Params) |  | params defines all the parameters of the module. |
| fee_pool | [FeePool](#cosmos-distribution-v1beta1-FeePool) |  | fee_pool defines the fee pool at genesis. |
| delegator_withdraw_infos | [DelegatorWithdrawInfo](#cosmos-distribution-v1beta1-DelegatorWithdrawInfo) | repeated | fee_pool defines the delegator withdraw infos at genesis. |
| previous_proposer | [string](#string) |  | fee_pool defines the previous proposer at genesis. |
| outstanding_rewards | [ValidatorOutstandingRewardsRecord](#cosmos-distribution-v1beta1-ValidatorOutstandingRewardsRecord) | repeated | fee_pool defines the outstanding rewards of all validators at genesis. |
| validator_accumulated_commissions | [ValidatorAccumulatedCommissionRecord](#cosmos-distribution-v1beta1-ValidatorAccumulatedCommissionRecord) | repeated | fee_pool defines the accumulated commissions of all validators at genesis. |
| validator_historical_rewards | [ValidatorHistoricalRewardsRecord](#cosmos-distribution-v1beta1-ValidatorHistoricalRewardsRecord) | repeated | fee_pool defines the historical rewards of all validators at genesis. |
| validator_current_rewards | [ValidatorCurrentRewardsRecord](#cosmos-distribution-v1beta1-ValidatorCurrentRewardsRecord) | repeated | fee_pool defines the current rewards of all validators at genesis. |
| delegator_starting_infos | [DelegatorStartingInfoRecord](#cosmos-distribution-v1beta1-DelegatorStartingInfoRecord) | repeated | fee_pool defines the delegator starting infos at genesis. |
| validator_slash_events | [ValidatorSlashEventRecord](#cosmos-distribution-v1beta1-ValidatorSlashEventRecord) | repeated | fee_pool defines the validator slash events at genesis. |






<a name="cosmos-distribution-v1beta1-ValidatorAccumulatedCommissionRecord"></a>

### ValidatorAccumulatedCommissionRecord
ValidatorAccumulatedCommissionRecord is used for import / export via genesis
json.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address is the address of the validator. |
| accumulated | [ValidatorAccumulatedCommission](#cosmos-distribution-v1beta1-ValidatorAccumulatedCommission) |  | accumulated is the accumulated commission of a validator. |






<a name="cosmos-distribution-v1beta1-ValidatorCurrentRewardsRecord"></a>

### ValidatorCurrentRewardsRecord
ValidatorCurrentRewardsRecord is used for import / export via genesis json.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address is the address of the validator. |
| rewards | [ValidatorCurrentRewards](#cosmos-distribution-v1beta1-ValidatorCurrentRewards) |  | rewards defines the current rewards of a validator. |






<a name="cosmos-distribution-v1beta1-ValidatorHistoricalRewardsRecord"></a>

### ValidatorHistoricalRewardsRecord
ValidatorHistoricalRewardsRecord is used for import / export via genesis
json.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address is the address of the validator. |
| period | [uint64](#uint64) |  | period defines the period the historical rewards apply to. |
| rewards | [ValidatorHistoricalRewards](#cosmos-distribution-v1beta1-ValidatorHistoricalRewards) |  | rewards defines the historical rewards of a validator. |






<a name="cosmos-distribution-v1beta1-ValidatorOutstandingRewardsRecord"></a>

### ValidatorOutstandingRewardsRecord
ValidatorOutstandingRewardsRecord is used for import/export via genesis json.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address is the address of the validator. |
| outstanding_rewards | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated | outstanding_rewards represents the outstanding rewards of a validator. |






<a name="cosmos-distribution-v1beta1-ValidatorSlashEventRecord"></a>

### ValidatorSlashEventRecord
ValidatorSlashEventRecord is used for import / export via genesis json.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address is the address of the validator. |
| height | [uint64](#uint64) |  | height defines the block height at which the slash event occurred. |
| period | [uint64](#uint64) |  | period is the period of the slash event. |
| validator_slash_event | [ValidatorSlashEvent](#cosmos-distribution-v1beta1-ValidatorSlashEvent) |  | validator_slash_event describes the slash event. |





 

 

 

 



<a name="cosmos_distribution_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/distribution/v1beta1/query.proto



<a name="cosmos-distribution-v1beta1-QueryCommunityPoolRequest"></a>

### QueryCommunityPoolRequest
QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
method.






<a name="cosmos-distribution-v1beta1-QueryCommunityPoolResponse"></a>

### QueryCommunityPoolResponse
QueryCommunityPoolResponse is the response type for the Query/CommunityPool
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated | pool defines community pool&#39;s coins. |






<a name="cosmos-distribution-v1beta1-QueryDelegationRewardsRequest"></a>

### QueryDelegationRewardsRequest
QueryDelegationRewardsRequest is the request type for the
Query/DelegationRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address defines the delegator address to query for. |
| validator_address | [string](#string) |  | validator_address defines the validator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryDelegationRewardsResponse"></a>

### QueryDelegationRewardsResponse
QueryDelegationRewardsResponse is the response type for the
Query/DelegationRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rewards | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated | rewards defines the rewards accrued by a delegation. |






<a name="cosmos-distribution-v1beta1-QueryDelegationTotalRewardsRequest"></a>

### QueryDelegationTotalRewardsRequest
QueryDelegationTotalRewardsRequest is the request type for the
Query/DelegationTotalRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address defines the delegator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryDelegationTotalRewardsResponse"></a>

### QueryDelegationTotalRewardsResponse
QueryDelegationTotalRewardsResponse is the response type for the
Query/DelegationTotalRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rewards | [DelegationDelegatorReward](#cosmos-distribution-v1beta1-DelegationDelegatorReward) | repeated | rewards defines all the rewards accrued by a delegator. |
| total | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated | total defines the sum of all the rewards. |






<a name="cosmos-distribution-v1beta1-QueryDelegatorValidatorsRequest"></a>

### QueryDelegatorValidatorsRequest
QueryDelegatorValidatorsRequest is the request type for the
Query/DelegatorValidators RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address defines the delegator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryDelegatorValidatorsResponse"></a>

### QueryDelegatorValidatorsResponse
QueryDelegatorValidatorsResponse is the response type for the
Query/DelegatorValidators RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validators | [string](#string) | repeated | validators defines the validators a delegator is delegating for. |






<a name="cosmos-distribution-v1beta1-QueryDelegatorWithdrawAddressRequest"></a>

### QueryDelegatorWithdrawAddressRequest
QueryDelegatorWithdrawAddressRequest is the request type for the
Query/DelegatorWithdrawAddress RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address defines the delegator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryDelegatorWithdrawAddressResponse"></a>

### QueryDelegatorWithdrawAddressResponse
QueryDelegatorWithdrawAddressResponse is the response type for the
Query/DelegatorWithdrawAddress RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| withdraw_address | [string](#string) |  | withdraw_address defines the delegator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="cosmos-distribution-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-distribution-v1beta1-Params) |  | params defines the parameters of the module. |






<a name="cosmos-distribution-v1beta1-QueryValidatorCommissionRequest"></a>

### QueryValidatorCommissionRequest
QueryValidatorCommissionRequest is the request type for the
Query/ValidatorCommission RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address defines the validator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryValidatorCommissionResponse"></a>

### QueryValidatorCommissionResponse
QueryValidatorCommissionResponse is the response type for the
Query/ValidatorCommission RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commission | [ValidatorAccumulatedCommission](#cosmos-distribution-v1beta1-ValidatorAccumulatedCommission) |  | commission defines the commission the validator received. |






<a name="cosmos-distribution-v1beta1-QueryValidatorDistributionInfoRequest"></a>

### QueryValidatorDistributionInfoRequest
QueryValidatorDistributionInfoRequest is the request type for the Query/ValidatorDistributionInfo RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address defines the validator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryValidatorDistributionInfoResponse"></a>

### QueryValidatorDistributionInfoResponse
QueryValidatorDistributionInfoResponse is the response type for the Query/ValidatorDistributionInfo RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operator_address | [string](#string) |  | operator_address defines the validator operator address. |
| self_bond_rewards | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated | self_bond_rewards defines the self delegations rewards. |
| commission | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated | commission defines the commission the validator received. |






<a name="cosmos-distribution-v1beta1-QueryValidatorOutstandingRewardsRequest"></a>

### QueryValidatorOutstandingRewardsRequest
QueryValidatorOutstandingRewardsRequest is the request type for the
Query/ValidatorOutstandingRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address defines the validator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryValidatorOutstandingRewardsResponse"></a>

### QueryValidatorOutstandingRewardsResponse
QueryValidatorOutstandingRewardsResponse is the response type for the
Query/ValidatorOutstandingRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rewards | [ValidatorOutstandingRewards](#cosmos-distribution-v1beta1-ValidatorOutstandingRewards) |  |  |






<a name="cosmos-distribution-v1beta1-QueryValidatorSlashesRequest"></a>

### QueryValidatorSlashesRequest
QueryValidatorSlashesRequest is the request type for the
Query/ValidatorSlashes RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address defines the validator address to query for. |
| starting_height | [uint64](#uint64) |  | starting_height defines the optional starting height to query the slashes. |
| ending_height | [uint64](#uint64) |  | starting_height defines the optional ending height to query the slashes. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-distribution-v1beta1-QueryValidatorSlashesResponse"></a>

### QueryValidatorSlashesResponse
QueryValidatorSlashesResponse is the response type for the
Query/ValidatorSlashes RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| slashes | [ValidatorSlashEvent](#cosmos-distribution-v1beta1-ValidatorSlashEvent) | repeated | slashes defines the slashes the validator received. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |





 

 

 


<a name="cosmos-distribution-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service for distribution module.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#cosmos-distribution-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-distribution-v1beta1-QueryParamsResponse) | Params queries params of the distribution module. |
| ValidatorDistributionInfo | [QueryValidatorDistributionInfoRequest](#cosmos-distribution-v1beta1-QueryValidatorDistributionInfoRequest) | [QueryValidatorDistributionInfoResponse](#cosmos-distribution-v1beta1-QueryValidatorDistributionInfoResponse) | ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator |
| ValidatorOutstandingRewards | [QueryValidatorOutstandingRewardsRequest](#cosmos-distribution-v1beta1-QueryValidatorOutstandingRewardsRequest) | [QueryValidatorOutstandingRewardsResponse](#cosmos-distribution-v1beta1-QueryValidatorOutstandingRewardsResponse) | ValidatorOutstandingRewards queries rewards of a validator address. |
| ValidatorCommission | [QueryValidatorCommissionRequest](#cosmos-distribution-v1beta1-QueryValidatorCommissionRequest) | [QueryValidatorCommissionResponse](#cosmos-distribution-v1beta1-QueryValidatorCommissionResponse) | ValidatorCommission queries accumulated commission for a validator. |
| ValidatorSlashes | [QueryValidatorSlashesRequest](#cosmos-distribution-v1beta1-QueryValidatorSlashesRequest) | [QueryValidatorSlashesResponse](#cosmos-distribution-v1beta1-QueryValidatorSlashesResponse) | ValidatorSlashes queries slash events of a validator. |
| DelegationRewards | [QueryDelegationRewardsRequest](#cosmos-distribution-v1beta1-QueryDelegationRewardsRequest) | [QueryDelegationRewardsResponse](#cosmos-distribution-v1beta1-QueryDelegationRewardsResponse) | DelegationRewards queries the total rewards accrued by a delegation. |
| DelegationTotalRewards | [QueryDelegationTotalRewardsRequest](#cosmos-distribution-v1beta1-QueryDelegationTotalRewardsRequest) | [QueryDelegationTotalRewardsResponse](#cosmos-distribution-v1beta1-QueryDelegationTotalRewardsResponse) | DelegationTotalRewards queries the total rewards accrued by each validator. |
| DelegatorValidators | [QueryDelegatorValidatorsRequest](#cosmos-distribution-v1beta1-QueryDelegatorValidatorsRequest) | [QueryDelegatorValidatorsResponse](#cosmos-distribution-v1beta1-QueryDelegatorValidatorsResponse) | DelegatorValidators queries the validators of a delegator. |
| DelegatorWithdrawAddress | [QueryDelegatorWithdrawAddressRequest](#cosmos-distribution-v1beta1-QueryDelegatorWithdrawAddressRequest) | [QueryDelegatorWithdrawAddressResponse](#cosmos-distribution-v1beta1-QueryDelegatorWithdrawAddressResponse) | DelegatorWithdrawAddress queries withdraw address of a delegator. |
| CommunityPool | [QueryCommunityPoolRequest](#cosmos-distribution-v1beta1-QueryCommunityPoolRequest) | [QueryCommunityPoolResponse](#cosmos-distribution-v1beta1-QueryCommunityPoolResponse) | CommunityPool queries the community pool coins.

WARNING: This query will fail if an external community pool is used. |

 



<a name="cosmos_distribution_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/distribution/v1beta1/tx.proto



<a name="cosmos-distribution-v1beta1-MsgCommunityPoolSpend"></a>

### MsgCommunityPoolSpend
MsgCommunityPoolSpend defines a message for sending tokens from the community
pool to another account. This message is typically executed via a governance
proposal with the governance module being the executing authority.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| recipient | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-distribution-v1beta1-MsgCommunityPoolSpendResponse"></a>

### MsgCommunityPoolSpendResponse
MsgCommunityPoolSpendResponse defines the response to executing a
MsgCommunityPoolSpend message.






<a name="cosmos-distribution-v1beta1-MsgDepositValidatorRewardsPool"></a>

### MsgDepositValidatorRewardsPool
DepositValidatorRewardsPool defines the request structure to provide
additional rewards to delegators from a specific validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| depositor | [string](#string) |  |  |
| validator_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-distribution-v1beta1-MsgDepositValidatorRewardsPoolResponse"></a>

### MsgDepositValidatorRewardsPoolResponse
MsgDepositValidatorRewardsPoolResponse defines the response to executing a
MsgDepositValidatorRewardsPool message.






<a name="cosmos-distribution-v1beta1-MsgFundCommunityPool"></a>

### MsgFundCommunityPool
MsgFundCommunityPool allows an account to directly
fund the community pool.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| depositor | [string](#string) |  |  |






<a name="cosmos-distribution-v1beta1-MsgFundCommunityPoolResponse"></a>

### MsgFundCommunityPoolResponse
MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.






<a name="cosmos-distribution-v1beta1-MsgSetWithdrawAddress"></a>

### MsgSetWithdrawAddress
MsgSetWithdrawAddress sets the withdraw address for
a delegator (or validator self-delegation).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| withdraw_address | [string](#string) |  |  |






<a name="cosmos-distribution-v1beta1-MsgSetWithdrawAddressResponse"></a>

### MsgSetWithdrawAddressResponse
MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
type.






<a name="cosmos-distribution-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-distribution-v1beta1-Params) |  | params defines the x/distribution parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-distribution-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.






<a name="cosmos-distribution-v1beta1-MsgWithdrawDelegatorReward"></a>

### MsgWithdrawDelegatorReward
MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
from a single validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_address | [string](#string) |  |  |






<a name="cosmos-distribution-v1beta1-MsgWithdrawDelegatorRewardResponse"></a>

### MsgWithdrawDelegatorRewardResponse
MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-distribution-v1beta1-MsgWithdrawValidatorCommission"></a>

### MsgWithdrawValidatorCommission
MsgWithdrawValidatorCommission withdraws the full commission to the validator
address.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  |  |






<a name="cosmos-distribution-v1beta1-MsgWithdrawValidatorCommissionResponse"></a>

### MsgWithdrawValidatorCommissionResponse
MsgWithdrawValidatorCommissionResponse defines the
Msg/WithdrawValidatorCommission response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |





 

 

 


<a name="cosmos-distribution-v1beta1-Msg"></a>

### Msg
Msg defines the distribution Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SetWithdrawAddress | [MsgSetWithdrawAddress](#cosmos-distribution-v1beta1-MsgSetWithdrawAddress) | [MsgSetWithdrawAddressResponse](#cosmos-distribution-v1beta1-MsgSetWithdrawAddressResponse) | SetWithdrawAddress defines a method to change the withdraw address for a delegator (or validator self-delegation). |
| WithdrawDelegatorReward | [MsgWithdrawDelegatorReward](#cosmos-distribution-v1beta1-MsgWithdrawDelegatorReward) | [MsgWithdrawDelegatorRewardResponse](#cosmos-distribution-v1beta1-MsgWithdrawDelegatorRewardResponse) | WithdrawDelegatorReward defines a method to withdraw rewards of delegator from a single validator. |
| WithdrawValidatorCommission | [MsgWithdrawValidatorCommission](#cosmos-distribution-v1beta1-MsgWithdrawValidatorCommission) | [MsgWithdrawValidatorCommissionResponse](#cosmos-distribution-v1beta1-MsgWithdrawValidatorCommissionResponse) | WithdrawValidatorCommission defines a method to withdraw the full commission to the validator address. |
| FundCommunityPool | [MsgFundCommunityPool](#cosmos-distribution-v1beta1-MsgFundCommunityPool) | [MsgFundCommunityPoolResponse](#cosmos-distribution-v1beta1-MsgFundCommunityPoolResponse) | FundCommunityPool defines a method to allow an account to directly fund the community pool.

WARNING: This method will fail if an external community pool is used. |
| UpdateParams | [MsgUpdateParams](#cosmos-distribution-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-distribution-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/distribution module parameters. The authority is defined in the keeper. |
| CommunityPoolSpend | [MsgCommunityPoolSpend](#cosmos-distribution-v1beta1-MsgCommunityPoolSpend) | [MsgCommunityPoolSpendResponse](#cosmos-distribution-v1beta1-MsgCommunityPoolSpendResponse) | CommunityPoolSpend defines a governance operation for sending tokens from the community pool in the x/distribution module to another account, which could be the governance module itself. The authority is defined in the keeper.

WARNING: This method will fail if an external community pool is used. |
| DepositValidatorRewardsPool | [MsgDepositValidatorRewardsPool](#cosmos-distribution-v1beta1-MsgDepositValidatorRewardsPool) | [MsgDepositValidatorRewardsPoolResponse](#cosmos-distribution-v1beta1-MsgDepositValidatorRewardsPoolResponse) | DepositValidatorRewardsPool defines a method to provide additional rewards to delegators to a specific validator. |

 



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

