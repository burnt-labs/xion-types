#!/usr/bin/env bash
# Build or publish Kotlin types for xion-types.
#
# Usage: kotlin.sh <command> <version>
#
# Commands:
#   build     Stamp version, build JAR
#   publish   Sign, bundle, and upload to Maven Central
#
# Arguments:
#   version   Semver string (with or without v prefix)
#
# Environment (required for publish):
#   GPG_PRIVATE_KEY           ASCII-armored GPG private key
#   GPG_PASSPHRASE            GPG key passphrase
#   MAVEN_CENTRAL_USERNAME    Sonatype Central username
#   MAVEN_CENTRAL_PASSWORD    Sonatype Central password
set -euo pipefail

show_help() {
  sed -n '2,/^set /{ /^#/s/^# \?//p }' "$0"
}

if [[ "${1:-}" == "-h" ]] || [[ "${1:-}" == "--help" ]]; then
  show_help
  exit 0
fi

COMMAND="${1:-}"
VERSION="${2:-${VERSION:-}}"
VERSION="${VERSION#v}"

if [[ -z "$COMMAND" ]] || [[ -z "$VERSION" ]]; then
  echo "Error: command and version are required" >&2
  show_help >&2
  exit 1
fi

ROOT="$(git rev-parse --show-toplevel)"

case "$COMMAND" in
  build)
    # Stamp version
    sed -i "s/^version = .*/version = \"$VERSION\"/" "$ROOT/kotlin/build.gradle.kts"
    sed -i "s/^version = .*/version = \"$VERSION\"/" "$ROOT/kotlin/java-types/build.gradle.kts" 2>/dev/null || true

    # Build JAR
    cd "$ROOT/kotlin"
    gradle jar --no-daemon
    echo "Kotlin JAR built: $VERSION"
    ;;

  publish)
    cd "$ROOT/kotlin"

    # Import GPG key
    echo "$GPG_PRIVATE_KEY" | gpg --batch --import
    echo "allow-loopback-pinentry" >> ~/.gnupg/gpg-agent.conf
    gpgconf --reload gpg-agent

    # Sign and publish to local Maven repo
    gradle publishToMavenLocal --no-daemon \
      -Psigning.gnupg.passphrase="$GPG_PASSPHRASE" \
      -Psigning.gnupg.executable=gpg

    # Create Maven Central bundle
    ARTIFACT_PATH="io/github/burnt-labs/xion-types-kotlin/$VERSION"
    mkdir -p "bundle/$ARTIFACT_PATH"
    M2_PATH="$HOME/.m2/repository/io/github/burnt-labs/xion-types-kotlin/$VERSION"

    for file in "$M2_PATH"/*.jar "$M2_PATH"/*.pom "$M2_PATH"/*.module "$M2_PATH"/*.asc; do
      [[ -f "$file" ]] && [[ "$file" != *metadata* ]] && cp "$file" "bundle/$ARTIFACT_PATH/"
    done

    # Generate checksums
    pushd "bundle/$ARTIFACT_PATH" > /dev/null
    for file in *.jar *.pom *.module; do
      if [[ -f "$file" ]]; then
        md5sum "$file" | awk '{print $1}' > "$file.md5"
        sha1sum "$file" | awk '{print $1}' > "$file.sha1"
      fi
    done
    popd > /dev/null

    # Upload bundle
    cd bundle && zip -r ../xion-types-kotlin-bundle.zip . && cd ..
    HTTP_CODE=$(curl -s -o /tmp/maven-response.txt -w '%{http_code}' \
      -u "$MAVEN_CENTRAL_USERNAME:$MAVEN_CENTRAL_PASSWORD" \
      -F "bundle=@xion-types-kotlin-bundle.zip" \
      "https://central.sonatype.com/api/v1/publisher/upload?publishingType=USER_MANAGED")

    if [[ "$HTTP_CODE" -ge 200 && "$HTTP_CODE" -lt 300 ]]; then
      echo "Published xion-types-kotlin $VERSION to Maven Central (staged)"
    else
      echo "Upload failed (HTTP $HTTP_CODE)" >&2
      cat /tmp/maven-response.txt >&2
      exit 1
    fi
    ;;

  *)
    echo "Unknown command: $COMMAND (expected build or publish)" >&2
    exit 1
    ;;
esac
