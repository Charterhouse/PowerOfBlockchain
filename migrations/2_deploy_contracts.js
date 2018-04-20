const Tournament = artifacts.require('Tournament.sol')
const XCCToken = artifacts.require('XCCToken.sol')

module.exports = function (deployer,accounts) {
  // deployer.deploy(XCCToken)
  const wallet = accounts[0];

  return deployer
  .then(() => {
      return deployer.deploy(XCCToken);
  })
  .then(() => {
      const token2 = XCCToken.at(XCCToken.address)
      return deployer.deploy(
          Tournament,
          XCCToken.address
      );
  });
  
}
