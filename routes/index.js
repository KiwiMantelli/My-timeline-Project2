const express = require("express");
const router = express.Router();
const Timeline = require("../models/Timeline");

router.get("/", (req, res, next) => {
  res.render("home", { title: "Homepage" });
});

router.get("/dashboard", async(req, res, next) => {
  if(req.session.currentUser) {
    try{
      const currentUser = req.session.currentUser._id;
      const usersTimelines = await Timeline.find({"user_id": currentUser});
      res.render("dashboard", {title: "Dashboard", timelines : usersTimelines });
    }
    catch(error) {
      next(error);
    }
  } else {
    res.redirect("/signin");
  }
  });

router.get("/demo", (req, res, next) => {
    res.render("demo", { title: "Demo" });
  });

module.exports = router;