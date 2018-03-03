var mongoose = require("mongoose");

//set
mongoose.Promise = Promise;
mongoose.set("debug", true);

//connect
mongoose.connect("mongodb://localhost/auth_drill04");


//req models
module.exports.User = require("./user");