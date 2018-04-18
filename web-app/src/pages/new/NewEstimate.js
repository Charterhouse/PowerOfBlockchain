import React from 'react'
import {
  Form, FormGroup, Col, Grid, Row, Image, ControlLabel, FormControl, HelpBlock
} from 'react-bootstrap'
import Button from 'react-bootstrap-button-loader'

function FieldGroup ({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}

class NewEstimate extends React.Component {
  constructor (props) {
    super(props)
    this.state = { lotID: -1, estimateAmount: 0, isLoading: false }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  render () {
    return <div>
      <h2>Make your estimate</h2>
      <Form horizontal>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Image src='/thumbnail.png' rounded />
            </Col>
          </Row>
        </Grid>
        <FieldGroup
          id='estimateAmount'
          type='number'
          label='Estimate Amount'
          placeholder='100'
    />
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button
              bsStyle='primary'
              bsSize='large'
              loading={this.state.isLoading}
              disabled={!this.validFormInput()}
              onClick={this.onSubmit}
            >
              Place and Next
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
    const { accounts, contract, web3, history } = this.props
    const { lotID, estimateAmount } = this.state
    const options = { from: accounts[0], gas: 600000 }
    await contract.add(lotID, web3.sha3(estimateAmount), options)

    const nextLotID = (await contract.getNextLotID())
    this.setState({ isLoading: false })
    history.push(`/vote/next/${nextLotID}`)
  }

  validFormInput () {
    return this.state.question !== '' && this.state.answer !== ''
  }
}

export { NewEstimate }
