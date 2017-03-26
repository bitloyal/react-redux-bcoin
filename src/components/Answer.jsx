import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Answer extends Component {

  	render() {
	    return (
	    	<div>	
		        <div className="arrow arrow-up"> arrow up</div>
		        <div className="arrow arrow-down"> arrow down </div>
		        <div className="arrow accept"> accept </div>
		      	 <div><Link to="/">home</Link></div>
		    </div>
	    );
  	}
}
