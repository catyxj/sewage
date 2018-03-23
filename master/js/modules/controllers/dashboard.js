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
	
	
	
/*	
	var ctx = document.getElementById("myChart").getContext('2d');		
	var myChart = new Chart(ctx, {
	    type: 'line',
	    data: {
	        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	        datasets: [{
	            label: 'colors of Votes',
	            data: [12, 19, 3, 5, 2, 3],
	            backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
//	            backgroundColor: [
//	                'rgba(255, 99, 132, 0.2)',
//	                'rgba(54, 162, 235, 0.2)',
//	                'rgba(255, 206, 86, 0.2)',
//	                'rgba(75, 192, 192, 0.2)',
//	                'rgba(153, 102, 255, 0.2)',
//	                'rgba(255, 159, 64, 0.2)'
//	            ],
//	            borderColor: [
//	                'rgba(255,99,132,1)',
//	                'rgba(54, 162, 235, 1)',
//	                'rgba(255, 206, 86, 1)',
//	                'rgba(75, 192, 192, 1)',
//	                'rgba(153, 102, 255, 1)',
//	                'rgba(255, 159, 64, 1)'
//	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});*/




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



