require("dotenv").config();

const express = require("express");
const passport = require("passport");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "cookie_secret",
    proxy: true,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./auth-setup");

const normal = require("./routes/normal");
app.use("/", normal);

const auth = require("./routes/auth");
app.use("/auth/", auth);

app.listen(process.env.PORT, () => {
  console.log(`App is running at http://localhost:${process.env.PORT} `);
});
