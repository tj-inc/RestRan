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
var items = this.items = [];
var index = 0;
var timer = 0;
var isActive = false;
var theItem;
var theButton = document.getElementById("roll");
var thePrompt = document.getElementById("thePrompt");
$.getJSON("src/rest-list.json", function(data){items = data;});

this.roll = function(){
		//To Do: Tell whether the queue is rolling, and start or stop the rolling respectively while changing the active state of the button.
		if (!isActive)
		{
			theButton.setAttribute("class", "btn btn-danger btn-lg btn-block active");
			isActive = true;
			theButton.innerHTML="Click to Stop!!!";
			myself.setTimer();
		}
		else
		{
			theButton.setAttribute("class", "btn btn-warning btn-lg btn-block disabled");
			isActive = false;
			clearTimeout(timer);
			theItem.setAttribute("class", "item btn btn-success btn-lg btn-block");
			document.getElementById("thePrompt").style.visibility="visible";
			thePrompt.innerHTML="<strong>Well done!</strong> Now you can click on the green button to see the details of your restaurant.";
			theButton.innerHTML="Click to Start!!!";
		}
}

this.setTimer = function(){
	$(".item").animate({top:"-=50"}, 50);
	$("#" + (index % 4)).animate({top:"+=200"}, 0);					
	$("#" + (index % 4)).html(items[(index + 4) % 39].name);
	index++;
	theItem = document.getElementById("" + (index % 4 + 1) % 4);
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
		licontent+="<span class=\"input\"><strong></strong><input class=\"outset\" type=\"text\" name=\"origin\" value=\"北京站\"/><input class=\"outset-but\" type=\"button\" value=\"公交\" onclick=\"gotobaidu(1)\" /><input class=\"outset-but\" type=\"button\" value=\"驾车\"  onclick=\"gotobaidu(2)\"/><a class=\"gotob\" href=\"url=\"http://api.map.baidu.com/direction?destination=latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:"+items[num].name+"®ion=北京"+"&amp;output=html\" target=\"_blank\"></a></span>";
	var hiddeninput="<input type=\"hidden\" value=\""+'北京'+"\" name=\"region\" /><input type=\"hidden\" value=\"html\" name=\"output\" /><input type=\"hidden\" value=\"driving\" name=\"mode\" /><input type=\"hidden\" value=\"latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:"+items[num].name+"\" name=\"destination\" />";
	var content1 ="<form id=\"gotobaiduform\" action=\"http://api.map.baidu.com/direction\" target=\"_blank\" method=\"get\">" + licontent +hiddeninput+"</form>"; 
	var opts1 = { width: 300 };

	var infoWindow = new BMap.InfoWindow(content1, opts1);
	marker.openInfoWindow(infoWindow);
	marker.addEventListener('click',function(){ marker.openInfoWindow(infoWindow);});
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

/*
function moreInfo(num) {
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
		licontent+="<span class=\"input\"><strong></strong><input class=\"outset\" type=\"text\" name=\"origin\" value=\"北京站\"/><input class=\"outset-but\" type=\"button\" value=\"公交\" onclick=\"gotobaidu(1)\" /><input class=\"outset-but\" type=\"button\" value=\"驾车\"  onclick=\"gotobaidu(2)\"/><a class=\"gotob\" href=\"url=\"http://api.map.baidu.com/direction?destination=latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:"+items[num].name+"®ion=北京"+"&amp;output=html\" target=\"_blank\"></a></span>";
	var hiddeninput="<input type=\"hidden\" value=\""+'北京'+"\" name=\"region\" /><input type=\"hidden\" value=\"html\" name=\"output\" /><input type=\"hidden\" value=\"driving\" name=\"mode\" /><input type=\"hidden\" value=\"latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:"+items[num].name+"\" name=\"destination\" />";
	var content1 ="<form id=\"gotobaiduform\" action=\"http://api.map.baidu.com/direction\" target=\"_blank\" method=\"get\">" + licontent +hiddeninput+"</form>"; 
	var opts1 = { width: 300 };

	var infoWindow = new BMap.InfoWindow(content1, opts1);
	marker.openInfoWindow(infoWindow);
	marker.addEventListener('click',function(){ marker.openInfoWindow(infoWindow);});
};


*/
//Baidu Map API
function gotobaidu(type)
{
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
}   