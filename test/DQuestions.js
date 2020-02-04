/* eslint-env mocha */
const { expect } = require('chai')
const DQuestions = artifacts.require('DQuestions.sol')

contract('DQuestions', function (accounts) {
  let questions

  beforeEach(async function () {
    questions = await DQuestions.new()
  })

  it('has no questions initially', async function () {
    const amount = await questions.numberOfQuestions()
    expect(amount.toNumber()).to.equal(0)
  })

  it('increments number of questions when one is added', async function () {
    await questions.add('Who is Satoshi Nakamoto?')
    const amount = await questions.numberOfQuestions()
    expect(amount.toNumber()).to.equal(1)
  })

  it('can retrieve the question', async function () {
    await questions.add('Who is Satoshi Nakamoto?')
    const retrieved = await questions.getQuestion(0)
    expect(retrieved).to.equal('Who is Satoshi Nakamoto?')
  })
})
