const mongoose = require("mongoose");
var Preference = require("./address.js")
const Schema = mongoose.Schema;

const LocationInfoSchema = new Schema( {
	name: {type: String, required: true},
	category: String,
	description: String,  // place holder
	address: Address,
	phone: text,
	url: String
});

const LocationInfo = mongoose.model("LocationInfo", LocationInfoSchema);
module.exports = LocationInfo;