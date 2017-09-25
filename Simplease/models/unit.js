var mongoose = require("mongoose");

var UnitSchema = new mongoose.Schema({
	unit_size: String,
	num_beds: Number,
	num_baths: Number,
	lease_start: String, // should be a date, built in function?
	max_residents: Number,
	is_furnished: Boolean,
	type: Number,
	residents: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Tenant"
		}
	]
	is_vacant: Boolean
});

module.exports = mongoose.model("Unit", BrotherSchema);  
