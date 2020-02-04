pragma solidity ^0.5.12;

contract DQuestions {
    string[] questions;
    uint256 public numberOfQuestions;

    function add(string memory question) public {
        questions.push(question);
        numberOfQuestions++;
    }

    function getQuestion(uint256 index) public view returns (string memory) {
        return questions[index];
    }
}
