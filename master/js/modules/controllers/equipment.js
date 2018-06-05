/**=========================================================
 * Module: 设备信息
 =========================================================*/

App.controller('equipmentController', ['$scope',"$rootScope" ,'$timeout', 'colors','$http','$state', function ($scope,$rootScope, $timeout, colors,$http,$state) {

	$scope.my_tree = {};

$scope.my_tree_handler = function(branch) {

	$scope.output = branch.label;
	
	switch(branch.level){
		case 1:
			$state.go("app.equipment.equipment_1",{area:$scope.output});
			break;
		case 2:
			$state.go("app.equipment.equipment_3",{area:$scope.output});
			break;	
		case 3:
			$state.go("app.county-equipment",{area:$scope.output});
			break;	
			
	}	

};

  // onSelect event handlers
  /*var apple_selected = function(branch) {
    
  };*/

  
  	$scope.my_data = angular.copy($rootScope.my_county);
  	
  	
  	//链接跳转	
	$scope.goequip = function(area){
		var b = {}
		for(var i = 0; i<$scope.my_data.length;i++){
			if($scope.my_data[i].label.indexOf(area)!==-1){
				b = $scope.my_data[i];
				break;
			}
			if($scope.my_data[i].children){
				for(var j=0; j<$scope.my_data[i].children.length; j++){
					if($scope.my_data[i].children[j].label.indexOf(area)!==-1){
						b = $scope.my_data[i].children[j];
						break;
					}
					if($scope.my_data[i].children[j].children){
						for (var n = 0; n<$scope.my_data[i].children[j].children.length; n++) {
							if($scope.my_data[i].children[j].children[n].label.indexOf(area)!==-1){
								b = $scope.my_data[i].children[j].children[n];
								break;
							}
						}
					}
				}
			}
			
		}
		$scope.my_tree.select_branch(b);
						
	}
  	


}]);



App.controller('equipController1', ['$scope', '$stateParams', '$timeout', 'colors','$http', function ($scope,$stateParams, $timeout, colors,$http) {
	
	console.log($stateParams.area);
	$scope.area = $stateParams.area;
	
	//设备故障率------------
	$http.get("server/chart/equipmal.json").then(function(res){
		$scope.chartdata = res.data;
	})
  /*$scope.chartdata = [
      { y: "白峰街道", a: 100, b: 20 },
      { y: "梅山街道", a: 75,  b: 15 },
      { y: "春晓街道", a: 50,  b: 4 },
      { y: "霞浦街道", a: 75,  b: 6 },
      { y: "新碶街道", a: 50,  b: 4 },
      { y: "小港街道", a: 75,  b: 15 },
      { y: "郭巨街道", a: 100, b: 19 }
  ];*/



	  $scope.barOptions = {
	    xkey: 'area',
	    ykeys: ["a", "b"],
	    labels: ["已安装", "故障率"],
	    xLabelMargin: 2,
	    barColors: [ colors.byName('info'), colors.byName('danger') ],
	    resize: true
	  };

	
	
	
	//设备巡检率
	var options1 = {
        chart: {
            type: 'spline'
        },
        title: {
            text: ''
        },
        exporting:{
        	buttons:{
        		contextButton:{
        			enabled:false,
        		}
        	}
        },
		credits:{
		     enabled: false // 禁用版权信息
		},    
		colors:["#31C0BE"],
		xAxis: {
	        categories: ['2017/11', '2017/12', '2018/1', '2018/2', '2018/3', '2018/4', '2018/5', '2018/6']
	    },
	    yAxis: {
	        title: {
	            text: ''
	        }
	    },
	    legend:{
	    	enabled:false
	    },
        tooltip: {
            headerFormat: '{point.x}<br>',
            pointFormat: ' <b>{point.y}%</b>',
            style: {                      // 文字内容相关样式
		        color: "#31C0BE",
		        fontSize: "12px"
		    }
        },
       
        plotOptions: {       	
	        spline: {
	            marker: {
	                lineColor: '#31C0BE',
	                lineWidth: 1
	            }
	        }
	    },
        series: [{
            name: '设备巡检率',
            data: [
                24, 20, 29, 29, 32, 30, 38, 40
            ]
        }]
        };
    // 图表初始化函数
    var chart = Highcharts.chart('inspection', options1);








//设备分布情况
	$http.get("server/chart/distributed.json").then(function(res){
		$scope.distribution = res.data;
		var options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        exporting:{
        	buttons:{
        		contextButton:{
        			enabled:false,
        		}
        	}
        },
		credits:{
		     enabled: false // 禁用版权信息
		},        
        tooltip: {
//          headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
            	minSize: 180,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    distance: 10,                   
                    format: '<span>{point.name}</span>: {point.percentage:.1f} %',
                    style: {
                        color: "#666666",
                        fontSize: "12px",
                        fontWeight: "normal",
                        textOutline: "1px 1px contrast"
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '设备分布情况',
            data: $scope.distribution
        }]
        };
    // 图表初始化函数
    var chart = Highcharts.chart('pieChart2', options);
	},function(err){})

	


}]);



