var mongoose = require("mongoose");

var EmployeeSchema = new mongoose.Schema({
	level: Number,
	
	company:[
		{
		type:mongoose.Schema.Types.ObjectId,
		ref: "Company"
		}
	]
});

module.exports = mongoose.model("Employee", EmployeeSchema);

