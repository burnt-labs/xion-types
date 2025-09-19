# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [tendermint/types/validator.proto](#tendermint_types_validator-proto)
    - [SimpleValidator](#tendermint-types-SimpleValidator)
    - [Validator](#tendermint-types-Validator)
    - [ValidatorSet](#tendermint-types-ValidatorSet)
  
    - [BlockIDFlag](#tendermint-types-BlockIDFlag)
  
- [tendermint/types/types.proto](#tendermint_types_types-proto)
    - [BlockID](#tendermint-types-BlockID)
    - [BlockMeta](#tendermint-types-BlockMeta)
    - [Commit](#tendermint-types-Commit)
    - [CommitSig](#tendermint-types-CommitSig)
    - [Data](#tendermint-types-Data)
    - [ExtendedCommit](#tendermint-types-ExtendedCommit)
    - [ExtendedCommitSig](#tendermint-types-ExtendedCommitSig)
    - [Header](#tendermint-types-Header)
    - [LightBlock](#tendermint-types-LightBlock)
    - [Part](#tendermint-types-Part)
    - [PartSetHeader](#tendermint-types-PartSetHeader)
    - [Proposal](#tendermint-types-Proposal)
    - [SignedHeader](#tendermint-types-SignedHeader)
    - [TxProof](#tendermint-types-TxProof)
    - [Vote](#tendermint-types-Vote)
  
    - [SignedMsgType](#tendermint-types-SignedMsgType)
  
- [tendermint/types/evidence.proto](#tendermint_types_evidence-proto)
    - [DuplicateVoteEvidence](#tendermint-types-DuplicateVoteEvidence)
    - [Evidence](#tendermint-types-Evidence)
    - [EvidenceList](#tendermint-types-EvidenceList)
    - [LightClientAttackEvidence](#tendermint-types-LightClientAttackEvidence)
  
- [tendermint/types/block.proto](#tendermint_types_block-proto)
    - [Block](#tendermint-types-Block)
  
- [tendermint/types/params.proto](#tendermint_types_params-proto)
    - [ABCIParams](#tendermint-types-ABCIParams)
    - [BlockParams](#tendermint-types-BlockParams)
    - [ConsensusParams](#tendermint-types-ConsensusParams)
    - [EvidenceParams](#tendermint-types-EvidenceParams)
    - [HashedParams](#tendermint-types-HashedParams)
    - [ValidatorParams](#tendermint-types-ValidatorParams)
    - [VersionParams](#tendermint-types-VersionParams)
  
- [Scalar Value Types](#scalar-value-types)



<a name="tendermint_types_validator-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/types/validator.proto



<a name="tendermint-types-SimpleValidator"></a>

### SimpleValidator



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pub_key | [tendermint.crypto.PublicKey](#tendermint-crypto-PublicKey) |  |  |
| voting_power | [int64](#int64) |  |  |






<a name="tendermint-types-Validator"></a>

### Validator



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [bytes](#bytes) |  |  |
| pub_key | [tendermint.crypto.PublicKey](#tendermint-crypto-PublicKey) |  |  |
| voting_power | [int64](#int64) |  |  |
| proposer_priority | [int64](#int64) |  |  |






<a name="tendermint-types-ValidatorSet"></a>

### ValidatorSet



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validators | [Validator](#tendermint-types-Validator) | repeated |  |
| proposer | [Validator](#tendermint-types-Validator) |  |  |
| total_voting_power | [int64](#int64) |  |  |





 


<a name="tendermint-types-BlockIDFlag"></a>

### BlockIDFlag
BlockIdFlag indicates which BlockID the signature is for

| Name | Number | Description |
| ---- | ------ | ----------- |
| BLOCK_ID_FLAG_UNKNOWN | 0 | indicates an error condition |
| BLOCK_ID_FLAG_ABSENT | 1 | the vote was not received |
| BLOCK_ID_FLAG_COMMIT | 2 | voted for the block that received the majority |
| BLOCK_ID_FLAG_NIL | 3 | voted for nil |


 

 

 



<a name="tendermint_types_types-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/types/types.proto



<a name="tendermint-types-BlockID"></a>

### BlockID
BlockID


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  |  |
| part_set_header | [PartSetHeader](#tendermint-types-PartSetHeader) |  |  |






<a name="tendermint-types-BlockMeta"></a>

### BlockMeta



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_id | [BlockID](#tendermint-types-BlockID) |  |  |
| block_size | [int64](#int64) |  |  |
| header | [Header](#tendermint-types-Header) |  |  |
| num_txs | [int64](#int64) |  |  |






<a name="tendermint-types-Commit"></a>

### Commit
Commit contains the evidence that a block was committed by a set of validators.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  |  |
| round | [int32](#int32) |  |  |
| block_id | [BlockID](#tendermint-types-BlockID) |  |  |
| signatures | [CommitSig](#tendermint-types-CommitSig) | repeated |  |






<a name="tendermint-types-CommitSig"></a>

### CommitSig
CommitSig is a part of the Vote included in a Commit.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_id_flag | [BlockIDFlag](#tendermint-types-BlockIDFlag) |  |  |
| validator_address | [bytes](#bytes) |  |  |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| signature | [bytes](#bytes) |  |  |






<a name="tendermint-types-Data"></a>

### Data
Data contains the set of transactions included in the block


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| txs | [bytes](#bytes) | repeated | Txs that will be applied by state @ block.Height&#43;1. NOTE: not all txs here are valid. We&#39;re just agreeing on the order first. This means that block.AppHash does not include these txs. |






<a name="tendermint-types-ExtendedCommit"></a>

### ExtendedCommit



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  |  |
| round | [int32](#int32) |  |  |
| block_id | [BlockID](#tendermint-types-BlockID) |  |  |
| extended_signatures | [ExtendedCommitSig](#tendermint-types-ExtendedCommitSig) | repeated |  |






<a name="tendermint-types-ExtendedCommitSig"></a>

### ExtendedCommitSig
ExtendedCommitSig retains all the same fields as CommitSig but adds vote
extension-related fields. We use two signatures to ensure backwards compatibility.
That is the digest of the original signature is still the same in prior versions


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_id_flag | [BlockIDFlag](#tendermint-types-BlockIDFlag) |  |  |
| validator_address | [bytes](#bytes) |  |  |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| signature | [bytes](#bytes) |  |  |
| extension | [bytes](#bytes) |  | Vote extension data |
| extension_signature | [bytes](#bytes) |  | Vote extension signature |






<a name="tendermint-types-Header"></a>

### Header
Header defines the structure of a block header.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [tendermint.version.Consensus](#tendermint-version-Consensus) |  | basic block info |
| chain_id | [string](#string) |  |  |
| height | [int64](#int64) |  |  |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| last_block_id | [BlockID](#tendermint-types-BlockID) |  | prev block info |
| last_commit_hash | [bytes](#bytes) |  | hashes of block data

commit from validators from the last block |
| data_hash | [bytes](#bytes) |  | transactions |
| validators_hash | [bytes](#bytes) |  | hashes from the app output from the prev block

validators for the current block |
| next_validators_hash | [bytes](#bytes) |  | validators for the next block |
| consensus_hash | [bytes](#bytes) |  | consensus params for current block |
| app_hash | [bytes](#bytes) |  | state after txs from the previous block |
| last_results_hash | [bytes](#bytes) |  | root hash of all results from the txs from the previous block |
| evidence_hash | [bytes](#bytes) |  | consensus info

evidence included in the block |
| proposer_address | [bytes](#bytes) |  | original proposer of the block |






<a name="tendermint-types-LightBlock"></a>

### LightBlock



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signed_header | [SignedHeader](#tendermint-types-SignedHeader) |  |  |
| validator_set | [ValidatorSet](#tendermint-types-ValidatorSet) |  |  |






<a name="tendermint-types-Part"></a>

### Part



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [uint32](#uint32) |  |  |
| bytes | [bytes](#bytes) |  |  |
| proof | [tendermint.crypto.Proof](#tendermint-crypto-Proof) |  |  |






<a name="tendermint-types-PartSetHeader"></a>

### PartSetHeader
PartsetHeader


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total | [uint32](#uint32) |  |  |
| hash | [bytes](#bytes) |  |  |






<a name="tendermint-types-Proposal"></a>

### Proposal



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [SignedMsgType](#tendermint-types-SignedMsgType) |  |  |
| height | [int64](#int64) |  |  |
| round | [int32](#int32) |  |  |
| pol_round | [int32](#int32) |  |  |
| block_id | [BlockID](#tendermint-types-BlockID) |  |  |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| signature | [bytes](#bytes) |  |  |






<a name="tendermint-types-SignedHeader"></a>

### SignedHeader



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [Header](#tendermint-types-Header) |  |  |
| commit | [Commit](#tendermint-types-Commit) |  |  |






<a name="tendermint-types-TxProof"></a>

### TxProof
TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| root_hash | [bytes](#bytes) |  |  |
| data | [bytes](#bytes) |  |  |
| proof | [tendermint.crypto.Proof](#tendermint-crypto-Proof) |  |  |






<a name="tendermint-types-Vote"></a>

### Vote
Vote represents a prevote or precommit vote from validators for
consensus.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [SignedMsgType](#tendermint-types-SignedMsgType) |  |  |
| height | [int64](#int64) |  |  |
| round | [int32](#int32) |  |  |
| block_id | [BlockID](#tendermint-types-BlockID) |  | zero if vote is nil. |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| validator_address | [bytes](#bytes) |  |  |
| validator_index | [int32](#int32) |  |  |
| signature | [bytes](#bytes) |  | Vote signature by the validator if they participated in consensus for the associated block. |
| extension | [bytes](#bytes) |  | Vote extension provided by the application. Only valid for precommit messages. |
| extension_signature | [bytes](#bytes) |  | Vote extension signature by the validator if they participated in consensus for the associated block. Only valid for precommit messages. |





 


<a name="tendermint-types-SignedMsgType"></a>

### SignedMsgType
SignedMsgType is a type of signed message in the consensus.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SIGNED_MSG_TYPE_UNKNOWN | 0 |  |
| SIGNED_MSG_TYPE_PREVOTE | 1 | Votes |
| SIGNED_MSG_TYPE_PRECOMMIT | 2 |  |
| SIGNED_MSG_TYPE_PROPOSAL | 32 | Proposals |


 

 

 



<a name="tendermint_types_evidence-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/types/evidence.proto



<a name="tendermint-types-DuplicateVoteEvidence"></a>

### DuplicateVoteEvidence
DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vote_a | [Vote](#tendermint-types-Vote) |  |  |
| vote_b | [Vote](#tendermint-types-Vote) |  |  |
| total_voting_power | [int64](#int64) |  |  |
| validator_power | [int64](#int64) |  |  |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="tendermint-types-Evidence"></a>

### Evidence



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| duplicate_vote_evidence | [DuplicateVoteEvidence](#tendermint-types-DuplicateVoteEvidence) |  |  |
| light_client_attack_evidence | [LightClientAttackEvidence](#tendermint-types-LightClientAttackEvidence) |  |  |






<a name="tendermint-types-EvidenceList"></a>

### EvidenceList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| evidence | [Evidence](#tendermint-types-Evidence) | repeated |  |






<a name="tendermint-types-LightClientAttackEvidence"></a>

### LightClientAttackEvidence
LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conflicting_block | [LightBlock](#tendermint-types-LightBlock) |  |  |
| common_height | [int64](#int64) |  |  |
| byzantine_validators | [Validator](#tendermint-types-Validator) | repeated |  |
| total_voting_power | [int64](#int64) |  |  |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



<a name="tendermint_types_block-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/types/block.proto



<a name="tendermint-types-Block"></a>

### Block



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [Header](#tendermint-types-Header) |  |  |
| data | [Data](#tendermint-types-Data) |  |  |
| evidence | [EvidenceList](#tendermint-types-EvidenceList) |  |  |
| last_commit | [Commit](#tendermint-types-Commit) |  |  |





 

 

 

 



<a name="tendermint_types_params-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/types/params.proto



<a name="tendermint-types-ABCIParams"></a>

### ABCIParams
ABCIParams configure functionality specific to the Application Blockchain Interface.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vote_extensions_enable_height | [int64](#int64) |  | vote_extensions_enable_height configures the first height during which vote extensions will be enabled. During this specified height, and for all subsequent heights, precommit messages that do not contain valid extension data will be considered invalid. Prior to this height, vote extensions will not be used or accepted by validators on the network.

Once enabled, vote extensions will be created by the application in ExtendVote, passed to the application for validation in VerifyVoteExtension and given to the application to use when proposing a block during PrepareProposal. |






<a name="tendermint-types-BlockParams"></a>

### BlockParams
BlockParams contains limits on the block size.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_bytes | [int64](#int64) |  | Max block size, in bytes. Note: must be greater than 0 |
| max_gas | [int64](#int64) |  | Max gas per block. Note: must be greater or equal to -1 |






<a name="tendermint-types-ConsensusParams"></a>

### ConsensusParams
ConsensusParams contains consensus critical parameters that determine the
validity of blocks.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block | [BlockParams](#tendermint-types-BlockParams) |  |  |
| evidence | [EvidenceParams](#tendermint-types-EvidenceParams) |  |  |
| validator | [ValidatorParams](#tendermint-types-ValidatorParams) |  |  |
| version | [VersionParams](#tendermint-types-VersionParams) |  |  |
| abci | [ABCIParams](#tendermint-types-ABCIParams) |  |  |






<a name="tendermint-types-EvidenceParams"></a>

### EvidenceParams
EvidenceParams determine how we handle evidence of malfeasance.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_age_num_blocks | [int64](#int64) |  | Max age of evidence, in blocks.

The basic formula for calculating this is: MaxAgeDuration / {average block time}. |
| max_age_duration | [google.protobuf.Duration](#google-protobuf-Duration) |  | Max age of evidence, in time.

It should correspond with an app&#39;s &#34;unbonding period&#34; or other similar mechanism for handling [Nothing-At-Stake attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed). |
| max_bytes | [int64](#int64) |  | This sets the maximum size of total evidence in bytes that can be committed in a single block. and should fall comfortably under the max block bytes. Default is 1048576 or 1MB |






<a name="tendermint-types-HashedParams"></a>

### HashedParams
HashedParams is a subset of ConsensusParams.

It is hashed into the Header.ConsensusHash.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_max_bytes | [int64](#int64) |  |  |
| block_max_gas | [int64](#int64) |  |  |






<a name="tendermint-types-ValidatorParams"></a>

### ValidatorParams
ValidatorParams restrict the public key types validators can use.
NOTE: uses ABCI pubkey naming, not Amino names.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pub_key_types | [string](#string) | repeated |  |






<a name="tendermint-types-VersionParams"></a>

### VersionParams
VersionParams contains the ABCI application version.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app | [uint64](#uint64) |  |  |





 

 

 

 



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

