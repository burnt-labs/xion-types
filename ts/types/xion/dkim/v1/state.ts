//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** Version defines the supported DKIM versions. */
export enum Version {
  /** VERSION_DKIM1_UNSPECIFIED - VERSION_DKIM1_UNSPECIFIED represents DKIM version 1 (unspecified default). */
  VERSION_DKIM1_UNSPECIFIED = 0,
  UNRECOGNIZED = -1,
}
export const VersionSDKType = Version;
export const VersionAmino = Version;
export function versionFromJSON(object: any): Version {
  switch (object) {
    case 0:
    case "VERSION_DKIM1_UNSPECIFIED":
      return Version.VERSION_DKIM1_UNSPECIFIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Version.UNRECOGNIZED;
  }
}
export function versionToJSON(object: Version): string {
  switch (object) {
    case Version.VERSION_DKIM1_UNSPECIFIED:
      return "VERSION_DKIM1_UNSPECIFIED";
    case Version.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** KeyType defines the supported cryptographic key types for DKIM. */
export enum KeyType {
  /** KEY_TYPE_RSA_UNSPECIFIED - KEY_TYPE_RSA_UNSPECIFIED represents RSA key type (unspecified default). */
  KEY_TYPE_RSA_UNSPECIFIED = 0,
  UNRECOGNIZED = -1,
}
export const KeyTypeSDKType = KeyType;
export const KeyTypeAmino = KeyType;
export function keyTypeFromJSON(object: any): KeyType {
  switch (object) {
    case 0:
    case "KEY_TYPE_RSA_UNSPECIFIED":
      return KeyType.KEY_TYPE_RSA_UNSPECIFIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyType.UNRECOGNIZED;
  }
}
export function keyTypeToJSON(object: KeyType): string {
  switch (object) {
    case KeyType.KEY_TYPE_RSA_UNSPECIFIED:
      return "KEY_TYPE_RSA_UNSPECIFIED";
    case KeyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** DkimPubKey represents a DKIM public key with associated metadata. */
export interface DkimPubKey {
  /** domain defines the email domain associated with this DKIM key. */
  domain: string;
  /** pub_key defines the base64 encoded public key. */
  pubKey: string;
  /** poseidon_hash defines the Poseidon hash of the public key. */
  poseidonHash: Uint8Array;
  /** selector defines the DKIM selector for this key. */
  selector: string;
  /** version defines the DKIM version. */
  version: Version;
  /** key_type defines the cryptographic key type. */
  keyType: KeyType;
}
export interface DkimPubKeyProtoMsg {
  typeUrl: "/xion.dkim.v1.DkimPubKey";
  value: Uint8Array;
}
/**
 * DkimPubKey represents a DKIM public key with associated metadata.
 * @name DkimPubKeyAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.DkimPubKey
 */
export interface DkimPubKeyAmino {
  /**
   * domain defines the email domain associated with this DKIM key.
   */
  domain?: string;
  /**
   * pub_key defines the base64 encoded public key.
   */
  pub_key?: string;
  /**
   * poseidon_hash defines the Poseidon hash of the public key.
   */
  poseidon_hash?: string;
  /**
   * selector defines the DKIM selector for this key.
   */
  selector?: string;
  /**
   * version defines the DKIM version.
   */
  version?: Version;
  /**
   * key_type defines the cryptographic key type.
   */
  key_type?: KeyType;
}
export interface DkimPubKeyAminoMsg {
  type: "/xion.dkim.v1.DkimPubKey";
  value: DkimPubKeyAmino;
}
/** DkimPubKey represents a DKIM public key with associated metadata. */
export interface DkimPubKeySDKType {
  domain: string;
  pub_key: string;
  poseidon_hash: Uint8Array;
  selector: string;
  version: Version;
  key_type: KeyType;
}
function createBaseDkimPubKey(): DkimPubKey {
  return {
    domain: "",
    pubKey: "",
    poseidonHash: new Uint8Array(),
    selector: "",
    version: 0,
    keyType: 0
  };
}
export const DkimPubKey = {
  typeUrl: "/xion.dkim.v1.DkimPubKey",
  encode(message: DkimPubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.pubKey !== "") {
      writer.uint32(18).string(message.pubKey);
    }
    if (message.poseidonHash.length !== 0) {
      writer.uint32(26).bytes(message.poseidonHash);
    }
    if (message.selector !== "") {
      writer.uint32(34).string(message.selector);
    }
    if (message.version !== 0) {
      writer.uint32(40).int32(message.version);
    }
    if (message.keyType !== 0) {
      writer.uint32(48).int32(message.keyType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DkimPubKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDkimPubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.pubKey = reader.string();
          break;
        case 3:
          message.poseidonHash = reader.bytes();
          break;
        case 4:
          message.selector = reader.string();
          break;
        case 5:
          message.version = reader.int32() as any;
          break;
        case 6:
          message.keyType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DkimPubKey>): DkimPubKey {
    const message = createBaseDkimPubKey();
    message.domain = object.domain ?? "";
    message.pubKey = object.pubKey ?? "";
    message.poseidonHash = object.poseidonHash ?? new Uint8Array();
    message.selector = object.selector ?? "";
    message.version = object.version ?? 0;
    message.keyType = object.keyType ?? 0;
    return message;
  },
  fromAmino(object: DkimPubKeyAmino): DkimPubKey {
    const message = createBaseDkimPubKey();
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = object.pub_key;
    }
    if (object.poseidon_hash !== undefined && object.poseidon_hash !== null) {
      message.poseidonHash = bytesFromBase64(object.poseidon_hash);
    }
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.key_type !== undefined && object.key_type !== null) {
      message.keyType = object.key_type;
    }
    return message;
  },
  toAmino(message: DkimPubKey): DkimPubKeyAmino {
    const obj: any = {};
    obj.domain = message.domain === "" ? undefined : message.domain;
    obj.pub_key = message.pubKey === "" ? undefined : message.pubKey;
    obj.poseidon_hash = message.poseidonHash ? base64FromBytes(message.poseidonHash) : undefined;
    obj.selector = message.selector === "" ? undefined : message.selector;
    obj.version = message.version === 0 ? undefined : message.version;
    obj.key_type = message.keyType === 0 ? undefined : message.keyType;
    return obj;
  },
  fromAminoMsg(object: DkimPubKeyAminoMsg): DkimPubKey {
    return DkimPubKey.fromAmino(object.value);
  },
  fromProtoMsg(message: DkimPubKeyProtoMsg): DkimPubKey {
    return DkimPubKey.decode(message.value);
  },
  toProto(message: DkimPubKey): Uint8Array {
    return DkimPubKey.encode(message).finish();
  },
  toProtoMsg(message: DkimPubKey): DkimPubKeyProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.DkimPubKey",
      value: DkimPubKey.encode(message).finish()
    };
  }
};