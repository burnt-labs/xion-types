// @ts-ignore
import downloadProtos from '@cosmology/telescope/main/commands/download'
import { join } from 'path';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';

/**
 * Fix common proto syntax errors that cause telescope to fail
 */
function fixProtoSyntaxErrors(protoDir: string): void {
  console.log('🔧 Fixing proto syntax errors...');

  let totalFilesFixed = 0;

  function processDirectory(dir: string): void {
    const items = readdirSync(dir);

    for (const item of items) {
      const fullPath = join(dir, item);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (item.endsWith('.proto')) {
        let content = readFileSync(fullPath, 'utf8');
        const originalContent = content;

        // Fix: Remove standalone semicolons (lines with just spaces and a semicolon)
        content = content.replace(/^(\s*);(\s*)$/gm, '$1$2');

        if (content !== originalContent) {
          writeFileSync(fullPath, content, 'utf8');
          const relativePath = fullPath.replace(protoDir + '/', '');
          console.log(`  ✅ Fixed syntax errors in: ${relativePath}`);
          totalFilesFixed++;
        }
      }
    }
  }

  processDirectory(protoDir);

  if (totalFilesFixed > 0) {
    console.log(`🎉 Fixed syntax errors in ${totalFilesFixed} proto files`);
  } else {
    console.log('✅ No proto syntax errors found');
  }
}

// ─── Parse go.mod directly (no Go toolchain needed) ─────────────────────────

interface GoModInfo {
  requires: Map<string, string>;     // module path → version
  replaces: Map<string, { path: string; version: string }>; // original → replacement
}

function parseGoMod(goModPath: string): GoModInfo {
  const content = readFileSync(goModPath, 'utf8');
  const requires = new Map<string, string>();
  const replaces = new Map<string, { path: string; version: string }>();

  // Parse require blocks and single-line requires
  const requireBlockRe = /require\s*\(([\s\S]*?)\)/g;
  const requireLineRe = /^\s*([\w./-]+)\s+(v[\w.+-]+)/gm;

  let match;
  while ((match = requireBlockRe.exec(content)) !== null) {
    let lineMatch;
    while ((lineMatch = requireLineRe.exec(match[1])) !== null) {
      requires.set(lineMatch[1], lineMatch[2]);
    }
  }

  // Parse replace blocks and single-line replaces
  const replaceBlockRe = /replace\s*\(([\s\S]*?)\)/g;
  const replaceLineRe = /^\s*([\w./-]+)(?:\s+v[\w.+-]+)?\s+=>\s+([\w./-]+)\s+(v[\w.+-]+)/gm;

  while ((match = replaceBlockRe.exec(content)) !== null) {
    let lineMatch;
    while ((lineMatch = replaceLineRe.exec(match[1])) !== null) {
      replaces.set(lineMatch[1], { path: lineMatch[2], version: lineMatch[3] });
    }
  }

  return { requires, replaces };
}

function resolveModule(dep: string, goMod: GoModInfo): { path: string; version: string } | null {
  const version = goMod.requires.get(dep);
  if (!version) {
    console.warn(`  Module ${dep} not found in go.mod require block`);
    return null;
  }

  const replacement = goMod.replaces.get(dep);
  if (replacement) {
    console.log(`  Replace: ${dep} => ${replacement.path} ${replacement.version}`);
    return replacement;
  }

  return { path: dep, version };
}

// ─── Read dependencies from .env ─────────────────────────────────────────────

const envFilePath = join(__dirname, '../../.env');
let deps: string[];

try {
  const envContent = readFileSync(envFilePath, 'utf8');

  const depsMatch = envContent.match(/DEPS="([^"]+)"/);
  if (!depsMatch) {
    throw new Error('DEPS variable not found in .env file');
  }

  deps = depsMatch[1].split('\n').filter(dep => dep.trim());
  console.log(`📋 Loaded ${deps.length} dependencies from .env file`);
} catch (error) {
  console.error('❌ Error: Could not read .env file or parse DEPS variable');
  console.error('Please ensure .env file exists in the project root with DEPS variable');
  process.exit(1);
}

