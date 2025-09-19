# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/lightclients/solomachine/v3/solomachine.proto](#ibc_lightclients_solomachine_v3_solomachine-proto)
    - [ClientState](#ibc-lightclients-solomachine-v3-ClientState)
    - [ConsensusState](#ibc-lightclients-solomachine-v3-ConsensusState)
    - [Header](#ibc-lightclients-solomachine-v3-Header)
    - [HeaderData](#ibc-lightclients-solomachine-v3-HeaderData)
    - [Misbehaviour](#ibc-lightclients-solomachine-v3-Misbehaviour)
    - [SignBytes](#ibc-lightclients-solomachine-v3-SignBytes)
    - [SignatureAndData](#ibc-lightclients-solomachine-v3-SignatureAndData)
    - [TimestampedSignatureData](#ibc-lightclients-solomachine-v3-TimestampedSignatureData)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_lightclients_solomachine_v3_solomachine-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/solomachine/v3/solomachine.proto



<a name="ibc-lightclients-solomachine-v3-ClientState"></a>

### ClientState
ClientState defines a solo machine client that tracks the current consensus
state and if the client is frozen.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | latest sequence of the client state |
| is_frozen | [bool](#bool) |  | frozen sequence of the solo machine |
| consensus_state | [ConsensusState](#ibc-lightclients-solomachine-v3-ConsensusState) |  |  |






<a name="ibc-lightclients-solomachine-v3-ConsensusState"></a>

### ConsensusState
ConsensusState defines a solo machine consensus state. The sequence of a
consensus state is contained in the &#34;height&#34; key used in storing the
consensus state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| public_key | [google.protobuf.Any](#google-protobuf-Any) |  | public key of the solo machine |
| diversifier | [string](#string) |  | diversifier allows the same public key to be reused across different solo machine clients (potentially on different chains) without being considered misbehaviour. |
| timestamp | [uint64](#uint64) |  |  |






<a name="ibc-lightclients-solomachine-v3-Header"></a>

### Header
Header defines a solo machine consensus header


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [uint64](#uint64) |  |  |
| signature | [bytes](#bytes) |  |  |
| new_public_key | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| new_diversifier | [string](#string) |  |  |






<a name="ibc-lightclients-solomachine-v3-HeaderData"></a>

### HeaderData
HeaderData returns the SignBytes data for update verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| new_pub_key | [google.protobuf.Any](#google-protobuf-Any) |  | header public key |
| new_diversifier | [string](#string) |  | header diversifier |






<a name="ibc-lightclients-solomachine-v3-Misbehaviour"></a>

### Misbehaviour
Misbehaviour defines misbehaviour for a solo machine which consists
of a sequence and two signatures over different messages at that sequence.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  |  |
| signature_one | [SignatureAndData](#ibc-lightclients-solomachine-v3-SignatureAndData) |  |  |
| signature_two | [SignatureAndData](#ibc-lightclients-solomachine-v3-SignatureAndData) |  |  |






<a name="ibc-lightclients-solomachine-v3-SignBytes"></a>

### SignBytes
SignBytes defines the signed bytes used for signature verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | the sequence number |
| timestamp | [uint64](#uint64) |  | the proof timestamp |
| diversifier | [string](#string) |  | the public key diversifier |
| path | [bytes](#bytes) |  | the standardised path bytes |
| data | [bytes](#bytes) |  | the marshaled data bytes |






<a name="ibc-lightclients-solomachine-v3-SignatureAndData"></a>

### SignatureAndData
SignatureAndData contains a signature and the data signed over to create that
signature.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signature | [bytes](#bytes) |  |  |
| path | [bytes](#bytes) |  |  |
| data | [bytes](#bytes) |  |  |
| timestamp | [uint64](#uint64) |  |  |






<a name="ibc-lightclients-solomachine-v3-TimestampedSignatureData"></a>

### TimestampedSignatureData
TimestampedSignatureData contains the signature data and the timestamp of the
signature.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signature_data | [bytes](#bytes) |  |  |
| timestamp | [uint64](#uint64) |  |  |





 

 

 

 



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

