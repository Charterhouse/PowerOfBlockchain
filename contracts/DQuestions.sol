pragma solidity ^0.4.18;

contract DQuestions {
    string[] questions;
    bytes32[] answers;

    function numberOfQuestions() public view returns (uint) {
        return questions.length;
    }

    function add(string question, bytes32 answer) public {
        questions.push(question);
        answers.push(answer);
    }

    function getQuestion(uint index) public view returns (string) {
        return questions[index];
    }

    function getAnswer(uint index) public view returns (bytes32) {
        return answers[index];
    }
}
