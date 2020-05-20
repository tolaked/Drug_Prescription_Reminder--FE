import React, { useState } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/images/logo.jpeg";
import history from "../history";
import "../assets/styles/styles.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleSwitch = () => {
    setOpen(!open);
  };
  const loggedOut = localStorage.getItem("token");

  const logout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      history.push("/");
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="app-logo" />
        <h3>Pilltol</h3>
      </div>
      <div className="navigation-bar">
        <NavLink className="navlink" to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink className="navlink" to="/add" activeClassName="active">
          Prescriptions
        </NavLink>
        <NavLink className="navlink" to="" activeClassName="active">
          support
        </NavLink>

        {loggedOut && (
          <NavLink
            onClick={logout}
            className="navlink"
            to="/"
            activeClassName="active"
          >
            Logout
          </NavLink>
        )}
        
      </div>
      <div className = "mobile-menu">
      <div className='hamburger'>
        { !open ?
          <FontAwesomeIcon icon={faBars} onClick={handleSwitch}/>
          : <FontAwesomeIcon icon={faTimes} onClick={handleSwitch}/>
        }
        </div>
        <div className={ open ? 'show-menu' : 'hide'}>
        <NavLink className="navlink" to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink className="navlink" to="/add" activeClassName="active">
          Prescriptions
        </NavLink>
        <NavLink className="navlink" to="" activeClassName="active">
          support
        </NavLink>
        </div>
        </div>
    </div>
  );
};

export default withRouter(Header);
