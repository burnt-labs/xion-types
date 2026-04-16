DOCKER := $(shell which docker)

################################################################################
###                                 Protobuf                                 ###
################################################################################
protoVer=0.17.1
protoImage=$(DOCKER) run --rm -u root -v $(CURDIR):/workspace --workdir /workspace localhost/proto-builder:$(protoVer)

# Xion BSR module ref — override to pin a specific version:
#   make proto-gen-python XION_BSR_MODULE=buf.build/burnt-labs/xion:v26.0.0
# Also honored: XION_BSR_MODULE env var (used by CI).
XION_BSR_MODULE ?= buf.build/burnt-labs/xion

LANGUAGES := c cpp csharp docs java kotlin objc php python ruby rust scala swift ts

contract-code-gen:
	@$(protoImage) ./scripts/post/ts.sh

build-proto-builder-image:
	cd docker && $(DOCKER) build . --build-arg PROTO_VERSION=${protoVer} --tag localhost/proto-builder:${protoVer}

# Build image only if not already loaded (CI pre-loads it from artifact)
ensure-proto-builder-image:
	@$(DOCKER) image inspect localhost/proto-builder:$(protoVer) >/dev/null 2>&1 || $(MAKE) build-proto-builder-image

# Pattern rule: make proto-gen-<language> for any language
# FORCE prerequisite ensures the recipe always runs (pattern rules can't be .PHONY)
proto-gen-%: ensure-proto-builder-image FORCE
	@echo "Generating Protobuf files for $*"
	@$(protoImage) env XION_BSR_MODULE=$(XION_BSR_MODULE) ./scripts/proto-gen-ext.sh $*

FORCE:

.PHONY: build-proto-builder-image contract-code-gen FORCE
