# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/base/reflection/v1beta1/reflection.proto](#cosmos_base_reflection_v1beta1_reflection-proto)
    - [ListAllInterfacesRequest](#cosmos-base-reflection-v1beta1-ListAllInterfacesRequest)
    - [ListAllInterfacesResponse](#cosmos-base-reflection-v1beta1-ListAllInterfacesResponse)
    - [ListImplementationsRequest](#cosmos-base-reflection-v1beta1-ListImplementationsRequest)
    - [ListImplementationsResponse](#cosmos-base-reflection-v1beta1-ListImplementationsResponse)
  
    - [ReflectionService](#cosmos-base-reflection-v1beta1-ReflectionService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_base_reflection_v1beta1_reflection-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/reflection/v1beta1/reflection.proto



<a name="cosmos-base-reflection-v1beta1-ListAllInterfacesRequest"></a>

### ListAllInterfacesRequest
ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC.






<a name="cosmos-base-reflection-v1beta1-ListAllInterfacesResponse"></a>

### ListAllInterfacesResponse
ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interface_names | [string](#string) | repeated | interface_names is an array of all the registered interfaces. |






<a name="cosmos-base-reflection-v1beta1-ListImplementationsRequest"></a>

### ListImplementationsRequest
ListImplementationsRequest is the request type of the ListImplementations
RPC.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interface_name | [string](#string) |  | interface_name defines the interface to query the implementations for. |






<a name="cosmos-base-reflection-v1beta1-ListImplementationsResponse"></a>

### ListImplementationsResponse
ListImplementationsResponse is the response type of the ListImplementations
RPC.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| implementation_message_names | [string](#string) | repeated |  |





 

 

 


<a name="cosmos-base-reflection-v1beta1-ReflectionService"></a>

### ReflectionService
ReflectionService defines a service for interface reflection.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListAllInterfaces | [ListAllInterfacesRequest](#cosmos-base-reflection-v1beta1-ListAllInterfacesRequest) | [ListAllInterfacesResponse](#cosmos-base-reflection-v1beta1-ListAllInterfacesResponse) | ListAllInterfaces lists all the interfaces registered in the interface registry. |
| ListImplementations | [ListImplementationsRequest](#cosmos-base-reflection-v1beta1-ListImplementationsRequest) | [ListImplementationsResponse](#cosmos-base-reflection-v1beta1-ListImplementationsResponse) | ListImplementations list all the concrete types that implement a given interface. |

 



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

