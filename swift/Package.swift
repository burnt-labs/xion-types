// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "XionTypes",
    platforms: [
        .iOS(.v13),
        .macOS(.v10_15),
        .watchOS(.v6),
        .tvOS(.v13)
    ],
    products: [
        .library(
            name: "XionTypes",
            targets: ["XionTypes"])
    ],
    dependencies: [
        .package(url: "https://github.com/apple/swift-protobuf.git", from: "1.28.0")
    ],
    targets: [
        .target(
            name: "XionTypesAmino",
            dependencies: [
                .product(name: "SwiftProtobuf", package: "swift-protobuf"),
                "XionTypesCosmos",
                "XionTypesCosmosproto",
                "XionTypesGoogle",
                "XionTypesGogoproto",
            ],
            path: "Sources/XionTypesAmino"),
        .target(
            name: "XionTypesCosmos",
            dependencies: [
                .product(name: "SwiftProtobuf", package: "swift-protobuf"),
                "XionTypesCosmosproto",
                "XionTypesGoogle",
                "XionTypesGogoproto",
            ],
            path: "Sources/XionTypesCosmos"),
        .target(
            name: "XionTypesCosmosproto",
            dependencies: [
                .product(name: "SwiftProtobuf", package: "swift-protobuf"),
                "XionTypesGoogle",
                "XionTypesGogoproto",
            ],
            path: "Sources/XionTypesCosmosproto"),
        .target(
            name: "XionTypesGogoproto",
            dependencies: [
                .product(name: "SwiftProtobuf", package: "swift-protobuf")
            ],
            path: "Sources/XionTypesGogoproto"),
        .target(
            name: "XionTypesGoogle",
            dependencies: [
                .product(name: "SwiftProtobuf", package: "swift-protobuf")
            ],
            path: "Sources/XionTypesGoogle"),
        .target(
            name: "XionTypes",
            dependencies: [
                .product(name: "SwiftProtobuf", package: "swift-protobuf"),
                "XionTypesAmino",
                "XionTypesCosmos",
                "XionTypesCosmosproto",
                "XionTypesGogoproto",
                "XionTypesGoogle",
            ],
            path: "Sources/XionTypes"),
        .testTarget(
            name: "XionTypesTests",
            dependencies: ["XionTypes"],
            path: "Tests/XionTypesTests")
    ]
)