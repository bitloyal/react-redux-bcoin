import React, { Component } from 'react';
import { Link } from 'react-router';
import question from './fake-question.png';
import answer from './fake-answer.png';
import up from './up.svg';
import star from './star.png';

export default class Answer extends Component {

  	render() {
	    return (
	    	<div>
	    		<div className="qa-container">
		   	    	<p className="question-title">How to refactor this Redux connect code?</p>
		    		<div className="qarrows">
				        <img className="qarrow arrow-up" src={up} />
				        <div className="qvotes">2</div>
				        <img className="qarrow arrow-down" src={up} />
				        <img className="qarrow accept" src={star} />
		    		</div>
			        <img className="fake-qa" src={question} />

			        <p className="answer-title">1 Answer</p>
		    		<div className="arrows">
				        <img onClick={this.props.increment} className="arrow arrow-up" src={up} />
				        <div className="avotes">{this.props.questions.avotes}</div>
				        <img onClick={this.props.decrement} className="arrow arrow-down" src={up} />
				        <img className="arrow accept" src={star} />
		    		</div>		        
			        <img className="fake-qa" src={answer} />
		        </div>
		    </div>
	    );
  	}
}
