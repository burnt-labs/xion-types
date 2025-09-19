# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/base/reflection/v2alpha1/reflection.proto](#cosmos_base_reflection_v2alpha1_reflection-proto)
    - [AppDescriptor](#cosmos-base-reflection-v2alpha1-AppDescriptor)
    - [AuthnDescriptor](#cosmos-base-reflection-v2alpha1-AuthnDescriptor)
    - [ChainDescriptor](#cosmos-base-reflection-v2alpha1-ChainDescriptor)
    - [CodecDescriptor](#cosmos-base-reflection-v2alpha1-CodecDescriptor)
    - [ConfigurationDescriptor](#cosmos-base-reflection-v2alpha1-ConfigurationDescriptor)
    - [GetAuthnDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetAuthnDescriptorRequest)
    - [GetAuthnDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetAuthnDescriptorResponse)
    - [GetChainDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetChainDescriptorRequest)
    - [GetChainDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetChainDescriptorResponse)
    - [GetCodecDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetCodecDescriptorRequest)
    - [GetCodecDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetCodecDescriptorResponse)
    - [GetConfigurationDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetConfigurationDescriptorRequest)
    - [GetConfigurationDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetConfigurationDescriptorResponse)
    - [GetQueryServicesDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetQueryServicesDescriptorRequest)
    - [GetQueryServicesDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetQueryServicesDescriptorResponse)
    - [GetTxDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetTxDescriptorRequest)
    - [GetTxDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetTxDescriptorResponse)
    - [InterfaceAcceptingMessageDescriptor](#cosmos-base-reflection-v2alpha1-InterfaceAcceptingMessageDescriptor)
    - [InterfaceDescriptor](#cosmos-base-reflection-v2alpha1-InterfaceDescriptor)
    - [InterfaceImplementerDescriptor](#cosmos-base-reflection-v2alpha1-InterfaceImplementerDescriptor)
    - [MsgDescriptor](#cosmos-base-reflection-v2alpha1-MsgDescriptor)
    - [QueryMethodDescriptor](#cosmos-base-reflection-v2alpha1-QueryMethodDescriptor)
    - [QueryServiceDescriptor](#cosmos-base-reflection-v2alpha1-QueryServiceDescriptor)
    - [QueryServicesDescriptor](#cosmos-base-reflection-v2alpha1-QueryServicesDescriptor)
    - [SigningModeDescriptor](#cosmos-base-reflection-v2alpha1-SigningModeDescriptor)
    - [TxDescriptor](#cosmos-base-reflection-v2alpha1-TxDescriptor)
  
    - [ReflectionService](#cosmos-base-reflection-v2alpha1-ReflectionService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_base_reflection_v2alpha1_reflection-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/reflection/v2alpha1/reflection.proto



<a name="cosmos-base-reflection-v2alpha1-AppDescriptor"></a>

### AppDescriptor
AppDescriptor describes a cosmos-sdk based application


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authn | [AuthnDescriptor](#cosmos-base-reflection-v2alpha1-AuthnDescriptor) |  | AuthnDescriptor provides information on how to authenticate transactions on the application NOTE: experimental and subject to change in future releases. |
| chain | [ChainDescriptor](#cosmos-base-reflection-v2alpha1-ChainDescriptor) |  | chain provides the chain descriptor |
| codec | [CodecDescriptor](#cosmos-base-reflection-v2alpha1-CodecDescriptor) |  | codec provides metadata information regarding codec related types |
| configuration | [ConfigurationDescriptor](#cosmos-base-reflection-v2alpha1-ConfigurationDescriptor) |  | configuration provides metadata information regarding the sdk.Config type |
| query_services | [QueryServicesDescriptor](#cosmos-base-reflection-v2alpha1-QueryServicesDescriptor) |  | query_services provides metadata information regarding the available queriable endpoints |
| tx | [TxDescriptor](#cosmos-base-reflection-v2alpha1-TxDescriptor) |  | tx provides metadata information regarding how to send transactions to the given application |






<a name="cosmos-base-reflection-v2alpha1-AuthnDescriptor"></a>

### AuthnDescriptor
AuthnDescriptor provides information on how to sign transactions without relying
on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sign_modes | [SigningModeDescriptor](#cosmos-base-reflection-v2alpha1-SigningModeDescriptor) | repeated | sign_modes defines the supported signature algorithm |






<a name="cosmos-base-reflection-v2alpha1-ChainDescriptor"></a>

### ChainDescriptor
ChainDescriptor describes chain information of the application


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | id is the chain id |






<a name="cosmos-base-reflection-v2alpha1-CodecDescriptor"></a>

### CodecDescriptor
CodecDescriptor describes the registered interfaces and provides metadata information on the types


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interfaces | [InterfaceDescriptor](#cosmos-base-reflection-v2alpha1-InterfaceDescriptor) | repeated | interfaces is a list of the registerted interfaces descriptors |






<a name="cosmos-base-reflection-v2alpha1-ConfigurationDescriptor"></a>

### ConfigurationDescriptor
ConfigurationDescriptor contains metadata information on the sdk.Config


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bech32_account_address_prefix | [string](#string) |  | bech32_account_address_prefix is the account address prefix |






<a name="cosmos-base-reflection-v2alpha1-GetAuthnDescriptorRequest"></a>

### GetAuthnDescriptorRequest
GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC






<a name="cosmos-base-reflection-v2alpha1-GetAuthnDescriptorResponse"></a>

### GetAuthnDescriptorResponse
GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authn | [AuthnDescriptor](#cosmos-base-reflection-v2alpha1-AuthnDescriptor) |  | authn describes how to authenticate to the application when sending transactions |






<a name="cosmos-base-reflection-v2alpha1-GetChainDescriptorRequest"></a>

### GetChainDescriptorRequest
GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC






<a name="cosmos-base-reflection-v2alpha1-GetChainDescriptorResponse"></a>

### GetChainDescriptorResponse
GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chain | [ChainDescriptor](#cosmos-base-reflection-v2alpha1-ChainDescriptor) |  | chain describes application chain information |






<a name="cosmos-base-reflection-v2alpha1-GetCodecDescriptorRequest"></a>

### GetCodecDescriptorRequest
GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC






<a name="cosmos-base-reflection-v2alpha1-GetCodecDescriptorResponse"></a>

### GetCodecDescriptorResponse
GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| codec | [CodecDescriptor](#cosmos-base-reflection-v2alpha1-CodecDescriptor) |  | codec describes the application codec such as registered interfaces and implementations |






<a name="cosmos-base-reflection-v2alpha1-GetConfigurationDescriptorRequest"></a>

### GetConfigurationDescriptorRequest
GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC






<a name="cosmos-base-reflection-v2alpha1-GetConfigurationDescriptorResponse"></a>

### GetConfigurationDescriptorResponse
GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| config | [ConfigurationDescriptor](#cosmos-base-reflection-v2alpha1-ConfigurationDescriptor) |  | config describes the application&#39;s sdk.Config |






<a name="cosmos-base-reflection-v2alpha1-GetQueryServicesDescriptorRequest"></a>

### GetQueryServicesDescriptorRequest
GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC






<a name="cosmos-base-reflection-v2alpha1-GetQueryServicesDescriptorResponse"></a>

### GetQueryServicesDescriptorResponse
GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| queries | [QueryServicesDescriptor](#cosmos-base-reflection-v2alpha1-QueryServicesDescriptor) |  | queries provides information on the available queryable services |






<a name="cosmos-base-reflection-v2alpha1-GetTxDescriptorRequest"></a>

### GetTxDescriptorRequest
GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC






<a name="cosmos-base-reflection-v2alpha1-GetTxDescriptorResponse"></a>

### GetTxDescriptorResponse
GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx | [TxDescriptor](#cosmos-base-reflection-v2alpha1-TxDescriptor) |  | tx provides information on msgs that can be forwarded to the application alongside the accepted transaction protobuf type |






<a name="cosmos-base-reflection-v2alpha1-InterfaceAcceptingMessageDescriptor"></a>

### InterfaceAcceptingMessageDescriptor
InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
an interface represented as a google.protobuf.Any


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fullname | [string](#string) |  | fullname is the protobuf fullname of the type containing the interface |
| field_descriptor_names | [string](#string) | repeated | field_descriptor_names is a list of the protobuf name (not fullname) of the field which contains the interface as google.protobuf.Any (the interface is the same, but it can be in multiple fields of the same proto message) |






<a name="cosmos-base-reflection-v2alpha1-InterfaceDescriptor"></a>

### InterfaceDescriptor
InterfaceDescriptor describes the implementation of an interface


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fullname | [string](#string) |  | fullname is the name of the interface |
| interface_accepting_messages | [InterfaceAcceptingMessageDescriptor](#cosmos-base-reflection-v2alpha1-InterfaceAcceptingMessageDescriptor) | repeated | interface_accepting_messages contains information regarding the proto messages which contain the interface as google.protobuf.Any field |
| interface_implementers | [InterfaceImplementerDescriptor](#cosmos-base-reflection-v2alpha1-InterfaceImplementerDescriptor) | repeated | interface_implementers is a list of the descriptors of the interface implementers |






<a name="cosmos-base-reflection-v2alpha1-InterfaceImplementerDescriptor"></a>

### InterfaceImplementerDescriptor
InterfaceImplementerDescriptor describes an interface implementer


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fullname | [string](#string) |  | fullname is the protobuf queryable name of the interface implementer |
| type_url | [string](#string) |  | type_url defines the type URL used when marshalling the type as any this is required so we can provide type safe google.protobuf.Any marshalling and unmarshalling, making sure that we don&#39;t accept just &#39;any&#39; type in our interface fields |






<a name="cosmos-base-reflection-v2alpha1-MsgDescriptor"></a>

### MsgDescriptor
MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_type_url | [string](#string) |  | msg_type_url contains the TypeURL of a sdk.Msg. |






<a name="cosmos-base-reflection-v2alpha1-QueryMethodDescriptor"></a>

### QueryMethodDescriptor
QueryMethodDescriptor describes a queryable method of a query service
no other info is provided beside method name and tendermint queryable path
because it would be redundant with the grpc reflection service


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the protobuf name (not fullname) of the method |
| full_query_path | [string](#string) |  | full_query_path is the path that can be used to query this method via tendermint abci.Query |






<a name="cosmos-base-reflection-v2alpha1-QueryServiceDescriptor"></a>

### QueryServiceDescriptor
QueryServiceDescriptor describes a cosmos-sdk queryable service


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fullname | [string](#string) |  | fullname is the protobuf fullname of the service descriptor |
| is_module | [bool](#bool) |  | is_module describes if this service is actually exposed by an application&#39;s module |
| methods | [QueryMethodDescriptor](#cosmos-base-reflection-v2alpha1-QueryMethodDescriptor) | repeated | methods provides a list of query service methods |






<a name="cosmos-base-reflection-v2alpha1-QueryServicesDescriptor"></a>

### QueryServicesDescriptor
QueryServicesDescriptor contains the list of cosmos-sdk queriable services


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query_services | [QueryServiceDescriptor](#cosmos-base-reflection-v2alpha1-QueryServiceDescriptor) | repeated | query_services is a list of cosmos-sdk QueryServiceDescriptor |






<a name="cosmos-base-reflection-v2alpha1-SigningModeDescriptor"></a>

### SigningModeDescriptor
SigningModeDescriptor provides information on a signing flow of the application
NOTE(fdymylja): here we could go as far as providing an entire flow on how
to sign a message given a SigningModeDescriptor, but it&#39;s better to think about
this another time


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name defines the unique name of the signing mode |
| number | [int32](#int32) |  | number is the unique int32 identifier for the sign_mode enum |
| authn_info_provider_method_fullname | [string](#string) |  | authn_info_provider_method_fullname defines the fullname of the method to call to get the metadata required to authenticate using the provided sign_modes |






<a name="cosmos-base-reflection-v2alpha1-TxDescriptor"></a>

### TxDescriptor
TxDescriptor describes the accepted transaction type


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fullname | [string](#string) |  | fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type) it is not meant to support polymorphism of transaction types, it is supposed to be used by reflection clients to understand if they can handle a specific transaction type in an application. |
| msgs | [MsgDescriptor](#cosmos-base-reflection-v2alpha1-MsgDescriptor) | repeated | msgs lists the accepted application messages (sdk.Msg) |





 

 

 


<a name="cosmos-base-reflection-v2alpha1-ReflectionService"></a>

### ReflectionService
ReflectionService defines a service for application reflection.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetAuthnDescriptor | [GetAuthnDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetAuthnDescriptorRequest) | [GetAuthnDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetAuthnDescriptorResponse) | GetAuthnDescriptor returns information on how to authenticate transactions in the application NOTE: this RPC is still experimental and might be subject to breaking changes or removal in future releases of the cosmos-sdk. |
| GetChainDescriptor | [GetChainDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetChainDescriptorRequest) | [GetChainDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetChainDescriptorResponse) | GetChainDescriptor returns the description of the chain |
| GetCodecDescriptor | [GetCodecDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetCodecDescriptorRequest) | [GetCodecDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetCodecDescriptorResponse) | GetCodecDescriptor returns the descriptor of the codec of the application |
| GetConfigurationDescriptor | [GetConfigurationDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetConfigurationDescriptorRequest) | [GetConfigurationDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetConfigurationDescriptorResponse) | GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application |
| GetQueryServicesDescriptor | [GetQueryServicesDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetQueryServicesDescriptorRequest) | [GetQueryServicesDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetQueryServicesDescriptorResponse) | GetQueryServicesDescriptor returns the available gRPC queryable services of the application |
| GetTxDescriptor | [GetTxDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetTxDescriptorRequest) | [GetTxDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetTxDescriptorResponse) | GetTxDescriptor returns information on the used transaction object and available msgs that can be used |

 



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

