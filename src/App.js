import React from 'react';
import { Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Addprescription from './components/prescriptions/Addprescriptions'


function App() {
  const withAuthCheck = (Component, props) => {
    if (Cookie.get("token")) {
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
  };
  return (
    <Provider store={store}>
      <Route exact path='/' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/add'  component={props => withAuthCheck(Addprescription, props)}/>
    </Provider>
  );
}

export default App;
