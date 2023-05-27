var databaseUrl = "mongodb://127.0.0.1:27017/mydb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
//var collections = db.collection("users");
console.log("Connected");

exports.saveUser = function(user, email,pass,password1,phone,gen,from,departuretime,arrivaltime,radio, response) {
console.log('Saving user to mongo');
db.users.insert({ "username": user, "email": email,"password":pass,"confirm password":password1,"mobile number":phone,"From":gen,"To":from,"departure time":departuretime,"arrival time":arrivaltime,"class":radio },
function(err, saved) 
{
    if (err || !saved)
        console.log(err);
    else
        response.write("Booked Successfully!!!!");
        response.end();
         });
}