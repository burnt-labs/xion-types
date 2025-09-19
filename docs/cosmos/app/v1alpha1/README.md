# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/app/v1alpha1/config.proto](#cosmos_app_v1alpha1_config-proto)
    - [Config](#cosmos-app-v1alpha1-Config)
    - [GolangBinding](#cosmos-app-v1alpha1-GolangBinding)
    - [ModuleConfig](#cosmos-app-v1alpha1-ModuleConfig)
  
- [cosmos/app/v1alpha1/module.proto](#cosmos_app_v1alpha1_module-proto)
    - [MigrateFromInfo](#cosmos-app-v1alpha1-MigrateFromInfo)
    - [ModuleDescriptor](#cosmos-app-v1alpha1-ModuleDescriptor)
    - [PackageReference](#cosmos-app-v1alpha1-PackageReference)
  
    - [File-level Extensions](#cosmos_app_v1alpha1_module-proto-extensions)
  
- [cosmos/app/v1alpha1/query.proto](#cosmos_app_v1alpha1_query-proto)
    - [QueryConfigRequest](#cosmos-app-v1alpha1-QueryConfigRequest)
    - [QueryConfigResponse](#cosmos-app-v1alpha1-QueryConfigResponse)
  
    - [Query](#cosmos-app-v1alpha1-Query)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_app_v1alpha1_config-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/app/v1alpha1/config.proto



<a name="cosmos-app-v1alpha1-Config"></a>

### Config
Config represents the configuration for a Cosmos SDK ABCI app.
It is intended that all state machine logic including the version of
baseapp and tx handlers (and possibly even Tendermint) that an app needs
can be described in a config object. For compatibility, the framework should
allow a mixture of declarative and imperative app wiring, however, apps
that strive for the maximum ease of maintainability should be able to describe
their state machine with a config object alone.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| modules | [ModuleConfig](#cosmos-app-v1alpha1-ModuleConfig) | repeated | modules are the module configurations for the app. |
| golang_bindings | [GolangBinding](#cosmos-app-v1alpha1-GolangBinding) | repeated | golang_bindings specifies explicit interface to implementation type bindings which depinject uses to resolve interface inputs to provider functions. The scope of this field&#39;s configuration is global (not module specific). |






<a name="cosmos-app-v1alpha1-GolangBinding"></a>

### GolangBinding
GolangBinding is an explicit interface type to implementing type binding for dependency injection.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interface_type | [string](#string) |  | interface_type is the interface type which will be bound to a specific implementation type |
| implementation | [string](#string) |  | implementation is the implementing type which will be supplied when an input of type interface is requested |






<a name="cosmos-app-v1alpha1-ModuleConfig"></a>

### ModuleConfig
ModuleConfig is a module configuration for an app.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the unique name of the module within the app. It should be a name that persists between different versions of a module so that modules can be smoothly upgraded to new versions.

For example, for the module cosmos.bank.module.v1.Module, we may chose to simply name the module &#34;bank&#34; in the app. When we upgrade to cosmos.bank.module.v2.Module, the app-specific name &#34;bank&#34; stays the same and the framework knows that the v2 module should receive all the same state that the v1 module had. Note: modules should provide info on which versions they can migrate from in the ModuleDescriptor.can_migration_from field. |
| config | [google.protobuf.Any](#google-protobuf-Any) |  | config is the config object for the module. Module config messages should define a ModuleDescriptor using the cosmos.app.v1alpha1.is_module extension. |
| golang_bindings | [GolangBinding](#cosmos-app-v1alpha1-GolangBinding) | repeated | golang_bindings specifies explicit interface to implementation type bindings which depinject uses to resolve interface inputs to provider functions. The scope of this field&#39;s configuration is module specific. |





 

 

 

 



<a name="cosmos_app_v1alpha1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/app/v1alpha1/module.proto



<a name="cosmos-app-v1alpha1-MigrateFromInfo"></a>

### MigrateFromInfo
MigrateFromInfo is information on a module version that a newer module
can migrate from.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module | [string](#string) |  | module is the fully-qualified protobuf name of the module config object for the previous module version, ex: &#34;cosmos.group.module.v1.Module&#34;. |






<a name="cosmos-app-v1alpha1-ModuleDescriptor"></a>

### ModuleDescriptor
ModuleDescriptor describes an app module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| go_import | [string](#string) |  | go_import names the package that should be imported by an app to load the module in the runtime module registry. It is required to make debugging of configuration errors easier for users. |
| use_package | [PackageReference](#cosmos-app-v1alpha1-PackageReference) | repeated | use_package refers to a protobuf package that this module uses and exposes to the world. In an app, only one module should &#34;use&#34; or own a single protobuf package. It is assumed that the module uses all of the .proto files in a single package. |
| can_migrate_from | [MigrateFromInfo](#cosmos-app-v1alpha1-MigrateFromInfo) | repeated | can_migrate_from defines which module versions this module can migrate state from. The framework will check that one module version is able to migrate from a previous module version before attempting to update its config. It is assumed that modules can transitively migrate from earlier versions. For instance if v3 declares it can migrate from v2, and v2 declares it can migrate from v1, the framework knows how to migrate from v1 to v3, assuming all 3 module versions are registered at runtime. |






<a name="cosmos-app-v1alpha1-PackageReference"></a>

### PackageReference
PackageReference is a reference to a protobuf package used by a module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the fully-qualified name of the package. |
| revision | [uint32](#uint32) |  | revision is the optional revision of the package that is being used. Protobuf packages used in Cosmos should generally have a major version as the last part of the package name, ex. foo.bar.baz.v1. The revision of a package can be thought of as the minor version of a package which has additional backwards compatible definitions that weren&#39;t present in a previous version.

A package should indicate its revision with a source code comment above the package declaration in one of its files containing the text &#34;Revision N&#34; where N is an integer revision. All packages start at revision 0 the first time they are released in a module.

When a new version of a module is released and items are added to existing .proto files, these definitions should contain comments of the form &#34;Since: Revision N&#34; where N is an integer revision.

When the module runtime starts up, it will check the pinned proto image and panic if there are runtime protobuf definitions that are not in the pinned descriptor which do not have a &#34;Since Revision N&#34; comment or have a &#34;Since Revision N&#34; comment where N is &lt;= to the revision specified here. This indicates that the protobuf files have been updated, but the pinned file descriptor hasn&#39;t.

If there are items in the pinned file descriptor with a revision greater than the value indicated here, this will also cause a panic as it may mean that the pinned descriptor for a legacy module has been improperly updated or that there is some other versioning discrepancy. Runtime protobuf definitions will also be checked for compatibility with pinned file descriptors to make sure there are no incompatible changes.

This behavior ensures that: * pinned proto images are up-to-date * protobuf files are carefully annotated with revision comments which are important good client UX * protobuf files are changed in backwards and forwards compatible ways |





 

 


<a name="cosmos_app_v1alpha1_module-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| module | ModuleDescriptor | .google.protobuf.MessageOptions | 57193479 | module indicates that this proto type is a config object for an app module and optionally provides other descriptive information about the module. It is recommended that a new module config object and go module is versioned for every state machine breaking version of a module. The recommended pattern for doing this is to put module config objects in a separate proto package from the API they expose. Ex: the cosmos.group.v1 API would be exposed by module configs cosmos.group.module.v1, cosmos.group.module.v2, etc. |

 

 



<a name="cosmos_app_v1alpha1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/app/v1alpha1/query.proto



<a name="cosmos-app-v1alpha1-QueryConfigRequest"></a>

### QueryConfigRequest
QueryConfigRequest is the Query/Config request type.






<a name="cosmos-app-v1alpha1-QueryConfigResponse"></a>

### QueryConfigResponse
QueryConfigResponse is the Query/Config response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| config | [Config](#cosmos-app-v1alpha1-Config) |  | config is the current app config. |





 

 

 


<a name="cosmos-app-v1alpha1-Query"></a>

### Query
Query is the app module query service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Config | [QueryConfigRequest](#cosmos-app-v1alpha1-QueryConfigRequest) | [QueryConfigResponse](#cosmos-app-v1alpha1-QueryConfigResponse) | Config returns the current app config. |

 



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

