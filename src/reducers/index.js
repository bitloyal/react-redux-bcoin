import { combineReducers } from 'redux';
import questions from './questions';
import answers from './answers';
import login from "./login";
import { routerReducer } from 'react-router-redux';	

const storeApp = combineReducers({
	questions,
	answers,
	login,
	routing: routerReducer
});

export default storeApp;
