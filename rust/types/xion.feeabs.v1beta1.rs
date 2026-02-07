// @generated
/// EpochInfo defines information of a epoch
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct EpochInfo {
    /// identifier is a unique reference to this particular timer.
    #[prost(string, tag="1")]
    pub identifier: ::prost::alloc::string::String,
    /// start_time is the time at which the timer first ever ticks.
    /// If start_time is in the future, the epoch will not begin until the start
    /// time.
    #[prost(message, optional, tag="2")]
    pub start_time: ::core::option::Option<::prost_types::Timestamp>,
    /// duration is the time in between epoch ticks.
    /// In order for intended behavior to be met, duration should
    /// be greater than the chains expected block time.
    /// Duration must be non-zero.
    #[prost(message, optional, tag="3")]
    pub duration: ::core::option::Option<::prost_types::Duration>,
    /// current_epoch is the current epoch number, or in other words,
    /// how many times has the timer 'ticked'.
    /// The first tick (current_epoch=1) is defined as
    /// the first block whose blocktime is greater than the EpochInfo start_time.
    #[prost(int64, tag="4")]
    pub current_epoch: i64,
    /// current_epoch_start_time describes the start time of the current timer
    /// interval. The interval is (current_epoch_start_time,
    /// current_epoch_start_time + duration] When the timer ticks, this is set to
    /// current_epoch_start_time = last_epoch_start_time + duration only one timer
    /// tick for a given identifier can occur per block.
    ///
    /// NOTE! The current_epoch_start_time may diverge significantly from the
    /// wall-clock time the epoch began at. Wall-clock time of epoch start may be
    /// >> current_epoch_start_time. Suppose current_epoch_start_time = 10,
    /// duration = 5. Suppose the chain goes offline at t=14, and comes back online
    /// at t=30, and produces blocks at every successive time. (t=31, 32, etc.)
    /// * The t=30 block will start the epoch for (10, 15]
    /// * The t=31 block will start the epoch for (15, 20]
    /// * The t=32 block will start the epoch for (20, 25]
    /// * The t=33 block will start the epoch for (25, 30]
    /// * The t=34 block will start the epoch for (30, 35]
    /// * The **t=36** block will start the epoch for (35, 40]
    #[prost(message, optional, tag="5")]
    pub current_epoch_start_time: ::core::option::Option<::prost_types::Timestamp>,
    /// epoch_counting_started is a boolean, that indicates whether this
    /// epoch timer has began yet.
    #[prost(bool, tag="6")]
    pub epoch_counting_started: bool,
    /// current_epoch_start_height is the block height at which the current epoch
    /// started. (The block height at which the timer last ticked)
    #[prost(int64, tag="8")]
    pub current_epoch_start_height: i64,
}
impl ::prost::Name for EpochInfo {
const NAME: &'static str = "EpochInfo";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// ExponentialBackoff defines backoff epoch
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ExponentialBackoff {
    /// jump defines the exponential backoff multiplier
    #[prost(int64, tag="1")]
    pub jump: i64,
    /// future_epoch defines the target epoch for the backoff
    #[prost(int64, tag="2")]
    pub future_epoch: i64,
}
impl ::prost::Name for ExponentialBackoff {
const NAME: &'static str = "ExponentialBackoff";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// Params defines the parameters for the feeabs module.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Params {
    /// native ibced in osmosis
    #[prost(string, tag="1")]
    pub native_ibced_in_osmosis: ::prost::alloc::string::String,
    /// osmosis query TWAP path
    #[prost(string, tag="2")]
    pub osmosis_query_twap_path: ::prost::alloc::string::String,
    /// chain name for ibc path unwinding
    #[prost(string, tag="3")]
    pub chain_name: ::prost::alloc::string::String,
    /// transfer channel for cross chain swap with osmosis
    #[prost(string, tag="4")]
    pub ibc_transfer_channel: ::prost::alloc::string::String,
    /// query twap price icq channel with osmosis
    #[prost(string, tag="5")]
    pub ibc_query_icq_channel: ::prost::alloc::string::String,
    /// osmosis crosschain swap contract address
    #[prost(string, tag="6")]
    pub osmosis_crosschain_swap_address: ::prost::alloc::string::String,
}
impl ::prost::Name for Params {
const NAME: &'static str = "Params";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// GenesisState defines the feeabs module's genesis state.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenesisState {
    /// params defines the parameters for the feeabs module
    #[prost(message, optional, tag="1")]
    pub params: ::core::option::Option<Params>,
    /// epochs defines the list of epoch information
    #[prost(message, repeated, tag="2")]
    pub epochs: ::prost::alloc::vec::Vec<EpochInfo>,
    /// port_id defines the IBC port identifier
    #[prost(string, tag="3")]
    pub port_id: ::prost::alloc::string::String,
}
impl ::prost::Name for GenesisState {
const NAME: &'static str = "GenesisState";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// QueryArithmeticTwapToNowRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryArithmeticTwapToNowRequest {
    /// pool_id defines the pool identifier
    #[prost(uint64, tag="1")]
    pub pool_id: u64,
    /// base_asset defines the base asset for the TWAP calculation
    #[prost(string, tag="2")]
    pub base_asset: ::prost::alloc::string::String,
    /// quote_asset defines the quote asset for the TWAP calculation
    #[prost(string, tag="3")]
    pub quote_asset: ::prost::alloc::string::String,
    /// start_time defines the start time for the TWAP calculation
    #[prost(message, optional, tag="4")]
    pub start_time: ::core::option::Option<::prost_types::Timestamp>,
}
impl ::prost::Name for QueryArithmeticTwapToNowRequest {
const NAME: &'static str = "QueryArithmeticTwapToNowRequest";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// QueryArithmeticTwapToNowResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryArithmeticTwapToNowResponse {
    /// arithmetic_twap defines the calculated arithmetic time-weighted average
    /// price
    #[prost(string, tag="1")]
    pub arithmetic_twap: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryArithmeticTwapToNowResponse {
const NAME: &'static str = "QueryArithmeticTwapToNowResponse";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// InterchainQueryRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InterchainQueryRequest {
    /// data defines the raw query data
    #[prost(bytes="vec", tag="1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
    /// path defines the query path
    #[prost(string, tag="2")]
    pub path: ::prost::alloc::string::String,
}
impl ::prost::Name for InterchainQueryRequest {
const NAME: &'static str = "InterchainQueryRequest";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// InterchainQueryPacketData is comprised of raw query.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InterchainQueryPacketData {
    /// data defines the raw query data
    #[prost(bytes="vec", tag="1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
    /// optional memo
    #[prost(string, tag="2")]
    pub memo: ::prost::alloc::string::String,
}
impl ::prost::Name for InterchainQueryPacketData {
const NAME: &'static str = "InterchainQueryPacketData";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// InterchainQueryPacketAck is comprised of an ABCI query response with
/// non-deterministic fields left empty (e.g. Codespace, Log, Info and ...).
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InterchainQueryPacketAck {
    /// data defines the query response data
    #[prost(bytes="vec", tag="1")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for InterchainQueryPacketAck {
const NAME: &'static str = "InterchainQueryPacketAck";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// InterchainQueryRequestPacket
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InterchainQueryRequestPacket {
    /// requests defines the list of interchain query requests
    #[prost(message, repeated, tag="1")]
    pub requests: ::prost::alloc::vec::Vec<InterchainQueryRequest>,
}
impl ::prost::Name for InterchainQueryRequestPacket {
const NAME: &'static str = "InterchainQueryRequestPacket";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// CosmosQuery contains a list of tendermint ABCI query requests. It should be
/// used when sending queries to an SDK host chain.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CosmosQuery {
    /// requests defines the list of ABCI query requests
    #[prost(message, repeated, tag="1")]
    pub requests: ::prost::alloc::vec::Vec<super::super::super::tendermint::abci::RequestQuery>,
}
impl ::prost::Name for CosmosQuery {
const NAME: &'static str = "CosmosQuery";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// CosmosResponse contains a list of tendermint ABCI query responses. It should
/// be used when receiving responses from an SDK host chain.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CosmosResponse {
    /// responses defines the list of ABCI query responses
    #[prost(message, repeated, tag="1")]
    pub responses: ::prost::alloc::vec::Vec<super::super::super::tendermint::abci::ResponseQuery>,
}
impl ::prost::Name for CosmosResponse {
const NAME: &'static str = "CosmosResponse";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// HostChainFeeAbsConfig
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct HostChainFeeAbsConfig {
    /// ibc token is allowed to be used as fee token
    #[prost(string, tag="1")]
    pub ibc_denom: ::prost::alloc::string::String,
    /// token_in in cross_chain swap contract.
    #[prost(string, tag="2")]
    pub osmosis_pool_token_denom_in: ::prost::alloc::string::String,
    /// pool id
    #[prost(uint64, tag="3")]
    pub pool_id: u64,
    /// Host chain fee abstraction connection status
    #[prost(enumeration="HostChainFeeAbsStatus", tag="4")]
    pub status: i32,
}
impl ::prost::Name for HostChainFeeAbsConfig {
const NAME: &'static str = "HostChainFeeAbsConfig";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// AddHostZoneProposal
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddHostZoneProposal {
    /// the title of the proposal
    #[prost(string, tag="1")]
    pub title: ::prost::alloc::string::String,
    /// the description of the proposal
    #[prost(string, tag="2")]
    pub description: ::prost::alloc::string::String,
    /// the host chain config
    #[prost(message, optional, tag="3")]
    pub host_chain_config: ::core::option::Option<HostChainFeeAbsConfig>,
}
impl ::prost::Name for AddHostZoneProposal {
const NAME: &'static str = "AddHostZoneProposal";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// DeleteHostZoneProposal
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteHostZoneProposal {
    /// the title of the proposal
    #[prost(string, tag="1")]
    pub title: ::prost::alloc::string::String,
    /// the description of the proposal
    #[prost(string, tag="2")]
    pub description: ::prost::alloc::string::String,
    /// the  ibc denom of this token
    #[prost(string, tag="3")]
    pub ibc_denom: ::prost::alloc::string::String,
}
impl ::prost::Name for DeleteHostZoneProposal {
const NAME: &'static str = "DeleteHostZoneProposal";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// SetHostZoneProposal
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SetHostZoneProposal {
    /// the title of the proposal
    #[prost(string, tag="1")]
    pub title: ::prost::alloc::string::String,
    /// the description of the proposal
    #[prost(string, tag="2")]
    pub description: ::prost::alloc::string::String,
    /// the host chain config
    #[prost(message, optional, tag="3")]
    pub host_chain_config: ::core::option::Option<HostChainFeeAbsConfig>,
}
impl ::prost::Name for SetHostZoneProposal {
const NAME: &'static str = "SetHostZoneProposal";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// HostChainFeeAbsStatus represents the status of a host chain fee abstraction
/// configuration
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum HostChainFeeAbsStatus {
    /// HOST_CHAIN_FEE_ABS_STATUS_UNSPECIFIED indicates an unspecified status
    Unspecified = 0,
    /// HOST_CHAIN_FEE_ABS_STATUS_UPDATED indicates the configuration is up to date
    Updated = 1,
    /// HOST_CHAIN_FEE_ABS_STATUS_OUTDATED indicates the configuration is outdated
    Outdated = 2,
    /// HOST_CHAIN_FEE_ABS_STATUS_FROZEN indicates the configuration is frozen
    Frozen = 3,
}
impl HostChainFeeAbsStatus {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            HostChainFeeAbsStatus::Unspecified => "HOST_CHAIN_FEE_ABS_STATUS_UNSPECIFIED",
            HostChainFeeAbsStatus::Updated => "HOST_CHAIN_FEE_ABS_STATUS_UPDATED",
            HostChainFeeAbsStatus::Outdated => "HOST_CHAIN_FEE_ABS_STATUS_OUTDATED",
            HostChainFeeAbsStatus::Frozen => "HOST_CHAIN_FEE_ABS_STATUS_FROZEN",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "HOST_CHAIN_FEE_ABS_STATUS_UNSPECIFIED" => Some(Self::Unspecified),
            "HOST_CHAIN_FEE_ABS_STATUS_UPDATED" => Some(Self::Updated),
            "HOST_CHAIN_FEE_ABS_STATUS_OUTDATED" => Some(Self::Outdated),
            "HOST_CHAIN_FEE_ABS_STATUS_FROZEN" => Some(Self::Frozen),
            _ => None,
        }
    }
}
/// QueryHostChainConfigRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryHostChainConfigRequest {
    /// The IBC denomination to query configuration for
    #[prost(string, tag="1")]
    pub ibc_denom: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryHostChainConfigRequest {
const NAME: &'static str = "QueryHostChainConfigRequest";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// QueryHostChainConfigResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryHostChainConfigResponse {
    /// The host chain fee abstraction configuration
    #[prost(message, optional, tag="1")]
    pub host_chain_config: ::core::option::Option<HostChainFeeAbsConfig>,
}
impl ::prost::Name for QueryHostChainConfigResponse {
const NAME: &'static str = "QueryHostChainConfigResponse";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// QueryOsmosisArithmeticTwapRequest is the request type for the Query/Feeabs
/// RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryOsmosisArithmeticTwapRequest {
    /// The IBC denomination to query TWAP for
    #[prost(string, tag="1")]
    pub ibc_denom: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryOsmosisArithmeticTwapRequest {
const NAME: &'static str = "QueryOsmosisArithmeticTwapRequest";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// QueryOsmosisArithmeticTwapResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryOsmosisArithmeticTwapResponse {
    /// The arithmetic time-weighted average price
    #[prost(string, tag="1")]
    pub arithmetic_twap: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryOsmosisArithmeticTwapResponse {
const NAME: &'static str = "QueryOsmosisArithmeticTwapResponse";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// QueryFeeabsModuleBalancesRequest is the request type for the Query/Feeabs RPC
/// method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryFeeabsModuleBalancesRequest {
}
impl ::prost::Name for QueryFeeabsModuleBalancesRequest {
const NAME: &'static str = "QueryFeeabsModuleBalancesRequest";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// QueryFeeabsModuleBalancesResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryFeeabsModuleBalancesResponse {
    /// The coin balances held by the feeabs module
    #[prost(message, repeated, tag="1")]
    pub balances: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
    /// The address of the feeabs module
    #[prost(string, tag="2")]
    pub address: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryFeeabsModuleBalancesResponse {
const NAME: &'static str = "QueryFeeabsModuleBalancesResponse";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// QueryAllHostChainConfigRequest
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllHostChainConfigRequest {
}
impl ::prost::Name for QueryAllHostChainConfigRequest {
const NAME: &'static str = "QueryAllHostChainConfigRequest";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// QueryAllHostChainConfigResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryAllHostChainConfigResponse {
    /// All host chain fee abstraction configurations
    #[prost(message, repeated, tag="1")]
    pub all_host_chain_config: ::prost::alloc::vec::Vec<HostChainFeeAbsConfig>,
}
impl ::prost::Name for QueryAllHostChainConfigResponse {
const NAME: &'static str = "QueryAllHostChainConfigResponse";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgFundFeeAbsModuleAccount
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgFundFeeAbsModuleAccount {
    /// sender is the that actor that signed the messages
    #[prost(string, tag="1")]
    pub sender: ::prost::alloc::string::String,
    /// The amount of coins to fund to the feeabs module account
    #[prost(message, repeated, tag="2")]
    pub amount: ::prost::alloc::vec::Vec<super::super::super::cosmos::base::v1beta1::Coin>,
}
impl ::prost::Name for MsgFundFeeAbsModuleAccount {
const NAME: &'static str = "MsgFundFeeAbsModuleAccount";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgFundFeeAbsModuleAccountResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgFundFeeAbsModuleAccountResponse {
}
impl ::prost::Name for MsgFundFeeAbsModuleAccountResponse {
const NAME: &'static str = "MsgFundFeeAbsModuleAccountResponse";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgSendQueryIbcDenomTWAP
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgSendQueryIbcDenomTwap {
    /// Sender is the that actor that signed the messages
    #[prost(string, tag="1")]
    pub sender: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgSendQueryIbcDenomTwap {
const NAME: &'static str = "MsgSendQueryIbcDenomTWAP";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgSendQueryIbcDenomTWAPResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgSendQueryIbcDenomTwapResponse {
}
impl ::prost::Name for MsgSendQueryIbcDenomTwapResponse {
const NAME: &'static str = "MsgSendQueryIbcDenomTWAPResponse";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgSwapCrossChain
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgSwapCrossChain {
    /// Sender is the that actor that signed the messages
    #[prost(string, tag="1")]
    pub sender: ::prost::alloc::string::String,
    /// The IBC denomination to swap
    #[prost(string, tag="2")]
    pub ibc_denom: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgSwapCrossChain {
const NAME: &'static str = "MsgSwapCrossChain";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgSwapCrossChainResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgSwapCrossChainResponse {
}
impl ::prost::Name for MsgSwapCrossChainResponse {
const NAME: &'static str = "MsgSwapCrossChainResponse";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgUpdateParams is the Msg/UpdateParams request type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateParams {
    /// authority is the address of the governance account.
    #[prost(string, tag="1")]
    pub authority: ::prost::alloc::string::String,
    /// params defines the x/feeabs parameters to update.
    ///
    /// NOTE: All parameters must be supplied.
    #[prost(message, optional, tag="2")]
    pub params: ::core::option::Option<Params>,
}
impl ::prost::Name for MsgUpdateParams {
const NAME: &'static str = "MsgUpdateParams";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgUpdateParamsResponse defines the response structure for executing a
/// MsgUpdateParams message.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateParamsResponse {
}
impl ::prost::Name for MsgUpdateParamsResponse {
const NAME: &'static str = "MsgUpdateParamsResponse";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgAddHostZone is the Msg/AddHostZone request type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgAddHostZone {
    /// authority is the address of the governance account.
    #[prost(string, tag="1")]
    pub authority: ::prost::alloc::string::String,
    /// the host chain config
    #[prost(message, optional, tag="2")]
    pub host_chain_config: ::core::option::Option<HostChainFeeAbsConfig>,
}
impl ::prost::Name for MsgAddHostZone {
const NAME: &'static str = "MsgAddHostZone";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgAddHostZoneResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgAddHostZoneResponse {
}
impl ::prost::Name for MsgAddHostZoneResponse {
const NAME: &'static str = "MsgAddHostZoneResponse";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgUpdateHostZone is the Msg/UpdateHostZone request type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateHostZone {
    /// authority is the address of the governance account.
    #[prost(string, tag="1")]
    pub authority: ::prost::alloc::string::String,
    /// the host chain config
    #[prost(message, optional, tag="2")]
    pub host_chain_config: ::core::option::Option<HostChainFeeAbsConfig>,
}
impl ::prost::Name for MsgUpdateHostZone {
const NAME: &'static str = "MsgUpdateHostZone";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgUpdateHostZoneResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgUpdateHostZoneResponse {
}
impl ::prost::Name for MsgUpdateHostZoneResponse {
const NAME: &'static str = "MsgUpdateHostZoneResponse";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgRemoveHostZone is the Msg/RemoveHostZone request type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRemoveHostZone {
    /// authority is the address of the governance account.
    #[prost(string, tag="1")]
    pub authority: ::prost::alloc::string::String,
    /// The IBC denomination of the host zone to remove
    #[prost(string, tag="2")]
    pub ibc_denom: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgRemoveHostZone {
const NAME: &'static str = "MsgRemoveHostZone";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
/// MsgRemoveHostZoneResponse
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRemoveHostZoneResponse {
}
impl ::prost::Name for MsgRemoveHostZoneResponse {
const NAME: &'static str = "MsgRemoveHostZoneResponse";
const PACKAGE: &'static str = "xion.feeabs.v1beta1";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("xion.feeabs.v1beta1.{}", Self::NAME)
            }}
// @@protoc_insertion_point(module)
