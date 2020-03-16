import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Header from './reusables/Header'
function App() {
  return (
    <div className="App">
     <Route exact path='/' component={Header}/>
    </div>
  );
}

export default App;
