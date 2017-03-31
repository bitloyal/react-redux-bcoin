
var initialState = {
	login: false,
	id: "", 
	address: "",
	username: "",
	passphrase: "",
	coin: "",
	message: ""
}

const login = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
		var data = action.data.data; 
		debugger;
			return Object.assign ({},state,{login: true,
				id: data.id, 
				address: data.address,
				username: data.username,
				passphrase: data.passphrase,
				coin: data.coin })

		case 'ERROR':
		var data = action.data.data; 
		debugger; 
			return {
				login: true,
				id: data.id, 
				address: data.address,
				username: data.username,
				passphrase: data.passphrase,
				coin: data.coin 

			}
		default:
			return state;
	}
};

export default login;