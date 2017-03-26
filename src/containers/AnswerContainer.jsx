import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import Answer from '../components/Answer.jsx';

const mapStateToProps = (state, ownProps) => {
	return {
		questions: state.questions
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		increment: (question) => {
			dispatch(increment(question));
		},
		decrement: (question) => {
			dispatch(decrement(question));
		}
	}
};

const AnswerContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Answer);

export default AnswerContainer;