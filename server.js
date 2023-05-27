var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');
http.createServer(function(request, response) {
    var data1 = '';
         
	request.on('data', function(chunk) { data1 += chunk; });
        request.on('end', function() {
            var user = querystring.parse(data1)["user"];
            console.log(user);
            var email = querystring.parse(data1)["email"];
            console.log(email);
            var pass = querystring.parse(data1)["pass"];
            console.log(pass);
            var password1 = querystring.parse(data1)["password1"];
            console.log(password1);
            var phone = querystring.parse(data1)["phone"];
            console.log(phone);
            var gen = querystring.parse(data1)["gen"];
            console.log(gen);
            var from = querystring.parse(data1)["from"];
            console.log(from);
            var departuretime = querystring.parse(data1)["departuretime"];
            console.log(departuretime);
            var arrivaltime = querystring.parse(data1)["arrivaltime"];
            console.log(arrivaltime);
            var radio = querystring.parse(data1)["radio"];
            console.log(radio);
            if (request.url === '/save') {
                module.saveUser(user, email,pass,password1,phone,gen,from,departuretime,arrivaltime,radio, response);
            } else {
                console.log("In else");
            }
            
        });
   
}).listen(3000);
console.log("Server started");