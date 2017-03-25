const products = (state = {}, action) => {
  switch (action.type) {
    case 'RES_DATA':
    	state.products = action.products
      return state
    default:
    	return state
  }
}

export default products
