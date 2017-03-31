import React, { Component } from 'react';
import {Link} from 'react-router';
import unblocker from "./unblocker.png";
import bitcoin from "./btc.png";
import {connect} from 'react-redux';  

const mapStateToProps = (state) => {
  return {
    state
  };
}; 


class Head extends Component {

  constructor(props){
      super(props); 
      this.processCoins = this.processCoins.bind(this);
    }

    processCoins(coins){
      if(coins){
        return parseFloat(coins).toFixed(2)  
      }else{
        return parseFloat(0).toFixed(2); 
      }
    }
    
  	render() {
      var imgStyles = {
        
      }
    	return (	
        	<div className="header">
        		<img className="unblocker-title" src={unblocker} />
      			<div className="link"><Link to="/login">Login</Link></div>
      			<div className="link"><Link to="/signup">Signup</Link></div>
      			<div className="link"><Link to="/questions">Questions</Link></div>
      			<div className="link"><Link to="/bcoin">BCoin</Link></div>
            <div className="btc-wrapper">
              <div className="btc-count">
                {(this.processCoins(this.props.state.login.coin))}
              </div>
              <div className="img-wrapper">
                <img className="btc-img" src={bitcoin} />
              </div>
            </div>
      		</div>
      	);
	 }
}

const Header = connect(
  mapStateToProps,
  null
)(Head);

export default Header;