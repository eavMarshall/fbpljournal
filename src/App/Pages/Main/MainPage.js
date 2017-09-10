import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import CommonReducer from '../../../Reducer.js';
import HomePage from './Home/HomePage.js';
import Page1Page from './Page1/Page1Page.js';
import Page2Page from './Page2/Page2Page.js';
import Page3Page from './Page3/Page3Page.js';

class MainPage extends Component {
  selectPage(pageid) {
    this.props.CommonReducer({ type: '@Common.Session.update', payload: {
      selectedPageID: pageid
    }});
  }
  logoutHandler() {
    this.props.CommonReducer({
      type: '@Common.Session.actionLogOut', payload: true
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React-redux-firebase</h2>
          <h3>Main page</h3>
        </div>
        <div className="App-navbar-group">
          <button className="button" onClick={()=>{this.selectPage("home"); }}>Home</button>
          <button className="button" onClick={()=>{this.selectPage("page1"); }}>Page1</button>
          <button className="button" onClick={()=>{this.selectPage("page2"); }}>Page2</button>
          <button className="button" onClick={()=>{this.selectPage("page3"); }}>Page3</button>
          <button className="button" onClick={()=>{this.logoutHandler()}}>Logout</button>
        </div>
        <div>
          { this.props.selectedPageID == "home" ? <HomePage/> : null }
          { this.props.selectedPageID == "page1" ? <Page1Page/> : null }
          { this.props.selectedPageID == "page2" ? <Page2Page/> : null }
          { this.props.selectedPageID == "page3" ? <Page3Page/> : null }
        </div>
      </div>
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
    selectedPageID: state.Common.Session.selectedPageID
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(MainPage);
