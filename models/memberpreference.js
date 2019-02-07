const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//var Preference = require("./preference.js")

const MemberPreferenceSchema = new Schema( {
	member: {
		email: {type: String, require: true},
		passwd: {type: String, required: true}
	},  
	prefs: {
		// hotel_pref: {type: String},
		// activity_pref: {type: String},
		// restaurant_pref: {type: String},
	    all_pref: [Number]

	},
	id:{
		type: Schema.Types.ObjectId	
	}

});

const MemberPreference = mongoose.model("MemberPreference", MemberPreferenceSchema);
module.exports = MemberPreference;