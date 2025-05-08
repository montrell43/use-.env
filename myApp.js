require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});


app.get('/json', (req, res) => {
  let message = 'Hello json';
  
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }

  res.json({ message });
});

module.exports = app;
