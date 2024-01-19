const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Tasks Management!");
});

// imported route path
const tasksRoute = require("./routes/v1/tasks.route");

// routes
app.use("/api/v1/tasks", tasksRoute);
// https://github.com/mir-hussain/taskmaster-server/blob/main/index.js
module.exports = app;
