var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); //middle wear to send/POST data to server

var app = express();

app.use(bodyParser()); 
app.use('/', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, './file')});
});

app.post('/', function (req, res) {
	res.end(JSON.stringify(req.body));
});

app.listen(3000, function () {
  console.log("Listening to port 3000");
});
