import React, { Component } from 'react';
import { Link } from 'react-router';
import Question from './Question';

export default class Questions extends Component {
  	render() {
    	return (
        	<div>
        		{this.props.questions.questions.map((q, i) => 
        			<Question
        				key={i}
        				summary={q.summary}
        				date={q.date}
        				tags={q.tags}
        				name={q.name}
        				votes={q.votes}
        				answers={q.answers}
        				views={q.views}
        			/>
        		)}
      		</div>
    	);
	}
}

