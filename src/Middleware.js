import { applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import { logger } from 'redux-logger'
import * as config from './config.js'

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseRequest = (store)=> (next) => (action) => {
  var cAction = Object.assign({}, action);
  switch(cAction.type) {
    case '@Common.Session.actionLogin':
      if (null === firebase.auth().currentUser) {
        store.dispatch({ type: '@Common.Session.update', payload: { isLoggingIn: true }});
        firebase.auth().signInWithRedirect(provider).then(function(result) {
          store.dispatch({ type: '@Common.Session.update', payload: {
            isLoggingIn: false,
            hasFailed: false
          }});
        }).catch(function(error) {
          store.dispatch({ type: '@Common.Session.update', payload: {
            isLoggingIn: false,
            failMessage: error.message,
            hasFailed: true
          }});
        });
      } else {
        store.dispatch({ type: '@Common.Session.update', payload: {
          isLoggingIn: false,
          isLoggedIn: true,
          hasFailed: false
        }});
      }
    break;
    case '@Common.Session.actionLogOut' :
      firebase.auth().signOut();
      store.dispatch({ type: '@Common.Session.update', payload: {
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
