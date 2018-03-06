const DQuestions = artifacts.require('DQuestions.sol')

module.exports = function (deployer) {
  deployer.deploy(DQuestions)
}
