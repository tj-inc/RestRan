//Logo part of webpage
restran.directive("logo", function(){
    return {restrict: "E", templateUrl: "./resource/partials/logo.html"};
});

//Prompt part of webpage
restran.directive("promptLine", function(){
    return {restrict: "E", templateUrl: "./resource/partials/prompt-line.html"};
});

//Main part of webpage
restran.directive("main", function(){
    return {restrict: "E",
        templateUrl: "./resource/partials/main.html",
        controller: mainControl};
});

//Footing part of webpage
restran.directive("footing", function(){
    return {restrict: "E", templateUrl: "./resource/partials/footing.html"};
});

//Hidden Modal of webpage
restran.directive("modal", function(){
    return {restrict: "E", templateUrl: "./resource/partials/modal.html"};
});