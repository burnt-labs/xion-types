DOCKER := $(shell which docker)

################################################################################
###                                 Protobuf                                 ###
################################################################################
protoVer=0.50.0
#protoImageName=ghcr.io/cosmos/proto-builder:$(protoVer)
protoImageName=swiftbuilder
protoImage=$(DOCKER) run --rm -v $(CURDIR):/workspace --workdir /workspace $(protoImageName)
HTTPS_GIT := https://github.com/burnt-labs/xion.git

proto-all: proto-format proto-lint proto-gen proto-format

submodules:
	@echo "Initializing and updating git submodules"
	git submodule init
	git submodule update --init

build-swiftbuilder-image:
	cd docker && $(DOCKER) build . --tag $(protoImageName)

proto-gen: submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen.sh

proto-gen-ts: submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen.sh --ts

proto-gen-swift: build-swiftbuilder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen.sh --swift

proto-gen-kotlin: submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen.sh --kotlin

proto-gen-swagger: submodules
	@echo "Generating Protobuf Swagger"
	@$(protoImage) scripts/proto-gen.sh --swagger

proto-format:
	@echo "Formatting Protobuf files"
	@$(protoImage) find ./ -name "*.proto" -exec clang-format -i {} \;

proto-lint:
	@$(protoImage) buf lint --error-format=json

proto-check-breaking:
	@$(protoImage) buf breaking --against $(HTTPS_GIT)#branch=main

.PHONY: all install install-debug \
	go-mod-cache draw-deps clean build format \
	test test-all test-build test-cover test-unit test-race \
	test-sim-import-export build-windows-client submodules \

