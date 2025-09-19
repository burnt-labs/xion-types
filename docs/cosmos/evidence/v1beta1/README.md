# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/evidence/v1beta1/evidence.proto](#cosmos_evidence_v1beta1_evidence-proto)
    - [Equivocation](#cosmos-evidence-v1beta1-Equivocation)
  
- [cosmos/evidence/v1beta1/genesis.proto](#cosmos_evidence_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-evidence-v1beta1-GenesisState)
  
- [cosmos/evidence/v1beta1/query.proto](#cosmos_evidence_v1beta1_query-proto)
    - [QueryAllEvidenceRequest](#cosmos-evidence-v1beta1-QueryAllEvidenceRequest)
    - [QueryAllEvidenceResponse](#cosmos-evidence-v1beta1-QueryAllEvidenceResponse)
    - [QueryEvidenceRequest](#cosmos-evidence-v1beta1-QueryEvidenceRequest)
    - [QueryEvidenceResponse](#cosmos-evidence-v1beta1-QueryEvidenceResponse)
  
    - [Query](#cosmos-evidence-v1beta1-Query)
  
- [cosmos/evidence/v1beta1/tx.proto](#cosmos_evidence_v1beta1_tx-proto)
    - [MsgSubmitEvidence](#cosmos-evidence-v1beta1-MsgSubmitEvidence)
    - [MsgSubmitEvidenceResponse](#cosmos-evidence-v1beta1-MsgSubmitEvidenceResponse)
  
    - [Msg](#cosmos-evidence-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_evidence_v1beta1_evidence-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/evidence/v1beta1/evidence.proto



<a name="cosmos-evidence-v1beta1-Equivocation"></a>

### Equivocation
Equivocation implements the Evidence interface and defines evidence of double
signing misbehavior.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  | height is the equivocation height. |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | time is the equivocation time. |
| power | [int64](#int64) |  | power is the equivocation validator power. |
| consensus_address | [string](#string) |  | consensus_address is the equivocation validator consensus address. |





 

 

 

 



<a name="cosmos_evidence_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/evidence/v1beta1/genesis.proto



<a name="cosmos-evidence-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the evidence module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| evidence | [google.protobuf.Any](#google-protobuf-Any) | repeated | evidence defines all the evidence at genesis. |





 

 

 

 



<a name="cosmos_evidence_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/evidence/v1beta1/query.proto



<a name="cosmos-evidence-v1beta1-QueryAllEvidenceRequest"></a>

### QueryAllEvidenceRequest
QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-evidence-v1beta1-QueryAllEvidenceResponse"></a>

### QueryAllEvidenceResponse
QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| evidence | [google.protobuf.Any](#google-protobuf-Any) | repeated | evidence returns all evidences. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-evidence-v1beta1-QueryEvidenceRequest"></a>

### QueryEvidenceRequest
QueryEvidenceRequest is the request type for the Query/Evidence RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| evidence_hash | [bytes](#bytes) |  | **Deprecated.** evidence_hash defines the hash of the requested evidence. Deprecated: Use hash, a HEX encoded string, instead. |
| hash | [string](#string) |  | hash defines the evidence hash of the requested evidence. |






<a name="cosmos-evidence-v1beta1-QueryEvidenceResponse"></a>

### QueryEvidenceResponse
QueryEvidenceResponse is the response type for the Query/Evidence RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| evidence | [google.protobuf.Any](#google-protobuf-Any) |  | evidence returns the requested evidence. |





 

 

 


<a name="cosmos-evidence-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Evidence | [QueryEvidenceRequest](#cosmos-evidence-v1beta1-QueryEvidenceRequest) | [QueryEvidenceResponse](#cosmos-evidence-v1beta1-QueryEvidenceResponse) | Evidence queries evidence based on evidence hash. |
| AllEvidence | [QueryAllEvidenceRequest](#cosmos-evidence-v1beta1-QueryAllEvidenceRequest) | [QueryAllEvidenceResponse](#cosmos-evidence-v1beta1-QueryAllEvidenceResponse) | AllEvidence queries all evidence. |

 



<a name="cosmos_evidence_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/evidence/v1beta1/tx.proto



<a name="cosmos-evidence-v1beta1-MsgSubmitEvidence"></a>

### MsgSubmitEvidence
MsgSubmitEvidence represents a message that supports submitting arbitrary
Evidence of misbehavior such as equivocation or counterfactual signing.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| submitter | [string](#string) |  | submitter is the signer account address of evidence. |
| evidence | [google.protobuf.Any](#google-protobuf-Any) |  | evidence defines the evidence of misbehavior. |






<a name="cosmos-evidence-v1beta1-MsgSubmitEvidenceResponse"></a>

### MsgSubmitEvidenceResponse
MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | hash defines the hash of the evidence. |





 

 

 


<a name="cosmos-evidence-v1beta1-Msg"></a>

### Msg
Msg defines the evidence Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SubmitEvidence | [MsgSubmitEvidence](#cosmos-evidence-v1beta1-MsgSubmitEvidence) | [MsgSubmitEvidenceResponse](#cosmos-evidence-v1beta1-MsgSubmitEvidenceResponse) | SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or counterfactual signing. |

 



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

