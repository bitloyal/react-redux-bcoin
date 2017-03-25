import axios from 'axios';

export const REQ_DATA = "REQ_DATA";
export const RES_DATA = "RES_DATA"; 

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
