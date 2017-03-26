import axios from 'axios';

export const REQ_DATA = "REQ_DATA";
export const RES_DATA = "RES_DATA";
export const CLICK_UP = "CLICK_UP";
export const CLICK_DOWN = "CLICK_DOWN";

export function reqData() {
  return {
    type: REQ_DATA
  }
}

export function resData(products) {
  return {
    type: RES_DATA,
    products
  }
}

export function increment(question) {
	return {
		type: CLICK_UP,
		question
	}
}

export function decrement(question) {
	return {
		type: CLICK_DOWN,
		question
	}
}

export function fetchData(store){
		return axios({
	      method: 'get',
	      url: '/products'
	    }).then((response) => {
			store.dispatch(resData(response.data));  

	    }).catch((error)=>{
	      store.dispatch(resData([]));
	    })
		
}
