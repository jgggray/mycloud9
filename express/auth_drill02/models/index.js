var mongoose = require("mongoose");

// settings
mongoose.Promise = Promise;
mongoose.set("debug", true);

//connect
mongoose.connect("mongodb://localhost/auth_drill02");

//exports - req
module.exports.User = require("./user.js");