import React, { Component } from 'react';
import {Link} from 'react-router';
import Product from './Product';

export default class Products extends Component {

	renderProducts(){
		let products = this.props.state.products.products || []; 

		if(products.length > 0){ 
		return(
			<div> 
				{products.map(function(product,i){
					return <Product key={i} product={product} />
				})}
			</div>)
		}else{
			return <div> No Products </div>
		}
	}
  	render() {
	    return (
	    	<div>	
		        <div className="product-list">
		      		{this.renderProducts()} 
		      	 </div>
		      	 <div><Link to="/">home</Link></div>
		    </div>
	    );
  	}
}
