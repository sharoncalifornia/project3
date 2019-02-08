const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemberPreferenceSchema = new Schema({
	email: {
		type: String, required: true
	},
	prefs: [
		{
			type: Schema.Types.ObjectId,
			ref: "LocationInfo"
		}
	]
});

const MemberPreference = mongoose.model("MemberPreference", MemberPreferenceSchema);
module.exports = MemberPreference;