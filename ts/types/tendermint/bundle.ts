//@ts-nocheck
import * as _255 from "./abci/types";
import * as _256 from "./crypto/keys";
import * as _257 from "./crypto/proof";
import * as _258 from "./p2p/types";
import * as _259 from "./types/block";
import * as _260 from "./types/evidence";
import * as _261 from "./types/params";
import * as _262 from "./types/types";
import * as _263 from "./types/validator";
import * as _264 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._255
  };
  export const crypto = {
    ..._256,
    ..._257
  };
  export const p2p = {
    ..._258
  };
  export const types = {
    ..._259,
    ..._260,
    ..._261,
    ..._262,
    ..._263
  };
  export const version = {
    ..._264
  };
}