var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  //res.sendFile('index.html', {root: path.join(__dirname, './file')});
  
  console.log(req.query);
  var response = "Hello " + req.query.firstName;
  res.end(response);
});

app.listen(3000, function () {
  console.log("Listening to port 3000");
});
