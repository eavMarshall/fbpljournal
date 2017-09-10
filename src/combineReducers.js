import { combineReducers } from 'redux';
import * as Common from './CommonReducer.js';

const Reducers = combineReducers({
  Common: Common.CommonReducer,
})

export default Reducers
