import React, { Component } from 'react';
import Counter from './Counter';

export default class Question extends Component {
  	render() {
    	return (	
        	<div>
        		<Counter label="votes">{this.props.votes}</Counter>
        		<Counter label="answers">{this.props.answers}</Counter>
        		<Counter label="views">{this.props.views}</Counter>
        		<div className="summary">{this.props.summary}</div>

        		{this.props.tags.map((tag, i) => 
        			<div className="tag" key={i}>{tag}</div>
        		)}

        		<div className="date">{this.props.date}</div>
        		<div className="name">{this.props.name}</div>
      		</div>
    	);
	}
}


