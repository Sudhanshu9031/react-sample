import React from 'react'
import { Link } from 'react-router-dom'
import LanguageSelect from "./language-select.js"

import LanguageToggle from '../LanguageToggle';
import { withLocalize, Translate } from '../../node_modules/react-localize-redux';

import NavItem from './navigationItem.js'

// The Header creates links that can be used to navigate
// between routes.

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">Corporate Learning</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <NavItem path="/" name="home" />
              <NavItem path="/roster" name="roaster" />
              <NavItem path="/schedule" name="schedule" />
              
              {/* <li className='lang-select'><LanguageSelect/></li> */}
            </ul>
            <LanguageToggle />
          </div>
        </nav>
    );
  }
}
/* const Header = () => (
  
) */

export default withLocalize(Header)
