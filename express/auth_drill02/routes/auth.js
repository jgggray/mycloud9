var express = require("express");
var router = express.Router();
var passport = require("passport");

var db = require("../models");

//ROUTES
//register
router.get("/register", (req, res)=>{
    res.render("register.ejs");
});
router.post("/register", (req,res)=>{

    db.User.register( new db.User({username: req.body.username, email: req.body.email}), req.body.password, function(err, registeredUser){
        if(err){
            req.flash("error", err.message);
            res.redirect("/register");
        }else{
            passport.authenticate("local")(req,res, function(err){
                if(err){
                    req.flash("error", err.message);
                    res.redirect("/register");
                }else{
                    req.flash("success", "Sucessful registration!");
                    res.redirect("/");
                }//if/else
            });//pass
        }//if/else
    });//db.User.register
});//router.post

//login
router.get("/login", (req, res)=>{
    res.render("login.ejs");
});

router.post("/login", passport.authenticate("local", {
    successRedirect:"/loginsuccess",
    failureRedirect: "/loginfail"
}),(req, res)=>{
    //blank!
});

router.get("/loginsuccess", (req, res)=>{
   req.flash("success", "Login successful!");
   res.redirect("/");
});

router.get("/loginfail", (req, res)=>{
   req.flash("error", "Login failed!");
   res.redirect("/login");
});

//logout
router.get("/logout", (req, res) => {
   req.logout();
   req.flash("success", "Logout successful!");
   res.redirect("/");
});

//exports
module.exports = router;