import { TelescopeInput } from '@cosmology/telescope';
import telescope from '@cosmology/telescope';
import { join } from 'path';
import { rimrafSync as rimraf } from 'rimraf';

import { AMINO_MAP } from './aminos';

const protoDirs: string[] = [join(__dirname, '/../protos'), join(__dirname, '/../../xion/proto')];
const outPath: string = join(__dirname, '../types');
rimraf(outPath);

export const options: TelescopeInput = {
  protoDirs,
  outPath,
  options: {
    interfaces: {
      enabled: true,
      useUnionTypes: true
    },
    prototypes: {
      enabled: true,
      excluded: {
        packages: [
        ]
      },
    },

    bundle: {
      enabled: true
    },

    tsDisable: {
      files: [],
      patterns: [],
      disableAll: true
    },

    eslintDisable: {
      files: [],
      patterns: [],
      disableAll: false
    },

    stargateClients: {
      enabled: true,
      includeCosmosDefaultTypes: true
    },

    aminoEncoding: {
      enabled: true,
      customTypes: {
        useCosmosSDKDec: false
      },
      exceptions: {
        ...AMINO_MAP
      },
    },
    rpcClients: {
      type: 'tendermint',
      enabled: true
    },
  }
};


telescope(options)
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
