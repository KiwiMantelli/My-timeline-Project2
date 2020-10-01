const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = 10;

//Sign in
router.get("/signin", (req, res, next) => {
  res.render("signin", { title: "Sign in" });
});

router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  const foundUser = await User.findOne({ email: email });
  console.log(foundUser);

  if (!foundUser) {
    req.flash("error", "Invalid credentials");
    res.redirect("/signin");
  } else {
    const isSamePassword = bcrypt.compareSync(password, foundUser.password);
    if (!isSamePassword) {
      req.flash("error", "Invalid credentials");
      res.redirect("/signin");
    } else {
      const userDocument = { ...foundUser };
      const userObject = foundUser.toObject();
      delete userObject.password; 
      //console.log(req.session, "before defining current user");
      req.session.currentUser = userObject; 
      console.log(req.session);
      req.flash("success", "Successfully logged in, welcome back!");
      res.redirect("/dashboard");
    }
  }
});

router.get("/signup", (req, res, next) => {
  res.render("signup", { title: "Sign up" });
});


//Sign Up
router.post("/signup", async (req, res, next) => { 
  try {
    const newUser = req.body;
    console.log(newUser);

    const foundUser = await User.findOne({ email: newUser.email });

    if (foundUser) {
      req.flash("error", "That email is already in use");
      res.redirect("/signup");
    } else {
      const hashedPassword = bcrypt.hashSync(newUser.password, salt);
      newUser.password = hashedPassword;
      const user = await User.create(newUser);
      req.flash("success", "Account successfully created, please sign in!")
      res.redirect("/signin");
    }
  } catch (error) {
    next(error);
  }
});


//Logout
router.get("/logout", async (req, res, next) => {
  //console.log(req.session.currentUser);
  req.session.destroy(function (err) {
    res.redirect("/signin");
  });
});

module.exports = router;
