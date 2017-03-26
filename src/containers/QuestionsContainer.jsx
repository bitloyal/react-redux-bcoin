import { connect } from 'react-redux';
import { reqData } from '../actions';
import Questions from '../components/Questions.jsx';

const mapStateToProps = (state, ownProps) => {
	return {
		questions: state.questions		
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
};

const QuestionsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Questions);

export default QuestionsContainer;