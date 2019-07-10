import React from 'react'
import ReactDOM from 'react-dom'
import {compose,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'


import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk)
));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render (
    <App />,
    document.getElementById('app')
  )
})
