#!/bin/bash
# Simple test script to validate Kotlin examples

set -e

echo "Testing Kotlin examples..."
echo "=========================="
echo ""

# Check if kotlin types exist
if [ ! -d "../../kotlin/types" ]; then
    echo "❌ Error: kotlin/types directory not found"
    echo "   Run 'make proto-gen-kotlin' first"
    exit 1
fi

# Count example files
EXAMPLE_COUNT=$(ls -1 *.kt 2>/dev/null | grep -v validate.kt | wc -l | tr -d ' ')
echo "Found $EXAMPLE_COUNT example files"
echo ""

# Check each file for basic issues
ERRORS=0
for file in *.kt; do
    if [ "$file" = "validate.kt" ]; then
        continue
    fi
    
    echo "Checking $file..."
    
    # Check for package declaration
    if ! grep -q "package examples.kotlin" "$file"; then
        echo "  ⚠️  Warning: Missing package declaration"
    fi
    
    # Check for main function
    if ! grep -q "fun main()" "$file"; then
        echo "  ⚠️  Warning: Missing main() function"
    fi
    
    # Check for common patterns
    if grep -q "toByteArray()" "$file" && grep -q "parseFrom(" "$file"; then
        echo "  ✅ Contains encoding/decoding examples"
    fi
    
    # Check imports
    IMPORT_COUNT=$(grep -c "^import " "$file" || echo "0")
    echo "  📦 $IMPORT_COUNT imports"
    
    # Check for syntax errors (basic checks)
    if grep -q "fun.*{" "$file" && grep -q "}" "$file"; then
        echo "  ✅ Basic syntax OK"
    fi
    
    echo ""
done

echo "=========================="
echo "✅ Basic validation complete"
echo ""
echo "Note: Full compilation requires Kotlin compiler and protobuf dependencies"
echo "      Install Kotlin: https://kotlinlang.org/docs/getting-started.html"
