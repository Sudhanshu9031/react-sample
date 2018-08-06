import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { LocalizeProvider, localizeReducer } from 'react-localize-redux';
import App from './components/App';
import "../src/app.css";
import "../src/theme/default.css";

let store;

const AppFirst = props => (
  <LocalizeProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LocalizeProvider>
);

render(<AppFirst />, document.getElementById('root'));
