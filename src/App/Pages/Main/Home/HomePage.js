import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import CommonReducer from '../../../../Reducer.js';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h1>This is the home page</h1>
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

export default connect(mapStateToProps, matchDispatchToProps)(HomePage);
