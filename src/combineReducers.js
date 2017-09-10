import { combineReducers } from 'redux';
import CommonReducer from './Reducer.js';

const Reducers = combineReducers({
  Common: CommonReducer,
})

export default Reducers
