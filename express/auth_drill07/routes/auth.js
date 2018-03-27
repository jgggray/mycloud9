var express = require("express");
var router = express.Router();
var passport = require("passport");

var db = require("../models");


//register
router.get("/register", (req, res)=>{
    res.render("register");
});

router.post("/register", (req, res)=>{
    db.User.register( new db.User({username: req.body.username, email: req.body.email}), req.body.password, function(err, regUser){
        if(err){
            req.flash("error", err.message);
            res.redirect("/register");
        }else{
            passport.authenticate("local")(req, res, function(err){
                if(err){
                    req.flash("error", err.message);
                    res.redirect("/register");
                }else{
                    req.flash("success", "Registration successful!");
                    res.redirect("/");
                }//if/else
            });//passport
        }//if/else
    });//db.user.reg
});//router.post

//login
router.get("/login", (req, res)=>{
   res.render("login"); 
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/loginsuccess",
    failureRedirect: "/loginfail"
}), (req, res)=>{
    //blank!
});

router.get("/loginsuccess", (req, res)=>{
    req.flash("success", "Login successful!");
    res.redirect("/"); 
});

router.get("/loginfail", (req,res)=>{
    req.flash("error", "Login failed!");
    res.redirect("/login"); 
});

//logout
router.get("/logout", (req,res)=>{
    req.logout();
    req.flash("success", "User logged out!");
    res.redirect("/");
});

module.exports = router;