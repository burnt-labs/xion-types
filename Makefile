DOCKER := $(shell which docker)
XION_VERSION ?= $(shell scripts/get-xion-latest.sh)

################################################################################
###                                 Protobuf                                 ###
################################################################################
protoVer=0.17.1
protoImageName=localhost/proto-builder:$(protoVer)
protoImage=$(DOCKER) run --rm -u root -v $(CURDIR):/workspace --workdir /workspace -e GOTOOLCHAIN=auto localhost/proto-builder:$(protoVer)
HTTPS_GIT := https://github.com/burnt-labs/xion.git

contract-code-gen:
	@$(protoImage) ./scripts/ts/ts-codegen.sh

submodules:
	@echo "Initializing and updating git submodules"
	git submodule init contracts
	git submodule update --init contracts
	git submodule init xion
	git submodule update --init xion

build-proto-builder-image:
	cd docker && $(DOCKER) build . --build-arg PROTO_VERSION=${protoVer} --tag localhost/proto-builder:${protoVer}

proto-gen-all: build-proto-builder-image submodules
	@echo "Generating Protobuf files for all languages"
	@$(protoImage) ./scripts/proto-gen-ext.sh --all

proto-gen-c: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --c

proto-gen-cpp: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --cpp

proto-gen-docs: build-proto-builder-image submodules
	@echo "Generating Protobuf Docs"
	@$(protoImage) ./scripts/proto-gen-ext.sh --docs

proto-gen-java: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --java

proto-gen-kotlin: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --kotlin

proto-gen-objc: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --objc

proto-gen-php: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --php

proto-gen-python: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --python

proto-gen-ruby: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --ruby

proto-gen-rust: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --rust

proto-gen-scala: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --scala

proto-gen-swift: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --swift

proto-gen-ts: build-proto-builder-image submodules
	@echo "Generating Protobuf files"
	@$(protoImage) ./scripts/proto-gen-ext.sh --ts

proto-gen-csharp: build-proto-builder-image submodules
	@echo "Generating Protobuf files for C#"
	@$(protoImage) ./scripts/proto-gen-ext.sh --csharp

LANGUAGES := c cpp csharp docs java kotlin objc php python ruby rust scala swift ts

.PHONY: all submodules build-proto-builder-image contract-code-gen \
	$(addprefix proto-gen-,all $(LANGUAGES))
