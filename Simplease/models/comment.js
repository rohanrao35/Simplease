var mongoose = require("mongoose");

var CommentSchema = new mongoose.Schema({
    content: String,
    owner: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    }  
});

module.exports = mongoose.model("Forum", ForumSchema);
