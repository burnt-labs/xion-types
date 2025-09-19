# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [amino/amino.proto](#amino_amino-proto)
    - [File-level Extensions](#amino_amino-proto-extensions)
    - [File-level Extensions](#amino_amino-proto-extensions)
    - [File-level Extensions](#amino_amino-proto-extensions)
    - [File-level Extensions](#amino_amino-proto-extensions)
    - [File-level Extensions](#amino_amino-proto-extensions)
    - [File-level Extensions](#amino_amino-proto-extensions)
  
- [Scalar Value Types](#scalar-value-types)



<a name="amino_amino-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## amino/amino.proto


 

 


<a name="amino_amino-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| dont_omitempty | bool | .google.protobuf.FieldOptions | 11110005 | dont_omitempty sets the field in the JSON object even if its value is empty, i.e. equal to the Golang zero value. To learn what the zero values are, see https://go.dev/ref/spec#The_zero_value.

Fields default to `omitempty`, which is the default behavior when this annotation is unset. When set to true, then the field value in the JSON object will be set, i.e. not `undefined`.

Example:

message Foo { string bar = 1; string baz = 2 [(amino.dont_omitempty) = true]; }

f := Foo{}; out := AminoJSONEncoder(&amp;f); out == {&#34;baz&#34;:&#34;&#34;} |
| encoding | string | .google.protobuf.FieldOptions | 11110003 | encoding describes the encoding format used by Amino for the given field. The field type is chosen to be a string for flexibility, but it should ideally be short and expected to be machine-readable, for example &#34;base64&#34; or &#34;utf8_json&#34;. We highly recommend to use underscores for word separation instead of spaces.

If left empty, then the Amino encoding is expected to be the same as the Protobuf one.

This annotation should not be confused with the `message_encoding` one which operates on the message level. |
| field_name | string | .google.protobuf.FieldOptions | 11110004 | field_name sets a different field name (i.e. key name) in the amino JSON object for the given field.

Example:

message Foo { string bar = 1 [(amino.field_name) = &#34;baz&#34;]; }

Then the Amino encoding of Foo will be: `{&#34;baz&#34;:&#34;some value&#34;}` |
| oneof_name | string | .google.protobuf.FieldOptions | 11110006 | oneof_name sets the type name for the given field oneof field. This is used by the Amino JSON encoder to encode the type of the oneof field, and must be the same string in the RegisterConcrete() method usage used to register the concrete type. |
| message_encoding | string | .google.protobuf.MessageOptions | 11110002 | encoding describes the encoding format used by Amino for the given message. The field type is chosen to be a string for flexibility, but it should ideally be short and expected to be machine-readable, for example &#34;base64&#34; or &#34;utf8_json&#34;. We highly recommend to use underscores for word separation instead of spaces.

If left empty, then the Amino encoding is expected to be the same as the Protobuf one.

This annotation should not be confused with the `encoding` one which operates on the field level. |
| name | string | .google.protobuf.MessageOptions | 11110001 | name is the string used when registering a concrete type into the Amino type registry, via the Amino codec&#39;s `RegisterConcrete()` method. This string MUST be at most 39 characters long, or else the message will be rejected by the Ledger hardware device. |

 

 



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

