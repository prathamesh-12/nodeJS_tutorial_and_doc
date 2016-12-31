var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/', function(req, resp) {
	resp.cookie('sampleCookie', '112233');
	resp.end('Cookie Example');
});

app.listen(3000, function () {
  console.log("Listening to port 3000");
});