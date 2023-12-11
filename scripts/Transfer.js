const { ethers } = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/Naruto.sol/Naruto.json");
require("dotenv").config();
const tokenABI = tokenContractJSON.abi;

async function main() {
  // Set up connections to the Ethereum Goerli network and wallet using Alchemy
  const networkAddress =
    "https://eth-goerli.g.alchemy.com/v2/Bh22s-iYGmFwy-9Dq3New4jIpUES9xZt";
  const privateKey = process.env.goerliPRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  //wallet
  const wallet = new ethers.Wallet(privateKey, provider);

  //si
  const [signer] = await ethers.getSigners();

  //ERC721A 
  const NFT = await ethers.getContractFactory("Naruto");
  const nft = await NFT.attach("0x12445F751D05E5347c2346ac8c42CfE47Ac9CeF5");

  //FXRoot
  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(fxRootContractABI, fxRootAddress);

  const tokenIds = [1, 2, 3, 4, 5];

  const approveTx = await nft
    .connect(signer)
    .setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Approval confirmed");

  // Deposit the NFTs to the FXRoot contract on the Ethereum FxChain network
  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot
      .connect(signer)
      .deposit(nft.address, wallet.address, tokenIds[i], "0x6566");

    await depositTx.wait();
  }

  console.log("Approved and deposited to the destination address");

  const balance = await nft.balanceOf(wallet.address);

  console.log("Current NFT wallet balance", wallet.address,"is: ", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });