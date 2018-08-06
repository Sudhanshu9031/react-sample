import React from 'react';
import { Link } from 'react-router-dom';
import { withLocalize, Translate } from '../../node_modules/react-localize-redux';

const NavItem = props => {
    const pageURI = window.location.pathname;
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
    return (
        <li className={liClassName}>
          <Link to={props.path} className={aClassName}>
            <Translate id={props.name}/>
          </Link>
        </li>
      );
}

export default withLocalize(NavItem);