const express = require("express");
const passport = require("passport");
const router = express.Router();
const path = require("path");

const middle = function (req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
};

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/home.html"));
});

router.get(
  "/callback",
  passport.authenticate("google", {
    successRedirect: "/success",
    failureRedirect: "/",
  })
);

router.get("/success", middle, (req, res) => {
  res.send('<a href="/auth/logout">Logout</a>');
});

module.exports = router;
