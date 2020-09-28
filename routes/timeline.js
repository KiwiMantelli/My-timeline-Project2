var express = require("express");
var router = express.Router();

router.get("/create", function (req, res, next) {
  res.render("timeline-create", { title: "Create New Timeline" });
});

router.get("/edit/:id", function (req, res, next) {
    res.render("timeline-edit", { title: "Edit Timeline" });
  });

router.get("/event/create", function (req, res, next) {
    res.render("create-event", { title: "Create New Event" });
    //res.send("Create Event")
  });

router.get("/event/edit/:id", function (req, res, next) {
    res.render("edit-event", { title: "Edit Event" });
  });


module.exports = router;