#!/usr/bin/env bash

set -eo pipefail

if [ -n "$DEBUG" ]; then
  set -x
fi

# Get the directory of this script, used to source other scripts
: ${scripts_dir:="$(realpath $(dirname $0))"}
: ${base_dir:="$(dirname $scripts_dir)"}
: ${xion_dir:="$base_dir/xion"}
: ${proto_dir:="$xion_dir/proto"}
: ${docs_dir:="$base_dir/docs"}
: ${buf_dir:="$base_dir/buf"}


# Define dependencies
deps=$(cat <<EOF
  github.com/cosmos/cosmos-sdk
  github.com/cosmos/cosmos-proto
  github.com/cosmos/ibc-go/v8
  github.com/CosmWasm/wasmd
EOF
)
#   github.com/cosmos/ibc-apps/middleware/packet-forward-middleware/v8
# for some reason generation for pfm doesn't work

# Install selected dependencies from go.mod
echo "installing dependencies"
cd xion
echo go mod download $deps
go mod download $deps

# Get dependency paths
echo "getting paths for $deps"
proto_mods=$(go list -f '{{ .Dir }}' -m $deps)
echo "mods: $proto_mods"
proto_paths=$(go list -f '{{ .Dir }}' -m $deps | sed "s/$/\/proto/")
echo $proto_paths
echo "end paths"
cd ..

use_tmp_dir() {
  local path="$1"
  if [ -n "$path" ]; then
    mkdir -p $path
    tmp_dir=$(mktemp -d -p $path -t tmp-XXXXXX)
  else
    tmp_dir=$(mktemp -d -t tmp-XXXXXX)
  fi
  trap 'rm -rf -- "$tmp_dir"' EXIT
  cd $tmp_dir
}

get_proto_dirs() {
  # Find all subdirectories with .proto files
  find $@ -path -prune -o -name '*.proto' -print0 \
    | xargs -0 -n1 dirname | sort -u 
}

gen_swagger() {
  local dirs=$(get_proto_dirs $proto_dir $proto_paths)

  use_tmp_dir $docs_dir
  # Generate swagger for each path
  for dir in $dirs; do
    # generate swagger files (filter query files)
    query_file=$(find "${dir}" -maxdepth 1 \( -name 'query.proto' -o -name 'service.proto' \))
    [[ -n "$query_file" ]] || continue

    buf generate --template $proto_dir/buf.gen.swagger.yaml $query_file
  done


  # combine swagger files
  # uses nodejs package `swagger-combine`.
  # all the individual swagger files need to be configured in `config.json` for merging
  npx swagger-combine ${docs_dir}/config.yaml \
    --format "json" \
    --output ${docs_dir}/static/swagger.json \
    --includeDefinitions true \
    --continueOnConflictingPaths true

  # Generate OpenAPI spec using Swagger2Openapi
  # Install required dependencies if not already installed
  npm install --prefix ./ swagger2openapi
  npm exec -- swagger2openapi ../static/swagger.json --outfile ../static/openapi.json
}

gen_ts() {
  local dirs=$(get_proto_dirs $proto_dir $proto_paths)
  ts_dir=$base_dir/ts
  types_dir=$ts_dir/types
  mkdir -p $types_dir

  cd $ts_dir
  npm install
  # Generate ts for each path
  for dir in $dirs; do
    for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
      echo "generating for file $file"
      buf generate --template $buf_dir/buf.gen.ts.yaml $file
    done
  done
}

gen_swift() {
  local dirs=$(get_proto_dirs $proto_dir $proto_paths)
  swift_dir=$base_dir/swift
  types_dir=$swift_dir/types
  mkdir -p $types_dir

  cd $swift_dir
  # Generate swift for each path
  for dir in $dirs; do
    for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
      echo "generating for file $file"
      buf generate --template $buf_dir/buf.gen.swift.yaml $file
    done
  done
}

gen_kotlin() {
  local dirs=$(get_proto_dirs $proto_dir $proto_paths)
  kotlin_dir=$base_dir/kotlin
  types_dir=$kotlin_dir/types
  mkdir -p $types_dir

  cd $kotlin_dir
  # Generate kotlin for each path
    for dir in $dirs; do
      for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
        echo "generating for file $file"
        buf generate --template $buf_dir/buf.gen.kotlin.yaml $file
      done
    done
}

# Parse CLI parameters
if [[ $# -eq 0 ]]; then
  gen_swagger
else
  while [[ $# -gt 0 ]]; do
    case $1 in
    --swagger)
      gen_swagger
      shift
      ;;
    --ts|--js)
      gen_ts
      shift
      ;;
    --swift)
      gen_swift
      shift
      ;;
    --kotlin)
      gen_kotlin
      shift
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
    esac
  done
fi

# clean up tmp dir
#rm -rf $tmp_dir
