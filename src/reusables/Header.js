import React from "react";
import { withRouter, NavLink } from "react-router-dom";

import Logo from "../assets/images/logo.jpeg";
import history from '../history'
import "../assets/styles/styles.css";

const Header = () => {
  
  const loggedOut = localStorage.getItem('token');
  
  const logout = () => {
    const token = localStorage.getItem('token');
    if(token){
      localStorage.removeItem('token');
      history.push('/')
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt='app-logo'/>
        <h3>Pilltol</h3>
      </div>
      <div className="navigation-bar">
        <NavLink className="navlink" to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink className="navlink" to="/add" activeClassName="active">
          Prescriptions
        </NavLink>
        <NavLink
          className="navlink"
          to=""
          activeClassName="active"
        >
          support
        </NavLink>
        {(loggedOut) &&
        <NavLink onClick={logout} className="navlink" to="/" activeClassName="active">
          Logout
        </NavLink>
}
      </div>
    </div>
  );
};

export default withRouter(Header);
