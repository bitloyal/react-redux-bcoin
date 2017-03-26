import { combineReducers } from 'redux';
import questions from './questions';
import products from './handleData';
import { routerReducer } from 'react-router-redux';	

const storeApp = combineReducers({
	questions,
	products,
	routing: routerReducer
});

export default storeApp;
