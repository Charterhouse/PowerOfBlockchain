pragma solidity ^0.4.6;

contract DQuestions {
    string[] questions;
    bytes32[] answers;
    address[] winners;

    function numberOfQuestions() constant returns (uint) {
        return questions.length;
    }

    function add(string question, bytes32 answer) {
        questions.push(question);
        answers.push(answer);
        winners.length++;
    }

    function getQuestion(uint i) constant returns (string) {
        return questions[i];
    }

    function getAnswer(uint i) constant returns (bytes32) {
        return answers[i];
    }

    function guess(uint i, string guess) {
        bool noWinnerYet = (winners[i] == 0);
        bool rightAnswer = (sha3(guess) == answers[i]);

        if (noWinnerYet && rightAnswer) {
            winners[i] = msg.sender;
        }
    }

    function getWinner(uint i) constant returns (address) {
        return winners[i];
    }
}
