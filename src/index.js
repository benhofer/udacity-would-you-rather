import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import './index.css';
import Root from './Root';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'));