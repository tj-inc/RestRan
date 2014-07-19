var items = [{name:"苏氏牛肉面",logo:"",lat:"116.469316",lng:"39.962848",addr:"北京朝阳区霄云路(近鹏润大厦)",tel:"(010)83799802"},
			{name:"吉野家",logo:"",lat:"116.469371",lng:"39.962958",addr:"北京朝阳区霄云路35号(国航大厦对面)",tel:"(010)64669915"},
			{name:"DQ",logo:"",lat:"116.468894",lng:"39.962792",addr:"北京市朝阳区霄云路35号（6-5）原海华城中餐厅一层",tel:"(010)64669095"},
		    {name:"红薯地瓜坊",logo:"",lat:"116.470456",lng:"39.964023",addr:"北京朝阳区霄云路霞光里30号院1号楼(近国航大厦)",tel:"(010)64632968"},
		    {name:"周黑鸭",logo:"",lat:"116.465013",lng:"39.963933",addr:"北京朝阳区东三环中心24号B2楼BHG超市熟食区",tel:"4001717917"},
		    {name:"永丰饺子馆",logo:"",lat:"116.470596",lng:"39.964113",addr:"朝阳区霄云路霞光里30号院1号楼1楼(近鹏润大厦)",tel:"18701091767"},
		    {name:"驴肉火烧",logo:"",lat:"116.468168",lng:"39.963836",addr:"朝阳区霞光里1号(移动公司三元桥营业厅东侧)",tel:""},
		    {name:"晓林鲜果",logo:"",lat:"116.473922",lng:"39.965302",addr:"霄云路甲26号海航大厦底商HiShop超市内	",tel:"13520738752"},
		    {name:"711便利店",logo:"",lat:"116.471082",lng:"39.964617",addr:"北京朝阳区霄云路霞光里30号院5号楼1楼",tel:"(010)64616914"},
		    {name:"桂林米粉",logo:"",lat:"116.468867",lng:"39.962509",addr:"北京朝阳区三元桥霄云路36号国航大厦对面",tel:"(010)64688815"},
		    {name:"肯德基",logo:"",lat:"116.471391",lng:"39.964839",addr:"朝阳区霄云路27号中国庆安大厦首层西侧",tel:"(010)64608554"},
		    {name:"香猪坊韩国烤肉（霄云路店）",logo:"",lat:"116.468706",lng:"39.962357",addr:"朝阳区霄云路35号(现代汽车大厦北侧)",tel:"(010)57172118"},
		    {name:"香草香草",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"东来顺",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"杭州小笼包",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"Kro's Nest Pizza",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"Coco茶饮",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"陕西风味",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"兰州拉面",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"万福烤鸭",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"巫山烤全鱼",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"永和大王",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"香猪坊韩国料理",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"面香",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"金凤成翔",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"大粥锅",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"重庆麻辣烫",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"砂锅米线",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"羊蝎子大棒骨",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"传奇酸辣粉",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"沙县小吃",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"麦多馅饼",logo:"",lat:"",lng:"",addr:"",tel:""},
	     	{name:"苏皇肉夹馍酸奶",logo:"",lat:"",lng:"",addr:"",tel:""},
	     	{name:"合利屋",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"黄焖鸡米饭",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"百年卤煮",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"食立方",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"山西刀削面",logo:"",lat:"",lng:"",addr:"",tel:""},
		    {name:"霄云羊杂割",logo:"",lat:"",lng:"",addr:"",tel:""}];
	
var index = 0;
var timer = 0;
var isActive = false;
var theButton = document.getElementById("roll");
var theItem;
function roll(){
		//To Do: Tell whether the queue is rolling, and start or stop the rolling respectively while changing the active state of the button.
		if (!isActive)
		{
			theButton.setAttribute("class", "btn btn-danger btn-lg btn-block active");
			isActive = true;
			$('.item').attr("class", "item btn btn-info btn-lg btn-block disabled");
			theButton.innerHTML="Click to Stop!!!";
			setTimer();
		}
		else
		{
			theButton.setAttribute("class", "btn btn-warning btn-lg btn-block");
			isActive = false;
			clearTimeout(timer);
			theItem.setAttribute("class", "item btn btn-success btn-lg btn-block");
			theButton.innerHTML="Click to Start!!!";
		}
}

function setTimer() {
		$(".item").animate({top:"-=50"}, 50);
		$("#" + (index % 4)).animate({top:"+=200"}, 0);					
		$("#" + (index % 4)).html(items[(index + 4) % 39].name);
		index++;
		theItem = document.getElementById("" + (index % 4 + 1) % 4);
		timer = setTimeout('setTimer()', 50);
}

function moreInfo(num) {
	if (index!=0)
	{
		num = (index + 1) % 39 /* Why plus 1, not 2??? */
		document.getElementById("myModalLabel").innerHTML = "Congratulations!";
		$("#modalText").show();
	}
	else
	{
		document.getElementById("myModalLabel").innerHTML = "Information";
		$("#modalText").hide();
	}
	document.getElementById("restName").innerHTML = items[num].name;
	document.getElementById("restLogo").setAttribute("src",items[num].logo);
//Baidu Map API
	var map = new BMap.Map("container");
	map.centerAndZoom(new BMap.Point(items[num].lat,items[num].lng), 19);
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
