const Tournament = artifacts.require('Tournament.sol')
const XCCToken = artifacts.require('XCCToken.sol')

module.exports = function (deployer) {
  deployer.deploy(Tournament)
  deployer.deploy(XCCToken)
}
