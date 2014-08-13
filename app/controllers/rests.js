/**
 * Created by lijiahang on 14-8-13.
 */

var mongoose = require("mongoose");
require("../models/rests");
var restModel = mongoose.model("restrans");


exports.getDataFromDB = function(req, res){
    restModel.find(function(err, rests){
        if (err) console.error(err);
        console.log("DataBase Querying Success!");
        res.send(rests);
    });
};