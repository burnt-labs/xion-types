// swift-tools-version: 5.7
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "XionTypesExamples",
    platforms: [
        .macOS(.v12),
        .iOS(.v15)
    ],
    dependencies: [
        .package(url: "https://github.com/apple/swift-protobuf.git", from: "1.25.0"),
    ],
    targets: [
        // Main examples executable
        .executableTarget(
            name: "XionTypesExamples",
            dependencies: [
                "XionTypes",
                .product(name: "SwiftProtobuf", package: "swift-protobuf"),
            ],
            path: "Sources/Examples"
        ),
        // Local XionTypes library (links to ../../swift/types)
        .target(
            name: "XionTypes",
            dependencies: [
                .product(name: "SwiftProtobuf", package: "swift-protobuf"),
            ],
            path: "../../swift/types"
        ),
    ]
)

