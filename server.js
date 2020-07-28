<<<<<<< HEAD
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
=======
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
>>>>>>> 2e0d252326bbcc0736314f43d49d294b9862e72f
// const cors = require('cors')

const app = express();

require("dotenv").config();
require("./config/database");

app.use(logger("dev"));
app.use(express.json());

<<<<<<< HEAD
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
=======
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));
>>>>>>> 2e0d252326bbcc0736314f43d49d294b9862e72f

// Put API routes here, before the "catch all" route
app.use("/api/profiles", require("./routes/api/profiles"));
// app.use('/api/scores', require('./routes/api/scores'));

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
