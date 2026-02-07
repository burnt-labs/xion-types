// @generated
/// Audience represents a JWT audience configuration
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Audience {
    /// The audience identifier
    #[prost(string, tag="1")]
    pub aud: ::prost::alloc::string::String,
    /// The public key associated with this audience
    #[prost(string, tag="2")]
    pub key: ::prost::alloc::string::String,
    /// The admin address for this audience
    #[prost(string, tag="3")]
    pub admin: ::prost::alloc::string::String,
}
impl ::prost::Name for Audience {
const NAME: &'static str = "Audience";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// AudienceClaim represents a claim for an audience
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AudienceClaim {
    /// The signer of the audience claim
    #[prost(string, tag="1")]
    pub signer: ::prost::alloc::string::String,
}
impl ::prost::Name for AudienceClaim {
const NAME: &'static str = "AudienceClaim";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// Params defines the parameters for the module.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Params {
    /// Time offset in nanoseconds for JWT validation
    #[prost(uint64, tag="1")]
    pub time_offset: u64,
    /// Gas required to deploy a new project/audience
    #[prost(uint64, tag="2")]
    pub deployment_gas: u64,
}
impl ::prost::Name for Params {
const NAME: &'static str = "Params";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// GenesisState defines the jwk module's genesis state.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenesisState {
    /// The module parameters
    #[prost(message, optional, tag="1")]
    pub params: ::core::option::Option<Params>,
    /// List of all audiences
    #[prost(message, repeated, tag="2")]
    pub audience_list: ::prost::alloc::vec::Vec<Audience>,
}
impl ::prost::Name for GenesisState {
const NAME: &'static str = "GenesisState";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryParamsRequest is request type for the Query/Params RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryParamsRequest {
}
impl ::prost::Name for QueryParamsRequest {
const NAME: &'static str = "QueryParamsRequest";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryParamsResponse is response type for the Query/Params RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryParamsResponse {
    /// params holds all the parameters of this module.
    #[prost(message, optional, tag="1")]
    pub params: ::core::option::Option<Params>,
}
impl ::prost::Name for QueryParamsResponse {
const NAME: &'static str = "QueryParamsResponse";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryAudienceClaimRequest is the request type for querying an audience claim
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAudienceClaimRequest {
    /// The hash of the audience claim to query
    #[prost(bytes="vec", tag="1")]
    pub hash: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for QueryAudienceClaimRequest {
const NAME: &'static str = "QueryAudienceClaimRequest";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryAudienceClaimResponse is the response type for querying an audience
/// claim
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAudienceClaimResponse {
    /// The audience claim
    #[prost(message, optional, tag="1")]
    pub claim: ::core::option::Option<AudienceClaim>,
}
impl ::prost::Name for QueryAudienceClaimResponse {
const NAME: &'static str = "QueryAudienceClaimResponse";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryGetAudienceClaimRequest is the legacy request type for querying an
/// audience claim (deprecated)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGetAudienceClaimRequest {
    /// The hash of the audience claim to query
    #[prost(bytes="vec", tag="1")]
    pub hash: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for QueryGetAudienceClaimRequest {
const NAME: &'static str = "QueryGetAudienceClaimRequest";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryGetAudienceClaimResponse is the legacy response type for querying an
/// audience claim (deprecated)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGetAudienceClaimResponse {
    /// The audience claim
    #[prost(message, optional, tag="1")]
    pub claim: ::core::option::Option<AudienceClaim>,
}
impl ::prost::Name for QueryGetAudienceClaimResponse {
const NAME: &'static str = "QueryGetAudienceClaimResponse";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryAudienceRequest is the request type for querying an audience
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAudienceRequest {
    /// The audience identifier to query
    #[prost(string, tag="1")]
    pub aud: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryAudienceRequest {
const NAME: &'static str = "QueryAudienceRequest";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryAudienceResponse is the response type for querying an audience
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAudienceResponse {
    /// The audience information
    #[prost(message, optional, tag="1")]
    pub audience: ::core::option::Option<Audience>,
}
impl ::prost::Name for QueryAudienceResponse {
const NAME: &'static str = "QueryAudienceResponse";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryGetAudienceRequest is the legacy request type for querying an audience
/// (deprecated)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGetAudienceRequest {
    /// The audience identifier to query
    #[prost(string, tag="1")]
    pub aud: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryGetAudienceRequest {
const NAME: &'static str = "QueryGetAudienceRequest";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryGetAudienceResponse is the legacy response type for querying an audience
/// (deprecated)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryGetAudienceResponse {
    /// The audience information
    #[prost(message, optional, tag="1")]
    pub audience: ::core::option::Option<Audience>,
}
impl ::prost::Name for QueryGetAudienceResponse {
const NAME: &'static str = "QueryGetAudienceResponse";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryAudienceAllRequest is the request type for querying all audiences
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAudienceAllRequest {
    /// Pagination parameters
    #[prost(message, optional, tag="1")]
    pub pagination: ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
impl ::prost::Name for QueryAudienceAllRequest {
const NAME: &'static str = "QueryAudienceAllRequest";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryAudienceAllResponse is the response type for querying all audiences
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAudienceAllResponse {
    /// List of all audiences
    #[prost(message, repeated, tag="1")]
    pub audience: ::prost::alloc::vec::Vec<Audience>,
    /// Pagination response
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
impl ::prost::Name for QueryAudienceAllResponse {
const NAME: &'static str = "QueryAudienceAllResponse";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryAllAudienceRequest is the legacy request type for querying all audiences
/// (deprecated)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllAudienceRequest {
    /// Pagination parameters
    #[prost(message, optional, tag="1")]
    pub pagination: ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
impl ::prost::Name for QueryAllAudienceRequest {
const NAME: &'static str = "QueryAllAudienceRequest";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryAllAudienceResponse is the legacy response type for querying all
/// audiences (deprecated)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllAudienceResponse {
    /// List of all audiences
    #[prost(message, repeated, tag="1")]
    pub audience: ::prost::alloc::vec::Vec<Audience>,
    /// Pagination response
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
impl ::prost::Name for QueryAllAudienceResponse {
const NAME: &'static str = "QueryAllAudienceResponse";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryValidateJWTRequest is the request type for validating a JWT
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryValidateJwtRequest {
    /// The audience identifier
    #[prost(string, tag="1")]
    pub aud: ::prost::alloc::string::String,
    /// The subject
    #[prost(string, tag="2")]
    pub sub: ::prost::alloc::string::String,
    /// The signature bytes
    #[prost(string, tag="3")]
    pub sig_bytes: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryValidateJwtRequest {
const NAME: &'static str = "QueryValidateJWTRequest";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// PrivateClaim represents a private claim in a JWT
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PrivateClaim {
    /// The claim key
    #[prost(string, tag="1")]
    pub key: ::prost::alloc::string::String,
    /// The claim value
    #[prost(string, tag="2")]
    pub value: ::prost::alloc::string::String,
}
impl ::prost::Name for PrivateClaim {
const NAME: &'static str = "PrivateClaim";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// QueryValidateJWTResponse is the response type for validating a JWT
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryValidateJwtResponse {
    /// The private claims from the JWT
    #[prost(message, repeated, tag="1")]
    pub private_claims: ::prost::alloc::vec::Vec<PrivateClaim>,
}
impl ::prost::Name for QueryValidateJwtResponse {
const NAME: &'static str = "QueryValidateJWTResponse";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// MsgCreateAudienceClaim defines the message for creating an audience claim
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgCreateAudienceClaim {
    /// The admin address creating the claim
    #[prost(string, tag="1")]
    pub admin: ::prost::alloc::string::String,
    /// The hash of the audience for this claim
    #[prost(bytes="vec", tag="2")]
    pub aud_hash: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for MsgCreateAudienceClaim {
const NAME: &'static str = "MsgCreateAudienceClaim";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// MsgCreateAudienceClaimResponse defines the response for creating an audience
/// claim
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgCreateAudienceClaimResponse {
}
impl ::prost::Name for MsgCreateAudienceClaimResponse {
const NAME: &'static str = "MsgCreateAudienceClaimResponse";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// MsgDeleteAudienceClaim defines the message for deleting an audience claim
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgDeleteAudienceClaim {
    /// The admin address deleting the claim
    #[prost(string, tag="1")]
    pub admin: ::prost::alloc::string::String,
    /// The hash of the audience for this claim
    #[prost(bytes="vec", tag="2")]
    pub aud_hash: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for MsgDeleteAudienceClaim {
const NAME: &'static str = "MsgDeleteAudienceClaim";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// MsgDeleteAudienceClaimResponse defines the response for deleting an audience
/// claim
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgDeleteAudienceClaimResponse {
}
impl ::prost::Name for MsgDeleteAudienceClaimResponse {
const NAME: &'static str = "MsgDeleteAudienceClaimResponse";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// MsgCreateAudience defines the message for creating an audience
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgCreateAudience {
    /// The admin address creating the audience
    #[prost(string, tag="1")]
    pub admin: ::prost::alloc::string::String,
    /// The audience identifier
    #[prost(string, tag="2")]
    pub aud: ::prost::alloc::string::String,
    /// The public key for this audience
    #[prost(string, tag="3")]
    pub key: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgCreateAudience {
const NAME: &'static str = "MsgCreateAudience";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// MsgCreateAudienceResponse defines the response for creating an audience
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgCreateAudienceResponse {
    /// The created audience
    #[prost(message, optional, tag="1")]
    pub audience: ::core::option::Option<Audience>,
}
impl ::prost::Name for MsgCreateAudienceResponse {
const NAME: &'static str = "MsgCreateAudienceResponse";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// MsgUpdateAudience defines the message for updating an audience
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateAudience {
    /// The current admin address
    #[prost(string, tag="1")]
    pub admin: ::prost::alloc::string::String,
    /// The new admin address
    #[prost(string, tag="2")]
    pub new_admin: ::prost::alloc::string::String,
    /// The current audience identifier
    #[prost(string, tag="3")]
    pub aud: ::prost::alloc::string::String,
    /// The current public key
    #[prost(string, tag="4")]
    pub key: ::prost::alloc::string::String,
    /// The new audience identifier
    #[prost(string, tag="5")]
    pub new_aud: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgUpdateAudience {
const NAME: &'static str = "MsgUpdateAudience";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// MsgUpdateAudienceResponse defines the response for updating an audience
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateAudienceResponse {
    /// The updated audience
    #[prost(message, optional, tag="1")]
    pub audience: ::core::option::Option<Audience>,
}
impl ::prost::Name for MsgUpdateAudienceResponse {
const NAME: &'static str = "MsgUpdateAudienceResponse";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// MsgDeleteAudience defines the message for deleting an audience
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgDeleteAudience {
    /// The admin address deleting the audience
    #[prost(string, tag="1")]
    pub admin: ::prost::alloc::string::String,
    /// The audience identifier to delete
    #[prost(string, tag="2")]
    pub aud: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgDeleteAudience {
const NAME: &'static str = "MsgDeleteAudience";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
/// MsgDeleteAudienceResponse defines the response for deleting an audience
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgDeleteAudienceResponse {
}
impl ::prost::Name for MsgDeleteAudienceResponse {
const NAME: &'static str = "MsgDeleteAudienceResponse";
const PACKAGE: &'static str = "xion.jwk.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.jwk.v1.{}", Self::NAME)
            }}
// @@protoc_insertion_point(module)
