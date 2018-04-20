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
    mapping (address => string) public nameOf;
    mapping (address => Answer) public answer;
    mapping (address => uint) public stake;
    mapping (address => uint) public confidence;
    mapping (address => uint) public estimatedValue;


    Submission[] submissions;

    struct Submission {
        // string 
        // Answer answer;
        uint[] stake;
        // uint confidence;
    }

    struct Item {
        uint itemId;
        string name;
        uint realValue;
    }    

    struct Answer {
        uint itemId;
        uint estimatedValue;
    }

    Item[] public items;

    function Tournament(address XCCAddress) public {
        createVoteItems();
        creator = msg.sender;
        token = XCCToken(XCCAddress);
        items.push(Item(5, "test1", 55));
        items.push(Item(6, "test2", 66));
        items.push(Item(7, "test3", 77));
    }


    function submit(uint value_, uint stake_, uint confidence_) public {
        require(stake_ > 0);
        require(confidence_ > 0);

        stake[msg.sender] = stake_;
        confidence[msg.sender] = confidence_;
        estimatedValue[msg.sender] = value_;
        token.stake(msg.sender, stake_);
    }


    function addAnswer(uint itemId, uint value) public {
        // uint idx = submissions.push(Submission(a));
        Answer memory answer1 = Answer(1,20);
        Answer memory answer2 = Answer(itemId,value);
        
        answer[msg.sender] = answer2;
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

    function getName(address a) public view returns (string) {
        return nameOf[a];
    }

    function getMyAnswer() public view returns (uint, uint){
        Answer memory a = _getAnswer();
        // return a;
        return(a.estimatedValue, a.itemId);
    }
    function _getAnswer() private view returns (Answer){
        Answer memory a = answer[msg.sender];
        return a;
        // return(a.estimatedValue, a.itemId);
    }
}
