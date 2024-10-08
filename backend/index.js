const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require("path");

const staticPath = "/frontend-build/";

const logRoutes = require("./routes/logRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(
  express.static(path.join(__dirname, staticPath)),
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
    path.join(__dirname, staticPath)
  );
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
