import React from 'react'
import { Form, FormGroup, FormControl, Col } from 'react-bootstrap'
import Button from 'react-bootstrap-button-loader'

class AddItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      item: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  render () {
    return <div className='add-item'>
      <h2>New Item</h2>
      <Form horizontal>
        <FormGroup>
          <Col sm={10}>
            <FormControl
              type='text'
              name='item'
              value={this.state.item}
              placeholder='Enter your item...'
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
              onClick={this.onSubmit}>Add</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  }

  handleChange (event) {
    let target = event.target
    this.setState({[target.name]: target.value})
  }

  async onSubmit () {
    this.setState({ isLoading: true })
    const { contract, accounts: [me] } = this.props
    const options = { from: me, gas: 600000 }
    await contract.addItem(parseInt(this.state.item, 10), options)
    this.setState({ isLoading: false })
  }

  validFormInput () {
    return this.state.item !== ''
  }
}

export { AddItem }
