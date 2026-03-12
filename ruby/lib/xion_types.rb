require_relative "xion_types/version"

Dir[File.join(__dir__, "xion_types", "**", "*.rb")].each do |file|
  require file
end

module XionTypes
end
