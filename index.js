/*
*
*Primary file for the API
*
*
* */

//Dependencies

var http = require('http');
var url = require('url');




//Server respond to all request with a string
var server = http.createServer(function (req,res) {

  // Get the url and parse it
 var parsedUrl = url.parse(req.url,true);
  // Get the path
var path = parsedUrl.pathname;
// var trimmedPath = path.replace(/)

// Send the response
res.end('Hello World\n');

// Log the request path
console.log('Request receive');


});

server.listen(3000,function () {
    console.log("The server is lstenng  to port 3000 now");
});
