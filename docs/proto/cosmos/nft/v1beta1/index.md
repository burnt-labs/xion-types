# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/nft/v1beta1/event.proto](#cosmos_nft_v1beta1_event-proto)
    - [EventBurn](#cosmos-nft-v1beta1-EventBurn)
    - [EventMint](#cosmos-nft-v1beta1-EventMint)
    - [EventSend](#cosmos-nft-v1beta1-EventSend)
  
- [cosmos/nft/v1beta1/nft.proto](#cosmos_nft_v1beta1_nft-proto)
    - [Class](#cosmos-nft-v1beta1-Class)
    - [NFT](#cosmos-nft-v1beta1-NFT)
  
- [cosmos/nft/v1beta1/genesis.proto](#cosmos_nft_v1beta1_genesis-proto)
    - [Entry](#cosmos-nft-v1beta1-Entry)
    - [GenesisState](#cosmos-nft-v1beta1-GenesisState)
  
- [cosmos/nft/v1beta1/query.proto](#cosmos_nft_v1beta1_query-proto)
    - [QueryBalanceRequest](#cosmos-nft-v1beta1-QueryBalanceRequest)
    - [QueryBalanceResponse](#cosmos-nft-v1beta1-QueryBalanceResponse)
    - [QueryClassRequest](#cosmos-nft-v1beta1-QueryClassRequest)
    - [QueryClassResponse](#cosmos-nft-v1beta1-QueryClassResponse)
    - [QueryClassesRequest](#cosmos-nft-v1beta1-QueryClassesRequest)
    - [QueryClassesResponse](#cosmos-nft-v1beta1-QueryClassesResponse)
    - [QueryNFTRequest](#cosmos-nft-v1beta1-QueryNFTRequest)
    - [QueryNFTResponse](#cosmos-nft-v1beta1-QueryNFTResponse)
    - [QueryNFTsRequest](#cosmos-nft-v1beta1-QueryNFTsRequest)
    - [QueryNFTsResponse](#cosmos-nft-v1beta1-QueryNFTsResponse)
    - [QueryOwnerRequest](#cosmos-nft-v1beta1-QueryOwnerRequest)
    - [QueryOwnerResponse](#cosmos-nft-v1beta1-QueryOwnerResponse)
    - [QuerySupplyRequest](#cosmos-nft-v1beta1-QuerySupplyRequest)
    - [QuerySupplyResponse](#cosmos-nft-v1beta1-QuerySupplyResponse)
  
    - [Query](#cosmos-nft-v1beta1-Query)
  
- [cosmos/nft/v1beta1/tx.proto](#cosmos_nft_v1beta1_tx-proto)
    - [MsgSend](#cosmos-nft-v1beta1-MsgSend)
    - [MsgSendResponse](#cosmos-nft-v1beta1-MsgSendResponse)
  
    - [Msg](#cosmos-nft-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_nft_v1beta1_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/nft/v1beta1/event.proto



<a name="cosmos-nft-v1beta1-EventBurn"></a>

### EventBurn
EventBurn is emitted on Burn


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  | class_id associated with the nft |
| id | [string](#string) |  | id is a unique identifier of the nft |
| owner | [string](#string) |  | owner is the owner address of the nft |






<a name="cosmos-nft-v1beta1-EventMint"></a>

### EventMint
EventMint is emitted on Mint


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  | class_id associated with the nft |
| id | [string](#string) |  | id is a unique identifier of the nft |
| owner | [string](#string) |  | owner is the owner address of the nft |






<a name="cosmos-nft-v1beta1-EventSend"></a>

### EventSend
EventSend is emitted on Msg/Send


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  | class_id associated with the nft |
| id | [string](#string) |  | id is a unique identifier of the nft |
| sender | [string](#string) |  | sender is the address of the owner of nft |
| receiver | [string](#string) |  | receiver is the receiver address of nft |





 

 

 

 



<a name="cosmos_nft_v1beta1_nft-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/nft/v1beta1/nft.proto



<a name="cosmos-nft-v1beta1-Class"></a>

### Class
Class defines the class of the nft type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 |
| name | [string](#string) |  | name defines the human-readable name of the NFT classification. Optional |
| symbol | [string](#string) |  | symbol is an abbreviated name for nft classification. Optional |
| description | [string](#string) |  | description is a brief description of nft classification. Optional |
| uri | [string](#string) |  | uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional |
| uri_hash | [string](#string) |  | uri_hash is a hash of the document pointed by uri. Optional |
| data | [google.protobuf.Any](#google-protobuf-Any) |  | data is the app specific metadata of the NFT class. Optional |






<a name="cosmos-nft-v1beta1-NFT"></a>

### NFT
NFT defines the NFT.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  | class_id associated with the NFT, similar to the contract address of ERC721 |
| id | [string](#string) |  | id is a unique identifier of the NFT |
| uri | [string](#string) |  | uri for the NFT metadata stored off chain |
| uri_hash | [string](#string) |  | uri_hash is a hash of the document pointed by uri |
| data | [google.protobuf.Any](#google-protobuf-Any) |  | data is an app specific data of the NFT. Optional |





 

 

 

 



<a name="cosmos_nft_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/nft/v1beta1/genesis.proto



<a name="cosmos-nft-v1beta1-Entry"></a>

### Entry
Entry Defines all nft owned by a person


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| owner | [string](#string) |  | owner is the owner address of the following nft |
| nfts | [NFT](#cosmos-nft-v1beta1-NFT) | repeated | nfts is a group of nfts of the same owner |






<a name="cosmos-nft-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the nft module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| classes | [Class](#cosmos-nft-v1beta1-Class) | repeated | class defines the class of the nft type. |
| entries | [Entry](#cosmos-nft-v1beta1-Entry) | repeated | entry defines all nft owned by a person. |





 

 

 

 



<a name="cosmos_nft_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/nft/v1beta1/query.proto



<a name="cosmos-nft-v1beta1-QueryBalanceRequest"></a>

### QueryBalanceRequest
QueryBalanceRequest is the request type for the Query/Balance RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  | class_id associated with the nft |
| owner | [string](#string) |  | owner is the owner address of the nft |






<a name="cosmos-nft-v1beta1-QueryBalanceResponse"></a>

### QueryBalanceResponse
QueryBalanceResponse is the response type for the Query/Balance RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [uint64](#uint64) |  | amount is the number of all NFTs of a given class owned by the owner |






<a name="cosmos-nft-v1beta1-QueryClassRequest"></a>

### QueryClassRequest
QueryClassRequest is the request type for the Query/Class RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  | class_id associated with the nft |






<a name="cosmos-nft-v1beta1-QueryClassResponse"></a>

### QueryClassResponse
QueryClassResponse is the response type for the Query/Class RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class | [Class](#cosmos-nft-v1beta1-Class) |  | class defines the class of the nft type. |






<a name="cosmos-nft-v1beta1-QueryClassesRequest"></a>

### QueryClassesRequest
QueryClassesRequest is the request type for the Query/Classes RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-nft-v1beta1-QueryClassesResponse"></a>

### QueryClassesResponse
QueryClassesResponse is the response type for the Query/Classes RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| classes | [Class](#cosmos-nft-v1beta1-Class) | repeated | class defines the class of the nft type. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-nft-v1beta1-QueryNFTRequest"></a>

### QueryNFTRequest
QueryNFTRequest is the request type for the Query/NFT RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  | class_id associated with the nft |
| id | [string](#string) |  | id is a unique identifier of the NFT |






<a name="cosmos-nft-v1beta1-QueryNFTResponse"></a>

### QueryNFTResponse
QueryNFTResponse is the response type for the Query/NFT RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| nft | [NFT](#cosmos-nft-v1beta1-NFT) |  | owner is the owner address of the nft |






<a name="cosmos-nft-v1beta1-QueryNFTsRequest"></a>

### QueryNFTsRequest
QueryNFTstRequest is the request type for the Query/NFTs RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  | class_id associated with the nft |
| owner | [string](#string) |  | owner is the owner address of the nft |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-nft-v1beta1-QueryNFTsResponse"></a>

### QueryNFTsResponse
QueryNFTsResponse is the response type for the Query/NFTs RPC methods


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| nfts | [NFT](#cosmos-nft-v1beta1-NFT) | repeated | NFT defines the NFT |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-nft-v1beta1-QueryOwnerRequest"></a>

### QueryOwnerRequest
QueryOwnerRequest is the request type for the Query/Owner RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  | class_id associated with the nft |
| id | [string](#string) |  | id is a unique identifier of the NFT |






<a name="cosmos-nft-v1beta1-QueryOwnerResponse"></a>

### QueryOwnerResponse
QueryOwnerResponse is the response type for the Query/Owner RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| owner | [string](#string) |  | owner is the owner address of the nft |






<a name="cosmos-nft-v1beta1-QuerySupplyRequest"></a>

### QuerySupplyRequest
QuerySupplyRequest is the request type for the Query/Supply RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  | class_id associated with the nft |






<a name="cosmos-nft-v1beta1-QuerySupplyResponse"></a>

### QuerySupplyResponse
QuerySupplyResponse is the response type for the Query/Supply RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [uint64](#uint64) |  | amount is the number of all NFTs from the given class |





 

 

 


<a name="cosmos-nft-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Balance | [QueryBalanceRequest](#cosmos-nft-v1beta1-QueryBalanceRequest) | [QueryBalanceResponse](#cosmos-nft-v1beta1-QueryBalanceResponse) | Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 |
| Owner | [QueryOwnerRequest](#cosmos-nft-v1beta1-QueryOwnerRequest) | [QueryOwnerResponse](#cosmos-nft-v1beta1-QueryOwnerResponse) | Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 |
| Supply | [QuerySupplyRequest](#cosmos-nft-v1beta1-QuerySupplyRequest) | [QuerySupplyResponse](#cosmos-nft-v1beta1-QuerySupplyResponse) | Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. |
| NFTs | [QueryNFTsRequest](#cosmos-nft-v1beta1-QueryNFTsRequest) | [QueryNFTsResponse](#cosmos-nft-v1beta1-QueryNFTsResponse) | NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in ERC721Enumerable |
| NFT | [QueryNFTRequest](#cosmos-nft-v1beta1-QueryNFTRequest) | [QueryNFTResponse](#cosmos-nft-v1beta1-QueryNFTResponse) | NFT queries an NFT based on its class and id. |
| Class | [QueryClassRequest](#cosmos-nft-v1beta1-QueryClassRequest) | [QueryClassResponse](#cosmos-nft-v1beta1-QueryClassResponse) | Class queries an NFT class based on its id |
| Classes | [QueryClassesRequest](#cosmos-nft-v1beta1-QueryClassesRequest) | [QueryClassesResponse](#cosmos-nft-v1beta1-QueryClassesResponse) | Classes queries all NFT classes |

 



<a name="cosmos_nft_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/nft/v1beta1/tx.proto



<a name="cosmos-nft-v1beta1-MsgSend"></a>

### MsgSend
MsgSend represents a message to send a nft from one account to another account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  | class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 |
| id | [string](#string) |  | id defines the unique identification of nft |
| sender | [string](#string) |  | sender is the address of the owner of nft |
| receiver | [string](#string) |  | receiver is the receiver address of nft |






<a name="cosmos-nft-v1beta1-MsgSendResponse"></a>

### MsgSendResponse
MsgSendResponse defines the Msg/Send response type.





 

 

 


<a name="cosmos-nft-v1beta1-Msg"></a>

### Msg
Msg defines the nft Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Send | [MsgSend](#cosmos-nft-v1beta1-MsgSend) | [MsgSendResponse](#cosmos-nft-v1beta1-MsgSendResponse) | Send defines a method to send a nft from one account to another account. |

 



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

