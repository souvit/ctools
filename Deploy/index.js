// Express server hosting web site
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 8080;

const STATIC = path.resolve("./dist");
const INDEX = path.resolve(STATIC, "index.html");

const app = express();
app.use(bodyParser.json());

// Static content
app.use(express.static(STATIC));

app.get("/call", function (req, res) {
  res.json({ "json": "here" });
});

// All GET request handled by INDEX file
app.get("*", function (req, res) {
  res.sendFile(INDEX);
});

// Start server
app.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log(
    `Server up and running on ${PORT}`
  );
});
