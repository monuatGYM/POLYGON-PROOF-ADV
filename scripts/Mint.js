const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.goerliPRIVATE_KEY;
  const networkAddress =
    "https://ethereum-goerli.publicnode.com";

  
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a signer (account) 
  const signer = new ethers.Wallet(privateKey, provider);
 
  const contractAddress = "0x12445F751D05E5347c2346ac8c42CfE47Ac9CeF5";

  const OneNFT = await ethers.getContractFactory("Naruto", signer);
  const contract = await OneNFT.attach(contractAddress);

  // Call the mint function to mint 5 tokens
  await contract.mint(5);

  console.log("successfully minted '5' tokens.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 