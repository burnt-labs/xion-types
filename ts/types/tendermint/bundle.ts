//@ts-nocheck
import * as _256 from "./abci/types";
import * as _257 from "./crypto/keys";
import * as _258 from "./crypto/proof";
import * as _259 from "./p2p/types";
import * as _260 from "./types/block";
import * as _261 from "./types/evidence";
import * as _262 from "./types/params";
import * as _263 from "./types/types";
import * as _264 from "./types/validator";
import * as _265 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._256
  };
  export const crypto = {
    ..._257,
    ..._258
  };
  export const p2p = {
    ..._259
  };
  export const types = {
    ..._260,
    ..._261,
    ..._262,
    ..._263,
    ..._264
  };
  export const version = {
    ..._265
  };
}