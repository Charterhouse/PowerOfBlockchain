pragma solidity ^0.4.6;

contract DQuestions {
    string[] questions;
    string[] answers;

    function numberOfQuestions() constant returns (uint) {
        return questions.length;
    }

    function add(string question, string answer) {
        questions.push(question);
        answers.push(answer);
    }

    function getQuestion(uint i) constant returns (string) {
        return questions[i];
    }

    function getAnswer(uint i) constant returns (string) {
        return answers[i];
    }
}
