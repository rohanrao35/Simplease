var mongoose = require("mongoose");

var TenantSchema = new mongoose.Schema({
    level: Number,
    first_name: String,
    last_name: String,
    starred_unit_ids: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Unit"
        }
    ]

});

module.exports = mongoose.model("Tenant", BrotherSchema);  
