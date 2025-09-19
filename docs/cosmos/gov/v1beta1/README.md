# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/gov/v1beta1/gov.proto](#cosmos_gov_v1beta1_gov-proto)
    - [Deposit](#cosmos-gov-v1beta1-Deposit)
    - [DepositParams](#cosmos-gov-v1beta1-DepositParams)
    - [Proposal](#cosmos-gov-v1beta1-Proposal)
    - [TallyParams](#cosmos-gov-v1beta1-TallyParams)
    - [TallyResult](#cosmos-gov-v1beta1-TallyResult)
    - [TextProposal](#cosmos-gov-v1beta1-TextProposal)
    - [Vote](#cosmos-gov-v1beta1-Vote)
    - [VotingParams](#cosmos-gov-v1beta1-VotingParams)
    - [WeightedVoteOption](#cosmos-gov-v1beta1-WeightedVoteOption)
  
    - [ProposalStatus](#cosmos-gov-v1beta1-ProposalStatus)
    - [VoteOption](#cosmos-gov-v1beta1-VoteOption)
  
- [cosmos/gov/v1beta1/genesis.proto](#cosmos_gov_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-gov-v1beta1-GenesisState)
  
- [cosmos/gov/v1beta1/query.proto](#cosmos_gov_v1beta1_query-proto)
    - [QueryDepositRequest](#cosmos-gov-v1beta1-QueryDepositRequest)
    - [QueryDepositResponse](#cosmos-gov-v1beta1-QueryDepositResponse)
    - [QueryDepositsRequest](#cosmos-gov-v1beta1-QueryDepositsRequest)
    - [QueryDepositsResponse](#cosmos-gov-v1beta1-QueryDepositsResponse)
    - [QueryParamsRequest](#cosmos-gov-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-gov-v1beta1-QueryParamsResponse)
    - [QueryProposalRequest](#cosmos-gov-v1beta1-QueryProposalRequest)
    - [QueryProposalResponse](#cosmos-gov-v1beta1-QueryProposalResponse)
    - [QueryProposalsRequest](#cosmos-gov-v1beta1-QueryProposalsRequest)
    - [QueryProposalsResponse](#cosmos-gov-v1beta1-QueryProposalsResponse)
    - [QueryTallyResultRequest](#cosmos-gov-v1beta1-QueryTallyResultRequest)
    - [QueryTallyResultResponse](#cosmos-gov-v1beta1-QueryTallyResultResponse)
    - [QueryVoteRequest](#cosmos-gov-v1beta1-QueryVoteRequest)
    - [QueryVoteResponse](#cosmos-gov-v1beta1-QueryVoteResponse)
    - [QueryVotesRequest](#cosmos-gov-v1beta1-QueryVotesRequest)
    - [QueryVotesResponse](#cosmos-gov-v1beta1-QueryVotesResponse)
  
    - [Query](#cosmos-gov-v1beta1-Query)
  
- [cosmos/gov/v1beta1/tx.proto](#cosmos_gov_v1beta1_tx-proto)
    - [MsgDeposit](#cosmos-gov-v1beta1-MsgDeposit)
    - [MsgDepositResponse](#cosmos-gov-v1beta1-MsgDepositResponse)
    - [MsgSubmitProposal](#cosmos-gov-v1beta1-MsgSubmitProposal)
    - [MsgSubmitProposalResponse](#cosmos-gov-v1beta1-MsgSubmitProposalResponse)
    - [MsgVote](#cosmos-gov-v1beta1-MsgVote)
    - [MsgVoteResponse](#cosmos-gov-v1beta1-MsgVoteResponse)
    - [MsgVoteWeighted](#cosmos-gov-v1beta1-MsgVoteWeighted)
    - [MsgVoteWeightedResponse](#cosmos-gov-v1beta1-MsgVoteWeightedResponse)
  
    - [Msg](#cosmos-gov-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_gov_v1beta1_gov-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1beta1/gov.proto



<a name="cosmos-gov-v1beta1-Deposit"></a>

### Deposit
Deposit defines an amount deposited by an account address to an active
proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | amount to be deposited by depositor. |






<a name="cosmos-gov-v1beta1-DepositParams"></a>

### DepositParams
DepositParams defines the params for deposits on governance proposals.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| min_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Minimum deposit for a proposal to enter voting period. |
| max_deposit_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Maximum period for Atom holders to deposit on a proposal. Initial value: 2 months. |






<a name="cosmos-gov-v1beta1-Proposal"></a>

### Proposal
Proposal defines the core field members of a governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| content | [google.protobuf.Any](#google-protobuf-Any) |  | content is the proposal&#39;s content. |
| status | [ProposalStatus](#cosmos-gov-v1beta1-ProposalStatus) |  | status defines the proposal status. |
| final_tally_result | [TallyResult](#cosmos-gov-v1beta1-TallyResult) |  | final_tally_result is the final tally result of the proposal. When querying a proposal via gRPC, this field is not populated until the proposal&#39;s voting period has ended. |
| submit_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | submit_time is the time of proposal submission. |
| deposit_end_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | deposit_end_time is the end time for deposition. |
| total_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | total_deposit is the total deposit on the proposal. |
| voting_start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | voting_start_time is the starting time to vote on a proposal. |
| voting_end_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | voting_end_time is the end time of voting on a proposal. |






<a name="cosmos-gov-v1beta1-TallyParams"></a>

### TallyParams
TallyParams defines the params for tallying votes on governance proposals.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quorum | [bytes](#bytes) |  | Minimum percentage of total stake needed to vote for a result to be considered valid. |
| threshold | [bytes](#bytes) |  | Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. |
| veto_threshold | [bytes](#bytes) |  | Minimum value of Veto votes to Total votes ratio for proposal to be vetoed. Default value: 1/3. |






<a name="cosmos-gov-v1beta1-TallyResult"></a>

### TallyResult
TallyResult defines a standard tally for a governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| yes | [string](#string) |  | yes is the number of yes votes on a proposal. |
| abstain | [string](#string) |  | abstain is the number of abstain votes on a proposal. |
| no | [string](#string) |  | no is the number of no votes on a proposal. |
| no_with_veto | [string](#string) |  | no_with_veto is the number of no with veto votes on a proposal. |






<a name="cosmos-gov-v1beta1-TextProposal"></a>

### TextProposal
TextProposal defines a standard text proposal whose changes need to be
manually updated in case of approval.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | title of the proposal. |
| description | [string](#string) |  | description associated with the proposal. |






<a name="cosmos-gov-v1beta1-Vote"></a>

### Vote
Vote defines a vote on a governance proposal.
A Vote consists of a proposal ID, the voter, and the vote option.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter is the voter address of the proposal. |
| option | [VoteOption](#cosmos-gov-v1beta1-VoteOption) |  | **Deprecated.** Deprecated: Prefer to use `options` instead. This field is set in queries if and only if `len(options) == 1` and that option has weight 1. In all other cases, this field will default to VOTE_OPTION_UNSPECIFIED. |
| options | [WeightedVoteOption](#cosmos-gov-v1beta1-WeightedVoteOption) | repeated | options is the weighted vote options. |






<a name="cosmos-gov-v1beta1-VotingParams"></a>

### VotingParams
VotingParams defines the params for voting on governance proposals.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| voting_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Duration of the voting period. |






<a name="cosmos-gov-v1beta1-WeightedVoteOption"></a>

### WeightedVoteOption
WeightedVoteOption defines a unit of vote for vote split.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| option | [VoteOption](#cosmos-gov-v1beta1-VoteOption) |  | option defines the valid vote options, it must not contain duplicate vote options. |
| weight | [string](#string) |  | weight is the vote weight associated with the vote option. |





 


<a name="cosmos-gov-v1beta1-ProposalStatus"></a>

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



<a name="cosmos-gov-v1beta1-VoteOption"></a>

### VoteOption
VoteOption enumerates the valid vote options for a given governance proposal.

| Name | Number | Description |
| ---- | ------ | ----------- |
| VOTE_OPTION_UNSPECIFIED | 0 | VOTE_OPTION_UNSPECIFIED defines a no-op vote option. |
| VOTE_OPTION_YES | 1 | VOTE_OPTION_YES defines a yes vote option. |
| VOTE_OPTION_ABSTAIN | 2 | VOTE_OPTION_ABSTAIN defines an abstain vote option. |
| VOTE_OPTION_NO | 3 | VOTE_OPTION_NO defines a no vote option. |
| VOTE_OPTION_NO_WITH_VETO | 4 | VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. |


 

 

 



<a name="cosmos_gov_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1beta1/genesis.proto



<a name="cosmos-gov-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the gov module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| starting_proposal_id | [uint64](#uint64) |  | starting_proposal_id is the ID of the starting proposal. |
| deposits | [Deposit](#cosmos-gov-v1beta1-Deposit) | repeated | deposits defines all the deposits present at genesis. |
| votes | [Vote](#cosmos-gov-v1beta1-Vote) | repeated | votes defines all the votes present at genesis. |
| proposals | [Proposal](#cosmos-gov-v1beta1-Proposal) | repeated | proposals defines all the proposals present at genesis. |
| deposit_params | [DepositParams](#cosmos-gov-v1beta1-DepositParams) |  | deposit_params defines all the parameters related to deposit. |
| voting_params | [VotingParams](#cosmos-gov-v1beta1-VotingParams) |  | voting_params defines all the parameters related to voting. |
| tally_params | [TallyParams](#cosmos-gov-v1beta1-TallyParams) |  | tally_params defines all the parameters related to tally. |





 

 

 

 



<a name="cosmos_gov_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1beta1/query.proto



<a name="cosmos-gov-v1beta1-QueryDepositRequest"></a>

### QueryDepositRequest
QueryDepositRequest is the request type for the Query/Deposit RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |






<a name="cosmos-gov-v1beta1-QueryDepositResponse"></a>

### QueryDepositResponse
QueryDepositResponse is the response type for the Query/Deposit RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| deposit | [Deposit](#cosmos-gov-v1beta1-Deposit) |  | deposit defines the requested deposit. |






<a name="cosmos-gov-v1beta1-QueryDepositsRequest"></a>

### QueryDepositsRequest
QueryDepositsRequest is the request type for the Query/Deposits RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-gov-v1beta1-QueryDepositsResponse"></a>

### QueryDepositsResponse
QueryDepositsResponse is the response type for the Query/Deposits RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| deposits | [Deposit](#cosmos-gov-v1beta1-Deposit) | repeated | deposits defines the requested deposits. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-gov-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params_type | [string](#string) |  | params_type defines which parameters to query for, can be one of &#34;voting&#34;, &#34;tallying&#34; or &#34;deposit&#34;. |






<a name="cosmos-gov-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| voting_params | [VotingParams](#cosmos-gov-v1beta1-VotingParams) |  | voting_params defines the parameters related to voting. |
| deposit_params | [DepositParams](#cosmos-gov-v1beta1-DepositParams) |  | deposit_params defines the parameters related to deposit. |
| tally_params | [TallyParams](#cosmos-gov-v1beta1-TallyParams) |  | tally_params defines the parameters related to tally. |






<a name="cosmos-gov-v1beta1-QueryProposalRequest"></a>

### QueryProposalRequest
QueryProposalRequest is the request type for the Query/Proposal RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |






<a name="cosmos-gov-v1beta1-QueryProposalResponse"></a>

### QueryProposalResponse
QueryProposalResponse is the response type for the Query/Proposal RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal | [Proposal](#cosmos-gov-v1beta1-Proposal) |  |  |






<a name="cosmos-gov-v1beta1-QueryProposalsRequest"></a>

### QueryProposalsRequest
QueryProposalsRequest is the request type for the Query/Proposals RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_status | [ProposalStatus](#cosmos-gov-v1beta1-ProposalStatus) |  | proposal_status defines the status of the proposals. |
| voter | [string](#string) |  | voter defines the voter address for the proposals. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-gov-v1beta1-QueryProposalsResponse"></a>

### QueryProposalsResponse
QueryProposalsResponse is the response type for the Query/Proposals RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposals | [Proposal](#cosmos-gov-v1beta1-Proposal) | repeated | proposals defines all the requested governance proposals. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-gov-v1beta1-QueryTallyResultRequest"></a>

### QueryTallyResultRequest
QueryTallyResultRequest is the request type for the Query/Tally RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |






<a name="cosmos-gov-v1beta1-QueryTallyResultResponse"></a>

### QueryTallyResultResponse
QueryTallyResultResponse is the response type for the Query/Tally RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tally | [TallyResult](#cosmos-gov-v1beta1-TallyResult) |  | tally defines the requested tally. |






<a name="cosmos-gov-v1beta1-QueryVoteRequest"></a>

### QueryVoteRequest
QueryVoteRequest is the request type for the Query/Vote RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter defines the voter address for the proposals. |






<a name="cosmos-gov-v1beta1-QueryVoteResponse"></a>

### QueryVoteResponse
QueryVoteResponse is the response type for the Query/Vote RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vote | [Vote](#cosmos-gov-v1beta1-Vote) |  | vote defines the queried vote. |






<a name="cosmos-gov-v1beta1-QueryVotesRequest"></a>

### QueryVotesRequest
QueryVotesRequest is the request type for the Query/Votes RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-gov-v1beta1-QueryVotesResponse"></a>

### QueryVotesResponse
QueryVotesResponse is the response type for the Query/Votes RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| votes | [Vote](#cosmos-gov-v1beta1-Vote) | repeated | votes defines the queried votes. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |





 

 

 


<a name="cosmos-gov-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service for gov module

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Proposal | [QueryProposalRequest](#cosmos-gov-v1beta1-QueryProposalRequest) | [QueryProposalResponse](#cosmos-gov-v1beta1-QueryProposalResponse) | Proposal queries proposal details based on ProposalID. |
| Proposals | [QueryProposalsRequest](#cosmos-gov-v1beta1-QueryProposalsRequest) | [QueryProposalsResponse](#cosmos-gov-v1beta1-QueryProposalsResponse) | Proposals queries all proposals based on given status. |
| Vote | [QueryVoteRequest](#cosmos-gov-v1beta1-QueryVoteRequest) | [QueryVoteResponse](#cosmos-gov-v1beta1-QueryVoteResponse) | Vote queries voted information based on proposalID, voterAddr. |
| Votes | [QueryVotesRequest](#cosmos-gov-v1beta1-QueryVotesRequest) | [QueryVotesResponse](#cosmos-gov-v1beta1-QueryVotesResponse) | Votes queries votes of a given proposal. |
| Params | [QueryParamsRequest](#cosmos-gov-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-gov-v1beta1-QueryParamsResponse) | Params queries all parameters of the gov module. |
| Deposit | [QueryDepositRequest](#cosmos-gov-v1beta1-QueryDepositRequest) | [QueryDepositResponse](#cosmos-gov-v1beta1-QueryDepositResponse) | Deposit queries single deposit information based on proposalID, depositor address. |
| Deposits | [QueryDepositsRequest](#cosmos-gov-v1beta1-QueryDepositsRequest) | [QueryDepositsResponse](#cosmos-gov-v1beta1-QueryDepositsResponse) | Deposits queries all deposits of a single proposal. |
| TallyResult | [QueryTallyResultRequest](#cosmos-gov-v1beta1-QueryTallyResultRequest) | [QueryTallyResultResponse](#cosmos-gov-v1beta1-QueryTallyResultResponse) | TallyResult queries the tally of a proposal vote. |

 



<a name="cosmos_gov_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1beta1/tx.proto



<a name="cosmos-gov-v1beta1-MsgDeposit"></a>

### MsgDeposit
MsgDeposit defines a message to submit a deposit to an existing proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | amount to be deposited by depositor. |






<a name="cosmos-gov-v1beta1-MsgDepositResponse"></a>

### MsgDepositResponse
MsgDepositResponse defines the Msg/Deposit response type.






<a name="cosmos-gov-v1beta1-MsgSubmitProposal"></a>

### MsgSubmitProposal
MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
proposal Content.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [google.protobuf.Any](#google-protobuf-Any) |  | content is the proposal&#39;s content. |
| initial_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | initial_deposit is the deposit value that must be paid at proposal submission. |
| proposer | [string](#string) |  | proposer is the account address of the proposer. |






<a name="cosmos-gov-v1beta1-MsgSubmitProposalResponse"></a>

### MsgSubmitProposalResponse
MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |






<a name="cosmos-gov-v1beta1-MsgVote"></a>

### MsgVote
MsgVote defines a message to cast a vote.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter is the voter address for the proposal. |
| option | [VoteOption](#cosmos-gov-v1beta1-VoteOption) |  | option defines the vote option. |






<a name="cosmos-gov-v1beta1-MsgVoteResponse"></a>

### MsgVoteResponse
MsgVoteResponse defines the Msg/Vote response type.






<a name="cosmos-gov-v1beta1-MsgVoteWeighted"></a>

### MsgVoteWeighted
MsgVoteWeighted defines a message to cast a vote.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter is the voter address for the proposal. |
| options | [WeightedVoteOption](#cosmos-gov-v1beta1-WeightedVoteOption) | repeated | options defines the weighted vote options. |






<a name="cosmos-gov-v1beta1-MsgVoteWeightedResponse"></a>

### MsgVoteWeightedResponse
MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.





 

 

 


<a name="cosmos-gov-v1beta1-Msg"></a>

### Msg
Msg defines the gov Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SubmitProposal | [MsgSubmitProposal](#cosmos-gov-v1beta1-MsgSubmitProposal) | [MsgSubmitProposalResponse](#cosmos-gov-v1beta1-MsgSubmitProposalResponse) | SubmitProposal defines a method to create new proposal given a content. |
| Vote | [MsgVote](#cosmos-gov-v1beta1-MsgVote) | [MsgVoteResponse](#cosmos-gov-v1beta1-MsgVoteResponse) | Vote defines a method to add a vote on a specific proposal. |
| VoteWeighted | [MsgVoteWeighted](#cosmos-gov-v1beta1-MsgVoteWeighted) | [MsgVoteWeightedResponse](#cosmos-gov-v1beta1-MsgVoteWeightedResponse) | VoteWeighted defines a method to add a weighted vote on a specific proposal. |
| Deposit | [MsgDeposit](#cosmos-gov-v1beta1-MsgDeposit) | [MsgDepositResponse](#cosmos-gov-v1beta1-MsgDepositResponse) | Deposit defines a method to add deposit on a specific proposal. |

 



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

