import { combineReducers } from 'redux';
import * as Common from './CommonReducer.js';
import * as Home from './App/Pages/Main/Home/HomeReducer.js';

const Reducers = combineReducers({
  Common: Common.CommonReducer,
  HomeReducer: Home.HomeReducer
})

export default Reducers
