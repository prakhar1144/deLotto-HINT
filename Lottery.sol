// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract Lottery is VRFConsumerBase {
    address public owner;
    address payable[] players;
    mapping(address => bool) public hasPlayer;
    uint _startTime;
    uint public endTime;

    struct Winner {
        address winner;
        uint amount;
    }

    Winner[] winners;

    bytes32 internal keyHash; 
    uint internal fee;
    uint public randomResult;

	event Entered();
    event ResultDeclared();

    constructor() 
        VRFConsumerBase(
            0x8C7382F9D8f56b33781fE506E897a4F1e2d17255,
            0x326C977E6efc84E512bB9C30f76E30c160eD06FB
        ) 
    {
        keyHash = 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4;
        fee = 0.0001 * 10 ** 18;
        owner = msg.sender;
    }

    function enter() external payable {
        require(endTime == 0 || endTime > block.timestamp, "New Participants can enter only after previous result is declared");
        require(msg.value == .01 ether, "Send 0.01 ETH");
        players.push(payable(msg.sender));
        hasPlayer[msg.sender] = true;
        if(players.length == 2)
        {
            _startTime = block.timestamp;
            endTime = _startTime + 120;
        }
        emit Entered();
    }

    function totalAmount() public view returns(uint){
        return address(this).balance;
    }
    
    function getTimeLeft() public view returns(uint){
    	if(endTime == 0)
	    {
	    return 256;
	    }
        if(endTime <= block.timestamp)
        {
            return 0;
        }
        return endTime - block.timestamp;
    }

    function pickWinner() external  {
        require(endTime != 0 && endTime < block.timestamp, "Running Game not completed yet");
        getRandomNumber();
    }

    function payWinner() internal {
        uint index = randomResult % players.length;
        uint total = address(this).balance;
        players[index].transfer(address(this).balance);
        winners.push(Winner(players[index],total));
        for(uint i=0; i< players.length; i++)
        {
            delete hasPlayer[players[i]];
        }
        delete players;
        _startTime = 0;
        endTime = 0;
        emit ResultDeclared();
    }

    function getWinners() public view returns (Winner[] memory){
        return winners;
    }

    function getPlayersCount() public view returns (uint){
        return players.length;
    }

    function getRandomNumber() public returns (bytes32 requestId){
        require(LINK.balanceOf(address(this)) >= fee, "Not Enough Link in Contract");
        return requestRandomness(keyHash, fee);
    }

    function fulfillRandomness(bytes32 requestId, uint randomness) internal override {
        randomResult = randomness;
        payWinner();
    }
}