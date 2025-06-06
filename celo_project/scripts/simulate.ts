import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();

  const contractAddress = process.env.CONTRACT_ADDRESS;
  if (!contractAddress) {
    console.error("Error: Please provide the contract address as a command-line argument.");
    process.exit(1);
  }
  
  const contract = await ethers.getContractAt("withdrawCeloContract", contractAddress);
  console.log("Owner address:", owner.address);

  const tx1 = await owner.sendTransaction({
    to: contractAddress,
    value: ethers.parseEther("0.0001"),
  });
  await tx1.wait();
  console.log("Sent 0.0001 CELO from sender to contract");

  const balance = await contract.getBalance();
  console.log("Contract balance:", ethers.formatEther(balance));

  const tx2 = await contract.connect(owner).withdrawCelo();
  await tx2.wait();
  console.log("Withdraw successful");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
