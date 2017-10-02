const mongoose = require("mongoose");

const TenantSchema = new mongoose.Schema({
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

const TenantModel = mongoose.model('tenant', TenantSchema);

//module.exports = mongoose.model("Tenant", BrotherSchema);  
module.exports = TenantModel;
