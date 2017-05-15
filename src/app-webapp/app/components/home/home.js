import React from 'react'
import Button from 'react-bootstrap-button-loader'

class Home extends React.Component {
  render () {
    return <div>
      <p>Welcome to the Ðecentralized version of 500 Questions!</p>
      <Button
        bsStyle='primary'
        className='btn-block'
        onClick={() => this.props.history.push('/new')}
      >Start New Question</Button>
    </div>
  }
}

Home.propTypes = {
  history: React.PropTypes.object
}

export default Home
