import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// set up the store (redux-store)
// run create react store
// middleware incorporates thunk with the store
import { createStore, applyMiddleware } from 'redux'
// for asynchronous requests
import thunk from 'redux-thunk'
// wraps the app so that I can use redux
// gives access to redux store
import { Provider } from 'react-redux'
import App from './App';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
