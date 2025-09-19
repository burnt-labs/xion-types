# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/base/tendermint/v1beta1/types.proto](#cosmos_base_tendermint_v1beta1_types-proto)
    - [Block](#cosmos-base-tendermint-v1beta1-Block)
    - [Header](#cosmos-base-tendermint-v1beta1-Header)
  
- [cosmos/base/tendermint/v1beta1/query.proto](#cosmos_base_tendermint_v1beta1_query-proto)
    - [ABCIQueryRequest](#cosmos-base-tendermint-v1beta1-ABCIQueryRequest)
    - [ABCIQueryResponse](#cosmos-base-tendermint-v1beta1-ABCIQueryResponse)
    - [GetBlockByHeightRequest](#cosmos-base-tendermint-v1beta1-GetBlockByHeightRequest)
    - [GetBlockByHeightResponse](#cosmos-base-tendermint-v1beta1-GetBlockByHeightResponse)
    - [GetLatestBlockRequest](#cosmos-base-tendermint-v1beta1-GetLatestBlockRequest)
    - [GetLatestBlockResponse](#cosmos-base-tendermint-v1beta1-GetLatestBlockResponse)
    - [GetLatestValidatorSetRequest](#cosmos-base-tendermint-v1beta1-GetLatestValidatorSetRequest)
    - [GetLatestValidatorSetResponse](#cosmos-base-tendermint-v1beta1-GetLatestValidatorSetResponse)
    - [GetNodeInfoRequest](#cosmos-base-tendermint-v1beta1-GetNodeInfoRequest)
    - [GetNodeInfoResponse](#cosmos-base-tendermint-v1beta1-GetNodeInfoResponse)
    - [GetSyncingRequest](#cosmos-base-tendermint-v1beta1-GetSyncingRequest)
    - [GetSyncingResponse](#cosmos-base-tendermint-v1beta1-GetSyncingResponse)
    - [GetValidatorSetByHeightRequest](#cosmos-base-tendermint-v1beta1-GetValidatorSetByHeightRequest)
    - [GetValidatorSetByHeightResponse](#cosmos-base-tendermint-v1beta1-GetValidatorSetByHeightResponse)
    - [Module](#cosmos-base-tendermint-v1beta1-Module)
    - [ProofOp](#cosmos-base-tendermint-v1beta1-ProofOp)
    - [ProofOps](#cosmos-base-tendermint-v1beta1-ProofOps)
    - [Validator](#cosmos-base-tendermint-v1beta1-Validator)
    - [VersionInfo](#cosmos-base-tendermint-v1beta1-VersionInfo)
  
    - [Service](#cosmos-base-tendermint-v1beta1-Service)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_base_tendermint_v1beta1_types-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/tendermint/v1beta1/types.proto



<a name="cosmos-base-tendermint-v1beta1-Block"></a>

### Block
Block is tendermint type Block, with the Header proposer address
field converted to bech32 string.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [Header](#cosmos-base-tendermint-v1beta1-Header) |  |  |
| data | [tendermint.types.Data](#tendermint-types-Data) |  |  |
| evidence | [tendermint.types.EvidenceList](#tendermint-types-EvidenceList) |  |  |
| last_commit | [tendermint.types.Commit](#tendermint-types-Commit) |  |  |






<a name="cosmos-base-tendermint-v1beta1-Header"></a>

### Header
Header defines the structure of a Tendermint block header.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [tendermint.version.Consensus](#tendermint-version-Consensus) |  | basic block info |
| chain_id | [string](#string) |  |  |
| height | [int64](#int64) |  |  |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| last_block_id | [tendermint.types.BlockID](#tendermint-types-BlockID) |  | prev block info |
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
| proposer_address | [string](#string) |  | proposer_address is the original block proposer address, formatted as a Bech32 string. In Tendermint, this type is `bytes`, but in the SDK, we convert it to a Bech32 string for better UX.

original proposer of the block |





 

 

 

 



<a name="cosmos_base_tendermint_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/tendermint/v1beta1/query.proto



<a name="cosmos-base-tendermint-v1beta1-ABCIQueryRequest"></a>

### ABCIQueryRequest
ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  |  |
| path | [string](#string) |  |  |
| height | [int64](#int64) |  |  |
| prove | [bool](#bool) |  |  |






<a name="cosmos-base-tendermint-v1beta1-ABCIQueryResponse"></a>

### ABCIQueryResponse
ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.

Note: This type is a duplicate of the ResponseQuery proto type defined in
Tendermint.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [uint32](#uint32) |  |  |
| log | [string](#string) |  | nondeterministic |
| info | [string](#string) |  | nondeterministic |
| index | [int64](#int64) |  |  |
| key | [bytes](#bytes) |  |  |
| value | [bytes](#bytes) |  |  |
| proof_ops | [ProofOps](#cosmos-base-tendermint-v1beta1-ProofOps) |  |  |
| height | [int64](#int64) |  |  |
| codespace | [string](#string) |  |  |






<a name="cosmos-base-tendermint-v1beta1-GetBlockByHeightRequest"></a>

### GetBlockByHeightRequest
GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  |  |






<a name="cosmos-base-tendermint-v1beta1-GetBlockByHeightResponse"></a>

### GetBlockByHeightResponse
GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_id | [tendermint.types.BlockID](#tendermint-types-BlockID) |  |  |
| block | [tendermint.types.Block](#tendermint-types-Block) |  | Deprecated: please use `sdk_block` instead |
| sdk_block | [Block](#cosmos-base-tendermint-v1beta1-Block) |  |  |






<a name="cosmos-base-tendermint-v1beta1-GetLatestBlockRequest"></a>

### GetLatestBlockRequest
GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method.






<a name="cosmos-base-tendermint-v1beta1-GetLatestBlockResponse"></a>

### GetLatestBlockResponse
GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_id | [tendermint.types.BlockID](#tendermint-types-BlockID) |  |  |
| block | [tendermint.types.Block](#tendermint-types-Block) |  | Deprecated: please use `sdk_block` instead |
| sdk_block | [Block](#cosmos-base-tendermint-v1beta1-Block) |  |  |






<a name="cosmos-base-tendermint-v1beta1-GetLatestValidatorSetRequest"></a>

### GetLatestValidatorSetRequest
GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an pagination for the request. |






<a name="cosmos-base-tendermint-v1beta1-GetLatestValidatorSetResponse"></a>

### GetLatestValidatorSetResponse
GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_height | [int64](#int64) |  |  |
| validators | [Validator](#cosmos-base-tendermint-v1beta1-Validator) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines an pagination for the response. |






<a name="cosmos-base-tendermint-v1beta1-GetNodeInfoRequest"></a>

### GetNodeInfoRequest
GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method.






<a name="cosmos-base-tendermint-v1beta1-GetNodeInfoResponse"></a>

### GetNodeInfoResponse
GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| default_node_info | [tendermint.p2p.DefaultNodeInfo](#tendermint-p2p-DefaultNodeInfo) |  |  |
| application_version | [VersionInfo](#cosmos-base-tendermint-v1beta1-VersionInfo) |  |  |






<a name="cosmos-base-tendermint-v1beta1-GetSyncingRequest"></a>

### GetSyncingRequest
GetSyncingRequest is the request type for the Query/GetSyncing RPC method.






<a name="cosmos-base-tendermint-v1beta1-GetSyncingResponse"></a>

### GetSyncingResponse
GetSyncingResponse is the response type for the Query/GetSyncing RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| syncing | [bool](#bool) |  |  |






<a name="cosmos-base-tendermint-v1beta1-GetValidatorSetByHeightRequest"></a>

### GetValidatorSetByHeightRequest
GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an pagination for the request. |






<a name="cosmos-base-tendermint-v1beta1-GetValidatorSetByHeightResponse"></a>

### GetValidatorSetByHeightResponse
GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_height | [int64](#int64) |  |  |
| validators | [Validator](#cosmos-base-tendermint-v1beta1-Validator) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines an pagination for the response. |






<a name="cosmos-base-tendermint-v1beta1-Module"></a>

### Module
Module is the type for VersionInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [string](#string) |  | module path |
| version | [string](#string) |  | module version |
| sum | [string](#string) |  | checksum |






<a name="cosmos-base-tendermint-v1beta1-ProofOp"></a>

### ProofOp
ProofOp defines an operation used for calculating Merkle root. The data could
be arbitrary format, providing necessary data for example neighbouring node
hash.

Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [string](#string) |  |  |
| key | [bytes](#bytes) |  |  |
| data | [bytes](#bytes) |  |  |






<a name="cosmos-base-tendermint-v1beta1-ProofOps"></a>

### ProofOps
ProofOps is Merkle proof defined by the list of ProofOps.

Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ops | [ProofOp](#cosmos-base-tendermint-v1beta1-ProofOp) | repeated |  |






<a name="cosmos-base-tendermint-v1beta1-Validator"></a>

### Validator
Validator is the type for the validator-set.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| pub_key | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| voting_power | [int64](#int64) |  |  |
| proposer_priority | [int64](#int64) |  |  |






<a name="cosmos-base-tendermint-v1beta1-VersionInfo"></a>

### VersionInfo
VersionInfo is the type for the GetNodeInfoResponse message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| app_name | [string](#string) |  |  |
| version | [string](#string) |  |  |
| git_commit | [string](#string) |  |  |
| build_tags | [string](#string) |  |  |
| go_version | [string](#string) |  |  |
| build_deps | [Module](#cosmos-base-tendermint-v1beta1-Module) | repeated |  |
| cosmos_sdk_version | [string](#string) |  |  |





 

 

 


<a name="cosmos-base-tendermint-v1beta1-Service"></a>

### Service
Service defines the gRPC querier service for tendermint queries.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetNodeInfo | [GetNodeInfoRequest](#cosmos-base-tendermint-v1beta1-GetNodeInfoRequest) | [GetNodeInfoResponse](#cosmos-base-tendermint-v1beta1-GetNodeInfoResponse) | GetNodeInfo queries the current node info. |
| GetSyncing | [GetSyncingRequest](#cosmos-base-tendermint-v1beta1-GetSyncingRequest) | [GetSyncingResponse](#cosmos-base-tendermint-v1beta1-GetSyncingResponse) | GetSyncing queries node syncing. |
| GetLatestBlock | [GetLatestBlockRequest](#cosmos-base-tendermint-v1beta1-GetLatestBlockRequest) | [GetLatestBlockResponse](#cosmos-base-tendermint-v1beta1-GetLatestBlockResponse) | GetLatestBlock returns the latest block. |
| GetBlockByHeight | [GetBlockByHeightRequest](#cosmos-base-tendermint-v1beta1-GetBlockByHeightRequest) | [GetBlockByHeightResponse](#cosmos-base-tendermint-v1beta1-GetBlockByHeightResponse) | GetBlockByHeight queries block for given height. |
| GetLatestValidatorSet | [GetLatestValidatorSetRequest](#cosmos-base-tendermint-v1beta1-GetLatestValidatorSetRequest) | [GetLatestValidatorSetResponse](#cosmos-base-tendermint-v1beta1-GetLatestValidatorSetResponse) | GetLatestValidatorSet queries latest validator-set. |
| GetValidatorSetByHeight | [GetValidatorSetByHeightRequest](#cosmos-base-tendermint-v1beta1-GetValidatorSetByHeightRequest) | [GetValidatorSetByHeightResponse](#cosmos-base-tendermint-v1beta1-GetValidatorSetByHeightResponse) | GetValidatorSetByHeight queries validator-set at a given height. |
| ABCIQuery | [ABCIQueryRequest](#cosmos-base-tendermint-v1beta1-ABCIQueryRequest) | [ABCIQueryResponse](#cosmos-base-tendermint-v1beta1-ABCIQueryResponse) | ABCIQuery defines a query handler that supports ABCI queries directly to the application, bypassing Tendermint completely. The ABCI query must contain a valid and supported path, including app, custom, p2p, and store. |

 



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

