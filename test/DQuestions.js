/* eslint-env mocha */
const { expect } = require('chai')
const DQuestions = artifacts.require('DQuestions.sol')

contract('DQuestions', function (accounts) {
  it('can be constructed', async function () {
    expect(await DQuestions.new()).to.exist()
  })
})
