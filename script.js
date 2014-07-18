var items = [{name:"苏氏牛肉面",logo:"",lat:"",lng:"",addr:""},
			{name:"吉野家",logo:"",lat:"",lng:"",addr:""},
			{name:"DQ",logo:"",lat:"",lng:"",addr:""},
		    {name:"红薯地瓜坊",logo:"",lat:"",lng:"",addr:""},
		    {name:"周黑鸭",logo:"",lat:"",lng:"",addr:""},
		    {name:"饺子馆",logo:"",lat:"",lng:"",addr:""},
		    {name:"驴火",logo:"",lat:"",lng:"",addr:""},
		    {name:"水果干果店",logo:"",lat:"",lng:"",addr:""},
		    {name:"711",logo:"",lat:"",lng:"",addr:""},
		    {name:"桂林粉",logo:"",lat:"",lng:"",addr:""},
		    {name:"肯德基",logo:"",lat:"",lng:"",addr:""},
		    {name:"韩国烤肉",logo:"",lat:"",lng:"",addr:""},
		    {name:"香草香草",logo:"",lat:"",lng:"",addr:""},
		    {name:"东来顺",logo:"",lat:"",lng:"",addr:""},
		    {name:"杭州小笼包",logo:"",lat:"",lng:"",addr:""},
		    {name:"Kro's Nest Pizza",logo:"",lat:"",lng:"",addr:""},
		    {name:"Coco茶饮",logo:"",lat:"",lng:"",addr:""},
		    {name:"陕西风味",logo:"",lat:"",lng:"",addr:""},
		    {name:"兰州拉面",logo:"",lat:"",lng:"",addr:""},
		    {name:"万福烤鸭",logo:"",lat:"",lng:"",addr:""},
		    {name:"巫山烤全鱼",logo:"",lat:"",lng:"",addr:""},
		    {name:"永和大王",logo:"",lat:"",lng:"",addr:""},
		    {name:"香猪坊韩国料理",logo:"",lat:"",lng:"",addr:""},
		    {name:"面香",logo:"",lat:"",lng:"",addr:""},
		    {name:"金凤成翔",logo:"",lat:"",lng:"",addr:""},
		    {name:"大粥锅",logo:"",lat:"",lng:"",addr:""},
		    {name:"重庆麻辣烫",logo:"",lat:"",lng:"",addr:""},
		    {name:"砂锅米线",logo:"",lat:"",lng:"",addr:""},
		    {name:"羊蝎子大棒骨",logo:"",lat:"",lng:"",addr:""},
		    {name:"传奇酸辣粉",logo:"",lat:"",lng:"",addr:""},
		    {name:"沙县小吃",logo:"",lat:"",lng:"",addr:""},
		    {name:"麦多馅饼",logo:"",lat:"",lng:"",addr:""},
	     	{name:"苏皇肉夹馍酸奶",logo:"",lat:"",lng:"",addr:""},
	     	{name:"合利屋",logo:"",lat:"",lng:"",addr:""},
		    {name:"黄焖鸡米饭",logo:"",lat:"",lng:"",addr:""},
		    {name:"百年卤煮",logo:"",lat:"",lng:"",addr:""},
		    {name:"食立方",logo:"",lat:"",lng:"",addr:""},
		    {name:"山西刀削面",logo:"",lat:"",lng:"",addr:""},
		    {name:"霄云羊杂割",logo:"",lat:"",lng:"",addr:""}];
	
var index = 0;
var timer = 0;
var isActive = false;
var theButton = document.getElementById("roll");
var theItem;
var theItemIndex;
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
