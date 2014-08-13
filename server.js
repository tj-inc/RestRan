var http = require("http");
var fs = require("fs");
var express = require("express");
var mongoose = require("mongoose");
var app = express();
var data1;

function getDataFromDB(){
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

        var restModel = mongoose.model("restrans", restSchema);

        restModel.find(function(err, rests){
            if (err) console.error(err);
            console.log("DataBase Querying Success!");
            data1 = rests;
            mongoose.disconnect();
        });
    });
};

getDataFromDB();

app.use(function(req, res, next){
    console.log("%s %s", req.method, req.url);
    next();
});

app.use(express.static(__dirname + "/public"));

app.use(function(req, res, next){

    if(req.url == "/rest-list.json") {

        console.log(data1);
        res.send(data1);

    } else {
        next();
    }

});

app.listen(3000);

console.log("server is running on 3000!");