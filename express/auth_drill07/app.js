var express = require("express"), app = express();
var mongoose = require("mongoose");
var bodyP = require("body-parser");

var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLM = require("passport-local-mongoose");
var expressSession = require("express-session");
var flash = require("connect-flash");
var db = require("./models");
// var  = require("");

//set
app.use(bodyP.json());
app.use(bodyP.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(flash());

//Passport - CONFIG
app.use(expressSession({
    secret: "Super Secret",
    resave: false,
    saveUninitialized: false
}));
passport.use( new LocalStrategy( db.User.authenticate() ) );
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

//locals
app.use((req, res, next)=>{
    res.locals.currentUser = req.user;
    res.locals.flashError = req.flash("error");
    res.locals.flashSuccess = req.flash("success");
    next();
});

//routes - require
var authRoutes = require("./routes/auth.js");
app.use("/", authRoutes);

//routes - root
app.get("/", (req, res)=>{
    res.render("landing");
});


//listen
app.listen( process.env.PORT, () => console.log("Server is listening"));


