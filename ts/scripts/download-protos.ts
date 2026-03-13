// @ts-ignore
import downloadProtos from '@cosmology/telescope/main/commands/download'
import { join } from 'path';
import { execSync } from 'child_process';
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

// Read dependencies from .env file
const envFilePath = join(__dirname, '../../.env');
let deps: string[];

try {
  const envContent = readFileSync(envFilePath, 'utf8');
  
  // Parse the DEPS variable from .env file
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

// Generate module mapping dynamically from dependencies
function generateModuleMapping(deps: string[]): Record<string, { owner: string; repo: string }> {
  const mapping: Record<string, { owner: string; repo: string }> = {};
  
  for (const dep of deps) {
    // Parse GitHub URLs like github.com/owner/repo or github.com/owner/repo/version
    const match = dep.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (match) {
      const [, owner, repo] = match;
      mapping[dep] = { owner, repo };
    }
  }
  
  return mapping;
}

const moduleMapping = generateModuleMapping(deps);

function generateConfig() {
  console.log('🔄 Generating config with dependency versions...');
  
  const xionDir = join(__dirname, '../../xion');
  const repos: any[] = [];
  const targets: string[] = [];
  
  for (const dep of deps) {
    try {
      // First, let's see if there's a replace directive
      const replaceInfo = execSync(
        `cd "${xionDir}" && go list -f '{{ if .Replace }}{{ .Replace.Path }} {{ .Replace.Version }}{{ else }}NO_REPLACE{{ end }}' -m "${dep}"`,
        { encoding: 'utf8' }
      ).trim();
      
      console.log(`Module: ${dep}`);
      console.log(`  Replace info: ${replaceInfo}`);
      
      // Get module info, handling replace directives properly
      const moduleInfo = execSync(
        `cd "${xionDir}" && go list -f '{{ .Version }}{{ if .Replace }} {{ .Replace.Path }}{{ else }} {{ .Path }}{{ end }}' -m "${dep}"`,
        { encoding: 'utf8' }
      ).trim();
      
      const parts = moduleInfo.split(' ');
      const version = parts[0];
      const effectivePath = parts[1];
      
      console.log(`  Version: ${version}`);
      console.log(`  Effective path: ${effectivePath}`);
      
      // All modules should work now with the updated configuration
      // if (dep.includes('problematic-module')) {
      //   console.log(`  Skipping ${dep} - known to have issues with proto extraction`);
      //   continue;
      // }
      
      // Parse the effective path to get owner/repo
      let owner: string, repo: string;
      
      if (effectivePath.startsWith('github.com/')) {
        const match = effectivePath.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (match) {
          [, owner, repo] = match;
        } else {
          console.warn(`Could not parse GitHub path: ${effectivePath}`);
          continue;
        }
      } else {
        // Fallback to original module mapping if not a GitHub path
        if (moduleMapping[dep]) {
          ({ owner, repo } = moduleMapping[dep]);
        } else {
          console.warn(`No mapping found for non-GitHub module: ${effectivePath}`);
          continue;
        }
      }
      
      // Handle pseudo-versions (e.g., v0.53.1-0.20250911214339-3cd81ea27e01)
      let branchOrTag = version;
      if (version.includes('-0.')) {
        // Extract commit hash from pseudo-version
        const commitMatch = version.match(/-([a-f0-9]{12})$/);
        if (commitMatch) {
          branchOrTag = commitMatch[1]; // Use commit hash
        } else {
          branchOrTag = 'main'; // Fallback to main
        }
        console.log(`  Pseudo-version detected, using: ${branchOrTag}`);
      }
      
      repos.push({
        owner,
        repo,
        branch: branchOrTag
      });
      
      // Generate target patterns based on repo names, excluding problematic patterns
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
          // Be more specific to avoid problematic Google Cloud protos
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
      
      console.log(`Added ${owner}/${repo} with version: ${version} and target: ${targetPattern}`);
    } catch (error) {
      console.warn(`Warning: Could not find module info for ${dep}:`, error);
    }
  }
  
  // Include only the essential Google proto types, avoiding newer problematic ones
  // Don't include google/protobuf/** as it might have newer features telescope can't parse
  targets.push('google/api/**/*.proto');
  targets.push('google/rpc/**/*.proto');
  
  console.log('📋 Final configuration:');
  console.log('  Repos:', repos.length);
  repos.forEach(repo => console.log(`    - ${repo.owner}/${repo.repo}@${repo.branch}`));
  console.log('  Targets:', targets.length);
  targets.forEach(target => console.log(`    - ${target}`));
  
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

// Set environment variable to suppress Git detached HEAD warnings
process.env.GIT_CONFIG_COUNT = '1';
process.env.GIT_CONFIG_KEY_0 = 'advice.detachedHead';
process.env.GIT_CONFIG_VALUE_0 = 'false';

downloadProtos(config)
  .then(() => {
    console.log('✅ Proto download completed');
    
    // Fix proto syntax errors after download
    const protoDir = join(__dirname, '../protos');
    fixProtoSyntaxErrors(protoDir);
    
    console.log('🎉 Proto download and syntax fixing complete!');
  })
  // @ts-ignore
  .catch((error) => {
    console.error('❌ Proto download failed:', error);
    process.exit(1);
  });
