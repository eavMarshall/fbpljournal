import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import CommonReducer from '../Reducer.js';
import './App.css';
import LoginPage from './Pages/Login/LoginPage.js';
import MainPage from './Pages/Main/MainPage.js';

class App extends Component {
  render() {
    return (
      (this.props.isLoggedIn ? <MainPage/> : <LoginPage/>)
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    CommonReducer : CommonReducer
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.Common.Session.isLoggedIn
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
