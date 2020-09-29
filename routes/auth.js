const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = 10;

//Sign in
router.get("/signin", (req, res, next) => {
  res.render("signin", { title: "Sign in" });
});

router.post("/signin", async (req, res, next) => {
 
  //To be completed
  const { email, password } = req.body;
  const foundUser = await User.findOne({ email: email });
  console.log(foundUser);

  if (!foundUser) {
    // req.flash("error", "Invalid credentials");
    res.redirect("/signin");
  } else {
    const isSamePassword = bcrypt.compareSync(password, foundUser.password);
    if (!isSamePassword) {
      // req.flash("error", "Invalid credentials");
      res.redirect("/signin");
    } else {
      const userDocument = { ...foundUser };
      const userObject = foundUser.toObject();
      delete userObject.password; // remove password before saving user in session
      console.log(req.session, "before defining current user");
      req.session.currentUser = userObject; // Stores the user in the session

      const isLoggedIn = true;

      res.render("dashboard", { isLoggedIn });
    }
  }
});

router.get("/signup", (req, res, next) => {
  res.render("signup", { title: "Sign up" });
  
});

router.post("/signup", async (req, res, next) => {
  
  try {
    const newUser = req.body;

    const foundUser = await User.findOne({ email: newUser.email });

    if (foundUser) {
      // req.flash("error", "This email is taken");
      res.redirect("/signup");
    } else {
      const hashedPassword = bcrypt.hashSync(newUser.password, salt);
      newUser.password = hashedPassword;
      const user = await User.create(newUser);
      res.redirect("/signin");
    }
  } catch (error) {
    next(error);
  }
 
});

router.get("/logout", async (req, res, next) => {
  res.send("Log out route");
  console.log(req.session.currentUser);
  req.session.destroy(function (err) {
    res.redirect("/signin");
  });
});

module.exports = router;
