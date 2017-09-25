var mongoose = require("mongoose");

var BuildingSchema = new mongoose.Schema({
    name: String,
    address: String,
    coordinates: {
      lat: Number;
      lang: Number;
    },
    company_id: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
      },
      name: String
    },
    units: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Unit"
      }
    ],
    forum: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Forum"
      }
    ],
    num_free: Number,
    num_occuppied: Number,
    num_total_units: Number,
});

module.exports = mongoose.model("Building", BuildingSchema);
