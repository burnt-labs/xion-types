// @generated
/// PubKey is an Ethereum-compatible secp256k1 public key (33-byte compressed
/// SEC1) for handling CometBFT secp256k1eth validator keys in the SDK. It is
/// intended for validator-key use only: address derivation is the 20-byte
/// Ethereum address Keccak256(uncompressedPubKey\[1:\])[12:], matching CometBFT,
/// not ADR-28. For user/account-level Ethereum keys use an application key type
/// such as cosmos/evm's eth_secp256k1.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PubKey {
    #[prost(bytes="vec", tag="1")]
    pub key: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for PubKey {
const NAME: &'static str = "PubKey";
const PACKAGE: &'static str = "cosmos.crypto.secp256k1eth";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("cosmos.crypto.secp256k1eth.{}", Self::NAME)
            }}
/// PrivKey defines an Ethereum-compatible secp256k1 private key (32-byte
/// scalar).
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PrivKey {
    #[prost(bytes="vec", tag="1")]
    pub key: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for PrivKey {
const NAME: &'static str = "PrivKey";
const PACKAGE: &'static str = "cosmos.crypto.secp256k1eth";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("cosmos.crypto.secp256k1eth.{}", Self::NAME)
            }}
// @@protoc_insertion_point(module)
