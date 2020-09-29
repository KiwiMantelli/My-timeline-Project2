const express = require("express");
const router = express.Router();
const Timeline = require("../models/Timeline");

router.get("/create", (req, res, next) => {
  res.render("timeline-create", { title: "Create New Timeline" });
});

router.post("/create", async(req, res, next) => {
    res.send("New Timeline Create Route");
    //console.log(req.body);
    //Logic to be added
})

router.get("/:id/edit", (req, res, next) => {
    res.render("timeline-edit", { title: "Edit Timeline" });
  });

router.get("/:id/display", (req, res, next) => {
    res.render("timelineDisplay", { title: "My Timeline", css: ["timeline-styles"] });
  });




module.exports = router;