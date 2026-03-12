// @generated
/// PubKey is an bls12_381 public key for handling CometBFT keys in SDK.
/// It's needed for Any serialization and SDK compatibility.
/// It must not be used in a non Tendermint key context because it doesn't implement
/// ADR-28. Nevertheless, you will like to use bls12_381 in app user level
/// then you must create a new proto message and follow ADR-28 for Address construction.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PubKey {
    #[prost(bytes="vec", tag="1")]
    pub key: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for PubKey {
const NAME: &'static str = "PubKey";
const PACKAGE: &'static str = "cosmos.crypto.bls12_381";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("cosmos.crypto.bls12_381.{}", Self::NAME)
            }}
/// PrivKey defines a bls12_381 private key.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PrivKey {
    #[prost(bytes="vec", tag="1")]
    pub key: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for PrivKey {
const NAME: &'static str = "PrivKey";
const PACKAGE: &'static str = "cosmos.crypto.bls12_381";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("cosmos.crypto.bls12_381.{}", Self::NAME)
            }}
// @@protoc_insertion_point(module)
