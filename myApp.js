// Serve JSON on a Specific Route
let express = require('express');
let app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
  });


app.get("/json", (req, res) => {
    res.json({
        "message": "Hello json"
    });
});
app.get('/json', (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ message });
});

app.get("/json", (req, res) => {
    let message;
    if (process.env['MESSAGE_STYLE'] === "uppercase") {
        message = "Hello json".toUpperCase();
    }
    else {
        message = "Hello json";
    }
    res.json({ "message": `${message}` });
});