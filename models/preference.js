const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const preferenceSchema = new Schema( {
	hotel_pref: [Number],  
	activity_pref: [Number],
	restaurant_pref: [Number]
});

const Member = mongoose.model("Preference", preferenceSchema);
module.exports = Preference;