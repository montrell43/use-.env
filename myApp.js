const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});


app.get('/json', (req, res) => {
  res.json({ message: 'Hello json' });
});

module.exports = app;
