const Tournament = artifacts.require('Tournament.sol')

module.exports = function (deployer) {
  deployer.deploy(Tournament)
}
