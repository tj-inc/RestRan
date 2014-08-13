/**
 * Created by lijiahang on 14-8-11.
 */

//Required Services
var http = require("http");
var fs = require("fs");
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//Global Variables
var app = express();
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
        restModel = mongoose.model("restrans", restSchema);
    });
};
initDB();

//Set Up Functionality of Server
//require('./route')(app);

app.use(function(req, res, next){
    console.log("%s %s", req.method, req.url);
    next();
});
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
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

//Server Listening to Port
var server = app.listen(3000, function(){
    console.log("server is running at %s", server.address().port);
});