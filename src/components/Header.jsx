import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
  	render() {
    	return (	
        	<div className="header">
      			<div className="link"><Link to="/login">Login</Link></div>
      			<div className="link"><Link to="/signup">Signup</Link></div>
      			<div className="link"><Link to="/questions">Questions</Link></div>
      			<div className="link"><Link to="/bcoin">BCoin</Link></div>
      		</div>
      	);
	}
}
