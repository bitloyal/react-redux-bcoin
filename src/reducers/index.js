import { combineReducers } from 'redux'
import todos from './todos'
import products from './handleData'
import {routerReducer } from 'react-router-redux';	

const storeApp = combineReducers({
  todos,
  products,
  routing: routerReducer
})

export default storeApp
