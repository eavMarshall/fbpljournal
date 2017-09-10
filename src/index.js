import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import combineReducers from './combineReducers.js';
import middleware from './Middleware.js';
import Firebase from "firebase";

console.log("loading firebase");
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    appIsReady(true)
  } else {
    appIsReady(false)
  }
});

function appIsReady(isLoggedIn) {
  store.dispatch({ type: '@Common.Session.update', payload: {isLoggedIn: isLoggedIn}});
  var loadingImage = document.getElementById("loadingImage");
  if (null != loadingImage) loadingImage.parentNode.removeChild(loadingImage);
  delete window.loadingImage;
  document.getElementById("root").style.visibility = "visible";
}

const store = createStore(combineReducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
