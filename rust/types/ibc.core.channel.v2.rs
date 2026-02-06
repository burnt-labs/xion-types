// @generated
/// GenesisState defines the ibc channel/v2 submodule's genesis state.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GenesisState {
    #[prost(message, repeated, tag="2")]
    pub acknowledgements: ::prost::alloc::vec::Vec<PacketState>,
    #[prost(message, repeated, tag="3")]
    pub commitments: ::prost::alloc::vec::Vec<PacketState>,
    #[prost(message, repeated, tag="4")]
    pub receipts: ::prost::alloc::vec::Vec<PacketState>,
    #[prost(message, repeated, tag="5")]
    pub async_packets: ::prost::alloc::vec::Vec<PacketState>,
    #[prost(message, repeated, tag="6")]
    pub send_sequences: ::prost::alloc::vec::Vec<PacketSequence>,
}
impl ::prost::Name for GenesisState {
const NAME: &'static str = "GenesisState";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// PacketState defines the generic type necessary to retrieve and store
/// packet commitments, acknowledgements, and receipts.
/// Caller is responsible for knowing the context necessary to interpret this
/// state as a commitment, acknowledgement, or a receipt.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PacketState {
    /// client unique identifier.
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
    /// packet sequence.
    #[prost(uint64, tag="2")]
    pub sequence: u64,
    /// embedded data that represents packet state.
    #[prost(bytes="vec", tag="3")]
    pub data: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for PacketState {
const NAME: &'static str = "PacketState";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// PacketSequence defines the genesis type necessary to retrieve and store next send sequences.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PacketSequence {
    /// client unique identifier.
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
    /// packet sequence
    #[prost(uint64, tag="2")]
    pub sequence: u64,
}
impl ::prost::Name for PacketSequence {
const NAME: &'static str = "PacketSequence";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// Packet defines a type that carries data across different chains through IBC
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Packet {
    /// number corresponds to the order of sends and receives, where a Packet
    /// with an earlier sequence number must be sent and received before a Packet
    /// with a later sequence number.
    #[prost(uint64, tag="1")]
    pub sequence: u64,
    /// identifies the sending client on the sending chain.
    #[prost(string, tag="2")]
    pub source_client: ::prost::alloc::string::String,
    /// identifies the receiving client on the receiving chain.
    #[prost(string, tag="3")]
    pub destination_client: ::prost::alloc::string::String,
    /// timeout timestamp in seconds after which the packet times out.
    #[prost(uint64, tag="4")]
    pub timeout_timestamp: u64,
    /// a list of payloads, each one for a specific application.
    #[prost(message, repeated, tag="5")]
    pub payloads: ::prost::alloc::vec::Vec<Payload>,
}
impl ::prost::Name for Packet {
const NAME: &'static str = "Packet";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// Payload contains the source and destination ports and payload for the application (version, encoding, raw bytes)
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Payload {
    /// specifies the source port of the packet.
    #[prost(string, tag="1")]
    pub source_port: ::prost::alloc::string::String,
    /// specifies the destination port of the packet.
    #[prost(string, tag="2")]
    pub destination_port: ::prost::alloc::string::String,
    /// version of the specified application.
    #[prost(string, tag="3")]
    pub version: ::prost::alloc::string::String,
    /// the encoding used for the provided value.
    #[prost(string, tag="4")]
    pub encoding: ::prost::alloc::string::String,
    /// the raw bytes for the payload.
    #[prost(bytes="vec", tag="5")]
    pub value: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for Payload {
const NAME: &'static str = "Payload";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// Acknowledgement contains a list of all ack results associated with a single packet.
/// In the case of a successful receive, the acknowledgement will contain an app acknowledgement
/// for each application that received a payload in the same order that the payloads were sent
/// in the packet.
/// If the receive is not successful, the acknowledgement will contain a single app acknowledgment
/// which will be a constant error acknowledgment as defined by the IBC v2 protocol.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Acknowledgement {
    #[prost(bytes="vec", repeated, tag="1")]
    pub app_acknowledgements: ::prost::alloc::vec::Vec<::prost::alloc::vec::Vec<u8>>,
}
impl ::prost::Name for Acknowledgement {
const NAME: &'static str = "Acknowledgement";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// RecvPacketResult speecifies the status of a packet as well as the acknowledgement bytes.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RecvPacketResult {
    /// status of the packet
    #[prost(enumeration="PacketStatus", tag="1")]
    pub status: i32,
    /// acknowledgement of the packet
    #[prost(bytes="vec", tag="2")]
    pub acknowledgement: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for RecvPacketResult {
const NAME: &'static str = "RecvPacketResult";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// PacketStatus specifies the status of a RecvPacketResult.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum PacketStatus {
    /// PACKET_STATUS_UNSPECIFIED indicates an unknown packet status.
    Unspecified = 0,
    /// PACKET_STATUS_SUCCESS indicates a successful packet receipt.
    Success = 1,
    /// PACKET_STATUS_FAILURE indicates a failed packet receipt.
    Failure = 2,
    /// PACKET_STATUS_ASYNC indicates an async packet receipt.
    Async = 3,
}
impl PacketStatus {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            PacketStatus::Unspecified => "PACKET_STATUS_UNSPECIFIED",
            PacketStatus::Success => "PACKET_STATUS_SUCCESS",
            PacketStatus::Failure => "PACKET_STATUS_FAILURE",
            PacketStatus::Async => "PACKET_STATUS_ASYNC",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "PACKET_STATUS_UNSPECIFIED" => Some(Self::Unspecified),
            "PACKET_STATUS_SUCCESS" => Some(Self::Success),
            "PACKET_STATUS_FAILURE" => Some(Self::Failure),
            "PACKET_STATUS_ASYNC" => Some(Self::Async),
            _ => None,
        }
    }
}
/// QueryNextSequenceSendRequest is the request type for the Query/QueryNextSequenceSend RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryNextSequenceSendRequest {
    /// client unique identifier
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
}
impl ::prost::Name for QueryNextSequenceSendRequest {
const NAME: &'static str = "QueryNextSequenceSendRequest";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryNextSequenceSendResponse is the response type for the Query/QueryNextSequenceSend RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryNextSequenceSendResponse {
    /// next sequence send number
    #[prost(uint64, tag="1")]
    pub next_sequence_send: u64,
    /// merkle proof of existence
    #[prost(bytes="vec", tag="2")]
    pub proof: ::prost::alloc::vec::Vec<u8>,
    /// height at which the proof was retrieved
    #[prost(message, optional, tag="3")]
    pub proof_height: ::core::option::Option<super::super::client::v1::Height>,
}
impl ::prost::Name for QueryNextSequenceSendResponse {
const NAME: &'static str = "QueryNextSequenceSendResponse";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryPacketCommitmentRequest is the request type for the Query/PacketCommitment RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryPacketCommitmentRequest {
    /// client unique identifier
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
    /// packet sequence
    #[prost(uint64, tag="2")]
    pub sequence: u64,
}
impl ::prost::Name for QueryPacketCommitmentRequest {
const NAME: &'static str = "QueryPacketCommitmentRequest";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryPacketCommitmentResponse is the response type for the Query/PacketCommitment RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryPacketCommitmentResponse {
    /// packet associated with the request fields
    #[prost(bytes="vec", tag="1")]
    pub commitment: ::prost::alloc::vec::Vec<u8>,
    /// merkle proof of existence
    #[prost(bytes="vec", tag="2")]
    pub proof: ::prost::alloc::vec::Vec<u8>,
    /// height at which the proof was retrieved
    #[prost(message, optional, tag="3")]
    pub proof_height: ::core::option::Option<super::super::client::v1::Height>,
}
impl ::prost::Name for QueryPacketCommitmentResponse {
const NAME: &'static str = "QueryPacketCommitmentResponse";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryPacketCommitmentsRequest is the request type for the Query/PacketCommitments RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryPacketCommitmentsRequest {
    /// client unique identifier
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
    /// pagination request
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageRequest>,
}
impl ::prost::Name for QueryPacketCommitmentsRequest {
const NAME: &'static str = "QueryPacketCommitmentsRequest";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryPacketCommitmentResponse is the response type for the Query/PacketCommitment RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryPacketCommitmentsResponse {
    /// collection of packet commitments for the requested channel identifier.
    #[prost(message, repeated, tag="1")]
    pub commitments: ::prost::alloc::vec::Vec<PacketState>,
    /// pagination response.
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageResponse>,
    /// query block height.
    #[prost(message, optional, tag="3")]
    pub height: ::core::option::Option<super::super::client::v1::Height>,
}
impl ::prost::Name for QueryPacketCommitmentsResponse {
const NAME: &'static str = "QueryPacketCommitmentsResponse";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryPacketAcknowledgementRequest is the request type for the Query/PacketAcknowledgement RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryPacketAcknowledgementRequest {
    /// client unique identifier
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
    /// packet sequence
    #[prost(uint64, tag="2")]
    pub sequence: u64,
}
impl ::prost::Name for QueryPacketAcknowledgementRequest {
const NAME: &'static str = "QueryPacketAcknowledgementRequest";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryPacketAcknowledgementResponse is the response type for the Query/PacketAcknowledgement RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryPacketAcknowledgementResponse {
    /// acknowledgement associated with the request fields
    #[prost(bytes="vec", tag="1")]
    pub acknowledgement: ::prost::alloc::vec::Vec<u8>,
    /// merkle proof of existence
    #[prost(bytes="vec", tag="2")]
    pub proof: ::prost::alloc::vec::Vec<u8>,
    /// height at which the proof was retrieved
    #[prost(message, optional, tag="3")]
    pub proof_height: ::core::option::Option<super::super::client::v1::Height>,
}
impl ::prost::Name for QueryPacketAcknowledgementResponse {
const NAME: &'static str = "QueryPacketAcknowledgementResponse";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryPacketAcknowledgementsRequest is the request type for the
/// Query/QueryPacketCommitments RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryPacketAcknowledgementsRequest {
    /// client unique identifier
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
    /// pagination request
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageRequest>,
    /// list of packet sequences
    #[prost(uint64, repeated, tag="3")]
    pub packet_commitment_sequences: ::prost::alloc::vec::Vec<u64>,
}
impl ::prost::Name for QueryPacketAcknowledgementsRequest {
const NAME: &'static str = "QueryPacketAcknowledgementsRequest";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryPacketAcknowledgemetsResponse is the request type for the
/// Query/QueryPacketAcknowledgements RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryPacketAcknowledgementsResponse {
    #[prost(message, repeated, tag="1")]
    pub acknowledgements: ::prost::alloc::vec::Vec<PacketState>,
    /// pagination response
    #[prost(message, optional, tag="2")]
    pub pagination: ::core::option::Option<super::super::super::super::cosmos::base::query::v1beta1::PageResponse>,
    /// query block height
    #[prost(message, optional, tag="3")]
    pub height: ::core::option::Option<super::super::client::v1::Height>,
}
impl ::prost::Name for QueryPacketAcknowledgementsResponse {
const NAME: &'static str = "QueryPacketAcknowledgementsResponse";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryPacketReceiptRequest is the request type for the Query/PacketReceipt RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryPacketReceiptRequest {
    /// client unique identifier
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
    /// packet sequence
    #[prost(uint64, tag="2")]
    pub sequence: u64,
}
impl ::prost::Name for QueryPacketReceiptRequest {
const NAME: &'static str = "QueryPacketReceiptRequest";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryPacketReceiptResponse is the response type for the Query/PacketReceipt RPC method.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryPacketReceiptResponse {
    /// success flag for if receipt exists
    #[prost(bool, tag="2")]
    pub received: bool,
    /// merkle proof of existence or absence
    #[prost(bytes="vec", tag="3")]
    pub proof: ::prost::alloc::vec::Vec<u8>,
    /// height at which the proof was retrieved
    #[prost(message, optional, tag="4")]
    pub proof_height: ::core::option::Option<super::super::client::v1::Height>,
}
impl ::prost::Name for QueryPacketReceiptResponse {
const NAME: &'static str = "QueryPacketReceiptResponse";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryUnreceivedPacketsRequest is the request type for the Query/UnreceivedPackets RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryUnreceivedPacketsRequest {
    /// client unique identifier
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
    /// list of packet sequences
    #[prost(uint64, repeated, tag="2")]
    pub sequences: ::prost::alloc::vec::Vec<u64>,
}
impl ::prost::Name for QueryUnreceivedPacketsRequest {
const NAME: &'static str = "QueryUnreceivedPacketsRequest";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryUnreceivedPacketsResponse is the response type for the Query/UnreceivedPacketCommitments RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryUnreceivedPacketsResponse {
    /// list of unreceived packet sequences
    #[prost(uint64, repeated, tag="1")]
    pub sequences: ::prost::alloc::vec::Vec<u64>,
    /// query block height
    #[prost(message, optional, tag="2")]
    pub height: ::core::option::Option<super::super::client::v1::Height>,
}
impl ::prost::Name for QueryUnreceivedPacketsResponse {
const NAME: &'static str = "QueryUnreceivedPacketsResponse";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryUnreceivedAcks is the request type for the
/// Query/UnreceivedAcks RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryUnreceivedAcksRequest {
    /// client unique identifier
    #[prost(string, tag="1")]
    pub client_id: ::prost::alloc::string::String,
    /// list of acknowledgement sequences
    #[prost(uint64, repeated, tag="2")]
    pub packet_ack_sequences: ::prost::alloc::vec::Vec<u64>,
}
impl ::prost::Name for QueryUnreceivedAcksRequest {
const NAME: &'static str = "QueryUnreceivedAcksRequest";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// QueryUnreceivedAcksResponse is the response type for the
/// Query/UnreceivedAcks RPC method
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct QueryUnreceivedAcksResponse {
    /// list of unreceived acknowledgement sequences
    #[prost(uint64, repeated, tag="1")]
    pub sequences: ::prost::alloc::vec::Vec<u64>,
    /// query block height
    #[prost(message, optional, tag="2")]
    pub height: ::core::option::Option<super::super::client::v1::Height>,
}
impl ::prost::Name for QueryUnreceivedAcksResponse {
const NAME: &'static str = "QueryUnreceivedAcksResponse";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// MsgSendPacket sends an outgoing IBC packet.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgSendPacket {
    #[prost(string, tag="1")]
    pub source_client: ::prost::alloc::string::String,
    #[prost(uint64, tag="2")]
    pub timeout_timestamp: u64,
    #[prost(message, repeated, tag="3")]
    pub payloads: ::prost::alloc::vec::Vec<Payload>,
    #[prost(string, tag="4")]
    pub signer: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgSendPacket {
const NAME: &'static str = "MsgSendPacket";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// MsgSendPacketResponse defines the Msg/SendPacket response type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgSendPacketResponse {
    #[prost(uint64, tag="1")]
    pub sequence: u64,
}
impl ::prost::Name for MsgSendPacketResponse {
const NAME: &'static str = "MsgSendPacketResponse";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// MsgRecvPacket receives an incoming IBC packet.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRecvPacket {
    #[prost(message, optional, tag="1")]
    pub packet: ::core::option::Option<Packet>,
    #[prost(bytes="vec", tag="2")]
    pub proof_commitment: ::prost::alloc::vec::Vec<u8>,
    #[prost(message, optional, tag="3")]
    pub proof_height: ::core::option::Option<super::super::client::v1::Height>,
    #[prost(string, tag="4")]
    pub signer: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgRecvPacket {
const NAME: &'static str = "MsgRecvPacket";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// MsgRecvPacketResponse defines the Msg/RecvPacket response type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgRecvPacketResponse {
    #[prost(enumeration="ResponseResultType", tag="1")]
    pub result: i32,
}
impl ::prost::Name for MsgRecvPacketResponse {
const NAME: &'static str = "MsgRecvPacketResponse";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// MsgTimeout receives timed-out packet
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgTimeout {
    #[prost(message, optional, tag="1")]
    pub packet: ::core::option::Option<Packet>,
    #[prost(bytes="vec", tag="2")]
    pub proof_unreceived: ::prost::alloc::vec::Vec<u8>,
    #[prost(message, optional, tag="3")]
    pub proof_height: ::core::option::Option<super::super::client::v1::Height>,
    #[prost(string, tag="5")]
    pub signer: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgTimeout {
const NAME: &'static str = "MsgTimeout";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// MsgTimeoutResponse defines the Msg/Timeout response type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgTimeoutResponse {
    #[prost(enumeration="ResponseResultType", tag="1")]
    pub result: i32,
}
impl ::prost::Name for MsgTimeoutResponse {
const NAME: &'static str = "MsgTimeoutResponse";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// MsgAcknowledgement receives incoming IBC acknowledgement.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgAcknowledgement {
    #[prost(message, optional, tag="1")]
    pub packet: ::core::option::Option<Packet>,
    #[prost(message, optional, tag="2")]
    pub acknowledgement: ::core::option::Option<Acknowledgement>,
    #[prost(bytes="vec", tag="3")]
    pub proof_acked: ::prost::alloc::vec::Vec<u8>,
    #[prost(message, optional, tag="4")]
    pub proof_height: ::core::option::Option<super::super::client::v1::Height>,
    #[prost(string, tag="5")]
    pub signer: ::prost::alloc::string::String,
}
impl ::prost::Name for MsgAcknowledgement {
const NAME: &'static str = "MsgAcknowledgement";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MsgAcknowledgementResponse {
    #[prost(enumeration="ResponseResultType", tag="1")]
    pub result: i32,
}
impl ::prost::Name for MsgAcknowledgementResponse {
const NAME: &'static str = "MsgAcknowledgementResponse";
const PACKAGE: &'static str = "ibc.core.channel.v2";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("ibc.core.channel.v2.{}", Self::NAME)
            }}
/// ResponseResultType defines the possible outcomes of the execution of a message
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ResponseResultType {
    /// Default zero value enumeration
    Unspecified = 0,
    /// The message did not call the IBC application callbacks (because, for example, the packet had already been relayed)
    Noop = 1,
    /// The message was executed successfully
    Success = 2,
    /// The message was executed unsuccessfully
    Failure = 3,
}
impl ResponseResultType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ResponseResultType::Unspecified => "RESPONSE_RESULT_TYPE_UNSPECIFIED",
            ResponseResultType::Noop => "RESPONSE_RESULT_TYPE_NOOP",
            ResponseResultType::Success => "RESPONSE_RESULT_TYPE_SUCCESS",
            ResponseResultType::Failure => "RESPONSE_RESULT_TYPE_FAILURE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "RESPONSE_RESULT_TYPE_UNSPECIFIED" => Some(Self::Unspecified),
            "RESPONSE_RESULT_TYPE_NOOP" => Some(Self::Noop),
            "RESPONSE_RESULT_TYPE_SUCCESS" => Some(Self::Success),
            "RESPONSE_RESULT_TYPE_FAILURE" => Some(Self::Failure),
            _ => None,
        }
    }
}
// @@protoc_insertion_point(module)
