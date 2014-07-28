var restran = angular.module("restran", []);

restran.directive("logo", function(){
	return {restrict: "E", templateUrl: "src/original/logo.html"};
});

restran.directive("promptLine", function(){
	return {restrict: "E", templateUrl: "src/original/prompt-line.html"};
});

restran.directive("main", function(){
	return {restrict: "E", templateUrl: "src/original/main.html"};
});

restran.directive("row", function(){
	return {restrict: "E", templateUrl: "src/original/row.html"};
});

restran.directive("footing", function(){
	return {restrict: "E", templateUrl: "src/original/footing.html"};
});

restran.directive("modal", function(){
	return {restrict: "E", templateUrl: "src/original/modal.html"};
});







var items = [{name:"苏氏牛肉面",lat:"116.469316",lng:"39.962848",addr:"北京朝阳区霄云路(近鹏润大厦)",tel:"(010)83799802"},
		    {name:"吉野家",lat:"116.469371",lng:"39.962958",addr:"北京朝阳区霄云路35号(国航大厦对面)",tel:"(010)64669915"},
		    {name:"DQ",lat:"116.468894",lng:"39.962792",addr:"北京市朝阳区霄云路35号（6-5）原海华城中餐厅一层",tel:"(010)64669095"},
		    {name:"红薯地瓜坊",lat:"116.470456",lng:"39.964023",addr:"北京朝阳区霄云路霞光里30号院1号楼(近国航大厦)",tel:"(010)64632968"},
		    {name:"周黑鸭",lat:"116.465013",lng:"39.963933",addr:"北京朝阳区东三环中心24号B2楼BHG超市熟食区",tel:"4001717917"},
		    {name:"永丰饺子馆",lat:"116.470596",lng:"39.964113",addr:"朝阳区霄云路霞光里30号院1号楼1楼(近鹏润大厦)",tel:"18701091767"},
		    {name:"驴肉火烧",lat:"116.468168",lng:"39.963836",addr:"朝阳区霞光里1号(移动公司三元桥营业厅东侧)",tel:"N/A"},
		    {name:"晓林鲜果",lat:"116.473922",lng:"39.965302",addr:"霄云路甲26号海航大厦底商HiShop超市内	",tel:"13520738752"},
		    {name:"711便利店",lat:"116.471082",lng:"39.964617",addr:"北京朝阳区霄云路霞光里30号院5号楼1楼",tel:"(010)64616914"},
		    {name:"桂林米粉",lat:"116.468867",lng:"39.962509",addr:"北京朝阳区三元桥霄云路36号国航大厦对面",tel:"(010)64688815"},
		    {name:"肯德基",lat:"116.471391",lng:"39.964839",addr:"朝阳区霄云路27号中国庆安大厦首层西侧",tel:"(010)64608554"},
		    {name:"乐伯香瓮韩国烤肉店",lat:"116.471402",lng:"39.965191",addr:"北京朝阳区霄云路27号中国庆安大厦1楼(近肯德基)",tel:"(010)84518098"},
		    {name:"香草香草",lat:"116.471535",lng:"39.965018",addr:"北京朝阳区东三环霄云路27号庆安大厦2楼",tel:"010-64685665"},
		    {name:"东来顺",lat:"116.473143",lng:"39.966421",addr:"朝阳区霄云路15号(女人街西侧200米路北)",tel:"010-64610844"},
		    {name:"杭州小笼包",lat:"116.470909",lng:"39.964797",addr:"朝阳区麦子店西街霞光里30号院同仁堂旁",tel:"N/A"},
		    {name:"Kro's Nest Pizza",lat:"116.463272",lng:"39.937321",addr:"北京朝阳区工体北路4号院机电研究院内(近三里屯)",tel:"(010)65535253"},
		    {name:"Coco茶饮",lat:"116.473753",lng:"39.962129",addr:"女人街步行街美食街Y15号",tel:"13811905388"},
		    {name:"山西风味小吃",lat:"116.474391",lng:"39.967742",addr:"北京市朝阳区",tel:"N/A"},
		    {name:"兰州拉面",lat:"116.468232",lng:"39.962571",addr:"北京朝阳区三元东桥霄云路35号(鹿港小镇院内左转,北京现代汽车大厦对面) ",tel:"(010)64668826"},
		    {name:"万福烤鸭",lat:"116.472774",lng:"39.966228",addr:"霄云路7日酒店院内（北京现代对面）",tel:"(010)51399015"},
		    {name:"巫山烤全鱼",lat:"116.482165",lng:"39.960622",addr:"亮马桥路59号",tel:"010-64615726,15810635858"},
		    {name:"永和大王",lat:"116.468738",lng:"39.962398",addr:"北京朝阳区霄云路35号院(现代汽车大厦对面)",tel:"(010)64628075"},
		    {name:"香猪坊韩国料理",lat:"116.468706",lng:"39.962357",addr:"朝阳区霄云路35号(现代汽车大厦北侧)",tel:"(010)57172118"},
		    {name:"面香山西刀削面",lat:"116.468228",lng:"39.963878",addr:"朝阳区霄云路38号现代汽车大厦对面",tel:"N/A"},
		    {name:"金凤成祥",lat:"116.468577",lng:"39.962253",addr:"北京朝阳区霄云路35号(现代汽车大厦对面)",tel:"18600167216"},
		    {name:"大粥锅",lat:"116.46852",lng:"39.962212",addr:"北京朝阳区霄云路35号",tel:"(010)64631389,(010)64628184"},
		    {name:"重庆麻辣烫",lat:"116.465399",lng:"39.965322",addr:"朝阳区三元桥霞光里1号(迪阳大厦旁)",tel:"13051952206,13621274330"},
		    {name:"砂锅米线",lat:"116.46853",lng:"39.96403",addr:"霞光里66号远洋新干线东侧胡同小吃街(近霄云路)",tel:"(010)52866304"},
		    {name:"羊蝎子大棒骨",lat:"116.461693",lng:"39.972684",addr:"朝阳区曙光里8号楼(太阳宫地铁C口方向不到50米)",tel:"(010)64669557"},
		    {name:"传奇酸辣粉",lat:"116.46663",lng:"39.961334",addr:"朝阳区东三环北路丙2号天元港中心三层(三元大厦东北角)",tel:"(010)84417068"},
		    {name:"沙县小吃",lat:"",lng:"",addr:"N/A",tel:"N/A"},
		    {name:"麦多馅饼",lat:"116.467859",lng:"39.962025",addr:"北京朝阳区三元桥霞光里35号院底商（现代汽车对面）距离亮马桥站约744米",tel:"N/A"},
		    {name:"苏皇食堂",lat:"116.467896",lng:"39.961707",addr:"霞光里35号（现代汽车大厦斜对面）",tel:"(010)64656898"},
	     	    {name:"合利屋快餐",lat:"116.473277",lng:"39.964887",addr:"霄云路26号鹏润大厦地下1层103",tel:"(010)84580899"},
		    {name:"黄焖鸡米饭",lat:"116.468256",lng:"39.963795",addr:"朝阳区远洋新干线美食街（近远洋公馆）",tel:"(010)53662726"},
		    {name:"百年卤煮",lat:"116.470987",lng:"39.963829",addr:"霄云路32号",tel:"13011880325"},
		    {name:"食立方",lat:"116.471345",lng:"39.964106",addr:"北京朝阳区霄云路32号(鹏润大厦西)",tel:"(010)64682199"},
		    {name:"山西刀削面",lat:"116.471382",lng:"39.96414",addr:"朝阳区三元桥东桥霄云路32号(距离三元桥站约760米)",tel:"N/A"},
		    {name:"霄云羊杂割",lat:"116.468265",lng:"39.962108",addr:"北京市朝阳区霄云路8(农业银行旁)",tel:"(010)53599311,15201544336"}];
var index = 0;
var timer = 0;
var isActive = false;
var theButton = document.getElementById("roll");
var thePrompt = document.getElementById("thePrompt");
function roll(){
		//To Do: Tell whether the queue is rolling, and start or stop the rolling respectively while changing the active state of the button.
		if (!isActive)
		{
			theButton.setAttribute("class", "btn btn-danger btn-lg btn-block active");
			isActive = true;
			theButton.innerHTML="Click to Stop!!!";
			setTimer();
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

function setTimer() {
		$(".item").animate({top:"-=50"}, 50);
		$("#" + (index % 4)).animate({top:"+=200"}, 0);					
		$("#" + (index % 4)).html(items[(index + 4) % 39].name);
		index++;
		theItem = document.getElementById("" + (index % 4 + 1) % 4);
		timer = setTimeout('setTimer()', 60);
}

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