// ─── Build config ────────────────────────────────────────────────────────────

function generateConfig() {
  console.log('🔄 Generating config from go.mod...');

  const goModPath = join(__dirname, '../../xion/go.mod');
  const goMod = parseGoMod(goModPath);

  const repos: any[] = [];
  const targets: string[] = [];

  for (const dep of deps) {
    console.log(`Module: ${dep}`);

    const resolved = resolveModule(dep, goMod);
    if (!resolved) continue;

    const { path: effectivePath, version } = resolved;
    console.log(`  Effective: ${effectivePath} ${version}`);

    // Parse GitHub owner/repo from the effective path
    const ghMatch = effectivePath.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!ghMatch) {
      console.warn(`  Skipping non-GitHub module: ${effectivePath}`);
      continue;
    }

    const [, owner, repo] = ghMatch;

    // Handle pseudo-versions (e.g., v0.53.1-0.20250911214339-3cd81ea27e01)
    let branchOrTag = version;
    if (version.includes('-0.')) {
      const commitMatch = version.match(/-([a-f0-9]{12})$/);
      if (commitMatch) {
        branchOrTag = commitMatch[1];
      } else {
        branchOrTag = 'main';
      }
      console.log(`  Pseudo-version detected, using: ${branchOrTag}`);
    }

    repos.push({ owner, repo, branch: branchOrTag });

    // Map repo name to proto target pattern
    let targetPattern: string;
    switch (repo) {
      case 'cosmos-sdk':
        targetPattern = 'cosmos/**/*.proto';
        break;
      case 'wasmd':
        targetPattern = 'cosmwasm/**/*.proto';
        break;
      case 'ibc-go':
        targetPattern = 'ibc/**/*.proto';
        break;
      case 'abstract-account':
        targetPattern = 'abstractaccount/**/*.proto';
        break;
      case 'tokenfactory':
        targetPattern = 'osmosis/tokenfactory/**/*.proto';
        break;
      case 'ibc-apps':
        targetPattern = 'packetforward/**/*.proto';
        break;
      default:
        targetPattern = `${repo}/**/*.proto`;
    }

    if (!targets.includes(targetPattern)) {
      targets.push(targetPattern);
    }

    console.log(`  Added ${owner}/${repo}@${branchOrTag} -> ${targetPattern}`);
  }

  // Only include the google protos actually imported by cosmos/xion protos.
  // The full google/api/** and google/rpc/** globs pull in ~80 unnecessary
  // googleapis protos (Cloud Quotas, Service Control, API Keys, etc.).
  targets.push('google/api/annotations.proto');
  targets.push('google/api/http.proto');

  console.log('📋 Final configuration:');
  console.log('  Repos:', repos.length);
  repos.forEach((r: any) => console.log(`    - ${r.owner}/${r.repo}@${r.branch}`));
  console.log('  Targets:', targets.length);
  targets.forEach((t: string) => console.log(`    - ${t}`));

  return {
    repos,
    protoDirMapping: {
      "gogo/protobuf/master": ".",
      "googleapis/googleapis/master": ".",
      "protocolbuffers/protobuf/main": "src"
    },
    outDir: "protos",
    ssh: false,
    tempRepoDir: "git-modules",
    targets
  };
}

const config = generateConfig();

// Suppress Git detached HEAD warnings
process.env.GIT_CONFIG_COUNT = '1';
process.env.GIT_CONFIG_KEY_0 = 'advice.detachedHead';
process.env.GIT_CONFIG_VALUE_0 = 'false';

downloadProtos(config)
  .then(() => {
    console.log('✅ Proto download completed');

    const protoDir = join(__dirname, '../protos');
    fixProtoSyntaxErrors(protoDir);

    console.log('🎉 Proto download and syntax fixing complete!');
  })
  // @ts-ignore
  .catch((error: any) => {
    console.error('❌ Proto download failed:', error);
    process.exit(1);
  });
