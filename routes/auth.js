const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = 10;

router.get("/signin", (req, res, next) => {
  res.render("signin", { title: "Sign in" });
});

router.post("/signin", (req, res, next) => {
    res.send("Sign in form sent");
    //To be completed
});

router.get("/signup", (req, res, next) => {
  res.render("signup", { title: "Sign up" });
});

router.post("/signup", async (req, res, next) => {
  res.send("Sign up form sent");
  //To be completed
});

router.get("/logout", async (req, res, next) => {
    res.send("Log out route");
 /* console.log(req.session.currentUser);
  req.session.destroy(function (err) {
    res.redirect("/signin");
  });*/
});

module.exports = router;