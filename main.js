
var http = require('http');
 
// Read Environment Parameters
var port = Number(process.env.PORT || 8080);
var greeting = process.env.GREETING || 'Ron says "Hello World!" from the env';
 
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(greeting + "\n");
});
 
server.listen(port);
 
// Put a friendly message on the terminal
console.log("Server started.");
