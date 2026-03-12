#!/usr/bin/env bash
# Stamp version, build, and publish Swift package to CocoaPods.
#
# Usage: swift.sh <version> [--build]
#
# Arguments:
#   version   Semver string (with or without v prefix)
#
# Options:
#   --build   Build the Swift package after stamping version
#
# Environment (optional):
#   COCOAPODS_TRUNK_TOKEN  CocoaPods trunk token (required for publish)
#   DRY_RUN                set to "true" to skip actual publish
set -euo pipefail

show_help() {
  sed -n '2,/^set /{ /^#/s/^# \?//p }' "$0"
}

if [[ "${1:-}" == "-h" ]] || [[ "${1:-}" == "--help" ]]; then
  show_help
  exit 0
fi

VERSION="${1:-${VERSION:-}}"
VERSION="${VERSION#v}"
BUILD=false
shift || true
while [[ $# -gt 0 ]]; do
  case "$1" in
    --build) BUILD=true; shift ;;
    *) echo "Unknown option: $1" >&2; exit 1 ;;
  esac
done

if [[ -z "$VERSION" ]]; then
  echo "Error: version is required" >&2
  show_help >&2
  exit 1
fi

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT/swift"

# Stamp version (macOS sed vs GNU sed)
sed -i '' "s/version = .*/version = \"$VERSION\"/" Package.swift 2>/dev/null || \
sed -i "s/version = .*/version = \"$VERSION\"/" Package.swift
sed -i '' "s/static let version = .*/static let version = \"$VERSION\"/" Sources/XionTypes/Version.swift 2>/dev/null || \
sed -i "s/static let version = .*/static let version = \"$VERSION\"/" Sources/XionTypes/Version.swift

echo "Stamped version: $VERSION"

# ─── Build ──────────────────────────────────────────────────────────

build_target_group() {
  local targets="$1"
  for target in $targets; do
    if [ -n "$target" ]; then
      echo "  Building: $target"
      swift build -c release --target "$target" --build-path .build -Xswiftc -j1 || {
        echo "Failed to build $target"
        exit 1
      }
    fi
  done
}

swift_build() {
  # Known Swift Package Manager bug: "multiple producers" error
  # Workaround: Build each target individually and sequentially
  # This avoids the race condition in SPM's parallel compilation

  echo "Building targets sequentially to avoid race conditions..."

  # Get list of all targets from Package.swift
  ALL_TARGETS=$(grep -E 'name: "XionTypes' Package.swift | sed 's/.*name: "\([^"]*\)".*/\1/' | grep -v "^XionTypes$" | grep -v "XionTypesTests")

  # Build in dependency order: base targets first, then dependent targets
  # Order: google/gogoproto -> cosmos_proto -> cosmos (includes tendermint) -> everything else
  BASE_TARGETS=$(echo "$ALL_TARGETS" | grep -E "XionTypes(Google|Gogoproto)" || true)
  MID_TARGETS=$(echo "$ALL_TARGETS" | grep -E "XionTypesCosmosproto" || true)
  COSMOS_TARGETS=$(echo "$ALL_TARGETS" | grep -E "XionTypesCosmos" || true)
  OTHER_TARGETS=$(echo "$ALL_TARGETS" | grep -v -E "XionTypes(Google|Gogoproto|Cosmosproto|Cosmos)" || true)

  echo "Build order: base -> mid -> cosmos -> other"

  echo "1/4: Building base targets (google, gogoproto)..."
  build_target_group "$BASE_TARGETS"

  echo "2/4: Building mid targets (cosmos_proto)..."
  build_target_group "$MID_TARGETS"

  echo "3/4: Building cosmos targets (includes tendermint)..."
  build_target_group "$COSMOS_TARGETS"

  echo "4/4: Building remaining targets (depend on cosmos)..."
  build_target_group "$OTHER_TARGETS"

  # Finally build the main XionTypes target
  echo "Building main XionTypes target..."
  swift build -c release --target XionTypes --build-path .build -Xswiftc -j1 || {
    echo "Failed to build main target"
    exit 1
  }

  echo "All targets built successfully"

  # Try debug build
  echo "Attempting debug build..."
  swift build -c debug --build-path .build 2>&1 | tee /tmp/debug-build.log || {
    if grep -q "multiple producers" /tmp/debug-build.log; then
      echo "Debug build failed due to 'multiple producers' error (known SPM bug)"
      echo "Release build succeeded, so the code is valid"
    else
      echo "Debug build failed for a different reason:"
      tail -30 /tmp/debug-build.log
      # Don't fail if release build succeeded
    fi
  }

  echo "Swift package built successfully"
}

if [[ "$BUILD" == "true" ]]; then
  swift_build
fi

# ─── Generate podspec & publish ─────────────────────────────────────

# Generate podspec
cat > XionTypes.podspec << 'PODSPEC'
Pod::Spec.new do |spec|
  spec.name         = "XionTypes"
  spec.version      = "__VERSION__"
  spec.summary      = "Generated Swift types for Xion blockchain protocol buffers"
  spec.description  = <<-DESC
    Complete Swift type definitions generated from Xion blockchain protocol buffers.
    Includes support for Cosmos SDK, Tendermint, and Xion-specific modules.
  DESC
  spec.homepage     = "https://github.com/burnt-labs/xion-types"
  spec.license      = { :type => "Apache-2.0" }
  spec.author       = { "Burnt Labs" => "devops@burnt.com" }
  spec.source       = { :git => "https://github.com/burnt-labs/xion-types.git", :tag => "#{spec.version}" }
  spec.source_files = "Sources/XionTypes/**/*.swift"
  spec.ios.deployment_target = "13.0"
  spec.osx.deployment_target = "10.15"
  spec.watchos.deployment_target = "6.0"
  spec.tvos.deployment_target = "13.0"
  spec.dependency "SwiftProtobuf", "~> 1.25"
  spec.swift_version = "5.9"
end
PODSPEC

sed -i '' "s/__VERSION__/$VERSION/" XionTypes.podspec 2>/dev/null || \
sed -i "s/__VERSION__/$VERSION/" XionTypes.podspec

echo "Generated XionTypes.podspec"

# Skip dev/prerelease versions
if [[ "$VERSION" == 0.0.0.dev* ]] || [[ "$VERSION" == *-* ]]; then
  echo "Skipping CocoaPods publish for non-stable version: $VERSION"
  exit 0
fi

if [[ "${DRY_RUN:-}" == "true" ]]; then
  echo "DRY_RUN: would run pod trunk push XionTypes.podspec"
  exit 0
fi

if [[ -z "${COCOAPODS_TRUNK_TOKEN:-}" ]]; then
  echo "COCOAPODS_TRUNK_TOKEN not set, skipping publish"
  exit 0
fi

pod trunk push XionTypes.podspec
echo "Published XionTypes $VERSION to CocoaPods"
