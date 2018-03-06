pragma solidity ^0.4.18;

contract DQuestions {
    uint public numberOfQuestions;
    string[] questions;

    function add(string question) public {
        questions.push(question);
        numberOfQuestions++;
    }

    function getQuestion(uint index) public view returns (string) {
        return questions[index];
    }
}
