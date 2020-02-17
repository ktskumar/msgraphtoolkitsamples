// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const port = 2020;

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("assets"));
app.use(express.static("views"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});



// listen for requests :)
const listener = app.listen(port, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
