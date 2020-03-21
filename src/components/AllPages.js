import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import Cookie from "js-cookie";

import Register from "./auth/Register";
import Login from "./auth/Login";
import Addprescription from "../components/prescriptions/Addprescriptions";

function AllPages() {

  const withAuthCheck = (Component, props) => {
    if (Cookie.get("token")) {
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
    
    
  };
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route
        exact
        path="/add"
        component={props => withAuthCheck(Addprescription, props)}
      />
    </div>
  );
}

export default AllPages;
