require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

app.get("/json", (req, res) => {
  const msg = process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
  res.json({ message: msg });
});

module.exports = app;