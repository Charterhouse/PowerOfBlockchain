/* eslint-env mocha */
const expect = require('chai').expect
const DQuestions = artifacts.require('DQuestions.sol')

contract('DQuestions', function () {
  it('has no questions initially', async function () {
    const questions = await DQuestions.new()
    const numberOfQuestions = await questions.numberOfQuestions()
    expect(numberOfQuestions.toNumber()).to.equal(0)
  })
})
