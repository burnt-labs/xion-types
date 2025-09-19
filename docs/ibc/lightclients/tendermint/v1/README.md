# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/lightclients/tendermint/v1/tendermint.proto](#ibc_lightclients_tendermint_v1_tendermint-proto)
    - [ClientState](#ibc-lightclients-tendermint-v1-ClientState)
    - [ConsensusState](#ibc-lightclients-tendermint-v1-ConsensusState)
    - [Fraction](#ibc-lightclients-tendermint-v1-Fraction)
    - [Header](#ibc-lightclients-tendermint-v1-Header)
    - [Misbehaviour](#ibc-lightclients-tendermint-v1-Misbehaviour)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_lightclients_tendermint_v1_tendermint-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/tendermint/v1/tendermint.proto



<a name="ibc-lightclients-tendermint-v1-ClientState"></a>

### ClientState
ClientState from Tendermint tracks the current validator set, latest height,
and a possible frozen height.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chain_id | [string](#string) |  |  |
| trust_level | [Fraction](#ibc-lightclients-tendermint-v1-Fraction) |  |  |
| trusting_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | duration of the period since the LatestTimestamp during which the submitted headers are valid for upgrade |
| unbonding_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | duration of the staking unbonding period |
| max_clock_drift | [google.protobuf.Duration](#google-protobuf-Duration) |  | defines how much new (untrusted) header&#39;s Time can drift into the future. |
| frozen_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | Block height when the client was frozen due to a misbehaviour |
| latest_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | Latest height the client was updated to |
| proof_specs | [cosmos.ics23.v1.ProofSpec](#cosmos-ics23-v1-ProofSpec) | repeated | Proof specifications used in verifying counterparty state |
| upgrade_path | [string](#string) | repeated | Path at which next upgraded client will be committed. Each element corresponds to the key for a single CommitmentProof in the chained proof. NOTE: ClientState must stored under `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using the default upgrade module, upgrade_path should be []string{&#34;upgrade&#34;, &#34;upgradedIBCState&#34;}` |
| allow_update_after_expiry | [bool](#bool) |  | **Deprecated.** allow_update_after_expiry is deprecated |
| allow_update_after_misbehaviour | [bool](#bool) |  | **Deprecated.** allow_update_after_misbehaviour is deprecated |






<a name="ibc-lightclients-tendermint-v1-ConsensusState"></a>

### ConsensusState
ConsensusState defines the consensus state from Tendermint.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | timestamp that corresponds to the block height in which the ConsensusState was stored. |
| root | [ibc.core.commitment.v1.MerkleRoot](#ibc-core-commitment-v1-MerkleRoot) |  | commitment root (i.e app hash) |
| next_validators_hash | [bytes](#bytes) |  |  |






<a name="ibc-lightclients-tendermint-v1-Fraction"></a>

### Fraction
Fraction defines the protobuf message type for tmmath.Fraction that only
supports positive values.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| numerator | [uint64](#uint64) |  |  |
| denominator | [uint64](#uint64) |  |  |






<a name="ibc-lightclients-tendermint-v1-Header"></a>

### Header
Header defines the Tendermint client consensus Header.
It encapsulates all the information necessary to update from a trusted
Tendermint ConsensusState. The inclusion of TrustedHeight and
TrustedValidators allows this update to process correctly, so long as the
ConsensusState for the TrustedHeight exists, this removes race conditions
among relayers The SignedHeader and ValidatorSet are the new untrusted update
fields for the client. The TrustedHeight is the height of a stored
ConsensusState on the client that will be used to verify the new untrusted
header. The Trusted ConsensusState must be within the unbonding period of
current time in order to correctly verify, and the TrustedValidators must
hash to TrustedConsensusState.NextValidatorsHash since that is the last
trusted validator set at the TrustedHeight.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signed_header | [tendermint.types.SignedHeader](#tendermint-types-SignedHeader) |  |  |
| validator_set | [tendermint.types.ValidatorSet](#tendermint-types-ValidatorSet) |  |  |
| trusted_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| trusted_validators | [tendermint.types.ValidatorSet](#tendermint-types-ValidatorSet) |  |  |






<a name="ibc-lightclients-tendermint-v1-Misbehaviour"></a>

### Misbehaviour
Misbehaviour is a wrapper over two conflicting Headers
that implements Misbehaviour interface expected by ICS-02


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | **Deprecated.** ClientID is deprecated |
| header_1 | [Header](#ibc-lightclients-tendermint-v1-Header) |  |  |
| header_2 | [Header](#ibc-lightclients-tendermint-v1-Header) |  |  |





 

 

 

 



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

