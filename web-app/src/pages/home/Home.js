import React from 'react'
import Button from 'react-bootstrap-button-loader'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      name: ''
    }
    this.claim = this.claim.bind(this)
  }

  render () {
    return <div className='home' >
      <h2>Welcome to Estimate Tournament</h2>
      <Button
        loading={this.state.isLoading}
        onClick={this.claim}>Claim</Button>

    </div>
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
