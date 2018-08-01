import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { LocalizeProvider, localizeReducer } from 'react-localize-redux';
import App from './components/App';
import "../src/app.css"

let store;

const AppFirst = props => (
  <LocalizeProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LocalizeProvider>
);

render(<AppFirst />, document.getElementById('root'));
