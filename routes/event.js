const express = require("express");
const router = new express.Router();
const Event = require("../models/Event");
const uploader = require("../config/cloudinary");

router.get("/details/:id", (req, res, next)=>{
    Event.findById(req.params.id)
    .then((idDetails) =>{
        res.render("detailsEvent", {idDetails});
    })
    .catch((error)=>{
        next(error)
    });
});

router.get("/create", (req, res) => {
  res.render("create-event", { title: "Create New Event" });
});

router.post("/create", uploader.single("image"), async (req, res, next) => {
  const newEvents = req.body;
  if (req.file) {
    newEvent.image = req.file.path;
  }
  try {
    const newEvent = await Event.create(newEvents);
    res.redirect("/dashboard");
  } catch (error) {
    next(error);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);
    res.render("edit-event", { event: "event" }); //change it
  } catch (error) {
    next(error);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findByIdAndUpdate(eventId, req.body);
    res.redirect("/A VIEW");
  } catch (error) {
    next(error);
  }
});

router.get("/:id/delete", async (req, res, next) => {
  try {
    const eventId = req.params.id;
    await Event.findByIdAndDelete(eventId);
    res.redirect("VIEW");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
