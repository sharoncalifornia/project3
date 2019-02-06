const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema( {
	street: String,
	city: String,
	state: String,
	zipcode:Number
});

const Address = mongoose.model("Address", addressSchema);
module.exports = Address;