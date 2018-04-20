pragma solidity ^0.4.19;

import "./XCCToken.sol";
// import "zeppelin-solidity/contracts/Ownership/OnlyOwner.sol";
contract Tournament {
    address public creator;

    event BeginVote(); // an event to inform clients about the begging of voting.
                       // can be triggered as browser Notifications
    event Voted(); // an event informing about end of votes
    event ResultsCalculated(); // inform clients that results are calculated

    event Claimed(string name, uint balance);

    XCCToken public token;
    mapping (address => string) public nameOf;
    mapping (address => uint) private userToEntry;
    
    address[] players;
    uint[] public stake;
    uint[] public confidence;
    uint[] public estimatedValue;


    bool private isEstimating;
    uint private realValue;

    uint private answerIndex;
    
    struct Item {
        uint itemId;
        string name;
        uint realValue;
    }    

    Item[] public items;

    function Tournament(address XCCAddress) public {
        creator = msg.sender;
        token = XCCToken(XCCAddress);
        items.push(Item(5, "test1", 55));
        isEstimating = true;
        realValue = 42;
    }


    function submit(uint value_, uint stake_, uint confidence_) public {
        require(stake_ > 0);
        require(stake_ <= token.balanceOf(msg.sender));
        require(confidence_ > 0);
        require(isEstimating);

        stake.push(stake_);
        confidence.push(confidence_);
        estimatedValue.push(value_);

        userToEntry[msg.sender] = answerIndex; 
        players[answerIndex] = msg.sender; 
        answerIndex++;
        token.stake(msg.sender, stake_);
    }

    function calculateResults() public {
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

    function finishEstimationPhase() public {
        isEstimating = false;
        calculateResults();
    }

    function isEstimationValid(uint estimatedValue_, uint realValue_) pure public returns (bool){
        uint biggerValue = estimatedValue_ > realValue_ ? estimatedValue_ : realValue_;
        uint smallerValue = estimatedValue_ <= realValue_ ? estimatedValue_ : realValue_;
        
        bool result = (biggerValue - smallerValue) < (realValue_/5);
        return result;
    }

    
}
