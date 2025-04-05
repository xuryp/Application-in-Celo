import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("withdrawCeloContract");
  const contract = await Contract.deploy();
  await contract.waitForDeployment();

  console.log("Contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
