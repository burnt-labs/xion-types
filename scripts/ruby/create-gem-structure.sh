#!/bin/bash
set -eo pipefail

echo "Creating Ruby gem structure..."

mkdir -p ruby/lib/xion_types

# Create version file
cat > ruby/lib/xion_types/version.rb << 'VERSION'
module XionTypes
  VERSION = "0.1.0"
end
VERSION

echo "✅ Created ruby/lib/xion_types/version.rb"

# Create main module file
cat > ruby/lib/xion_types.rb << 'MAIN'
require_relative "xion_types/version"

# Load all generated protobuf types
Dir[File.join(__dir__, "xion_types", "**", "*.rb")].each do |file|
  require file
end

module XionTypes
  # Main module for Xion blockchain protocol buffer types
end
MAIN

echo "✅ Created ruby/lib/xion_types.rb"

# Create gemspec
if [ ! -f "ruby/xion_types.gemspec" ]; then
  cat > ruby/xion_types.gemspec << 'GEMSPEC'
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

  # Specify which files should be added to the gem when it is released
  spec.files = Dir.chdir(__dir__) do
    # Include all files from lib directory (including generated protobuf files)
    lib_files = Dir.glob("lib/**/*").select { |f| File.file?(f) }
    # Include gemspec and other root files if they exist
    root_files = %w[Gemfile README.md LICENSE CHANGELOG.md].select { |f| File.exist?(f) }
    (lib_files + root_files).reject do |f|
      f.include?(".git") || f.include?(".github")
    end
  end

  spec.bindir        = "exe"
  spec.executables  = spec.files.grep(%r{\Aexe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  # Runtime dependencies
  spec.add_runtime_dependency "google-protobuf", "~> 3.25"
end
GEMSPEC
  echo "✅ Created ruby/xion_types.gemspec"
else
  echo "✅ ruby/xion_types.gemspec already exists"
fi

# Create Gemfile if it doesn't exist
if [ ! -f "ruby/Gemfile" ]; then
  cat > ruby/Gemfile << 'GEMFILE'
# frozen_string_literal: true

source "https://rubygems.org"

gemspec
GEMFILE
  echo "✅ Created ruby/Gemfile"
else
  echo "✅ ruby/Gemfile already exists"
fi

# Count generated files
file_count=$(find ruby/lib/xion_types -name "*.rb" -type f | wc -l | tr -d ' ')
echo "✅ Ruby gem structure created with $file_count Ruby files"
