# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/mint/v1beta1/mint.proto](#cosmos_mint_v1beta1_mint-proto)
    - [Minter](#cosmos-mint-v1beta1-Minter)
    - [Params](#cosmos-mint-v1beta1-Params)
  
- [cosmos/mint/v1beta1/genesis.proto](#cosmos_mint_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-mint-v1beta1-GenesisState)
  
- [cosmos/mint/v1beta1/query.proto](#cosmos_mint_v1beta1_query-proto)
    - [QueryAnnualProvisionsRequest](#cosmos-mint-v1beta1-QueryAnnualProvisionsRequest)
    - [QueryAnnualProvisionsResponse](#cosmos-mint-v1beta1-QueryAnnualProvisionsResponse)
    - [QueryInflationRequest](#cosmos-mint-v1beta1-QueryInflationRequest)
    - [QueryInflationResponse](#cosmos-mint-v1beta1-QueryInflationResponse)
    - [QueryParamsRequest](#cosmos-mint-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-mint-v1beta1-QueryParamsResponse)
  
    - [Query](#cosmos-mint-v1beta1-Query)
  
- [cosmos/mint/v1beta1/tx.proto](#cosmos_mint_v1beta1_tx-proto)
    - [MsgUpdateParams](#cosmos-mint-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-mint-v1beta1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmos-mint-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_mint_v1beta1_mint-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/mint/v1beta1/mint.proto



<a name="cosmos-mint-v1beta1-Minter"></a>

### Minter
Minter represents the minting state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inflation | [string](#string) |  | current annual inflation rate |
| annual_provisions | [string](#string) |  | current annual expected provisions |






<a name="cosmos-mint-v1beta1-Params"></a>

### Params
Params defines the parameters for the x/mint module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mint_denom | [string](#string) |  | type of coin to mint |
| inflation_rate_change | [string](#string) |  | maximum annual change in inflation rate |
| inflation_max | [string](#string) |  | maximum inflation rate |
| inflation_min | [string](#string) |  | minimum inflation rate |
| goal_bonded | [string](#string) |  | goal of percent bonded atoms |
| blocks_per_year | [uint64](#uint64) |  | expected blocks per year |





 

 

 

 



<a name="cosmos_mint_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/mint/v1beta1/genesis.proto



<a name="cosmos-mint-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the mint module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| minter | [Minter](#cosmos-mint-v1beta1-Minter) |  | minter is a space for holding current inflation information. |
| params | [Params](#cosmos-mint-v1beta1-Params) |  | params defines all the parameters of the module. |





 

 

 

 



<a name="cosmos_mint_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/mint/v1beta1/query.proto



<a name="cosmos-mint-v1beta1-QueryAnnualProvisionsRequest"></a>

### QueryAnnualProvisionsRequest
QueryAnnualProvisionsRequest is the request type for the
Query/AnnualProvisions RPC method.






<a name="cosmos-mint-v1beta1-QueryAnnualProvisionsResponse"></a>

### QueryAnnualProvisionsResponse
QueryAnnualProvisionsResponse is the response type for the
Query/AnnualProvisions RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| annual_provisions | [bytes](#bytes) |  | annual_provisions is the current minting annual provisions value. |






<a name="cosmos-mint-v1beta1-QueryInflationRequest"></a>

### QueryInflationRequest
QueryInflationRequest is the request type for the Query/Inflation RPC method.






<a name="cosmos-mint-v1beta1-QueryInflationResponse"></a>

### QueryInflationResponse
QueryInflationResponse is the response type for the Query/Inflation RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inflation | [bytes](#bytes) |  | inflation is the current minting inflation value. |






<a name="cosmos-mint-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="cosmos-mint-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-mint-v1beta1-Params) |  | params defines the parameters of the module. |





 

 

 


<a name="cosmos-mint-v1beta1-Query"></a>

### Query
Query provides defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#cosmos-mint-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-mint-v1beta1-QueryParamsResponse) | Params returns the total set of minting parameters. |
| Inflation | [QueryInflationRequest](#cosmos-mint-v1beta1-QueryInflationRequest) | [QueryInflationResponse](#cosmos-mint-v1beta1-QueryInflationResponse) | Inflation returns the current minting inflation value. |
| AnnualProvisions | [QueryAnnualProvisionsRequest](#cosmos-mint-v1beta1-QueryAnnualProvisionsRequest) | [QueryAnnualProvisionsResponse](#cosmos-mint-v1beta1-QueryAnnualProvisionsResponse) | AnnualProvisions current minting annual provisions value. |

 



<a name="cosmos_mint_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/mint/v1beta1/tx.proto



<a name="cosmos-mint-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-mint-v1beta1-Params) |  | params defines the x/mint parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-mint-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="cosmos-mint-v1beta1-Msg"></a>

### Msg
Msg defines the x/mint Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UpdateParams | [MsgUpdateParams](#cosmos-mint-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-mint-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/mint module parameters. The authority is defaults to the x/gov module account. |

 



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

