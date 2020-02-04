import React from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  Col,
  ControlLabel
} from 'react-bootstrap'
import Button from 'react-bootstrap-button-loader'

class ShowQuestion extends React.Component {
  constructor (props) {
    super(props)
    this.state = { question: '', guess: '', isLoading: false }
    this.handleChange = this.handleChange.bind(this)
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
    return (
      <div className='show-question'>
        <h2>{this.state.question}</h2>
        <Form horizontal>
          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Take a guess:
            </Col>
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
                onClick={this.onSubmit}
              >
                Check My Answer
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }

  handleChange (event) {
    let target = event.target
    this.setState({ [target.name]: target.value })
  }

  onSubmit () {
    this.setState({ isLoading: true })
  }

  validFormInput () {
    return this.state.guess !== ''
  }
}

export { ShowQuestion }
