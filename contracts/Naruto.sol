// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";

contract Naruto is ERC721A {
    address public owner;

    uint256 public maxQuantity = 5;

    string baseUrl =
        "https://gateway.pinata.cloud/ipfs/QmbCooF7RxiJiEjD9cgzzw3FEuRGuSMJjh6GJaJFuRkbFR";

    string public prompt = "Naruto Portrait in Different Classic style, 8K, Illustrative, NFT, powercard";

    constructor() ERC721A("Naruto", "NRU") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only Owner can do so");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner {
        require(
            totalSupply() + quantity <= maxQuantity,
            "You can not mint more than 5 NFT"
        );
        _mint(msg.sender, quantity);
    }

    function getBalance(address _owner) external view returns (uint256) {
        return balanceOf(_owner);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
