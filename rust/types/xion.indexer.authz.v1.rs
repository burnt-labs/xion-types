// @generated
/// QueryGrantsRequest is the request type for the Query/Grants RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGrantsRequest {
    /// granter is the address of the user granting an authorization
    #[prost(string, tag="1")]
    pub granter: ::prost::alloc::string::String,
    /// grantee is the address of the user receiving an authorization
    #[prost(string, tag="2")]
    pub grantee: ::prost::alloc::string::String,
    /// Optional, msg_type_url, when set, will query only grants matching given msg
    /// type.
    #[prost(string, tag="3")]
    pub msg_type_url: ::prost::alloc::string::String,
    /// pagination defines pagination for the request.
    #[prost(message, optional, tag="4")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
impl ::prost::Name for QueryGrantsRequest {
const NAME: &'static str = "QueryGrantsRequest";
const PACKAGE: &'static str = "xion.indexer.authz.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.indexer.authz.v1.{}", Self::NAME)
            }}
/// QueryGrantsResponse is the response type for the Query/Authorizations RPC
/// method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGrantsResponse {
    /// authorizations is a list of grants granted for grantee by granter.
    #[prost(message, repeated, tag="1")]
    pub grants: ::prost::alloc::vec::Vec<super::super::super::super::cosmos::authz::v1beta1::Grant>,
    /// pagination defines pagination for the response.
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
impl ::prost::Name for QueryGrantsResponse {
const NAME: &'static str = "QueryGrantsResponse";
const PACKAGE: &'static str = "xion.indexer.authz.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.indexer.authz.v1.{}", Self::NAME)
            }}
/// QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC
/// method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGranterGrantsRequest {
    /// granter is the address of the user granting an authorization
    #[prost(string, tag="1")]
    pub granter: ::prost::alloc::string::String,
    /// pagination defines pagination for the request.
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
impl ::prost::Name for QueryGranterGrantsRequest {
const NAME: &'static str = "QueryGranterGrantsRequest";
const PACKAGE: &'static str = "xion.indexer.authz.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.indexer.authz.v1.{}", Self::NAME)
            }}
/// QueryGranterGrantsResponse is the response type for the Query/GranterGrants
/// RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGranterGrantsResponse {
    /// grants is a list of grants granted by the granter.
    #[prost(message, repeated, tag="1")]
    pub grants: ::prost::alloc::vec::Vec<super::super::super::super::cosmos::authz::v1beta1::GrantAuthorization>,
    /// pagination defines pagination for the response.
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
impl ::prost::Name for QueryGranterGrantsResponse {
const NAME: &'static str = "QueryGranterGrantsResponse";
const PACKAGE: &'static str = "xion.indexer.authz.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.indexer.authz.v1.{}", Self::NAME)
            }}
/// QueryGranteeGrantsRequest is the request type for the Query/GranteeGrants RPC
/// method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGranteeGrantsRequest {
    /// grantee is the address of the user receiving an authorization
    #[prost(string, tag="1")]
    pub grantee: ::prost::alloc::string::String,
    /// pagination defines pagination for the request.
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
impl ::prost::Name for QueryGranteeGrantsRequest {
const NAME: &'static str = "QueryGranteeGrantsRequest";
const PACKAGE: &'static str = "xion.indexer.authz.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.indexer.authz.v1.{}", Self::NAME)
            }}
/// QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants
/// RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGranteeGrantsResponse {
    /// grants is a list of grants granted to the grantee.
    #[prost(message, repeated, tag="1")]
    pub grants: ::prost::alloc::vec::Vec<super::super::super::super::cosmos::authz::v1beta1::GrantAuthorization>,
    /// pagination defines pagination for the response.
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
impl ::prost::Name for QueryGranteeGrantsResponse {
const NAME: &'static str = "QueryGranteeGrantsResponse";
const PACKAGE: &'static str = "xion.indexer.authz.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.indexer.authz.v1.{}", Self::NAME)
            }}
// @@protoc_insertion_point(module)
