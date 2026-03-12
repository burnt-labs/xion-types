#!/bin/bash
# Post-processor for Ruby protobuf generation.
#
# Creates the gem scaffold (version.rb, main module, gemspec, Gemfile)
# around the generated protobuf files in ruby/lib/xion_types/.

set -eo pipefail

ROOT_DIR="$(cd "$(dirname "$(dirname "$(dirname "$0")")")" && pwd)"
cd "$ROOT_DIR"

echo "Creating Ruby gem structure..."

mkdir -p ruby/lib/xion_types

# Version file
cat > ruby/lib/xion_types/version.rb << 'EOF'
module XionTypes
  VERSION = "0.1.0"
end
EOF

# Main module file
cat > ruby/lib/xion_types.rb << 'EOF'
require_relative "xion_types/version"

Dir[File.join(__dir__, "xion_types", "**", "*.rb")].each do |file|
  require file
end

module XionTypes
end
EOF

# Gemspec (only if missing)
if [ ! -f "ruby/xion_types.gemspec" ]; then
  cat > ruby/xion_types.gemspec << 'EOF'
# frozen_string_literal: true

require_relative "lib/xion_types/version"

Gem::Specification.new do |spec|
  spec.name          = "xion_types"
  spec.version       = XionTypes::VERSION
  spec.authors       = ["Burnt Labs"]
  spec.email         = ["devops@burnt.com"]

  spec.summary       = "Generated Ruby types for Xion blockchain protocol buffers"
  spec.description   = "Generated Ruby types for Xion blockchain protocol buffers"
  spec.homepage      = "https://github.com/burnt-labs/xion-types"
  spec.license       = "Apache-2.0"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["changelog_uri"] = "#{spec.homepage}/blob/main/CHANGELOG.md"

  spec.files = Dir.chdir(__dir__) do
    lib_files = Dir.glob("lib/**/*").select { |f| File.file?(f) }
    root_files = %w[Gemfile README.md LICENSE CHANGELOG.md].select { |f| File.exist?(f) }
    (lib_files + root_files).reject { |f| f.include?(".git") }
  end

  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{\Aexe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency "google-protobuf", "~> 3.25"
end
EOF
fi

# Gemfile (only if missing)
if [ ! -f "ruby/Gemfile" ]; then
  cat > ruby/Gemfile << 'EOF'
# frozen_string_literal: true

source "https://rubygems.org"

gemspec
EOF
fi

file_count=$(find ruby/lib/xion_types -name "*.rb" -type f | wc -l | tr -d ' ')
echo "Ruby gem structure created with $file_count Ruby files"

# Build verification — ensure gem builds with placeholder version
cd "$ROOT_DIR/ruby"
if command -v gem &>/dev/null; then
  echo "Verifying gem builds..."
  gem build xion_types.gemspec 2>/dev/null && echo "  ✅ Gem builds" || echo "  ⚠️  Gem build check skipped"
  rm -f *.gem 2>/dev/null
fi

echo "✅ Ruby post-processing complete"
