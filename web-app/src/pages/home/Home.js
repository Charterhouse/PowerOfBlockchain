import React from 'react'
import {
  Form, FormGroup, ControlLabel, FormControl, Col
} from 'react-bootstrap'
import Button from 'react-bootstrap-button-loader'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      name: ''
    }
    this.claim = this.claim.bind(this)
    this.handleChange = this.handleChange.bind(this)

    const { contract, accounts: [me] } = this.props
    contract.Claimed().watch( (err, response)=> {
      let name = response.args.name;
      let balance = response.args.balance;
      console.log(name +"" +balance);
    })
  }

  render () {
    return <div className='home' >
      <h2>Welcome to Estimate Tournament</h2>
      Type your name: 
      <Form horizontal>
        <FormGroup>
          <Col sm={5}>
            <FormControl
              type='text'
              name='name'
              value={this.state.name}
              placeholder='Enter your name here...'
              onChange = {this.handleChange}
            />
          </Col>
        </FormGroup>
          <Button
          loading={this.state.isLoading}
          onClick={this.claim}>Claim</Button>
        </Form>


    </div>
  }

  handleChange (event) {
    let target = event.target
    this.setState({ [target.name]: target.value })
  }

  async claim () {
    this.setState({ isLoading: true })
    const { contract, accounts: [me] } = this.props
    const options = { from: me, gas: 600000 }
    await contract.claim(this.state.name, options)
    this.setState({ isLoading: false })
  }
}

export { Home }
