import React from 'react'
import { Link } from 'react-router-dom'
import LanguageSelect from "./language-select.js"

// The Header creates links that can be used to navigate
// between routes.

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/roster'>Roster</Link></li>
            <li><Link to='/schedule'>Schedule</Link></li>
            <li className='lang-select'><LanguageSelect/></li>
          </ul>
        </nav>
      </header>
    );
  }
}
/* const Header = () => (
  
) */

export default Header
