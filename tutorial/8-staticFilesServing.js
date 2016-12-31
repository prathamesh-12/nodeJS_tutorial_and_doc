var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  res.send("Hello World from Express!");
});

app.listen(3000, function () {
  console.log("Listening to port 3000");
});
