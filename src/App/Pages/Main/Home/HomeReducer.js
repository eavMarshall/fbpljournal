const HomeReducerDefaultState = {
  Chat : {
    Data: {},
    InputText: ""
  }
};

//Home.redTypes,
const redTypes = {
  HomeUpdateupdateChat: '@Home.Update.updateChat',
  HomeUpdateInputText: '@Home.Update.InputText'
}
export { redTypes };

//Home.actionTypes.
const actionTypes = {
  HomeActivateChatUpdater: '@Home.Update.HomeActivateChatUpdater',
  HomeKillChatUpdater: '@Home.Update.HomeKillChatUpdater',
  HomeUpdateChat: '@Home.Update.HomeUpdateChat'
}
export { actionTypes };

const HomeReducer = (state = HomeReducerDefaultState, action) => {
  if (null == action) return state;
  switch(action.type) {
    case redTypes.HomeUpdateupdateChat:
      console.log(action);
      var copy = Object.assign({}, state);
      copy.Chat.Data = action.payload;
      return copy;
    case redTypes.HomeUpdateInputText:
      console.log(action);
      var copy = Object.assign({}, state);
      copy.Chat.InputText = action.payload;
      return copy;
  }
  return state;
}
export { HomeReducer };
