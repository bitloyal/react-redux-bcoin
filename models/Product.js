var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  title: String,
  price: String,
  inStock: Boolean, 
  company: String, 
  stars: Number, 
  img: String
});

productSchema.statics.addProduct = function(title, price, inStock, company, stars, img, cb){
  
	this.create({
	  title: title,
	  price: price, 
	  inStock: inStock,
	  company: company,
	  stars: stars,
	  img, img
  }, cb)
};

var Product = mongoose.model("Product", productSchema);

module.exports = Product;