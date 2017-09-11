import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as Common from '../../../../CommonReducer.js';
import * as Home from './HomeReducer.js';

class HomePage extends Component {
  componentDidMount() {
    this.props.Home({
      type:Home.actionTypes.HomeActivateChatUpdater,
      payload:true
    }); 
  }
  componentWillUnmount() {
    this.props.Home({
      type:Home.actionTypes.HomeKillChatUpdater,
      payload:true
    }); 
  }
  sendMessageHandler() {
    this.props.Home({
      type:Home.actionTypes.HomeUpdateChat,
      payload: this.props.inputText
    }); 
  }
  inputChatTextHandler(event) {
    this.props.Home({
      type:Home.redTypes.HomeUpdateInputText,
      payload: event.target.value
    }); 
  }
  render() {
    const chatItems = []
    if (null != this.props.chatData) {
      Object.keys(this.props.chatData).map((key) => {
        var name = this.props.chatData[key].displayName;
        var message = this.props.chatData[key].message;
        chatItems.push(
          <li key={key}>
            <span>{name}</span>
            <span>-::-</span>
            <span>{message}</span>
          </li>
        );
      });
    }
    return (
      <div>
        <h1>This is the home page</h1>
        <input type="text" className="style-1" style={{width:"300px"}}
          onChange={this.inputChatTextHandler.bind(this)}></input>
        <button onClick={this.sendMessageHandler.bind(this)}>Send</button>
        <ul> { chatItems } </ul>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    CommonReducer : Common.CommonReducer,
    Home: Home.HomeReducer
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedPageID: state.Common.Session.selectedPageID,
    chatData: state.HomeReducer.Chat.Data,
    inputText: state.HomeReducer.Chat.InputText
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(HomePage);
