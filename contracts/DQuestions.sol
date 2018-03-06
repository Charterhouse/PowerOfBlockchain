pragma solidity ^0.4.18;

contract DQuestions {
    uint public numberOfQuestions;

    function add(string question) public {
        numberOfQuestions++;
    }
}
