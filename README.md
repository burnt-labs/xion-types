# @burnt-labs/xion-types

## What is xion-types?

The `xion-types` repository is a **type definition package** that acts as a bridge between different programming languages and the Xion blockchain. Think of it as a "translator" that helps developers work with Xion blockchain data in their preferred programming language.

## The Core Problem It Solves

Blockchains like Xion use a data format called **Protocol Buffers (Protobuf)** to define their data structures. However, most developers don't write code directly in Protobuf - they use languages like TypeScript, Swift, or Kotlin.

Without `xion-types`, developers would have to:
- Manually write type definitions for every blockchain data structure
- Risk making errors when handling blockchain data
- Spend time figuring out what fields exist and what types they should be

## What It Provides

The repository generates **type-safe definitions** for multiple programming languages:
- **TypeScript/JavaScript** - For web apps and Node.js projects
- **Swift** - For iOS/macOS apps
- **Kotlin** - For Android apps
- **Python** - For Python projects
- **Go** - For Go projects
- **Rust** - For Rust projects
- **Java** - For Java applications
- **And more** - Including C, C++, C#, Objective-C, PHP, Ruby, and Scala

These type definitions ensure that when developers work with Xion blockchain data (like transactions, account information, or smart contract calls), they get:
- **Autocomplete** in their code editor
- **Error checking** if they try to use wrong data types
- **Documentation** of what fields are available

## Benefits

1. **Reduced Development Time** - No need to manually write type definitions
2. **Fewer Bugs** - Type safety catches errors at compile time
3. **Better Developer Experience** - Autocomplete and IntelliSense support
4. **Consistency** - Same types across different languages and projects
5. **Maintainability** - Types automatically update when the blockchain protocol changes

## Table of Contents

- [@burnt-labs/xion-types](#burnt-labsxion-types)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Example](#example)
  - [Development](#development)
  - [License](#license)

---

## Installation

Install the **@burnt-labs/xion-types** package via npm or yarn:

```bash
# Using npm
npm install @burnt-labs/xion-types

# Using yarn
yarn add @burnt-labs/xion-types
```

---

## Usage

Once installed, you can import the type definitions in your TypeScript project. The types are generated from the Protobuf files used in the Xion project.

```typescript
import { MyProtobufType } from '@burnt-labs/xion-types/types/filename';

const myData: MyProtobufType = {
  field1: 'value',
  field2: 42
};
```

> **Note:** Replace `filename` with the appropriate file name where the type is defined.

---

## Example

Here is a full example of how you might use the **@burnt-labs/xion-types** package in a TypeScript project:

```typescript
import { MyProtobufType } from '@burnt-labs/xion-types/types/filename';

function processData(data: MyProtobufType): void {
  console.log(`Field 1: ${data.field1}`);
  console.log(`Field 2: ${data.field2}`);
}

const sampleData: MyProtobufType = {
  field1: 'Hello, Xion!',
  field2: 100
};

processData(sampleData);
```

> This simple example illustrates how you can work with the types generated from Xion's Protobuf definitions.

---

## Development

If you want to modify or regenerate type definitions from Protobuf files, follow these steps:

1. **Initialize and Update Submodules**
   ```bash
   # Initialize and update all submodules (contracts and xion)
   make submodules

   # Alternatively, you can run these commands manually:
   git submodule init contracts
   git submodule update --init contracts
   git submodule init xion
   git submodule update --init xion
   ```

2. **Build Docker Image**
   ```bash
   # Build the protobuf builder image (required for code generation)
   make build-proto-builder-image

   # You can verify the image was built successfully with:
   docker images | grep proto-builder
   ```

3. **Generate Type Definitions**

   Generate types for all supported languages:
   ```bash
   make proto-gen-all
   ```

   Or generate types for a specific language:
   ```bash
   # TypeScript/JavaScript
   make proto-gen-ts

   # Python
   make proto-gen-python

   # Swift
   make proto-gen-swift

   # Kotlin
   make proto-gen-kotlin

   # Go (uses xion's built-in proto generation)
   make proto-gen

   # Other languages: proto-gen-c, proto-gen-cpp, proto-gen-java,
   # proto-gen-objc, proto-gen-php, proto-gen-ruby, proto-gen-rust, proto-gen-scala
   ```

4. **Generate Contract Code (TypeScript)**
   ```bash
   make contract-code-gen
   ```

> These steps will generate type definitions from the Protobuf files located in the `xion` submodule.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

For more information, check out [Xion's GitHub repository](https://github.com/burnt-labs/xion).

