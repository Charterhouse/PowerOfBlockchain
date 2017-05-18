/* eslint-env mocha */
/* global web3 */
const expect = require('chai').expect
const DQuestions = artifacts.require('DQuestions.sol')

contract('DQuestions', function () {
  let questions

  beforeEach(async function () {
    questions = await DQuestions.new()
  })

  it('can be constructed', async function () {
    expect(questions).to.exist
  })

  it('has no questions initially', async function () {
    let numberOfQuestions = await questions.numberOfQuestions()
    expect(numberOfQuestions.toNumber()).to.equal(0)
  })

  context('when a question is added', function () {
    const question = 'Who is Santoshi Nakamoto?'
    const answer = 'Knobody knows.'

    beforeEach(async function () {
      await questions.add(question, web3.sha3(answer))
    })

    it('increments the number of questions', async function () {
      let numberOfQuestions = await questions.numberOfQuestions()
      expect(numberOfQuestions.toNumber()).to.equal(1)
    })

    it('retrieves the question', async function () {
      expect(await questions.getQuestion(0)).to.equal(question)
    })

    it('knows about the answer', async function () {
      expect(await questions.getAnswer(0)).to.equal(web3.sha3(answer))
    })
  })
})
