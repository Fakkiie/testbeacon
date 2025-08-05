# TestBeacon

A **TypeScript-built** Hardhat plugin that generates a **single** `{ContractName}-test.ts` file containing a basic `mint()` test stub for your contract. Perfect for TypeScript-based Hardhat projects looking to get a test up and running in seconds.

## Features

* **One-file output**: Creates exactly one test file named `{ContractName}-test.ts` under `test/`
* **Mint detection**: Scans the compiled ABI for `mint(address,uint256)` and generates a `minter can mint` test
* **Zero configuration**: No extra flags or config files—just install, import, and run

## Prerequisites (TypeScript Hardhat Project)

Your consuming project should be set up for TypeScript-based Hardhat development. Ensure you have:

```bash
npm install --save-dev hardhat ts-node typescript @nomiclabs/hardhat-ethers ethers chai @types/node @types/mocha @types/chai
```

And your `tsconfig.json` includes:

```jsonc
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2020",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "types": ["node", "mocha"]
  }
}
```

## Installation (Plugin Development)

1. **Clone this repo**

   ```bash
   git clone https://github.com/Fakkiie/testbeacon.git
   cd testbeacon
   ```
2. **Install and build**

   ```bash
   npm install
   npm run build     # compiles TypeScript → dist/
   ```
3. **(Optional) Link locally**

   ```bash
   npm link          # makes `hardhat-testbeacon` available globally
   ```

## Installation (Consumption)

From any TypeScript Hardhat project:

```bash
# If you published to npm:
npm install --save-dev hardhat-testbeacon

# Or link your local copy:
npm link hardhat-testbeacon
```

## Usage

1. **Import the plugin** in your `hardhat.config.ts`:

   ```ts
   import { HardhatUserConfig } from "hardhat/config";
   import "@nomiclabs/hardhat-ethers";
   import "hardhat-testbeacon";    // loads TestBeacon

   const config: HardhatUserConfig = {
     solidity: "0.8.17",
     paths: { tests: "test" }
   };
   export default config;
   ```

2. **Generate your test stub**:

   ```bash
   npx hardhat testbeacon
   ```

3. **Run the test**:

   ```bash
   npx hardhat test
   ```

Your single test file will be created at:

```
test/{ContractName}-test.ts
```

## Publishing to npm

Once ready, publish both packages:

```bash
# Core library (if applicable)
cd packages/testbeacon-core
npm version patch
npm publish --access public

# Hardhat plugin
cd ../hardhat-testbeacon
npm version patch
npm publish --access public
```

Consumers then install via:

```bash
npm install --save-dev testbeacon-core hardhat-testbeacon
```

(or your chosen names).

## Contributing

Contributions are welcome:

```bash
# 1. Fork
# 2. Clone fork
git clone https://github.com/your-username/testbeacon.git
cd testbeacon

# 3. Create feature branch
git checkout -b feature/my-change

# 4. Install and build
npm install
npm run build

# 5. Commit & push
git commit -am "feat: describe change"
git push origin feature/my-change
```

Open a Pull Request on GitHub. Please follow our [Code of Conduct](https://www.contributor-covenant.org/).

## License

This project is licensed under the MIT License. See the `LICENSE` file for full text.
