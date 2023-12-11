const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Naruto.sol/Naruto.json");

const tokenAddress = "0x12445F751D05E5347c2346ac8c42CfE47Ac9CeF5"; // Ethereum address of the deployed ERC721A contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x61D00b7E1d42DA113Ca7F54394Eaf8E10ada1E6b"; // Ethereum public address for the wallet

async function main() {
    // Get the contract instance of the deployed ERC721A contract
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    // Log the total number of ERC721A tokens owned by the specified wallet address
    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens in the wallet.");
  }
  
 // Call the main function and handle any errors
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
