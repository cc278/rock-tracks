import "babel-polyfill";
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from './Store'
import ScrollToTop from './components/ScrollToTop'


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </HashRouter>
  </Provider>,
  document.getElementById('root'))
