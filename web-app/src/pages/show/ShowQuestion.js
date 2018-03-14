import React from 'react'
import { Alert, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap'
import Button from 'react-bootstrap-button-loader'

class ShowQuestion extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      question: '',
      guess: '',
      isLoading: false,
      alert: '',
      alertStyle: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.id = Number(this.props.match.params.id)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillMount () {
    this.retrieveQuestion(this.props.match.params.id)
  }

  async retrieveQuestion (id) {
    const { contract } = this.props
    const question = await contract.getQuestion(Number(id))
    this.setState({ question: question })
  }

  render () {
    return <div className='show-question'>
      <h2>{ this.state.question }</h2>
      <Form horizontal>
        <FormGroup>
          <Col sm={2} componentClass={ControlLabel}>Take a guess:</Col>
          <Col sm={10}>
            <FormControl
              type='text'
              name='guess'
              value={this.state.guess}
              placeholder='Enter your answer...'
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button
              bsStyle='primary'
              bsSize='large'
              loading={this.state.isLoading}
              disabled={!this.validFormInput()}
              onClick={this.onSubmit}>Check My Answer</Button>
          </Col>
        </FormGroup>
      </Form>
      { this.renderAlert() }
    </div>
  }

  renderAlert () {
    if (this.state.alert === '') {
      return <div />
    } else {
      return <Alert bsStyle={this.state.alertStyle}>
        { this.state.alert }
      </Alert>
    }
  }

  handleChange (event) {
    let target = event.target
    this.setState({[target.name]: target.value})
  }

  async onSubmit () {
    this.setState({ isLoading: true })
    const { contract, accounts: [me] } = this.props
    const options = { from: me, gas: 600000 }
    await contract.guess(this.id, this.state.guess, options)
    const winner = await contract.getWinner(this.id)
    if (winner === me) {
      this.setState({
        alert: 'You Won!',
        alertStyle: 'success'
      })
    } else {
      this.setState({
        alert: 'Wrong guess, please try again!',
        alertStyle: 'danger'
      })
    }
    this.setState({ isLoading: false })
  }

  validFormInput () {
    return this.state.guess !== ''
  }
}

export { ShowQuestion }
