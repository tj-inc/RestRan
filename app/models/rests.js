/**
 * Created by lijiahang on 14-8-13.
 */

var mongoose = require("mongoose");

var restSchema = mongoose.Schema({
    "chinese": Boolean,
    "name": String,
    "lat": String,
    "lng": String,
    "addr": String,
    "tel": String
});

exports.restModel = mongoose.model("restrans", restSchema);