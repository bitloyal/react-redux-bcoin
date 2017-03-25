import React, { Component } from 'react';

export default class Counter extends Component {
  	render() {
    	return (	
        	<div>
	            <div className="counts">
	            	<span className="num">{this.props.children}</span>
	            </div>
	            <div className="label">{this.props.label}</div>
      		</div>
    	);
	}
}

