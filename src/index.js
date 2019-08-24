import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import Root from './Root';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'));