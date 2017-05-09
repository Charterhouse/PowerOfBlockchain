import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { onWeb3Available } from './contracts'

const rootEl = document.getElementById('root')
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  )

onWeb3Available(() => render(App))
if (module.hot) {
  module.hot.accept()
}
