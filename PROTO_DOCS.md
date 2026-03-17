# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [xion/zk/v1/params.proto](#xion_zk_v1_params-proto)
    - [Params](#xion-zk-v1-Params)
  
- [xion/zk/v1/query.proto](#xion_zk_v1_query-proto)
    - [ProofVerifyResponse](#xion-zk-v1-ProofVerifyResponse)
    - [QueryHasVKeyRequest](#xion-zk-v1-QueryHasVKeyRequest)
    - [QueryHasVKeyResponse](#xion-zk-v1-QueryHasVKeyResponse)
    - [QueryNextVKeyIDRequest](#xion-zk-v1-QueryNextVKeyIDRequest)
    - [QueryNextVKeyIDResponse](#xion-zk-v1-QueryNextVKeyIDResponse)
    - [QueryParamsRequest](#xion-zk-v1-QueryParamsRequest)
    - [QueryParamsResponse](#xion-zk-v1-QueryParamsResponse)
    - [QueryVKeyByNameRequest](#xion-zk-v1-QueryVKeyByNameRequest)
    - [QueryVKeyByNameResponse](#xion-zk-v1-QueryVKeyByNameResponse)
    - [QueryVKeyRequest](#xion-zk-v1-QueryVKeyRequest)
    - [QueryVKeyResponse](#xion-zk-v1-QueryVKeyResponse)
    - [QueryVKeysRequest](#xion-zk-v1-QueryVKeysRequest)
    - [QueryVKeysResponse](#xion-zk-v1-QueryVKeysResponse)
    - [QueryVerifyRequest](#xion-zk-v1-QueryVerifyRequest)
    - [SnarkJsProof](#xion-zk-v1-SnarkJsProof)
    - [VKey](#xion-zk-v1-VKey)
    - [VKeyWithID](#xion-zk-v1-VKeyWithID)
  
    - [Query](#xion-zk-v1-Query)
  
- [xion/zk/v1/genesis.proto](#xion_zk_v1_genesis-proto)
    - [GenesisState](#xion-zk-v1-GenesisState)
  
- [xion/zk/v1/tx.proto](#xion_zk_v1_tx-proto)
    - [MsgAddVKey](#xion-zk-v1-MsgAddVKey)
    - [MsgAddVKeyResponse](#xion-zk-v1-MsgAddVKeyResponse)
    - [MsgRemoveVKey](#xion-zk-v1-MsgRemoveVKey)
    - [MsgRemoveVKeyResponse](#xion-zk-v1-MsgRemoveVKeyResponse)
    - [MsgUpdateParams](#xion-zk-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#xion-zk-v1-MsgUpdateParamsResponse)
    - [MsgUpdateVKey](#xion-zk-v1-MsgUpdateVKey)
    - [MsgUpdateVKeyResponse](#xion-zk-v1-MsgUpdateVKeyResponse)
  
    - [Msg](#xion-zk-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="xion_zk_v1_params-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/zk/v1/params.proto



<a name="xion-zk-v1-Params"></a>

### Params
Params defines the zk module parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_vkey_size_bytes | [uint64](#uint64) |  | max_vkey_size_bytes caps the size of a verification key JSON payload. |
| upload_chunk_size | [uint64](#uint64) |  | upload_chunk_size defines the byte-size of each gas tier. |
| upload_chunk_gas | [uint64](#uint64) |  | upload_chunk_gas defines the gas cost per upload chunk. |





 

 

 

 



<a name="xion_zk_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/zk/v1/query.proto



<a name="xion-zk-v1-ProofVerifyResponse"></a>

### ProofVerifyResponse
ProofVerifyResponse defines the response structure for proof verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| verified | [bool](#bool) |  | verified indicates whether the proof verification was successful. |






<a name="xion-zk-v1-QueryHasVKeyRequest"></a>

### QueryHasVKeyRequest
QueryHasVKeyRequest is the request type for the Query/HasVKey RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the name of the verification key to check |






<a name="xion-zk-v1-QueryHasVKeyResponse"></a>

### QueryHasVKeyResponse
QueryHasVKeyResponse is the response type for the Query/HasVKey RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exists | [bool](#bool) |  | exists indicates whether the verification key exists |
| id | [uint64](#uint64) |  | id is the numeric identifier if the key exists (0 if not found) |






<a name="xion-zk-v1-QueryNextVKeyIDRequest"></a>

### QueryNextVKeyIDRequest
QueryNextVKeyIDRequest is the request type for the Query/NextVKeyID RPC
method






<a name="xion-zk-v1-QueryNextVKeyIDResponse"></a>

### QueryNextVKeyIDResponse
QueryNextVKeyIDResponse is the response type for the Query/NextVKeyID RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| next_id | [uint64](#uint64) |  | next_id is the next available verification key ID. |






<a name="xion-zk-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method






<a name="xion-zk-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#xion-zk-v1-Params) |  | params is the current zk module parameters |






<a name="xion-zk-v1-QueryVKeyByNameRequest"></a>

### QueryVKeyByNameRequest
QueryVKeyByNameRequest is the request type for the Query/VKeyByName RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the unique name of the verification key |






<a name="xion-zk-v1-QueryVKeyByNameResponse"></a>

### QueryVKeyByNameResponse
QueryVKeyByNameResponse is the response type for the Query/VKeyByName RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vkey | [VKey](#xion-zk-v1-VKey) |  | vkey is the verification key |
| id | [uint64](#uint64) |  | id is the numeric identifier of the verification key |






<a name="xion-zk-v1-QueryVKeyRequest"></a>

### QueryVKeyRequest
QueryVKeyRequest is the request type for the Query/VKey RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | id is the unique identifier of the verification key |






<a name="xion-zk-v1-QueryVKeyResponse"></a>

### QueryVKeyResponse
QueryVKeyResponse is the response type for the Query/VKey RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vkey | [VKey](#xion-zk-v1-VKey) |  | vkey is the verification key |






<a name="xion-zk-v1-QueryVKeysRequest"></a>

### QueryVKeysRequest
QueryVKeysRequest is the request type for the Query/VKeys RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request |






<a name="xion-zk-v1-QueryVKeysResponse"></a>

### QueryVKeysResponse
QueryVKeysResponse is the response type for the Query/VKeys RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vkeys | [VKeyWithID](#xion-zk-v1-VKeyWithID) | repeated | vkeys is the list of all verification keys with their IDs |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response |






<a name="xion-zk-v1-QueryVerifyRequest"></a>

### QueryVerifyRequest
QueryVerifyRequest is the request type for the Query/ProofVerify RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proof | [bytes](#bytes) |  | proof is the serialized ZK proof to verify. |
| public_inputs | [string](#string) | repeated | public_inputs is the list of public inputs for the proof. |
| vkey_name | [string](#string) |  | vkey_name is the name of the verification key to use. |
| vkey_id | [uint64](#uint64) |  | vkey_id is the ID of the verification key to use. |






<a name="xion-zk-v1-SnarkJsProof"></a>

### SnarkJsProof
SnarkJsProof represents a ZK-SNARK proof in SnarkJS format.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pi_a | [bytes](#bytes) | repeated | pi_a defines the first component of the proof. |
| pi_b | [bytes](#bytes) | repeated | pi_b defines the second component of the proof. |
| pi_c | [bytes](#bytes) | repeated | pi_c defines the third component of the proof. |






<a name="xion-zk-v1-VKey"></a>

### VKey
VKey represents a verification key for ZK proof verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key_bytes | [bytes](#bytes) |  | key_bytes is the raw bytes of the verification key. |
| name | [string](#string) |  | name is the unique human-readable identifier for this key. |
| description | [string](#string) |  | description provides additional context about the verification key. |
| circuit_hash | [string](#string) |  | circuit_hash is the hash of the circuit this key is associated with. |
| authority | [string](#string) |  | authority is the uploader of the verification key. |






<a name="xion-zk-v1-VKeyWithID"></a>

### VKeyWithID
VKeyWithID combines a verification key with its ID


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | id is the unique identifier |
| vkey | [VKey](#xion-zk-v1-VKey) |  | vkey is the verification key |





 

 

 


<a name="xion-zk-v1-Query"></a>

### Query
Query provides defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ProofVerify | [QueryVerifyRequest](#xion-zk-v1-QueryVerifyRequest) | [ProofVerifyResponse](#xion-zk-v1-ProofVerifyResponse) | ProofVerify verifies a zk proof for email authentication. |
| VKey | [QueryVKeyRequest](#xion-zk-v1-QueryVKeyRequest) | [QueryVKeyResponse](#xion-zk-v1-QueryVKeyResponse) | VKey queries a verification key by ID |
| VKeyByName | [QueryVKeyByNameRequest](#xion-zk-v1-QueryVKeyByNameRequest) | [QueryVKeyByNameResponse](#xion-zk-v1-QueryVKeyByNameResponse) | VKeyByName queries a verification key by name |
| VKeys | [QueryVKeysRequest](#xion-zk-v1-QueryVKeysRequest) | [QueryVKeysResponse](#xion-zk-v1-QueryVKeysResponse) | VKeys queries all verification keys with pagination |
| HasVKey | [QueryHasVKeyRequest](#xion-zk-v1-QueryHasVKeyRequest) | [QueryHasVKeyResponse](#xion-zk-v1-QueryHasVKeyResponse) | HasVKey checks if a verification key exists by name |
| NextVKeyID | [QueryNextVKeyIDRequest](#xion-zk-v1-QueryNextVKeyIDRequest) | [QueryNextVKeyIDResponse](#xion-zk-v1-QueryNextVKeyIDResponse) | NextVKeyID queries the next available verification key ID |
| Params | [QueryParamsRequest](#xion-zk-v1-QueryParamsRequest) | [QueryParamsResponse](#xion-zk-v1-QueryParamsResponse) | Params returns zk module parameters. |

 



<a name="xion_zk_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/zk/v1/genesis.proto



<a name="xion-zk-v1-GenesisState"></a>

### GenesisState
GenesisState defines the zk module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vkeys | [VKeyWithID](#xion-zk-v1-VKeyWithID) | repeated | vkeys is the list of all verification keys with their IDs |
| params | [Params](#xion-zk-v1-Params) |  | params defines the module parameters. |





 

 

 

 



<a name="xion_zk_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/zk/v1/tx.proto



<a name="xion-zk-v1-MsgAddVKey"></a>

### MsgAddVKey
MsgAddVKey is the message for adding a verification key


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (governance) |
| name | [string](#string) |  | name is the unique identifier for this verification key |
| description | [string](#string) |  | description provides context about this verification key |
| vkey_bytes | [bytes](#bytes) |  | vkey_json is the JSON representation of the verification key |






<a name="xion-zk-v1-MsgAddVKeyResponse"></a>

### MsgAddVKeyResponse
MsgAddVKeyResponse is the response for MsgAddVKey


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | id is the unique numeric identifier assigned to the vkey |






<a name="xion-zk-v1-MsgRemoveVKey"></a>

### MsgRemoveVKey
MsgRemoveVKey is the message for removing a verification key


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (governance) |
| name | [string](#string) |  | name is the identifier of the verification key to remove |






<a name="xion-zk-v1-MsgRemoveVKeyResponse"></a>

### MsgRemoveVKeyResponse
MsgRemoveVKeyResponse is the response for MsgRemoveVKey






<a name="xion-zk-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| params | [Params](#xion-zk-v1-Params) |  | params defines the parameters to update.

NOTE: All parameters must be supplied. |






<a name="xion-zk-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.






<a name="xion-zk-v1-MsgUpdateVKey"></a>

### MsgUpdateVKey
MsgUpdateVKey is the message for updating a verification key


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (governance) |
| name | [string](#string) |  | name is the identifier of the verification key to update |
| description | [string](#string) |  | description provides updated context |
| vkey_bytes | [bytes](#bytes) |  | vkey_json is the new JSON representation of the verification key |






<a name="xion-zk-v1-MsgUpdateVKeyResponse"></a>

### MsgUpdateVKeyResponse
MsgUpdateVKeyResponse is the response for MsgUpdateVKey





 

 

 


<a name="xion-zk-v1-Msg"></a>

### Msg
Msg defines the Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| AddVKey | [MsgAddVKey](#xion-zk-v1-MsgAddVKey) | [MsgAddVKeyResponse](#xion-zk-v1-MsgAddVKeyResponse) | AddVKey adds a new verification key |
| UpdateVKey | [MsgUpdateVKey](#xion-zk-v1-MsgUpdateVKey) | [MsgUpdateVKeyResponse](#xion-zk-v1-MsgUpdateVKeyResponse) | UpdateVKey updates an existing verification key |
| RemoveVKey | [MsgRemoveVKey](#xion-zk-v1-MsgRemoveVKey) | [MsgRemoveVKeyResponse](#xion-zk-v1-MsgRemoveVKeyResponse) | RemoveVKey removes a verification key |
| UpdateParams | [MsgUpdateParams](#xion-zk-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#xion-zk-v1-MsgUpdateParamsResponse) | UpdateParams updates zk module parameters via governance. |

 



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

