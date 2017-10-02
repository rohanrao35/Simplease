var mongoose = require("mongoose");

var CompanySchema = new mongoose.Schema({
	Name: String;
	employee:[ //employee array
		{
		type:mongoose.Schema.Types.ObjectID,
		ref: "Employee" 
		}
	]
	building:[
		{
		type:mongoose.Schema.Types.ObjectID,
		ref: "Building"
		}
	]
});

module.exports = mongoose.model("Company", CompanySchema);
