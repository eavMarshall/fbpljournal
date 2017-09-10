import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as Common from '../../../CommonReducer.js';
import './Login.css';
import googleIcon from './googleicon.svg';

class Login extends Component {
  LoginBtnHandler() {
    this.props.CommonReducer({
      type: '@Common.Session.actionLogin', payload: true
    });
  }
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <h2>React-redux-firebase</h2>
            <h3>Login page</h3>
          </div>
          <div style={{padding:"16px"}}/>
          <div id="gSignInWrapper" onClick={() => { this.LoginBtnHandler(); }}>
            <div id="customBtn" className="customGPlusSignIn">
              <img className="icon" src={googleIcon}/>
              <span className="buttonText">Sign in with Google</span>
            </div>
          </div>
          <div style={{padding:"16px"}}/>
          {this.props.hasFailed ? <h4 className="error">{this.props.failMessage}</h4> : null }
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    CommonReducer : Common.CommonReducer
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.Common.Session.isLoggedIn,
    failMessage: state.Common.Session.failMessage,
    hasFailed: state.Common.Session.hasFailed
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
