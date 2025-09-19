# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/circuit/v1/types.proto](#cosmos_circuit_v1_types-proto)
    - [GenesisAccountPermissions](#cosmos-circuit-v1-GenesisAccountPermissions)
    - [GenesisState](#cosmos-circuit-v1-GenesisState)
    - [Permissions](#cosmos-circuit-v1-Permissions)
  
    - [Permissions.Level](#cosmos-circuit-v1-Permissions-Level)
  
- [cosmos/circuit/v1/query.proto](#cosmos_circuit_v1_query-proto)
    - [AccountResponse](#cosmos-circuit-v1-AccountResponse)
    - [AccountsResponse](#cosmos-circuit-v1-AccountsResponse)
    - [DisabledListResponse](#cosmos-circuit-v1-DisabledListResponse)
    - [QueryAccountRequest](#cosmos-circuit-v1-QueryAccountRequest)
    - [QueryAccountsRequest](#cosmos-circuit-v1-QueryAccountsRequest)
    - [QueryDisabledListRequest](#cosmos-circuit-v1-QueryDisabledListRequest)
  
    - [Query](#cosmos-circuit-v1-Query)
  
- [cosmos/circuit/v1/tx.proto](#cosmos_circuit_v1_tx-proto)
    - [MsgAuthorizeCircuitBreaker](#cosmos-circuit-v1-MsgAuthorizeCircuitBreaker)
    - [MsgAuthorizeCircuitBreakerResponse](#cosmos-circuit-v1-MsgAuthorizeCircuitBreakerResponse)
    - [MsgResetCircuitBreaker](#cosmos-circuit-v1-MsgResetCircuitBreaker)
    - [MsgResetCircuitBreakerResponse](#cosmos-circuit-v1-MsgResetCircuitBreakerResponse)
    - [MsgTripCircuitBreaker](#cosmos-circuit-v1-MsgTripCircuitBreaker)
    - [MsgTripCircuitBreakerResponse](#cosmos-circuit-v1-MsgTripCircuitBreakerResponse)
  
    - [Msg](#cosmos-circuit-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_circuit_v1_types-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/circuit/v1/types.proto



<a name="cosmos-circuit-v1-GenesisAccountPermissions"></a>

### GenesisAccountPermissions
GenesisAccountPermissions is the account permissions for the circuit breaker in genesis


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| permissions | [Permissions](#cosmos-circuit-v1-Permissions) |  |  |






<a name="cosmos-circuit-v1-GenesisState"></a>

### GenesisState
GenesisState is the state that must be provided at genesis.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_permissions | [GenesisAccountPermissions](#cosmos-circuit-v1-GenesisAccountPermissions) | repeated |  |
| disabled_type_urls | [string](#string) | repeated |  |






<a name="cosmos-circuit-v1-Permissions"></a>

### Permissions
Permissions are the permissions that an account has to trip
or reset the circuit breaker.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| level | [Permissions.Level](#cosmos-circuit-v1-Permissions-Level) |  | level is the level of permissions granted to this account. |
| limit_type_urls | [string](#string) | repeated | limit_type_urls is used with LEVEL_SOME_MSGS to limit the lists of Msg type URLs that the account can trip. It is an error to use limit_type_urls with a level other than LEVEL_SOME_MSGS. |





 


<a name="cosmos-circuit-v1-Permissions-Level"></a>

### Permissions.Level
Level is the permission level.

| Name | Number | Description |
| ---- | ------ | ----------- |
| LEVEL_NONE_UNSPECIFIED | 0 | LEVEL_NONE_UNSPECIFIED indicates that the account will have no circuit breaker permissions. |
| LEVEL_SOME_MSGS | 1 | LEVEL_SOME_MSGS indicates that the account will have permission to trip or reset the circuit breaker for some Msg type URLs. If this level is chosen, a non-empty list of Msg type URLs must be provided in limit_type_urls. |
| LEVEL_ALL_MSGS | 2 | LEVEL_ALL_MSGS indicates that the account can trip or reset the circuit breaker for Msg&#39;s of all type URLs. |
| LEVEL_SUPER_ADMIN | 3 | LEVEL_SUPER_ADMIN indicates that the account can take all circuit breaker actions and can grant permissions to other accounts. |


 

 

 



<a name="cosmos_circuit_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/circuit/v1/query.proto



<a name="cosmos-circuit-v1-AccountResponse"></a>

### AccountResponse
AccountResponse is the response type for the Query/Account RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission | [Permissions](#cosmos-circuit-v1-Permissions) |  |  |






<a name="cosmos-circuit-v1-AccountsResponse"></a>

### AccountsResponse
AccountsResponse is the response type for the Query/Accounts RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| accounts | [GenesisAccountPermissions](#cosmos-circuit-v1-GenesisAccountPermissions) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-circuit-v1-DisabledListResponse"></a>

### DisabledListResponse
DisabledListResponse is the response type for the Query/DisabledList RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| disabled_list | [string](#string) | repeated |  |






<a name="cosmos-circuit-v1-QueryAccountRequest"></a>

### QueryAccountRequest
QueryAccountRequest is the request type for the Query/Account RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |






<a name="cosmos-circuit-v1-QueryAccountsRequest"></a>

### QueryAccountsRequest
QueryAccountsRequest is the request type for the Query/Accounts RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-circuit-v1-QueryDisabledListRequest"></a>

### QueryDisabledListRequest
QueryDisableListRequest is the request type for the Query/DisabledList RPC method.





 

 

 


<a name="cosmos-circuit-v1-Query"></a>

### Query
Query defines the circuit gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Account | [QueryAccountRequest](#cosmos-circuit-v1-QueryAccountRequest) | [AccountResponse](#cosmos-circuit-v1-AccountResponse) | Account returns account permissions. |
| Accounts | [QueryAccountsRequest](#cosmos-circuit-v1-QueryAccountsRequest) | [AccountsResponse](#cosmos-circuit-v1-AccountsResponse) | Account returns account permissions. |
| DisabledList | [QueryDisabledListRequest](#cosmos-circuit-v1-QueryDisabledListRequest) | [DisabledListResponse](#cosmos-circuit-v1-DisabledListResponse) | DisabledList returns a list of disabled message urls |

 



<a name="cosmos_circuit_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/circuit/v1/tx.proto



<a name="cosmos-circuit-v1-MsgAuthorizeCircuitBreaker"></a>

### MsgAuthorizeCircuitBreaker
MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  | granter is the granter of the circuit breaker permissions and must have LEVEL_SUPER_ADMIN. |
| grantee | [string](#string) |  | grantee is the account authorized with the provided permissions. |
| permissions | [Permissions](#cosmos-circuit-v1-Permissions) |  | permissions are the circuit breaker permissions that the grantee receives. These will overwrite any existing permissions. LEVEL_NONE_UNSPECIFIED can be specified to revoke all permissions. |






<a name="cosmos-circuit-v1-MsgAuthorizeCircuitBreakerResponse"></a>

### MsgAuthorizeCircuitBreakerResponse
MsgAuthorizeCircuitBreakerResponse defines the Msg/AuthorizeCircuitBreaker response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |






<a name="cosmos-circuit-v1-MsgResetCircuitBreaker"></a>

### MsgResetCircuitBreaker
MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the account authorized to trip or reset the circuit breaker. |
| msg_type_urls | [string](#string) | repeated | msg_type_urls specifies a list of Msg type URLs to resume processing. If it is left empty all Msg processing for type URLs that the account is authorized to trip will resume. |






<a name="cosmos-circuit-v1-MsgResetCircuitBreakerResponse"></a>

### MsgResetCircuitBreakerResponse
MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |






<a name="cosmos-circuit-v1-MsgTripCircuitBreaker"></a>

### MsgTripCircuitBreaker
MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the account authorized to trip the circuit breaker. |
| msg_type_urls | [string](#string) | repeated | msg_type_urls specifies a list of type URLs to immediately stop processing. IF IT IS LEFT EMPTY, ALL MSG PROCESSING WILL STOP IMMEDIATELY. This value is validated against the authority&#39;s permissions and if the authority does not have permissions to trip the specified msg type URLs (or all URLs), the operation will fail. |






<a name="cosmos-circuit-v1-MsgTripCircuitBreakerResponse"></a>

### MsgTripCircuitBreakerResponse
MsgTripCircuitBreakerResponse defines the Msg/TripCircuitBreaker response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |





 

 

 


<a name="cosmos-circuit-v1-Msg"></a>

### Msg
Msg defines the circuit Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| AuthorizeCircuitBreaker | [MsgAuthorizeCircuitBreaker](#cosmos-circuit-v1-MsgAuthorizeCircuitBreaker) | [MsgAuthorizeCircuitBreakerResponse](#cosmos-circuit-v1-MsgAuthorizeCircuitBreakerResponse) | AuthorizeCircuitBreaker allows a super-admin to grant (or revoke) another account&#39;s circuit breaker permissions. |
| TripCircuitBreaker | [MsgTripCircuitBreaker](#cosmos-circuit-v1-MsgTripCircuitBreaker) | [MsgTripCircuitBreakerResponse](#cosmos-circuit-v1-MsgTripCircuitBreakerResponse) | TripCircuitBreaker pauses processing of Msg&#39;s in the state machine. |
| ResetCircuitBreaker | [MsgResetCircuitBreaker](#cosmos-circuit-v1-MsgResetCircuitBreaker) | [MsgResetCircuitBreakerResponse](#cosmos-circuit-v1-MsgResetCircuitBreakerResponse) | ResetCircuitBreaker resumes processing of Msg&#39;s in the state machine that have been been paused using TripCircuitBreaker. |

 



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

