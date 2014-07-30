var dataArray;
$.getJSON("src/rest-list.json", function(data){dataArray = data;});

var restran = angular.module("restran", []);

restran.directive("logo", function(){
	return {restrict: "E", templateUrl: "src/original/logo.html"};
});

restran.directive("promptLine", function(){
	return {restrict: "E", templateUrl: "src/original/prompt-line.html"};
});

restran.directive("main", function(){
	return {restrict: "E", 
			templateUrl: "src/original/main.html",
			controller: function(){
//-----------------------------------------------------------------------------------------------------------------------------				
var myself = this;
this.items = dataArray;
var index = 0;
var timer = 0;
var firstClick = true;
var thePrompt = document.getElementById("thePrompt");
var l = this.items.length;

this.roll = function(){
	myself.setId();
	var myButton = $("#roll");

	if (firstClick) {
		myButton.html("Stop");
		firstClick = false;
		myButton.removeClass("btn-success");
		myButton.addClass("btn-warning");
		myself.setTimer();
	} else {
		myButton.addClass("disabled");
		myButton.removeClass("btn-warning");
		myButton.addClass("btn-danger");
		myButton.html("Done");
		clearTimeout(timer);
		$("#" + (index + 1)).removeClass("btn-info").addClass("btn-success");
		$("#thePrompt").html("<strong>Well done!</strong> Now you can click on the green button to see the details of your restaurant.");
	}
};

this.setId = function(){
	var first = $("#queue").children().first();
	for (var i = 0; i < l; i++) {
		first.attr("id", i);
		first = first.next();
	}
};

this.setTimer = function(){
	$(".item").animate({top:"-=50"}, 50);
	var command = "+=" + (39 * 50);
	$("#" + (index % l)).animate({top:command}, 0);
	index++;
	timer = setTimeout(function(){myself.setTimer()},60)
};

this.moreInfo = function(num) {
	if (index!=0) num = (index + 1) % 39;
	
	document.getElementById("restName").innerHTML = items[num].name;
	
	//Baidu Map API
	var map = new BMap.Map("container");
	map.centerAndZoom(new BMap.Point(items[num].lat,items[num].lng), 13);
	map.enableScrollWheelZoom();
	var marker=new BMap.Marker(new BMap.Point(items[num].lat,items[num].lng));
	map.addOverlay(marker);
	var licontent="<b>"+items[num].name+"</b><br>";
		licontent+="<span><strong>地址：</strong>"+items[num].addr+"</span><br>";
		licontent+="<span><strong>电话：</strong>"+items[num].tel+"</span><br>";
		licontent+="<span class=\"input\"><strong></strong><input class=\"outset\" type=\"text\" name=\"origin\" value=\"北京站\"/><input class=\"outset-but\" type=\"button\" value=\"公交\" ng-click=\"mCtrl.gotobaidu(1)\" /><input class=\"outset-but\" type=\"button\" value=\"驾车\"  ng-click=\"mCtrl.gotobaidu(2)\"/><a class=\"gotob\" href=\"url=\"http://api.map.baidu.com/direction?destination=latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:"+items[num].name+"®ion=北京"+"&amp;output=html\" target=\"_blank\"></a></span>";
	var hiddeninput="<input type=\"hidden\" value=\""+'北京'+"\" name=\"region\" /><input type=\"hidden\" value=\"html\" name=\"output\" /><input type=\"hidden\" value=\"driving\" name=\"mode\" /><input type=\"hidden\" value=\"latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:"+items[num].name+"\" name=\"destination\" />";
	var content1 ="<form id=\"gotobaiduform\" action=\"http://api.map.baidu.com/direction\" target=\"_blank\" method=\"get\">" + licontent +hiddeninput+"</form>"; 
	var opts1 = { width: 300 };

	var infoWindow = new BMap.InfoWindow(content1, opts1);
	marker.openInfoWindow(infoWindow);
	marker.addEventListener('click',function(){ marker.openInfoWindow(infoWindow);});
};

this.gotobaidu = function(type){
    if($.trim($("input[name=origin]").val())=="")
    {
        alert("请输入起点！");
        return;
    }else{
        if(type==1)
        {
            $("input[name=mode]").val("transit");
            $("#gotobaiduform")[0].submit();
        }else if(type==2)
        {    
            $("input[name=mode]").val("driving");        
            $("#gotobaiduform")[0].submit();
        }
    }
}; 
//-----------------------------------------------------------------------------------------------------------------------------
			},
			controllerAs: "mCtrl"};
});

restran.directive("footing", function(){
	return {restrict: "E", templateUrl: "src/original/footing.html"};
});

restran.directive("modal", function(){
	return {restrict: "E", templateUrl: "src/original/modal.html"};
});  