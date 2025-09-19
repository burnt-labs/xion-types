# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos_proto/cosmos.proto](#cosmos_proto_cosmos-proto)
    - [InterfaceDescriptor](#cosmos_proto-InterfaceDescriptor)
    - [ScalarDescriptor](#cosmos_proto-ScalarDescriptor)
  
    - [ScalarType](#cosmos_proto-ScalarType)
  
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_proto_cosmos-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos_proto/cosmos.proto



<a name="cosmos_proto-InterfaceDescriptor"></a>

### InterfaceDescriptor
InterfaceDescriptor describes an interface type to be used with
accepts_interface and implements_interface and declared by declare_interface.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the name of the interface. It should be a short-name (without a period) such that the fully qualified name of the interface will be package.name, ex. for the package a.b and interface named C, the fully-qualified name will be a.b.C. |
| description | [string](#string) |  | description is a human-readable description of the interface and its purpose. |






<a name="cosmos_proto-ScalarDescriptor"></a>

### ScalarDescriptor
ScalarDescriptor describes an scalar type to be used with
the scalar field option and declared by declare_scalar.
Scalars extend simple protobuf built-in types with additional
syntax and semantics, for instance to represent big integers.
Scalars should ideally define an encoding such that there is only one
valid syntactical representation for a given semantic meaning,
i.e. the encoding should be deterministic.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the name of the scalar. It should be a short-name (without a period) such that the fully qualified name of the scalar will be package.name, ex. for the package a.b and scalar named C, the fully-qualified name will be a.b.C. |
| description | [string](#string) |  | description is a human-readable description of the scalar and its encoding format. For instance a big integer or decimal scalar should specify precisely the expected encoding format. |
| field_type | [ScalarType](#cosmos_proto-ScalarType) | repeated | field_type is the type of field with which this scalar can be used. Scalars can be used with one and only one type of field so that encoding standards and simple and clear. Currently only string and bytes fields are supported for scalars. |





 


<a name="cosmos_proto-ScalarType"></a>

### ScalarType


| Name | Number | Description |
| ---- | ------ | ----------- |
| SCALAR_TYPE_UNSPECIFIED | 0 |  |
| SCALAR_TYPE_STRING | 1 |  |
| SCALAR_TYPE_BYTES | 2 |  |


 


<a name="cosmos_proto_cosmos-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| accepts_interface | string | .google.protobuf.FieldOptions | 93001 | accepts_interface is used to annotate that a google.protobuf.Any field accepts messages that implement the specified interface. Interfaces should be declared using a declare_interface file option. |
| field_added_in | string | .google.protobuf.FieldOptions | 93003 | field_added_in is used to indicate from which version the field was added. |
| scalar | string | .google.protobuf.FieldOptions | 93002 | scalar is used to indicate that this field follows the formatting defined by the named scalar which should be declared with declare_scalar. Code generators may choose to use this information to map this field to a language-specific type representing the scalar. |
| declare_interface | InterfaceDescriptor | .google.protobuf.FileOptions | 793021 | declare_interface declares an interface type to be used with accepts_interface and implements_interface. Interface names are expected to follow the following convention such that their declaration can be discovered by tools: for a given interface type a.b.C, it is expected that the declaration will be found in a protobuf file named a/b/interfaces.proto in the file descriptor set. |
| declare_scalar | ScalarDescriptor | .google.protobuf.FileOptions | 793022 | declare_scalar declares a scalar type to be used with the scalar field option. Scalar names are expected to follow the following convention such that their declaration can be discovered by tools: for a given scalar type a.b.C, it is expected that the declaration will be found in a protobuf file named a/b/scalars.proto in the file descriptor set. |
| file_added_in | string | .google.protobuf.FileOptions | 793023 | file_added_in is used to indicate from which the version the file was added. |
| implements_interface | string | .google.protobuf.MessageOptions | 93001 | implements_interface is used to indicate the type name of the interface that a message implements so that it can be used in google.protobuf.Any fields that accept that interface. A message can implement multiple interfaces. Interfaces should be declared using a declare_interface file option. |
| message_added_in | string | .google.protobuf.MessageOptions | 93002 | message_added_in is used to indicate from which version the message was added. |
| method_added_in | string | .google.protobuf.MethodOptions | 93001 | method_added_in is used to indicate from which version the method was added. |

 

 



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

