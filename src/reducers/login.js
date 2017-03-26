const login = (state = false, action) => {
	switch (action.type) {
		case 'LOGIN':
		const data = action.data.data; 
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