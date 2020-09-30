const express = require("express");
const router = express.Router();
const Timeline = require("../models/Timeline");
const Event = require("../models/Event");
const axios = require("axios");

router.get("/create", (req, res, next) => {
  res.render("timeline-create", { title: "Create New Timeline" });
});

router.post("/create", async (req, res, next) => {
  try {
    const category = req.body.category;
    const data = {};
    if (category === "trips") data.isTrips = true;
    if (category === "culture") data.isCulture = true;
    if (category === "family") data.isFamily = true;

    const newTimeline = req.body;
    newTimeline.user_id = req.session.currentUser._id;

    const createdTimeline = await Timeline.create(newTimeline);
    data.timeline = createdTimeline;
     data.timelineId = createdTimeline._id;
    
    res.render("create-event", data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const timelineId = req.params.id;
    console.log(timelineId);
    const findTimeline = await Timeline.findById(timelineId);
    console.log(findTimeline);

    res.render("timeline-edit", {
      title: "Edit Timeline",
      timeline: findTimeline,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  try {
    const timelineId = req.params.id;
    const changeValues = req.body;
    const editedTimeline = await Timeline.findByIdAndUpdate(
      timelineId,
      changeValues
    );

    res.redirect("/dashboard");
  } catch (error) {
    next(error);
  }
});

/*router.get("/", (eafea){
        // "trips"
  const cat = req.qu  ery.category;
  const data = {};
  if(cat === "trips") data.isTrips = true;
  if(cat === "bar") data.isBar = true;

    data : {isTrips : true}
  //res.render("vue", data)
})*/

router.get("/:id/display", async (req, res, next) => {
  timelineId = req.params.id;
  try {
    const getTimeline = await Timeline.findById(timelineId);
    console.log(getTimeline);
    res.render("timelineDisplay", {
      title: "My Timeline",
      css: ["timeline-styles"],
      timeline: getTimeline,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id/delete", async (req, res, next) => {
  try {
    const deleteTimeline = await Timeline.findByIdAndRemove(req.params.id);
    res.redirect("/dashboard");
  } catch (error) {
    next(error);
  }
});

router.get("/getEvents/:id", async (req, res, next) => {
  //const timelineId = req.params.id;
  const test = await Event.find({ timeline_id: timelineId });
  res.json(test);
  console.log("timeline id");
  console.log(timelineId);
  console.log(req.params.id);
});

module.exports = router;
