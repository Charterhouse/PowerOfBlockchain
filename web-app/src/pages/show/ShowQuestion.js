import React from 'react'

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
    const { contract } = this.props
    const question = await contract.getQuestion(Number(id))
    this.setState({ question: question })
  }
}

export { ShowQuestion }
