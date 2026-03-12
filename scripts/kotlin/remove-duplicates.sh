#!/bin/bash
set -eo pipefail

# Protobuf generates duplicate Kt files with different casing (e.g., NFTKt.kt and NftKt.kt)
# On case-sensitive filesystems, both exist and cause conflicts
echo "Checking for duplicate Kotlin files..."

# Specifically remove the known duplicate (lowercase variant)
if [ -f "kotlin/types/cosmos/nft/v1beta1/NftKt.kt" ] && [ -f "kotlin/types/cosmos/nft/v1beta1/NFTKt.kt" ]; then
  echo "Removing duplicate: kotlin/types/cosmos/nft/v1beta1/NftKt.kt (keeping NFTKt.kt)"
  rm "kotlin/types/cosmos/nft/v1beta1/NftKt.kt"
fi

# Generic check for any other case-insensitive duplicates
find kotlin/types -type f -name "*Kt.kt" -print0 | while IFS= read -r -d '' file; do
  dir=$(dirname "$file")
  base=$(basename "$file")
  count=$(find "$dir" -maxdepth 1 -iname "$base" | wc -l)
  if [ "$count" -gt 1 ]; then
    echo "Warning: Found case-insensitive duplicates for $file"
  fi
done

echo "✅ Kotlin duplicate removal complete"
