var http = require('http'); // http is built in module in node

http.createServer(serverEngine).listen(3000); // port 3000 is assigned to load page

function serverEngine(req, res) {
  res.writeHead(200, {'Content_Type' : 'text/plain'}); // we can also add custom headers
  res.end("YES!!! The server is running!"); // prints on browser
}
