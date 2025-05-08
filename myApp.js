const express = require('express');
const app = express();

app.get('/json', (req, res) => {
  res.json({ message: 'Hello json' });
});

module.exports = app;
