pragma solidity ^0.4.6;

contract DQuestions {
    uint public numberOfQuestions;

    function add(string question) {
        ++numberOfQuestions;
    }
}
