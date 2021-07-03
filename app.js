const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoute");

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(authRoutes);
module.exports = app;
