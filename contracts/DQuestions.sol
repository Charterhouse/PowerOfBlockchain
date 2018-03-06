pragma solidity ^0.4.18;

contract DQuestions {
    string[] questions;

    function numberOfQuestions() public view returns (uint) {
        return questions.length;
    }

    function add(string question) public {
        questions.push(question);
    }

    function getQuestion(uint index) public view returns (string) {
        return questions[index];
    }
}
