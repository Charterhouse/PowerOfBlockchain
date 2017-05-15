/* eslint-env mocha */
const expect = require('chai').expect
const DQuestions = artifacts.require('DQuestions.sol')

contract('DQuestions', function () {
  it('is deployed', async function () {
    expect(await DQuestions.deployed()).to.exist
  })
})
