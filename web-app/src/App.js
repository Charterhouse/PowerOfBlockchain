import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from 'pages/home'
import { Accounts } from 'pages/accounts'
import { DApp } from 'pages/dapp'
import { Web3 } from 'components/web3'
import { Col } from 'react-bootstrap'
import './App.css'

const renderComponent = (Component, routeProps, web3Props) => (
  <Component {...web3Props}
    {...routeProps} />
)

const web3IsReady = ({web3, accounts, contract}) => {
  return (web3 && accounts && contract)
}

export default () =>
  <Router>
    <Web3 render={web3Props => {
      if (web3IsReady(web3Props)) {
        return (
          <div>
            <Col sm={10} smOffset={1}>
              <h1><span>ÐQuestions</span></h1>
              <Route exact path='/' component={Home} />
              <Route path='/dapp' render={routeProps => renderComponent(DApp, routeProps, web3Props)} />
              <Route path='/accounts' render={routeProps => renderComponent(Accounts, routeProps, web3Props)} />
            </Col>
          </div>
        )
      } else {
        return <p>Loading web3, accounts, and contract.</p>
      }
    }} />
  </Router>
