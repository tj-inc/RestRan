
	
	var items = [{name:"苏氏牛肉面",logo:""},
		     {name:"吉野家",logo:""},
		     {name:"DQ",logo:""},
		     {name:"红薯地瓜坊",logo:""},
		     {name:"周黑鸭",logo:""},
		     {name:"饺子馆",logo:""},
		     {name:"驴火",logo:""},
		     {name:"水果干果店",logo:""},
		     {name:"711",logo:""},
		     {name:"桂林粉",logo:""},
		     {name:"肯德基",logo:""},
		     {name:"韩国烤肉",logo:""},
		     {name:"香草香草",logo:""},
		     {name:"东来顺",logo:""},
		     {name:"杭州小笼包",logo:""},
		     {name:"kro's nest pizza",logo:""},
		     {name:"coco茶饮",logo:""},
		     {name:"陕西风味",logo:""},
		     {name:"兰州拉面",logo:""},
		     {name:"万福烤鸭",logo:""},
		     {name:"巫山烤全鱼",logo:""},
		     {name:"永和大王",logo:""},
		     {name:"香猪坊韩国料理",logo:""},
		     {name:"面香",logo:""},
		     {name:"金凤成翔",logo:""},
		     {name:"大粥锅",logo:""},
		     {name:"重庆麻辣烫",logo:""},
		     {name:"砂锅米线",logo:""},
		     {name:"羊蝎子大棒骨",logo:""},
		     {name:"传奇酸辣粉",logo:""},
		     {name:"沙县小吃",logo:""},
		     {name:"麦多馅饼",logo:""},
		     {name:"苏皇肉夹馍酸奶",logo:""},
		     {name:"合利屋",logo:""},
		     {name:"黄焖鸡米饭",logo:""},
		     {name:"百年卤煮",logo:""},
		     {name:"食立方",logo:""},
		     {name:"山西刀削面",logo:""},
		     {name:"霄云羊杂割",logo:""}];
	
	var index = 0;
	var timer;
	
	function start(){
		//To Do: Write the function to move the options and change the options as well
		document.getElementById("start").setAttribute("class", "button hide");
		document.getElementById("stop").setAttribute("class", "button");
		setTimer();
	}
	
	function stop(){
		document.getElementById("start").setAttribute("class", "button");
		document.getElementById("stop").setAttribute("class", "button hide");
		clearTimeout(timer);
	}
	
	function setTimer() {
		$(".item").animate({top:"-=60"}, 100);
		$("#" + (index % 4)).animate({top:"+=240"}, 0);					
		$("#" + (index % 4)).html(items[(index + 4) % 39].name);
		index++;
		timer = setTimeout('setTimer()',100);
	}
	
