import React from "react";
import Cookie from "js-cookie";
import { withRouter, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.jpeg";
import "../assets/styles/styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} />
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
          to="/prescriptions"
          activeClassName="active"
        >
          support
        </NavLink>
        <NavLink className="navlink" to="/" activeClassName="active">
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(Header);
