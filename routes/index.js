var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("home", { title: "Homepage" });
});

router.get("/dashboard", function (req, res, next) {
    res.render("dashboard", { title: "Dashboard" });
  });

router.get("/demo", function (req, res, next) {
    res.render("demo", { title: "Demo" });
  });

module.exports = router;