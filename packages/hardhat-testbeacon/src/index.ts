import fs from "fs";
import path from "path";
import { task } from "hardhat/config";
import type { HardhatRuntimeEnvironment } from "hardhat/types";
import { generateTests } from "@testbeacon/core";

task("testbeacon", "Auto-generate tests for all contracts")
  .setAction(async (_, hre: HardhatRuntimeEnvironment) => {
    await hre.run("compile");
    const fqns = await hre.artifacts.getAllFullyQualifiedNames();

    const outDir = path.join(hre.config.paths.root, "test");
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

    for (const fqn of fqns) {
      const { contractName, abi } = await hre.artifacts.readArtifact(fqn);
      const tests = generateTests({ contractName, abi });
      for (const tf of tests) {
        const filePath = path.join(outDir, tf.filename);
        fs.writeFileSync(filePath, tf.contents);
        console.log(`Generated: test/${tf.filename}`);
      }
    }
  });
