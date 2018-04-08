var mongoose = require("mongoose");

//set
mongoose.set("debug", true);
mongoose.Promise = Promise;

//connect
mongoose.connect("mongodb://localhost/auth_drill09");

//reqs
module.exports.User = require("./user.js");