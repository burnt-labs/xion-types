// @generated
/// QueryAllowanceRequest is the request type for the Query/Allowance RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllowanceRequest {
    /// granter is the address of the user granting an allowance of their funds.
    #[prost(string, tag="1")]
    pub granter: ::prost::alloc::string::String,
    /// grantee is the address of the user being granted an allowance of another
    /// user's funds.
    #[prost(string, tag="2")]
    pub grantee: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryAllowanceRequest {
const NAME: &'static str = "QueryAllowanceRequest";
const PACKAGE: &'static str = "xion.indexer.feegrant.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.indexer.feegrant.v1.{}", Self::NAME)
            }}
/// QueryAllowanceResponse is the response type for the Query/Allowance RPC
/// method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllowanceResponse {
    /// allowance is a allowance granted for grantee by granter.
    #[prost(message, optional, tag="1")]
    pub allowance: ::core::option::Option<super::super::super::super::cosmos::feegrant::v1beta1::Grant>,
}
impl ::prost::Name for QueryAllowanceResponse {
const NAME: &'static str = "QueryAllowanceResponse";
const PACKAGE: &'static str = "xion.indexer.feegrant.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.indexer.feegrant.v1.{}", Self::NAME)
            }}
/// QueryAllowancesRequest is the request type for the Query/Allowances RPC
/// method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllowancesRequest {
    /// grantee is the address of the user being granted fee allowances
    #[prost(string, tag="1")]
    pub grantee: ::prost::alloc::string::String,
    /// pagination defines pagination for the request.
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
impl ::prost::Name for QueryAllowancesRequest {
const NAME: &'static str = "QueryAllowancesRequest";
const PACKAGE: &'static str = "xion.indexer.feegrant.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.indexer.feegrant.v1.{}", Self::NAME)
            }}
/// QueryAllowancesResponse is the response type for the Query/Allowances RPC
/// method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllowancesResponse {
    /// allowances are allowances granted for grantee by granter.
    #[prost(message, repeated, tag="1")]
    pub allowances: ::prost::alloc::vec::Vec<super::super::super::super::cosmos::feegrant::v1beta1::Grant>,
    /// pagination defines pagination for the response.
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
impl ::prost::Name for QueryAllowancesResponse {
const NAME: &'static str = "QueryAllowancesResponse";
const PACKAGE: &'static str = "xion.indexer.feegrant.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.indexer.feegrant.v1.{}", Self::NAME)
            }}
/// QueryAllowancesByGranterRequest is the request type for the
/// Query/AllowancesByGranter RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllowancesByGranterRequest {
    /// granter is the address of the user granting fee allowances
    #[prost(string, tag="1")]
    pub granter: ::prost::alloc::string::String,
    /// pagination defines pagination for the request.
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
impl ::prost::Name for QueryAllowancesByGranterRequest {
const NAME: &'static str = "QueryAllowancesByGranterRequest";
const PACKAGE: &'static str = "xion.indexer.feegrant.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.indexer.feegrant.v1.{}", Self::NAME)
            }}
/// QueryAllowancesByGranterResponse is the response type for the
/// Query/AllowancesByGranter RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllowancesByGranterResponse {
    /// allowances that have been issued by the granter.
    #[prost(message, repeated, tag="1")]
    pub allowances: ::prost::alloc::vec::Vec<super::super::super::super::cosmos::feegrant::v1beta1::Grant>,
    /// pagination defines pagination for the response.
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
impl ::prost::Name for QueryAllowancesByGranterResponse {
const NAME: &'static str = "QueryAllowancesByGranterResponse";
const PACKAGE: &'static str = "xion.indexer.feegrant.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.indexer.feegrant.v1.{}", Self::NAME)
            }}
// @@protoc_insertion_point(module)
