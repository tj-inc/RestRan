//Required Services
var http = require("http");
var fs = require("fs");
var express = require("express");
var mongoose = require("mongoose");

//Global Variables
var app = express();
var data;
var restModel;

//Initialize DataBase
function initDB(){
    mongoose.connect("mongodb://localhost/test");
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "DataBase Connection Error: "));
    db.once("open", function(){
        console.log("DataBase Connection Success!");
        var restSchema = mongoose.Schema({
            "chinese": Boolean,
            "name": String,
            "lat": String,
            "lng": String,
            "addr": String,
            "tel": String
        });

        restSchema.set("toJSON");

        restModel = mongoose.model("restrans", restSchema);
    });
};

initDB();

app.use(function(req, res, next){
    console.log("%s %s", req.method, req.url);
    next();
});

app.use(express.static(__dirname + "/public"));

app.use(function(req, res, next){

    if(req.url == "/rest-list.json") {

        restModel.find(function(err, rests){
            if (err) console.error(err);
            console.log("DataBase Querying Success!");
            res.send(rests);
        });

    } else {
        next();
    }

});

app.listen(3000);

console.log("server is running on 3000!");