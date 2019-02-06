const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema( {
	email: {type: String, required: true},
	password: {type: String, required: true}
});

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;