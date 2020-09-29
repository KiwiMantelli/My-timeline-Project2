const express = require("express");
const router = new express.Router();
const Event = require("../models/Event");
const uploader = require("../config/cloudinary");

router.get("/create", (req, res) => {

const cat= req.query.category;
const data={};
if(cat ==="trips") data.isTrips = true;
if(cat === "books/movies/series") data.isBooks = true;
if(cat === "family") data.isFamily = true;
  res.render("create-event", { title: "Create New Event", data });
});

router.post("/create", uploader.single("image"), async (req, res, next) => {
  const newEvents = req.body;
  newEvents.user_id = req.session.currentUser._id;
  if (req.file) {
    newEvents.image = req.file.path;
  }
  try {
    const newEvent = await Event.create(newEvents);
    res.redirect("/timeline/:id/display");
  } catch (error) {
    next(error);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const eventId = req.params.id;
    console.log(eventId)
    const event = await Event.findById(eventId);
    res.render("edit-event", { title: "Edit Event", event: event }); 
  } catch (error) {
    next(error);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findByIdAndUpdate(eventId, req.body);
    res.redirect(`/timeline/event/details/${eventId}`);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/delete", async (req, res, next) => {
  try {
    const eventId = req.params.id;
    await Event.findByIdAndDelete(eventId);
    res.redirect("/timeline/:id/display");
  } catch (error) {
    next(error);
  }
});

router.get("/details/:id", (req, res, next)=>{
  res.render("detailsEvent", {title: "Event Details"});
   /* Event.findById(req.params.id)
    .then((idDetails) =>{
        res.render("detailsEvent", {idDetails});
    })
    .catch((error)=>{
        next(error)
    });*/
});
module.exports = router;
