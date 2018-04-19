import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from 'pages/home'
import { Web3 } from 'components/web3'
import { Col } from 'react-bootstrap'
import { NewEstimate } from 'pages/new'
import { AddItem } from 'pages/items'
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
              <h1><span>Lot Estimates</span></h1>
              <Route path='/vote/new' render={routeProps => renderComponent(NewEstimate, routeProps, web3Props)} />
              <Route path='/vote/next/:lot_id' render={routeProps => renderComponent(NewEstimate, routeProps, web3Props)} />
              <Route path='/items/new' render={routeProps => renderComponent(AddItem, routeProps, web3Props)} />
              <Route path='/' render={routeProps => renderComponent(Home, routeProps, web3Props)} />
            </Col>
          </div>
        )
      } else {
        return <p>Loading web3, accounts, and contract.</p>
      }
    }} />
  </Router>
