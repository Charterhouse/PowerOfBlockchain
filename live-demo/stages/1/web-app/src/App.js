import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from 'pages/home'
import { Web3 } from 'components/web3'
import { Col } from 'react-bootstrap'
import { NewQuestion } from 'pages/new'
import { ShowQuestion } from 'pages/show'
import './App.css'

const renderComponent = (Component, routeProps, web3Props) => (
  <Component {...web3Props} {...routeProps} />
)

const web3IsReady = ({ web3, accounts, contract }) => {
  return web3 && accounts && contract
}

export default () => (
  <Router>
    <Web3
      render={web3Props => {
        if (web3IsReady(web3Props)) {
          return (
            <div>
              <Col sm={10} smOffset={1}>
                <h1>
                  <span>ÐQuestions</span>
                </h1>
                <Route
                  path='/new'
                  render={routeProps =>
                    renderComponent(NewQuestion, routeProps, web3Props)
                  }
                />
                <Route
                  path='/questions/:id'
                  render={routeProps =>
                    renderComponent(ShowQuestion, routeProps, web3Props)
                  }
                />
                <Route path='/' exact component={Home} />
              </Col>
            </div>
          )
        } else {
          return <p>Loading web3, accounts, and contract.</p>
        }
      }}
    />
  </Router>
)
