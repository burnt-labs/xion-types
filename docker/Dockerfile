
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
    musl-fts-dev \
    protobuf-dev \
    curl \
    build-base \
    openjdk17 \
    nodejs \
    npm

# Install Rust toolchain and protoc-gen-prost
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain stable
ENV PATH="/root/.cargo/bin:$PATH"
RUN cargo install protoc-gen-prost

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

COPY --from=swift-builder /build/.build/release/protoc-gen-swift /usr/local/bin/protoc-gen-swift-binary

# Create a wrapper script that sets up the environment for protoc-gen-swift
RUN echo '#!/bin/sh' > /usr/local/bin/protoc-gen-swift && \
    echo 'LD_PRELOAD=/usr/lib/libfts.so.0.0.0 exec /usr/local/bin/protoc-gen-swift-binary "$@"' >> /usr/local/bin/protoc-gen-swift && \
    chmod +x /usr/local/bin/protoc-gen-swift
