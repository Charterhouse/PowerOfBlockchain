pragma solidity ^0.4.19;

import "./VoteItems.sol";

contract DQuestions {
    string[] questions;
    bytes32[] answers;
    address[] winners;
    VoteItems voteItems;
    function DQuestions() public {
        createVoteItems();
    }

    function numberOfQuestions() public view returns (uint) {
        return questions.length;
    }

    function add(string question, bytes32 answer) public {
        questions.push(question);
        answers.push(answer);
        winners.length++;
    }

    function getQuestion(uint index) public view returns (string) {
        return questions[index];
    }

    function getAnswer(uint index) public view returns (bytes32) {
        return answers[index];
    }

    function guess(uint index, string answer) public {
        if (winners[index] == 0 && keccak256(answer) == answers[index]) {
            winners[index] = msg.sender;
        }
    }

    function getWinner(uint index) public view returns (address) {
        return winners[index];
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
