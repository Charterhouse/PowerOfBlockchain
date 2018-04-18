pragma solidity ^0.4.19;

import "./VoteItems.sol";

contract Tournament {
    string[] questions;
    bytes32[] answers;
    address[] winners;
    VoteItems voteItems;
    address public creator;

    event BeginVote(); // an event to inform clients about the begging of voting.
                       // can be triggered as browser Notifications
    event Voted(); // an event informing about end of votes
    event ResultsCalculated(); // inform clients that results are calculated

    function Tournament() public {
        createVoteItems();
        creator = msg.sender;
    }

    function newRound() public {
        BeginVote();
    }

    function FinishRound() public {
        Voted();
    }

    function createVoteItems() private {
        voteItems = new VoteItems();
    }

    function addItem(string item) public {
        voteItems.add(item);
    }

    function GetNextItemIndex() public returns (uint) {
        uint c =  voteItems.NextIndex();
        return c;
    }

}
