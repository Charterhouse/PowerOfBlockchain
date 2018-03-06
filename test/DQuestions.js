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
    const question = 'Who is Satoshi Nakamoto?'
    const answer = 'Nobody knows'

    beforeEach(async function () {
      await questions.add(question, answer)
    })

    it('increases the number of questions', async function () {
      const numberOfQuestions = await questions.numberOfQuestions()
      expect(numberOfQuestions.toNumber()).to.equal(1)
    })

    it('can retrieve the added question', async function () {
      expect(await questions.getQuestion(0)).to.equal(question)
    })

    it('knows the answer', async function () {
      expect(await questions.getAnswer(0)).to.equal(answer)
    })
  })
})
