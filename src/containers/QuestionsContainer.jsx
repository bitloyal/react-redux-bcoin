import { connect } from 'react-redux'
import { reqData } from '../actions'
import Questions from '../components/Questions.jsx'

const mapStateToProps = (state, ownProps) => ({
	state 
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     dispatch(setVisibilityFilter(ownProps.filter))
//   }
// });

const QuestionsContainer = connect(
	mapStateToProps,
	null
)(Questions)

export default QuestionsContainer