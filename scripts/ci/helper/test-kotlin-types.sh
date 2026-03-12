#!/usr/bin/env bash
# Download Kotlin compiler and verify xion-types-kotlin JAR loads correctly.
#
# Usage: test-kotlin-types.sh <jar_search_dir>
#
# Arguments:
#   jar_search_dir   Directory containing the built xion-types-kotlin JAR
#
# Downloads kotlinc and protobuf JARs, compiles a smoke test, and runs it.
set -euo pipefail

show_help() {
  sed -n '2,/^set /{ /^#/s/^# \?//p }' "$0"
}

if [[ "${1:-}" == "-h" ]] || [[ "${1:-}" == "--help" ]]; then
  show_help
  exit 0
fi

JAR_DIR="${1:-}"

if [[ -z "$JAR_DIR" ]]; then
  echo "Error: jar_search_dir is required" >&2
  show_help >&2
  exit 1
fi

# Get Kotlin compiler
curl -sL "https://github.com/JetBrains/kotlin/releases/download/v1.9.22/kotlin-compiler-1.9.22.zip" -o kotlin-compiler.zip
unzip -q kotlin-compiler.zip

# Get protobuf JARs
curl -sL "https://repo1.maven.org/maven2/com/google/protobuf/protobuf-java/3.25.1/protobuf-java-3.25.1.jar" -o protobuf-java.jar
curl -sL "https://repo1.maven.org/maven2/com/google/protobuf/protobuf-kotlin/3.25.1/protobuf-kotlin-3.25.1.jar" -o protobuf-kotlin.jar

# Find JAR
JAR_FILE=$(find "$JAR_DIR" -name "xion-types-kotlin-*.jar" | head -1)
if [[ -z "$JAR_FILE" ]]; then
  echo "No xion-types-kotlin JAR found in $JAR_DIR" >&2
  exit 1
fi

# Compile and run test
cat > TestXionTypes.kt << 'EOF'
import cosmos.bank.v1beta1.Tx
import cosmos.base.v1beta1.CoinOuterClass
fun main() {
    println("Kotlin protobuf types loaded successfully")
    println("Tx: ${Tx::class.java.name}")
    println("Coin: ${CoinOuterClass.Coin::class.java.name}")
}
EOF

kotlinc/bin/kotlinc -cp "$JAR_FILE:protobuf-java.jar:protobuf-kotlin.jar" TestXionTypes.kt -include-runtime -d test.jar
java -cp "test.jar:$JAR_FILE:protobuf-java.jar:protobuf-kotlin.jar" TestXionTypesKt
