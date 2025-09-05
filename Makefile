DOCKER := $(shell which docker)
XION_VERSION ?= $(shell scripts/get-xion-latest.sh)

################################################################################
###                                 Protobuf                                 ###
################################################################################
protoVer=0.17.1
protoImageName=ghcr.io/cosmos/proto-builder:$(protoVer)
protoImage=$(DOCKER) run --rm -v $(CURDIR):/workspace --workdir /workspace -e GOTOOLCHAIN=auto $(protoImageName)
HTTPS_GIT := https://github.com/burnt-labs/xion.git

proto-all: proto-gen prot-gen-ts proto-gen-swift proto-gen-kotlin

submodules:
	@echo "Initializing and updating git submodules"
	git submodule init contracts
	git submodule update --init contracts
	git submodule init xion
	git submodule update --init xion
# ./scripts/checkout-xion-tag.sh $(XION_VERSION)

build-swiftbuilder-image:
	cd docker && $(DOCKER) build . --build-arg PROTO_VERSION=${protoVer} --tag swiftbuilder:${protoVer}

proto-gen:
	cd xion && make proto-gen

proto-gen-ts: submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --ts

proto-gen-swift: build-swiftbuilder-image submodules
	@echo "Generating Protobuf files"
	@$(DOCKER) run --rm -v $(CURDIR):/workspace --workdir /workspace -e GOTOOLCHAIN=auto swiftbuilder:$(protoVer) ./scripts/proto-gen-ext.sh --swift

proto-gen-kotlin: submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --kotlin

contract-code-gen:
	@$(protoImage) ./scripts/ts-codegen.sh

.PHONY: all install install-debug \
	go-mod-cache draw-deps clean build format \
	test test-all test-build test-cover test-unit test-race \
	test-sim-import-export build-windows-client submodules \

