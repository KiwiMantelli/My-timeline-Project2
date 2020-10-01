const express = require("express");
const router = new express.Router();
const Event = require("../models/Event");
const uploader = require("../config/cloudinary");
const Timeline = require("../models/Timeline");

router.get("/:timelineId/event/create", async (req, res, next) => {
  try {
    const timelineId = req.params.timelineId;
    const timeline = await Timeline.findById(timelineId);
    const {category} = timeline
    const data = {};
    data.timelineId = timelineId;
    if (category === "trips") data.isTrips = true;
    if (category === "culture") data.isCulture = true;
    if (category === "family") data.isFamily = true;
    res.render("create-event", data);
    
  } catch (error) {
    next(error);
    
  } 
 
});

router.post(
  "/:timelineId/event/create",
  uploader.single("image"),
  async (req, res, next) => {
    const newEvents = req.body;
    newEvents.user_id = req.session.currentUser._id;
    newEvents.timeline_id = req.params.timelineId;
    if (req.file) {
      newEvents.image = req.file.path;
    }
    try {
      const newEvent = await Event.create(newEvents);
      res.redirect(`/timeline/${newEvents.timeline_id}/display`);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/event/:id/edit", async (req, res, next) => {
  try {
    const eventId = req.params.id;
    console.log(eventId);
    const event = await Event.findById(eventId);
    res.render("edit-event", { title: "Edit Event", event: event });
  } catch (error) {
    next(error);
  }
});

router.post("/event/:id/edit", uploader.single("image"), async (req, res, next) => {
  const editEvent = req.body;
  if (req.file) {
    editEvent.image = req.file.path;
  }
  try {
    const eventId = req.params.id;
    const event = await Event.findByIdAndUpdate(eventId, editEvent, {new: true});
    res.redirect(`/timeline/event/details/${eventId}`);
  } catch (error) {
    next(error);
  }
});

router.get("/event/:id/delete", async (req, res, next) => {
  try {
    const eventId = req.params.id;
    await Event.findByIdAndDelete(eventId);
    res.redirect("/timeline/:id/display");
  } catch (error) {
    next(error);
  }
});

router.get("/event/details/:id", (req, res, next) => {
 
  Event.findById(req.params.id)
    .then((idDetails) => {
      res.render("detailsEvent", { idDetails });
    })
    .catch((error) => {
      next(error);
    });
});
module.exports = router;
