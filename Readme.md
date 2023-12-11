# Project for Building with Polygon Bridge || POLY MODULE 1

## Description

This project involves the creation and deployment of an NFT collection using DALL·E 3, storing the items on IPFS using pinata.cloud, deploying an ERC721 or ERC721A contract to the Goerli Ethereum Testnet, and performing various actions with the NFTs, including mapping the collection to the Polygon network, batch minting, batch transferring to Polygon Mumbai using the FxPortal Bridge, approving the NFTs for transfer, depositing the NFTs to the bridge, and testing the balanceOf function on Mumbai.

## Getting Started

### Installing

1. Clone the repository to your local machine.

   ```shell
   git clone https://github.com/monuatGYM/Poly-Proof-ADVANCED-PROJECT.git
   ```

2. Navigate to the project directory.

   ```shell
   cd "Poly-Proof-ADVANCED-PROJECT"
   ```

3. Install the necessary dependencies.

   ```shell
   npm install
   ```
### Wallet Config
- Network name : Goerli
- New RPC URL : https://rpc.ankr.com/eth_goerli
- Chain ID : 5
- Currency Symbo : ETH or GoETH
- Block Explorer URL : https://goerli.etherscan.io
   
### Solidity Version

The contract is developed using Solidity version be equal or Greater than `^0.8.18`

### ERC721A Import

The contract imports the `ERC721A` contract, which provides the implementation for the ERC721A standard.

### Contract Name and Symbol

```solidity
contract Naruto is ERC721A
```

The `Naruto` contract extends the `ERC721A` contract and represents a collection of unique NFTs inspired by the Naruto series.

### Maximum Quantity of Tokens

```solidity
uint256 public maxQuantity = 5;
```
### Prompt Description

```solidity
string public prompt = "Naruto Portrait in Different Classic style, 8K, Illustrative, NFT, powercard";
```
### Token Details
 > Token Name : Naruto

 > Token Abbrevation : NRU

 ### Mint Function

```solidity
function mint(uint256 quantity) external payable onlyOwner {
        require(
            totalSupply() + quantity <= maxQuantity,
            "You can not mint more than 5 NFT"
        );
        _mint(msg.sender, quantity);
    }
```
### Executing Program

To run the program, follow these steps:

1. Deploy the smart contract to the Goerli Ethereum Testnet.

2. Use DALL·E 3 to generate a 5-item collection and store the items on IPFS using pinata.cloud. Update the `baseUrl` in the smart contract with the IPFS base URL.

3. Map your NFT collection to the Polygon network using the token mapper.

4. Use the provided Hardhat scripts to perform batch minting, batch transferring to Polygon Mumbai using the FxPortal Bridge, and other necessary actions.

5. Test the `balanceOf` function on the Mumbai network to verify NFT balances.


### Deploy Contract to Goerli 

1. Create an `.env` file and set your metamask wallet private key.
2. Configure Hardhat network settings in `hardhat.config.js`.
3. Run the deployment script: `npx hardhat run scripts/Deploy.js --network goerli`

### Mint NFTs

1. Edit the `Mint.js` script with Deployed Contract Address.
2. Run the script: `npx hardhat run scripts/Mint.js --network goerli`

### Batch Transfer NFTs to Polygon Mumbai

1. Set up FxPortal Bridge for Ethereum to Polygon transfer.
2. Edit the `Transfer.js` script with necessary details.
3. Run the script: `npx hardhat run scripts/Transfer.js --network goerli`

### Check Balance on Network
1. Edit the `getBalance.js` script with required details.
2. Run the script: `npx hardhat run scripts/getBalance.js --network mumbai`


## Help

If you encounter any issues or need assistance, please reach out to the me in Email Id of Github.

## Authors

- Bharat Kumar

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.
