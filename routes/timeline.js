var express = require("express");
var router = express.Router();

router.get("/create", function (req, res, next) {
  res.render("timeline-create", { title: "Create New Timeline" });
});

router.get("/edit/:id", function (req, res, next) {
    res.render("timeline-edit", { title: "Edit Timeline" });
  });


module.exports = router;