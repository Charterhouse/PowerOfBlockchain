import React from 'react'
import { DQuestions } from '../../contracts'

class ShowQuestion extends React.Component {

  constructor (props) {
    super(props)
    this.state = { question: '' }
  }

  componentWillMount () {
    this.retrieveQuestion(this.props.match.params.id)
  }

  render () {
    return <div className='show-question'>
      <h2>{ this.state.question }</h2>
    </div>
  }

  async retrieveQuestion (id) {
    const questions = await DQuestions.deployed()
    const question = await questions.getQuestion(Number(id))
    this.setState({ question: question })
  }
}

ShowQuestion.propTypes = {
  match: React.PropTypes.object
}

export default ShowQuestion
