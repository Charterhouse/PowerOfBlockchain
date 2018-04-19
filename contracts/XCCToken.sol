pragma solidity ^0.4.19;

import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract XCCToken is MintableToken {
    string public constant name = "C-Coin"; // solium-disable-line uppercase
    string public constant symbol = "XCC"; // solium-disable-line uppercase
    uint8 public constant decimals = 2; // solium-disable-line uppercase

    uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
    function XCCToken() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
        Transfer(address(0), msg.sender, INITIAL_SUPPLY);
    }

    function printOwner() public view returns (address) {
        return (msg.sender);
    }

    function grantedTo(address recipient) public canGrant() returns (uint) {
        uint amount = 777;
        totalSupply_ = totalSupply_ + amount;
        balances[recipient] += amount;
        Transfer(address(0), recipient, amount);
        return balances[recipient];
    }

    modifier canGrant() {
        require(balances[msg.sender] == 0);
        _;
    }
}