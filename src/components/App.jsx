import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  	render() {
    	return (	
        	<div>
      			<div><Link to="/login">Login</Link></div>
      			<div><Link to="/signup">Signup</Link></div>
      			<div><Link to="/questions">Questions</Link></div>
      			<div><Link to="/bcoin">BCoin</Link></div>
      		</div>
		);
	}
}

