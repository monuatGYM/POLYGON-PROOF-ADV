/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.18",
};
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/Bh22s-iYGmFwy-9Dq3New4jIpUES9xZt",
      accounts: [process.env.goerliPRIVATE_KEY],
    },
    mumbai: {
      url: "https://polygon-mumbai-bor.publicnode.com",
      accounts: [process.env.goerliPRIVATE_KEY],
    },
  },
};
