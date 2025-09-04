
ARG PROTO_VERSION=0.17.1

FROM swift:5.10-jammy AS swift-builder

# Clone and build swift-protobuf
WORKDIR /build
RUN git clone --depth 1 --branch 1.28.2 https://github.com/apple/swift-protobuf --recursive .
COPY extramoduleimports.patch /build/extramoduleimports.patch
RUN git apply /build/extramoduleimports.patch

# Build swift-protobuf with maximum static linking
ENV SWIFTPM_USE_IMPLICT_DEPENDENCIES=true
RUN swift build -c release \
    --static-swift-stdlib \
    -Xlinker -static \
    -Xlinker -static-libgcc \
    || swift build -c release --static-swift-stdlib

FROM ghcr.io/cosmos/proto-builder:${PROTO_VERSION} AS final

# Install comprehensive glibc compatibility and required libraries
USER root
RUN apk add --no-cache \
    gcompat \
    libc6-compat \
    libstdc++ \
    libgcc \
    musl-fts \
    musl-fts-dev

# Create symlinks for fts functions to be available
RUN ln -sf /usr/lib/libfts.so.0.0.0 /usr/lib/libfts.so.1

COPY --from=swift-builder /build/.build/release/protoc-gen-swift /usr/local/bin/protoc-gen-swift-binary

# Create a wrapper script that sets up the environment for protoc-gen-swift
RUN echo '#!/bin/sh' > /usr/local/bin/protoc-gen-swift && \
    echo 'LD_PRELOAD=/usr/lib/libfts.so.0.0.0 exec /usr/local/bin/protoc-gen-swift-binary "$@"' >> /usr/local/bin/protoc-gen-swift && \
    chmod +x /usr/local/bin/protoc-gen-swift
