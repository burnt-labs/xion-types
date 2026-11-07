use prost::{Message, Name};
use xion_types::types::{
    abstractaccount_v1::AbstractAccount,
    cosmos_auth_v1beta1::{BaseAccount, Params as AuthParams},
    cosmos_base_v1beta1::Coin,
    cosmos_staking_v1beta1::{MsgRotateConsPubKey, Params as StakingParams},
    cosmos_tx_signing_v1beta1::SignMode,
    cosmos_tx_v1beta1::SignDoc,
};

const HIGH_BIT_ACCOUNT_NUMBER: u64 = 12_033_574_294_966_132_243;
const HIGH_BIT_ADDRESS: &str = "xion1qqapk5t2m0a8zehx5lruefjfjxse3hvp4npljmtlytew7xaxu67st8u7xt";
/// BaseAccount{address, account_number = 12033574294966132243 (tag 3), sequence = 1}.
const HIGH_BIT_BASE_ACCOUNT_HEX: &str = "0a3f78696f6e31717161706b3574326d3061387a656878356c727565666a666a78736533687670346e706c6a6d746c7974657737786178753637737438753778741893bce9ed8882f6ffa6012001";

fn unhex(s: &str) -> Vec<u8> {
    (0..s.len())
        .step_by(2)
        .map(|i| u8::from_str_radix(&s[i..i + 2], 16).unwrap())
        .collect()
}

#[test]
fn base_account_decodes_high_bit_account_number() {
    let bytes = unhex(HIGH_BIT_BASE_ACCOUNT_HEX);
    let account = BaseAccount::decode(bytes.as_slice()).unwrap();
    assert_eq!(account.address, HIGH_BIT_ADDRESS);
    assert_eq!(account.account_number, HIGH_BIT_ACCOUNT_NUMBER);
    assert_eq!(account.sequence, 1);
    assert_eq!(account.encode_to_vec(), bytes);
}

#[test]
fn account_number_fields_keep_uint64_wire_tags() {
    let doc = SignDoc {
        account_number: u64::MAX,
        ..Default::default()
    };
    // tag 4, varint, ten-byte encoding of u64::MAX
    assert_eq!(
        doc.encode_to_vec(),
        [0x20, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01]
    );

    let abstract_account = AbstractAccount {
        account_number: HIGH_BIT_ACCOUNT_NUMBER,
        ..Default::default()
    };
    let encoded = abstract_account.encode_to_vec();
    assert_eq!(encoded[0], 0x10); // tag 2, varint
    assert_eq!(
        AbstractAccount::decode(encoded.as_slice())
            .unwrap()
            .account_number,
        HIGH_BIT_ACCOUNT_NUMBER
    );
}

#[test]
fn sdk_055_schema_additions_are_present() {
    let auth = AuthParams {
        sig_verify_cost_mldsa65: 5,
        ..Default::default()
    };
    assert_eq!(auth.encode_to_vec(), [0x30, 0x05]); // tag 6, varint

    let staking = StakingParams {
        key_rotation_fee: Some(Coin {
            denom: "uxion".into(),
            amount: "1".into(),
        }),
        ..Default::default()
    };
    assert_eq!(staking.encode_to_vec()[0], 0x3a); // tag 7, length-delimited

    assert_eq!(
        MsgRotateConsPubKey::type_url(),
        "/cosmos.staking.v1beta1.MsgRotateConsPubKey"
    );
    assert!(SignMode::from_str_name("SIGN_MODE_TEXTUAL").is_none());
    assert!(SignMode::try_from(2).is_err());
}

#[test]
fn staking_validator_policy_keeps_nested_message_and_wire_tags() {
    use xion_types::types::cosmos_staking_v1beta1::{
        stake_authorization::{ValidatorPolicyEnum, Validators},
        StakeAuthorization,
    };

    for (policy, tag) in [
        (
            ValidatorPolicyEnum::AllowList(Validators {
                address: vec!["v".into()],
            }),
            0x12,
        ),
        (
            ValidatorPolicyEnum::DenyList(Validators {
                address: vec!["v".into()],
            }),
            0x1a,
        ),
    ] {
        let authorization = StakeAuthorization {
            validators: Some(policy),
            ..Default::default()
        };
        let expected = [tag, 0x03, 0x0a, 0x01, b'v'];
        assert_eq!(authorization.encode_to_vec(), expected);
        assert_eq!(
            StakeAuthorization::decode(expected.as_slice()).unwrap(),
            authorization
        );
    }
}
