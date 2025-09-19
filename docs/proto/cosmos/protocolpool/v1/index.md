# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/protocolpool/v1/types.proto](#cosmos_protocolpool_v1_types-proto)
    - [ContinuousFund](#cosmos-protocolpool-v1-ContinuousFund)
    - [Params](#cosmos-protocolpool-v1-Params)
  
- [cosmos/protocolpool/v1/genesis.proto](#cosmos_protocolpool_v1_genesis-proto)
    - [GenesisState](#cosmos-protocolpool-v1-GenesisState)
  
- [cosmos/protocolpool/v1/query.proto](#cosmos_protocolpool_v1_query-proto)
    - [QueryCommunityPoolRequest](#cosmos-protocolpool-v1-QueryCommunityPoolRequest)
    - [QueryCommunityPoolResponse](#cosmos-protocolpool-v1-QueryCommunityPoolResponse)
    - [QueryContinuousFundRequest](#cosmos-protocolpool-v1-QueryContinuousFundRequest)
    - [QueryContinuousFundResponse](#cosmos-protocolpool-v1-QueryContinuousFundResponse)
    - [QueryContinuousFundsRequest](#cosmos-protocolpool-v1-QueryContinuousFundsRequest)
    - [QueryContinuousFundsResponse](#cosmos-protocolpool-v1-QueryContinuousFundsResponse)
    - [QueryParamsRequest](#cosmos-protocolpool-v1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-protocolpool-v1-QueryParamsResponse)
  
    - [Query](#cosmos-protocolpool-v1-Query)
  
- [cosmos/protocolpool/v1/tx.proto](#cosmos_protocolpool_v1_tx-proto)
    - [MsgCancelContinuousFund](#cosmos-protocolpool-v1-MsgCancelContinuousFund)
    - [MsgCancelContinuousFundResponse](#cosmos-protocolpool-v1-MsgCancelContinuousFundResponse)
    - [MsgCommunityPoolSpend](#cosmos-protocolpool-v1-MsgCommunityPoolSpend)
    - [MsgCommunityPoolSpendResponse](#cosmos-protocolpool-v1-MsgCommunityPoolSpendResponse)
    - [MsgCreateContinuousFund](#cosmos-protocolpool-v1-MsgCreateContinuousFund)
    - [MsgCreateContinuousFundResponse](#cosmos-protocolpool-v1-MsgCreateContinuousFundResponse)
    - [MsgFundCommunityPool](#cosmos-protocolpool-v1-MsgFundCommunityPool)
    - [MsgFundCommunityPoolResponse](#cosmos-protocolpool-v1-MsgFundCommunityPoolResponse)
    - [MsgUpdateParams](#cosmos-protocolpool-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-protocolpool-v1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmos-protocolpool-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_protocolpool_v1_types-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/protocolpool/v1/types.proto



<a name="cosmos-protocolpool-v1-ContinuousFund"></a>

### ContinuousFund
ContinuousFund defines the fields of continuous fund proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| recipient | [string](#string) |  | Recipient is the address string of the account receiving funds. |
| percentage | [string](#string) |  | Percentage is the percentage of funds to be allocated from Community pool. |
| expiry | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Optional, if expiry is set, removes the state object when expired. |






<a name="cosmos-protocolpool-v1-Params"></a>

### Params
Params defines the parameters for the protocolpool module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| enabled_distribution_denoms | [string](#string) | repeated | EnabledDistributionDenoms lists the denoms that are allowed to be distributed. This is to avoid spending time distributing undesired tokens to continuous funds and budgets. |
| distribution_frequency | [uint64](#uint64) |  | DistributionFrequency is the frequency (in terms of blocks) that funds are distributed out from the x/protocolpool module. |





 

 

 

 



<a name="cosmos_protocolpool_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/protocolpool/v1/genesis.proto



<a name="cosmos-protocolpool-v1-GenesisState"></a>

### GenesisState
GenesisState defines the protocolpool module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| continuous_funds | [ContinuousFund](#cosmos-protocolpool-v1-ContinuousFund) | repeated | ContinuousFunds defines the continuous funds at genesis. |
| params | [Params](#cosmos-protocolpool-v1-Params) |  | Params defines the parameters of this module, currently only contains the denoms that will be used for continuous fund distributions. |





 

 

 

 



<a name="cosmos_protocolpool_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/protocolpool/v1/query.proto



<a name="cosmos-protocolpool-v1-QueryCommunityPoolRequest"></a>

### QueryCommunityPoolRequest
QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
method.






<a name="cosmos-protocolpool-v1-QueryCommunityPoolResponse"></a>

### QueryCommunityPoolResponse
QueryCommunityPoolResponse is the response type for the Query/CommunityPool
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | pool defines community pool&#39;s coins. |






<a name="cosmos-protocolpool-v1-QueryContinuousFundRequest"></a>

### QueryContinuousFundRequest
QueryContinuousFundRequest is the request type for the Query/ContinuousFund
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| recipient | [string](#string) |  | recipient is the recipient address to query unclaimed budget amount for. |






<a name="cosmos-protocolpool-v1-QueryContinuousFundResponse"></a>

### QueryContinuousFundResponse
QueryUnclaimedBudgetResponse is the response type for the Query/ContinuousFund
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| continuous_fund | [ContinuousFund](#cosmos-protocolpool-v1-ContinuousFund) |  | ContinuousFunds is the given continuous fund returned in the query. |






<a name="cosmos-protocolpool-v1-QueryContinuousFundsRequest"></a>

### QueryContinuousFundsRequest
QueryContinuousFundRequest is the request type for the Query/ContinuousFunds
RPC method.






<a name="cosmos-protocolpool-v1-QueryContinuousFundsResponse"></a>

### QueryContinuousFundsResponse
QueryUnclaimedBudgetResponse is the response type for the Query/ContinuousFunds
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| continuous_funds | [ContinuousFund](#cosmos-protocolpool-v1-ContinuousFund) | repeated | ContinuousFunds defines all continuous funds in state. |






<a name="cosmos-protocolpool-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the response type for the Query/Params RPC method.






<a name="cosmos-protocolpool-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-protocolpool-v1-Params) |  |  |





 

 

 


<a name="cosmos-protocolpool-v1-Query"></a>

### Query
Query defines the gRPC querier service for community pool module.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CommunityPool | [QueryCommunityPoolRequest](#cosmos-protocolpool-v1-QueryCommunityPoolRequest) | [QueryCommunityPoolResponse](#cosmos-protocolpool-v1-QueryCommunityPoolResponse) | CommunityPool queries the community pool coins. |
| ContinuousFund | [QueryContinuousFundRequest](#cosmos-protocolpool-v1-QueryContinuousFundRequest) | [QueryContinuousFundResponse](#cosmos-protocolpool-v1-QueryContinuousFundResponse) | ContinuousFund queries a continuous fund by the recipient is is associated with. |
| ContinuousFunds | [QueryContinuousFundsRequest](#cosmos-protocolpool-v1-QueryContinuousFundsRequest) | [QueryContinuousFundsResponse](#cosmos-protocolpool-v1-QueryContinuousFundsResponse) | ContinuousFunds queries all continuous funds in the store. |
| Params | [QueryParamsRequest](#cosmos-protocolpool-v1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-protocolpool-v1-QueryParamsResponse) | Params returns the total set of x/protocolpool parameters. |

 



<a name="cosmos_protocolpool_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/protocolpool/v1/tx.proto



<a name="cosmos-protocolpool-v1-MsgCancelContinuousFund"></a>

### MsgCancelContinuousFund
MsgCancelContinuousFund defines a message to cancel continuous funds for a specific recipient.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | Authority is the account address of authority. |
| recipient | [string](#string) |  | Recipient is the account address string of the recipient whose funds are to be cancelled. |






<a name="cosmos-protocolpool-v1-MsgCancelContinuousFundResponse"></a>

### MsgCancelContinuousFundResponse
MsgCancelContinuousFundResponse defines the response to executing a
MsgCancelContinuousFund message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| canceled_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | CanceledTime is the canceled time. |
| canceled_height | [uint64](#uint64) |  | CanceledHeight defines the canceled block height. |
| recipient | [string](#string) |  | Recipient is the account address string of the recipient whose funds are cancelled. |






<a name="cosmos-protocolpool-v1-MsgCommunityPoolSpend"></a>

### MsgCommunityPoolSpend
MsgCommunityPoolSpend defines a message for sending tokens from the community
pool to another account. This message is typically executed via a governance
proposal with the governance module being the executing authority.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | Authority is the address that controls the module (defaults to x/gov unless overwritten). |
| recipient | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-protocolpool-v1-MsgCommunityPoolSpendResponse"></a>

### MsgCommunityPoolSpendResponse
MsgCommunityPoolSpendResponse defines the response to executing a
MsgCommunityPoolSpend message.






<a name="cosmos-protocolpool-v1-MsgCreateContinuousFund"></a>

### MsgCreateContinuousFund
MsgCreateContinuousFund defines a message for adding continuous funds.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | Authority is the address that controls the module (defaults to x/gov unless overwritten). |
| recipient | [string](#string) |  | Recipient address of the account receiving funds. |
| percentage | [string](#string) |  | Percentage is the percentage of funds to be allocated from Community pool. |
| expiry | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Optional, if expiry is set, removes the state object when expired. |






<a name="cosmos-protocolpool-v1-MsgCreateContinuousFundResponse"></a>

### MsgCreateContinuousFundResponse
MsgCreateContinuousFundResponse defines the response to executing a
MsgCreateContinuousFund message.






<a name="cosmos-protocolpool-v1-MsgFundCommunityPool"></a>

### MsgFundCommunityPool
MsgFundCommunityPool allows an account to directly
fund the community pool.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| depositor | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-protocolpool-v1-MsgFundCommunityPoolResponse"></a>

### MsgFundCommunityPoolResponse
MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.






<a name="cosmos-protocolpool-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-protocolpool-v1-Params) |  | params defines the x/protocolpool parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-protocolpool-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="cosmos-protocolpool-v1-Msg"></a>

### Msg
Msg defines the pool Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| FundCommunityPool | [MsgFundCommunityPool](#cosmos-protocolpool-v1-MsgFundCommunityPool) | [MsgFundCommunityPoolResponse](#cosmos-protocolpool-v1-MsgFundCommunityPoolResponse) | FundCommunityPool defines a method to allow an account to directly fund the community pool. |
| CommunityPoolSpend | [MsgCommunityPoolSpend](#cosmos-protocolpool-v1-MsgCommunityPoolSpend) | [MsgCommunityPoolSpendResponse](#cosmos-protocolpool-v1-MsgCommunityPoolSpendResponse) | CommunityPoolSpend defines a governance operation for sending tokens from the community pool in the x/protocolpool module to another account, which could be the governance module itself. The authority is defined in the keeper. |
| CreateContinuousFund | [MsgCreateContinuousFund](#cosmos-protocolpool-v1-MsgCreateContinuousFund) | [MsgCreateContinuousFundResponse](#cosmos-protocolpool-v1-MsgCreateContinuousFundResponse) | CreateContinuousFund defines a method to distribute a percentage of funds to an address continuously. This ContinuousFund can be indefinite or run until a given expiry time. Funds come from validator block rewards from x/distribution, but may also come from any user who funds the ProtocolPoolEscrow module account directly through x/bank. |
| CancelContinuousFund | [MsgCancelContinuousFund](#cosmos-protocolpool-v1-MsgCancelContinuousFund) | [MsgCancelContinuousFundResponse](#cosmos-protocolpool-v1-MsgCancelContinuousFundResponse) | CancelContinuousFund defines a method for cancelling continuous fund. |
| UpdateParams | [MsgUpdateParams](#cosmos-protocolpool-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-protocolpool-v1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/protocolpool module parameters. The authority is defined in the keeper. |

 



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

