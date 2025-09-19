# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [xion/jwk/v1/audience.proto](#xion_jwk_v1_audience-proto)
    - [Audience](#xion-jwk-v1-Audience)
    - [AudienceClaim](#xion-jwk-v1-AudienceClaim)
  
- [xion/jwk/v1/params.proto](#xion_jwk_v1_params-proto)
    - [Params](#xion-jwk-v1-Params)
  
- [xion/jwk/v1/genesis.proto](#xion_jwk_v1_genesis-proto)
    - [GenesisState](#xion-jwk-v1-GenesisState)
  
- [xion/jwk/v1/query.proto](#xion_jwk_v1_query-proto)
    - [PrivateClaim](#xion-jwk-v1-PrivateClaim)
    - [QueryAllAudienceRequest](#xion-jwk-v1-QueryAllAudienceRequest)
    - [QueryAllAudienceResponse](#xion-jwk-v1-QueryAllAudienceResponse)
    - [QueryAudienceAllRequest](#xion-jwk-v1-QueryAudienceAllRequest)
    - [QueryAudienceAllResponse](#xion-jwk-v1-QueryAudienceAllResponse)
    - [QueryAudienceClaimRequest](#xion-jwk-v1-QueryAudienceClaimRequest)
    - [QueryAudienceClaimResponse](#xion-jwk-v1-QueryAudienceClaimResponse)
    - [QueryAudienceRequest](#xion-jwk-v1-QueryAudienceRequest)
    - [QueryAudienceResponse](#xion-jwk-v1-QueryAudienceResponse)
    - [QueryGetAudienceClaimRequest](#xion-jwk-v1-QueryGetAudienceClaimRequest)
    - [QueryGetAudienceClaimResponse](#xion-jwk-v1-QueryGetAudienceClaimResponse)
    - [QueryGetAudienceRequest](#xion-jwk-v1-QueryGetAudienceRequest)
    - [QueryGetAudienceResponse](#xion-jwk-v1-QueryGetAudienceResponse)
    - [QueryParamsRequest](#xion-jwk-v1-QueryParamsRequest)
    - [QueryParamsResponse](#xion-jwk-v1-QueryParamsResponse)
    - [QueryValidateJWTRequest](#xion-jwk-v1-QueryValidateJWTRequest)
    - [QueryValidateJWTResponse](#xion-jwk-v1-QueryValidateJWTResponse)
  
    - [Query](#xion-jwk-v1-Query)
  
- [xion/jwk/v1/tx.proto](#xion_jwk_v1_tx-proto)
    - [MsgCreateAudience](#xion-jwk-v1-MsgCreateAudience)
    - [MsgCreateAudienceClaim](#xion-jwk-v1-MsgCreateAudienceClaim)
    - [MsgCreateAudienceClaimResponse](#xion-jwk-v1-MsgCreateAudienceClaimResponse)
    - [MsgCreateAudienceResponse](#xion-jwk-v1-MsgCreateAudienceResponse)
    - [MsgDeleteAudience](#xion-jwk-v1-MsgDeleteAudience)
    - [MsgDeleteAudienceClaim](#xion-jwk-v1-MsgDeleteAudienceClaim)
    - [MsgDeleteAudienceClaimResponse](#xion-jwk-v1-MsgDeleteAudienceClaimResponse)
    - [MsgDeleteAudienceResponse](#xion-jwk-v1-MsgDeleteAudienceResponse)
    - [MsgUpdateAudience](#xion-jwk-v1-MsgUpdateAudience)
    - [MsgUpdateAudienceResponse](#xion-jwk-v1-MsgUpdateAudienceResponse)
  
    - [Msg](#xion-jwk-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="xion_jwk_v1_audience-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/jwk/v1/audience.proto



<a name="xion-jwk-v1-Audience"></a>

### Audience
Audience represents a JWT audience configuration


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| aud | [string](#string) |  | The audience identifier |
| key | [string](#string) |  | The public key associated with this audience |
| admin | [string](#string) |  | The admin address for this audience |






<a name="xion-jwk-v1-AudienceClaim"></a>

### AudienceClaim
AudienceClaim represents a claim for an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | The signer of the audience claim |





 

 

 

 



<a name="xion_jwk_v1_params-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/jwk/v1/params.proto



<a name="xion-jwk-v1-Params"></a>

### Params
Params defines the parameters for the module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| time_offset | [uint64](#uint64) |  | Time offset in nanoseconds for JWT validation |
| deployment_gas | [uint64](#uint64) |  | Gas required to deploy a new project/audience |





 

 

 

 



<a name="xion_jwk_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/jwk/v1/genesis.proto



<a name="xion-jwk-v1-GenesisState"></a>

### GenesisState
GenesisState defines the jwk module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#xion-jwk-v1-Params) |  | The module parameters |
| audience_list | [Audience](#xion-jwk-v1-Audience) | repeated | List of all audiences |





 

 

 

 



<a name="xion_jwk_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/jwk/v1/query.proto



<a name="xion-jwk-v1-PrivateClaim"></a>

### PrivateClaim
PrivateClaim represents a private claim in a JWT


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  | The claim key |
| value | [string](#string) |  | The claim value |






<a name="xion-jwk-v1-QueryAllAudienceRequest"></a>

### QueryAllAudienceRequest
QueryAllAudienceRequest is the legacy request type for querying all audiences
(deprecated)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | Pagination parameters |






<a name="xion-jwk-v1-QueryAllAudienceResponse"></a>

### QueryAllAudienceResponse
QueryAllAudienceResponse is the legacy response type for querying all
audiences (deprecated)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| audience | [Audience](#xion-jwk-v1-Audience) | repeated | List of all audiences |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | Pagination response |






<a name="xion-jwk-v1-QueryAudienceAllRequest"></a>

### QueryAudienceAllRequest
QueryAudienceAllRequest is the request type for querying all audiences


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | Pagination parameters |






<a name="xion-jwk-v1-QueryAudienceAllResponse"></a>

### QueryAudienceAllResponse
QueryAudienceAllResponse is the response type for querying all audiences


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| audience | [Audience](#xion-jwk-v1-Audience) | repeated | List of all audiences |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | Pagination response |






<a name="xion-jwk-v1-QueryAudienceClaimRequest"></a>

### QueryAudienceClaimRequest
QueryAudienceClaimRequest is the request type for querying an audience claim


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | The hash of the audience claim to query |






<a name="xion-jwk-v1-QueryAudienceClaimResponse"></a>

### QueryAudienceClaimResponse
QueryAudienceClaimResponse is the response type for querying an audience
claim


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| claim | [AudienceClaim](#xion-jwk-v1-AudienceClaim) |  | The audience claim |






<a name="xion-jwk-v1-QueryAudienceRequest"></a>

### QueryAudienceRequest
QueryAudienceRequest is the request type for querying an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| aud | [string](#string) |  | The audience identifier to query |






<a name="xion-jwk-v1-QueryAudienceResponse"></a>

### QueryAudienceResponse
QueryAudienceResponse is the response type for querying an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| audience | [Audience](#xion-jwk-v1-Audience) |  | The audience information |






<a name="xion-jwk-v1-QueryGetAudienceClaimRequest"></a>

### QueryGetAudienceClaimRequest
QueryGetAudienceClaimRequest is the legacy request type for querying an
audience claim (deprecated)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | The hash of the audience claim to query |






<a name="xion-jwk-v1-QueryGetAudienceClaimResponse"></a>

### QueryGetAudienceClaimResponse
QueryGetAudienceClaimResponse is the legacy response type for querying an
audience claim (deprecated)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| claim | [AudienceClaim](#xion-jwk-v1-AudienceClaim) |  | The audience claim |






<a name="xion-jwk-v1-QueryGetAudienceRequest"></a>

### QueryGetAudienceRequest
QueryGetAudienceRequest is the legacy request type for querying an audience
(deprecated)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| aud | [string](#string) |  | The audience identifier to query |






<a name="xion-jwk-v1-QueryGetAudienceResponse"></a>

### QueryGetAudienceResponse
QueryGetAudienceResponse is the legacy response type for querying an audience
(deprecated)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| audience | [Audience](#xion-jwk-v1-Audience) |  | The audience information |






<a name="xion-jwk-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is request type for the Query/Params RPC method.






<a name="xion-jwk-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#xion-jwk-v1-Params) |  | params holds all the parameters of this module. |






<a name="xion-jwk-v1-QueryValidateJWTRequest"></a>

### QueryValidateJWTRequest
QueryValidateJWTRequest is the request type for validating a JWT


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| aud | [string](#string) |  | The audience identifier |
| sub | [string](#string) |  | The subject |
| sig_bytes | [string](#string) |  | The signature bytes |






<a name="xion-jwk-v1-QueryValidateJWTResponse"></a>

### QueryValidateJWTResponse
QueryValidateJWTResponse is the response type for validating a JWT


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| private_claims | [PrivateClaim](#xion-jwk-v1-PrivateClaim) | repeated | The private claims from the JWT |





 

 

 


<a name="xion-jwk-v1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#xion-jwk-v1-QueryParamsRequest) | [QueryParamsResponse](#xion-jwk-v1-QueryParamsResponse) | Parameters queries the parameters of the module. |
| AudienceClaim | [QueryAudienceClaimRequest](#xion-jwk-v1-QueryAudienceClaimRequest) | [QueryAudienceClaimResponse](#xion-jwk-v1-QueryAudienceClaimResponse) | AudienceClaim queries an audience claim by hash |
| Audience | [QueryAudienceRequest](#xion-jwk-v1-QueryAudienceRequest) | [QueryAudienceResponse](#xion-jwk-v1-QueryAudienceResponse) | Queries a list of Audience items. |
| AudienceAll | [QueryAudienceAllRequest](#xion-jwk-v1-QueryAudienceAllRequest) | [QueryAudienceAllResponse](#xion-jwk-v1-QueryAudienceAllResponse) | AudienceAll queries all audiences |
| ValidateJWT | [QueryValidateJWTRequest](#xion-jwk-v1-QueryValidateJWTRequest) | [QueryValidateJWTResponse](#xion-jwk-v1-QueryValidateJWTResponse) | Queries a list of ValidateJWT items. |

 



<a name="xion_jwk_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/jwk/v1/tx.proto



<a name="xion-jwk-v1-MsgCreateAudience"></a>

### MsgCreateAudience
MsgCreateAudience defines the message for creating an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | The admin address creating the audience |
| aud | [string](#string) |  | The audience identifier |
| key | [string](#string) |  | The public key for this audience |






<a name="xion-jwk-v1-MsgCreateAudienceClaim"></a>

### MsgCreateAudienceClaim
MsgCreateAudienceClaim defines the message for creating an audience claim


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | The admin address creating the claim |
| aud_hash | [bytes](#bytes) |  | The hash of the audience for this claim |






<a name="xion-jwk-v1-MsgCreateAudienceClaimResponse"></a>

### MsgCreateAudienceClaimResponse
MsgCreateAudienceClaimResponse defines the response for creating an audience
claim






<a name="xion-jwk-v1-MsgCreateAudienceResponse"></a>

### MsgCreateAudienceResponse
MsgCreateAudienceResponse defines the response for creating an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| audience | [Audience](#xion-jwk-v1-Audience) |  | The created audience |






<a name="xion-jwk-v1-MsgDeleteAudience"></a>

### MsgDeleteAudience
MsgDeleteAudience defines the message for deleting an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | The admin address deleting the audience |
| aud | [string](#string) |  | The audience identifier to delete |






<a name="xion-jwk-v1-MsgDeleteAudienceClaim"></a>

### MsgDeleteAudienceClaim
MsgDeleteAudienceClaim defines the message for deleting an audience claim


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | The admin address deleting the claim |
| aud_hash | [bytes](#bytes) |  | The hash of the audience for this claim |






<a name="xion-jwk-v1-MsgDeleteAudienceClaimResponse"></a>

### MsgDeleteAudienceClaimResponse
MsgDeleteAudienceClaimResponse defines the response for deleting an audience
claim






<a name="xion-jwk-v1-MsgDeleteAudienceResponse"></a>

### MsgDeleteAudienceResponse
MsgDeleteAudienceResponse defines the response for deleting an audience






<a name="xion-jwk-v1-MsgUpdateAudience"></a>

### MsgUpdateAudience
MsgUpdateAudience defines the message for updating an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | The current admin address |
| new_admin | [string](#string) |  | The new admin address |
| aud | [string](#string) |  | The current audience identifier |
| key | [string](#string) |  | The current public key |
| new_aud | [string](#string) |  | The new audience identifier |






<a name="xion-jwk-v1-MsgUpdateAudienceResponse"></a>

### MsgUpdateAudienceResponse
MsgUpdateAudienceResponse defines the response for updating an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| audience | [Audience](#xion-jwk-v1-Audience) |  | The updated audience |





 

 

 


<a name="xion-jwk-v1-Msg"></a>

### Msg
Msg defines the Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateAudienceClaim | [MsgCreateAudienceClaim](#xion-jwk-v1-MsgCreateAudienceClaim) | [MsgCreateAudienceClaimResponse](#xion-jwk-v1-MsgCreateAudienceClaimResponse) | CreateAudienceClaim creates a new audience claim |
| DeleteAudienceClaim | [MsgDeleteAudienceClaim](#xion-jwk-v1-MsgDeleteAudienceClaim) | [MsgDeleteAudienceClaimResponse](#xion-jwk-v1-MsgDeleteAudienceClaimResponse) | DeleteAudienceClaim deletes an existing audience claim |
| CreateAudience | [MsgCreateAudience](#xion-jwk-v1-MsgCreateAudience) | [MsgCreateAudienceResponse](#xion-jwk-v1-MsgCreateAudienceResponse) | CreateAudience creates a new audience |
| UpdateAudience | [MsgUpdateAudience](#xion-jwk-v1-MsgUpdateAudience) | [MsgUpdateAudienceResponse](#xion-jwk-v1-MsgUpdateAudienceResponse) | UpdateAudience updates an existing audience |
| DeleteAudience | [MsgDeleteAudience](#xion-jwk-v1-MsgDeleteAudience) | [MsgDeleteAudienceResponse](#xion-jwk-v1-MsgDeleteAudienceResponse) | DeleteAudience deletes an existing audience |

 



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

