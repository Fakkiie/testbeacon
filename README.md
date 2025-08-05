TestBeacon

A Hardhat plugin that generates a single {ContractName}-test.ts file containing a basic mint() test stub for your contract. Ideal for getting one test up and running with minimal setup.

Features

One-file output: Creates exactly one test file named {ContractName}-test.ts under test/

Mint detection: Scans the compiled ABI for mint(address,uint256) and generates a minter can mint test

Zero configuration: No extra flags or config files—just run the task after installing

Installation

Clone the repository

git clone https://github.com/Fakkiie/testbeacon.git
cd testbeacon

Install dependencies

npm install

Build the plugin

npm run build

Link locally (for development)

npm link
cd /path/to/your-hardhat-project
npm link hardhat-testbeacon

Or install from npm

npm install --save-dev hardhat-testbeacon

Usage

In your Hardhat project’s config (hardhat.config.js or .ts):

require("hardhat-testbeacon");
// or in TypeScript:
// import "hardhat-testbeacon";

Run the task to generate your single test stub:

npx hardhat testbeacon

Verify the file at test/{ContractName}-test.ts, then run:

npx hardhat test

Contributing

Feel free to open issues and pull requests! To contribute:

Fork the repo

Create a branch:

git checkout -b feature/my-change

Make your changes

Commit and push:

git commit -m "feat: description"
git push origin feature/my-change

Open a Pull Request

Please follow our Code of Conduct.

License

This project is licensed under the MIT License. See the LICENSE file for details.


