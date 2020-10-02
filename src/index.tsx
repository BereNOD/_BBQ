import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers'

axios.defaults.headers.common['Content-Type'] = 'application/json';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk))



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
