# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [packetforward/v1/genesis.proto](#packetforward_v1_genesis-proto)
    - [GenesisState](#packetforward-v1-GenesisState)
    - [GenesisState.InFlightPacketsEntry](#packetforward-v1-GenesisState-InFlightPacketsEntry)
    - [InFlightPacket](#packetforward-v1-InFlightPacket)
  
- [Scalar Value Types](#scalar-value-types)



<a name="packetforward_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## packetforward/v1/genesis.proto



<a name="packetforward-v1-GenesisState"></a>

### GenesisState
GenesisState defines the packetforward genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| in_flight_packets | [GenesisState.InFlightPacketsEntry](#packetforward-v1-GenesisState-InFlightPacketsEntry) | repeated | key - information about forwarded packet: src_channel (parsedReceiver.Channel), src_port (parsedReceiver.Port), sequence value - information about original packet for refunding if necessary: retries, srcPacketSender, srcPacket.DestinationChannel, srcPacket.DestinationPort |






<a name="packetforward-v1-GenesisState-InFlightPacketsEntry"></a>

### GenesisState.InFlightPacketsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [InFlightPacket](#packetforward-v1-InFlightPacket) |  |  |






<a name="packetforward-v1-InFlightPacket"></a>

### InFlightPacket
InFlightPacket contains information about original packet for
writing the acknowledgement and refunding if necessary.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| original_sender_address | [string](#string) |  |  |
| refund_channel_id | [string](#string) |  |  |
| refund_port_id | [string](#string) |  |  |
| packet_src_channel_id | [string](#string) |  |  |
| packet_src_port_id | [string](#string) |  |  |
| packet_timeout_timestamp | [uint64](#uint64) |  |  |
| packet_timeout_height | [string](#string) |  |  |
| packet_data | [bytes](#bytes) |  |  |
| refund_sequence | [uint64](#uint64) |  |  |
| retries_remaining | [int32](#int32) |  |  |
| timeout | [uint64](#uint64) |  |  |
| nonrefundable | [bool](#bool) |  |  |





 

 

 

 



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

