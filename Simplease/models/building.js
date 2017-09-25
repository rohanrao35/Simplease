var mongoose = require("mongoose");

var BrotherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    minutesLeft: Number,
    admin: Boolean,
    owner: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }

    //TODO: Add committees that the brother is in as well
});

module.exports = mongoose.model("Brother", BrotherSchema);  
