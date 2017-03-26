import React, { Component } from 'react';
import Counter from './Counter';
import '../css/home.css';
import ago from 's-ago';

export default class Question extends Component {
  	render() {
    	return (	
        	<div className="question">
        		<div className="counters">
	        		<Counter label="votes">{this.props.votes}</Counter>
	        		<Counter label="answers">{this.props.answers}</Counter>
	        		<Counter label="views">{this.props.views}</Counter>
        		</div>

        		<div className="info">
	        		<div className="summary">{this.props.summary}</div>

	        		{this.props.tags.map((tag, i) => 
	        			<div className="tag" key={i}>{tag}</div>
	        		)}

	        		<div className="date">{ago(this.props.date)}</div>
	        		<div className="name">{this.props.name}</div>
        		</div>
      		</div>
    	);
	}
}


