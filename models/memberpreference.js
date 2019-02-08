const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//var Preference = require("./preference.js")

const MemberPreferenceSchema = new Schema( {
	member: {
		email: {type: String, require: true},
		passwd: {type: String, required: true}
	},  
	all_prefs: [ {
		type: Schema.Types.ObjectId,
		ref: "LocationInfo"	
	}
    ]
});

const MemberPreference = mongoose.model("MemberPreference", MemberPreferenceSchema);
module.exports = MemberPreference;