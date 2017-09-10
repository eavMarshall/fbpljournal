import { combineReducers } from 'redux';

const CommonReducerDefaultState = {
  Session: {
    isLoggedIn: false,
    isLoggingIn: false,
    hasFailed: false,
    failMessage: "Default fail message",
    selectedPageID: null
  },
  BrowserInfo: {
    width: 0,
    height: 0,
  },
  App: {
    LoginPage: {},
    MainPage: {
      Home: {},
      Page1: {},
      Page2: {},
      Page3: {}
    }
  }
}

const CommonReducer = (state = CommonReducerDefaultState, action) => {
  if (null == action) return state;
  switch(action.type) {
    case '@Common.Session.update':
      var copy = Object.assign({}, state);
      if (action.payload.hasOwnProperty("isLoggedIn")) copy.Session.isLoggedIn = action.payload.isLoggedIn;
      if (action.payload.hasOwnProperty("isLoggingIn")) copy.Session.isLoggingIn = action.payload.isLoggingIn;
      if (action.payload.hasOwnProperty("hasFailed")) copy.Session.hasFailed = action.payload.hasFailed;
      if (action.payload.hasOwnProperty("failMessage")) copy.Session.failMessage = action.payload.failMessage;
      if (action.payload.hasOwnProperty("selectedPageID")) copy.Session.selectedPageID = action.payload.selectedPageID;
      return copy;
    case '@Common.BrowserInfo.update':
      var copy = Object.assign({}, state);
      if (action.payload.hasOwnProperty("width")) copy.Session.BrowserInfo.width = action.payload.width;
      if (action.payload.hasOwnProperty("height")) copy.Session.BrowserInfo.height = action.payload.height;
      return copy;
  }
  return state;
}

export default CommonReducer;
