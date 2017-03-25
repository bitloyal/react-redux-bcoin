import axios from 'axios';

export function login(username, password){
    return axios({
      method: 'post',
      url: '/login',
      data: {
        'username': username,
        'password': password
      }
    }).then((response)=>{
        if(response.data === "no username in database"){
          this.setState({
            loggedIn: true,
            message: "No username in database"
          })
        }else if(response.data ==="incorrect password"){
          this.setState({
            message: "password is incorrect"
        });
        }else{
          this.props.successLog(response.data._id, username);
          this.setState({
          loggedIn: true,
          message: "Successfully Logged In!"
        });
        }
    }).catch((error)=>{
        this.setState({
          message: "an error occured"
        });
    });
}
export function getSession(){
  axios({
    method: 'get',
    url: '/session'
  }).then((response)=>{
    if(response.data){
      this.setState({
      loggedIn : true,
      id: response.data._id
    });  
    }
    return response; 
  }).catch((error)=>{
    console.log('error', error)
    return error; 
  }) 
}

export function logout(){
    return axios({
      method: 'get',
      url: '/logout'
    }).then((response)=>{
        this.setState({
          loggedIn: false,
          message: '',
          logMessage: "Successfully Logged Out!"
        });
    }).catch((error)=>{
        this.setState({
          logMessage: "A System Error Occured"
        })
    })
}