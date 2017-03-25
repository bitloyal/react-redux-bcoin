import React, { Component } from 'react';

export default class Product extends Component {

  	render() {
  		const product = this.props.product;
  		const styles = {
  			'display': 'inline-block',
  			"height": '300px',
  			"width" : '300px'
  			
  		}
  		const imageProps = {
  			"height": "200px",
  			"width": "200px"
  		}
  		const inlineBlock = {
  			"display": "inline-block"
  		}
      
    return (
    	<div style={inlineBlock} >
    		<div style={styles}>
    			<img style={imageProps} src={product.img} />
    			<br/>
    			{product.title}
    		</div>
	    </div>
    );
  }
}
