const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Preference = require("./preference.js")

const memberpreferenceSchema = new Schema( {
	member: String,  
	prefs: Preference
});

const Member = mongoose.model("MemberPreference", memberpreferenceSchema);
module.exports = MemberPreference;