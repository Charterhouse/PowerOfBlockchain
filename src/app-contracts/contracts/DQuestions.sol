pragma solidity ^0.4.6;

contract DQuestions {
    string[] questions;
    bytes32[] answers;

    function numberOfQuestions() constant returns (uint) {
        return questions.length;
    }

    function add(string question, bytes32 answer) {
        questions.push(question);
        answers.push(answer);
    }

    function getQuestion(uint i) constant returns (string) {
        return questions[i];
    }

    function getAnswer(uint i) constant returns (bytes32) {
        return answers[i];
    }
}
