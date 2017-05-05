import React from 'react'
import { Col } from 'react-bootstrap'
import { HashRouter, Route } from 'react-router-dom'
import Home from '../home'
import './app.css'

class App extends React.Component {
  render () {
    return <HashRouter>
      <Col sm={10} smOffset={1}>
        <h1><span>ÐQuestions</span></h1>
        <Route path='/' exact component={Home} />
      </Col>
    </HashRouter>
  }
}

export default App
