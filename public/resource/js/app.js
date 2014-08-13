//Fetch the JSON data of restaurants
var dataArray;
$.getJSON("rest-list.json", function(data){dataArray = data;});

//Define the Angular Module
var restran = angular.module("restran", []);