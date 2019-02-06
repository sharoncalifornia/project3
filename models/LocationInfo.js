const mongoose = require("mongoose");
//var Preference = require("./address.js")
const Schema = mongoose.Schema;

const LocationInfoSchema = new Schema( {
	name: {type: String, required: true},
	category: String,
	description: String, 
	rating: String, 
	price: String,// place holder
	address: {
		street: {type: String},
		city: {type: String},
		state: {type: String},
		zipcode: {type: String}	
	},
	phone: String,
	image_url: String
});

const LocationInfo = mongoose.model("LocationInfo", LocationInfoSchema);
module.exports = LocationInfo;