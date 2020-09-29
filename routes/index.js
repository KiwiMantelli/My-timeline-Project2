const express = require("express");
const router = express.Router();
const Timeline = require("../models/Timeline");

router.get("/", (req, res, next) => {
  res.render("home", { title: "Homepage" });
});

router.get("/dashboard", async(req, res, next) => {
  try{
    const allTimelines = await Timeline.find({});
    console.log(allTimelines);
    res.render("dashboard", {timelines : allTimelines });
  }
  catch(error) {
    next(error);
  }
  });

router.get("/demo", (req, res, next) => {
    res.render("demo", { title: "Demo" });
  });

module.exports = router;