# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/gov/v1/gov.proto](#cosmos_gov_v1_gov-proto)
    - [Deposit](#cosmos-gov-v1-Deposit)
    - [DepositParams](#cosmos-gov-v1-DepositParams)
    - [Params](#cosmos-gov-v1-Params)
    - [Proposal](#cosmos-gov-v1-Proposal)
    - [TallyParams](#cosmos-gov-v1-TallyParams)
    - [TallyResult](#cosmos-gov-v1-TallyResult)
    - [Vote](#cosmos-gov-v1-Vote)
    - [VotingParams](#cosmos-gov-v1-VotingParams)
    - [WeightedVoteOption](#cosmos-gov-v1-WeightedVoteOption)
  
    - [ProposalStatus](#cosmos-gov-v1-ProposalStatus)
    - [VoteOption](#cosmos-gov-v1-VoteOption)
  
- [cosmos/gov/v1/genesis.proto](#cosmos_gov_v1_genesis-proto)
    - [GenesisState](#cosmos-gov-v1-GenesisState)
  
- [cosmos/gov/v1/query.proto](#cosmos_gov_v1_query-proto)
    - [QueryConstitutionRequest](#cosmos-gov-v1-QueryConstitutionRequest)
    - [QueryConstitutionResponse](#cosmos-gov-v1-QueryConstitutionResponse)
    - [QueryDepositRequest](#cosmos-gov-v1-QueryDepositRequest)
    - [QueryDepositResponse](#cosmos-gov-v1-QueryDepositResponse)
    - [QueryDepositsRequest](#cosmos-gov-v1-QueryDepositsRequest)
    - [QueryDepositsResponse](#cosmos-gov-v1-QueryDepositsResponse)
    - [QueryParamsRequest](#cosmos-gov-v1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-gov-v1-QueryParamsResponse)
    - [QueryProposalRequest](#cosmos-gov-v1-QueryProposalRequest)
    - [QueryProposalResponse](#cosmos-gov-v1-QueryProposalResponse)
    - [QueryProposalsRequest](#cosmos-gov-v1-QueryProposalsRequest)
    - [QueryProposalsResponse](#cosmos-gov-v1-QueryProposalsResponse)
    - [QueryTallyResultRequest](#cosmos-gov-v1-QueryTallyResultRequest)
    - [QueryTallyResultResponse](#cosmos-gov-v1-QueryTallyResultResponse)
    - [QueryVoteRequest](#cosmos-gov-v1-QueryVoteRequest)
    - [QueryVoteResponse](#cosmos-gov-v1-QueryVoteResponse)
    - [QueryVotesRequest](#cosmos-gov-v1-QueryVotesRequest)
    - [QueryVotesResponse](#cosmos-gov-v1-QueryVotesResponse)
  
    - [Query](#cosmos-gov-v1-Query)
  
- [cosmos/gov/v1/tx.proto](#cosmos_gov_v1_tx-proto)
    - [MsgCancelProposal](#cosmos-gov-v1-MsgCancelProposal)
    - [MsgCancelProposalResponse](#cosmos-gov-v1-MsgCancelProposalResponse)
    - [MsgDeposit](#cosmos-gov-v1-MsgDeposit)
    - [MsgDepositResponse](#cosmos-gov-v1-MsgDepositResponse)
    - [MsgExecLegacyContent](#cosmos-gov-v1-MsgExecLegacyContent)
    - [MsgExecLegacyContentResponse](#cosmos-gov-v1-MsgExecLegacyContentResponse)
    - [MsgSubmitProposal](#cosmos-gov-v1-MsgSubmitProposal)
    - [MsgSubmitProposalResponse](#cosmos-gov-v1-MsgSubmitProposalResponse)
    - [MsgUpdateParams](#cosmos-gov-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-gov-v1-MsgUpdateParamsResponse)
    - [MsgVote](#cosmos-gov-v1-MsgVote)
    - [MsgVoteResponse](#cosmos-gov-v1-MsgVoteResponse)
    - [MsgVoteWeighted](#cosmos-gov-v1-MsgVoteWeighted)
    - [MsgVoteWeightedResponse](#cosmos-gov-v1-MsgVoteWeightedResponse)
  
    - [Msg](#cosmos-gov-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_gov_v1_gov-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1/gov.proto



<a name="cosmos-gov-v1-Deposit"></a>

### Deposit
Deposit defines an amount deposited by an account address to an active
proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | amount to be deposited by depositor. |






<a name="cosmos-gov-v1-DepositParams"></a>

### DepositParams
DepositParams defines the params for deposits on governance proposals.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| min_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Minimum deposit for a proposal to enter voting period. |
| max_deposit_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Maximum period for Atom holders to deposit on a proposal. Initial value: 2 months. |






<a name="cosmos-gov-v1-Params"></a>

### Params
Params defines the parameters for the x/gov module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| min_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Minimum deposit for a proposal to enter voting period. |
| max_deposit_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Maximum period for Atom holders to deposit on a proposal. Initial value: 2 months. |
| voting_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Duration of the voting period. |
| quorum | [string](#string) |  | Minimum percentage of total stake needed to vote for a result to be considered valid. |
| threshold | [string](#string) |  | Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. |
| veto_threshold | [string](#string) |  | Minimum value of Veto votes to Total votes ratio for proposal to be vetoed. Default value: 1/3. |
| min_initial_deposit_ratio | [string](#string) |  | The ratio representing the proportion of the deposit value that must be paid at proposal submission. |
| proposal_cancel_ratio | [string](#string) |  | The cancel ratio which will not be returned back to the depositors when a proposal is cancelled. |
| proposal_cancel_dest | [string](#string) |  | The address which will receive (proposal_cancel_ratio * deposit) proposal deposits. If empty, the (proposal_cancel_ratio * deposit) proposal deposits will be burned. |
| expedited_voting_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Duration of the voting period of an expedited proposal. |
| expedited_threshold | [string](#string) |  | Minimum proportion of Yes votes for proposal to pass. Default value: 0.67. |
| expedited_min_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Minimum expedited deposit for a proposal to enter voting period. |
| burn_vote_quorum | [bool](#bool) |  | burn deposits if a proposal does not meet quorum |
| burn_proposal_deposit_prevote | [bool](#bool) |  | burn deposits if the proposal does not enter voting period |
| burn_vote_veto | [bool](#bool) |  | burn deposits if quorum with vote type no_veto is met |
| min_deposit_ratio | [string](#string) |  | The ratio representing the proportion of the deposit value minimum that must be met when making a deposit. Default value: 0.01. Meaning that for a chain with a min_deposit of 100stake, a deposit of 1stake would be required. |






<a name="cosmos-gov-v1-Proposal"></a>

### Proposal
Proposal defines the core field members of a governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | id defines the unique id of the proposal. |
| messages | [google.protobuf.Any](#google-protobuf-Any) | repeated | messages are the arbitrary messages to be executed if the proposal passes. |
| status | [ProposalStatus](#cosmos-gov-v1-ProposalStatus) |  | status defines the proposal status. |
| final_tally_result | [TallyResult](#cosmos-gov-v1-TallyResult) |  | final_tally_result is the final tally result of the proposal. When querying a proposal via gRPC, this field is not populated until the proposal&#39;s voting period has ended. |
| submit_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | submit_time is the time of proposal submission. |
| deposit_end_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | deposit_end_time is the end time for deposition. |
| total_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | total_deposit is the total deposit on the proposal. |
| voting_start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | voting_start_time is the starting time to vote on a proposal. |
| voting_end_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | voting_end_time is the end time of voting on a proposal. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the proposal. the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/gov#proposal-3 |
| title | [string](#string) |  | title is the title of the proposal |
| summary | [string](#string) |  | summary is a short summary of the proposal |
| proposer | [string](#string) |  | proposer is the address of the proposal sumbitter |
| expedited | [bool](#bool) |  | expedited defines if the proposal is expedited |
| failed_reason | [string](#string) |  | failed_reason defines the reason why the proposal failed |






<a name="cosmos-gov-v1-TallyParams"></a>

### TallyParams
TallyParams defines the params for tallying votes on governance proposals.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quorum | [string](#string) |  | Minimum percentage of total stake needed to vote for a result to be considered valid. |
| threshold | [string](#string) |  | Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. |
| veto_threshold | [string](#string) |  | Minimum value of Veto votes to Total votes ratio for proposal to be vetoed. Default value: 1/3. |






<a name="cosmos-gov-v1-TallyResult"></a>

### TallyResult
TallyResult defines a standard tally for a governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| yes_count | [string](#string) |  | yes_count is the number of yes votes on a proposal. |
| abstain_count | [string](#string) |  | abstain_count is the number of abstain votes on a proposal. |
| no_count | [string](#string) |  | no_count is the number of no votes on a proposal. |
| no_with_veto_count | [string](#string) |  | no_with_veto_count is the number of no with veto votes on a proposal. |






<a name="cosmos-gov-v1-Vote"></a>

### Vote
Vote defines a vote on a governance proposal.
A Vote consists of a proposal ID, the voter, and the vote option.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter is the voter address of the proposal. |
| options | [WeightedVoteOption](#cosmos-gov-v1-WeightedVoteOption) | repeated | options is the weighted vote options. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the vote. the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/gov#vote-5 |






<a name="cosmos-gov-v1-VotingParams"></a>

### VotingParams
VotingParams defines the params for voting on governance proposals.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| voting_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Duration of the voting period. |






<a name="cosmos-gov-v1-WeightedVoteOption"></a>

### WeightedVoteOption
WeightedVoteOption defines a unit of vote for vote split.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| option | [VoteOption](#cosmos-gov-v1-VoteOption) |  | option defines the valid vote options, it must not contain duplicate vote options. |
| weight | [string](#string) |  | weight is the vote weight associated with the vote option. |





 


<a name="cosmos-gov-v1-ProposalStatus"></a>

### ProposalStatus
ProposalStatus enumerates the valid statuses of a proposal.

| Name | Number | Description |
| ---- | ------ | ----------- |
| PROPOSAL_STATUS_UNSPECIFIED | 0 | PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. |
| PROPOSAL_STATUS_DEPOSIT_PERIOD | 1 | PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit period. |
| PROPOSAL_STATUS_VOTING_PERIOD | 2 | PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting period. |
| PROPOSAL_STATUS_PASSED | 3 | PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has passed. |
| PROPOSAL_STATUS_REJECTED | 4 | PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has been rejected. |
| PROPOSAL_STATUS_FAILED | 5 | PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has failed. |



<a name="cosmos-gov-v1-VoteOption"></a>

### VoteOption
VoteOption enumerates the valid vote options for a given governance proposal.

| Name | Number | Description |
| ---- | ------ | ----------- |
| VOTE_OPTION_UNSPECIFIED | 0 | VOTE_OPTION_UNSPECIFIED defines a no-op vote option. |
| VOTE_OPTION_YES | 1 | VOTE_OPTION_YES defines a yes vote option. |
| VOTE_OPTION_ABSTAIN | 2 | VOTE_OPTION_ABSTAIN defines an abstain vote option. |
| VOTE_OPTION_NO | 3 | VOTE_OPTION_NO defines a no vote option. |
| VOTE_OPTION_NO_WITH_VETO | 4 | VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. |


 

 

 



<a name="cosmos_gov_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1/genesis.proto



<a name="cosmos-gov-v1-GenesisState"></a>

### GenesisState
GenesisState defines the gov module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| starting_proposal_id | [uint64](#uint64) |  | starting_proposal_id is the ID of the starting proposal. |
| deposits | [Deposit](#cosmos-gov-v1-Deposit) | repeated | deposits defines all the deposits present at genesis. |
| votes | [Vote](#cosmos-gov-v1-Vote) | repeated | votes defines all the votes present at genesis. |
| proposals | [Proposal](#cosmos-gov-v1-Proposal) | repeated | proposals defines all the proposals present at genesis. |
| deposit_params | [DepositParams](#cosmos-gov-v1-DepositParams) |  | **Deprecated.** Deprecated: Prefer to use `params` instead. deposit_params defines all the paramaters of related to deposit. |
| voting_params | [VotingParams](#cosmos-gov-v1-VotingParams) |  | **Deprecated.** Deprecated: Prefer to use `params` instead. voting_params defines all the paramaters of related to voting. |
| tally_params | [TallyParams](#cosmos-gov-v1-TallyParams) |  | **Deprecated.** Deprecated: Prefer to use `params` instead. tally_params defines all the paramaters of related to tally. |
| params | [Params](#cosmos-gov-v1-Params) |  | params defines all the paramaters of x/gov module. |
| constitution | [string](#string) |  | The constitution allows builders to lay a foundation and define purpose. This is an immutable string set in genesis. There are no amendments, to go outside of scope, just fork. constitution is an immutable string in genesis for a chain builder to lay out their vision, ideas and ideals. |





 

 

 

 



<a name="cosmos_gov_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1/query.proto



<a name="cosmos-gov-v1-QueryConstitutionRequest"></a>

### QueryConstitutionRequest
QueryConstitutionRequest is the request type for the Query/Constitution RPC method






<a name="cosmos-gov-v1-QueryConstitutionResponse"></a>

### QueryConstitutionResponse
QueryConstitutionResponse is the response type for the Query/Constitution RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| constitution | [string](#string) |  |  |






<a name="cosmos-gov-v1-QueryDepositRequest"></a>

### QueryDepositRequest
QueryDepositRequest is the request type for the Query/Deposit RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |






<a name="cosmos-gov-v1-QueryDepositResponse"></a>

### QueryDepositResponse
QueryDepositResponse is the response type for the Query/Deposit RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| deposit | [Deposit](#cosmos-gov-v1-Deposit) |  | deposit defines the requested deposit. |






<a name="cosmos-gov-v1-QueryDepositsRequest"></a>

### QueryDepositsRequest
QueryDepositsRequest is the request type for the Query/Deposits RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-gov-v1-QueryDepositsResponse"></a>

### QueryDepositsResponse
QueryDepositsResponse is the response type for the Query/Deposits RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| deposits | [Deposit](#cosmos-gov-v1-Deposit) | repeated | deposits defines the requested deposits. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-gov-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params_type | [string](#string) |  | params_type defines which parameters to query for, can be one of &#34;voting&#34;, &#34;tallying&#34; or &#34;deposit&#34;. |






<a name="cosmos-gov-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| voting_params | [VotingParams](#cosmos-gov-v1-VotingParams) |  | **Deprecated.** Deprecated: Prefer to use `params` instead. voting_params defines the parameters related to voting. |
| deposit_params | [DepositParams](#cosmos-gov-v1-DepositParams) |  | **Deprecated.** Deprecated: Prefer to use `params` instead. deposit_params defines the parameters related to deposit. |
| tally_params | [TallyParams](#cosmos-gov-v1-TallyParams) |  | **Deprecated.** Deprecated: Prefer to use `params` instead. tally_params defines the parameters related to tally. |
| params | [Params](#cosmos-gov-v1-Params) |  | params defines all the paramaters of x/gov module. |






<a name="cosmos-gov-v1-QueryProposalRequest"></a>

### QueryProposalRequest
QueryProposalRequest is the request type for the Query/Proposal RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |






<a name="cosmos-gov-v1-QueryProposalResponse"></a>

### QueryProposalResponse
QueryProposalResponse is the response type for the Query/Proposal RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal | [Proposal](#cosmos-gov-v1-Proposal) |  | proposal is the requested governance proposal. |






<a name="cosmos-gov-v1-QueryProposalsRequest"></a>

### QueryProposalsRequest
QueryProposalsRequest is the request type for the Query/Proposals RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_status | [ProposalStatus](#cosmos-gov-v1-ProposalStatus) |  | proposal_status defines the status of the proposals. |
| voter | [string](#string) |  | voter defines the voter address for the proposals. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-gov-v1-QueryProposalsResponse"></a>

### QueryProposalsResponse
QueryProposalsResponse is the response type for the Query/Proposals RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposals | [Proposal](#cosmos-gov-v1-Proposal) | repeated | proposals defines all the requested governance proposals. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-gov-v1-QueryTallyResultRequest"></a>

### QueryTallyResultRequest
QueryTallyResultRequest is the request type for the Query/Tally RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |






<a name="cosmos-gov-v1-QueryTallyResultResponse"></a>

### QueryTallyResultResponse
QueryTallyResultResponse is the response type for the Query/Tally RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tally | [TallyResult](#cosmos-gov-v1-TallyResult) |  | tally defines the requested tally. |






<a name="cosmos-gov-v1-QueryVoteRequest"></a>

### QueryVoteRequest
QueryVoteRequest is the request type for the Query/Vote RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter defines the voter address for the proposals. |






<a name="cosmos-gov-v1-QueryVoteResponse"></a>

### QueryVoteResponse
QueryVoteResponse is the response type for the Query/Vote RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vote | [Vote](#cosmos-gov-v1-Vote) |  | vote defines the queried vote. |






<a name="cosmos-gov-v1-QueryVotesRequest"></a>

### QueryVotesRequest
QueryVotesRequest is the request type for the Query/Votes RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-gov-v1-QueryVotesResponse"></a>

### QueryVotesResponse
QueryVotesResponse is the response type for the Query/Votes RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| votes | [Vote](#cosmos-gov-v1-Vote) | repeated | votes defines the queried votes. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |





 

 

 


<a name="cosmos-gov-v1-Query"></a>

### Query
Query defines the gRPC querier service for gov module

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Constitution | [QueryConstitutionRequest](#cosmos-gov-v1-QueryConstitutionRequest) | [QueryConstitutionResponse](#cosmos-gov-v1-QueryConstitutionResponse) | Constitution queries the chain&#39;s constitution. |
| Proposal | [QueryProposalRequest](#cosmos-gov-v1-QueryProposalRequest) | [QueryProposalResponse](#cosmos-gov-v1-QueryProposalResponse) | Proposal queries proposal details based on ProposalID. |
| Proposals | [QueryProposalsRequest](#cosmos-gov-v1-QueryProposalsRequest) | [QueryProposalsResponse](#cosmos-gov-v1-QueryProposalsResponse) | Proposals queries all proposals based on given status. |
| Vote | [QueryVoteRequest](#cosmos-gov-v1-QueryVoteRequest) | [QueryVoteResponse](#cosmos-gov-v1-QueryVoteResponse) | Vote queries voted information based on proposalID, voterAddr. |
| Votes | [QueryVotesRequest](#cosmos-gov-v1-QueryVotesRequest) | [QueryVotesResponse](#cosmos-gov-v1-QueryVotesResponse) | Votes queries votes of a given proposal. |
| Params | [QueryParamsRequest](#cosmos-gov-v1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-gov-v1-QueryParamsResponse) | Params queries all parameters of the gov module. |
| Deposit | [QueryDepositRequest](#cosmos-gov-v1-QueryDepositRequest) | [QueryDepositResponse](#cosmos-gov-v1-QueryDepositResponse) | Deposit queries single deposit information based on proposalID, depositAddr. |
| Deposits | [QueryDepositsRequest](#cosmos-gov-v1-QueryDepositsRequest) | [QueryDepositsResponse](#cosmos-gov-v1-QueryDepositsResponse) | Deposits queries all deposits of a single proposal. |
| TallyResult | [QueryTallyResultRequest](#cosmos-gov-v1-QueryTallyResultRequest) | [QueryTallyResultResponse](#cosmos-gov-v1-QueryTallyResultResponse) | TallyResult queries the tally of a proposal vote. |

 



<a name="cosmos_gov_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1/tx.proto



<a name="cosmos-gov-v1-MsgCancelProposal"></a>

### MsgCancelProposal
MsgCancelProposal is the Msg/CancelProposal request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| proposer | [string](#string) |  | proposer is the account address of the proposer. |






<a name="cosmos-gov-v1-MsgCancelProposalResponse"></a>

### MsgCancelProposalResponse
MsgCancelProposalResponse defines the response structure for executing a
MsgCancelProposal message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| canceled_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | canceled_time is the time when proposal is canceled. |
| canceled_height | [uint64](#uint64) |  | canceled_height defines the block height at which the proposal is canceled. |






<a name="cosmos-gov-v1-MsgDeposit"></a>

### MsgDeposit
MsgDeposit defines a message to submit a deposit to an existing proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | amount to be deposited by depositor. |






<a name="cosmos-gov-v1-MsgDepositResponse"></a>

### MsgDepositResponse
MsgDepositResponse defines the Msg/Deposit response type.






<a name="cosmos-gov-v1-MsgExecLegacyContent"></a>

### MsgExecLegacyContent
MsgExecLegacyContent is used to wrap the legacy content field into a message.
This ensures backwards compatibility with v1beta1.MsgSubmitProposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [google.protobuf.Any](#google-protobuf-Any) |  | content is the proposal&#39;s content. |
| authority | [string](#string) |  | authority must be the gov module address. |






<a name="cosmos-gov-v1-MsgExecLegacyContentResponse"></a>

### MsgExecLegacyContentResponse
MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type.






<a name="cosmos-gov-v1-MsgSubmitProposal"></a>

### MsgSubmitProposal
MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
proposal Content.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messages | [google.protobuf.Any](#google-protobuf-Any) | repeated | messages are the arbitrary messages to be executed if proposal passes. |
| initial_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | initial_deposit is the deposit value that must be paid at proposal submission. |
| proposer | [string](#string) |  | proposer is the account address of the proposer. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the proposal. |
| title | [string](#string) |  | title is the title of the proposal. |
| summary | [string](#string) |  | summary is the summary of the proposal |
| expedited | [bool](#bool) |  | expedited defines if the proposal is expedited or not |






<a name="cosmos-gov-v1-MsgSubmitProposalResponse"></a>

### MsgSubmitProposalResponse
MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |






<a name="cosmos-gov-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-gov-v1-Params) |  | params defines the x/gov parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-gov-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.






<a name="cosmos-gov-v1-MsgVote"></a>

### MsgVote
MsgVote defines a message to cast a vote.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter is the voter address for the proposal. |
| option | [VoteOption](#cosmos-gov-v1-VoteOption) |  | option defines the vote option. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the Vote. |






<a name="cosmos-gov-v1-MsgVoteResponse"></a>

### MsgVoteResponse
MsgVoteResponse defines the Msg/Vote response type.






<a name="cosmos-gov-v1-MsgVoteWeighted"></a>

### MsgVoteWeighted
MsgVoteWeighted defines a message to cast a vote.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter is the voter address for the proposal. |
| options | [WeightedVoteOption](#cosmos-gov-v1-WeightedVoteOption) | repeated | options defines the weighted vote options. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the VoteWeighted. |






<a name="cosmos-gov-v1-MsgVoteWeightedResponse"></a>

### MsgVoteWeightedResponse
MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.





 

 

 


<a name="cosmos-gov-v1-Msg"></a>

### Msg
Msg defines the gov Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SubmitProposal | [MsgSubmitProposal](#cosmos-gov-v1-MsgSubmitProposal) | [MsgSubmitProposalResponse](#cosmos-gov-v1-MsgSubmitProposalResponse) | SubmitProposal defines a method to create new proposal given the messages. |
| ExecLegacyContent | [MsgExecLegacyContent](#cosmos-gov-v1-MsgExecLegacyContent) | [MsgExecLegacyContentResponse](#cosmos-gov-v1-MsgExecLegacyContentResponse) | ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal to execute a legacy content-based proposal. |
| Vote | [MsgVote](#cosmos-gov-v1-MsgVote) | [MsgVoteResponse](#cosmos-gov-v1-MsgVoteResponse) | Vote defines a method to add a vote on a specific proposal. |
| VoteWeighted | [MsgVoteWeighted](#cosmos-gov-v1-MsgVoteWeighted) | [MsgVoteWeightedResponse](#cosmos-gov-v1-MsgVoteWeightedResponse) | VoteWeighted defines a method to add a weighted vote on a specific proposal. |
| Deposit | [MsgDeposit](#cosmos-gov-v1-MsgDeposit) | [MsgDepositResponse](#cosmos-gov-v1-MsgDepositResponse) | Deposit defines a method to add deposit on a specific proposal. |
| UpdateParams | [MsgUpdateParams](#cosmos-gov-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-gov-v1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/gov module parameters. The authority is defined in the keeper. |
| CancelProposal | [MsgCancelProposal](#cosmos-gov-v1-MsgCancelProposal) | [MsgCancelProposalResponse](#cosmos-gov-v1-MsgCancelProposalResponse) | CancelProposal defines a method to cancel governance proposal |

 



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

