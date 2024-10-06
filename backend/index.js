const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require("path");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');

const staticPath = "../frontend/build";
const baseHref = "".replace(/\/$/, "");

// Replace these with your actual Google Client ID and Secret
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
const GOOGLE_CLIENT_SECRET = 'YOUR_GOOGLE_CLIENT_SECRET';

const logRoutes = require("./routes/logRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(
  express.static("/Users/shivrajs/Codebase/mental-health-app/frontend/build")
);

app.use(function (req, res, next) {
  if (req.url.match(/\.(gif|jpe?g|png|bmp|wav|mp3|woff2|js|css)$/i)) {
    res.setHeader("Cache-Control", `public, max-age=31536000`);
  } else {
    res.setHeader("Cache-Control", `no-store`);
  }

  next();
});

// Routes
app.use("/api", logRoutes);
app.get("*", (req, res) => {
  res.sendFile(
    "/Users/shivrajs/Codebase/mental-health-app/frontend/build/index.html"
  );
});

// Configure session middleware (necessary for Passport)
app.use(
  session({
    secret: "some_secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport with Google OAuth 2.0 strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback", // Adjust this in production
    },
    function (accessToken, refreshToken, profile, done) {
      // Here you can handle user data, save it in a DB, etc.
      return done(null, profile);
    }
  )
);

// Serialize user data to store in session
passport.serializeUser(function (user, done) {
  done(null, user);
});

// Deserialize user data from session
passport.deserializeUser(function (user, done) {
  done(null, user);
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
