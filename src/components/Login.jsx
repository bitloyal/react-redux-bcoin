import React, { Component } from 'react';
import {login, logout} from '../utils/routes.jsx'; 
import {Link} from 'react-router';

export default class LogIn extends Component {
  	
  	constructor(props){
  		super(props); 
  	    this.handleSubmit = this.handleSubmit.bind(this); 
        this.logout = this.logout.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
        this.state = {loggedIn : this.props.loggedIn, logMessage: '', username: this.props.username, message: null}
  	}

  	handleSubmit(e){
  		e.preventDefault(); 

        var username = document.getElementsByName('username')[0];
        var password = document.getElementsByName('password')[0];
        var thisLogin = login.bind(this); 

        thisLogin(username.value,password.value); 
  		username.value = ""; 
  		password.value = ""; 
  	}

    logout(){
        var thisLogout = logout.bind(this); 
        thisLogout();
        this.props.clearState(); 
    }

    checkLogin(){
        if(this.props.loggedIn !== false){
          var login = document.getElementsByName('login')[0].className +=  "login";
          var signup = document.getElementsByName('signup')[0].className += "login";
        }
    }

  	render() {
      if(!this.props.loggedIn){
        return (  
        <div className="form-container-login">
        <div className="form-title">Log In</div>
          <form onSubmit={this.handleSubmit}>
            <input className="input" type="text" placeholder="username" name="username" />
            <input className="input" type="password" placeholder="password" name="password" />
            <input className="submit" type="submit" placeholder="submit"/>
          </form>
          <div className="flag">{this.state.message}</div>
         </div>
    );    
      }else{
        return (
          <div> 
            <h3> Hello {this.props.username}! Login Successful!</h3>
            <button onClick={this.logout}> Click Here to log out </button>
          </div>

        )
      }
  }
}
