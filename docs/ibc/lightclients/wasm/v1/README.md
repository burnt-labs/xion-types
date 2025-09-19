# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ibc/lightclients/wasm/v1/genesis.proto](#ibc_lightclients_wasm_v1_genesis-proto)
    - [Contract](#ibc-lightclients-wasm-v1-Contract)
    - [GenesisState](#ibc-lightclients-wasm-v1-GenesisState)
  
- [ibc/lightclients/wasm/v1/query.proto](#ibc_lightclients_wasm_v1_query-proto)
    - [QueryChecksumsRequest](#ibc-lightclients-wasm-v1-QueryChecksumsRequest)
    - [QueryChecksumsResponse](#ibc-lightclients-wasm-v1-QueryChecksumsResponse)
    - [QueryCodeRequest](#ibc-lightclients-wasm-v1-QueryCodeRequest)
    - [QueryCodeResponse](#ibc-lightclients-wasm-v1-QueryCodeResponse)
  
    - [Query](#ibc-lightclients-wasm-v1-Query)
  
- [ibc/lightclients/wasm/v1/tx.proto](#ibc_lightclients_wasm_v1_tx-proto)
    - [MsgMigrateContract](#ibc-lightclients-wasm-v1-MsgMigrateContract)
    - [MsgMigrateContractResponse](#ibc-lightclients-wasm-v1-MsgMigrateContractResponse)
    - [MsgRemoveChecksum](#ibc-lightclients-wasm-v1-MsgRemoveChecksum)
    - [MsgRemoveChecksumResponse](#ibc-lightclients-wasm-v1-MsgRemoveChecksumResponse)
    - [MsgStoreCode](#ibc-lightclients-wasm-v1-MsgStoreCode)
    - [MsgStoreCodeResponse](#ibc-lightclients-wasm-v1-MsgStoreCodeResponse)
  
    - [Msg](#ibc-lightclients-wasm-v1-Msg)
  
- [ibc/lightclients/wasm/v1/wasm.proto](#ibc_lightclients_wasm_v1_wasm-proto)
    - [Checksums](#ibc-lightclients-wasm-v1-Checksums)
    - [ClientMessage](#ibc-lightclients-wasm-v1-ClientMessage)
    - [ClientState](#ibc-lightclients-wasm-v1-ClientState)
    - [ConsensusState](#ibc-lightclients-wasm-v1-ConsensusState)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ibc_lightclients_wasm_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/wasm/v1/genesis.proto



<a name="ibc-lightclients-wasm-v1-Contract"></a>

### Contract
Contract stores contract code


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_bytes | [bytes](#bytes) |  | contract byte code |






<a name="ibc-lightclients-wasm-v1-GenesisState"></a>

### GenesisState
GenesisState defines 08-wasm&#39;s keeper genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contracts | [Contract](#ibc-lightclients-wasm-v1-Contract) | repeated | uploaded light client wasm contracts |





 

 

 

 



<a name="ibc_lightclients_wasm_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/wasm/v1/query.proto



<a name="ibc-lightclients-wasm-v1-QueryChecksumsRequest"></a>

### QueryChecksumsRequest
QueryChecksumsRequest is the request type for the Query/Checksums RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="ibc-lightclients-wasm-v1-QueryChecksumsResponse"></a>

### QueryChecksumsResponse
QueryChecksumsResponse is the response type for the Query/Checksums RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| checksums | [string](#string) | repeated | checksums is a list of the hex encoded checksums of all wasm codes stored. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="ibc-lightclients-wasm-v1-QueryCodeRequest"></a>

### QueryCodeRequest
QueryCodeRequest is the request type for the Query/Code RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| checksum | [string](#string) |  | checksum is a hex encoded string of the code stored. |






<a name="ibc-lightclients-wasm-v1-QueryCodeResponse"></a>

### QueryCodeResponse
QueryCodeResponse is the response type for the Query/Code RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  |  |





 

 

 


<a name="ibc-lightclients-wasm-v1-Query"></a>

### Query
Query service for wasm module

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Checksums | [QueryChecksumsRequest](#ibc-lightclients-wasm-v1-QueryChecksumsRequest) | [QueryChecksumsResponse](#ibc-lightclients-wasm-v1-QueryChecksumsResponse) | Get all Wasm checksums |
| Code | [QueryCodeRequest](#ibc-lightclients-wasm-v1-QueryCodeRequest) | [QueryCodeResponse](#ibc-lightclients-wasm-v1-QueryCodeResponse) | Get Wasm code for given checksum |

 



<a name="ibc_lightclients_wasm_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/wasm/v1/tx.proto



<a name="ibc-lightclients-wasm-v1-MsgMigrateContract"></a>

### MsgMigrateContract
MsgMigrateContract defines the request type for the MigrateContract rpc.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| client_id | [string](#string) |  | the client id of the contract |
| checksum | [bytes](#bytes) |  | checksum is the sha256 hash of the new wasm byte code for the contract |
| msg | [bytes](#bytes) |  | the json encoded message to be passed to the contract on migration |






<a name="ibc-lightclients-wasm-v1-MsgMigrateContractResponse"></a>

### MsgMigrateContractResponse
MsgMigrateContractResponse defines the response type for the MigrateContract rpc






<a name="ibc-lightclients-wasm-v1-MsgRemoveChecksum"></a>

### MsgRemoveChecksum
MsgRemoveChecksum defines the request type for the MsgRemoveChecksum rpc.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| checksum | [bytes](#bytes) |  | checksum is the sha256 hash to be removed from the store |






<a name="ibc-lightclients-wasm-v1-MsgRemoveChecksumResponse"></a>

### MsgRemoveChecksumResponse
MsgStoreChecksumResponse defines the response type for the StoreCode rpc






<a name="ibc-lightclients-wasm-v1-MsgStoreCode"></a>

### MsgStoreCode
MsgStoreCode defines the request type for the StoreCode rpc.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| wasm_byte_code | [bytes](#bytes) |  | wasm byte code of light client contract. It can be raw or gzip compressed |






<a name="ibc-lightclients-wasm-v1-MsgStoreCodeResponse"></a>

### MsgStoreCodeResponse
MsgStoreCodeResponse defines the response type for the StoreCode rpc


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| checksum | [bytes](#bytes) |  | checksum is the sha256 hash of the stored code |





 

 

 


<a name="ibc-lightclients-wasm-v1-Msg"></a>

### Msg
Msg defines the ibc/08-wasm Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| StoreCode | [MsgStoreCode](#ibc-lightclients-wasm-v1-MsgStoreCode) | [MsgStoreCodeResponse](#ibc-lightclients-wasm-v1-MsgStoreCodeResponse) | StoreCode defines a rpc handler method for MsgStoreCode. |
| RemoveChecksum | [MsgRemoveChecksum](#ibc-lightclients-wasm-v1-MsgRemoveChecksum) | [MsgRemoveChecksumResponse](#ibc-lightclients-wasm-v1-MsgRemoveChecksumResponse) | RemoveChecksum defines a rpc handler method for MsgRemoveChecksum. |
| MigrateContract | [MsgMigrateContract](#ibc-lightclients-wasm-v1-MsgMigrateContract) | [MsgMigrateContractResponse](#ibc-lightclients-wasm-v1-MsgMigrateContractResponse) | MigrateContract defines a rpc handler method for MsgMigrateContract. |

 



<a name="ibc_lightclients_wasm_v1_wasm-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/wasm/v1/wasm.proto



<a name="ibc-lightclients-wasm-v1-Checksums"></a>

### Checksums
Checksums defines a list of all checksums that are stored

Deprecated: This message is deprecated in favor of storing the checksums
using a Collections.KeySet.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| checksums | [bytes](#bytes) | repeated |  |






<a name="ibc-lightclients-wasm-v1-ClientMessage"></a>

### ClientMessage
Wasm light client message (either header(s) or misbehaviour)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  |  |






<a name="ibc-lightclients-wasm-v1-ClientState"></a>

### ClientState
Wasm light client&#39;s Client state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | bytes encoding the client state of the underlying light client implemented as a Wasm contract. |
| checksum | [bytes](#bytes) |  |  |
| latest_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |






<a name="ibc-lightclients-wasm-v1-ConsensusState"></a>

### ConsensusState
Wasm light client&#39;s ConsensusState


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | bytes encoding the consensus state of the underlying light client implemented as a Wasm contract. |





 

 

 

 



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