//----------test---------
App.controller('equipController2', ['$scope', '$timeout', 'colors','$http', function ($scope, $timeout, colors,$http) {

	
	//设备故障率

$scope.chartdata2 = [
      { area: "白峰村", a: 80, b: 9 },
      { area: "官庄村", a: 75,  b: 6 },
      { area: "司沿村", a: 50,  b: 4 },
      { area: "新峰村", a: 75,  b: 6 },
      { area: "阳东村", a: 50,  b: 4 },
      { area: "勤山村", a: 75,  b: 6 },
      { area: "上阳村", a: 100, b: 9 }
  ];


  $scope.barOptions = {
    xkey: 'area',
    ykeys: ["a", "b"],
    labels: ["已安装", "故障率"],
    xLabelMargin: 2,
    barColors: [ colors.byName('info'), colors.byName('danger') ],
    resize: true
  };

//设备巡检率
	var options1 = {
        chart: {
            type: 'spline'
        },
        title: {
            text: ''
        },
        exporting:{
        	buttons:{
        		contextButton:{
        			enabled:false,
        		}
        	}
        },
		credits:{
		     enabled: false // 禁用版权信息
		},    
		colors:["#31C0BE"],
		xAxis: {
	        categories: ['白峰村', '官庄村', '司沿村', '新峰村', '阳东村', '勤山村', '上阳村', '下阳村']
	    },
	    yAxis: {
	        title: {
	            text: ''
	        }
	    },
	    legend:{
	    	enabled:false
	    },
        tooltip: {
            headerFormat: '{point.x}<br>',
            pointFormat: ' <b>{point.y}%</b>',
            style: {                      // 文字内容相关样式
		        color: "#31C0BE",
		        fontSize: "12px"
		    }
        },
       
        plotOptions: {       	
	        spline: {
	            marker: {
	                lineColor: '#31C0BE',
	                lineWidth: 1
	            }
	        }
	    },
        series: [{
            name: '设备巡检率',
            data: [
                24, 14, 21, 29, 32, 30, 38, 40
            ]
        }]
        };
        // 图表初始化函数
        var chart = Highcharts.chart('xunjianlv', options1);






//设备分布情况
	var options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        exporting:{
        	buttons:{
        		contextButton:{
        			enabled:false,
        		}
        	}
        },
		credits:{
		     enabled: false // 禁用版权信息
		},        
        tooltip: {
//          headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
            	minSize: 180,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    distance: 10,                   
                    format: '<span>{point.name}</span>: {point.percentage:.1f} %',
                    style: {
                        color: "#666666",
                        fontSize: "12px",
                        fontWeight: "normal",
                        textOutline: "1px 1px contrast"
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '设备分布情况',
            data: [
                ['白峰村',   25.0],
                ['官庄村',       26.8],
                {
                    name: '司沿村',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['新峰村',    8.5],
                ['阳东村',     6.2],
                ['勤山村',   17],
                ['上阳村',   13]
            ]
        }]
        };
        // 图表初始化函数
        var chart = Highcharts.chart('pieChart2', options);

//piechart
/*$scope.pieChart = function(){		
		var ctx = document.getElementById("pieChart2").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'pie',
		    data: {
				datasets: [{
					data: [
						200,
						50,
						100,
						150,
						20,
						30,
					],
					backgroundColor: [
						'#7266ba',
						'#ffef2b',						
						'rgba(35,183,229,1)',
						'#2b957a',
						'#ff902b',
						'#f05050'
					],
				}],
				labels: [
					'xxx村',
					'xx镇',
					'xx镇',
					'xx镇',
					'xx镇',
					'xx镇',
				]
			},
		    options: {
		        responsive: true,
		        legend: {
		          display: true,
		          position: 'bottom',
		          boxWidth: 10,
		        }
		
		    }
		});
	}
	
$scope.pieChart();*/

}]);


//日期选择
App.controller('equipDateCtrl', function($scope) {
	$scope.dat = new Date();
	$scope.format = "yyyy/MM/dd";
	$scope.altInputFormats = ['yyyy/M!/d!'];

	$scope.popup1 = {
		opened: false
	};
	$scope.open1 = function() {
		$scope.popup1.opened = true;
	};

	$scope.popup2 = {
		opened: false
	};
	$scope.open2 = function() {
		$scope.popup2.opened = true;
	};

});



//运行记录
App.controller("equipOperaCtrl",["$scope","$stateParams","$http",function($scope,$stateParams,$http){
	
	$scope.back = function(){
		history.go(-1);
	}
	
	console.log($stateParams.area);
	
	$scope.refreshEquip = function(){
		$http.get("server/selectVillage.json").then(function(res){
			$scope.opera = res.data;

		},function(err){
			
		})
	}
	
	$scope.refreshEquip();
	
}])












