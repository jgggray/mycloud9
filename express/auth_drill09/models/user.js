var mongoose = require("mongoose");
var passportLM = require("passport-local-mongoose");


//schema
var userSchema = new mongoose.Schema({
    username: {type: String, required: "Username must be set"},
    email: {type: String, required: "Email must be set"},
    password: String
});

//plugin
userSchema.plugin(passportLM);

//model
var User = mongoose.model("User", userSchema);

module.exports = User;
