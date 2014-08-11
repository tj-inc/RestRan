var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

app.listen(3000);

console.log("server is running on 3000!");