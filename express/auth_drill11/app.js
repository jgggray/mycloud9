var express = require("express"), app = express();
var mongoose = require("mongoose");
var bodyP = require("body-parser");
// require passport
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLM = require("passport-local-mongoose");
var expressSession = require("express-session");
var flash = require("connect-flash");

var db = require("./models");

//SETTINGS
app.use(express.static(__dirname + "/public"));
app.use(bodyP.json());
app.use(bodyP.urlencoded({extended: true}));
//app.set("view engine", "ejs");
app.use(flash());



//passport config
app.use(expressSession({
    secret: "Super Secret",
    resave: false,
    saveUninitialized: false
}));
passport.use(  new LocalStrategy( db.User.authenticate() )  );
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

//locals
app.use(function(req, res, next){
    res.locals.flashSuccess = req.flash("success");
    res.locals.flashError = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});

//ROUTES - ROOT
app.get("/", (req, res) => res.render("landing.ejs"));
//app.get("/register", (req, res) => res.render("register.ejs"));

//ROUTES - REQ
var authRoutes = require("./routes/auth.js");
app.use("/", authRoutes);

//LISTEN
app.listen(process.env.PORT, function(){
    console.log("Server is listening d -.- b");
});