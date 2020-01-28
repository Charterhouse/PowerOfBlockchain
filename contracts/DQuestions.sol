pragma solidity ^0.5.12;

contract DQuestions {
    string[] questions;
    bytes32[] answers;
    address[] winners;

    function numberOfQuestions() public view returns (uint256) {
        return questions.length;
    }

    function add(string memory question, bytes32 answer) public {
        questions.push(question);
        answers.push(answer);
        winners.length++;
    }

    function getQuestion(uint256 index) public view returns (string memory) {
        return questions[index];
    }

    function getAnswer(uint256 index) public view returns (bytes32) {
        return answers[index];
    }

    function guess(uint256 index, string memory answer) public {
        if (
            winners[index] == address(0) &&
            keccak256(abi.encodePacked(answer)) == answers[index]
        ) {
            winners[index] = msg.sender;
        }
    }

    function getWinner(uint256 index) public view returns (address) {
        return winners[index];
    }
}
