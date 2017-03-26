import React, { Component } from 'react';
import { Link } from 'react-router';
import QuestionsContainer from '../containers/QuestionsContainer.jsx';

export default class App extends Component {
  	render() {
    	return (	
            <div>
                <QuestionsContainer />
            </div>
		);
	}
}

