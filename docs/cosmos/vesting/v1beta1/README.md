# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos/vesting/v1beta1/vesting.proto](#cosmos_vesting_v1beta1_vesting-proto)
    - [BaseVestingAccount](#cosmos-vesting-v1beta1-BaseVestingAccount)
    - [ContinuousVestingAccount](#cosmos-vesting-v1beta1-ContinuousVestingAccount)
    - [DelayedVestingAccount](#cosmos-vesting-v1beta1-DelayedVestingAccount)
    - [Period](#cosmos-vesting-v1beta1-Period)
    - [PeriodicVestingAccount](#cosmos-vesting-v1beta1-PeriodicVestingAccount)
    - [PermanentLockedAccount](#cosmos-vesting-v1beta1-PermanentLockedAccount)
  
- [cosmos/vesting/v1beta1/tx.proto](#cosmos_vesting_v1beta1_tx-proto)
    - [MsgCreatePeriodicVestingAccount](#cosmos-vesting-v1beta1-MsgCreatePeriodicVestingAccount)
    - [MsgCreatePeriodicVestingAccountResponse](#cosmos-vesting-v1beta1-MsgCreatePeriodicVestingAccountResponse)
    - [MsgCreatePermanentLockedAccount](#cosmos-vesting-v1beta1-MsgCreatePermanentLockedAccount)
    - [MsgCreatePermanentLockedAccountResponse](#cosmos-vesting-v1beta1-MsgCreatePermanentLockedAccountResponse)
    - [MsgCreateVestingAccount](#cosmos-vesting-v1beta1-MsgCreateVestingAccount)
    - [MsgCreateVestingAccountResponse](#cosmos-vesting-v1beta1-MsgCreateVestingAccountResponse)
  
    - [Msg](#cosmos-vesting-v1beta1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_vesting_v1beta1_vesting-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/vesting/v1beta1/vesting.proto



<a name="cosmos-vesting-v1beta1-BaseVestingAccount"></a>

### BaseVestingAccount
BaseVestingAccount implements the VestingAccount interface. It contains all
the necessary fields needed for any vesting account implementation.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_account | [cosmos.auth.v1beta1.BaseAccount](#cosmos-auth-v1beta1-BaseAccount) |  |  |
| original_vesting | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| delegated_free | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| delegated_vesting | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| end_time | [int64](#int64) |  | Vesting end time, as unix timestamp (in seconds). |






<a name="cosmos-vesting-v1beta1-ContinuousVestingAccount"></a>

### ContinuousVestingAccount
ContinuousVestingAccount implements the VestingAccount interface. It
continuously vests by unlocking coins linearly with respect to time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_vesting_account | [BaseVestingAccount](#cosmos-vesting-v1beta1-BaseVestingAccount) |  |  |
| start_time | [int64](#int64) |  | Vesting start time, as unix timestamp (in seconds). |






<a name="cosmos-vesting-v1beta1-DelayedVestingAccount"></a>

### DelayedVestingAccount
DelayedVestingAccount implements the VestingAccount interface. It vests all
coins after a specific time, but non prior. In other words, it keeps them
locked until a specified time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_vesting_account | [BaseVestingAccount](#cosmos-vesting-v1beta1-BaseVestingAccount) |  |  |






<a name="cosmos-vesting-v1beta1-Period"></a>

### Period
Period defines a length of time and amount of coins that will vest.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| length | [int64](#int64) |  | Period duration in seconds. |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-vesting-v1beta1-PeriodicVestingAccount"></a>

### PeriodicVestingAccount
PeriodicVestingAccount implements the VestingAccount interface. It
periodically vests by unlocking coins during each specified period.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_vesting_account | [BaseVestingAccount](#cosmos-vesting-v1beta1-BaseVestingAccount) |  |  |
| start_time | [int64](#int64) |  |  |
| vesting_periods | [Period](#cosmos-vesting-v1beta1-Period) | repeated |  |






<a name="cosmos-vesting-v1beta1-PermanentLockedAccount"></a>

### PermanentLockedAccount
PermanentLockedAccount implements the VestingAccount interface. It does
not ever release coins, locking them indefinitely. Coins in this account can
still be used for delegating and for governance votes even while locked.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_vesting_account | [BaseVestingAccount](#cosmos-vesting-v1beta1-BaseVestingAccount) |  |  |





 

 

 

 



<a name="cosmos_vesting_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/vesting/v1beta1/tx.proto



<a name="cosmos-vesting-v1beta1-MsgCreatePeriodicVestingAccount"></a>

### MsgCreatePeriodicVestingAccount
MsgCreateVestingAccount defines a message that enables creating a vesting
account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_address | [string](#string) |  |  |
| to_address | [string](#string) |  |  |
| start_time | [int64](#int64) |  | start of vesting as unix time (in seconds). |
| vesting_periods | [Period](#cosmos-vesting-v1beta1-Period) | repeated |  |






<a name="cosmos-vesting-v1beta1-MsgCreatePeriodicVestingAccountResponse"></a>

### MsgCreatePeriodicVestingAccountResponse
MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
response type.






<a name="cosmos-vesting-v1beta1-MsgCreatePermanentLockedAccount"></a>

### MsgCreatePermanentLockedAccount
MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
locked account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_address | [string](#string) |  |  |
| to_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-vesting-v1beta1-MsgCreatePermanentLockedAccountResponse"></a>

### MsgCreatePermanentLockedAccountResponse
MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.






<a name="cosmos-vesting-v1beta1-MsgCreateVestingAccount"></a>

### MsgCreateVestingAccount
MsgCreateVestingAccount defines a message that enables creating a vesting
account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_address | [string](#string) |  |  |
| to_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| end_time | [int64](#int64) |  | end of vesting as unix time (in seconds). |
| delayed | [bool](#bool) |  |  |






<a name="cosmos-vesting-v1beta1-MsgCreateVestingAccountResponse"></a>

### MsgCreateVestingAccountResponse
MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type.





 

 

 


<a name="cosmos-vesting-v1beta1-Msg"></a>

### Msg
Msg defines the bank Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateVestingAccount | [MsgCreateVestingAccount](#cosmos-vesting-v1beta1-MsgCreateVestingAccount) | [MsgCreateVestingAccountResponse](#cosmos-vesting-v1beta1-MsgCreateVestingAccountResponse) | CreateVestingAccount defines a method that enables creating a vesting account. |
| CreatePermanentLockedAccount | [MsgCreatePermanentLockedAccount](#cosmos-vesting-v1beta1-MsgCreatePermanentLockedAccount) | [MsgCreatePermanentLockedAccountResponse](#cosmos-vesting-v1beta1-MsgCreatePermanentLockedAccountResponse) | CreatePermanentLockedAccount defines a method that enables creating a permanent locked account. |
| CreatePeriodicVestingAccount | [MsgCreatePeriodicVestingAccount](#cosmos-vesting-v1beta1-MsgCreatePeriodicVestingAccount) | [MsgCreatePeriodicVestingAccountResponse](#cosmos-vesting-v1beta1-MsgCreatePeriodicVestingAccountResponse) | CreatePeriodicVestingAccount defines a method that enables creating a periodic vesting account. |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

