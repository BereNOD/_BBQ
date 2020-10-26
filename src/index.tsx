import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import 'nprogress/nprogress.css'
import Router from './Router';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import './socket'

import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers'

axios.defaults.headers.common['Content-Type'] = 'application/json';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers(reducers), composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_LEFT} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
