import axios from 'axios'; 


export function signup(username, password, confirm){
  if(password === confirm){
    axios({
      method: 'post',
      url: '/node/wallet',
      data: {
        'id': username,
        'passphrase': username,
        'type':"pubkeyhash"
      }
    }).then((resp)=>{

    return axios({
      method: 'post',
      url: '/signup',
      data: {
        'username': username,
        'password': password,
        'confirm': confirm,
        'id': resp.data.id,
        'passphrase': username,
        'address': resp.data.account.receiveAddress
      }
    }).then((resp)=>{
      if(resp.data === 'already in database'){
        this.setState({
          message: "username already taken"
        });
      }else if(resp.data === "Error: username already taken"){
        this.setState({
          message: "Error: username already taken"
        });
      }else{
        this.setState({
          message: "Username created successfully!"
        });
      }
    }).catch((err)=>{
      this.setState({
        message: "Error in Signup",
        error: err
      });
    });
  })}else{
    this.setState({
      message: "Passwords Do Not Match" 
    });
  }   
}

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
  
