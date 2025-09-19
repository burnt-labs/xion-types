# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/autocli/v1/options.proto](#cosmos_autocli_v1_options-proto)
    - [FlagOptions](#cosmos-autocli-v1-FlagOptions)
    - [ModuleOptions](#cosmos-autocli-v1-ModuleOptions)
    - [PositionalArgDescriptor](#cosmos-autocli-v1-PositionalArgDescriptor)
    - [RpcCommandOptions](#cosmos-autocli-v1-RpcCommandOptions)
    - [RpcCommandOptions.FlagOptionsEntry](#cosmos-autocli-v1-RpcCommandOptions-FlagOptionsEntry)
    - [ServiceCommandDescriptor](#cosmos-autocli-v1-ServiceCommandDescriptor)
    - [ServiceCommandDescriptor.SubCommandsEntry](#cosmos-autocli-v1-ServiceCommandDescriptor-SubCommandsEntry)
  
- [cosmos/autocli/v1/query.proto](#cosmos_autocli_v1_query-proto)
    - [AppOptionsRequest](#cosmos-autocli-v1-AppOptionsRequest)
    - [AppOptionsResponse](#cosmos-autocli-v1-AppOptionsResponse)
    - [AppOptionsResponse.ModuleOptionsEntry](#cosmos-autocli-v1-AppOptionsResponse-ModuleOptionsEntry)
  
    - [Query](#cosmos-autocli-v1-Query)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_autocli_v1_options-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/autocli/v1/options.proto



<a name="cosmos-autocli-v1-FlagOptions"></a>

### FlagOptions
FlagOptions are options for flags generated from rpc request fields.
By default, all request fields are configured as flags based on the
kebab-case name of the field. Fields can be turned into positional arguments
instead by using RpcCommandOptions.positional_args.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is an alternate name to use for the field flag. |
| shorthand | [string](#string) |  | shorthand is a one-letter abbreviated flag. |
| usage | [string](#string) |  | usage is the help message. |
| default_value | [string](#string) |  | default_value is the default value as text. |
| deprecated | [string](#string) |  | deprecated is the usage text to show if this flag is deprecated. |
| shorthand_deprecated | [string](#string) |  | shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated. |
| hidden | [bool](#bool) |  | hidden hides the flag from help/usage text |






<a name="cosmos-autocli-v1-ModuleOptions"></a>

### ModuleOptions
ModuleOptions describes the CLI options for a Cosmos SDK module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx | [ServiceCommandDescriptor](#cosmos-autocli-v1-ServiceCommandDescriptor) |  | tx describes the tx commands for the module. |
| query | [ServiceCommandDescriptor](#cosmos-autocli-v1-ServiceCommandDescriptor) |  | query describes the queries commands for the module. |






<a name="cosmos-autocli-v1-PositionalArgDescriptor"></a>

### PositionalArgDescriptor
PositionalArgDescriptor describes a positional argument.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proto_field | [string](#string) |  | proto_field specifies the proto field to use as the positional arg. Any fields used as positional args will not have a flag generated. |
| varargs | [bool](#bool) |  | varargs makes a positional parameter a varargs parameter. This can only be applied to last positional parameter and the proto_field must a repeated field. Note: It is mutually exclusive with optional. |
| optional | [bool](#bool) |  | optional makes the last positional parameter optional. Note: It is mutually exclusive with varargs. |






<a name="cosmos-autocli-v1-RpcCommandOptions"></a>

### RpcCommandOptions
RpcCommandOptions specifies options for commands generated from protobuf
rpc methods.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rpc_method | [string](#string) |  | rpc_method is short name of the protobuf rpc method that this command is generated from. |
| use | [string](#string) |  | use is the one-line usage method. It also allows specifying an alternate name for the command as the first word of the usage text.

By default the name of an rpc command is the kebab-case short name of the rpc method. |
| long | [string](#string) |  | long is the long message shown in the &#39;help &lt;this-command&gt;&#39; output. |
| short | [string](#string) |  | short is the short description shown in the &#39;help&#39; output. |
| example | [string](#string) |  | example is examples of how to use the command. |
| alias | [string](#string) | repeated | alias is an array of aliases that can be used instead of the first word in Use. |
| suggest_for | [string](#string) | repeated | suggest_for is an array of command names for which this command will be suggested - similar to aliases but only suggests. |
| deprecated | [string](#string) |  | deprecated defines, if this command is deprecated and should print this string when used. |
| version | [string](#string) |  | version defines the version for this command. If this value is non-empty and the command does not define a &#34;version&#34; flag, a &#34;version&#34; boolean flag will be added to the command and, if specified, will print content of the &#34;Version&#34; variable. A shorthand &#34;v&#34; flag will also be added if the command does not define one. |
| flag_options | [RpcCommandOptions.FlagOptionsEntry](#cosmos-autocli-v1-RpcCommandOptions-FlagOptionsEntry) | repeated | flag_options are options for flags generated from rpc request fields. By default all request fields are configured as flags. They can also be configured as positional args instead using positional_args. |
| positional_args | [PositionalArgDescriptor](#cosmos-autocli-v1-PositionalArgDescriptor) | repeated | positional_args specifies positional arguments for the command. |
| skip | [bool](#bool) |  | skip specifies whether to skip this rpc method when generating commands. |
| gov_proposal | [bool](#bool) |  | gov_proposal specifies whether autocli should generate a gov proposal transaction for this rpc method. Normally autocli generates a transaction containing the message and broadcast it. However, when true, autocli generates a proposal transaction containing the message and broadcast it. This option is ineffective for query commands. |






<a name="cosmos-autocli-v1-RpcCommandOptions-FlagOptionsEntry"></a>

### RpcCommandOptions.FlagOptionsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [FlagOptions](#cosmos-autocli-v1-FlagOptions) |  |  |






<a name="cosmos-autocli-v1-ServiceCommandDescriptor"></a>

### ServiceCommandDescriptor
ServiceCommandDescriptor describes a CLI command based on a protobuf service.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| service | [string](#string) |  | service is the fully qualified name of the protobuf service to build the command from. It can be left empty if sub_commands are used instead which may be the case if a module provides multiple tx and/or query services. |
| rpc_command_options | [RpcCommandOptions](#cosmos-autocli-v1-RpcCommandOptions) | repeated | rpc_command_options are options for commands generated from rpc methods. If no options are specified for a given rpc method on the service, a command will be generated for that method with the default options. |
| sub_commands | [ServiceCommandDescriptor.SubCommandsEntry](#cosmos-autocli-v1-ServiceCommandDescriptor-SubCommandsEntry) | repeated | sub_commands is a map of optional sub-commands for this command based on different protobuf services. The map key is used as the name of the sub-command. |
| enhance_custom_command | [bool](#bool) |  | enhance_custom_commands specifies whether to skip the service when generating commands, if a custom command already exists, or enhance the existing command. If set to true, the custom command will be enhanced with the services from gRPC. otherwise when a custom command exists, no commands will be generated for the service. |
| short | [string](#string) |  | short is an optional parameter used to override the short description of the auto generated command. |






<a name="cosmos-autocli-v1-ServiceCommandDescriptor-SubCommandsEntry"></a>

### ServiceCommandDescriptor.SubCommandsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [ServiceCommandDescriptor](#cosmos-autocli-v1-ServiceCommandDescriptor) |  |  |





 

 

 

 



<a name="cosmos_autocli_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/autocli/v1/query.proto



<a name="cosmos-autocli-v1-AppOptionsRequest"></a>

### AppOptionsRequest
AppOptionsRequest is the RemoteInfoService/AppOptions request type.






<a name="cosmos-autocli-v1-AppOptionsResponse"></a>

### AppOptionsResponse
AppOptionsResponse is the RemoteInfoService/AppOptions response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_options | [AppOptionsResponse.ModuleOptionsEntry](#cosmos-autocli-v1-AppOptionsResponse-ModuleOptionsEntry) | repeated | module_options is a map of module name to autocli module options. |






<a name="cosmos-autocli-v1-AppOptionsResponse-ModuleOptionsEntry"></a>

### AppOptionsResponse.ModuleOptionsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [ModuleOptions](#cosmos-autocli-v1-ModuleOptions) |  |  |





 

 

 


<a name="cosmos-autocli-v1-Query"></a>

### Query
RemoteInfoService provides clients with the information they need
to build dynamically CLI clients for remote chains.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| AppOptions | [AppOptionsRequest](#cosmos-autocli-v1-AppOptionsRequest) | [AppOptionsResponse](#cosmos-autocli-v1-AppOptionsResponse) | AppOptions returns the autocli options for all of the modules in an app. |

 



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

