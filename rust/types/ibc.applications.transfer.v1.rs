// @generated
/// Allocation defines the spend limit for a particular port and channel
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Allocation {
    /// the port on which the packet will be sent
    #[prost(string, tag="1")]
    pub source_port: ::prost::alloc::string::String,
    /// the channel by which the packet will be sent
    #[prost(string, tag="2")]
    pub source_channel: ::prost::alloc::string::String,
    /// spend limitation on the channel
    #[prost(message, repeated, tag="3")]
    pub spend_limit: ::prost::alloc::vec::Vec<super::super::super::super::cosmos::base::v1beta1::Coin>,
    /// allow list of receivers, an empty allow list permits any receiver address
    #[prost(string, repeated, tag="4")]
    pub allow_list: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    /// allow list of memo strings, an empty list prohibits all memo strings;
    /// a list only with "*" permits any memo string
    #[prost(string, repeated, tag="5")]
    pub allowed_packet_data: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
}
impl ::prost::Name for Allocation {
const NAME: &'static str = "Allocation";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// TransferAuthorization allows the grantee to spend up to spend_limit coins from
/// the granter's account for ibc transfer on a specific channel
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TransferAuthorization {
    /// port and channel amounts
    #[prost(message, repeated, tag="1")]
    pub allocations: ::prost::alloc::vec::Vec<Allocation>,
}
impl ::prost::Name for TransferAuthorization {
const NAME: &'static str = "TransferAuthorization";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// DenomTrace contains the base denomination for ICS20 fungible tokens and the
/// source tracing information path.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DenomTrace {
    /// path defines the chain of port/channel identifiers used for tracing the
    /// source of the fungible token.
    #[prost(string, tag="1")]
    pub path: ::prost::alloc::string::String,
    /// base denomination of the relayed fungible token.
    #[prost(string, tag="2")]
    pub base_denom: ::prost::alloc::string::String,
}
impl ::prost::Name for DenomTrace {
const NAME: &'static str = "DenomTrace";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// Params defines the set of IBC transfer parameters.
/// NOTE: To prevent a single token from being transferred, set the
/// TransfersEnabled parameter to true and then set the bank module's SendEnabled
/// parameter for the denomination to false.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Params {
    /// send_enabled enables or disables all cross-chain token transfers from this
    /// chain.
    #[prost(bool, tag="1")]
    pub send_enabled: bool,
    /// receive_enabled enables or disables all cross-chain token transfers to this
    /// chain.
    #[prost(bool, tag="2")]
    pub receive_enabled: bool,
}
impl ::prost::Name for Params {
const NAME: &'static str = "Params";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// Token defines a struct which represents a token to be transferred.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Token {
    /// the token denomination
    #[prost(message, optional, tag="1")]
    pub denom: ::core::option::Option<Denom>,
    /// the token amount to be transferred
    #[prost(string, tag="2")]
    pub amount: ::prost::alloc::string::String,
}
impl ::prost::Name for Token {
const NAME: &'static str = "Token";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// Denom holds the base denom of a Token and a trace of the chains it was sent through.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Denom {
    /// the base token denomination
    #[prost(string, tag="1")]
    pub base: ::prost::alloc::string::String,
    /// the trace of the token
    #[prost(message, repeated, tag="3")]
    pub trace: ::prost::alloc::vec::Vec<Hop>,
}
impl ::prost::Name for Denom {
const NAME: &'static str = "Denom";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// Hop defines a port ID, channel ID pair specifying a unique "hop" in a trace
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Hop {
    #[prost(string, tag="1")]
    pub port_id: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub channel_id: ::prost::alloc::string::String,
}
impl ::prost::Name for Hop {
const NAME: &'static str = "Hop";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// GenesisState defines the ibc-transfer genesis state
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenesisState {
    #[prost(string, tag="1")]
    pub port_id: ::prost::alloc::string::String,
    #[prost(message, repeated, tag="2")]
    pub denoms: ::prost::alloc::vec::Vec<Denom>,
    #[prost(message, optional, tag="3")]
    pub params: ::core::option::Option<Params>,
    /// total_escrowed contains the total amount of tokens escrowed
    /// by the transfer module
    #[prost(message, repeated, tag="4")]
    pub total_escrowed: ::prost::alloc::vec::Vec<super::super::super::super::cosmos::base::v1beta1::Coin>,
}
impl ::prost::Name for GenesisState {
const NAME: &'static str = "GenesisState";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// FungibleTokenPacketData defines a struct for the packet payload
/// See FungibleTokenPacketData spec:
/// <https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures>
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FungibleTokenPacketData {
    /// the token denomination to be transferred
    #[prost(string, tag="1")]
    pub denom: ::prost::alloc::string::String,
    /// the token amount to be transferred
    #[prost(string, tag="2")]
    pub amount: ::prost::alloc::string::String,
    /// the sender address
    #[prost(string, tag="3")]
    pub sender: ::prost::alloc::string::String,
    /// the recipient address on the destination chain
    #[prost(string, tag="4")]
    pub receiver: ::prost::alloc::string::String,
    /// optional memo
    #[prost(string, tag="5")]
    pub memo: ::prost::alloc::string::String,
}
impl ::prost::Name for FungibleTokenPacketData {
const NAME: &'static str = "FungibleTokenPacketData";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// QueryParamsRequest is the request type for the Query/Params RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryParamsRequest {
}
impl ::prost::Name for QueryParamsRequest {
const NAME: &'static str = "QueryParamsRequest";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// QueryParamsResponse is the response type for the Query/Params RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryParamsResponse {
    /// params defines the parameters of the module.
    #[prost(message, optional, tag="1")]
    pub params: ::core::option::Option<Params>,
}
impl ::prost::Name for QueryParamsResponse {
const NAME: &'static str = "QueryParamsResponse";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// QueryDenomRequest is the request type for the Query/Denom RPC
/// method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryDenomRequest {
    /// hash (in hex format) or denom (full denom with ibc prefix) of the on chain denomination.
    #[prost(string, tag="1")]
    pub hash: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryDenomRequest {
const NAME: &'static str = "QueryDenomRequest";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// QueryDenomResponse is the response type for the Query/Denom RPC
/// method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryDenomResponse {
    /// denom returns the requested denomination.
    #[prost(message, optional, tag="1")]
    pub denom: ::core::option::Option<Denom>,
}
impl ::prost::Name for QueryDenomResponse {
const NAME: &'static str = "QueryDenomResponse";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// QueryDenomsRequest is the request type for the Query/Denoms RPC
/// method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryDenomsRequest {
    /// pagination defines an optional pagination for the request.
    #[prost(message, optional, tag="1")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
impl ::prost::Name for QueryDenomsRequest {
const NAME: &'static str = "QueryDenomsRequest";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// QueryDenomsResponse is the response type for the Query/Denoms RPC
/// method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryDenomsResponse {
    /// denoms returns all denominations.
    #[prost(message, repeated, tag="1")]
    pub denoms: ::prost::alloc::vec::Vec<Denom>,
    /// pagination defines the pagination in the response.
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageResponse>,
}
impl ::prost::Name for QueryDenomsResponse {
const NAME: &'static str = "QueryDenomsResponse";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// QueryDenomHashRequest is the request type for the Query/DenomHash RPC
/// method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryDenomHashRequest {
    /// The denomination trace (\[port_id\]/[channel_id])+/\[denom\]
    #[prost(string, tag="1")]
    pub trace: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryDenomHashRequest {
const NAME: &'static str = "QueryDenomHashRequest";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// QueryDenomHashResponse is the response type for the Query/DenomHash RPC
/// method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryDenomHashResponse {
    /// hash (in hex format) of the denomination trace information.
    #[prost(string, tag="1")]
    pub hash: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryDenomHashResponse {
const NAME: &'static str = "QueryDenomHashResponse";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryEscrowAddressRequest {
    /// unique port identifier
    #[prost(string, tag="1")]
    pub port_id: ::prost::alloc::string::String,
    /// unique channel identifier
    #[prost(string, tag="2")]
    pub channel_id: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryEscrowAddressRequest {
const NAME: &'static str = "QueryEscrowAddressRequest";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryEscrowAddressResponse {
    /// the escrow account address
    #[prost(string, tag="1")]
    pub escrow_address: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryEscrowAddressResponse {
const NAME: &'static str = "QueryEscrowAddressResponse";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTotalEscrowForDenomRequest {
    #[prost(string, tag="1")]
    pub denom: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryTotalEscrowForDenomRequest {
const NAME: &'static str = "QueryTotalEscrowForDenomRequest";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryTotalEscrowForDenomResponse {
    #[prost(message, optional, tag="1")]
    pub amount: ::core::option::Option<super::super::super::super::cosmos::base::v1beta1::Coin>,
}
impl ::prost::Name for QueryTotalEscrowForDenomResponse {
const NAME: &'static str = "QueryTotalEscrowForDenomResponse";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
/// ICS20 enabled chains. See ICS Spec here:
/// <https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures>
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgTransfer {
    /// the port on which the packet will be sent
    #[prost(string, tag="1")]
    pub source_port: ::prost::alloc::string::String,
    /// the channel by which the packet will be sent
    #[prost(string, tag="2")]
    pub source_channel: ::prost::alloc::string::String,
    /// token to be transferred
    #[prost(message, optional, tag="3")]
    pub token: ::core::option::Option<super::super::super::super::cosmos::base::v1beta1::Coin>,
    /// the sender address
    #[prost(string, tag="4")]
    pub sender: ::prost::alloc::string::String,
    /// the recipient address on the destination chain
    #[prost(string, tag="5")]
    pub receiver: ::prost::alloc::string::String,
    /// Timeout height relative to the current block height.
    /// If you are sending with IBC v1 protocol, either timeout_height or timeout_timestamp must be set.
    /// If you are sending with IBC v2 protocol, timeout_timestamp must be set, and timeout_height must be omitted.
    #[prost(message, optional, tag="6")]
    pub timeout_height: ::core::option::Option<super::super::super::core::client::v1::Height>,
    /// Timeout timestamp in absolute nanoseconds since unix epoch.
    /// If you are sending with IBC v1 protocol, either timeout_height or timeout_timestamp must be set.
    /// If you are sending with IBC v2 protocol, timeout_timestamp must be set.
    #[prost(uint64, tag="7")]
    pub timeout_timestamp: u64,
    /// optional memo
    #[prost(string, tag="8")]
    pub memo: ::prost::alloc::string::String,
    /// optional encoding
    #[prost(string, tag="9")]
    pub encoding: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgTransfer {
const NAME: &'static str = "MsgTransfer";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// MsgTransferResponse defines the Msg/Transfer response type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgTransferResponse {
    /// sequence number of the transfer packet sent
    #[prost(uint64, tag="1")]
    pub sequence: u64,
}
impl ::prost::Name for MsgTransferResponse {
const NAME: &'static str = "MsgTransferResponse";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// MsgUpdateParams is the Msg/UpdateParams request type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateParams {
    /// signer address
    #[prost(string, tag="1")]
    pub signer: ::prost::alloc::string::String,
    /// params defines the transfer parameters to update.
    ///
    /// NOTE: All parameters must be supplied.
    #[prost(message, optional, tag="2")]
    pub params: ::core::option::Option<Params>,
}
impl ::prost::Name for MsgUpdateParams {
const NAME: &'static str = "MsgUpdateParams";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
/// MsgUpdateParamsResponse defines the response structure for executing a
/// MsgUpdateParams message.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateParamsResponse {
}
impl ::prost::Name for MsgUpdateParamsResponse {
const NAME: &'static str = "MsgUpdateParamsResponse";
const PACKAGE: &'static str = "ibc.applications.transfer.v1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.applications.transfer.v1.{}", Self::NAME)
            }}
// @@protoc_insertion_point(module)
