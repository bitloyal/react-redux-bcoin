import axios from 'axios';

export const REQ_DATA = "REQ_DATA";
export const RES_DATA = "RES_DATA";
export const CLICK_UP = "CLICK_UP";
export const CLICK_DOWN = "CLICK_DOWN";
export const LOGIN = "LOGIN"; 
export const LOGOUT = "LOGOUT"; 


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

// export function login(data) {
//   return {
//     type: LOGIN,
//     data
//   }
// }

  export const loginRoute = (username, password)=> (dispatch, getState)=>{
      return axios({
        method: 'post',
        url: '/login',
        data: {
          'username': username,
          'password': password
        }
      }).then((response)=>{
          if(response.data === "no username in database"){
            // send action to update state, no username in database
            return{
              type: "ERROR",
              response
            };
          }else if(response.data ==="incorrect password"){
            return{
              type: "ERROR",
              response
            };
          }else{
            
            dispatch({ 
              type: 'LOGIN',
              data:response 
            });      
          }
      }).catch((error)=>{
        
        return{
          type: "ERROR",
          response: error
        };
      });
  }
