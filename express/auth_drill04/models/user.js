var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

//schema
var userSchema = new mongoose.Schema({
    username: {type: String, required: "Username cannot be blank"},
    email: {type: String, required: "Email cannot be blank"},
    password: String
});
// plugin
userSchema.plugin(passportLocalMongoose);

// model
var User = mongoose.model("User", userSchema);
// exports
module.exports = User;