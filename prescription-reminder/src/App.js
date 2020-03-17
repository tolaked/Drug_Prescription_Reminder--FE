import React from 'react';
import { Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Hompage from './components/hompage/homepage'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Hompage/>
    </div>
    </Provider>
  );
}

export default App;
