import { combineReducers } from 'redux';
import questions from './questions';
import answers from './answers';
import { routerReducer } from 'react-router-redux';	

const storeApp = combineReducers({
	questions,
	answers,
	routing: routerReducer
});

export default storeApp;
