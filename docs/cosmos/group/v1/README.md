# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/group/v1/types.proto](#cosmos_group_v1_types-proto)
    - [DecisionPolicyWindows](#cosmos-group-v1-DecisionPolicyWindows)
    - [GroupInfo](#cosmos-group-v1-GroupInfo)
    - [GroupMember](#cosmos-group-v1-GroupMember)
    - [GroupPolicyInfo](#cosmos-group-v1-GroupPolicyInfo)
    - [Member](#cosmos-group-v1-Member)
    - [MemberRequest](#cosmos-group-v1-MemberRequest)
    - [PercentageDecisionPolicy](#cosmos-group-v1-PercentageDecisionPolicy)
    - [Proposal](#cosmos-group-v1-Proposal)
    - [TallyResult](#cosmos-group-v1-TallyResult)
    - [ThresholdDecisionPolicy](#cosmos-group-v1-ThresholdDecisionPolicy)
    - [Vote](#cosmos-group-v1-Vote)
  
    - [ProposalExecutorResult](#cosmos-group-v1-ProposalExecutorResult)
    - [ProposalStatus](#cosmos-group-v1-ProposalStatus)
    - [VoteOption](#cosmos-group-v1-VoteOption)
  
- [cosmos/group/v1/events.proto](#cosmos_group_v1_events-proto)
    - [EventCreateGroup](#cosmos-group-v1-EventCreateGroup)
    - [EventCreateGroupPolicy](#cosmos-group-v1-EventCreateGroupPolicy)
    - [EventExec](#cosmos-group-v1-EventExec)
    - [EventLeaveGroup](#cosmos-group-v1-EventLeaveGroup)
    - [EventProposalPruned](#cosmos-group-v1-EventProposalPruned)
    - [EventSubmitProposal](#cosmos-group-v1-EventSubmitProposal)
    - [EventTallyError](#cosmos-group-v1-EventTallyError)
    - [EventUpdateGroup](#cosmos-group-v1-EventUpdateGroup)
    - [EventUpdateGroupPolicy](#cosmos-group-v1-EventUpdateGroupPolicy)
    - [EventVote](#cosmos-group-v1-EventVote)
    - [EventWithdrawProposal](#cosmos-group-v1-EventWithdrawProposal)
  
- [cosmos/group/v1/genesis.proto](#cosmos_group_v1_genesis-proto)
    - [GenesisState](#cosmos-group-v1-GenesisState)
  
- [cosmos/group/v1/query.proto](#cosmos_group_v1_query-proto)
    - [QueryGroupInfoRequest](#cosmos-group-v1-QueryGroupInfoRequest)
    - [QueryGroupInfoResponse](#cosmos-group-v1-QueryGroupInfoResponse)
    - [QueryGroupMembersRequest](#cosmos-group-v1-QueryGroupMembersRequest)
    - [QueryGroupMembersResponse](#cosmos-group-v1-QueryGroupMembersResponse)
    - [QueryGroupPoliciesByAdminRequest](#cosmos-group-v1-QueryGroupPoliciesByAdminRequest)
    - [QueryGroupPoliciesByAdminResponse](#cosmos-group-v1-QueryGroupPoliciesByAdminResponse)
    - [QueryGroupPoliciesByGroupRequest](#cosmos-group-v1-QueryGroupPoliciesByGroupRequest)
    - [QueryGroupPoliciesByGroupResponse](#cosmos-group-v1-QueryGroupPoliciesByGroupResponse)
    - [QueryGroupPolicyInfoRequest](#cosmos-group-v1-QueryGroupPolicyInfoRequest)
    - [QueryGroupPolicyInfoResponse](#cosmos-group-v1-QueryGroupPolicyInfoResponse)
    - [QueryGroupsByAdminRequest](#cosmos-group-v1-QueryGroupsByAdminRequest)
    - [QueryGroupsByAdminResponse](#cosmos-group-v1-QueryGroupsByAdminResponse)
    - [QueryGroupsByMemberRequest](#cosmos-group-v1-QueryGroupsByMemberRequest)
    - [QueryGroupsByMemberResponse](#cosmos-group-v1-QueryGroupsByMemberResponse)
    - [QueryGroupsRequest](#cosmos-group-v1-QueryGroupsRequest)
    - [QueryGroupsResponse](#cosmos-group-v1-QueryGroupsResponse)
    - [QueryProposalRequest](#cosmos-group-v1-QueryProposalRequest)
    - [QueryProposalResponse](#cosmos-group-v1-QueryProposalResponse)
    - [QueryProposalsByGroupPolicyRequest](#cosmos-group-v1-QueryProposalsByGroupPolicyRequest)
    - [QueryProposalsByGroupPolicyResponse](#cosmos-group-v1-QueryProposalsByGroupPolicyResponse)
    - [QueryTallyResultRequest](#cosmos-group-v1-QueryTallyResultRequest)
    - [QueryTallyResultResponse](#cosmos-group-v1-QueryTallyResultResponse)
    - [QueryVoteByProposalVoterRequest](#cosmos-group-v1-QueryVoteByProposalVoterRequest)
    - [QueryVoteByProposalVoterResponse](#cosmos-group-v1-QueryVoteByProposalVoterResponse)
    - [QueryVotesByProposalRequest](#cosmos-group-v1-QueryVotesByProposalRequest)
    - [QueryVotesByProposalResponse](#cosmos-group-v1-QueryVotesByProposalResponse)
    - [QueryVotesByVoterRequest](#cosmos-group-v1-QueryVotesByVoterRequest)
    - [QueryVotesByVoterResponse](#cosmos-group-v1-QueryVotesByVoterResponse)
  
    - [Query](#cosmos-group-v1-Query)
  
- [cosmos/group/v1/tx.proto](#cosmos_group_v1_tx-proto)
    - [MsgCreateGroup](#cosmos-group-v1-MsgCreateGroup)
    - [MsgCreateGroupPolicy](#cosmos-group-v1-MsgCreateGroupPolicy)
    - [MsgCreateGroupPolicyResponse](#cosmos-group-v1-MsgCreateGroupPolicyResponse)
    - [MsgCreateGroupResponse](#cosmos-group-v1-MsgCreateGroupResponse)
    - [MsgCreateGroupWithPolicy](#cosmos-group-v1-MsgCreateGroupWithPolicy)
    - [MsgCreateGroupWithPolicyResponse](#cosmos-group-v1-MsgCreateGroupWithPolicyResponse)
    - [MsgExec](#cosmos-group-v1-MsgExec)
    - [MsgExecResponse](#cosmos-group-v1-MsgExecResponse)
    - [MsgLeaveGroup](#cosmos-group-v1-MsgLeaveGroup)
    - [MsgLeaveGroupResponse](#cosmos-group-v1-MsgLeaveGroupResponse)
    - [MsgSubmitProposal](#cosmos-group-v1-MsgSubmitProposal)
    - [MsgSubmitProposalResponse](#cosmos-group-v1-MsgSubmitProposalResponse)
    - [MsgUpdateGroupAdmin](#cosmos-group-v1-MsgUpdateGroupAdmin)
    - [MsgUpdateGroupAdminResponse](#cosmos-group-v1-MsgUpdateGroupAdminResponse)
    - [MsgUpdateGroupMembers](#cosmos-group-v1-MsgUpdateGroupMembers)
    - [MsgUpdateGroupMembersResponse](#cosmos-group-v1-MsgUpdateGroupMembersResponse)
    - [MsgUpdateGroupMetadata](#cosmos-group-v1-MsgUpdateGroupMetadata)
    - [MsgUpdateGroupMetadataResponse](#cosmos-group-v1-MsgUpdateGroupMetadataResponse)
    - [MsgUpdateGroupPolicyAdmin](#cosmos-group-v1-MsgUpdateGroupPolicyAdmin)
    - [MsgUpdateGroupPolicyAdminResponse](#cosmos-group-v1-MsgUpdateGroupPolicyAdminResponse)
    - [MsgUpdateGroupPolicyDecisionPolicy](#cosmos-group-v1-MsgUpdateGroupPolicyDecisionPolicy)
    - [MsgUpdateGroupPolicyDecisionPolicyResponse](#cosmos-group-v1-MsgUpdateGroupPolicyDecisionPolicyResponse)
    - [MsgUpdateGroupPolicyMetadata](#cosmos-group-v1-MsgUpdateGroupPolicyMetadata)
    - [MsgUpdateGroupPolicyMetadataResponse](#cosmos-group-v1-MsgUpdateGroupPolicyMetadataResponse)
    - [MsgVote](#cosmos-group-v1-MsgVote)
    - [MsgVoteResponse](#cosmos-group-v1-MsgVoteResponse)
    - [MsgWithdrawProposal](#cosmos-group-v1-MsgWithdrawProposal)
    - [MsgWithdrawProposalResponse](#cosmos-group-v1-MsgWithdrawProposalResponse)
  
    - [Exec](#cosmos-group-v1-Exec)
  
    - [Msg](#cosmos-group-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_group_v1_types-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/group/v1/types.proto



<a name="cosmos-group-v1-DecisionPolicyWindows"></a>

### DecisionPolicyWindows
DecisionPolicyWindows defines the different windows for voting and execution.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| voting_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | voting_period is the duration from submission of a proposal to the end of voting period Within this times votes can be submitted with MsgVote. |
| min_execution_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | min_execution_period is the minimum duration after the proposal submission where members can start sending MsgExec. This means that the window for sending a MsgExec transaction is: `[ submission &#43; min_execution_period ; submission &#43; voting_period &#43; max_execution_period]` where max_execution_period is a app-specific config, defined in the keeper. If not set, min_execution_period will default to 0.

Please make sure to set a `min_execution_period` that is smaller than `voting_period &#43; max_execution_period`, or else the above execution window is empty, meaning that all proposals created with this decision policy won&#39;t be able to be executed. |






<a name="cosmos-group-v1-GroupInfo"></a>

### GroupInfo
GroupInfo represents the high-level on-chain information for a group.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | id is the unique ID of the group. |
| admin | [string](#string) |  | admin is the account address of the group&#39;s admin. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata to attached to the group. the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/group#group-1 |
| version | [uint64](#uint64) |  | version is used to track changes to a group&#39;s membership structure that would break existing proposals. Whenever any members weight is changed, or any member is added or removed this version is incremented and will cause proposals based on older versions of this group to fail |
| total_weight | [string](#string) |  | total_weight is the sum of the group members&#39; weights. |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | created_at is a timestamp specifying when a group was created. |






<a name="cosmos-group-v1-GroupMember"></a>

### GroupMember
GroupMember represents the relationship between a group and a member.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the group. |
| member | [Member](#cosmos-group-v1-Member) |  | member is the member data. |






<a name="cosmos-group-v1-GroupPolicyInfo"></a>

### GroupPolicyInfo
GroupPolicyInfo represents the high-level on-chain information for a group policy.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the account address of group policy. |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the group. |
| admin | [string](#string) |  | admin is the account address of the group admin. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the group policy. the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/group#decision-policy-1 |
| version | [uint64](#uint64) |  | version is used to track changes to a group&#39;s GroupPolicyInfo structure that would create a different result on a running proposal. |
| decision_policy | [google.protobuf.Any](#google-protobuf-Any) |  | decision_policy specifies the group policy&#39;s decision policy. |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | created_at is a timestamp specifying when a group policy was created. |






<a name="cosmos-group-v1-Member"></a>

### Member
Member represents a group member with an account address,
non-zero weight, metadata and added_at timestamp.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the member&#39;s account address. |
| weight | [string](#string) |  | weight is the member&#39;s voting weight that should be greater than 0. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the member. |
| added_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | added_at is a timestamp specifying when a member was added. |






<a name="cosmos-group-v1-MemberRequest"></a>

### MemberRequest
MemberRequest represents a group member to be used in Msg server requests.
Contrary to `Member`, it doesn&#39;t have any `added_at` field
since this field cannot be set as part of requests.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the member&#39;s account address. |
| weight | [string](#string) |  | weight is the member&#39;s voting weight that should be greater than 0. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the member. |






<a name="cosmos-group-v1-PercentageDecisionPolicy"></a>

### PercentageDecisionPolicy
PercentageDecisionPolicy is a decision policy where a proposal passes when
it satisfies the two following conditions:
1. The percentage of all `YES` voters&#39; weights out of the total group weight
   is greater or equal than the given `percentage`.
2. The voting and execution periods of the proposal respect the parameters
   given by `windows`.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| percentage | [string](#string) |  | percentage is the minimum percentage of the weighted sum of `YES` votes must meet for a proposal to succeed. |
| windows | [DecisionPolicyWindows](#cosmos-group-v1-DecisionPolicyWindows) |  | windows defines the different windows for voting and execution. |






<a name="cosmos-group-v1-Proposal"></a>

### Proposal
Proposal defines a group proposal. Any member of a group can submit a proposal
for a group policy to decide upon.
A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
passes as well as some optional metadata associated with the proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | id is the unique id of the proposal. |
| group_policy_address | [string](#string) |  | group_policy_address is the account address of group policy. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the proposal. the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/group#proposal-4 |
| proposers | [string](#string) | repeated | proposers are the account addresses of the proposers. |
| submit_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | submit_time is a timestamp specifying when a proposal was submitted. |
| group_version | [uint64](#uint64) |  | group_version tracks the version of the group at proposal submission. This field is here for informational purposes only. |
| group_policy_version | [uint64](#uint64) |  | group_policy_version tracks the version of the group policy at proposal submission. When a decision policy is changed, existing proposals from previous policy versions will become invalid with the `ABORTED` status. This field is here for informational purposes only. |
| status | [ProposalStatus](#cosmos-group-v1-ProposalStatus) |  | status represents the high level position in the life cycle of the proposal. Initial value is Submitted. |
| final_tally_result | [TallyResult](#cosmos-group-v1-TallyResult) |  | final_tally_result contains the sums of all weighted votes for this proposal for each vote option. It is empty at submission, and only populated after tallying, at voting period end or at proposal execution, whichever happens first. |
| voting_period_end | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | voting_period_end is the timestamp before which voting must be done. Unless a successful MsgExec is called before (to execute a proposal whose tally is successful before the voting period ends), tallying will be done at this point, and the `final_tally_result`and `status` fields will be accordingly updated. |
| executor_result | [ProposalExecutorResult](#cosmos-group-v1-ProposalExecutorResult) |  | executor_result is the final result of the proposal execution. Initial value is NotRun. |
| messages | [google.protobuf.Any](#google-protobuf-Any) | repeated | messages is a list of `sdk.Msg`s that will be executed if the proposal passes. |
| title | [string](#string) |  | title is the title of the proposal |
| summary | [string](#string) |  | summary is a short summary of the proposal |






<a name="cosmos-group-v1-TallyResult"></a>

### TallyResult
TallyResult represents the sum of weighted votes for each vote option.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| yes_count | [string](#string) |  | yes_count is the weighted sum of yes votes. |
| abstain_count | [string](#string) |  | abstain_count is the weighted sum of abstainers. |
| no_count | [string](#string) |  | no_count is the weighted sum of no votes. |
| no_with_veto_count | [string](#string) |  | no_with_veto_count is the weighted sum of veto. |






<a name="cosmos-group-v1-ThresholdDecisionPolicy"></a>

### ThresholdDecisionPolicy
ThresholdDecisionPolicy is a decision policy where a proposal passes when it
satisfies the two following conditions:
1. The sum of all `YES` voter&#39;s weights is greater or equal than the defined
   `threshold`.
2. The voting and execution periods of the proposal respect the parameters
   given by `windows`.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| threshold | [string](#string) |  | threshold is the minimum weighted sum of `YES` votes that must be met or exceeded for a proposal to succeed. |
| windows | [DecisionPolicyWindows](#cosmos-group-v1-DecisionPolicyWindows) |  | windows defines the different windows for voting and execution. |






<a name="cosmos-group-v1-Vote"></a>

### Vote
Vote represents a vote for a proposal.string metadata


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal is the unique ID of the proposal. |
| voter | [string](#string) |  | voter is the account address of the voter. |
| option | [VoteOption](#cosmos-group-v1-VoteOption) |  | option is the voter&#39;s choice on the proposal. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the vote. the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/group#vote-2 |
| submit_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | submit_time is the timestamp when the vote was submitted. |





 


<a name="cosmos-group-v1-ProposalExecutorResult"></a>

### ProposalExecutorResult
ProposalExecutorResult defines types of proposal executor results.

| Name | Number | Description |
| ---- | ------ | ----------- |
| PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED | 0 | An empty value is not allowed. |
| PROPOSAL_EXECUTOR_RESULT_NOT_RUN | 1 | We have not yet run the executor. |
| PROPOSAL_EXECUTOR_RESULT_SUCCESS | 2 | The executor was successful and proposed action updated state. |
| PROPOSAL_EXECUTOR_RESULT_FAILURE | 3 | The executor returned an error and proposed action didn&#39;t update state. |



<a name="cosmos-group-v1-ProposalStatus"></a>

### ProposalStatus
ProposalStatus defines proposal statuses.

| Name | Number | Description |
| ---- | ------ | ----------- |
| PROPOSAL_STATUS_UNSPECIFIED | 0 | An empty value is invalid and not allowed. |
| PROPOSAL_STATUS_SUBMITTED | 1 | Initial status of a proposal when submitted. |
| PROPOSAL_STATUS_ACCEPTED | 2 | Final status of a proposal when the final tally is done and the outcome passes the group policy&#39;s decision policy. |
| PROPOSAL_STATUS_REJECTED | 3 | Final status of a proposal when the final tally is done and the outcome is rejected by the group policy&#39;s decision policy. |
| PROPOSAL_STATUS_ABORTED | 4 | Final status of a proposal when the group policy is modified before the final tally. |
| PROPOSAL_STATUS_WITHDRAWN | 5 | A proposal can be withdrawn before the voting start time by the owner. When this happens the final status is Withdrawn. |



<a name="cosmos-group-v1-VoteOption"></a>

### VoteOption
VoteOption enumerates the valid vote options for a given proposal.

| Name | Number | Description |
| ---- | ------ | ----------- |
| VOTE_OPTION_UNSPECIFIED | 0 | VOTE_OPTION_UNSPECIFIED defines an unspecified vote option which will return an error. |
| VOTE_OPTION_YES | 1 | VOTE_OPTION_YES defines a yes vote option. |
| VOTE_OPTION_ABSTAIN | 2 | VOTE_OPTION_ABSTAIN defines an abstain vote option. |
| VOTE_OPTION_NO | 3 | VOTE_OPTION_NO defines a no vote option. |
| VOTE_OPTION_NO_WITH_VETO | 4 | VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. |


 

 

 



<a name="cosmos_group_v1_events-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/group/v1/events.proto



<a name="cosmos-group-v1-EventCreateGroup"></a>

### EventCreateGroup
EventCreateGroup is an event emitted when a group is created.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the group. |






<a name="cosmos-group-v1-EventCreateGroupPolicy"></a>

### EventCreateGroupPolicy
EventCreateGroupPolicy is an event emitted when a group policy is created.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the account address of the group policy. |






<a name="cosmos-group-v1-EventExec"></a>

### EventExec
EventExec is an event emitted when a proposal is executed.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id is the unique ID of the proposal. |
| result | [ProposalExecutorResult](#cosmos-group-v1-ProposalExecutorResult) |  | result is the proposal execution result. |
| logs | [string](#string) |  | logs contains error logs in case the execution result is FAILURE. |






<a name="cosmos-group-v1-EventLeaveGroup"></a>

### EventLeaveGroup
EventLeaveGroup is an event emitted when group member leaves the group.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the group. |
| address | [string](#string) |  | address is the account address of the group member. |






<a name="cosmos-group-v1-EventProposalPruned"></a>

### EventProposalPruned
EventProposalPruned is an event emitted when a proposal is pruned.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id is the unique ID of the proposal. |
| status | [ProposalStatus](#cosmos-group-v1-ProposalStatus) |  | status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN). |
| tally_result | [TallyResult](#cosmos-group-v1-TallyResult) |  | tally_result is the proposal tally result (when applicable). |






<a name="cosmos-group-v1-EventSubmitProposal"></a>

### EventSubmitProposal
EventSubmitProposal is an event emitted when a proposal is created.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id is the unique ID of the proposal. |






<a name="cosmos-group-v1-EventTallyError"></a>

### EventTallyError
EventTallyError is an event emitted when a proposal tally failed with an error.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id is the unique ID of the proposal. |
| error_message | [string](#string) |  | error_message is the raw error output |






<a name="cosmos-group-v1-EventUpdateGroup"></a>

### EventUpdateGroup
EventUpdateGroup is an event emitted when a group is updated.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the group. |






<a name="cosmos-group-v1-EventUpdateGroupPolicy"></a>

### EventUpdateGroupPolicy
EventUpdateGroupPolicy is an event emitted when a group policy is updated.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the account address of the group policy. |






<a name="cosmos-group-v1-EventVote"></a>

### EventVote
EventVote is an event emitted when a voter votes on a proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id is the unique ID of the proposal. |






<a name="cosmos-group-v1-EventWithdrawProposal"></a>

### EventWithdrawProposal
EventWithdrawProposal is an event emitted when a proposal is withdrawn.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id is the unique ID of the proposal. |





 

 

 

 



<a name="cosmos_group_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/group/v1/genesis.proto



<a name="cosmos-group-v1-GenesisState"></a>

### GenesisState
GenesisState defines the group module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_seq | [uint64](#uint64) |  | group_seq is the group table orm.Sequence, it is used to get the next group ID. |
| groups | [GroupInfo](#cosmos-group-v1-GroupInfo) | repeated | groups is the list of groups info. |
| group_members | [GroupMember](#cosmos-group-v1-GroupMember) | repeated | group_members is the list of groups members. |
| group_policy_seq | [uint64](#uint64) |  | group_policy_seq is the group policy table orm.Sequence, it is used to generate the next group policy account address. |
| group_policies | [GroupPolicyInfo](#cosmos-group-v1-GroupPolicyInfo) | repeated | group_policies is the list of group policies info. |
| proposal_seq | [uint64](#uint64) |  | proposal_seq is the proposal table orm.Sequence, it is used to get the next proposal ID. |
| proposals | [Proposal](#cosmos-group-v1-Proposal) | repeated | proposals is the list of proposals. |
| votes | [Vote](#cosmos-group-v1-Vote) | repeated | votes is the list of votes. |





 

 

 

 



<a name="cosmos_group_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/group/v1/query.proto



<a name="cosmos-group-v1-QueryGroupInfoRequest"></a>

### QueryGroupInfoRequest
QueryGroupInfoRequest is the Query/GroupInfo request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the group. |






<a name="cosmos-group-v1-QueryGroupInfoResponse"></a>

### QueryGroupInfoResponse
QueryGroupInfoResponse is the Query/GroupInfo response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| info | [GroupInfo](#cosmos-group-v1-GroupInfo) |  | info is the GroupInfo of the group. |






<a name="cosmos-group-v1-QueryGroupMembersRequest"></a>

### QueryGroupMembersRequest
QueryGroupMembersRequest is the Query/GroupMembers request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the group. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-group-v1-QueryGroupMembersResponse"></a>

### QueryGroupMembersResponse
QueryGroupMembersResponse is the Query/GroupMembersResponse response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| members | [GroupMember](#cosmos-group-v1-GroupMember) | repeated | members are the members of the group with given group_id. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-group-v1-QueryGroupPoliciesByAdminRequest"></a>

### QueryGroupPoliciesByAdminRequest
QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | admin is the admin address of the group policy. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-group-v1-QueryGroupPoliciesByAdminResponse"></a>

### QueryGroupPoliciesByAdminResponse
QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_policies | [GroupPolicyInfo](#cosmos-group-v1-GroupPolicyInfo) | repeated | group_policies are the group policies info with provided admin. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-group-v1-QueryGroupPoliciesByGroupRequest"></a>

### QueryGroupPoliciesByGroupRequest
QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the group policy&#39;s group. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-group-v1-QueryGroupPoliciesByGroupResponse"></a>

### QueryGroupPoliciesByGroupResponse
QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_policies | [GroupPolicyInfo](#cosmos-group-v1-GroupPolicyInfo) | repeated | group_policies are the group policies info associated with the provided group. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-group-v1-QueryGroupPolicyInfoRequest"></a>

### QueryGroupPolicyInfoRequest
QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the account address of the group policy. |






<a name="cosmos-group-v1-QueryGroupPolicyInfoResponse"></a>

### QueryGroupPolicyInfoResponse
QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| info | [GroupPolicyInfo](#cosmos-group-v1-GroupPolicyInfo) |  | info is the GroupPolicyInfo of the group policy. |






<a name="cosmos-group-v1-QueryGroupsByAdminRequest"></a>

### QueryGroupsByAdminRequest
QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | admin is the account address of a group&#39;s admin. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-group-v1-QueryGroupsByAdminResponse"></a>

### QueryGroupsByAdminResponse
QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groups | [GroupInfo](#cosmos-group-v1-GroupInfo) | repeated | groups are the groups info with the provided admin. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-group-v1-QueryGroupsByMemberRequest"></a>

### QueryGroupsByMemberRequest
QueryGroupsByMemberRequest is the Query/GroupsByMember request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the group member address. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-group-v1-QueryGroupsByMemberResponse"></a>

### QueryGroupsByMemberResponse
QueryGroupsByMemberResponse is the Query/GroupsByMember response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groups | [GroupInfo](#cosmos-group-v1-GroupInfo) | repeated | groups are the groups info with the provided group member. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-group-v1-QueryGroupsRequest"></a>

### QueryGroupsRequest
QueryGroupsRequest is the Query/Groups request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-group-v1-QueryGroupsResponse"></a>

### QueryGroupsResponse
QueryGroupsResponse is the Query/Groups response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groups | [GroupInfo](#cosmos-group-v1-GroupInfo) | repeated | `groups` is all the groups present in state. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-group-v1-QueryProposalRequest"></a>

### QueryProposalRequest
QueryProposalRequest is the Query/Proposal request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id is the unique ID of a proposal. |






<a name="cosmos-group-v1-QueryProposalResponse"></a>

### QueryProposalResponse
QueryProposalResponse is the Query/Proposal response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal | [Proposal](#cosmos-group-v1-Proposal) |  | proposal is the proposal info. |






<a name="cosmos-group-v1-QueryProposalsByGroupPolicyRequest"></a>

### QueryProposalsByGroupPolicyRequest
QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the account address of the group policy related to proposals. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-group-v1-QueryProposalsByGroupPolicyResponse"></a>

### QueryProposalsByGroupPolicyResponse
QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposals | [Proposal](#cosmos-group-v1-Proposal) | repeated | proposals are the proposals with given group policy. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-group-v1-QueryTallyResultRequest"></a>

### QueryTallyResultRequest
QueryTallyResultRequest is the Query/TallyResult request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id is the unique id of a proposal. |






<a name="cosmos-group-v1-QueryTallyResultResponse"></a>

### QueryTallyResultResponse
QueryTallyResultResponse is the Query/TallyResult response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tally | [TallyResult](#cosmos-group-v1-TallyResult) |  | tally defines the requested tally. |






<a name="cosmos-group-v1-QueryVoteByProposalVoterRequest"></a>

### QueryVoteByProposalVoterRequest
QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id is the unique ID of a proposal. |
| voter | [string](#string) |  | voter is a proposal voter account address. |






<a name="cosmos-group-v1-QueryVoteByProposalVoterResponse"></a>

### QueryVoteByProposalVoterResponse
QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vote | [Vote](#cosmos-group-v1-Vote) |  | vote is the vote with given proposal_id and voter. |






<a name="cosmos-group-v1-QueryVotesByProposalRequest"></a>

### QueryVotesByProposalRequest
QueryVotesByProposalRequest is the Query/VotesByProposal request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id is the unique ID of a proposal. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-group-v1-QueryVotesByProposalResponse"></a>

### QueryVotesByProposalResponse
QueryVotesByProposalResponse is the Query/VotesByProposal response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| votes | [Vote](#cosmos-group-v1-Vote) | repeated | votes are the list of votes for given proposal_id. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-group-v1-QueryVotesByVoterRequest"></a>

### QueryVotesByVoterRequest
QueryVotesByVoterRequest is the Query/VotesByVoter request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| voter | [string](#string) |  | voter is a proposal voter account address. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-group-v1-QueryVotesByVoterResponse"></a>

### QueryVotesByVoterResponse
QueryVotesByVoterResponse is the Query/VotesByVoter response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| votes | [Vote](#cosmos-group-v1-Vote) | repeated | votes are the list of votes by given voter. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |





 

 

 


<a name="cosmos-group-v1-Query"></a>

### Query
Query is the cosmos.group.v1 Query service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GroupInfo | [QueryGroupInfoRequest](#cosmos-group-v1-QueryGroupInfoRequest) | [QueryGroupInfoResponse](#cosmos-group-v1-QueryGroupInfoResponse) | GroupInfo queries group info based on group id. |
| GroupPolicyInfo | [QueryGroupPolicyInfoRequest](#cosmos-group-v1-QueryGroupPolicyInfoRequest) | [QueryGroupPolicyInfoResponse](#cosmos-group-v1-QueryGroupPolicyInfoResponse) | GroupPolicyInfo queries group policy info based on account address of group policy. |
| GroupMembers | [QueryGroupMembersRequest](#cosmos-group-v1-QueryGroupMembersRequest) | [QueryGroupMembersResponse](#cosmos-group-v1-QueryGroupMembersResponse) | GroupMembers queries members of a group by group id. |
| GroupsByAdmin | [QueryGroupsByAdminRequest](#cosmos-group-v1-QueryGroupsByAdminRequest) | [QueryGroupsByAdminResponse](#cosmos-group-v1-QueryGroupsByAdminResponse) | GroupsByAdmin queries groups by admin address. |
| GroupPoliciesByGroup | [QueryGroupPoliciesByGroupRequest](#cosmos-group-v1-QueryGroupPoliciesByGroupRequest) | [QueryGroupPoliciesByGroupResponse](#cosmos-group-v1-QueryGroupPoliciesByGroupResponse) | GroupPoliciesByGroup queries group policies by group id. |
| GroupPoliciesByAdmin | [QueryGroupPoliciesByAdminRequest](#cosmos-group-v1-QueryGroupPoliciesByAdminRequest) | [QueryGroupPoliciesByAdminResponse](#cosmos-group-v1-QueryGroupPoliciesByAdminResponse) | GroupPoliciesByAdmin queries group policies by admin address. |
| Proposal | [QueryProposalRequest](#cosmos-group-v1-QueryProposalRequest) | [QueryProposalResponse](#cosmos-group-v1-QueryProposalResponse) | Proposal queries a proposal based on proposal id. |
| ProposalsByGroupPolicy | [QueryProposalsByGroupPolicyRequest](#cosmos-group-v1-QueryProposalsByGroupPolicyRequest) | [QueryProposalsByGroupPolicyResponse](#cosmos-group-v1-QueryProposalsByGroupPolicyResponse) | ProposalsByGroupPolicy queries proposals based on account address of group policy. |
| VoteByProposalVoter | [QueryVoteByProposalVoterRequest](#cosmos-group-v1-QueryVoteByProposalVoterRequest) | [QueryVoteByProposalVoterResponse](#cosmos-group-v1-QueryVoteByProposalVoterResponse) | VoteByProposalVoter queries a vote by proposal id and voter. |
| VotesByProposal | [QueryVotesByProposalRequest](#cosmos-group-v1-QueryVotesByProposalRequest) | [QueryVotesByProposalResponse](#cosmos-group-v1-QueryVotesByProposalResponse) | VotesByProposal queries a vote by proposal id. |
| VotesByVoter | [QueryVotesByVoterRequest](#cosmos-group-v1-QueryVotesByVoterRequest) | [QueryVotesByVoterResponse](#cosmos-group-v1-QueryVotesByVoterResponse) | VotesByVoter queries a vote by voter. |
| GroupsByMember | [QueryGroupsByMemberRequest](#cosmos-group-v1-QueryGroupsByMemberRequest) | [QueryGroupsByMemberResponse](#cosmos-group-v1-QueryGroupsByMemberResponse) | GroupsByMember queries groups by member address. |
| TallyResult | [QueryTallyResultRequest](#cosmos-group-v1-QueryTallyResultRequest) | [QueryTallyResultResponse](#cosmos-group-v1-QueryTallyResultResponse) | TallyResult returns the tally result of a proposal. If the proposal is still in voting period, then this query computes the current tally state, which might not be final. On the other hand, if the proposal is final, then it simply returns the `final_tally_result` state stored in the proposal itself. |
| Groups | [QueryGroupsRequest](#cosmos-group-v1-QueryGroupsRequest) | [QueryGroupsResponse](#cosmos-group-v1-QueryGroupsResponse) | Groups queries all groups in state. |

 



<a name="cosmos_group_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/group/v1/tx.proto



<a name="cosmos-group-v1-MsgCreateGroup"></a>

### MsgCreateGroup
MsgCreateGroup is the Msg/CreateGroup request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | admin is the account address of the group admin. |
| members | [MemberRequest](#cosmos-group-v1-MemberRequest) | repeated | members defines the group members. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata to attached to the group. |






<a name="cosmos-group-v1-MsgCreateGroupPolicy"></a>

### MsgCreateGroupPolicy
MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | admin is the account address of the group admin. |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the group. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the group policy. |
| decision_policy | [google.protobuf.Any](#google-protobuf-Any) |  | decision_policy specifies the group policy&#39;s decision policy. |






<a name="cosmos-group-v1-MsgCreateGroupPolicyResponse"></a>

### MsgCreateGroupPolicyResponse
MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the account address of the newly created group policy. |






<a name="cosmos-group-v1-MsgCreateGroupResponse"></a>

### MsgCreateGroupResponse
MsgCreateGroupResponse is the Msg/CreateGroup response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the newly created group. |






<a name="cosmos-group-v1-MsgCreateGroupWithPolicy"></a>

### MsgCreateGroupWithPolicy
MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | admin is the account address of the group and group policy admin. |
| members | [MemberRequest](#cosmos-group-v1-MemberRequest) | repeated | members defines the group members. |
| group_metadata | [string](#string) |  | group_metadata is any arbitrary metadata attached to the group. |
| group_policy_metadata | [string](#string) |  | group_policy_metadata is any arbitrary metadata attached to the group policy. |
| group_policy_as_admin | [bool](#bool) |  | group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group and group policy admin. |
| decision_policy | [google.protobuf.Any](#google-protobuf-Any) |  | decision_policy specifies the group policy&#39;s decision policy. |






<a name="cosmos-group-v1-MsgCreateGroupWithPolicyResponse"></a>

### MsgCreateGroupWithPolicyResponse
MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the newly created group with policy. |
| group_policy_address | [string](#string) |  | group_policy_address is the account address of the newly created group policy. |






<a name="cosmos-group-v1-MsgExec"></a>

### MsgExec
MsgExec is the Msg/Exec request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal is the unique ID of the proposal. |
| executor | [string](#string) |  | executor is the account address used to execute the proposal. |






<a name="cosmos-group-v1-MsgExecResponse"></a>

### MsgExecResponse
MsgExecResponse is the Msg/Exec request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ProposalExecutorResult](#cosmos-group-v1-ProposalExecutorResult) |  | result is the final result of the proposal execution. |






<a name="cosmos-group-v1-MsgLeaveGroup"></a>

### MsgLeaveGroup
MsgLeaveGroup is the Msg/LeaveGroup request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the account address of the group member. |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the group. |






<a name="cosmos-group-v1-MsgLeaveGroupResponse"></a>

### MsgLeaveGroupResponse
MsgLeaveGroupResponse is the Msg/LeaveGroup response type.






<a name="cosmos-group-v1-MsgSubmitProposal"></a>

### MsgSubmitProposal
MsgSubmitProposal is the Msg/SubmitProposal request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_policy_address | [string](#string) |  | group_policy_address is the account address of group policy. |
| proposers | [string](#string) | repeated | proposers are the account addresses of the proposers. Proposers signatures will be counted as yes votes. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the proposal. |
| messages | [google.protobuf.Any](#google-protobuf-Any) | repeated | messages is a list of `sdk.Msg`s that will be executed if the proposal passes. |
| exec | [Exec](#cosmos-group-v1-Exec) |  | exec defines the mode of execution of the proposal, whether it should be executed immediately on creation or not. If so, proposers signatures are considered as Yes votes. |
| title | [string](#string) |  | title is the title of the proposal. |
| summary | [string](#string) |  | summary is the summary of the proposal. |






<a name="cosmos-group-v1-MsgSubmitProposalResponse"></a>

### MsgSubmitProposalResponse
MsgSubmitProposalResponse is the Msg/SubmitProposal response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal is the unique ID of the proposal. |






<a name="cosmos-group-v1-MsgUpdateGroupAdmin"></a>

### MsgUpdateGroupAdmin
MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | admin is the current account address of the group admin. |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the group. |
| new_admin | [string](#string) |  | new_admin is the group new admin account address. |






<a name="cosmos-group-v1-MsgUpdateGroupAdminResponse"></a>

### MsgUpdateGroupAdminResponse
MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type.






<a name="cosmos-group-v1-MsgUpdateGroupMembers"></a>

### MsgUpdateGroupMembers
MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | admin is the account address of the group admin. |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the group. |
| member_updates | [MemberRequest](#cosmos-group-v1-MemberRequest) | repeated | member_updates is the list of members to update, set weight to 0 to remove a member. |






<a name="cosmos-group-v1-MsgUpdateGroupMembersResponse"></a>

### MsgUpdateGroupMembersResponse
MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type.






<a name="cosmos-group-v1-MsgUpdateGroupMetadata"></a>

### MsgUpdateGroupMetadata
MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | admin is the account address of the group admin. |
| group_id | [uint64](#uint64) |  | group_id is the unique ID of the group. |
| metadata | [string](#string) |  | metadata is the updated group&#39;s metadata. |






<a name="cosmos-group-v1-MsgUpdateGroupMetadataResponse"></a>

### MsgUpdateGroupMetadataResponse
MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type.






<a name="cosmos-group-v1-MsgUpdateGroupPolicyAdmin"></a>

### MsgUpdateGroupPolicyAdmin
MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | admin is the account address of the group admin. |
| group_policy_address | [string](#string) |  | group_policy_address is the account address of the group policy. |
| new_admin | [string](#string) |  | new_admin is the new group policy admin. |






<a name="cosmos-group-v1-MsgUpdateGroupPolicyAdminResponse"></a>

### MsgUpdateGroupPolicyAdminResponse
MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type.






<a name="cosmos-group-v1-MsgUpdateGroupPolicyDecisionPolicy"></a>

### MsgUpdateGroupPolicyDecisionPolicy
MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | admin is the account address of the group admin. |
| group_policy_address | [string](#string) |  | group_policy_address is the account address of group policy. |
| decision_policy | [google.protobuf.Any](#google-protobuf-Any) |  | decision_policy is the updated group policy&#39;s decision policy. |






<a name="cosmos-group-v1-MsgUpdateGroupPolicyDecisionPolicyResponse"></a>

### MsgUpdateGroupPolicyDecisionPolicyResponse
MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type.






<a name="cosmos-group-v1-MsgUpdateGroupPolicyMetadata"></a>

### MsgUpdateGroupPolicyMetadata
MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | admin is the account address of the group admin. |
| group_policy_address | [string](#string) |  | group_policy_address is the account address of group policy. |
| metadata | [string](#string) |  | metadata is the group policy metadata to be updated. |






<a name="cosmos-group-v1-MsgUpdateGroupPolicyMetadataResponse"></a>

### MsgUpdateGroupPolicyMetadataResponse
MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type.






<a name="cosmos-group-v1-MsgVote"></a>

### MsgVote
MsgVote is the Msg/Vote request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal is the unique ID of the proposal. |
| voter | [string](#string) |  | voter is the voter account address. |
| option | [VoteOption](#cosmos-group-v1-VoteOption) |  | option is the voter&#39;s choice on the proposal. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the vote. |
| exec | [Exec](#cosmos-group-v1-Exec) |  | exec defines whether the proposal should be executed immediately after voting or not. |






<a name="cosmos-group-v1-MsgVoteResponse"></a>

### MsgVoteResponse
MsgVoteResponse is the Msg/Vote response type.






<a name="cosmos-group-v1-MsgWithdrawProposal"></a>

### MsgWithdrawProposal
MsgWithdrawProposal is the Msg/WithdrawProposal request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal is the unique ID of the proposal. |
| address | [string](#string) |  | address is the admin of the group policy or one of the proposer of the proposal. |






<a name="cosmos-group-v1-MsgWithdrawProposalResponse"></a>

### MsgWithdrawProposalResponse
MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type.





 


<a name="cosmos-group-v1-Exec"></a>

### Exec
Exec defines modes of execution of a proposal on creation or on new vote.

| Name | Number | Description |
| ---- | ------ | ----------- |
| EXEC_UNSPECIFIED | 0 | An empty value means that there should be a separate MsgExec request for the proposal to execute. |
| EXEC_TRY | 1 | Try to execute the proposal immediately. If the proposal is not allowed per the DecisionPolicy, the proposal will still be open and could be executed at a later point. |


 

 


<a name="cosmos-group-v1-Msg"></a>

### Msg
Msg is the cosmos.group.v1 Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateGroup | [MsgCreateGroup](#cosmos-group-v1-MsgCreateGroup) | [MsgCreateGroupResponse](#cosmos-group-v1-MsgCreateGroupResponse) | CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. |
| UpdateGroupMembers | [MsgUpdateGroupMembers](#cosmos-group-v1-MsgUpdateGroupMembers) | [MsgUpdateGroupMembersResponse](#cosmos-group-v1-MsgUpdateGroupMembersResponse) | UpdateGroupMembers updates the group members with given group id and admin address. |
| UpdateGroupAdmin | [MsgUpdateGroupAdmin](#cosmos-group-v1-MsgUpdateGroupAdmin) | [MsgUpdateGroupAdminResponse](#cosmos-group-v1-MsgUpdateGroupAdminResponse) | UpdateGroupAdmin updates the group admin with given group id and previous admin address. |
| UpdateGroupMetadata | [MsgUpdateGroupMetadata](#cosmos-group-v1-MsgUpdateGroupMetadata) | [MsgUpdateGroupMetadataResponse](#cosmos-group-v1-MsgUpdateGroupMetadataResponse) | UpdateGroupMetadata updates the group metadata with given group id and admin address. |
| CreateGroupPolicy | [MsgCreateGroupPolicy](#cosmos-group-v1-MsgCreateGroupPolicy) | [MsgCreateGroupPolicyResponse](#cosmos-group-v1-MsgCreateGroupPolicyResponse) | CreateGroupPolicy creates a new group policy using given DecisionPolicy. |
| CreateGroupWithPolicy | [MsgCreateGroupWithPolicy](#cosmos-group-v1-MsgCreateGroupWithPolicy) | [MsgCreateGroupWithPolicyResponse](#cosmos-group-v1-MsgCreateGroupWithPolicyResponse) | CreateGroupWithPolicy creates a new group with policy. |
| UpdateGroupPolicyAdmin | [MsgUpdateGroupPolicyAdmin](#cosmos-group-v1-MsgUpdateGroupPolicyAdmin) | [MsgUpdateGroupPolicyAdminResponse](#cosmos-group-v1-MsgUpdateGroupPolicyAdminResponse) | UpdateGroupPolicyAdmin updates a group policy admin. |
| UpdateGroupPolicyDecisionPolicy | [MsgUpdateGroupPolicyDecisionPolicy](#cosmos-group-v1-MsgUpdateGroupPolicyDecisionPolicy) | [MsgUpdateGroupPolicyDecisionPolicyResponse](#cosmos-group-v1-MsgUpdateGroupPolicyDecisionPolicyResponse) | UpdateGroupPolicyDecisionPolicy allows a group policy&#39;s decision policy to be updated. |
| UpdateGroupPolicyMetadata | [MsgUpdateGroupPolicyMetadata](#cosmos-group-v1-MsgUpdateGroupPolicyMetadata) | [MsgUpdateGroupPolicyMetadataResponse](#cosmos-group-v1-MsgUpdateGroupPolicyMetadataResponse) | UpdateGroupPolicyMetadata updates a group policy metadata. |
| SubmitProposal | [MsgSubmitProposal](#cosmos-group-v1-MsgSubmitProposal) | [MsgSubmitProposalResponse](#cosmos-group-v1-MsgSubmitProposalResponse) | SubmitProposal submits a new proposal. |
| WithdrawProposal | [MsgWithdrawProposal](#cosmos-group-v1-MsgWithdrawProposal) | [MsgWithdrawProposalResponse](#cosmos-group-v1-MsgWithdrawProposalResponse) | WithdrawProposal withdraws a proposal. |
| Vote | [MsgVote](#cosmos-group-v1-MsgVote) | [MsgVoteResponse](#cosmos-group-v1-MsgVoteResponse) | Vote allows a voter to vote on a proposal. |
| Exec | [MsgExec](#cosmos-group-v1-MsgExec) | [MsgExecResponse](#cosmos-group-v1-MsgExecResponse) | Exec executes a proposal. |
| LeaveGroup | [MsgLeaveGroup](#cosmos-group-v1-MsgLeaveGroup) | [MsgLeaveGroupResponse](#cosmos-group-v1-MsgLeaveGroupResponse) | LeaveGroup allows a group member to leave the group. |

 



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

