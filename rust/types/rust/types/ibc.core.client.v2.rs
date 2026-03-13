// @generated
/// Config is a **per-client** configuration struct that sets which relayers are allowed to relay v2 IBC messages
/// for a given client.
/// If it is set, then only relayers in the allow list can send v2 messages
/// If it is not set, then the client allows permissionless relaying of v2 messages
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Config {
    /// allowed_relayers defines the set of allowed relayers for IBC V2 protocol for the given client
    #[prost(string, repeated, tag="1")]
    pub allowed_relayers: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
}
impl ::prost::Name for Config {
const NAME: &'static str = "Config";
const PACKAGE: &'static str = "ibc.core.client.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.client.v2.{}", Self::NAME)
            }}
/// CounterpartyInfo defines the key that the counterparty will use to message our client
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CounterpartyInfo {
    /// merkle prefix key is the prefix that ics provable keys are stored under
    #[prost(bytes="vec", repeated, tag="1")]
    pub merkle_prefix: ::prost::alloc::vec::Vec<::prost::alloc::vec::Vec<u8>>,
    /// client identifier is the identifier used to send packet messages to our client
    #[prost(string, tag="2")]
    pub client_id: ::prost::alloc::string::String,
}
impl ::prost::Name for CounterpartyInfo {
const NAME: &'static str = "CounterpartyInfo";
const PACKAGE: &'static str = "ibc.core.client.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.client.v2.{}", Self::NAME)
            }}
/// GenesisCounterpartyInfo defines the state associating a client with a counterparty.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenesisCounterpartyInfo {
    /// ClientId is the ID of the given client.
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
    /// CounterpartyInfo is the counterparty info of the given client.
    #[prost(message, optional, tag="2")]
    pub counterparty_info: ::core::option::Option<CounterpartyInfo>,
}
impl ::prost::Name for GenesisCounterpartyInfo {
const NAME: &'static str = "GenesisCounterpartyInfo";
const PACKAGE: &'static str = "ibc.core.client.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.client.v2.{}", Self::NAME)
            }}
/// GenesisState defines the ibc client v2 submodule's genesis state.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenesisState {
    /// counterparty info for each client
    #[prost(message, repeated, tag="1")]
    pub counterparty_infos: ::prost::alloc::vec::Vec<GenesisCounterpartyInfo>,
}
impl ::prost::Name for GenesisState {
const NAME: &'static str = "GenesisState";
const PACKAGE: &'static str = "ibc.core.client.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.client.v2.{}", Self::NAME)
            }}
/// QueryCounterpartyInfoRequest is the request type for the Query/CounterpartyInfo RPC
/// method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryCounterpartyInfoRequest {
    /// client state unique identifier
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryCounterpartyInfoRequest {
const NAME: &'static str = "QueryCounterpartyInfoRequest";
const PACKAGE: &'static str = "ibc.core.client.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.client.v2.{}", Self::NAME)
            }}
/// QueryCounterpartyInfoResponse is the response type for the
/// Query/CounterpartyInfo RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryCounterpartyInfoResponse {
    #[prost(message, optional, tag="1")]
    pub counterparty_info: ::core::option::Option<CounterpartyInfo>,
}
impl ::prost::Name for QueryCounterpartyInfoResponse {
const NAME: &'static str = "QueryCounterpartyInfoResponse";
const PACKAGE: &'static str = "ibc.core.client.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.client.v2.{}", Self::NAME)
            }}
/// QueryConfigRequest is the request type for the Query/Config RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryConfigRequest {
    /// client state unique identifier
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryConfigRequest {
const NAME: &'static str = "QueryConfigRequest";
const PACKAGE: &'static str = "ibc.core.client.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.client.v2.{}", Self::NAME)
            }}
/// QueryConfigResponse is the response type for the Query/Config RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryConfigResponse {
    #[prost(message, optional, tag="1")]
    pub config: ::core::option::Option<Config>,
}
impl ::prost::Name for QueryConfigResponse {
const NAME: &'static str = "QueryConfigResponse";
const PACKAGE: &'static str = "ibc.core.client.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.client.v2.{}", Self::NAME)
            }}
/// MsgRegisterCounterparty defines a message to register a counterparty on a client
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRegisterCounterparty {
    /// client identifier
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
    /// counterparty merkle prefix
    #[prost(bytes="vec", repeated, tag="2")]
    pub counterparty_merkle_prefix: ::prost::alloc::vec::Vec<::prost::alloc::vec::Vec<u8>>,
    /// counterparty client identifier
    #[prost(string, tag="3")]
    pub counterparty_client_id: ::prost::alloc::string::String,
    /// signer address
    #[prost(string, tag="4")]
    pub signer: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgRegisterCounterparty {
const NAME: &'static str = "MsgRegisterCounterparty";
const PACKAGE: &'static str = "ibc.core.client.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.client.v2.{}", Self::NAME)
            }}
/// MsgRegisterCounterpartyResponse defines the Msg/RegisterCounterparty response type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRegisterCounterpartyResponse {
}
impl ::prost::Name for MsgRegisterCounterpartyResponse {
const NAME: &'static str = "MsgRegisterCounterpartyResponse";
const PACKAGE: &'static str = "ibc.core.client.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.client.v2.{}", Self::NAME)
            }}
/// MsgUpdateClientConfig defines the sdk.Msg type to update the configuration for a given client
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateClientConfig {
    /// client identifier
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
    /// allowed relayers
    ///
    /// NOTE: All fields in the config must be supplied.
    #[prost(message, optional, tag="2")]
    pub config: ::core::option::Option<Config>,
    /// signer address
    #[prost(string, tag="3")]
    pub signer: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgUpdateClientConfig {
const NAME: &'static str = "MsgUpdateClientConfig";
const PACKAGE: &'static str = "ibc.core.client.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.client.v2.{}", Self::NAME)
            }}
/// MsgUpdateClientConfigResponse defines the MsgUpdateClientConfig response type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateClientConfigResponse {
}
impl ::prost::Name for MsgUpdateClientConfigResponse {
const NAME: &'static str = "MsgUpdateClientConfigResponse";
const PACKAGE: &'static str = "ibc.core.client.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.client.v2.{}", Self::NAME)
            }}
// @@protoc_insertion_point(module)
