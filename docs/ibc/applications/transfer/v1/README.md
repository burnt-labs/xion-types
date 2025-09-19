# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/applications/transfer/v1/authz.proto](#ibc_applications_transfer_v1_authz-proto)
    - [Allocation](#ibc-applications-transfer-v1-Allocation)
    - [TransferAuthorization](#ibc-applications-transfer-v1-TransferAuthorization)
  
- [ibc/applications/transfer/v1/denomtrace.proto](#ibc_applications_transfer_v1_denomtrace-proto)
    - [DenomTrace](#ibc-applications-transfer-v1-DenomTrace)
  
- [ibc/applications/transfer/v1/transfer.proto](#ibc_applications_transfer_v1_transfer-proto)
    - [Params](#ibc-applications-transfer-v1-Params)
  
- [ibc/applications/transfer/v1/token.proto](#ibc_applications_transfer_v1_token-proto)
    - [Denom](#ibc-applications-transfer-v1-Denom)
    - [Hop](#ibc-applications-transfer-v1-Hop)
    - [Token](#ibc-applications-transfer-v1-Token)
  
- [ibc/applications/transfer/v1/genesis.proto](#ibc_applications_transfer_v1_genesis-proto)
    - [GenesisState](#ibc-applications-transfer-v1-GenesisState)
  
- [ibc/applications/transfer/v1/packet.proto](#ibc_applications_transfer_v1_packet-proto)
    - [FungibleTokenPacketData](#ibc-applications-transfer-v1-FungibleTokenPacketData)
  
- [ibc/applications/transfer/v1/query.proto](#ibc_applications_transfer_v1_query-proto)
    - [QueryDenomHashRequest](#ibc-applications-transfer-v1-QueryDenomHashRequest)
    - [QueryDenomHashResponse](#ibc-applications-transfer-v1-QueryDenomHashResponse)
    - [QueryDenomRequest](#ibc-applications-transfer-v1-QueryDenomRequest)
    - [QueryDenomResponse](#ibc-applications-transfer-v1-QueryDenomResponse)
    - [QueryDenomsRequest](#ibc-applications-transfer-v1-QueryDenomsRequest)
    - [QueryDenomsResponse](#ibc-applications-transfer-v1-QueryDenomsResponse)
    - [QueryEscrowAddressRequest](#ibc-applications-transfer-v1-QueryEscrowAddressRequest)
    - [QueryEscrowAddressResponse](#ibc-applications-transfer-v1-QueryEscrowAddressResponse)
    - [QueryParamsRequest](#ibc-applications-transfer-v1-QueryParamsRequest)
    - [QueryParamsResponse](#ibc-applications-transfer-v1-QueryParamsResponse)
    - [QueryTotalEscrowForDenomRequest](#ibc-applications-transfer-v1-QueryTotalEscrowForDenomRequest)
    - [QueryTotalEscrowForDenomResponse](#ibc-applications-transfer-v1-QueryTotalEscrowForDenomResponse)
  
    - [Query](#ibc-applications-transfer-v1-Query)
  
- [ibc/applications/transfer/v1/tx.proto](#ibc_applications_transfer_v1_tx-proto)
    - [MsgTransfer](#ibc-applications-transfer-v1-MsgTransfer)
    - [MsgTransferResponse](#ibc-applications-transfer-v1-MsgTransferResponse)
    - [MsgUpdateParams](#ibc-applications-transfer-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#ibc-applications-transfer-v1-MsgUpdateParamsResponse)
  
    - [Msg](#ibc-applications-transfer-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_applications_transfer_v1_authz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/authz.proto



<a name="ibc-applications-transfer-v1-Allocation"></a>

### Allocation
Allocation defines the spend limit for a particular port and channel


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source_port | [string](#string) |  | the port on which the packet will be sent |
| source_channel | [string](#string) |  | the channel by which the packet will be sent |
| spend_limit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | spend limitation on the channel |
| allow_list | [string](#string) | repeated | allow list of receivers, an empty allow list permits any receiver address |
| allowed_packet_data | [string](#string) | repeated | allow list of memo strings, an empty list prohibits all memo strings; a list only with &#34;*&#34; permits any memo string |






<a name="ibc-applications-transfer-v1-TransferAuthorization"></a>

### TransferAuthorization
TransferAuthorization allows the grantee to spend up to spend_limit coins from
the granter&#39;s account for ibc transfer on a specific channel


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allocations | [Allocation](#ibc-applications-transfer-v1-Allocation) | repeated | port and channel amounts |





 

 

 

 



<a name="ibc_applications_transfer_v1_denomtrace-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/denomtrace.proto



<a name="ibc-applications-transfer-v1-DenomTrace"></a>

### DenomTrace
DenomTrace contains the base denomination for ICS20 fungible tokens and the
source tracing information path.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [string](#string) |  | path defines the chain of port/channel identifiers used for tracing the source of the fungible token. |
| base_denom | [string](#string) |  | base denomination of the relayed fungible token. |





 

 

 

 



<a name="ibc_applications_transfer_v1_transfer-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/transfer.proto



<a name="ibc-applications-transfer-v1-Params"></a>

### Params
Params defines the set of IBC transfer parameters.
NOTE: To prevent a single token from being transferred, set the
TransfersEnabled parameter to true and then set the bank module&#39;s SendEnabled
parameter for the denomination to false.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| send_enabled | [bool](#bool) |  | send_enabled enables or disables all cross-chain token transfers from this chain. |
| receive_enabled | [bool](#bool) |  | receive_enabled enables or disables all cross-chain token transfers to this chain. |





 

 

 

 



<a name="ibc_applications_transfer_v1_token-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/token.proto



<a name="ibc-applications-transfer-v1-Denom"></a>

### Denom
Denom holds the base denom of a Token and a trace of the chains it was sent through.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base | [string](#string) |  | the base token denomination |
| trace | [Hop](#ibc-applications-transfer-v1-Hop) | repeated | the trace of the token |






<a name="ibc-applications-transfer-v1-Hop"></a>

### Hop
Hop defines a port ID, channel ID pair specifying a unique &#34;hop&#34; in a trace


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |






<a name="ibc-applications-transfer-v1-Token"></a>

### Token
Token defines a struct which represents a token to be transferred.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [Denom](#ibc-applications-transfer-v1-Denom) |  | the token denomination |
| amount | [string](#string) |  | the token amount to be transferred |





 

 

 

 



<a name="ibc_applications_transfer_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/genesis.proto



<a name="ibc-applications-transfer-v1-GenesisState"></a>

### GenesisState
GenesisState defines the ibc-transfer genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| denoms | [Denom](#ibc-applications-transfer-v1-Denom) | repeated |  |
| params | [Params](#ibc-applications-transfer-v1-Params) |  |  |
| total_escrowed | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | total_escrowed contains the total amount of tokens escrowed by the transfer module |





 

 

 

 



<a name="ibc_applications_transfer_v1_packet-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/packet.proto



<a name="ibc-applications-transfer-v1-FungibleTokenPacketData"></a>

### FungibleTokenPacketData
FungibleTokenPacketData defines a struct for the packet payload
See FungibleTokenPacketData spec:
https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | the token denomination to be transferred |
| amount | [string](#string) |  | the token amount to be transferred |
| sender | [string](#string) |  | the sender address |
| receiver | [string](#string) |  | the recipient address on the destination chain |
| memo | [string](#string) |  | optional memo |





 

 

 

 



<a name="ibc_applications_transfer_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/query.proto



<a name="ibc-applications-transfer-v1-QueryDenomHashRequest"></a>

### QueryDenomHashRequest
QueryDenomHashRequest is the request type for the Query/DenomHash RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| trace | [string](#string) |  | The denomination trace ([port_id]/[channel_id])&#43;/[denom] |






<a name="ibc-applications-transfer-v1-QueryDenomHashResponse"></a>

### QueryDenomHashResponse
QueryDenomHashResponse is the response type for the Query/DenomHash RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [string](#string) |  | hash (in hex format) of the denomination trace information. |






<a name="ibc-applications-transfer-v1-QueryDenomRequest"></a>

### QueryDenomRequest
QueryDenomRequest is the request type for the Query/Denom RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [string](#string) |  | hash (in hex format) or denom (full denom with ibc prefix) of the on chain denomination. |






<a name="ibc-applications-transfer-v1-QueryDenomResponse"></a>

### QueryDenomResponse
QueryDenomResponse is the response type for the Query/Denom RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [Denom](#ibc-applications-transfer-v1-Denom) |  | denom returns the requested denomination. |






<a name="ibc-applications-transfer-v1-QueryDenomsRequest"></a>

### QueryDenomsRequest
QueryDenomsRequest is the request type for the Query/Denoms RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="ibc-applications-transfer-v1-QueryDenomsResponse"></a>

### QueryDenomsResponse
QueryDenomsResponse is the response type for the Query/Denoms RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denoms | [Denom](#ibc-applications-transfer-v1-Denom) | repeated | denoms returns all denominations. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="ibc-applications-transfer-v1-QueryEscrowAddressRequest"></a>

### QueryEscrowAddressRequest
QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | unique port identifier |
| channel_id | [string](#string) |  | unique channel identifier |






<a name="ibc-applications-transfer-v1-QueryEscrowAddressResponse"></a>

### QueryEscrowAddressResponse
QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| escrow_address | [string](#string) |  | the escrow account address |






<a name="ibc-applications-transfer-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="ibc-applications-transfer-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#ibc-applications-transfer-v1-Params) |  | params defines the parameters of the module. |






<a name="ibc-applications-transfer-v1-QueryTotalEscrowForDenomRequest"></a>

### QueryTotalEscrowForDenomRequest
QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  |  |






<a name="ibc-applications-transfer-v1-QueryTotalEscrowForDenomResponse"></a>

### QueryTotalEscrowForDenomResponse
QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |





 

 

 


<a name="ibc-applications-transfer-v1-Query"></a>

### Query
Query provides defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#ibc-applications-transfer-v1-QueryParamsRequest) | [QueryParamsResponse](#ibc-applications-transfer-v1-QueryParamsResponse) | Params queries all parameters of the ibc-transfer module. |
| Denoms | [QueryDenomsRequest](#ibc-applications-transfer-v1-QueryDenomsRequest) | [QueryDenomsResponse](#ibc-applications-transfer-v1-QueryDenomsResponse) | Denoms queries all denominations |
| Denom | [QueryDenomRequest](#ibc-applications-transfer-v1-QueryDenomRequest) | [QueryDenomResponse](#ibc-applications-transfer-v1-QueryDenomResponse) | Denom queries a denomination |
| DenomHash | [QueryDenomHashRequest](#ibc-applications-transfer-v1-QueryDenomHashRequest) | [QueryDenomHashResponse](#ibc-applications-transfer-v1-QueryDenomHashResponse) | DenomHash queries a denomination hash information. |
| EscrowAddress | [QueryEscrowAddressRequest](#ibc-applications-transfer-v1-QueryEscrowAddressRequest) | [QueryEscrowAddressResponse](#ibc-applications-transfer-v1-QueryEscrowAddressResponse) | EscrowAddress returns the escrow address for a particular port and channel id. |
| TotalEscrowForDenom | [QueryTotalEscrowForDenomRequest](#ibc-applications-transfer-v1-QueryTotalEscrowForDenomRequest) | [QueryTotalEscrowForDenomResponse](#ibc-applications-transfer-v1-QueryTotalEscrowForDenomResponse) | TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. |

 



<a name="ibc_applications_transfer_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/tx.proto



<a name="ibc-applications-transfer-v1-MsgTransfer"></a>

### MsgTransfer
MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
ICS20 enabled chains. See ICS Spec here:
https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source_port | [string](#string) |  | the port on which the packet will be sent |
| source_channel | [string](#string) |  | the channel by which the packet will be sent |
| token | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | token to be transferred |
| sender | [string](#string) |  | the sender address |
| receiver | [string](#string) |  | the recipient address on the destination chain |
| timeout_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | Timeout height relative to the current block height. If you are sending with IBC v1 protocol, either timeout_height or timeout_timestamp must be set. If you are sending with IBC v2 protocol, timeout_timestamp must be set, and timeout_height must be omitted. |
| timeout_timestamp | [uint64](#uint64) |  | Timeout timestamp in absolute nanoseconds since unix epoch. If you are sending with IBC v1 protocol, either timeout_height or timeout_timestamp must be set. If you are sending with IBC v2 protocol, timeout_timestamp must be set. |
| memo | [string](#string) |  | optional memo |
| encoding | [string](#string) |  | optional encoding |






<a name="ibc-applications-transfer-v1-MsgTransferResponse"></a>

### MsgTransferResponse
MsgTransferResponse defines the Msg/Transfer response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | sequence number of the transfer packet sent |






<a name="ibc-applications-transfer-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| params | [Params](#ibc-applications-transfer-v1-Params) |  | params defines the transfer parameters to update.

NOTE: All parameters must be supplied. |






<a name="ibc-applications-transfer-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="ibc-applications-transfer-v1-Msg"></a>

### Msg
Msg defines the ibc/transfer Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Transfer | [MsgTransfer](#ibc-applications-transfer-v1-MsgTransfer) | [MsgTransferResponse](#ibc-applications-transfer-v1-MsgTransferResponse) | Transfer defines a rpc handler method for MsgTransfer. |
| UpdateParams | [MsgUpdateParams](#ibc-applications-transfer-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#ibc-applications-transfer-v1-MsgUpdateParamsResponse) | UpdateParams defines a rpc handler for MsgUpdateParams. |

 



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

