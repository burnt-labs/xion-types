// @generated
/// PubKey is an ML-DSA-65 (FIPS 204) public key for handling CometBFT keys in
/// the SDK. It is intended for validator-key use and must not be used in
/// application-level account contexts because it does not implement ADR-28
/// address derivation. If you want to use ML-DSA-65 at the user/account level,
/// define a new proto message and follow ADR-28 for address construction.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PubKey {
    #[prost(bytes="vec", tag="1")]
    pub key: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for PubKey {
const NAME: &'static str = "PubKey";
const PACKAGE: &'static str = "cosmos.crypto.mldsa65";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("cosmos.crypto.mldsa65.{}", Self::NAME)
            }}
/// PrivKey defines an ML-DSA-65 private key (FIPS 204 packed form).
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PrivKey {
    #[prost(bytes="vec", tag="1")]
    pub key: ::prost::alloc::vec::Vec<u8>,
}
impl ::prost::Name for PrivKey {
const NAME: &'static str = "PrivKey";
const PACKAGE: &'static str = "cosmos.crypto.mldsa65";
fn full_name() -> ::prost::alloc::string::String {
                ::prost::alloc::format!("cosmos.crypto.mldsa65.{}", Self::NAME)
            }}
// @@protoc_insertion_point(module)
