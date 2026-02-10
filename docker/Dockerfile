FROM bufbuild/buf:1.54.0 AS builder
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

FROM golang:1.25-alpine

RUN apk add --no-cache \
    build-base \
    clang-extra-tools \
    curl \
    g++ \
    gcompat \
    git \
    jq \
    libc6-compat \
    libgcc \
    libstdc++ \
    make \
    musl-fts \
    musl-fts-dev \
    nodejs \
    npm \
    openjdk17 \
    gradle \
    protobuf-dev \
    protobuf-c-dev

RUN npm install -g ts-proto
RUN npm install -g swagger-combine

ENV GOLANG_PROTOBUF_VERSION=1.36.6 \
    GRPC_GATEWAY_VERSION=1.16.0 \
    GRPC_GATEWAY_PROTOC_GEN_OPENAPIV2_VERSION=2.26.3

RUN go install github.com/cosmos/cosmos-proto/cmd/protoc-gen-go-pulsar@latest && \
    go install google.golang.org/protobuf/cmd/protoc-gen-go@v${GOLANG_PROTOBUF_VERSION} && \
    go install github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway@v${GRPC_GATEWAY_VERSION} && \
    go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v${GRPC_GATEWAY_PROTOC_GEN_OPENAPIV2_VERSION} && \
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

# install all gogo protobuf binaries
RUN git clone https://github.com/cosmos/gogoproto.git; \
    cd gogoproto; \
    go mod download; \
    make install

COPY --from=builder /usr/local/bin /usr/local/bin

# Install Rust toolchain and prost plugins
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain stable
ENV PATH="/root/.cargo/bin:$PATH"
# Install neoeinstein-prost v0.3.1 to match cosmos-rust (generates flat files)
RUN cargo install protoc-gen-prost --version 0.3.1 --locked

# Install protoc-gen-scala JAR (following Buf plugins pattern)
RUN curl -fsSL -o /usr/local/bin/protoc-gen-scala.jar \
    https://repo1.maven.org/maven2/com/thesamet/scalapb/protoc-gen-scala/0.11.20/protoc-gen-scala-0.11.20-unix.sh && \
    chmod +x /usr/local/bin/protoc-gen-scala.jar

# Create wrapper script for protoc-gen-scala
RUN echo '#!/bin/sh' > /usr/local/bin/protoc-gen-scala && \
    echo 'exec java -jar /usr/local/bin/protoc-gen-scala.jar "$@"' >> /usr/local/bin/protoc-gen-scala && \
    chmod +x /usr/local/bin/protoc-gen-scala

# Create symlinks for fts functions to be available
RUN ln -sf /usr/lib/libfts.so.0.0.0 /usr/lib/libfts.so.1

# Set up environment paths for swift
COPY --from=swift-builder /build/.build/release/protoc-gen-swift /usr/local/bin/protoc-gen-swift-binary

# Create a wrapper script that sets up the environment for protoc-gen-swift
RUN echo '#!/bin/sh' > /usr/local/bin/protoc-gen-swift && \
    echo 'LD_PRELOAD=/usr/lib/libfts.so.0.0.0 exec /usr/local/bin/protoc-gen-swift-binary "$@"' >> /usr/local/bin/protoc-gen-swift && \
    chmod +x /usr/local/bin/protoc-gen-swift

# Verify all plugins are available
RUN protoc --version && \
    which protoc-gen-go && \
    which protoc-gen-go-grpc && \
    which protoc-gen-prost && \
    which protoc-gen-scala && \
    which protoc-gen-swift && \
    which protoc-gen-c && \
    which protoc-gen-ts_proto && \
    buf --version
