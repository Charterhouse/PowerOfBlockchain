/* eslint-env mocha */
const expect = require('chai').expect
const DQuestions = artifacts.require('DQuestions.sol')

contract('DQuestions', function () {
  it('can be constructed', async function () {
    expect(await DQuestions.new()).to.exist
  })
})
