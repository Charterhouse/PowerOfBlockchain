import React from 'react'
import { Col } from 'react-bootstrap'
import Home from '../home'

// Define your routing setup in this class for correct hot-module-reloading.

class App extends React.Component {
  render () {
    return <div>
      <Col sm={10} smOffset={1}>
        <h1>ÐQuestions</h1>
        <Home />
      </Col>
    </div>
  }
}

export default App
