//dashboard
App.controller("dashboardController",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
	
/**=========================================================
 * Module: vmaps,js
 * jVector Maps support
 =========================================================*/
	
	 $scope.seriesData = {
	    'CN-33': 138,   // 浙江
	  
	  };
	  
	  $scope.markersData = [
	    { latLng:[121, 29],  name:'NingBo City'},
	
	  ];	
	
	$scope.mapName = "cn_mill";
	
/*-------百度地图------------*/	
	var map = new BMap.Map("container");// 创建地图实例  

map.centerAndZoom("宁波", 12);// 初始化地图，设置中心点坐标和地图级别  
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

marker1.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});
marker2.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});
marker3.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});
marker4.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});
marker5.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});
marker6.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});
marker7.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});
marker8.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});
marker9.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});


var point10 = new BMap.Point(122.0048793434,29.8810418310);
var marker10 = new BMap.Marker(point10);
marker10.setTitle("北仑区白峰街道司沿村终端330206010205-02-200-D2");
map.addOverlay(marker10);
marker10.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});

var point11 = new BMap.Point(121.9814911896,29.8381224756);
var marker11 = new BMap.Marker(point11);
marker11.setTitle("北仑区白峰街道勤山村终端330206010210-01-080-D2");
map.addOverlay(marker11);
marker11.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});

var point12 = new BMap.Point(122.0340009952,29.8777580698);
var marker12 = new BMap.Marker(point12);
marker12.setTitle("北仑区白峰街道官庄终端330206010202-03-030-D2");
map.addOverlay(marker12);
marker12.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});

var point13 = new BMap.Point(122.0512439540,29.8454169926);
var marker13 = new BMap.Marker(point13);
marker13.setTitle("北仑区白峰街道官庄终端330206010202-02-025-D2");
map.addOverlay(marker13);
marker13.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});

var point14 = new BMap.Point(122.0179009474,29.8783937828);
var marker14 = new BMap.Marker(point14);
marker14.setTitle("北仑区白峰街道官庄终端330206010202-01-020-D2");
map.addOverlay(marker14);
marker14.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});

var point15 = new BMap.Point(121.9814911896,29.8392335856);
var marker15 = new BMap.Marker(point15);
marker15.setTitle("北仑区白峰街道上阳村终端330206010208-01-046-D2");
map.addOverlay(marker15);
marker15.addEventListener("click", function showInfo(){ window.open("http://www.baidu.com");});


	
	
	
	
	
	
	
	
	
	
	
	
	
	
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



