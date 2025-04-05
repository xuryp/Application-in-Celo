// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";

contract withdrawCeloContract {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {}

    function withdrawCelo() external{
        require(msg.sender == owner, "Not owner");
        payable(owner).transfer(address(this).balance);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}

