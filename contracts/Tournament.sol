pragma solidity ^0.4.19;

import "./VoteItems.sol";
import "./XCCToken.sol";

contract Tournament {
    VoteItems voteItems;
    address public creator;

    event BeginVote(); // an event to inform clients about the begging of voting.
                       // can be triggered as browser Notifications
    event Voted(); // an event informing about end of votes
    event ResultsCalculated(); // inform clients that results are calculated

    event Claimed(string name, uint balance);

    XCCToken public token;
    mapping (address => string) nameOf;

    function Tournament(address XCCAddress) public {
        createVoteItems();
        creator = msg.sender;
        token = XCCToken(XCCAddress);
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

    function CalculateResults() public {
        // use https://github.com/numerai/contract ???
        ResultsCalculated();
    }

    function claim(string name) public {
        address addr = msg.sender;
        uint balance = token.grantedTo(addr);
        nameOf[addr] = name;
        Claimed(name, balance);
    }
}
