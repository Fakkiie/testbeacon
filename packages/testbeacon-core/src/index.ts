export interface TestFile {
  filename: string;
  contents: string;
}

export interface GenerateOptions {
  contractName: string;
  abi: any[];
}

export function generateTests(options: GenerateOptions): TestFile[] {
  const { contractName, abi } = options;
  const hasMint = abi.some(
    (item) => item.type === "function" && item.name === "mint"
  );

  const fileName = `${contractName}-test.ts`;
  const contents = `import { expect } from "chai";
import { ethers } from "hardhat";

describe("${contractName} – auto-generated", () => {
  let token: any;
  let owner: any;
  let addr1: any;

  beforeEach(async () => {
    [owner, addr1] = await ethers.getSigners();
    const Factory = await ethers.getContractFactory("${contractName}");
    token = await Factory.deploy();
    await token.deployed();
  });

  ${
    hasMint
      ? `it("minter can mint", async () => {
    const amount = ethers.utils.parseUnits("10", 18);
    await token.connect(owner).mint(addr1.address, amount);
    expect(await token.balanceOf(addr1.address)).to.equal(amount);
  });`
      : `// no mint() detected in ABI; no tests generated.`
  }
});
`;
  return [{ filename: fileName, contents }];
}
