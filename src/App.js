import React from 'react';
import './App.css';
import Location from './component/Location';
import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  createStore, applyMiddleware }  from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducers from './stores/reducers/rootReducers';


function App() {
  
  const store = createStore(rootReducers, applyMiddleware(thunk));  

  return (
    <div className="App container-fluid">
      <Provider store = {store}>
        <header className="App-header">
          <Location />
        </header>
      </Provider>  
    </div>
  );
}

export default App;
