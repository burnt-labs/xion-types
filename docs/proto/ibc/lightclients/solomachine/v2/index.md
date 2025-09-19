# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/lightclients/solomachine/v2/solomachine.proto](#ibc_lightclients_solomachine_v2_solomachine-proto)
    - [ChannelStateData](#ibc-lightclients-solomachine-v2-ChannelStateData)
    - [ClientState](#ibc-lightclients-solomachine-v2-ClientState)
    - [ClientStateData](#ibc-lightclients-solomachine-v2-ClientStateData)
    - [ConnectionStateData](#ibc-lightclients-solomachine-v2-ConnectionStateData)
    - [ConsensusState](#ibc-lightclients-solomachine-v2-ConsensusState)
    - [ConsensusStateData](#ibc-lightclients-solomachine-v2-ConsensusStateData)
    - [Header](#ibc-lightclients-solomachine-v2-Header)
    - [HeaderData](#ibc-lightclients-solomachine-v2-HeaderData)
    - [Misbehaviour](#ibc-lightclients-solomachine-v2-Misbehaviour)
    - [NextSequenceRecvData](#ibc-lightclients-solomachine-v2-NextSequenceRecvData)
    - [PacketAcknowledgementData](#ibc-lightclients-solomachine-v2-PacketAcknowledgementData)
    - [PacketCommitmentData](#ibc-lightclients-solomachine-v2-PacketCommitmentData)
    - [PacketReceiptAbsenceData](#ibc-lightclients-solomachine-v2-PacketReceiptAbsenceData)
    - [SignBytes](#ibc-lightclients-solomachine-v2-SignBytes)
    - [SignatureAndData](#ibc-lightclients-solomachine-v2-SignatureAndData)
    - [TimestampedSignatureData](#ibc-lightclients-solomachine-v2-TimestampedSignatureData)
  
    - [DataType](#ibc-lightclients-solomachine-v2-DataType)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_lightclients_solomachine_v2_solomachine-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/solomachine/v2/solomachine.proto



<a name="ibc-lightclients-solomachine-v2-ChannelStateData"></a>

### ChannelStateData
ChannelStateData returns the SignBytes data for channel state
verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| channel | [ibc.core.channel.v1.Channel](#ibc-core-channel-v1-Channel) |  |  |






<a name="ibc-lightclients-solomachine-v2-ClientState"></a>

### ClientState
ClientState defines a solo machine client that tracks the current consensus
state and if the client is frozen.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | latest sequence of the client state |
| is_frozen | [bool](#bool) |  | frozen sequence of the solo machine |
| consensus_state | [ConsensusState](#ibc-lightclients-solomachine-v2-ConsensusState) |  |  |
| allow_update_after_proposal | [bool](#bool) |  | when set to true, will allow governance to update a solo machine client. The client will be unfrozen if it is frozen. |






<a name="ibc-lightclients-solomachine-v2-ClientStateData"></a>

### ClientStateData
ClientStateData returns the SignBytes data for client state verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  |  |






<a name="ibc-lightclients-solomachine-v2-ConnectionStateData"></a>

### ConnectionStateData
ConnectionStateData returns the SignBytes data for connection state
verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| connection | [ibc.core.connection.v1.ConnectionEnd](#ibc-core-connection-v1-ConnectionEnd) |  |  |






<a name="ibc-lightclients-solomachine-v2-ConsensusState"></a>

### ConsensusState
ConsensusState defines a solo machine consensus state. The sequence of a
consensus state is contained in the &#34;height&#34; key used in storing the
consensus state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| public_key | [google.protobuf.Any](#google-protobuf-Any) |  | public key of the solo machine |
| diversifier | [string](#string) |  | diversifier allows the same public key to be reused across different solo machine clients (potentially on different chains) without being considered misbehaviour. |
| timestamp | [uint64](#uint64) |  |  |






<a name="ibc-lightclients-solomachine-v2-ConsensusStateData"></a>

### ConsensusStateData
ConsensusStateData returns the SignBytes data for consensus state
verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  |  |






<a name="ibc-lightclients-solomachine-v2-Header"></a>

### Header
Header defines a solo machine consensus header


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | sequence to update solo machine public key at |
| timestamp | [uint64](#uint64) |  |  |
| signature | [bytes](#bytes) |  |  |
| new_public_key | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| new_diversifier | [string](#string) |  |  |






<a name="ibc-lightclients-solomachine-v2-HeaderData"></a>

### HeaderData
HeaderData returns the SignBytes data for update verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| new_pub_key | [google.protobuf.Any](#google-protobuf-Any) |  | header public key |
| new_diversifier | [string](#string) |  | header diversifier |






<a name="ibc-lightclients-solomachine-v2-Misbehaviour"></a>

### Misbehaviour
Misbehaviour defines misbehaviour for a solo machine which consists
of a sequence and two signatures over different messages at that sequence.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  |  |
| sequence | [uint64](#uint64) |  |  |
| signature_one | [SignatureAndData](#ibc-lightclients-solomachine-v2-SignatureAndData) |  |  |
| signature_two | [SignatureAndData](#ibc-lightclients-solomachine-v2-SignatureAndData) |  |  |






<a name="ibc-lightclients-solomachine-v2-NextSequenceRecvData"></a>

### NextSequenceRecvData
NextSequenceRecvData returns the SignBytes data for verification of the next
sequence to be received.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| next_seq_recv | [uint64](#uint64) |  |  |






<a name="ibc-lightclients-solomachine-v2-PacketAcknowledgementData"></a>

### PacketAcknowledgementData
PacketAcknowledgementData returns the SignBytes data for acknowledgement
verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| acknowledgement | [bytes](#bytes) |  |  |






<a name="ibc-lightclients-solomachine-v2-PacketCommitmentData"></a>

### PacketCommitmentData
PacketCommitmentData returns the SignBytes data for packet commitment
verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| commitment | [bytes](#bytes) |  |  |






<a name="ibc-lightclients-solomachine-v2-PacketReceiptAbsenceData"></a>

### PacketReceiptAbsenceData
PacketReceiptAbsenceData returns the SignBytes data for
packet receipt absence verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |






<a name="ibc-lightclients-solomachine-v2-SignBytes"></a>

### SignBytes
SignBytes defines the signed bytes used for signature verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  |  |
| timestamp | [uint64](#uint64) |  |  |
| diversifier | [string](#string) |  |  |
| data_type | [DataType](#ibc-lightclients-solomachine-v2-DataType) |  | type of the data used |
| data | [bytes](#bytes) |  | marshaled data |






<a name="ibc-lightclients-solomachine-v2-SignatureAndData"></a>

### SignatureAndData
SignatureAndData contains a signature and the data signed over to create that
signature.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signature | [bytes](#bytes) |  |  |
| data_type | [DataType](#ibc-lightclients-solomachine-v2-DataType) |  |  |
| data | [bytes](#bytes) |  |  |
| timestamp | [uint64](#uint64) |  |  |






<a name="ibc-lightclients-solomachine-v2-TimestampedSignatureData"></a>

### TimestampedSignatureData
TimestampedSignatureData contains the signature data and the timestamp of the
signature.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signature_data | [bytes](#bytes) |  |  |
| timestamp | [uint64](#uint64) |  |  |





 


<a name="ibc-lightclients-solomachine-v2-DataType"></a>

### DataType
DataType defines the type of solo machine proof being created. This is done
to preserve uniqueness of different data sign byte encodings.

| Name | Number | Description |
| ---- | ------ | ----------- |
| DATA_TYPE_UNINITIALIZED_UNSPECIFIED | 0 | Default State |
| DATA_TYPE_CLIENT_STATE | 1 | Data type for client state verification |
| DATA_TYPE_CONSENSUS_STATE | 2 | Data type for consensus state verification |
| DATA_TYPE_CONNECTION_STATE | 3 | Data type for connection state verification |
| DATA_TYPE_CHANNEL_STATE | 4 | Data type for channel state verification |
| DATA_TYPE_PACKET_COMMITMENT | 5 | Data type for packet commitment verification |
| DATA_TYPE_PACKET_ACKNOWLEDGEMENT | 6 | Data type for packet acknowledgement verification |
| DATA_TYPE_PACKET_RECEIPT_ABSENCE | 7 | Data type for packet receipt absence verification |
| DATA_TYPE_NEXT_SEQUENCE_RECV | 8 | Data type for next sequence recv verification |
| DATA_TYPE_HEADER | 9 | Data type for header verification |


 

 

 



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

