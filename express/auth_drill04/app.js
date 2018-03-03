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
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(flash());


//passport config
app.use(expressSession({
    secret: "Super secret",
    resave: false,
    saveUninitialized: false
}));
passport.use(new LocalStrategy( db.User.authenticate() ));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

app.use((req, res, next)=>{
    res.locals.currentUser = req.user;
    res.locals.flashError = req.flash("error");
    res.locals.flashSuccess = req.flash("success");
    next();
})

//routes - req
var authRoutes = require("./routes/auth.js");
app.use("/", authRoutes);

//routes - root
app.get("/", (req, res) => res.render("landing"));


//listen
app.listen(process.env.PORT, ()=> console.log("Server is listening d-.-b"));
