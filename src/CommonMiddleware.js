import { applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import * as Common from './CommonReducer.js';
import * as config from './config.js'
import { logger } from 'redux-logger'


const provider = new firebase.auth.GoogleAuthProvider();

const firebaseRequest = (store)=> (next) => (action) => {
  var cAction = Object.assign({}, action);
  switch(cAction.type) {
    case Common.actionTypes.SessionLogin :
      if (null === firebase.auth().currentUser) {
        store.dispatch({ type: Common.redTypes.SessionUpdate, payload: { isLoggingIn: true }});
        firebase.auth().signInWithRedirect(provider).then(function(result) {
          store.dispatch({ type: Common.redTypes.SessionUpdate, payload: {
            isLoggingIn: false,
            hasFailed: false
          }});
        }).catch(function(error) {
          store.dispatch({ type: Common.redTypes.SessionUpdate, payload: {
            isLoggingIn: false,
            failMessage: error.message,
            hasFailed: true
          }});
        });
      } else {
        store.dispatch({ type: Common.redTypes.SessionUpdate, payload: {
          isLoggingIn: false,
          isLoggedIn: true,
          hasFailed: false
        }});
      }
    break;
    case Common.actionTypes.SessionLogout  :
      firebase.auth().signOut();
      store.dispatch({ type: Common.redTypes.SessionUpdate, payload: {
        isLoggedIn: false,
        hasFailed: false,
      }});
    break;
    default:
    next(cAction);
  }
}

const middleware = applyMiddleware(
  promiseMiddleware(),
  logger,
  firebaseRequest
);

export default middleware;
