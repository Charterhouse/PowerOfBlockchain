import React from 'react'
import Button from 'react-bootstrap-button-loader'

const Home = ({ history }) =>
  <div>
    <p>Welcome to the Ðecentralized version of Estimate Monster!</p>
    <Button
      bsStyle='primary'
      className='btn-block'
      onClick={() => history.push('/vote/new')}>Start Estimate</Button>
  </div>

export { Home }
