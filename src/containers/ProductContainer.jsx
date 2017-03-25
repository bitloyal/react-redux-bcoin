import { connect } from 'react-redux'
import { reqData } from '../actions'
import Products from '../components/Products.jsx'

const mapStateToProps = (state, ownProps) => ({
	state 
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     dispatch(setVisibilityFilter(ownProps.filter))
//   }
// });

const ProductContainer = connect(
  mapStateToProps,
  null
)(Products)

export default ProductContainer