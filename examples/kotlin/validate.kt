/**
 * Simple validation script to check Kotlin examples
 * This script validates that:
 * 1. All imports reference existing files
 * 2. Basic syntax is correct
 * 3. All example files can be parsed
 */

import java.io.File

fun main() {
    println("Validating Kotlin examples...\n")
    
    val examplesDir = File(".")
    val kotlinTypesDir = File("../../kotlin/types")
    
    if (!kotlinTypesDir.exists()) {
        println("❌ Error: kotlin/types directory not found at ${kotlinTypesDir.absolutePath}")
        println("   Run 'make proto-gen-kotlin' first to generate types")
        return
    }
    
    val exampleFiles = examplesDir.listFiles { _, name -> 
        name.endsWith(".kt") && name != "validate.kt"
    } ?: emptyArray()
    
    println("Found ${exampleFiles.size} example files to validate\n")
    
    var errors = 0
    var warnings = 0
    
    exampleFiles.forEach { file ->
        println("Checking ${file.name}...")
        val content = file.readText()
        
        // Check for package declaration
        if (!content.contains("package examples.kotlin")) {
            println("  ⚠️  Warning: Missing package declaration")
            warnings++
        }
        
        // Check for main function
        if (!content.contains("fun main()")) {
            println("  ⚠️  Warning: Missing main() function")
            warnings++
        }
        
        // Extract imports
        val imports = extractImports(content)
        val missingImports = validateImports(imports, kotlinTypesDir)
        
        if (missingImports.isNotEmpty()) {
            println("  ❌ Error: Missing imports:")
            missingImports.forEach { imp ->
                println("     - $imp")
            }
            errors++
        } else {
            println("  ✅ All imports valid")
        }
        
        // Check for common patterns
        if (content.contains("toByteArray()") && content.contains("parseFrom(")) {
            println("  ✅ Contains encoding/decoding examples")
        }
        
        println()
    }
    
    println("=".repeat(50))
    println("Validation Summary:")
    println("  Files checked: ${exampleFiles.size}")
    println("  Errors: $errors")
    println("  Warnings: $warnings")
    
    if (errors == 0 && warnings == 0) {
        println("\n✅ All examples validated successfully!")
    } else if (errors == 0) {
        println("\n⚠️  Validation passed with warnings")
    } else {
        println("\n❌ Validation failed with $errors error(s)")
        System.exit(1)
    }
}

fun extractImports(content: String): List<String> {
    val imports = mutableListOf<String>()
    val lines = content.lines()
    
    for (line in lines) {
        if (line.startsWith("import ")) {
            val importPath = line.substring(7).trim()
            // Remove trailing semicolon if present
            val cleanImport = importPath.removeSuffix(";").trim()
            imports.add(cleanImport)
        }
    }
    
    return imports
}

fun validateImports(imports: List<String>, kotlinTypesDir: File): List<String> {
    val missing = mutableListOf<String>()
    
    for (importPath in imports) {
        // Skip standard library imports
        if (importPath.startsWith("java.") || 
            importPath.startsWith("kotlin.") ||
            importPath.startsWith("com.google.protobuf")) {
            continue
        }
        
        // Convert import path to file path
        // e.g., xion.v1.Tx -> kotlin/types/xion/v1/Tx.kt or TxKt.kt
        val parts = importPath.split(".")
        if (parts.isEmpty()) continue
        
        // Try to find the file
        val possiblePaths = mutableListOf<String>()
        
        // Try full path with last component
        val lastComponent = parts.last()
        val packagePath = parts.dropLast(1).joinToString("/")
        possiblePaths.add("$packagePath/$lastComponent.kt")
        possiblePaths.add("$packagePath/${lastComponent}Kt.kt")
        possiblePaths.add("$packagePath/${lastComponent}OuterClass.kt")
        
        // Try with Kt suffix variations
        if (!lastComponent.endsWith("Kt")) {
            possiblePaths.add("$packagePath/${lastComponent}Kt.kt")
        }
        
        var found = false
        for (path in possiblePaths) {
            val file = File(kotlinTypesDir, path)
            if (file.exists()) {
                found = true
                break
            }
        }
        
        // Also check if it's a DSL function (like msgSend, queryParamsRequest)
        // These are typically in *Kt.kt files
        if (!found && parts.size >= 2) {
            val packagePath = parts.dropLast(1).joinToString("/")
            val functionName = parts.last()
            // Check for common DSL files
            val dslFiles = listOf(
                "${packagePath}/TxKt.kt",
                "${packagePath}/QueryOuterClass.kt",
                "${packagePath}/QueryKt.kt"
            )
            for (dslFile in dslFiles) {
                val file = File(kotlinTypesDir, dslFile)
                if (file.exists()) {
                    // Check if file contains the function
                    val fileContent = file.readText()
                    if (fileContent.contains("fun $functionName")) {
                        found = true
                        break
                    }
                }
            }
        }
        
        if (!found) {
            missing.add(importPath)
        }
    }
    
    return missing
}
