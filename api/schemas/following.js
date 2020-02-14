const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Importing userSchema
const userSchema = require('./userDetails');
 
const followingSchema = Schema({
	user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    
    following: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});
 
const Following = mongoose.model('Following', followingSchema);
module.exports = Following; 