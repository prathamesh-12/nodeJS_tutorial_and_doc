var express = require('express');
var app = express();
var router = express.Router();


app.use('/', router);

router.get('/home', function(req, resp) {
	resp.end("This is Home Page!")
});

router.get('/stat', function(req, resp) {
	resp.end("This is stat Page!")
});

app.listen(3000, function () {
  console.log("Listening to port 3000");
});
