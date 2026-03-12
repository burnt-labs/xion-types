FROM bufbuild/buf:1.54.0 AS buf-binary
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

# ─── Final image ─────────────────────────────────────────────────────
# No Go required — protos come from BSR, not go.mod.
FROM alpine:3.21

RUN apk add --no-cache \
    bash \
    build-base \
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
    protobuf-c-dev \
    python3 \
    py3-pip

# Python tools needed by post-processors
RUN pip3 install --break-system-packages grpcio-tools || \
    pip3 install grpcio-tools

RUN npm install -g pnpm ts-proto

# buf CLI (from builder stage)
COPY --from=buf-binary /usr/local/bin/buf /usr/local/bin/buf

# Install Rust toolchain and prost plugin
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain stable
ENV PATH="/root/.cargo/bin:$PATH"
RUN cargo install protoc-gen-prost --version 0.3.1 --locked

# Install protoc-gen-scala
RUN curl -fsSL -o /usr/local/bin/protoc-gen-scala.jar \
    https://repo1.maven.org/maven2/com/thesamet/scalapb/protoc-gen-scala/0.11.20/protoc-gen-scala-0.11.20-unix.sh && \
    chmod +x /usr/local/bin/protoc-gen-scala.jar
RUN echo '#!/bin/sh' > /usr/local/bin/protoc-gen-scala && \
    echo 'exec java -jar /usr/local/bin/protoc-gen-scala.jar "$@"' >> /usr/local/bin/protoc-gen-scala && \
    chmod +x /usr/local/bin/protoc-gen-scala

# Create symlinks for fts functions
RUN ln -sf /usr/lib/libfts.so.0.0.0 /usr/lib/libfts.so.1

# Swift protobuf plugin
COPY --from=swift-builder /build/.build/release/protoc-gen-swift /usr/local/bin/protoc-gen-swift-binary
RUN echo '#!/bin/sh' > /usr/local/bin/protoc-gen-swift && \
    echo 'LD_PRELOAD=/usr/lib/libfts.so.0.0.0 exec /usr/local/bin/protoc-gen-swift-binary "$@"' >> /usr/local/bin/protoc-gen-swift && \
    chmod +x /usr/local/bin/protoc-gen-swift

# protoc-gen-doc (pre-built binary, no Go needed)
RUN curl -fsSL -o /tmp/protoc-gen-doc.tar.gz \
    https://github.com/pseudomuto/protoc-gen-doc/releases/download/v1.5.1/protoc-gen-doc_1.5.1_linux_amd64.tar.gz && \
    tar -xzf /tmp/protoc-gen-doc.tar.gz -C /usr/local/bin protoc-gen-doc && \
    chmod +x /usr/local/bin/protoc-gen-doc && \
    rm /tmp/protoc-gen-doc.tar.gz

# Verify all plugins are available
RUN protoc --version && \
    which protoc-gen-doc && \
    which protoc-gen-prost && \
    which protoc-gen-scala && \
    which protoc-gen-swift && \
    which protoc-gen-ts_proto && \
    buf --version
