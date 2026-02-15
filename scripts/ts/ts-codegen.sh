#!/usr/bin/env bash

set -eo pipefail

if [ -n "$DEBUG" ]; then
  set -x
fi

. "$HOME/.cargo/env"

: ${scripts_dir:="$(realpath $(dirname $0))"}
: ${base_dir:="$(dirname $(dirname $scripts_dir))"}
: ${contracts_repo_dir:="$base_dir/contracts"}
: ${contracts_dir:="$contracts_repo_dir/contracts"}
: ${codegen_dir:="$base_dir/ts/types/contracts"}

rm -rf $codegen_dir

cd $contracts_dir
for dir in *
do
  echo $(pwd)/$dir
  cargo schema --manifest-path "$dir"/Cargo.toml
  mkdir -p $codegen_dir/$dir/schema
  mv schema $codegen_dir/$dir
done

cd $base_dir
for contract in "account" "treasury"
do
    echo $contract
    echo ts-codegen generate --plugin client --plugin react-query --plugin message-composer --schema $codegen_dir/$contract/schema --out $codegen_dir/$contract/ts --name $contract --no-bundle --version v4 --optionalClient --mutations --queryKeys --queryFactory
    ts-codegen generate --plugin client --plugin react-query --plugin message-composer --schema $codegen_dir/$contract/schema --out $codegen_dir/$contract/ts --name $contract --no-bundle --version v4 --optionalClient --mutations --queryKeys --queryFactory

done
