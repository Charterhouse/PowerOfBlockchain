import React from 'react'
import { Col } from 'react-bootstrap'

// Define your routing setup in this class for correct hot-module-reloading.

class App extends React.Component {
  render () {
    return <div>
      <Col sm={10} smOffset={1}>
        <h1>ÐQuestions</h1>
        <p>Welcome to the Ðistributed version of 500 Questions!</p>
      </Col>
    </div>
  }
}

export default App
