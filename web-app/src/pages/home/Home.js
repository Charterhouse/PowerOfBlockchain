import React from 'react'
import Button from 'react-bootstrap-button-loader'

const Home = ({ history }) =>
  <div>
    <p>Welcome to the Ðecentralized version of 500 Questions!</p>
    <Button
      bsStyle='primary'
      className='btn-block'
      onClick={() => history.push('/new')}>Start New Question</Button>
  </div>

export { Home }
