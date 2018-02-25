var express = require("express"), app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var expressSession = require("express-session");
var flash = require("connect-flash");

var db = require("./models");

//settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(flash());

// PASSPORT CONFIG
app.use(expressSession({
    secret: "secret string",
    resave: false,
    saveUninitialized: false
}));
passport.use( new LocalStrategy( db.User.authenticate() ));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

// LOCALS
app.use((req, res, next)=>{
    res.locals.currentUser = req.user;
    res.locals.flashSuccess = req.flash("success");
    res.locals.flashError = req.flash("error");
    next();
});

//routes - req
var authRoutes = require("./routes/auth.js");
app.use("/", authRoutes);

//routes - root
app.get("/", (req, res)=>{
    res.render("landing.ejs");
});

app.listen(process.env.PORT, () => console.log("Server is listening..."));