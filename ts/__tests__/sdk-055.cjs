const test = require("node:test");
const assert = require("node:assert/strict");
const { BaseAccount } = require("../dist/cosmos/auth/v1beta1/auth");
const { SignDoc } = require("../dist/cosmos/tx/v1beta1/tx");
const { registry, MessageComposer } = require("../dist/cosmos/staking/v1beta1/tx.registry");

// BaseAccount{address, account_number = 12033574294966132243 (tag 3), sequence = 1}
const HIGH_BIT_BASE_ACCOUNT = Buffer.from(
  "0a3f78696f6e31717161706b3574326d3061387a656878356c727565666a666a78736533687670346e706c6a6d746c7974657737786178753637737438753778741893bce9ed8882f6ffa6012001",
  "hex",
);
const HIGH_BIT = 12033574294966132243n;

test("BaseAccount decodes a high-bit account number exactly", () => {
  const account = BaseAccount.decode(HIGH_BIT_BASE_ACCOUNT);
  assert.equal(account.accountNumber, HIGH_BIT);
  assert.equal(account.sequence, 1n);
  assert.deepEqual(Buffer.from(BaseAccount.encode(account).finish()), HIGH_BIT_BASE_ACCOUNT);

  const json = BaseAccount.toJSON(account);
  assert.equal(json.accountNumber, "12033574294966132243");
  assert.equal(BaseAccount.fromJSON(json).accountNumber, HIGH_BIT);
});

test("SignDoc keeps the full uint64 account number", () => {
  const max = 18446744073709551615n;
  const decoded = SignDoc.decode(SignDoc.encode(SignDoc.fromPartial({ accountNumber: max })).finish());
  assert.equal(decoded.accountNumber, max);
});

test("staking registry resolves MsgRotateConsPubKey", () => {
  const typeUrl = "/cosmos.staking.v1beta1.MsgRotateConsPubKey";
  const entry = registry.find(([url]) => url === typeUrl);
  assert.ok(entry, "MsgRotateConsPubKey missing from staking registry");
  const [, codec] = entry;
  const msg = codec.fromPartial({ validatorAddress: "xionvaloper1test" });
  assert.equal(codec.decode(codec.encode(msg).finish()).validatorAddress, "xionvaloper1test");
  assert.equal(MessageComposer.encoded.rotateConsPubKey(msg).typeUrl, typeUrl);
});
