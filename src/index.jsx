import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { fetchData } from './actions'; 

//Redux 
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'Reducers';
import { syncHistoryWithStore } from 'react-router-redux';	
import thunk from 'redux-thunk';

//components 
import App from 'App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Wrapper from './components/Wrapper';
import Questions from './components/Questions';
import Answer from './components/Answer';

import QuestionsContainer from './containers/QuestionsContainer.jsx';
import AnswerContainer from './containers/AnswerContainer.jsx';
import LoginContainer from './containers/LoginContainer.jsx';

const initialState = {
	login: false,
	username: ""
}
	
// Create the store 
const store = createStore(
	reducers,
	applyMiddleware(thunk)
	);
	// initialState,
	// compose(
	// 	applyMiddleware(thunk),
	// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//	);

// stuff from bcoin implementation 
import AppBcoin from './containers/AppBcoin';

// Sync History and Store 
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" pageId="wrapper" component={Wrapper}>
				<IndexRoute pageId="index" component={App}/>
				<Route path="/login" pageId="LoginContainer" component={LoginContainer}/>
				<Route path="/signup" pageId="Signup" component={SignUp}/>
				<Route path="/bcoin" pageId="Bcoin" component={AppBcoin}/>
				<Route path="/questions" pageId="Questions" component={QuestionsContainer}/>
				<Route path="/answer" pageId="Answer" component={AnswerContainer}/>
			</Route>
		</Router>
	</Provider>), document.getElementById('root'));

export {store}; 
	
