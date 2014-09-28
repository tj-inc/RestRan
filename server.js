/**
 * Created by lijiahang on 14-8-11.
 */

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();

mongoose.connect("mongodb://localhost/test");
mongoose.connection.on("error", console.error.bind("Connection Failed: "));
mongoose.connection.once("open", function(){console.log("Connection Success!")});

require('./route')(app);
app.use(function(req, res, next){console.log("%s %s", req.method, req.url); next();});
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Server Listening to Port
var server = app.listen(3000, function(){
    console.log("server is running at %s", server.address().port);
});

module.exports = app;

