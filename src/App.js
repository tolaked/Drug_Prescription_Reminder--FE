import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Allpages from './components/AllPages'




function App() {
  
  return (
    <Provider store={store}>
      <Allpages/>
    </Provider>
  );
}

export default App;
