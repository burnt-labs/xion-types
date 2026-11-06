// @generated
/// Path holds the denom and channelID that define the rate limited route
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Path {
    #[prost(string, tag="1")]
    pub denom: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub channel_or_client_id: ::prost::alloc::string::String,
}
impl ::prost::Name for Path {
const NAME: &'static str = "Path";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// Quota defines the rate limit thresholds for transfer packets
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Quota {
    /// MaxPercentSend defines the threshold for outflows
    /// The threshold is defined as a percentage (e.g. 10 indicates 10%)
    #[prost(string, tag="1")]
    pub max_percent_send: ::prost::alloc::string::String,
    /// MaxPercentSend defines the threshold for inflows
    /// The threshold is defined as a percentage (e.g. 10 indicates 10%)
    #[prost(string, tag="2")]
    pub max_percent_recv: ::prost::alloc::string::String,
    /// DurationHours specifies the number of hours before the rate limit
    /// is reset (e.g. 24 indicates that the rate limit is reset each day)
    #[prost(uint64, tag="3")]
    pub duration_hours: u64,
}
impl ::prost::Name for Quota {
const NAME: &'static str = "Quota";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// Flow tracks all the inflows and outflows of a channel.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Flow {
    /// Inflow defines the total amount of inbound transfers for the given
    /// rate limit in the current window
    #[prost(string, tag="1")]
    pub inflow: ::prost::alloc::string::String,
    /// Outflow defines the total amount of outbound transfers for the given
    /// rate limit in the current window
    #[prost(string, tag="2")]
    pub outflow: ::prost::alloc::string::String,
    /// ChannelValue stores the total supply of the denom at the start of
    /// the rate limit. This is used as the denominator when checking
    /// the rate limit threshold
    /// The ChannelValue is fixed for the duration of the rate limit window
    #[prost(string, tag="3")]
    pub channel_value: ::prost::alloc::string::String,
}
impl ::prost::Name for Flow {
const NAME: &'static str = "Flow";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// RateLimit stores all the context about a given rate limit, including
/// the relevant denom and channel, rate limit thresholds, and current
/// progress towards the limits
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RateLimit {
    #[prost(message, optional, tag="1")]
    pub path: ::core::option::Option<Path>,
    #[prost(message, optional, tag="2")]
    pub quota: ::core::option::Option<Quota>,
    #[prost(message, optional, tag="3")]
    pub flow: ::core::option::Option<Flow>,
}
impl ::prost::Name for RateLimit {
const NAME: &'static str = "RateLimit";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// WhitelistedAddressPair represents a sender-receiver combo that is
/// not subject to rate limit restrictions
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct WhitelistedAddressPair {
    #[prost(string, tag="1")]
    pub sender: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub receiver: ::prost::alloc::string::String,
}
impl ::prost::Name for WhitelistedAddressPair {
const NAME: &'static str = "WhitelistedAddressPair";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// HourEpoch is the epoch type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct HourEpoch {
    #[prost(uint64, tag="1")]
    pub epoch_number: u64,
    #[prost(message, optional, tag="2")]
    pub duration: ::core::option::Option<::prost_types::Duration>,
    #[prost(message, optional, tag="3")]
    pub epoch_start_time: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(int64, tag="4")]
    pub epoch_start_height: i64,
}
impl ::prost::Name for HourEpoch {
const NAME: &'static str = "HourEpoch";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// PacketDirection defines whether the transfer packet is being sent from
/// this chain or is being received on this chain
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum PacketDirection {
    PacketSend = 0,
    PacketRecv = 1,
}
impl PacketDirection {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            PacketDirection::PacketSend => "PACKET_SEND",
            PacketDirection::PacketRecv => "PACKET_RECV",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "PACKET_SEND" => Some(Self::PacketSend),
            "PACKET_RECV" => Some(Self::PacketRecv),
            _ => None,
        }
    }
}
/// GenesisState defines the ratelimit module's genesis state.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenesisState {
    #[prost(message, repeated, tag="1")]
    pub rate_limits: ::prost::alloc::vec::Vec<RateLimit>,
    #[prost(message, repeated, tag="2")]
    pub whitelisted_address_pairs: ::prost::alloc::vec::Vec<WhitelistedAddressPair>,
    #[prost(string, repeated, tag="3")]
    pub blacklisted_denoms: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    #[prost(string, repeated, tag="4")]
    pub pending_send_packet_sequence_numbers: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    #[prost(message, optional, tag="5")]
    pub hour_epoch: ::core::option::Option<HourEpoch>,
    #[prost(string, repeated, tag="6")]
    pub pending_recv_packet_sequence_numbers: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
}
impl ::prost::Name for GenesisState {
const NAME: &'static str = "GenesisState";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// Queries all rate limits
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllRateLimitsRequest {
    #[prost(message, optional, tag="1")]
    pub pagination: ::core::option::Option<crate::types::cosmos_base_query_v1beta1::PageRequest>,
}
impl ::prost::Name for QueryAllRateLimitsRequest {
const NAME: &'static str = "QueryAllRateLimitsRequest";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// QueryAllRateLimitsResponse returns all the rate limits stored on the chain.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllRateLimitsResponse {
    #[prost(message, repeated, tag="1")]
    pub rate_limits: ::prost::alloc::vec::Vec<RateLimit>,
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<crate::types::cosmos_base_query_v1beta1::PageResponse>,
}
impl ::prost::Name for QueryAllRateLimitsResponse {
const NAME: &'static str = "QueryAllRateLimitsResponse";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// Queries a specific rate limit by channel ID and denom
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryRateLimitRequest {
    #[prost(string, tag="1")]
    pub denom: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub channel_or_client_id: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryRateLimitRequest {
const NAME: &'static str = "QueryRateLimitRequest";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// QueryRateLimitResponse returns a rate limit by denom and channel_or_client_id combination.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryRateLimitResponse {
    #[prost(message, optional, tag="1")]
    pub rate_limit: ::core::option::Option<RateLimit>,
}
impl ::prost::Name for QueryRateLimitResponse {
const NAME: &'static str = "QueryRateLimitResponse";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// Queries all the rate limits for a given chain
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryRateLimitsByChainIdRequest {
    #[prost(string, tag="1")]
    pub chain_id: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<crate::types::cosmos_base_query_v1beta1::PageRequest>,
}
impl ::prost::Name for QueryRateLimitsByChainIdRequest {
const NAME: &'static str = "QueryRateLimitsByChainIDRequest";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// QueryRateLimitsByChainIDResponse returns all rate-limits by a chain.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryRateLimitsByChainIdResponse {
    #[prost(message, repeated, tag="1")]
    pub rate_limits: ::prost::alloc::vec::Vec<RateLimit>,
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<crate::types::cosmos_base_query_v1beta1::PageResponse>,
}
impl ::prost::Name for QueryRateLimitsByChainIdResponse {
const NAME: &'static str = "QueryRateLimitsByChainIDResponse";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// Queries all the rate limits for a given channel or client ID
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryRateLimitsByChannelOrClientIdRequest {
    #[prost(string, tag="1")]
    pub channel_or_client_id: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<crate::types::cosmos_base_query_v1beta1::PageRequest>,
}
impl ::prost::Name for QueryRateLimitsByChannelOrClientIdRequest {
const NAME: &'static str = "QueryRateLimitsByChannelOrClientIDRequest";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// QueryRateLimitsByChannelOrClientIDResponse returns all rate-limits by a channel or client id.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryRateLimitsByChannelOrClientIdResponse {
    #[prost(message, repeated, tag="1")]
    pub rate_limits: ::prost::alloc::vec::Vec<RateLimit>,
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<crate::types::cosmos_base_query_v1beta1::PageResponse>,
}
impl ::prost::Name for QueryRateLimitsByChannelOrClientIdResponse {
const NAME: &'static str = "QueryRateLimitsByChannelOrClientIDResponse";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// Queries all blacklisted denoms
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllBlacklistedDenomsRequest {
    #[prost(message, optional, tag="1")]
    pub pagination: ::core::option::Option<crate::types::cosmos_base_query_v1beta1::PageRequest>,
}
impl ::prost::Name for QueryAllBlacklistedDenomsRequest {
const NAME: &'static str = "QueryAllBlacklistedDenomsRequest";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// QueryAllBlacklistedDenomsResponse returns all the blacklisted denosm.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllBlacklistedDenomsResponse {
    #[prost(string, repeated, tag="1")]
    pub denoms: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<crate::types::cosmos_base_query_v1beta1::PageResponse>,
}
impl ::prost::Name for QueryAllBlacklistedDenomsResponse {
const NAME: &'static str = "QueryAllBlacklistedDenomsResponse";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// Queries all whitelisted address pairs
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllWhitelistedAddressesRequest {
    #[prost(message, optional, tag="1")]
    pub pagination: ::core::option::Option<crate::types::cosmos_base_query_v1beta1::PageRequest>,
}
impl ::prost::Name for QueryAllWhitelistedAddressesRequest {
const NAME: &'static str = "QueryAllWhitelistedAddressesRequest";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// QueryAllWhitelistedAddressesResponse returns all whitelisted pairs.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllWhitelistedAddressesResponse {
    #[prost(message, repeated, tag="1")]
    pub address_pairs: ::prost::alloc::vec::Vec<WhitelistedAddressPair>,
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<crate::types::cosmos_base_query_v1beta1::PageResponse>,
}
impl ::prost::Name for QueryAllWhitelistedAddressesResponse {
const NAME: &'static str = "QueryAllWhitelistedAddressesResponse";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// Gov tx to add a new rate limit
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgAddRateLimit {
    /// signer defines the x/gov module account address or other authority signing the message
    #[prost(string, tag="1")]
    pub signer: ::prost::alloc::string::String,
    /// Denom for the rate limit, as it appears on the rate limited chain
    /// When rate limiting a non-native token, this will be an ibc denom
    #[prost(string, tag="2")]
    pub denom: ::prost::alloc::string::String,
    /// ChannelId for the rate limit, on the side of the rate limited chain
    #[prost(string, tag="3")]
    pub channel_or_client_id: ::prost::alloc::string::String,
    /// MaxPercentSend defines the threshold for outflows
    /// The threshold is defined as a percentage (e.g. 10 indicates 10%)
    #[prost(string, tag="4")]
    pub max_percent_send: ::prost::alloc::string::String,
    /// MaxPercentSend defines the threshold for inflows
    /// The threshold is defined as a percentage (e.g. 10 indicates 10%)
    #[prost(string, tag="5")]
    pub max_percent_recv: ::prost::alloc::string::String,
    /// DurationHours specifies the number of hours before the rate limit
    /// is reset (e.g. 24 indicates that the rate limit is reset each day)
    #[prost(uint64, tag="6")]
    pub duration_hours: u64,
}
impl ::prost::Name for MsgAddRateLimit {
const NAME: &'static str = "MsgAddRateLimit";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// MsgAddRateLimitResponse is the return type for AddRateLimit function.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgAddRateLimitResponse {
}
impl ::prost::Name for MsgAddRateLimitResponse {
const NAME: &'static str = "MsgAddRateLimitResponse";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// Gov tx to update an existing rate limit
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateRateLimit {
    /// signer defines the x/gov module account address or other authority signing the message
    #[prost(string, tag="1")]
    pub signer: ::prost::alloc::string::String,
    /// Denom for the rate limit, as it appears on the rate limited chain
    /// When rate limiting a non-native token, this will be an ibc denom
    #[prost(string, tag="2")]
    pub denom: ::prost::alloc::string::String,
    /// ChannelId for the rate limit, on the side of the rate limited chain
    #[prost(string, tag="3")]
    pub channel_or_client_id: ::prost::alloc::string::String,
    /// MaxPercentSend defines the threshold for outflows
    /// The threshold is defined as a percentage (e.g. 10 indicates 10%)
    #[prost(string, tag="4")]
    pub max_percent_send: ::prost::alloc::string::String,
    /// MaxPercentSend defines the threshold for inflows
    /// The threshold is defined as a percentage (e.g. 10 indicates 10%)
    #[prost(string, tag="5")]
    pub max_percent_recv: ::prost::alloc::string::String,
    /// DurationHours specifies the number of hours before the rate limit
    /// is reset (e.g. 24 indicates that the rate limit is reset each day)
    #[prost(uint64, tag="6")]
    pub duration_hours: u64,
}
impl ::prost::Name for MsgUpdateRateLimit {
const NAME: &'static str = "MsgUpdateRateLimit";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// MsgUpdateRateLimitResponse is the return type for UpdateRateLimit.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateRateLimitResponse {
}
impl ::prost::Name for MsgUpdateRateLimitResponse {
const NAME: &'static str = "MsgUpdateRateLimitResponse";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// Gov tx to remove a rate limit
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRemoveRateLimit {
    /// signer defines the x/gov module account address or other authority signing the message
    #[prost(string, tag="1")]
    pub signer: ::prost::alloc::string::String,
    /// Denom for the rate limit, as it appears on the rate limited chain
    /// When rate limiting a non-native token, this will be an ibc denom
    #[prost(string, tag="2")]
    pub denom: ::prost::alloc::string::String,
    /// ChannelId for the rate limit, on the side of the rate limited chain
    #[prost(string, tag="3")]
    pub channel_or_client_id: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgRemoveRateLimit {
const NAME: &'static str = "MsgRemoveRateLimit";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// MsgRemoveRateLimitResponse is the response type for RemoveRateLimit
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRemoveRateLimitResponse {
}
impl ::prost::Name for MsgRemoveRateLimitResponse {
const NAME: &'static str = "MsgRemoveRateLimitResponse";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// Gov tx to reset the flow on a rate limit
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgResetRateLimit {
    /// signer defines the x/gov module account address or other authority signing the message
    #[prost(string, tag="1")]
    pub signer: ::prost::alloc::string::String,
    /// Denom for the rate limit, as it appears on the rate limited chain
    /// When rate limiting a non-native token, this will be an ibc denom
    #[prost(string, tag="2")]
    pub denom: ::prost::alloc::string::String,
    /// ChannelId for the rate limit, on the side of the rate limited chain
    #[prost(string, tag="3")]
    pub channel_or_client_id: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgResetRateLimit {
const NAME: &'static str = "MsgResetRateLimit";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
/// MsgResetRateLimitResponse is the response type for ResetRateLimit.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgResetRateLimitResponse {
}
impl ::prost::Name for MsgResetRateLimitResponse {
const NAME: &'static str = "MsgResetRateLimitResponse";
const PACKAGE: &'static str = "ibc.applications.rate_limiting.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.rate_limiting.v1.{}", Self::NAME)
            }}
// @@protoc_insertion_point(module)
