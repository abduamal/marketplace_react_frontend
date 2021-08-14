import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// store functions:
// createStore creates the redux store
    //Store is where data is stored
// middleware incorporates thunk with the store
// compose combines different middlewares into one so that only one 'second' argument is passed when assigning store variable
import { createStore, applyMiddleware, compose } from 'redux';
// for asynchronous requests
import thunk from 'redux-thunk';
// wraps the app so that I can use redux
// gives access to redux store
import { Provider } from 'react-redux'
// gives components access to routes and enables them to use links
import {BrowserRouter as Router} from 'react-router-dom'
import shopReducer from './reducers/shopReducer';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';

//
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// set up the store (redux-store)
    //reducer defines what can be done with store through specific actions
     // - actions are dispatched to the reducer(sending action (object) to the reducer
     // - then the reducer decides what action to take ((asks itself, 'how should I update current store?')), based on condition definitions its given
     // - it returns a new version of the store
 // the code below says, every time dispatch(actionObject) is called, go to 'shopReducer' and update 'store'
 // thunk returns a function from the action creator
const store = createStore(shopReducer, composeEnhancers(applyMiddleware(thunk)))
// wrap App in provider so that the store is global to all components
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
