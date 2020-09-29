const express = require("express");
const router = express.Router();
const Timeline = require("../models/Timeline");

router.get("/create", (req, res, next) => {
  res.render("timeline-create", { title: "Create New Timeline" });
});

router.post("/create", async (req, res, next) => {
  try {
    const newTimeline = await Timeline.create(req.body);
    res.redirect("/timeline/event/create");
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

router.get("/:id/display", (req, res, next) => {
  res.render("timelineDisplay", {
    title: "My Timeline",
    css: ["timeline-styles"],
  });
});

router.get("/:id/delete", async (req, res, next) => {
  try {
    const deleteTimeline = await Timeline.deleteOne(req.params._id);
    res.redirect("/dashboard");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
