# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/authz/v1beta1/authz.proto](#cosmos_authz_v1beta1_authz-proto)
    - [GenericAuthorization](#cosmos-authz-v1beta1-GenericAuthorization)
    - [Grant](#cosmos-authz-v1beta1-Grant)
    - [GrantAuthorization](#cosmos-authz-v1beta1-GrantAuthorization)
    - [GrantQueueItem](#cosmos-authz-v1beta1-GrantQueueItem)
  
- [cosmos/authz/v1beta1/event.proto](#cosmos_authz_v1beta1_event-proto)
    - [EventGrant](#cosmos-authz-v1beta1-EventGrant)
    - [EventRevoke](#cosmos-authz-v1beta1-EventRevoke)
  
- [cosmos/authz/v1beta1/genesis.proto](#cosmos_authz_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-authz-v1beta1-GenesisState)
  
- [cosmos/authz/v1beta1/query.proto](#cosmos_authz_v1beta1_query-proto)
    - [QueryGranteeGrantsRequest](#cosmos-authz-v1beta1-QueryGranteeGrantsRequest)
    - [QueryGranteeGrantsResponse](#cosmos-authz-v1beta1-QueryGranteeGrantsResponse)
    - [QueryGranterGrantsRequest](#cosmos-authz-v1beta1-QueryGranterGrantsRequest)
    - [QueryGranterGrantsResponse](#cosmos-authz-v1beta1-QueryGranterGrantsResponse)
    - [QueryGrantsRequest](#cosmos-authz-v1beta1-QueryGrantsRequest)
    - [QueryGrantsResponse](#cosmos-authz-v1beta1-QueryGrantsResponse)
  
    - [Query](#cosmos-authz-v1beta1-Query)
  
- [cosmos/authz/v1beta1/tx.proto](#cosmos_authz_v1beta1_tx-proto)
    - [MsgExec](#cosmos-authz-v1beta1-MsgExec)
    - [MsgExecResponse](#cosmos-authz-v1beta1-MsgExecResponse)
    - [MsgGrant](#cosmos-authz-v1beta1-MsgGrant)
    - [MsgGrantResponse](#cosmos-authz-v1beta1-MsgGrantResponse)
    - [MsgRevoke](#cosmos-authz-v1beta1-MsgRevoke)
    - [MsgRevokeResponse](#cosmos-authz-v1beta1-MsgRevokeResponse)
  
    - [Msg](#cosmos-authz-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_authz_v1beta1_authz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/authz/v1beta1/authz.proto



<a name="cosmos-authz-v1beta1-GenericAuthorization"></a>

### GenericAuthorization
GenericAuthorization gives the grantee unrestricted permissions to execute
the provided method on behalf of the granter&#39;s account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg | [string](#string) |  | Msg, identified by it&#39;s type URL, to grant unrestricted permissions to execute |






<a name="cosmos-authz-v1beta1-Grant"></a>

### Grant
Grant gives permissions to execute
the provide method with expiration time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authorization | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| expiration | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | time when the grant will expire and will be pruned. If null, then the grant doesn&#39;t have a time expiration (other conditions in `authorization` may apply to invalidate the grant) |






<a name="cosmos-authz-v1beta1-GrantAuthorization"></a>

### GrantAuthorization
GrantAuthorization extends a grant with both the addresses of the grantee and granter.
It is used in genesis.proto and query.proto


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  |  |
| grantee | [string](#string) |  |  |
| authorization | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| expiration | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="cosmos-authz-v1beta1-GrantQueueItem"></a>

### GrantQueueItem
GrantQueueItem contains the list of TypeURL of a sdk.Msg.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_type_urls | [string](#string) | repeated | msg_type_urls contains the list of TypeURL of a sdk.Msg. |





 

 

 

 



<a name="cosmos_authz_v1beta1_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/authz/v1beta1/event.proto



<a name="cosmos-authz-v1beta1-EventGrant"></a>

### EventGrant
EventGrant is emitted on Msg/Grant


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_type_url | [string](#string) |  | Msg type URL for which an autorization is granted |
| granter | [string](#string) |  | Granter account address |
| grantee | [string](#string) |  | Grantee account address |






<a name="cosmos-authz-v1beta1-EventRevoke"></a>

### EventRevoke
EventRevoke is emitted on Msg/Revoke


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_type_url | [string](#string) |  | Msg type URL for which an autorization is revoked |
| granter | [string](#string) |  | Granter account address |
| grantee | [string](#string) |  | Grantee account address |





 

 

 

 



<a name="cosmos_authz_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/authz/v1beta1/genesis.proto



<a name="cosmos-authz-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the authz module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authorization | [GrantAuthorization](#cosmos-authz-v1beta1-GrantAuthorization) | repeated |  |





 

 

 

 



<a name="cosmos_authz_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/authz/v1beta1/query.proto



<a name="cosmos-authz-v1beta1-QueryGranteeGrantsRequest"></a>

### QueryGranteeGrantsRequest
QueryGranteeGrantsRequest is the request type for the Query/GranteeGrants RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grantee | [string](#string) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an pagination for the request. |






<a name="cosmos-authz-v1beta1-QueryGranteeGrantsResponse"></a>

### QueryGranteeGrantsResponse
QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grants | [GrantAuthorization](#cosmos-authz-v1beta1-GrantAuthorization) | repeated | grants is a list of grants granted to the grantee. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines an pagination for the response. |






<a name="cosmos-authz-v1beta1-QueryGranterGrantsRequest"></a>

### QueryGranterGrantsRequest
QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an pagination for the request. |






<a name="cosmos-authz-v1beta1-QueryGranterGrantsResponse"></a>

### QueryGranterGrantsResponse
QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grants | [GrantAuthorization](#cosmos-authz-v1beta1-GrantAuthorization) | repeated | grants is a list of grants granted by the granter. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines an pagination for the response. |






<a name="cosmos-authz-v1beta1-QueryGrantsRequest"></a>

### QueryGrantsRequest
QueryGrantsRequest is the request type for the Query/Grants RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  |  |
| grantee | [string](#string) |  |  |
| msg_type_url | [string](#string) |  | Optional, msg_type_url, when set, will query only grants matching given msg type. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an pagination for the request. |






<a name="cosmos-authz-v1beta1-QueryGrantsResponse"></a>

### QueryGrantsResponse
QueryGrantsResponse is the response type for the Query/Authorizations RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grants | [Grant](#cosmos-authz-v1beta1-Grant) | repeated | authorizations is a list of grants granted for grantee by granter. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines an pagination for the response. |





 

 

 


<a name="cosmos-authz-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Grants | [QueryGrantsRequest](#cosmos-authz-v1beta1-QueryGrantsRequest) | [QueryGrantsResponse](#cosmos-authz-v1beta1-QueryGrantsResponse) | Returns list of `Authorization`, granted to the grantee by the granter. |
| GranterGrants | [QueryGranterGrantsRequest](#cosmos-authz-v1beta1-QueryGranterGrantsRequest) | [QueryGranterGrantsResponse](#cosmos-authz-v1beta1-QueryGranterGrantsResponse) | GranterGrants returns list of `GrantAuthorization`, granted by granter. |
| GranteeGrants | [QueryGranteeGrantsRequest](#cosmos-authz-v1beta1-QueryGranteeGrantsRequest) | [QueryGranteeGrantsResponse](#cosmos-authz-v1beta1-QueryGranteeGrantsResponse) | GranteeGrants returns a list of `GrantAuthorization` by grantee. |

 



<a name="cosmos_authz_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/authz/v1beta1/tx.proto



<a name="cosmos-authz-v1beta1-MsgExec"></a>

### MsgExec
MsgExec attempts to execute the provided messages using
authorizations granted to the grantee. Each message should have only
one signer corresponding to the granter of the authorization.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grantee | [string](#string) |  |  |
| msgs | [google.protobuf.Any](#google-protobuf-Any) | repeated | Execute Msg. The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg)) triple and validate it. |






<a name="cosmos-authz-v1beta1-MsgExecResponse"></a>

### MsgExecResponse
MsgExecResponse defines the Msg/MsgExecResponse response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| results | [bytes](#bytes) | repeated |  |






<a name="cosmos-authz-v1beta1-MsgGrant"></a>

### MsgGrant
MsgGrant is a request type for Grant method. It declares authorization to the grantee
on behalf of the granter with the provided expiration time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  |  |
| grantee | [string](#string) |  |  |
| grant | [Grant](#cosmos-authz-v1beta1-Grant) |  |  |






<a name="cosmos-authz-v1beta1-MsgGrantResponse"></a>

### MsgGrantResponse
MsgGrantResponse defines the Msg/MsgGrant response type.






<a name="cosmos-authz-v1beta1-MsgRevoke"></a>

### MsgRevoke
MsgRevoke revokes any authorization with the provided sdk.Msg type on the
granter&#39;s account with that has been granted to the grantee.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  |  |
| grantee | [string](#string) |  |  |
| msg_type_url | [string](#string) |  |  |






<a name="cosmos-authz-v1beta1-MsgRevokeResponse"></a>

### MsgRevokeResponse
MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.





 

 

 


<a name="cosmos-authz-v1beta1-Msg"></a>

### Msg
Msg defines the authz Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Grant | [MsgGrant](#cosmos-authz-v1beta1-MsgGrant) | [MsgGrantResponse](#cosmos-authz-v1beta1-MsgGrantResponse) | Grant grants the provided authorization to the grantee on the granter&#39;s account with the provided expiration time. If there is already a grant for the given (granter, grantee, Authorization) triple, then the grant will be overwritten. |
| Exec | [MsgExec](#cosmos-authz-v1beta1-MsgExec) | [MsgExecResponse](#cosmos-authz-v1beta1-MsgExecResponse) | Exec attempts to execute the provided messages using authorizations granted to the grantee. Each message should have only one signer corresponding to the granter of the authorization. |
| Revoke | [MsgRevoke](#cosmos-authz-v1beta1-MsgRevoke) | [MsgRevokeResponse](#cosmos-authz-v1beta1-MsgRevokeResponse) | Revoke revokes any authorization corresponding to the provided method name on the granter&#39;s account that has been granted to the grantee. |

 



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

