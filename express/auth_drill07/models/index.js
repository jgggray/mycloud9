var mongoose = require("mongoose");

//settings
mongoose.Promise = Promise;
mongoose.set("debug", true);

//connect
mongoose.connect("mongodb://localhost/auth_drill07");


//req models
module.exports.User = require("./user.js");