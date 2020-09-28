const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home", { title: "Homepage" });
});

router.get("/dashboard", (req, res, next) => {
    res.render("dashboard", { title: "Dashboard" });
  });

router.get("/demo", (req, res, next) => {
    res.render("demo", { title: "Demo" });
  });

module.exports = router;