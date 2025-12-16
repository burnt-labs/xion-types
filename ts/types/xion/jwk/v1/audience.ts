//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Audience {
  aud: string;
  key: string;
  admin: string;
}
export interface AudienceProtoMsg {
  typeUrl: "/xion.jwk.v1.Audience";
  value: Uint8Array;
}
/**
 * @name AudienceAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.Audience
 */
export interface AudienceAmino {
  aud?: string;
  key?: string;
  admin?: string;
}
export interface AudienceAminoMsg {
  type: "/xion.jwk.v1.Audience";
  value: AudienceAmino;
}
export interface AudienceSDKType {
  aud: string;
  key: string;
  admin: string;
}
export interface AudienceClaim {
  signer: string;
}
export interface AudienceClaimProtoMsg {
  typeUrl: "/xion.jwk.v1.AudienceClaim";
  value: Uint8Array;
}
/**
 * @name AudienceClaimAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.AudienceClaim
 */
export interface AudienceClaimAmino {
  signer?: string;
}
export interface AudienceClaimAminoMsg {
  type: "/xion.jwk.v1.AudienceClaim";
  value: AudienceClaimAmino;
}
export interface AudienceClaimSDKType {
  signer: string;
}
function createBaseAudience(): Audience {
  return {
    aud: "",
    key: "",
    admin: ""
  };
}
export const Audience = {
  typeUrl: "/xion.jwk.v1.Audience",
  encode(message: Audience, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aud !== "") {
      writer.uint32(10).string(message.aud);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Audience {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudience();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aud = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Audience>): Audience {
    const message = createBaseAudience();
    message.aud = object.aud ?? "";
    message.key = object.key ?? "";
    message.admin = object.admin ?? "";
    return message;
  },
  fromAmino(object: AudienceAmino): Audience {
    const message = createBaseAudience();
    if (object.aud !== undefined && object.aud !== null) {
      message.aud = object.aud;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    return message;
  },
  toAmino(message: Audience): AudienceAmino {
    const obj: any = {};
    obj.aud = message.aud === "" ? undefined : message.aud;
    obj.key = message.key === "" ? undefined : message.key;
    obj.admin = message.admin === "" ? undefined : message.admin;
    return obj;
  },
  fromAminoMsg(object: AudienceAminoMsg): Audience {
    return Audience.fromAmino(object.value);
  },
  fromProtoMsg(message: AudienceProtoMsg): Audience {
    return Audience.decode(message.value);
  },
  toProto(message: Audience): Uint8Array {
    return Audience.encode(message).finish();
  },
  toProtoMsg(message: Audience): AudienceProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.Audience",
      value: Audience.encode(message).finish()
    };
  }
};
function createBaseAudienceClaim(): AudienceClaim {
  return {
    signer: ""
  };
}
export const AudienceClaim = {
  typeUrl: "/xion.jwk.v1.AudienceClaim",
  encode(message: AudienceClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AudienceClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudienceClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AudienceClaim>): AudienceClaim {
    const message = createBaseAudienceClaim();
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: AudienceClaimAmino): AudienceClaim {
    const message = createBaseAudienceClaim();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: AudienceClaim): AudienceClaimAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: AudienceClaimAminoMsg): AudienceClaim {
    return AudienceClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: AudienceClaimProtoMsg): AudienceClaim {
    return AudienceClaim.decode(message.value);
  },
  toProto(message: AudienceClaim): Uint8Array {
    return AudienceClaim.encode(message).finish();
  },
  toProtoMsg(message: AudienceClaim): AudienceClaimProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.AudienceClaim",
      value: AudienceClaim.encode(message).finish()
    };
  }
};