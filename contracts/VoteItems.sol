pragma solidity ^0.4.19;

contract VoteItems {
    string[] public items;
    address public publisher;

    function VoteItems() public {
        publisher = msg.sender;
    }

    function add(string item) public {
        items.push(item);
    }

    function NextIndex()  public returns (uint) {
        return 1;
    }

}
