pragma solidity ^0.4.6;

contract DQuestions {
    uint public numberOfQuestions;
    string[] questions;

    function add(string question) {
        ++numberOfQuestions;
        questions.push(question);
    }

    function getQuestion(uint i) constant returns (string) {
        return questions[i];
    }
}
