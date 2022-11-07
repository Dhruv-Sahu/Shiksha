//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

contract Shi{

    uint value;
    int public  no_of_voters;
    int public approve_count;


    struct Funder{
        uint amount; // weight is accumulated by delegation
        bool voted;  // if true, that person already voted
        bool flag;
    }

    struct Proposal {
        uint voteCount; // number of accumulated votes
    }

    mapping(address => Funder) public voters;

    constructor(){
        value = 0;
    }

    function funding() external payable {
        require(msg.value > 0, "no fund received");
        voters[msg.sender] = Funder(msg.value, false, true);
        value = value + msg.value;
        no_of_voters++;
    }

    function approve(address payable _to) external {
        Funder memory voter = voters[msg.sender];
        require(voter.flag ,"not present");
        require(!voter.voted, "you have voted already");
        voters[msg.sender].voted = true;
        approve_count++;

        int h_num = no_of_voters/2;
        int act_half = no_of_voters/approve_count;

        if(act_half < h_num){
            sendTrans(_to);
        } else {
            return;
        }      
    }


    function sendTrans(address payable _to) public payable {
        // Send returns a boolean value indicating success or failure.
        // This function is not recommended for sending Ether.
        bool sent = _to.send(address(this).balance);
        require(sent, "Failed to send Ether");
    }
}