pragma solidity ^0.4.18;

contract DQuestions {
    string[] questions;
    string[] answers;

    function numberOfQuestions() public view returns (uint) {
        return questions.length;
    }

    function add(string question, string answer) public {
        questions.push(question);
        answers.push(answer);
    }

    function getQuestion(uint index) public view returns (string) {
        return questions[index];
    }

    function getAnswer(uint index) public view returns (string) {
        return answers[index];
    }
}
