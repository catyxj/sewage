//dashboard
App.controller("dashboardController",["$scope","$rootScope","$http","$state","$filter",function($scope,$rootScope,$http,$state,$filter){
	$rootScope.app.showLoading = true;	
	$scope.defaultAddress = $rootScope.user.address;
//	$scope.defaultAddress = "宁波";
	
	//站点数
	$http.get("/Seom/fc/selectTotal").then(function(res){
		$scope.siteNum = res.data.zhan;
		$scope.villageNumber = res.data.zi;
        $scope.personnelNumber = res.data.ren;
		
		
	},function(err){
		
	});
	
	//故障数
	/*$http.get("/Seom/mrc/selectUnsolved").then(function(res){
		$scope.malfunction = res.data;
	},function(err){
		
	});*/
	
	
	
	
	$scope.waterInfo1 = 70;
	
	
	//站点搜索
	/*$http.get("/Seom/fc/selectRegion").then(function(res){  //   server/selectRegion.json
		var selectRegion = res.data;
		$scope.selectRegion = selectRegion;
		$scope.serachRegion = function(search){
			$scope.selectRegion = $filter('filter')(selectRegion, search);
		}
		
		for(var i=0; i<$scope.selectRegion.length; i++){
			switch($scope.selectRegion[i].facilityState){
				case "1":
					$scope.selectRegion[i].name = "建设";
					break;
				case "2":
					$scope.selectRegion[i].name = "运维";
					break;
				case "3":
					$scope.selectRegion[i].name = "大修";
					break;
				case "4":
					$scope.selectRegion[i].name = "重建";
					break;
				case "5":
					$scope.selectRegion[i].name = "报废";				
			}
		}
		

	},function(err){
		
	});*/
	
	





//天地图=====================================

//  server/map.json  
// 是否在线isItOnline：1在线0离线；告警re：1告警，0正常；故障fault：是否故障1故障，0无故障；
	
	goState=function(code){
		
		$state.go("app.county-equipment-detail",{code:code});
	}
	
	$http.get("/Seom/fc/selectAllFacilities").then(function(res){
				
		$rootScope.app.showLoading = false;	
		
		var map;
        var zoom = res.data.zoom;
        var mapData = res.data.json;
        
        
        //站点搜索--------------------
        var selectRegion = res.data.json;
		$scope.selectRegion = selectRegion;
		$scope.serachRegion = function(search){
			$scope.selectRegion = $filter('filter')(selectRegion, search);
			mapData = $scope.selectRegion;
			$scope.map();
			
		}
		
		for(var i=0; i<$scope.selectRegion.length; i++){
			switch($scope.selectRegion[i].facilityState){
				case "1":
					$scope.selectRegion[i].stateName = "建设";
					break;
				case "2":
					$scope.selectRegion[i].stateName = "运维";
					break;
				case "3":
					$scope.selectRegion[i].stateName = "大修";
					break;
				case "4":
					$scope.selectRegion[i].stateName = "重建";
					break;
				case "5":
					$scope.selectRegion[i].stateName = "报废";				
			}
		}


		//地图
        $scope.map = function(){
        	map = new T.Map('mapDiv');
        	if(mapData.length===0){
				map.centerAndZoom(new T.LngLat(121.56, 29.86), zoom);
				return;
			}
	        map.centerAndZoom(new T.LngLat(mapData[0].longitude_E, mapData[0].latitude_N), zoom);
	        
	        angular.forEach(mapData,function(data,index){
				var point = new T.LngLat(data.longitude_E,data.latitude_N);
	            
	            var icon;
	            if(data.isItOnline==1 && data.facilityState==="2"){
	            	data.isItOnline1="在线";
	            	icon = new T.Icon({
		                iconUrl: "app/img/map/mapicon2.png",
		                iconSize: new T.Point(25, 25),
		                iconAnchor: new T.Point(12, 23)
		            })
	            }else{
	            	data.isItOnline1="离线";
	            	icon = new T.Icon({
		                iconUrl: "app/img/map/mapicon4.png",
		                iconSize: new T.Point(25, 25),
		                iconAnchor: new T.Point(12, 23)
		            })
	            }
	            if(data.re==1){
	            	data.re1="告警";
	            	if(data.isItOnline==1 && data.facilityState==="2"){
	            		icon = new T.Icon({
			                iconUrl: "app/img/map/mapicon1.png",
			                iconSize: new T.Point(25, 25),
			                iconAnchor: new T.Point(12, 23)
			            })
	            	}
	            	
	            }else{
	            	data.re1="正常";
	            }
	            if(data.fault==1){
	            	data.fault1="故障";
	            	if(data.isItOnline==1 && data.facilityState==="2"){
	            		icon = new T.Icon({
			                iconUrl: "app/img/map/mapicon1.png",
			                iconSize: new T.Point(25, 25),
			                iconAnchor: new T.Point(12, 23)
			            })
	            	}
	            }else{
	            	data.fault1="无故障";
	            }
	            if(data.waterQuality<80){
	            	if(data.isItOnline==1 && data.facilityState==="2"){
	            		icon = new T.Icon({
			                iconUrl: "app/img/map/mapicon1.png",
			                iconSize: new T.Point(25, 25),
			                iconAnchor: new T.Point(12, 23)
			            })
	            	}
	            }
	            
	            var marker = new T.Marker(point, {icon: icon});// 创建标注
	            var content =  "<div>" +
	                "设施名称： " + "<span style='font-weight:bold; color:#5d9cec;'>" + data.name + "</span><br/>" +	               
	                "所在行政村： " + data.administrativeVillage + "<br/>" +	 
	                "在线状态： " + "<span>" + data.isItOnline1 + "</span><br/>" +
	                "告警状态： " + "<span>" + data.re1 + "</span><br/>" +
	                "故障状态： " + "<span>" + data.fault1 + "</span><br/>" +
	                "水质达标率： " + data.waterQuality + " % </span><br/> <div style='text-align:right;'>" +
	                "<a onClick='goState(&quot;"+ data.facilityCode +"&quot;);'>查看详情</a></div>"+
	                "</div>";
	            map.addOverLay(marker);
	            addClickHandler(content,marker,data.facilityCode);
			})
	        
	         function addClickHandler(content,marker,code){
	                marker.addEventListener("mouseover",function(e){
	                    openInfo(content,e)}
	                );
	                marker.addEventListener("click",function(e){
	                    goState(code);}
	                );
	            }
	         function openInfo(content,e){
	                var point = e.lnglat;
	                marker = new T.Marker(point);// 创建标注
	                var markerInfoWin = new T.InfoWindow(content,{offset:new T.Point(0,-20)}); // 创建信息窗口对象
	                map.openInfoWindow(markerInfoWin,point); //开启信息窗口
	            }
        }
        
		$scope.map();//地图初始化
		
	},function(err){
		
	})


		
	





	
/**=========================================================
 * Module: vmaps,js
 * jVector Maps support
 =========================================================*/
	
	/* $scope.seriesData = {
	    'CN-33': 138,   // 浙江
	  
	  };
	  
	  $scope.markersData = [
	    { latLng:[121, 29],  name:'NingBo City'},
	
	  ];	
	
	$scope.mapName = "cn_mill";*/
	
/*-------百度地图------------*/	
/*	var map = new BMap.Map("container");// 创建地图实例  

map.centerAndZoom("宁波", 11);// 初始化地图，设置中心点坐标和地图级别  
map.enableScrollWheelZoom(true);  //开启鼠标滚轮缩放
map.addControl(new BMap.NavigationControl());//开启左侧标尺工具
map.addControl(new BMap.MapTypeControl());//右上角地图类型
map.addControl(new BMap.ScaleControl());//左下角地图尺标
//map.enableContinuousZoom(); // 开启连续缩放效果

var point1 = new BMap.Point(121.9829107893,29.7909035932);// 创建点坐标  
var point2 = new BMap.Point(121.9834519127,29.8242360892);
var point3 = new BMap.Point(122.0001573897,29.8249272746);
var point4 = new BMap.Point(121.9871018426,29.8150895629);
var point5 = new BMap.Point(121.9990371438,29.8299256617);
var point6 = new BMap.Point(122.0145935722,29.8281734140);
var point7 = new BMap.Point(121.99654,29.884151);
var point8 = new BMap.Point(121.9845630227,29.8228471992);
var point9 = new BMap.Point(121.9803963527,29.8203471992);

var marker1 = new BMap.Marker(point1);
var marker2 = new BMap.Marker(point2);
var marker3 = new BMap.Marker(point3);
var marker4 = new BMap.Marker(point4);
var marker5 = new BMap.Marker(point5);
var marker6 = new BMap.Marker(point6);
var marker7 = new BMap.Marker(point7);
var marker8 = new BMap.Marker(point8);
var marker9 = new BMap.Marker(point9);

marker1.setTitle("北仑区白峰街道阳东村终端330206010209-04-030-D2");
marker2.setTitle("北仑区白峰街道阳东村终端330206010209-03-030-D2");
marker3.setTitle("北仑区白峰街道阳东村终端330206010209-02-030-D2");
marker4.setTitle("北仑区白峰街道阳东村终端330206010209-01-030-D2");
marker5.setTitle("北仑区白峰街道阳东村终端330206010209-05-030-D2");
marker6.setTitle("北仑区白峰街道阳东村终端330206010209-06-030-D2");
marker7.setTitle("北仑区白峰街道新峰村管网330206010204-01-000-00");
marker8.setTitle("北仑区白峰街道下阳村终端330206010207-02-036-D2");
marker9.setTitle("北仑区白峰街道下阳村终端330206010207-01-041-D2");

map.addOverlay(marker1);
map.addOverlay(marker2);
map.addOverlay(marker3);
map.addOverlay(marker4);
map.addOverlay(marker5);
map.addOverlay(marker6);
map.addOverlay(marker7);
map.addOverlay(marker8);
map.addOverlay(marker9);

marker1.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_yangdong");});
marker2.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_yangdong");});
marker3.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_yangdong");});
marker4.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_yangdong");});
marker5.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_yangdong");});
marker6.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_yangdong");});
marker7.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_xinfeng");});
marker8.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_xiayang");});
marker9.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_xiayang");});


var point10 = new BMap.Point(122.0048793434,29.8810418310);
var marker10 = new BMap.Marker(point10);
marker10.setTitle("北仑区白峰街道司沿村终端330206010205-02-200-D2");
map.addOverlay(marker10);
marker10.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_siyan");});

var point11 = new BMap.Point(121.9814911896,29.8381224756);
var marker11 = new BMap.Marker(point11);
marker11.setTitle("北仑区白峰街道勤山村终端330206010210-01-080-D2");
map.addOverlay(marker11);
marker11.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_qinshan");});

var point12 = new BMap.Point(122.0340009952,29.8777580698);
var marker12 = new BMap.Marker(point12);
marker12.setTitle("北仑区白峰街道官庄终端330206010202-03-030-D2");
map.addOverlay(marker12);
marker12.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_guanzhuang");});

var point13 = new BMap.Point(122.0512439540,29.8454169926);
var marker13 = new BMap.Marker(point13);
marker13.setTitle("北仑区白峰街道官庄终端330206010202-02-025-D2");
map.addOverlay(marker13);
marker13.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_guanzhuang");});

var point14 = new BMap.Point(122.0179009474,29.8783937828);
var marker14 = new BMap.Marker(point14);
marker14.setTitle("北仑区白峰街道官庄终端330206010202-01-020-D2");
map.addOverlay(marker14);
marker14.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_guanzhuang");});

var point15 = new BMap.Point(121.9814911896,29.8392335856);
var marker15 = new BMap.Marker(point15);
marker15.setTitle("北仑区白峰街道上阳村终端330206010208-01-046-D2");
map.addOverlay(marker15);
marker15.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_shangyang");});*/


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//moment
	moment.locale('zh-cn', {
	    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	    weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'YYYY/MM/DD',
	        LL : 'YYYY年M月D日',
	        LLL : 'YYYY年M月D日Ah点mm分',
	        LLLL : 'YYYY年M月D日ddddAh点mm分',
	        l : 'YYYY/M/D',
	        ll : 'YYYY年M月D日',
	        lll : 'YYYY年M月D日 HH:mm',
	        llll : 'YYYY年M月D日dddd HH:mm'
	    },
	    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	    meridiemHour: function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === '凌晨' || meridiem === '早上' ||
	                meridiem === '上午') {
	            return hour;
	        } else if (meridiem === '下午' || meridiem === '晚上') {
	            return hour + 12;
	        } else {
	            // '中午'
	            return hour >= 11 ? hour : hour + 12;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        var hm = hour * 100 + minute;
	        if (hm < 600) {
	            return '凌晨';
	        } else if (hm < 900) {
	            return '早上';
	        } else if (hm < 1130) {
	            return '上午';
	        } else if (hm < 1230) {
	            return '中午';
	        } else if (hm < 1800) {
	            return '下午';
	        } else {
	            return '晚上';
	        }
	    },
	    calendar : {
	        sameDay : '[今天]LT',
	        nextDay : '[明天]LT',
	        nextWeek : '[下]ddddLT',
	        lastDay : '[昨天]LT',
	        lastWeek : '[上]ddddLT',
	        sameElse : 'L'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
	    ordinal : function (number, period) {
	        switch (period) {
	            case 'd':
	            case 'D':
	            case 'DDD':
	                return number + '日';
	            case 'M':
	                return number + '月';
	            case 'w':
	            case 'W':
	                return number + '周';
	            default:
	                return number;
	        }
	    },
	    relativeTime : {
	        future : '%s内',
	        past : '%s前',
	        s : '几秒',
	        ss : '%d 秒',
	        m : '1 分钟',
	        mm : '%d 分钟',
	        h : '1 小时',
	        hh : '%d 小时',
	        d : '1 天',
	        dd : '%d 天',
	        M : '1 个月',
	        MM : '%d 个月',
	        y : '1 年',
	        yy : '%d 年'
	    },
	    week : {
	        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});
	
	$scope.month = moment().format("MMMM");
	$scope.week = moment().format("dddd");
	
	
	





}]);


//dashboard2
App.controller("dashboardController2",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	//排序
	$scope.orderType = "id";
	$scope.order = "";
	$scope.changeOrder = function(type){
		$scope.orderType = type;
		if($scope.order === ""){
			$scope.order ="-";
		}else{
			$scope.order ="";
		}
		$scope.datasource = $filter('orderBy')($scope.datasource, $scope.order + $scope.orderType);
	};
	
	
	
	
	
	
	//下拉菜单		
    $scope.placement = {
        options: [5,10,20],                   
    };
        
	
	$scope.selectPage = function(newPage){
		$scope.selectedpage = newPage;
	}
	$scope.setPageSize = function(pagesize){
		$scope.pageSize = pagesize;
		$scope.selectedpage = 1;
	}
	
	
	
	//搜索
	$scope.searchItem = function(){
		$scope.totalItems = $filter('filter')($scope.datasource, $scope.search).length;
	}
	
	
	$http.get("server/datatable.json").then(function(res){
		$scope.datasource = res.data;
		$scope.totalItems = $scope.datasource.length;
	},function(err){
		console.warn(err);
	})
			
	$scope.selectedpage = 1;
	$scope.pageSize = 5;
	
	
	
}]);



