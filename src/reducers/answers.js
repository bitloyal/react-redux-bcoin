const initialState = {
	answers: [

	]
};

const answers = (state = initialState, action) => {
	switch (action.type) {
		case 'RES_DATA':
			return state
		default:
			return state
	}
}

export default answers;
