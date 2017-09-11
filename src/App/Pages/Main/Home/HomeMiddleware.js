import * as Home from './HomeReducer.js';

var firebaseRefListner = null;

const HomeMiddleware = (store)=> (next) => (action) => {
    var cAction = Object.assign({}, action);
    console.log(cAction);
    switch(cAction.type) {
        case Home.actionTypes.HomeActivateChatUpdater:
            firebaseRefListner = firebase.database().ref('home/chat/')
            firebaseRefListner.on('value', (snapshot)=> {
                store.dispatch({
                    type: Home.redTypes.HomeUpdateupdateChat,
                    payload: snapshot.val()
                });
            });
        break;
        case Home.actionTypes.HomeKillChatUpdater:
            if (null != firebaseRefListner) {
                firebaseRefListner.off();
                firebaseRefListner = null;
            }
        break;
        case Home.actionTypes.HomeUpdateChat:
            var map = {};
            var path = 'home/chat/'+ new Date().getTime() +'-'+firebase.auth().currentUser.uid;
            map[path] = {
                displayName: firebase.auth().currentUser.displayName,
                message: action.payload
            };
            
            firebase.database().ref().update(map, (snapshot)=> {/*do something with the return data??*/});
        
        break;
        default: next(cAction);
    }
}

export default HomeMiddleware;