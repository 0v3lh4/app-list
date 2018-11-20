'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './app'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./app', () => { render(App) })
}
