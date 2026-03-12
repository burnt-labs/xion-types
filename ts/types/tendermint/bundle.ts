//@ts-nocheck
import * as _206 from "./abci/types";
import * as _207 from "./crypto/keys";
import * as _208 from "./crypto/proof";
import * as _209 from "./p2p/types";
import * as _210 from "./types/block";
import * as _211 from "./types/evidence";
import * as _212 from "./types/params";
import * as _213 from "./types/types";
import * as _214 from "./types/validator";
import * as _215 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._206
  };
  export const crypto = {
    ..._207,
    ..._208
  };
  export const p2p = {
    ..._209
  };
  export const types = {
    ..._210,
    ..._211,
    ..._212,
    ..._213,
    ..._214
  };
  export const version = {
    ..._215
  };
}