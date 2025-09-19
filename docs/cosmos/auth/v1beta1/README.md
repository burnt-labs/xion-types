# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/auth/v1beta1/auth.proto](#cosmos_auth_v1beta1_auth-proto)
    - [BaseAccount](#cosmos-auth-v1beta1-BaseAccount)
    - [ModuleAccount](#cosmos-auth-v1beta1-ModuleAccount)
    - [ModuleCredential](#cosmos-auth-v1beta1-ModuleCredential)
    - [Params](#cosmos-auth-v1beta1-Params)
  
- [cosmos/auth/v1beta1/genesis.proto](#cosmos_auth_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-auth-v1beta1-GenesisState)
  
- [cosmos/auth/v1beta1/query.proto](#cosmos_auth_v1beta1_query-proto)
    - [AddressBytesToStringRequest](#cosmos-auth-v1beta1-AddressBytesToStringRequest)
    - [AddressBytesToStringResponse](#cosmos-auth-v1beta1-AddressBytesToStringResponse)
    - [AddressStringToBytesRequest](#cosmos-auth-v1beta1-AddressStringToBytesRequest)
    - [AddressStringToBytesResponse](#cosmos-auth-v1beta1-AddressStringToBytesResponse)
    - [Bech32PrefixRequest](#cosmos-auth-v1beta1-Bech32PrefixRequest)
    - [Bech32PrefixResponse](#cosmos-auth-v1beta1-Bech32PrefixResponse)
    - [QueryAccountAddressByIDRequest](#cosmos-auth-v1beta1-QueryAccountAddressByIDRequest)
    - [QueryAccountAddressByIDResponse](#cosmos-auth-v1beta1-QueryAccountAddressByIDResponse)
    - [QueryAccountInfoRequest](#cosmos-auth-v1beta1-QueryAccountInfoRequest)
    - [QueryAccountInfoResponse](#cosmos-auth-v1beta1-QueryAccountInfoResponse)
    - [QueryAccountRequest](#cosmos-auth-v1beta1-QueryAccountRequest)
    - [QueryAccountResponse](#cosmos-auth-v1beta1-QueryAccountResponse)
    - [QueryAccountsRequest](#cosmos-auth-v1beta1-QueryAccountsRequest)
    - [QueryAccountsResponse](#cosmos-auth-v1beta1-QueryAccountsResponse)
    - [QueryModuleAccountByNameRequest](#cosmos-auth-v1beta1-QueryModuleAccountByNameRequest)
    - [QueryModuleAccountByNameResponse](#cosmos-auth-v1beta1-QueryModuleAccountByNameResponse)
    - [QueryModuleAccountsRequest](#cosmos-auth-v1beta1-QueryModuleAccountsRequest)
    - [QueryModuleAccountsResponse](#cosmos-auth-v1beta1-QueryModuleAccountsResponse)
    - [QueryParamsRequest](#cosmos-auth-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-auth-v1beta1-QueryParamsResponse)
  
    - [Query](#cosmos-auth-v1beta1-Query)
  
- [cosmos/auth/v1beta1/tx.proto](#cosmos_auth_v1beta1_tx-proto)
    - [MsgUpdateParams](#cosmos-auth-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-auth-v1beta1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmos-auth-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_auth_v1beta1_auth-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/auth/v1beta1/auth.proto



<a name="cosmos-auth-v1beta1-BaseAccount"></a>

### BaseAccount
BaseAccount defines a base account type. It contains all the necessary fields
for basic account functionality. Any custom account type should extend this
type for additional functionality (e.g. vesting).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| pub_key | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| account_number | [uint64](#uint64) |  |  |
| sequence | [uint64](#uint64) |  |  |






<a name="cosmos-auth-v1beta1-ModuleAccount"></a>

### ModuleAccount
ModuleAccount defines an account for modules that holds coins on a pool.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_account | [BaseAccount](#cosmos-auth-v1beta1-BaseAccount) |  |  |
| name | [string](#string) |  |  |
| permissions | [string](#string) | repeated |  |






<a name="cosmos-auth-v1beta1-ModuleCredential"></a>

### ModuleCredential
ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_name | [string](#string) |  | module_name is the name of the module used for address derivation (passed into address.Module). |
| derivation_keys | [bytes](#bytes) | repeated | derivation_keys is for deriving a module account address (passed into address.Module) adding more keys creates sub-account addresses (passed into address.Derive) |






<a name="cosmos-auth-v1beta1-Params"></a>

### Params
Params defines the parameters for the auth module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_memo_characters | [uint64](#uint64) |  |  |
| tx_sig_limit | [uint64](#uint64) |  |  |
| tx_size_cost_per_byte | [uint64](#uint64) |  |  |
| sig_verify_cost_ed25519 | [uint64](#uint64) |  |  |
| sig_verify_cost_secp256k1 | [uint64](#uint64) |  |  |





 

 

 

 



<a name="cosmos_auth_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/auth/v1beta1/genesis.proto



<a name="cosmos-auth-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the auth module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-auth-v1beta1-Params) |  | params defines all the parameters of the module. |
| accounts | [google.protobuf.Any](#google-protobuf-Any) | repeated | accounts are the accounts present at genesis. |





 

 

 

 



<a name="cosmos_auth_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/auth/v1beta1/query.proto



<a name="cosmos-auth-v1beta1-AddressBytesToStringRequest"></a>

### AddressBytesToStringRequest
AddressBytesToStringRequest is the request type for AddressString rpc method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address_bytes | [bytes](#bytes) |  |  |






<a name="cosmos-auth-v1beta1-AddressBytesToStringResponse"></a>

### AddressBytesToStringResponse
AddressBytesToStringResponse is the response type for AddressString rpc method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address_string | [string](#string) |  |  |






<a name="cosmos-auth-v1beta1-AddressStringToBytesRequest"></a>

### AddressStringToBytesRequest
AddressStringToBytesRequest is the request type for AccountBytes rpc method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address_string | [string](#string) |  |  |






<a name="cosmos-auth-v1beta1-AddressStringToBytesResponse"></a>

### AddressStringToBytesResponse
AddressStringToBytesResponse is the response type for AddressBytes rpc method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address_bytes | [bytes](#bytes) |  |  |






<a name="cosmos-auth-v1beta1-Bech32PrefixRequest"></a>

### Bech32PrefixRequest
Bech32PrefixRequest is the request type for Bech32Prefix rpc method.






<a name="cosmos-auth-v1beta1-Bech32PrefixResponse"></a>

### Bech32PrefixResponse
Bech32PrefixResponse is the response type for Bech32Prefix rpc method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bech32_prefix | [string](#string) |  |  |






<a name="cosmos-auth-v1beta1-QueryAccountAddressByIDRequest"></a>

### QueryAccountAddressByIDRequest
QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [int64](#int64) |  | **Deprecated.** Deprecated, use account_id instead

id is the account number of the address to be queried. This field should have been an uint64 (like all account numbers), and will be updated to uint64 in a future version of the auth query. |
| account_id | [uint64](#uint64) |  | account_id is the account number of the address to be queried. |






<a name="cosmos-auth-v1beta1-QueryAccountAddressByIDResponse"></a>

### QueryAccountAddressByIDResponse
QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_address | [string](#string) |  |  |






<a name="cosmos-auth-v1beta1-QueryAccountInfoRequest"></a>

### QueryAccountInfoRequest
QueryAccountInfoRequest is the Query/AccountInfo request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the account address string. |






<a name="cosmos-auth-v1beta1-QueryAccountInfoResponse"></a>

### QueryAccountInfoResponse
QueryAccountInfoResponse is the Query/AccountInfo response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| info | [BaseAccount](#cosmos-auth-v1beta1-BaseAccount) |  | info is the account info which is represented by BaseAccount. |






<a name="cosmos-auth-v1beta1-QueryAccountRequest"></a>

### QueryAccountRequest
QueryAccountRequest is the request type for the Query/Account RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address defines the address to query for. |






<a name="cosmos-auth-v1beta1-QueryAccountResponse"></a>

### QueryAccountResponse
QueryAccountResponse is the response type for the Query/Account RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account | [google.protobuf.Any](#google-protobuf-Any) |  | account defines the account of the corresponding address. |






<a name="cosmos-auth-v1beta1-QueryAccountsRequest"></a>

### QueryAccountsRequest
QueryAccountsRequest is the request type for the Query/Accounts RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-auth-v1beta1-QueryAccountsResponse"></a>

### QueryAccountsResponse
QueryAccountsResponse is the response type for the Query/Accounts RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| accounts | [google.protobuf.Any](#google-protobuf-Any) | repeated | accounts are the existing accounts |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-auth-v1beta1-QueryModuleAccountByNameRequest"></a>

### QueryModuleAccountByNameRequest
QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |






<a name="cosmos-auth-v1beta1-QueryModuleAccountByNameResponse"></a>

### QueryModuleAccountByNameResponse
QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account | [google.protobuf.Any](#google-protobuf-Any) |  |  |






<a name="cosmos-auth-v1beta1-QueryModuleAccountsRequest"></a>

### QueryModuleAccountsRequest
QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.






<a name="cosmos-auth-v1beta1-QueryModuleAccountsResponse"></a>

### QueryModuleAccountsResponse
QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| accounts | [google.protobuf.Any](#google-protobuf-Any) | repeated |  |






<a name="cosmos-auth-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="cosmos-auth-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-auth-v1beta1-Params) |  | params defines the parameters of the module. |





 

 

 


<a name="cosmos-auth-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Accounts | [QueryAccountsRequest](#cosmos-auth-v1beta1-QueryAccountsRequest) | [QueryAccountsResponse](#cosmos-auth-v1beta1-QueryAccountsResponse) | Accounts returns all the existing accounts.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| Account | [QueryAccountRequest](#cosmos-auth-v1beta1-QueryAccountRequest) | [QueryAccountResponse](#cosmos-auth-v1beta1-QueryAccountResponse) | Account returns account details based on address. |
| AccountAddressByID | [QueryAccountAddressByIDRequest](#cosmos-auth-v1beta1-QueryAccountAddressByIDRequest) | [QueryAccountAddressByIDResponse](#cosmos-auth-v1beta1-QueryAccountAddressByIDResponse) | AccountAddressByID returns account address based on account number. |
| Params | [QueryParamsRequest](#cosmos-auth-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-auth-v1beta1-QueryParamsResponse) | Params queries all parameters. |
| ModuleAccounts | [QueryModuleAccountsRequest](#cosmos-auth-v1beta1-QueryModuleAccountsRequest) | [QueryModuleAccountsResponse](#cosmos-auth-v1beta1-QueryModuleAccountsResponse) | ModuleAccounts returns all the existing module accounts. |
| ModuleAccountByName | [QueryModuleAccountByNameRequest](#cosmos-auth-v1beta1-QueryModuleAccountByNameRequest) | [QueryModuleAccountByNameResponse](#cosmos-auth-v1beta1-QueryModuleAccountByNameResponse) | ModuleAccountByName returns the module account info by module name |
| Bech32Prefix | [Bech32PrefixRequest](#cosmos-auth-v1beta1-Bech32PrefixRequest) | [Bech32PrefixResponse](#cosmos-auth-v1beta1-Bech32PrefixResponse) | Bech32Prefix queries bech32Prefix |
| AddressBytesToString | [AddressBytesToStringRequest](#cosmos-auth-v1beta1-AddressBytesToStringRequest) | [AddressBytesToStringResponse](#cosmos-auth-v1beta1-AddressBytesToStringResponse) | AddressBytesToString converts Account Address bytes to string |
| AddressStringToBytes | [AddressStringToBytesRequest](#cosmos-auth-v1beta1-AddressStringToBytesRequest) | [AddressStringToBytesResponse](#cosmos-auth-v1beta1-AddressStringToBytesResponse) | AddressStringToBytes converts Address string to bytes |
| AccountInfo | [QueryAccountInfoRequest](#cosmos-auth-v1beta1-QueryAccountInfoRequest) | [QueryAccountInfoResponse](#cosmos-auth-v1beta1-QueryAccountInfoResponse) | AccountInfo queries account info which is common to all account types. |

 



<a name="cosmos_auth_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/auth/v1beta1/tx.proto



<a name="cosmos-auth-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-auth-v1beta1-Params) |  | params defines the x/auth parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-auth-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="cosmos-auth-v1beta1-Msg"></a>

### Msg
Msg defines the x/auth Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UpdateParams | [MsgUpdateParams](#cosmos-auth-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-auth-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a (governance) operation for updating the x/auth module parameters. The authority defaults to the x/gov module account. |

 



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

