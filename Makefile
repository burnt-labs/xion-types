DOCKER := $(shell which docker)
XIOproto-gen-kotlin: submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --kotlin

proto-gen-php: submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --php

proto-gen-python: submodulesSION ?= $(shell scripts/get-xion-latest.sh)

################################################################################
###                                 Protobuf                                 ###
################################################################################
protoVer=0.17.1
protoImageName=localhost/proto-builder:$(protoVer)
protoImage=$(DOCKER) run --rm -u root -v $(CURDIR):/workspace --workdir /workspace -e GOTOOLCHAIN=auto localhost/proto-builder:$(protoVer)
HTTPS_GIT := https://github.com/burnt-labs/xion.git

proto-all: proto-gen prot-gen-ts proto-gen-swift proto-gen-kotlin

submodules:
	@echo "Initializing and updating git submodules"
	git submodule init contracts
	git submodule update --init contracts
# 	git submodule init xion
# 	git submodule update --init xion
# ./scripts/checkout-xion-tag.sh $(XION_VERSION)

build-proto-builder-image:
	cd docker && $(DOCKER) build . --build-arg PROTO_VERSION=${protoVer} --tag localhost/proto-builder:${protoVer}

proto-gen:
	cd xion && make proto-gen

proto-gen-java: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --java

proto-gen-kotlin: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --kotlin

proto-gen-ts: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --ts

proto-gen-swift: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --swift

proto-gen-python: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --python

proto-gen-rust: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --rust

proto-gen-ruby: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --ruby

proto-gen-scala: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --scala

contract-code-gen:
	@$(protoImage) ./scripts/ts-codegen.sh

.PHONY: all install install-debug \
	go-mod-cache draw-deps clean build format \
	test test-all test-build test-cover test-unit test-race \
	test-sim-import-export build-windows-client submodules \

