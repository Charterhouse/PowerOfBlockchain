/* eslint-env mocha */
const expect = require('chai').expect
const DQuestions = artifacts.require('DQuestions.sol')

contract('DQuestions', function () {
  let questions

  beforeEach(async function () {
    questions = await DQuestions.new()
  })

  it('has no questions initially', async function () {
    const numberOfQuestions = await questions.numberOfQuestions()
    expect(numberOfQuestions.toNumber()).to.equal(0)
  })

  context('when adding a question', function () {
    beforeEach(async function () {
      await questions.add('Who is Satoshi Nakamoto?')
    })

    it('increases the number of questions', async function () {
      const numberOfQuestions = await questions.numberOfQuestions()
      expect(numberOfQuestions.toNumber()).to.equal(1)
    })
  })
})
