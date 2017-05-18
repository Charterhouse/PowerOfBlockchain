pragma solidity ^0.4.6;

contract DQuestions {
    string[] questions;

    function numberOfQuestions() constant returns (uint) {
        return questions.length;
    }

    function add(string question) {
        questions.push(question);
    }

    function getQuestion(uint i) constant returns (string) {
        return questions[i];
    }
}
