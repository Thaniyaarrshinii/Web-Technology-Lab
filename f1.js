var http = require('http');
var dt = require('./f2');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The current date and time :   " + dt.myDateTime());
    res.end();
}).listen(8080);


console.log("Server running"); 

