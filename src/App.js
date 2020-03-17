import React from 'react';
import { Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Addprescription from './components/prescriptions/Addprescriptions'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     {/* <Hompage/> */}
     <Route exact path='/' component={Login}/>
     <Route exact path='/register' component={Register}/>
     <Route exact path='/add' component={Addprescription}/>
     
    </div>
    </Provider>
  );
}

export default App;
