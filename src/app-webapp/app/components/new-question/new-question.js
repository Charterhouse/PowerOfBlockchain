import React from 'react'
import {
  Form, FormGroup, ControlLabel, FormControl, Col
} from 'react-bootstrap'
import Button from 'react-bootstrap-button-loader'
import { DQuestions, getWeb3 } from '../../contracts'

class NewQuestion extends React.Component {

  constructor (props) {
    super(props)
    this.state = { question: '', answer: '', isLoading: false }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  render () {
    return <div>
      <h2>Create a New Question</h2>
      <Form horizontal>
        <FormGroup>
          <Col sm={2} componentClass={ControlLabel}>Question</Col>
          <Col sm={10}>
            <FormControl
              componentClass='textarea'
              name='question'
              value={this.state.question}
              placeholder='Enter your question here...'
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2} componentClass={ControlLabel}>Answer</Col>
          <Col sm={10}>
            <FormControl
              type='text'
              name='answer'
              value={this.state.answer}
              placeholder='Enter the correct answer here...'
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
              onClick={this.onSubmit}
            >
              Create
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  }

  handleChange (event) {
    let target = event.target
    this.setState({ [target.name]: target.value })
  }

  async onSubmit () {
    this.setState({ isLoading: true })
    const questions = await DQuestions.deployed()
    await questions.add(this.state.question, getWeb3().sha3(this.state.answer))
    this.setState({ isLoading: false })
  }

  validFormInput () {
    return this.state.question !== '' && this.state.answer !== ''
  }

}

export default NewQuestion
