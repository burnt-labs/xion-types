# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/tx/v1beta1/tx.proto](#cosmos_tx_v1beta1_tx-proto)
    - [AuthInfo](#cosmos-tx-v1beta1-AuthInfo)
    - [AuxSignerData](#cosmos-tx-v1beta1-AuxSignerData)
    - [Fee](#cosmos-tx-v1beta1-Fee)
    - [ModeInfo](#cosmos-tx-v1beta1-ModeInfo)
    - [ModeInfo.Multi](#cosmos-tx-v1beta1-ModeInfo-Multi)
    - [ModeInfo.Single](#cosmos-tx-v1beta1-ModeInfo-Single)
    - [SignDoc](#cosmos-tx-v1beta1-SignDoc)
    - [SignDocDirectAux](#cosmos-tx-v1beta1-SignDocDirectAux)
    - [SignerInfo](#cosmos-tx-v1beta1-SignerInfo)
    - [Tip](#cosmos-tx-v1beta1-Tip)
    - [Tx](#cosmos-tx-v1beta1-Tx)
    - [TxBody](#cosmos-tx-v1beta1-TxBody)
    - [TxRaw](#cosmos-tx-v1beta1-TxRaw)
  
- [cosmos/tx/v1beta1/service.proto](#cosmos_tx_v1beta1_service-proto)
    - [BroadcastTxRequest](#cosmos-tx-v1beta1-BroadcastTxRequest)
    - [BroadcastTxResponse](#cosmos-tx-v1beta1-BroadcastTxResponse)
    - [GetBlockWithTxsRequest](#cosmos-tx-v1beta1-GetBlockWithTxsRequest)
    - [GetBlockWithTxsResponse](#cosmos-tx-v1beta1-GetBlockWithTxsResponse)
    - [GetTxRequest](#cosmos-tx-v1beta1-GetTxRequest)
    - [GetTxResponse](#cosmos-tx-v1beta1-GetTxResponse)
    - [GetTxsEventRequest](#cosmos-tx-v1beta1-GetTxsEventRequest)
    - [GetTxsEventResponse](#cosmos-tx-v1beta1-GetTxsEventResponse)
    - [SimulateRequest](#cosmos-tx-v1beta1-SimulateRequest)
    - [SimulateResponse](#cosmos-tx-v1beta1-SimulateResponse)
    - [TxDecodeAminoRequest](#cosmos-tx-v1beta1-TxDecodeAminoRequest)
    - [TxDecodeAminoResponse](#cosmos-tx-v1beta1-TxDecodeAminoResponse)
    - [TxDecodeRequest](#cosmos-tx-v1beta1-TxDecodeRequest)
    - [TxDecodeResponse](#cosmos-tx-v1beta1-TxDecodeResponse)
    - [TxEncodeAminoRequest](#cosmos-tx-v1beta1-TxEncodeAminoRequest)
    - [TxEncodeAminoResponse](#cosmos-tx-v1beta1-TxEncodeAminoResponse)
    - [TxEncodeRequest](#cosmos-tx-v1beta1-TxEncodeRequest)
    - [TxEncodeResponse](#cosmos-tx-v1beta1-TxEncodeResponse)
  
    - [BroadcastMode](#cosmos-tx-v1beta1-BroadcastMode)
    - [OrderBy](#cosmos-tx-v1beta1-OrderBy)
  
    - [Service](#cosmos-tx-v1beta1-Service)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_tx_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/tx/v1beta1/tx.proto



<a name="cosmos-tx-v1beta1-AuthInfo"></a>

### AuthInfo
AuthInfo describes the fee and signer modes that are used to sign a
transaction.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer_infos | [SignerInfo](#cosmos-tx-v1beta1-SignerInfo) | repeated | signer_infos defines the signing modes for the required signers. The number and order of elements must match the required signers from TxBody&#39;s messages. The first element is the primary signer and the one which pays the fee. |
| fee | [Fee](#cosmos-tx-v1beta1-Fee) |  | Fee is the fee and gas limit for the transaction. The first signer is the primary signer and the one which pays the fee. The fee can be calculated based on the cost of evaluating the body and doing signature verification of the signers. This can be estimated via simulation. |
| tip | [Tip](#cosmos-tx-v1beta1-Tip) |  | **Deprecated.** Tip is the optional tip used for transactions fees paid in another denom.

This field is ignored if the chain didn&#39;t enable tips, i.e. didn&#39;t add the `TipDecorator` in its posthandler. |






<a name="cosmos-tx-v1beta1-AuxSignerData"></a>

### AuxSignerData
AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
tipper) builds and sends to the fee payer (who will build and broadcast the
actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
by the node if sent directly as-is.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the bech32-encoded address of the auxiliary signer. If using AuxSignerData across different chains, the bech32 prefix of the target chain (where the final transaction is broadcasted) should be used. |
| sign_doc | [SignDocDirectAux](#cosmos-tx-v1beta1-SignDocDirectAux) |  | sign_doc is the SIGN_MODE_DIRECT_AUX sign doc that the auxiliary signer signs. Note: we use the same sign doc even if we&#39;re signing with LEGACY_AMINO_JSON. |
| mode | [cosmos.tx.signing.v1beta1.SignMode](#cosmos-tx-signing-v1beta1-SignMode) |  | mode is the signing mode of the single signer. |
| sig | [bytes](#bytes) |  | sig is the signature of the sign doc. |






<a name="cosmos-tx-v1beta1-Fee"></a>

### Fee
Fee includes the amount of coins paid in fees and the maximum
gas to be used by the transaction. The ratio yields an effective &#34;gasprice&#34;,
which must be above some miminum to be accepted into the mempool.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | amount is the amount of coins to be paid as a fee |
| gas_limit | [uint64](#uint64) |  | gas_limit is the maximum gas that can be used in transaction processing before an out of gas error occurs |
| payer | [string](#string) |  | if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees. the payer must be a tx signer (and thus have signed this field in AuthInfo). setting this field does *not* change the ordering of required signers for the transaction. |
| granter | [string](#string) |  | if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used to pay fees instead of the fee payer&#39;s own balance. If an appropriate fee grant does not exist or the chain does not support fee grants, this will fail |






<a name="cosmos-tx-v1beta1-ModeInfo"></a>

### ModeInfo
ModeInfo describes the signing mode of a single or nested multisig signer.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| single | [ModeInfo.Single](#cosmos-tx-v1beta1-ModeInfo-Single) |  | single represents a single signer |
| multi | [ModeInfo.Multi](#cosmos-tx-v1beta1-ModeInfo-Multi) |  | multi represents a nested multisig signer |






<a name="cosmos-tx-v1beta1-ModeInfo-Multi"></a>

### ModeInfo.Multi
Multi is the mode info for a multisig public key


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bitarray | [cosmos.crypto.multisig.v1beta1.CompactBitArray](#cosmos-crypto-multisig-v1beta1-CompactBitArray) |  | bitarray specifies which keys within the multisig are signing |
| mode_infos | [ModeInfo](#cosmos-tx-v1beta1-ModeInfo) | repeated | mode_infos is the corresponding modes of the signers of the multisig which could include nested multisig public keys |






<a name="cosmos-tx-v1beta1-ModeInfo-Single"></a>

### ModeInfo.Single
Single is the mode info for a single signer. It is structured as a message
to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
future


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mode | [cosmos.tx.signing.v1beta1.SignMode](#cosmos-tx-signing-v1beta1-SignMode) |  | mode is the signing mode of the single signer |






<a name="cosmos-tx-v1beta1-SignDoc"></a>

### SignDoc
SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| body_bytes | [bytes](#bytes) |  | body_bytes is protobuf serialization of a TxBody that matches the representation in TxRaw. |
| auth_info_bytes | [bytes](#bytes) |  | auth_info_bytes is a protobuf serialization of an AuthInfo that matches the representation in TxRaw. |
| chain_id | [string](#string) |  | chain_id is the unique identifier of the chain this transaction targets. It prevents signed transactions from being used on another chain by an attacker |
| account_number | [uint64](#uint64) |  | account_number is the account number of the account in state |






<a name="cosmos-tx-v1beta1-SignDocDirectAux"></a>

### SignDocDirectAux
SignDocDirectAux is the type used for generating sign bytes for
SIGN_MODE_DIRECT_AUX.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| body_bytes | [bytes](#bytes) |  | body_bytes is protobuf serialization of a TxBody that matches the representation in TxRaw. |
| public_key | [google.protobuf.Any](#google-protobuf-Any) |  | public_key is the public key of the signing account. |
| chain_id | [string](#string) |  | chain_id is the identifier of the chain this transaction targets. It prevents signed transactions from being used on another chain by an attacker. |
| account_number | [uint64](#uint64) |  | account_number is the account number of the account in state. |
| sequence | [uint64](#uint64) |  | sequence is the sequence number of the signing account. |
| tip | [Tip](#cosmos-tx-v1beta1-Tip) |  | **Deprecated.** tips have been depreacted and should not be used |






<a name="cosmos-tx-v1beta1-SignerInfo"></a>

### SignerInfo
SignerInfo describes the public key and signing mode of a single top-level
signer.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| public_key | [google.protobuf.Any](#google-protobuf-Any) |  | public_key is the public key of the signer. It is optional for accounts that already exist in state. If unset, the verifier can use the required \ signer address for this position and lookup the public key. |
| mode_info | [ModeInfo](#cosmos-tx-v1beta1-ModeInfo) |  | mode_info describes the signing mode of the signer and is a nested structure to support nested multisig pubkey&#39;s |
| sequence | [uint64](#uint64) |  | sequence is the sequence of the account, which describes the number of committed transactions signed by a given address. It is used to prevent replay attacks. |






<a name="cosmos-tx-v1beta1-Tip"></a>

### Tip
Tip is the tip used for meta-transactions.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | amount is the amount of the tip |
| tipper | [string](#string) |  | tipper is the address of the account paying for the tip |






<a name="cosmos-tx-v1beta1-Tx"></a>

### Tx
Tx is the standard type used for broadcasting transactions.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| body | [TxBody](#cosmos-tx-v1beta1-TxBody) |  | body is the processable content of the transaction |
| auth_info | [AuthInfo](#cosmos-tx-v1beta1-AuthInfo) |  | auth_info is the authorization related content of the transaction, specifically signers, signer modes and fee |
| signatures | [bytes](#bytes) | repeated | signatures is a list of signatures that matches the length and order of AuthInfo&#39;s signer_infos to allow connecting signature meta information like public key and signing mode by position. |






<a name="cosmos-tx-v1beta1-TxBody"></a>

### TxBody
TxBody is the body of a transaction that all signers sign over.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messages | [google.protobuf.Any](#google-protobuf-Any) | repeated | messages is a list of messages to be executed. The required signers of those messages define the number and order of elements in AuthInfo&#39;s signer_infos and Tx&#39;s signatures. Each required signer address is added to the list only the first time it occurs. By convention, the first required signer (usually from the first message) is referred to as the primary signer and pays the fee for the whole transaction. |
| memo | [string](#string) |  | memo is any arbitrary note/comment to be added to the transaction. WARNING: in clients, any publicly exposed text should not be called memo, but should be called `note` instead (see https://github.com/cosmos/cosmos-sdk/issues/9122). |
| timeout_height | [uint64](#uint64) |  | timeout_height is the block height after which this transaction will not be processed by the chain. |
| unordered | [bool](#bool) |  | unordered, when set to true, indicates that the transaction signer(s) intend for the transaction to be evaluated and executed in an un-ordered fashion. Specifically, the account&#39;s nonce will NOT be checked or incremented, which allows for fire-and-forget as well as concurrent transaction execution.

Note, when set to true, the existing &#39;timeout_timestamp&#39; value must be set and will be used to correspond to a timestamp in which the transaction is deemed valid.

When true, the sequence value MUST be 0, and any transaction with unordered=true and a non-zero sequence value will be rejected. External services that make assumptions about sequence values may need to be updated because of this. |
| timeout_timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | timeout_timestamp is the block time after which this transaction will not be processed by the chain.

Note, if unordered=true this value MUST be set and will act as a short-lived TTL in which the transaction is deemed valid and kept in memory to prevent duplicates. |
| extension_options | [google.protobuf.Any](#google-protobuf-Any) | repeated | extension_options are arbitrary options that can be added by chains when the default options are not sufficient. If any of these are present and can&#39;t be handled, the transaction will be rejected |
| non_critical_extension_options | [google.protobuf.Any](#google-protobuf-Any) | repeated | extension_options are arbitrary options that can be added by chains when the default options are not sufficient. If any of these are present and can&#39;t be handled, they will be ignored |






<a name="cosmos-tx-v1beta1-TxRaw"></a>

### TxRaw
TxRaw is a variant of Tx that pins the signer&#39;s exact binary representation
of body and auth_info. This is used for signing, broadcasting and
verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
the hash `sha256(serialize(tx: TxRaw))` becomes the &#34;txhash&#34;, commonly used
as the transaction ID.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| body_bytes | [bytes](#bytes) |  | body_bytes is a protobuf serialization of a TxBody that matches the representation in SignDoc. |
| auth_info_bytes | [bytes](#bytes) |  | auth_info_bytes is a protobuf serialization of an AuthInfo that matches the representation in SignDoc. |
| signatures | [bytes](#bytes) | repeated | signatures is a list of signatures that matches the length and order of AuthInfo&#39;s signer_infos to allow connecting signature meta information like public key and signing mode by position. |





 

 

 

 



<a name="cosmos_tx_v1beta1_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/tx/v1beta1/service.proto



<a name="cosmos-tx-v1beta1-BroadcastTxRequest"></a>

### BroadcastTxRequest
BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx_bytes | [bytes](#bytes) |  | tx_bytes is the raw transaction. |
| mode | [BroadcastMode](#cosmos-tx-v1beta1-BroadcastMode) |  |  |






<a name="cosmos-tx-v1beta1-BroadcastTxResponse"></a>

### BroadcastTxResponse
BroadcastTxResponse is the response type for the
Service.BroadcastTx method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx_response | [cosmos.base.abci.v1beta1.TxResponse](#cosmos-base-abci-v1beta1-TxResponse) |  | tx_response is the queried TxResponses. |






<a name="cosmos-tx-v1beta1-GetBlockWithTxsRequest"></a>

### GetBlockWithTxsRequest
GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  | height is the height of the block to query. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines a pagination for the request. |






<a name="cosmos-tx-v1beta1-GetBlockWithTxsResponse"></a>

### GetBlockWithTxsResponse
GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| txs | [Tx](#cosmos-tx-v1beta1-Tx) | repeated | txs are the transactions in the block. |
| block_id | [tendermint.types.BlockID](#tendermint-types-BlockID) |  |  |
| block | [tendermint.types.Block](#tendermint-types-Block) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines a pagination for the response. |






<a name="cosmos-tx-v1beta1-GetTxRequest"></a>

### GetTxRequest
GetTxRequest is the request type for the Service.GetTx
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [string](#string) |  | hash is the tx hash to query, encoded as a hex string. |






<a name="cosmos-tx-v1beta1-GetTxResponse"></a>

### GetTxResponse
GetTxResponse is the response type for the Service.GetTx method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx | [Tx](#cosmos-tx-v1beta1-Tx) |  | tx is the queried transaction. |
| tx_response | [cosmos.base.abci.v1beta1.TxResponse](#cosmos-base-abci-v1beta1-TxResponse) |  | tx_response is the queried TxResponses. |






<a name="cosmos-tx-v1beta1-GetTxsEventRequest"></a>

### GetTxsEventRequest
GetTxsEventRequest is the request type for the Service.TxsByEvents
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| events | [string](#string) | repeated | **Deprecated.** events is the list of transaction event type. Deprecated post v0.47.x: use query instead, which should contain a valid events query. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | **Deprecated.** pagination defines a pagination for the request. Deprecated post v0.46.x: use page and limit instead. |
| order_by | [OrderBy](#cosmos-tx-v1beta1-OrderBy) |  |  |
| page | [uint64](#uint64) |  | page is the page number to query, starts at 1. If not provided, will default to first page. |
| limit | [uint64](#uint64) |  | limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app. |
| query | [string](#string) |  | query defines the transaction event query that is proxied to Tendermint&#39;s TxSearch RPC method. The query must be valid. |






<a name="cosmos-tx-v1beta1-GetTxsEventResponse"></a>

### GetTxsEventResponse
GetTxsEventResponse is the response type for the Service.TxsByEvents
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| txs | [Tx](#cosmos-tx-v1beta1-Tx) | repeated | txs is the list of queried transactions. |
| tx_responses | [cosmos.base.abci.v1beta1.TxResponse](#cosmos-base-abci-v1beta1-TxResponse) | repeated | tx_responses is the list of queried TxResponses. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | **Deprecated.** pagination defines a pagination for the response. Deprecated post v0.46.x: use total instead. |
| total | [uint64](#uint64) |  | total is total number of results available |






<a name="cosmos-tx-v1beta1-SimulateRequest"></a>

### SimulateRequest
SimulateRequest is the request type for the Service.Simulate
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx | [Tx](#cosmos-tx-v1beta1-Tx) |  | **Deprecated.** tx is the transaction to simulate. Deprecated. Send raw tx bytes instead. |
| tx_bytes | [bytes](#bytes) |  | tx_bytes is the raw transaction. |






<a name="cosmos-tx-v1beta1-SimulateResponse"></a>

### SimulateResponse
SimulateResponse is the response type for the
Service.SimulateRPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| gas_info | [cosmos.base.abci.v1beta1.GasInfo](#cosmos-base-abci-v1beta1-GasInfo) |  | gas_info is the information about gas used in the simulation. |
| result | [cosmos.base.abci.v1beta1.Result](#cosmos-base-abci-v1beta1-Result) |  | result is the result of the simulation. |






<a name="cosmos-tx-v1beta1-TxDecodeAminoRequest"></a>

### TxDecodeAminoRequest
TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amino_binary | [bytes](#bytes) |  |  |






<a name="cosmos-tx-v1beta1-TxDecodeAminoResponse"></a>

### TxDecodeAminoResponse
TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amino_json | [string](#string) |  |  |






<a name="cosmos-tx-v1beta1-TxDecodeRequest"></a>

### TxDecodeRequest
TxDecodeRequest is the request type for the Service.TxDecode
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx_bytes | [bytes](#bytes) |  | tx_bytes is the raw transaction. |






<a name="cosmos-tx-v1beta1-TxDecodeResponse"></a>

### TxDecodeResponse
TxDecodeResponse is the response type for the
Service.TxDecode method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx | [Tx](#cosmos-tx-v1beta1-Tx) |  | tx is the decoded transaction. |






<a name="cosmos-tx-v1beta1-TxEncodeAminoRequest"></a>

### TxEncodeAminoRequest
TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amino_json | [string](#string) |  |  |






<a name="cosmos-tx-v1beta1-TxEncodeAminoResponse"></a>

### TxEncodeAminoResponse
TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amino_binary | [bytes](#bytes) |  |  |






<a name="cosmos-tx-v1beta1-TxEncodeRequest"></a>

### TxEncodeRequest
TxEncodeRequest is the request type for the Service.TxEncode
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx | [Tx](#cosmos-tx-v1beta1-Tx) |  | tx is the transaction to encode. |






<a name="cosmos-tx-v1beta1-TxEncodeResponse"></a>

### TxEncodeResponse
TxEncodeResponse is the response type for the
Service.TxEncode method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx_bytes | [bytes](#bytes) |  | tx_bytes is the encoded transaction bytes. |





 


<a name="cosmos-tx-v1beta1-BroadcastMode"></a>

### BroadcastMode
BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC
method.

| Name | Number | Description |
| ---- | ------ | ----------- |
| BROADCAST_MODE_UNSPECIFIED | 0 | zero-value for mode ordering |
| BROADCAST_MODE_BLOCK | 1 | DEPRECATED: use BROADCAST_MODE_SYNC instead, BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards. |
| BROADCAST_MODE_SYNC | 2 | BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for a CheckTx execution response only. |
| BROADCAST_MODE_ASYNC | 3 | BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns immediately. |



<a name="cosmos-tx-v1beta1-OrderBy"></a>

### OrderBy
OrderBy defines the sorting order

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_BY_UNSPECIFIED | 0 | ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. |
| ORDER_BY_ASC | 1 | ORDER_BY_ASC defines ascending order |
| ORDER_BY_DESC | 2 | ORDER_BY_DESC defines descending order |


 

 


<a name="cosmos-tx-v1beta1-Service"></a>

### Service
Service defines a gRPC service for interacting with transactions.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Simulate | [SimulateRequest](#cosmos-tx-v1beta1-SimulateRequest) | [SimulateResponse](#cosmos-tx-v1beta1-SimulateResponse) | Simulate simulates executing a transaction for estimating gas usage. |
| GetTx | [GetTxRequest](#cosmos-tx-v1beta1-GetTxRequest) | [GetTxResponse](#cosmos-tx-v1beta1-GetTxResponse) | GetTx fetches a tx by hash. |
| BroadcastTx | [BroadcastTxRequest](#cosmos-tx-v1beta1-BroadcastTxRequest) | [BroadcastTxResponse](#cosmos-tx-v1beta1-BroadcastTxResponse) | BroadcastTx broadcast transaction. |
| GetTxsEvent | [GetTxsEventRequest](#cosmos-tx-v1beta1-GetTxsEventRequest) | [GetTxsEventResponse](#cosmos-tx-v1beta1-GetTxsEventResponse) | GetTxsEvent fetches txs by event. |
| GetBlockWithTxs | [GetBlockWithTxsRequest](#cosmos-tx-v1beta1-GetBlockWithTxsRequest) | [GetBlockWithTxsResponse](#cosmos-tx-v1beta1-GetBlockWithTxsResponse) | GetBlockWithTxs fetches a block with decoded txs. |
| TxDecode | [TxDecodeRequest](#cosmos-tx-v1beta1-TxDecodeRequest) | [TxDecodeResponse](#cosmos-tx-v1beta1-TxDecodeResponse) | TxDecode decodes the transaction. |
| TxEncode | [TxEncodeRequest](#cosmos-tx-v1beta1-TxEncodeRequest) | [TxEncodeResponse](#cosmos-tx-v1beta1-TxEncodeResponse) | TxEncode encodes the transaction. |
| TxEncodeAmino | [TxEncodeAminoRequest](#cosmos-tx-v1beta1-TxEncodeAminoRequest) | [TxEncodeAminoResponse](#cosmos-tx-v1beta1-TxEncodeAminoResponse) | TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes. |
| TxDecodeAmino | [TxDecodeAminoRequest](#cosmos-tx-v1beta1-TxDecodeAminoRequest) | [TxDecodeAminoResponse](#cosmos-tx-v1beta1-TxDecodeAminoResponse) | TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON. |

 



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

