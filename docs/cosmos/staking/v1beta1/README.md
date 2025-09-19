# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/staking/v1beta1/authz.proto](#cosmos_staking_v1beta1_authz-proto)
    - [StakeAuthorization](#cosmos-staking-v1beta1-StakeAuthorization)
    - [StakeAuthorization.Validators](#cosmos-staking-v1beta1-StakeAuthorization-Validators)
  
    - [AuthorizationType](#cosmos-staking-v1beta1-AuthorizationType)
  
- [cosmos/staking/v1beta1/staking.proto](#cosmos_staking_v1beta1_staking-proto)
    - [Commission](#cosmos-staking-v1beta1-Commission)
    - [CommissionRates](#cosmos-staking-v1beta1-CommissionRates)
    - [DVPair](#cosmos-staking-v1beta1-DVPair)
    - [DVPairs](#cosmos-staking-v1beta1-DVPairs)
    - [DVVTriplet](#cosmos-staking-v1beta1-DVVTriplet)
    - [DVVTriplets](#cosmos-staking-v1beta1-DVVTriplets)
    - [Delegation](#cosmos-staking-v1beta1-Delegation)
    - [DelegationResponse](#cosmos-staking-v1beta1-DelegationResponse)
    - [Description](#cosmos-staking-v1beta1-Description)
    - [HistoricalInfo](#cosmos-staking-v1beta1-HistoricalInfo)
    - [Params](#cosmos-staking-v1beta1-Params)
    - [Pool](#cosmos-staking-v1beta1-Pool)
    - [Redelegation](#cosmos-staking-v1beta1-Redelegation)
    - [RedelegationEntry](#cosmos-staking-v1beta1-RedelegationEntry)
    - [RedelegationEntryResponse](#cosmos-staking-v1beta1-RedelegationEntryResponse)
    - [RedelegationResponse](#cosmos-staking-v1beta1-RedelegationResponse)
    - [UnbondingDelegation](#cosmos-staking-v1beta1-UnbondingDelegation)
    - [UnbondingDelegationEntry](#cosmos-staking-v1beta1-UnbondingDelegationEntry)
    - [ValAddresses](#cosmos-staking-v1beta1-ValAddresses)
    - [Validator](#cosmos-staking-v1beta1-Validator)
    - [ValidatorUpdates](#cosmos-staking-v1beta1-ValidatorUpdates)
  
    - [BondStatus](#cosmos-staking-v1beta1-BondStatus)
    - [Infraction](#cosmos-staking-v1beta1-Infraction)
  
- [cosmos/staking/v1beta1/genesis.proto](#cosmos_staking_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-staking-v1beta1-GenesisState)
    - [LastValidatorPower](#cosmos-staking-v1beta1-LastValidatorPower)
  
- [cosmos/staking/v1beta1/query.proto](#cosmos_staking_v1beta1_query-proto)
    - [QueryDelegationRequest](#cosmos-staking-v1beta1-QueryDelegationRequest)
    - [QueryDelegationResponse](#cosmos-staking-v1beta1-QueryDelegationResponse)
    - [QueryDelegatorDelegationsRequest](#cosmos-staking-v1beta1-QueryDelegatorDelegationsRequest)
    - [QueryDelegatorDelegationsResponse](#cosmos-staking-v1beta1-QueryDelegatorDelegationsResponse)
    - [QueryDelegatorUnbondingDelegationsRequest](#cosmos-staking-v1beta1-QueryDelegatorUnbondingDelegationsRequest)
    - [QueryDelegatorUnbondingDelegationsResponse](#cosmos-staking-v1beta1-QueryDelegatorUnbondingDelegationsResponse)
    - [QueryDelegatorValidatorRequest](#cosmos-staking-v1beta1-QueryDelegatorValidatorRequest)
    - [QueryDelegatorValidatorResponse](#cosmos-staking-v1beta1-QueryDelegatorValidatorResponse)
    - [QueryDelegatorValidatorsRequest](#cosmos-staking-v1beta1-QueryDelegatorValidatorsRequest)
    - [QueryDelegatorValidatorsResponse](#cosmos-staking-v1beta1-QueryDelegatorValidatorsResponse)
    - [QueryHistoricalInfoRequest](#cosmos-staking-v1beta1-QueryHistoricalInfoRequest)
    - [QueryHistoricalInfoResponse](#cosmos-staking-v1beta1-QueryHistoricalInfoResponse)
    - [QueryParamsRequest](#cosmos-staking-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-staking-v1beta1-QueryParamsResponse)
    - [QueryPoolRequest](#cosmos-staking-v1beta1-QueryPoolRequest)
    - [QueryPoolResponse](#cosmos-staking-v1beta1-QueryPoolResponse)
    - [QueryRedelegationsRequest](#cosmos-staking-v1beta1-QueryRedelegationsRequest)
    - [QueryRedelegationsResponse](#cosmos-staking-v1beta1-QueryRedelegationsResponse)
    - [QueryUnbondingDelegationRequest](#cosmos-staking-v1beta1-QueryUnbondingDelegationRequest)
    - [QueryUnbondingDelegationResponse](#cosmos-staking-v1beta1-QueryUnbondingDelegationResponse)
    - [QueryValidatorDelegationsRequest](#cosmos-staking-v1beta1-QueryValidatorDelegationsRequest)
    - [QueryValidatorDelegationsResponse](#cosmos-staking-v1beta1-QueryValidatorDelegationsResponse)
    - [QueryValidatorRequest](#cosmos-staking-v1beta1-QueryValidatorRequest)
    - [QueryValidatorResponse](#cosmos-staking-v1beta1-QueryValidatorResponse)
    - [QueryValidatorUnbondingDelegationsRequest](#cosmos-staking-v1beta1-QueryValidatorUnbondingDelegationsRequest)
    - [QueryValidatorUnbondingDelegationsResponse](#cosmos-staking-v1beta1-QueryValidatorUnbondingDelegationsResponse)
    - [QueryValidatorsRequest](#cosmos-staking-v1beta1-QueryValidatorsRequest)
    - [QueryValidatorsResponse](#cosmos-staking-v1beta1-QueryValidatorsResponse)
  
    - [Query](#cosmos-staking-v1beta1-Query)
  
- [cosmos/staking/v1beta1/tx.proto](#cosmos_staking_v1beta1_tx-proto)
    - [MsgBeginRedelegate](#cosmos-staking-v1beta1-MsgBeginRedelegate)
    - [MsgBeginRedelegateResponse](#cosmos-staking-v1beta1-MsgBeginRedelegateResponse)
    - [MsgCancelUnbondingDelegation](#cosmos-staking-v1beta1-MsgCancelUnbondingDelegation)
    - [MsgCancelUnbondingDelegationResponse](#cosmos-staking-v1beta1-MsgCancelUnbondingDelegationResponse)
    - [MsgCreateValidator](#cosmos-staking-v1beta1-MsgCreateValidator)
    - [MsgCreateValidatorResponse](#cosmos-staking-v1beta1-MsgCreateValidatorResponse)
    - [MsgDelegate](#cosmos-staking-v1beta1-MsgDelegate)
    - [MsgDelegateResponse](#cosmos-staking-v1beta1-MsgDelegateResponse)
    - [MsgEditValidator](#cosmos-staking-v1beta1-MsgEditValidator)
    - [MsgEditValidatorResponse](#cosmos-staking-v1beta1-MsgEditValidatorResponse)
    - [MsgUndelegate](#cosmos-staking-v1beta1-MsgUndelegate)
    - [MsgUndelegateResponse](#cosmos-staking-v1beta1-MsgUndelegateResponse)
    - [MsgUpdateParams](#cosmos-staking-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-staking-v1beta1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmos-staking-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_staking_v1beta1_authz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/staking/v1beta1/authz.proto



<a name="cosmos-staking-v1beta1-StakeAuthorization"></a>

### StakeAuthorization
StakeAuthorization defines authorization for delegate/undelegate/redelegate.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_tokens | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | max_tokens specifies the maximum amount of tokens can be delegate to a validator. If it is empty, there is no spend limit and any amount of coins can be delegated. |
| allow_list | [StakeAuthorization.Validators](#cosmos-staking-v1beta1-StakeAuthorization-Validators) |  | allow_list specifies list of validator addresses to whom grantee can delegate tokens on behalf of granter&#39;s account. |
| deny_list | [StakeAuthorization.Validators](#cosmos-staking-v1beta1-StakeAuthorization-Validators) |  | deny_list specifies list of validator addresses to whom grantee can not delegate tokens. |
| authorization_type | [AuthorizationType](#cosmos-staking-v1beta1-AuthorizationType) |  | authorization_type defines one of AuthorizationType. |






<a name="cosmos-staking-v1beta1-StakeAuthorization-Validators"></a>

### StakeAuthorization.Validators
Validators defines list of validator addresses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) | repeated |  |





 


<a name="cosmos-staking-v1beta1-AuthorizationType"></a>

### AuthorizationType
AuthorizationType defines the type of staking module authorization type

| Name | Number | Description |
| ---- | ------ | ----------- |
| AUTHORIZATION_TYPE_UNSPECIFIED | 0 | AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type |
| AUTHORIZATION_TYPE_DELEGATE | 1 | AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate |
| AUTHORIZATION_TYPE_UNDELEGATE | 2 | AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate |
| AUTHORIZATION_TYPE_REDELEGATE | 3 | AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate |
| AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION | 4 | AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION defines an authorization type for Msg/MsgCancelUnbondingDelegation |


 

 

 



<a name="cosmos_staking_v1beta1_staking-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/staking/v1beta1/staking.proto



<a name="cosmos-staking-v1beta1-Commission"></a>

### Commission
Commission defines commission parameters for a given validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commission_rates | [CommissionRates](#cosmos-staking-v1beta1-CommissionRates) |  | commission_rates defines the initial commission rates to be used for creating a validator. |
| update_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | update_time is the last time the commission rate was changed. |






<a name="cosmos-staking-v1beta1-CommissionRates"></a>

### CommissionRates
CommissionRates defines the initial commission rates to be used for creating
a validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rate | [string](#string) |  | rate is the commission rate charged to delegators, as a fraction. |
| max_rate | [string](#string) |  | max_rate defines the maximum commission rate which validator can ever charge, as a fraction. |
| max_change_rate | [string](#string) |  | max_change_rate defines the maximum daily increase of the validator commission, as a fraction. |






<a name="cosmos-staking-v1beta1-DVPair"></a>

### DVPair
DVPair is struct that just has a delegator-validator pair with no other data.
It is intended to be used as a marshalable pointer. For example, a DVPair can
be used to construct the key to getting an UnbondingDelegation from state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_address | [string](#string) |  |  |






<a name="cosmos-staking-v1beta1-DVPairs"></a>

### DVPairs
DVPairs defines an array of DVPair objects.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pairs | [DVPair](#cosmos-staking-v1beta1-DVPair) | repeated |  |






<a name="cosmos-staking-v1beta1-DVVTriplet"></a>

### DVVTriplet
DVVTriplet is struct that just has a delegator-validator-validator triplet
with no other data. It is intended to be used as a marshalable pointer. For
example, a DVVTriplet can be used to construct the key to getting a
Redelegation from state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_src_address | [string](#string) |  |  |
| validator_dst_address | [string](#string) |  |  |






<a name="cosmos-staking-v1beta1-DVVTriplets"></a>

### DVVTriplets
DVVTriplets defines an array of DVVTriplet objects.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| triplets | [DVVTriplet](#cosmos-staking-v1beta1-DVVTriplet) | repeated |  |






<a name="cosmos-staking-v1beta1-Delegation"></a>

### Delegation
Delegation represents the bond with tokens held by an account. It is
owned by one delegator, and is associated with the voting power of one
validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address is the encoded address of the delegator. |
| validator_address | [string](#string) |  | validator_address is the encoded address of the validator. |
| shares | [string](#string) |  | shares define the delegation shares received. |






<a name="cosmos-staking-v1beta1-DelegationResponse"></a>

### DelegationResponse
DelegationResponse is equivalent to Delegation except that it contains a
balance in addition to shares which is more suitable for client responses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegation | [Delegation](#cosmos-staking-v1beta1-Delegation) |  |  |
| balance | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="cosmos-staking-v1beta1-Description"></a>

### Description
Description defines a validator description.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| moniker | [string](#string) |  | moniker defines a human-readable name for the validator. |
| identity | [string](#string) |  | identity defines an optional identity signature (ex. UPort or Keybase). |
| website | [string](#string) |  | website defines an optional website link. |
| security_contact | [string](#string) |  | security_contact defines an optional email for security contact. |
| details | [string](#string) |  | details define other optional details. |






<a name="cosmos-staking-v1beta1-HistoricalInfo"></a>

### HistoricalInfo
HistoricalInfo contains header and validator information for a given block.
It is stored as part of staking module&#39;s state, which persists the `n` most
recent HistoricalInfo
(`n` is set by the staking module&#39;s `historical_entries` parameter).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [tendermint.types.Header](#tendermint-types-Header) |  |  |
| valset | [Validator](#cosmos-staking-v1beta1-Validator) | repeated |  |






<a name="cosmos-staking-v1beta1-Params"></a>

### Params
Params defines the parameters for the x/staking module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unbonding_time | [google.protobuf.Duration](#google-protobuf-Duration) |  | unbonding_time is the time duration of unbonding. |
| max_validators | [uint32](#uint32) |  | max_validators is the maximum number of validators. |
| max_entries | [uint32](#uint32) |  | max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). |
| historical_entries | [uint32](#uint32) |  | historical_entries is the number of historical entries to persist. |
| bond_denom | [string](#string) |  | bond_denom defines the bondable coin denomination. |
| min_commission_rate | [string](#string) |  | min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators |






<a name="cosmos-staking-v1beta1-Pool"></a>

### Pool
Pool is used for tracking bonded and not-bonded token supply of the bond
denomination.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| not_bonded_tokens | [string](#string) |  |  |
| bonded_tokens | [string](#string) |  |  |






<a name="cosmos-staking-v1beta1-Redelegation"></a>

### Redelegation
Redelegation contains the list of a particular delegator&#39;s redelegating bonds
from a particular source validator to a particular destination validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address is the bech32-encoded address of the delegator. |
| validator_src_address | [string](#string) |  | validator_src_address is the validator redelegation source operator address. |
| validator_dst_address | [string](#string) |  | validator_dst_address is the validator redelegation destination operator address. |
| entries | [RedelegationEntry](#cosmos-staking-v1beta1-RedelegationEntry) | repeated | entries are the redelegation entries.

redelegation entries |






<a name="cosmos-staking-v1beta1-RedelegationEntry"></a>

### RedelegationEntry
RedelegationEntry defines a redelegation object with relevant metadata.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creation_height | [int64](#int64) |  | creation_height defines the height which the redelegation took place. |
| completion_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | completion_time defines the unix time for redelegation completion. |
| initial_balance | [string](#string) |  | initial_balance defines the initial balance when redelegation started. |
| shares_dst | [string](#string) |  | shares_dst is the amount of destination-validator shares created by redelegation. |
| unbonding_id | [uint64](#uint64) |  | Incrementing id that uniquely identifies this entry |
| unbonding_on_hold_ref_count | [int64](#int64) |  | Strictly positive if this entry&#39;s unbonding has been stopped by external modules |






<a name="cosmos-staking-v1beta1-RedelegationEntryResponse"></a>

### RedelegationEntryResponse
RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
contains a balance in addition to shares which is more suitable for client
responses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| redelegation_entry | [RedelegationEntry](#cosmos-staking-v1beta1-RedelegationEntry) |  |  |
| balance | [string](#string) |  |  |






<a name="cosmos-staking-v1beta1-RedelegationResponse"></a>

### RedelegationResponse
RedelegationResponse is equivalent to a Redelegation except that its entries
contain a balance in addition to shares which is more suitable for client
responses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| redelegation | [Redelegation](#cosmos-staking-v1beta1-Redelegation) |  |  |
| entries | [RedelegationEntryResponse](#cosmos-staking-v1beta1-RedelegationEntryResponse) | repeated |  |






<a name="cosmos-staking-v1beta1-UnbondingDelegation"></a>

### UnbondingDelegation
UnbondingDelegation stores all of a single delegator&#39;s unbonding bonds
for a single validator in an time-ordered list.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address is the encoded address of the delegator. |
| validator_address | [string](#string) |  | validator_address is the encoded address of the validator. |
| entries | [UnbondingDelegationEntry](#cosmos-staking-v1beta1-UnbondingDelegationEntry) | repeated | entries are the unbonding delegation entries.

unbonding delegation entries |






<a name="cosmos-staking-v1beta1-UnbondingDelegationEntry"></a>

### UnbondingDelegationEntry
UnbondingDelegationEntry defines an unbonding object with relevant metadata.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creation_height | [int64](#int64) |  | creation_height is the height which the unbonding took place. |
| completion_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | completion_time is the unix time for unbonding completion. |
| initial_balance | [string](#string) |  | initial_balance defines the tokens initially scheduled to receive at completion. |
| balance | [string](#string) |  | balance defines the tokens to receive at completion. |
| unbonding_id | [uint64](#uint64) |  | Incrementing id that uniquely identifies this entry |
| unbonding_on_hold_ref_count | [int64](#int64) |  | Strictly positive if this entry&#39;s unbonding has been stopped by external modules |






<a name="cosmos-staking-v1beta1-ValAddresses"></a>

### ValAddresses
ValAddresses defines a repeated set of validator addresses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addresses | [string](#string) | repeated |  |






<a name="cosmos-staking-v1beta1-Validator"></a>

### Validator
Validator defines a validator, together with the total amount of the
Validator&#39;s bond shares and their exchange rate to coins. Slashing results in
a decrease in the exchange rate, allowing correct calculation of future
undelegations without iterating over delegators. When coins are delegated to
this validator, the validator is credited with a delegation whose number of
bond shares is based on the amount of coins delegated divided by the current
exchange rate. Voting power can be calculated as total bonded shares
multiplied by exchange rate.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operator_address | [string](#string) |  | operator_address defines the address of the validator&#39;s operator; bech encoded in JSON. |
| consensus_pubkey | [google.protobuf.Any](#google-protobuf-Any) |  | consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. |
| jailed | [bool](#bool) |  | jailed defined whether the validator has been jailed from bonded status or not. |
| status | [BondStatus](#cosmos-staking-v1beta1-BondStatus) |  | status is the validator status (bonded/unbonding/unbonded). |
| tokens | [string](#string) |  | tokens define the delegated tokens (incl. self-delegation). |
| delegator_shares | [string](#string) |  | delegator_shares defines total shares issued to a validator&#39;s delegators. |
| description | [Description](#cosmos-staking-v1beta1-Description) |  | description defines the description terms for the validator. |
| unbonding_height | [int64](#int64) |  | unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. |
| unbonding_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. |
| commission | [Commission](#cosmos-staking-v1beta1-Commission) |  | commission defines the commission parameters. |
| min_self_delegation | [string](#string) |  | min_self_delegation is the validator&#39;s self declared minimum self delegation. |
| unbonding_on_hold_ref_count | [int64](#int64) |  | strictly positive if this validator&#39;s unbonding has been stopped by external modules |
| unbonding_ids | [uint64](#uint64) | repeated | list of unbonding ids, each uniquely identifing an unbonding of this validator |






<a name="cosmos-staking-v1beta1-ValidatorUpdates"></a>

### ValidatorUpdates
ValidatorUpdates defines an array of abci.ValidatorUpdate objects.
TODO: explore moving this to proto/cosmos/base to separate modules from tendermint dependence


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| updates | [tendermint.abci.ValidatorUpdate](#tendermint-abci-ValidatorUpdate) | repeated |  |





 


<a name="cosmos-staking-v1beta1-BondStatus"></a>

### BondStatus
BondStatus is the status of a validator.

| Name | Number | Description |
| ---- | ------ | ----------- |
| BOND_STATUS_UNSPECIFIED | 0 | UNSPECIFIED defines an invalid validator status. |
| BOND_STATUS_UNBONDED | 1 | UNBONDED defines a validator that is not bonded. |
| BOND_STATUS_UNBONDING | 2 | UNBONDING defines a validator that is unbonding. |
| BOND_STATUS_BONDED | 3 | BONDED defines a validator that is bonded. |



<a name="cosmos-staking-v1beta1-Infraction"></a>

### Infraction
Infraction indicates the infraction a validator commited.

| Name | Number | Description |
| ---- | ------ | ----------- |
| INFRACTION_UNSPECIFIED | 0 | UNSPECIFIED defines an empty infraction. |
| INFRACTION_DOUBLE_SIGN | 1 | DOUBLE_SIGN defines a validator that double-signs a block. |
| INFRACTION_DOWNTIME | 2 | DOWNTIME defines a validator that missed signing too many blocks. |


 

 

 



<a name="cosmos_staking_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/staking/v1beta1/genesis.proto



<a name="cosmos-staking-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the staking module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-staking-v1beta1-Params) |  | params defines all the parameters of related to deposit. |
| last_total_power | [bytes](#bytes) |  | last_total_power tracks the total amounts of bonded tokens recorded during the previous end block. |
| last_validator_powers | [LastValidatorPower](#cosmos-staking-v1beta1-LastValidatorPower) | repeated | last_validator_powers is a special index that provides a historical list of the last-block&#39;s bonded validators. |
| validators | [Validator](#cosmos-staking-v1beta1-Validator) | repeated | validators defines the validator set at genesis. |
| delegations | [Delegation](#cosmos-staking-v1beta1-Delegation) | repeated | delegations defines the delegations active at genesis. |
| unbonding_delegations | [UnbondingDelegation](#cosmos-staking-v1beta1-UnbondingDelegation) | repeated | unbonding_delegations defines the unbonding delegations active at genesis. |
| redelegations | [Redelegation](#cosmos-staking-v1beta1-Redelegation) | repeated | redelegations defines the redelegations active at genesis. |
| exported | [bool](#bool) |  | exported defines a bool to identify whether the chain dealing with exported or initialized genesis. |






<a name="cosmos-staking-v1beta1-LastValidatorPower"></a>

### LastValidatorPower
LastValidatorPower required for validator set update logic.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address of the validator. |
| power | [int64](#int64) |  | power defines the power of the validator. |





 

 

 

 



<a name="cosmos_staking_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/staking/v1beta1/query.proto



<a name="cosmos-staking-v1beta1-QueryDelegationRequest"></a>

### QueryDelegationRequest
QueryDelegationRequest is request type for the Query/Delegation RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| validator_addr | [string](#string) |  | validator_addr defines the validator address to query for. |






<a name="cosmos-staking-v1beta1-QueryDelegationResponse"></a>

### QueryDelegationResponse
QueryDelegationResponse is response type for the Query/Delegation RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegation_response | [DelegationResponse](#cosmos-staking-v1beta1-DelegationResponse) |  | delegation_responses defines the delegation info of a delegation. |






<a name="cosmos-staking-v1beta1-QueryDelegatorDelegationsRequest"></a>

### QueryDelegatorDelegationsRequest
QueryDelegatorDelegationsRequest is request type for the
Query/DelegatorDelegations RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryDelegatorDelegationsResponse"></a>

### QueryDelegatorDelegationsResponse
QueryDelegatorDelegationsResponse is response type for the
Query/DelegatorDelegations RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegation_responses | [DelegationResponse](#cosmos-staking-v1beta1-DelegationResponse) | repeated | delegation_responses defines all the delegations&#39; info of a delegator. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-staking-v1beta1-QueryDelegatorUnbondingDelegationsRequest"></a>

### QueryDelegatorUnbondingDelegationsRequest
QueryDelegatorUnbondingDelegationsRequest is request type for the
Query/DelegatorUnbondingDelegations RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryDelegatorUnbondingDelegationsResponse"></a>

### QueryDelegatorUnbondingDelegationsResponse
QueryUnbondingDelegatorDelegationsResponse is response type for the
Query/UnbondingDelegatorDelegations RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unbonding_responses | [UnbondingDelegation](#cosmos-staking-v1beta1-UnbondingDelegation) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-staking-v1beta1-QueryDelegatorValidatorRequest"></a>

### QueryDelegatorValidatorRequest
QueryDelegatorValidatorRequest is request type for the
Query/DelegatorValidator RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| validator_addr | [string](#string) |  | validator_addr defines the validator address to query for. |






<a name="cosmos-staking-v1beta1-QueryDelegatorValidatorResponse"></a>

### QueryDelegatorValidatorResponse
QueryDelegatorValidatorResponse response type for the
Query/DelegatorValidator RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator | [Validator](#cosmos-staking-v1beta1-Validator) |  | validator defines the validator info. |






<a name="cosmos-staking-v1beta1-QueryDelegatorValidatorsRequest"></a>

### QueryDelegatorValidatorsRequest
QueryDelegatorValidatorsRequest is request type for the
Query/DelegatorValidators RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryDelegatorValidatorsResponse"></a>

### QueryDelegatorValidatorsResponse
QueryDelegatorValidatorsResponse is response type for the
Query/DelegatorValidators RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validators | [Validator](#cosmos-staking-v1beta1-Validator) | repeated | validators defines the validators&#39; info of a delegator. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-staking-v1beta1-QueryHistoricalInfoRequest"></a>

### QueryHistoricalInfoRequest
QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  | height defines at which height to query the historical info. |






<a name="cosmos-staking-v1beta1-QueryHistoricalInfoResponse"></a>

### QueryHistoricalInfoResponse
QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hist | [HistoricalInfo](#cosmos-staking-v1beta1-HistoricalInfo) |  | hist defines the historical info at the given height. |






<a name="cosmos-staking-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is request type for the Query/Params RPC method.






<a name="cosmos-staking-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-staking-v1beta1-Params) |  | params holds all the parameters of this module. |






<a name="cosmos-staking-v1beta1-QueryPoolRequest"></a>

### QueryPoolRequest
QueryPoolRequest is request type for the Query/Pool RPC method.






<a name="cosmos-staking-v1beta1-QueryPoolResponse"></a>

### QueryPoolResponse
QueryPoolResponse is response type for the Query/Pool RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool | [Pool](#cosmos-staking-v1beta1-Pool) |  | pool defines the pool info. |






<a name="cosmos-staking-v1beta1-QueryRedelegationsRequest"></a>

### QueryRedelegationsRequest
QueryRedelegationsRequest is request type for the Query/Redelegations RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| src_validator_addr | [string](#string) |  | src_validator_addr defines the validator address to redelegate from. |
| dst_validator_addr | [string](#string) |  | dst_validator_addr defines the validator address to redelegate to. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryRedelegationsResponse"></a>

### QueryRedelegationsResponse
QueryRedelegationsResponse is response type for the Query/Redelegations RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| redelegation_responses | [RedelegationResponse](#cosmos-staking-v1beta1-RedelegationResponse) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-staking-v1beta1-QueryUnbondingDelegationRequest"></a>

### QueryUnbondingDelegationRequest
QueryUnbondingDelegationRequest is request type for the
Query/UnbondingDelegation RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| validator_addr | [string](#string) |  | validator_addr defines the validator address to query for. |






<a name="cosmos-staking-v1beta1-QueryUnbondingDelegationResponse"></a>

### QueryUnbondingDelegationResponse
QueryDelegationResponse is response type for the Query/UnbondingDelegation
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unbond | [UnbondingDelegation](#cosmos-staking-v1beta1-UnbondingDelegation) |  | unbond defines the unbonding information of a delegation. |






<a name="cosmos-staking-v1beta1-QueryValidatorDelegationsRequest"></a>

### QueryValidatorDelegationsRequest
QueryValidatorDelegationsRequest is request type for the
Query/ValidatorDelegations RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_addr | [string](#string) |  | validator_addr defines the validator address to query for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryValidatorDelegationsResponse"></a>

### QueryValidatorDelegationsResponse
QueryValidatorDelegationsResponse is response type for the
Query/ValidatorDelegations RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegation_responses | [DelegationResponse](#cosmos-staking-v1beta1-DelegationResponse) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-staking-v1beta1-QueryValidatorRequest"></a>

### QueryValidatorRequest
QueryValidatorRequest is response type for the Query/Validator RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_addr | [string](#string) |  | validator_addr defines the validator address to query for. |






<a name="cosmos-staking-v1beta1-QueryValidatorResponse"></a>

### QueryValidatorResponse
QueryValidatorResponse is response type for the Query/Validator RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator | [Validator](#cosmos-staking-v1beta1-Validator) |  | validator defines the validator info. |






<a name="cosmos-staking-v1beta1-QueryValidatorUnbondingDelegationsRequest"></a>

### QueryValidatorUnbondingDelegationsRequest
QueryValidatorUnbondingDelegationsRequest is required type for the
Query/ValidatorUnbondingDelegations RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_addr | [string](#string) |  | validator_addr defines the validator address to query for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryValidatorUnbondingDelegationsResponse"></a>

### QueryValidatorUnbondingDelegationsResponse
QueryValidatorUnbondingDelegationsResponse is response type for the
Query/ValidatorUnbondingDelegations RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unbonding_responses | [UnbondingDelegation](#cosmos-staking-v1beta1-UnbondingDelegation) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-staking-v1beta1-QueryValidatorsRequest"></a>

### QueryValidatorsRequest
QueryValidatorsRequest is request type for Query/Validators RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [string](#string) |  | status enables to query for validators matching a given status. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryValidatorsResponse"></a>

### QueryValidatorsResponse
QueryValidatorsResponse is response type for the Query/Validators RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validators | [Validator](#cosmos-staking-v1beta1-Validator) | repeated | validators contains all the queried validators. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |





 

 

 


<a name="cosmos-staking-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Validators | [QueryValidatorsRequest](#cosmos-staking-v1beta1-QueryValidatorsRequest) | [QueryValidatorsResponse](#cosmos-staking-v1beta1-QueryValidatorsResponse) | Validators queries all validators that match the given status.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| Validator | [QueryValidatorRequest](#cosmos-staking-v1beta1-QueryValidatorRequest) | [QueryValidatorResponse](#cosmos-staking-v1beta1-QueryValidatorResponse) | Validator queries validator info for given validator address. |
| ValidatorDelegations | [QueryValidatorDelegationsRequest](#cosmos-staking-v1beta1-QueryValidatorDelegationsRequest) | [QueryValidatorDelegationsResponse](#cosmos-staking-v1beta1-QueryValidatorDelegationsResponse) | ValidatorDelegations queries delegate info for given validator.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| ValidatorUnbondingDelegations | [QueryValidatorUnbondingDelegationsRequest](#cosmos-staking-v1beta1-QueryValidatorUnbondingDelegationsRequest) | [QueryValidatorUnbondingDelegationsResponse](#cosmos-staking-v1beta1-QueryValidatorUnbondingDelegationsResponse) | ValidatorUnbondingDelegations queries unbonding delegations of a validator.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| Delegation | [QueryDelegationRequest](#cosmos-staking-v1beta1-QueryDelegationRequest) | [QueryDelegationResponse](#cosmos-staking-v1beta1-QueryDelegationResponse) | Delegation queries delegate info for given validator delegator pair. |
| UnbondingDelegation | [QueryUnbondingDelegationRequest](#cosmos-staking-v1beta1-QueryUnbondingDelegationRequest) | [QueryUnbondingDelegationResponse](#cosmos-staking-v1beta1-QueryUnbondingDelegationResponse) | UnbondingDelegation queries unbonding info for given validator delegator pair. |
| DelegatorDelegations | [QueryDelegatorDelegationsRequest](#cosmos-staking-v1beta1-QueryDelegatorDelegationsRequest) | [QueryDelegatorDelegationsResponse](#cosmos-staking-v1beta1-QueryDelegatorDelegationsResponse) | DelegatorDelegations queries all delegations of a given delegator address.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| DelegatorUnbondingDelegations | [QueryDelegatorUnbondingDelegationsRequest](#cosmos-staking-v1beta1-QueryDelegatorUnbondingDelegationsRequest) | [QueryDelegatorUnbondingDelegationsResponse](#cosmos-staking-v1beta1-QueryDelegatorUnbondingDelegationsResponse) | DelegatorUnbondingDelegations queries all unbonding delegations of a given delegator address.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| Redelegations | [QueryRedelegationsRequest](#cosmos-staking-v1beta1-QueryRedelegationsRequest) | [QueryRedelegationsResponse](#cosmos-staking-v1beta1-QueryRedelegationsResponse) | Redelegations queries redelegations of given address.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| DelegatorValidators | [QueryDelegatorValidatorsRequest](#cosmos-staking-v1beta1-QueryDelegatorValidatorsRequest) | [QueryDelegatorValidatorsResponse](#cosmos-staking-v1beta1-QueryDelegatorValidatorsResponse) | DelegatorValidators queries all validators info for given delegator address.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| DelegatorValidator | [QueryDelegatorValidatorRequest](#cosmos-staking-v1beta1-QueryDelegatorValidatorRequest) | [QueryDelegatorValidatorResponse](#cosmos-staking-v1beta1-QueryDelegatorValidatorResponse) | DelegatorValidator queries validator info for given delegator validator pair. |
| HistoricalInfo | [QueryHistoricalInfoRequest](#cosmos-staking-v1beta1-QueryHistoricalInfoRequest) | [QueryHistoricalInfoResponse](#cosmos-staking-v1beta1-QueryHistoricalInfoResponse) | HistoricalInfo queries the historical info for given height. |
| Pool | [QueryPoolRequest](#cosmos-staking-v1beta1-QueryPoolRequest) | [QueryPoolResponse](#cosmos-staking-v1beta1-QueryPoolResponse) | Pool queries the pool info. |
| Params | [QueryParamsRequest](#cosmos-staking-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-staking-v1beta1-QueryParamsResponse) | Parameters queries the staking parameters. |

 



<a name="cosmos_staking_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/staking/v1beta1/tx.proto



<a name="cosmos-staking-v1beta1-MsgBeginRedelegate"></a>

### MsgBeginRedelegate
MsgBeginRedelegate defines a SDK message for performing a redelegation
of coins from a delegator and source validator to a destination validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_src_address | [string](#string) |  |  |
| validator_dst_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="cosmos-staking-v1beta1-MsgBeginRedelegateResponse"></a>

### MsgBeginRedelegateResponse
MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| completion_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="cosmos-staking-v1beta1-MsgCancelUnbondingDelegation"></a>

### MsgCancelUnbondingDelegation
MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | amount is always less than or equal to unbonding delegation entry balance |
| creation_height | [int64](#int64) |  | creation_height is the height which the unbonding took place. |






<a name="cosmos-staking-v1beta1-MsgCancelUnbondingDelegationResponse"></a>

### MsgCancelUnbondingDelegationResponse
MsgCancelUnbondingDelegationResponse






<a name="cosmos-staking-v1beta1-MsgCreateValidator"></a>

### MsgCreateValidator
MsgCreateValidator defines a SDK message for creating a new validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [Description](#cosmos-staking-v1beta1-Description) |  |  |
| commission | [CommissionRates](#cosmos-staking-v1beta1-CommissionRates) |  |  |
| min_self_delegation | [string](#string) |  |  |
| delegator_address | [string](#string) |  | **Deprecated.** Deprecated: Use of Delegator Address in MsgCreateValidator is deprecated. The validator address bytes and delegator address bytes refer to the same account while creating validator (defer only in bech32 notation). |
| validator_address | [string](#string) |  |  |
| pubkey | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| value | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="cosmos-staking-v1beta1-MsgCreateValidatorResponse"></a>

### MsgCreateValidatorResponse
MsgCreateValidatorResponse defines the Msg/CreateValidator response type.






<a name="cosmos-staking-v1beta1-MsgDelegate"></a>

### MsgDelegate
MsgDelegate defines a SDK message for performing a delegation of coins
from a delegator to a validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="cosmos-staking-v1beta1-MsgDelegateResponse"></a>

### MsgDelegateResponse
MsgDelegateResponse defines the Msg/Delegate response type.






<a name="cosmos-staking-v1beta1-MsgEditValidator"></a>

### MsgEditValidator
MsgEditValidator defines a SDK message for editing an existing validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [Description](#cosmos-staking-v1beta1-Description) |  |  |
| validator_address | [string](#string) |  |  |
| commission_rate | [string](#string) |  | We pass a reference to the new commission rate and min self delegation as it&#39;s not mandatory to update. If not updated, the deserialized rate will be zero with no way to distinguish if an update was intended. REF: #2373 |
| min_self_delegation | [string](#string) |  |  |






<a name="cosmos-staking-v1beta1-MsgEditValidatorResponse"></a>

### MsgEditValidatorResponse
MsgEditValidatorResponse defines the Msg/EditValidator response type.






<a name="cosmos-staking-v1beta1-MsgUndelegate"></a>

### MsgUndelegate
MsgUndelegate defines a SDK message for performing an undelegation from a
delegate and a validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="cosmos-staking-v1beta1-MsgUndelegateResponse"></a>

### MsgUndelegateResponse
MsgUndelegateResponse defines the Msg/Undelegate response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| completion_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | amount returns the amount of undelegated coins |






<a name="cosmos-staking-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-staking-v1beta1-Params) |  | params defines the x/staking parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-staking-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="cosmos-staking-v1beta1-Msg"></a>

### Msg
Msg defines the staking Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateValidator | [MsgCreateValidator](#cosmos-staking-v1beta1-MsgCreateValidator) | [MsgCreateValidatorResponse](#cosmos-staking-v1beta1-MsgCreateValidatorResponse) | CreateValidator defines a method for creating a new validator. |
| EditValidator | [MsgEditValidator](#cosmos-staking-v1beta1-MsgEditValidator) | [MsgEditValidatorResponse](#cosmos-staking-v1beta1-MsgEditValidatorResponse) | EditValidator defines a method for editing an existing validator. |
| Delegate | [MsgDelegate](#cosmos-staking-v1beta1-MsgDelegate) | [MsgDelegateResponse](#cosmos-staking-v1beta1-MsgDelegateResponse) | Delegate defines a method for performing a delegation of coins from a delegator to a validator. |
| BeginRedelegate | [MsgBeginRedelegate](#cosmos-staking-v1beta1-MsgBeginRedelegate) | [MsgBeginRedelegateResponse](#cosmos-staking-v1beta1-MsgBeginRedelegateResponse) | BeginRedelegate defines a method for performing a redelegation of coins from a delegator and source validator to a destination validator. |
| Undelegate | [MsgUndelegate](#cosmos-staking-v1beta1-MsgUndelegate) | [MsgUndelegateResponse](#cosmos-staking-v1beta1-MsgUndelegateResponse) | Undelegate defines a method for performing an undelegation from a delegate and a validator. |
| CancelUnbondingDelegation | [MsgCancelUnbondingDelegation](#cosmos-staking-v1beta1-MsgCancelUnbondingDelegation) | [MsgCancelUnbondingDelegationResponse](#cosmos-staking-v1beta1-MsgCancelUnbondingDelegationResponse) | CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation and delegate back to previous validator. |
| UpdateParams | [MsgUpdateParams](#cosmos-staking-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-staking-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines an operation for updating the x/staking module parameters. |

 



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

