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
