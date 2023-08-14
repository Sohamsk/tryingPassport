require("dotenv").config();

const path = require("path");
const express = require("express");
const passport = require("passport");
const { log } = require("console");
const app = express();

require("./auth-setup");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/home.html"));
});

app.get(
  "/auth/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.listen(process.env.PORT, () => {
  console.log(`App is running at http://localhost:${process.env.PORT} `);
});
