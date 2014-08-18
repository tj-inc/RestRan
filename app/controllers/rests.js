/**
 * Created by lijiahang on 14-8-13.
 */

var mongoose = require("mongoose");
var model = require("../models/rests");

exports.getDataFromDB = function(req, res){
    model.restModel.find(function(err, rests){
        if (err) console.error(err);
        console.log("DataBase Querying Success!");
        res.send(rests);
    });
};