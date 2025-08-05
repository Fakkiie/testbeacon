# TestBeacon

A **TypeScript**-built Hardhat plugin that generates a **single** `{ContractName}-test.ts` file containing a basic `mint()` test stub for your Solidity contracts. Get a working test in seconds with zero boilerplate.

---

## Prerequisites

Ensure your Hardhat project is set up for TypeScript development:

```bash
npm install --save-dev hardhat ts-node typescript @nomiclabs/hardhat-ethers ethers chai @types/node @types/mocha @types/chai
```

Add these compiler options to your `tsconfig.json`:

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

---

## Local Development (Plugin)

1. **Clone the repo**

   ```bash
   git clone https://github.com/Fakkiie/testbeacon.git
   cd testbeacon/packages/hardhat-testbeacon
   ```
2. **Install and build**

   ```bash
   npm install
   npm run build     # compiles TypeScript → dist/
   ```
3. **Link into local Hardhat project**

   ```bash
   npm link          # registers plugin globally
   cd /path/to/your-hardhat-project
   npm link hardhat-testbeacon
   ```

---

## Installation (Consumption)

In any TypeScript Hardhat project, install via npm:

```bash
npm install --save-dev hardhat-testbeacon
```

Or, if you’re iterating locally:

```bash
npm link hardhat-testbeacon
```

---

## Usage

1. **Import the plugin** in `hardhat.config.ts`:

   ```ts
   import { HardhatUserConfig } from "hardhat/config";
   import "@nomiclabs/hardhat-ethers";
   import "hardhat-testbeacon";

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
3. **Run the generated test**:

   ```bash
   npx hardhat test
   ```

The plugin will create:

```
test/{ContractName}-test.ts
```

containing a `minter can mint` example.

---

## Testing Locally

After linking or installing, run:

```bash
npx hardhat compile      # compile your contracts
npx hardhat testbeacon   # generate or overwrite the test stub
npx hardhat test         # execute the new test suite
```

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo on GitHub
2. Clone your fork:

   ```bash
   git clone https://github.com/your-username/testbeacon.git
   cd testbeacon/packages/hardhat-testbeacon
   ```
3. Create a new branch:

   ```bash
   git checkout -b feature/my-change
   ```
4. Make your changes, then build:

   ```bash
   npm install
   npm run build
   ```
5. Commit and push:

   ```bash
   git commit -am "feat: describe change"
   git push origin feature/my-change
   ```
6. Open a Pull Request on GitHub

Please adhere to our [Code of Conduct](https://www.contributor-covenant.org/).

---

## License

This project is licensed under the MIT License. See [LICENSE](../LICENSE) for details.
