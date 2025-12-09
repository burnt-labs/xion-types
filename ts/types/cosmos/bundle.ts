//@ts-nocheck
import * as _8 from "./app/runtime/v1alpha1/module";
import * as _9 from "./app/v1alpha1/config";
import * as _10 from "./app/v1alpha1/module";
import * as _11 from "./app/v1alpha1/query";
import * as _12 from "./auth/module/v1/module";
import * as _13 from "./auth/v1beta1/auth";
import * as _14 from "./auth/v1beta1/genesis";
import * as _15 from "./auth/v1beta1/query";
import * as _16 from "./auth/v1beta1/tx";
import * as _17 from "./authz/module/v1/module";
import * as _18 from "./authz/v1beta1/authz";
import * as _19 from "./authz/v1beta1/event";
import * as _20 from "./authz/v1beta1/genesis";
import * as _21 from "./authz/v1beta1/query";
import * as _22 from "./authz/v1beta1/tx";
import * as _23 from "./autocli/v1/options";
import * as _24 from "./autocli/v1/query";
import * as _25 from "./bank/module/v1/module";
import * as _26 from "./bank/v1beta1/authz";
import * as _27 from "./bank/v1beta1/bank";
import * as _28 from "./bank/v1beta1/genesis";
import * as _29 from "./bank/v1beta1/query";
import * as _30 from "./bank/v1beta1/tx";
import * as _31 from "./base/abci/v1beta1/abci";
import * as _32 from "./base/node/v1beta1/query";
import * as _33 from "./base/query/v1beta1/pagination";
import * as _34 from "./base/reflection/v1beta1/reflection";
import * as _35 from "./base/reflection/v2alpha1/reflection";
import * as _36 from "./base/tendermint/v1beta1/query";
import * as _37 from "./base/tendermint/v1beta1/types";
import * as _38 from "./base/v1beta1/coin";
import * as _39 from "./benchmark/module/v1/module";
import * as _40 from "./benchmark/v1/benchmark";
import * as _41 from "./benchmark/v1/tx";
import * as _42 from "./circuit/module/v1/module";
import * as _43 from "./circuit/v1/query";
import * as _44 from "./circuit/v1/tx";
import * as _45 from "./circuit/v1/types";
import * as _46 from "./consensus/module/v1/module";
import * as _47 from "./consensus/v1/query";
import * as _48 from "./consensus/v1/tx";
import * as _49 from "./counter/module/v1/module";
import * as _50 from "./counter/v1/query";
import * as _51 from "./counter/v1/tx";
import * as _52 from "./crisis/module/v1/module";
import * as _53 from "./crisis/v1beta1/genesis";
import * as _54 from "./crisis/v1beta1/tx";
import * as _55 from "./crypto/bls12_381/keys";
import * as _56 from "./crypto/ed25519/keys";
import * as _57 from "./crypto/hd/v1/hd";
import * as _58 from "./crypto/keyring/v1/record";
import * as _59 from "./crypto/multisig/keys";
import * as _60 from "./crypto/secp256k1/keys";
import * as _61 from "./crypto/secp256r1/keys";
import * as _62 from "./distribution/module/v1/module";
import * as _63 from "./distribution/v1beta1/distribution";
import * as _64 from "./distribution/v1beta1/genesis";
import * as _65 from "./distribution/v1beta1/query";
import * as _66 from "./distribution/v1beta1/tx";
import * as _67 from "./epochs/module/v1/module";
import * as _68 from "./epochs/v1beta1/events";
import * as _69 from "./epochs/v1beta1/genesis";
import * as _70 from "./epochs/v1beta1/query";
import * as _71 from "./evidence/module/v1/module";
import * as _72 from "./evidence/v1beta1/evidence";
import * as _73 from "./evidence/v1beta1/genesis";
import * as _74 from "./evidence/v1beta1/query";
import * as _75 from "./evidence/v1beta1/tx";
import * as _76 from "./feegrant/module/v1/module";
import * as _77 from "./feegrant/v1beta1/feegrant";
import * as _78 from "./feegrant/v1beta1/genesis";
import * as _79 from "./feegrant/v1beta1/query";
import * as _80 from "./feegrant/v1beta1/tx";
import * as _81 from "./genutil/module/v1/module";
import * as _82 from "./genutil/v1beta1/genesis";
import * as _83 from "./gov/module/v1/module";
import * as _84 from "./gov/v1/genesis";
import * as _85 from "./gov/v1/gov";
import * as _86 from "./gov/v1/query";
import * as _87 from "./gov/v1/tx";
import * as _88 from "./gov/v1beta1/genesis";
import * as _89 from "./gov/v1beta1/gov";
import * as _90 from "./gov/v1beta1/query";
import * as _91 from "./gov/v1beta1/tx";
import * as _92 from "./group/module/v1/module";
import * as _93 from "./group/v1/events";
import * as _94 from "./group/v1/genesis";
import * as _95 from "./group/v1/query";
import * as _96 from "./group/v1/tx";
import * as _97 from "./group/v1/types";
import * as _98 from "./ics23/v1/proofs";
import * as _99 from "./mint/module/v1/module";
import * as _100 from "./mint/v1beta1/genesis";
import * as _101 from "./mint/v1beta1/mint";
import * as _102 from "./mint/v1beta1/query";
import * as _103 from "./mint/v1beta1/tx";
import * as _104 from "./msg/textual/v1/textual";
import * as _105 from "./msg/v1/msg";
import * as _106 from "./nft/module/v1/module";
import * as _107 from "./nft/v1beta1/event";
import * as _108 from "./nft/v1beta1/genesis";
import * as _109 from "./nft/v1beta1/nft";
import * as _110 from "./nft/v1beta1/query";
import * as _111 from "./nft/v1beta1/tx";
import * as _112 from "./params/module/v1/module";
import * as _113 from "./params/v1beta1/params";
import * as _114 from "./params/v1beta1/query";
import * as _115 from "./protocolpool/module/v1/module";
import * as _116 from "./protocolpool/v1/genesis";
import * as _117 from "./protocolpool/v1/query";
import * as _118 from "./protocolpool/v1/tx";
import * as _119 from "./protocolpool/v1/types";
import * as _120 from "./query/v1/query";
import * as _121 from "./reflection/v1/reflection";
import * as _122 from "./slashing/module/v1/module";
import * as _123 from "./slashing/v1beta1/genesis";
import * as _124 from "./slashing/v1beta1/query";
import * as _125 from "./slashing/v1beta1/slashing";
import * as _126 from "./slashing/v1beta1/tx";
import * as _127 from "./staking/module/v1/module";
import * as _128 from "./staking/v1beta1/authz";
import * as _129 from "./staking/v1beta1/genesis";
import * as _130 from "./staking/v1beta1/query";
import * as _131 from "./staking/v1beta1/staking";
import * as _132 from "./staking/v1beta1/tx";
import * as _133 from "./store/internal/kv/v1beta1/kv";
import * as _134 from "./store/snapshots/v1/snapshot";
import * as _135 from "./store/streaming/abci/grpc";
import * as _136 from "./store/v1beta1/commit_info";
import * as _137 from "./store/v1beta1/listening";
import * as _138 from "./tx/config/v1/config";
import * as _139 from "./tx/signing/v1beta1/signing";
import * as _140 from "./tx/v1beta1/service";
import * as _141 from "./tx/v1beta1/tx";
import * as _142 from "./upgrade/module/v1/module";
import * as _143 from "./upgrade/v1beta1/query";
import * as _144 from "./upgrade/v1beta1/tx";
import * as _145 from "./upgrade/v1beta1/upgrade";
import * as _146 from "./vesting/module/v1/module";
import * as _147 from "./vesting/v1beta1/tx";
import * as _148 from "./vesting/v1beta1/vesting";
import * as _294 from "./auth/v1beta1/tx.amino";
import * as _295 from "./authz/v1beta1/tx.amino";
import * as _296 from "./bank/v1beta1/tx.amino";
import * as _297 from "./benchmark/v1/tx.amino";
import * as _298 from "./circuit/v1/tx.amino";
import * as _299 from "./consensus/v1/tx.amino";
import * as _300 from "./counter/v1/tx.amino";
import * as _301 from "./crisis/v1beta1/tx.amino";
import * as _302 from "./distribution/v1beta1/tx.amino";
import * as _303 from "./evidence/v1beta1/tx.amino";
import * as _304 from "./feegrant/v1beta1/tx.amino";
import * as _305 from "./gov/v1/tx.amino";
import * as _306 from "./gov/v1beta1/tx.amino";
import * as _307 from "./group/v1/tx.amino";
import * as _308 from "./mint/v1beta1/tx.amino";
import * as _309 from "./nft/v1beta1/tx.amino";
import * as _310 from "./protocolpool/v1/tx.amino";
import * as _311 from "./slashing/v1beta1/tx.amino";
import * as _312 from "./staking/v1beta1/tx.amino";
import * as _313 from "./upgrade/v1beta1/tx.amino";
import * as _314 from "./vesting/v1beta1/tx.amino";
import * as _315 from "./auth/v1beta1/tx.registry";
import * as _316 from "./authz/v1beta1/tx.registry";
import * as _317 from "./bank/v1beta1/tx.registry";
import * as _318 from "./benchmark/v1/tx.registry";
import * as _319 from "./circuit/v1/tx.registry";
import * as _320 from "./consensus/v1/tx.registry";
import * as _321 from "./counter/v1/tx.registry";
import * as _322 from "./crisis/v1beta1/tx.registry";
import * as _323 from "./distribution/v1beta1/tx.registry";
import * as _324 from "./evidence/v1beta1/tx.registry";
import * as _325 from "./feegrant/v1beta1/tx.registry";
import * as _326 from "./gov/v1/tx.registry";
import * as _327 from "./gov/v1beta1/tx.registry";
import * as _328 from "./group/v1/tx.registry";
import * as _329 from "./mint/v1beta1/tx.registry";
import * as _330 from "./nft/v1beta1/tx.registry";
import * as _331 from "./protocolpool/v1/tx.registry";
import * as _332 from "./slashing/v1beta1/tx.registry";
import * as _333 from "./staking/v1beta1/tx.registry";
import * as _334 from "./upgrade/v1beta1/tx.registry";
import * as _335 from "./vesting/v1beta1/tx.registry";
import * as _336 from "./auth/v1beta1/query.lcd";
import * as _337 from "./authz/v1beta1/query.lcd";
import * as _338 from "./bank/v1beta1/query.lcd";
import * as _339 from "./base/node/v1beta1/query.lcd";
import * as _340 from "./base/tendermint/v1beta1/query.lcd";
import * as _341 from "./circuit/v1/query.lcd";
import * as _342 from "./consensus/v1/query.lcd";
import * as _343 from "./distribution/v1beta1/query.lcd";
import * as _344 from "./epochs/v1beta1/query.lcd";
import * as _345 from "./evidence/v1beta1/query.lcd";
import * as _346 from "./feegrant/v1beta1/query.lcd";
import * as _347 from "./gov/v1/query.lcd";
import * as _348 from "./gov/v1beta1/query.lcd";
import * as _349 from "./group/v1/query.lcd";
import * as _350 from "./mint/v1beta1/query.lcd";
import * as _351 from "./nft/v1beta1/query.lcd";
import * as _352 from "./params/v1beta1/query.lcd";
import * as _353 from "./protocolpool/v1/query.lcd";
import * as _354 from "./slashing/v1beta1/query.lcd";
import * as _355 from "./staking/v1beta1/query.lcd";
import * as _356 from "./tx/v1beta1/service.lcd";
import * as _357 from "./upgrade/v1beta1/query.lcd";
import * as _358 from "./app/v1alpha1/query.rpc.Query";
import * as _359 from "./auth/v1beta1/query.rpc.Query";
import * as _360 from "./authz/v1beta1/query.rpc.Query";
import * as _361 from "./autocli/v1/query.rpc.Query";
import * as _362 from "./bank/v1beta1/query.rpc.Query";
import * as _363 from "./base/node/v1beta1/query.rpc.Service";
import * as _364 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _365 from "./circuit/v1/query.rpc.Query";
import * as _366 from "./consensus/v1/query.rpc.Query";
import * as _367 from "./counter/v1/query.rpc.Query";
import * as _368 from "./distribution/v1beta1/query.rpc.Query";
import * as _369 from "./epochs/v1beta1/query.rpc.Query";
import * as _370 from "./evidence/v1beta1/query.rpc.Query";
import * as _371 from "./feegrant/v1beta1/query.rpc.Query";
import * as _372 from "./gov/v1/query.rpc.Query";
import * as _373 from "./gov/v1beta1/query.rpc.Query";
import * as _374 from "./group/v1/query.rpc.Query";
import * as _375 from "./mint/v1beta1/query.rpc.Query";
import * as _376 from "./nft/v1beta1/query.rpc.Query";
import * as _377 from "./params/v1beta1/query.rpc.Query";
import * as _378 from "./protocolpool/v1/query.rpc.Query";
import * as _379 from "./slashing/v1beta1/query.rpc.Query";
import * as _380 from "./staking/v1beta1/query.rpc.Query";
import * as _381 from "./tx/v1beta1/service.rpc.Service";
import * as _382 from "./upgrade/v1beta1/query.rpc.Query";
import * as _383 from "./auth/v1beta1/tx.rpc.msg";
import * as _384 from "./authz/v1beta1/tx.rpc.msg";
import * as _385 from "./bank/v1beta1/tx.rpc.msg";
import * as _386 from "./benchmark/v1/tx.rpc.msg";
import * as _387 from "./circuit/v1/tx.rpc.msg";
import * as _388 from "./consensus/v1/tx.rpc.msg";
import * as _389 from "./counter/v1/tx.rpc.msg";
import * as _390 from "./crisis/v1beta1/tx.rpc.msg";
import * as _391 from "./distribution/v1beta1/tx.rpc.msg";
import * as _392 from "./evidence/v1beta1/tx.rpc.msg";
import * as _393 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _394 from "./gov/v1/tx.rpc.msg";
import * as _395 from "./gov/v1beta1/tx.rpc.msg";
import * as _396 from "./group/v1/tx.rpc.msg";
import * as _397 from "./mint/v1beta1/tx.rpc.msg";
import * as _398 from "./nft/v1beta1/tx.rpc.msg";
import * as _399 from "./protocolpool/v1/tx.rpc.msg";
import * as _400 from "./slashing/v1beta1/tx.rpc.msg";
import * as _401 from "./staking/v1beta1/tx.rpc.msg";
import * as _402 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _403 from "./vesting/v1beta1/tx.rpc.msg";
import * as _478 from "./lcd";
import * as _479 from "./rpc.query";
import * as _480 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._8
      };
    }
    export const v1alpha1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._358
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._12
      };
    }
    export const v1beta1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._294,
      ..._315,
      ..._336,
      ..._359,
      ..._383
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._17
      };
    }
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._295,
      ..._316,
      ..._337,
      ..._360,
      ..._384
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._23,
      ..._24,
      ..._361
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._25
      };
    }
    export const v1beta1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._296,
      ..._317,
      ..._338,
      ..._362,
      ..._385
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._31
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._32,
        ..._339,
        ..._363
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._33
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._34
      };
      export const v2alpha1 = {
        ..._35
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._36,
        ..._37,
        ..._340,
        ..._364
      };
    }
    export const v1beta1 = {
      ..._38
    };
  }
  export namespace benchmark {
    export namespace module {
      export const v1 = {
        ..._39
      };
    }
    export const v1 = {
      ..._40,
      ..._41,
      ..._297,
      ..._318,
      ..._386
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._42
      };
    }
    export const v1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._298,
      ..._319,
      ..._341,
      ..._365,
      ..._387
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._46
      };
    }
    export const v1 = {
      ..._47,
      ..._48,
      ..._299,
      ..._320,
      ..._342,
      ..._366,
      ..._388
    };
  }
  export namespace counter {
    export namespace module {
      export const v1 = {
        ..._49
      };
    }
    export const v1 = {
      ..._50,
      ..._51,
      ..._300,
      ..._321,
      ..._367,
      ..._389
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._52
      };
    }
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._301,
      ..._322,
      ..._390
    };
  }
  export namespace crypto {
    export const bls12_381 = {
      ..._55
    };
    export const ed25519 = {
      ..._56
    };
    export namespace hd {
      export const v1 = {
        ..._57
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._58
      };
    }
    export const multisig = {
      ..._59
    };
    export const secp256k1 = {
      ..._60
    };
    export const secp256r1 = {
      ..._61
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._62
      };
    }
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._302,
      ..._323,
      ..._343,
      ..._368,
      ..._391
    };
  }
  export namespace epochs {
    export namespace module {
      export const v1 = {
        ..._67
      };
    }
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._344,
      ..._369
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._71
      };
    }
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._303,
      ..._324,
      ..._345,
      ..._370,
      ..._392
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._76
      };
    }
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._304,
      ..._325,
      ..._346,
      ..._371,
      ..._393
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._81
      };
    }
    export const v1beta1 = {
      ..._82
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._83
      };
    }
    export const v1 = {
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._305,
      ..._326,
      ..._347,
      ..._372,
      ..._394
    };
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._306,
      ..._327,
      ..._348,
      ..._373,
      ..._395
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._92
      };
    }
    export const v1 = {
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._307,
      ..._328,
      ..._349,
      ..._374,
      ..._396
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._98
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._99
      };
    }
    export const v1beta1 = {
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._308,
      ..._329,
      ..._350,
      ..._375,
      ..._397
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._104
      };
    }
    export const v1 = {
      ..._105
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._106
      };
    }
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._309,
      ..._330,
      ..._351,
      ..._376,
      ..._398
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._112
      };
    }
    export const v1beta1 = {
      ..._113,
      ..._114,
      ..._352,
      ..._377
    };
  }
  export namespace protocolpool {
    export namespace module {
      export const v1 = {
        ..._115
      };
    }
    export const v1 = {
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._310,
      ..._331,
      ..._353,
      ..._378,
      ..._399
    };
  }
  export namespace query {
    export const v1 = {
      ..._120
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._121
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._122
      };
    }
    export const v1beta1 = {
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._311,
      ..._332,
      ..._354,
      ..._379,
      ..._400
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._127
      };
    }
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._312,
      ..._333,
      ..._355,
      ..._380,
      ..._401
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._133
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._134
      };
    }
    export namespace streaming {
      export const abci = {
        ..._135
      };
    }
    export const v1beta1 = {
      ..._136,
      ..._137
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._138
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._139
      };
    }
    export const v1beta1 = {
      ..._140,
      ..._141,
      ..._356,
      ..._381
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._142
      };
    }
    export const v1beta1 = {
      ..._143,
      ..._144,
      ..._145,
      ..._313,
      ..._334,
      ..._357,
      ..._382,
      ..._402
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._146
      };
    }
    export const v1beta1 = {
      ..._147,
      ..._148,
      ..._314,
      ..._335,
      ..._403
    };
  }
  export const ClientFactory = {
    ..._478,
    ..._479,
    ..._480
  };
}