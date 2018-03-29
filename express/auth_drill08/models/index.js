var mongoose = require("mongoose");

//set
mongoose.Promise = Promise;
mongoose.set("debug", true);

//connect
mongoose.connect("mongodb://localhost/auth_drill08");

//exports req
module.exports.User = require("./user.js");