var mainControl = function($scope) {

    var restFilter = "";
    $scope.items = dataArray;
    var index = 0;
    var timer = 0;
    var firstClick = true;
    var thePrompt = document.getElementById("thePrompt");
    var l = 0;

    $scope.roll = function () {
        $scope.setId();
        var myButton = $("#roll");

        if (firstClick) {
            myButton.html("Stop");
            firstClick = false;
            myButton.removeClass("btn-success").addClass("btn-warning");
            $scope.setTimer();
        } else {
            myButton.addClass("disabled").removeClass("btn-warning").addClass("btn-danger").html("Done");
            clearTimeout(timer);
            $("#" + (index + 1) % l).removeClass("btn-info").addClass("btn-success").removeClass("disabled");
            $("#thePrompt").html("<strong>Well done!</strong> Now you can click on the green button to see the details of your restaurant.");
        }
    };

    $scope.setId = function () {
        var first = $("#queue").children().first();
        for (var i = 0; i < l; i++) {
            first.attr("id", i);
            first = first.next();
        }
    };

    $scope.setTimer = function () {
        $(".item").animate({top: "-=50"}, 50);
        var command = "+=" + (l * 50);
        $("#" + (index % l)).animate({top: command}, 0);
        index++;
        timer = setTimeout(function () {
            $scope.setTimer()
        }, 60);
    };

    $scope.moreInfo = function () {
        var num = (index + 1) % l;
        $("#restName").html($scope.filteredList[num].name);

        //Baidu Map API
        var map = new BMap.Map("container");
        map.centerAndZoom(new BMap.Point($scope.filteredList[num].lat, $scope.filteredList[num].lng), 13);
        map.enableScrollWheelZoom();
        var marker = new BMap.Marker(new BMap.Point($scope.filteredList[num].lat, $scope.filteredList[num].lng));
        map.addOverlay(marker);
        var licontent = "<b>" + $scope.filteredList[num].name + "</b><br>";
        licontent += "<span><strong>地址：</strong>" + $scope.filteredList[num].addr + "</span><br>";
        licontent += "<span><strong>电话：</strong>" + $scope.filteredList[num].tel + "</span><br>";
        licontent += "<span class=\"input\"><strong></strong><input class=\"outset\" type=\"text\" name=\"origin\" value=\"北京站\"/><input class=\"outset-but\" type=\"button\" value=\"公交\" ng-click=\"gotobaidu(1)\" /><input class=\"outset-but\" type=\"button\" value=\"驾车\" ng-click=\"gotobaidu(2)\"/><a class=\"gotob\" href=\"url=\"http://api.map.baidu.com/direction?destination=latlng:" + marker.getPosition().lat + "," + marker.getPosition().lng + "|name:" + $scope.filteredList[num].name + "®ion=北京" + "&amp;output=html\" target=\"_blank\"></a></span>";
        var hiddeninput = "<input type=\"hidden\" value=\"" + '北京' + "\" name=\"region\" /><input type=\"hidden\" value=\"html\" name=\"output\" /><input type=\"hidden\" value=\"driving\" name=\"mode\" /><input type=\"hidden\" value=\"latlng:" + marker.getPosition().lat + "," + marker.getPosition().lng + "|name:" + $scope.filteredList[num].name + "\" name=\"destination\" />";
        var content1 = "<form id=\"gotobaiduform\" action=\"http://api.map.baidu.com/direction\" target=\"_blank\" method=\"get\">" + licontent + hiddeninput + "</form>";
        var opts1 = { width: 300 };

        var infoWindow = new BMap.InfoWindow(content1, opts1);
        marker.openInfoWindow(infoWindow);
        $(marker).on('click', function () {
            marker.openInfoWindow(infoWindow);
        });
    };

    $scope.gotobaidu = function (type) {
        if ($.trim($("input[name=origin]").val()) == "") {
            alert("请输入起点！");
            return;
        } else {
            if (type == 1) {
                $("input[name=mode]").val("transit");
                $("#gotobaiduform")[0].submit();
            } else if (type == 2) {
                $("input[name=mode]").val("driving");
                $("#gotobaiduform")[0].submit();
            }
        }
    };

    $scope.nextStep = function () {
        $("#theFilter").addClass("hidden");
        $(".StepTwo").removeClass("hidden");
        $scope.$watch('filteredList', function () {
            l = $scope.filteredList.length;
        }, true);
    };

};