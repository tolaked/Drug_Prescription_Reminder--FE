import React from "react";
import {logOutSuccess} from '../state/actions/signin'
import Cookie from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";

import Logo from "../assets/images/logo.jpeg";
import history from '../history'
import "../assets/styles/styles.css";

const Header = () => {
  
  const dispatch = useDispatch()
  const loggedOut = useSelector(state=>state.user.loggedOut);
  
  const logout = () => {
    const cookie = Cookie.get('token');
    if(cookie){
      Cookie.remove('token');
      history.push('/')
      dispatch(logOutSuccess(true))
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
          className="navlink support"
          to="/prescriptions"
          activeClassName="active"
        >
          support
        </NavLink>
        {(!loggedOut) &&
        <NavLink onClick={logout} className="navlink" to="/" activeClassName="active">
          Logout
        </NavLink>
}
      </div>
    </div>
  );
};

export default withRouter(Header);
