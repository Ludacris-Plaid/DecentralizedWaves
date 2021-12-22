// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import { ethers } from "ethers";


contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log ("The Veritas BlockChain is online and active");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has left a link!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256){
            console.log("There are now %d total links uploaded to the blockchain.  These links are immutable!", totalWaves);
            return totalWaves;
    }
    
    function getTotalWaves() public view returns (uint256){
        console.log("%d total blocks committed", totalWaves);
        return totalWaves;
    }
}