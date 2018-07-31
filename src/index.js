import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { createStore, combineReducers } from 'redux';

import { localeReducer as locale } from 'react-localize-redux';

import App from './components/App';
import "../src/app.css";



const AppFirst = props => (
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(<AppFirst />, document.getElementById('root'));
