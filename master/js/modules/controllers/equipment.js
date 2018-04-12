/**=========================================================
 * Module: morris.js
 =========================================================*/

App.controller('equipmentController', ['$scope', '$timeout', 'colors','$http','$state', function ($scope, $timeout, colors,$http,$state) {

	

$scope.my_tree_handler = function(branch) {
		
	if(branch.level===1){
		$state.go("app.equipment.equipment_1");
	}else if(branch.level===2){
		$state.go("app.equipment.equipment_3");
	}else if(!branch.level){
		$state.go("app.county-equipment");
	}
};

  // onSelect event handlers
  var apple_selected = function(branch) {
    $scope.output = branch.data.description;
	$state.go($scope.output);
  };

  var treedata_avm = [
    {
      label: '北仑区',
      data: {
            description: "app.equipment.equipment_1"
          },
          onSelect: apple_selected,
      children: [
        {
          label: '白峰街道',
          data: {
            description: "app.equipment.equipment_3"
          },
          onSelect: apple_selected,
          children: [
          {label:'白峰村',
          data: {
            description: "app.county-equipment_baifeng"
          },
          onSelect: apple_selected,
          },
          {label:'官庄村',
          data: {
            description: "app.county-equipment_guanzhuang"
          },
          onSelect: apple_selected,
          },
          {label:'司岩村',
          data: {
            description: "app.county-equipment_siyan"
          },
          onSelect: apple_selected,
         },
         {label:'新峰村',
          data: {
            description: "app.county-equipment_xinfeng"
          },
          onSelect: apple_selected,
         },
         {label:'阳东村',
          data: {
            description: "app.county-equipment_yangdong"
          },
          onSelect: apple_selected,
         },
         {label:'勤山村',
          data: {
            description: "app.county-equipment_qinshan"
          },
          onSelect: apple_selected,
         },
         {label:'上阳村',
          data: {
            description: "app.county-equipment_shangyang"
          },
          onSelect: apple_selected,
         },
         {label:'下阳村',
          data: {
            description: "app.county-equipment_xiayang"
          },
          onSelect: apple_selected,
         }
         ]
        }, {
          label: 'xxxx镇',
          data: {
            description: "Felis catus"
          },
          children: ['xxxx村', 'xxxx村', 'xxxx村']
        }, {
          label: 'xxxx镇',
          data: {
            description: "hungry, hungry"
          },
          children: ['xxxx村', 'xxxx村', 'xxxx村']
        }, {
          label: 'xxxx镇',
          children: ['xxxx村', 'xxxx村', 'xxxx村']
        }
      ]
    }, {
      label: 'xxxxx县',
      data: {
        definition: "",
        data_can_contain_anything: true
      },
      onSelect: function(branch) {
        $scope.output = "" + branch.data.definition;
        return $scope.output;
      },
      children: [
        {
          label: 'xxxx镇',
          children: ['xxxx村', 'xxxx村', 'xxxx村']
        }, {
          label: 'xxxx镇',
          children: [
            {
              label: 'xxxx村',
              onSelect: apple_selected
            }, {
              label: 'xxxx村',
              onSelect: apple_selected
            }, {
              label: 'xxxx村',
              onSelect: apple_selected
            }
          ]
        }
      ]
    }
  ];
  
  
  $scope.my_data = treedata_avm;



  $scope.chartdata = [
      { y: "xxx镇", a: 100, b: 90 },
      { y: "xxx镇", a: 75,  b: 65 },
      { y: "xx镇", a: 50,  b: 40 },
      { y: "xxx镇", a: 75,  b: 65 },
      { y: "xxx镇", a: 50,  b: 40 },
      { y: "xx镇", a: 75,  b: 65 },
      { y: "xxx镇", a: 100, b: 90 }
  ];
/*$scope.linedata = [
      {y: '2011-2', data: 1000},  
      {y: '2011-3', data: 8000},  
      {y: '2011-4', data: 6000},  
      {y: '2011-5', data: 4000},  
      {y: '2012-1', data: 5000},  
      {y: '2012-2', data: 6000},  
      {y: '2012-3', data: 7000},  
];*/

$scope.chartdata2 = [
      { y: "xxx村", a: 80, b: 90 },
      { y: "xxx村", a: 75,  b: 65 },
      { y: "xx村", a: 50,  b: 40 },
      { y: "xxx村", a: 75,  b: 65 },
      { y: "xxx村", a: 50,  b: 40 },
      { y: "xx村", a: 75,  b: 65 },
      { y: "xxx村", a: 100, b: 90 }
  ];


  $scope.barOptions = {
    xkey: 'y',
    ykeys: ["a", "b"],
    labels: ["已安装", "故障率"],
    xLabelMargin: 2,
    barColors: [ colors.byName('info'), colors.byName('danger') ],
    resize: true
  };

/*  $scope.lineOptions = {
    xkey: 'y',
    ykeys: ["data"],
    labels: ["xxx镇"],
    lineColors: ["#31C0BE"],
    resize: true
  };*/




// LINE
  // ----------------------------------- 
  $http.get("server/chart/line.json").then(function(res){
		$scope.flowData = res.data;

	})

  $scope.flowOptions = {
      series: {
          lines: {
              show: true,
              fill: 0.01
          },
          points: {
              show: true,
              radius: 4
          }
      },
      grid: {
          borderColor: '#eee',
          borderWidth: 1,
          hoverable: true,
          backgroundColor: '#fcfcfc'
      },
      tooltip: true,
      tooltipOpts: {
          content: function (label, x, y) { return x + ' : ' + y; }
      },
      xaxis: {
          tickColor: '#eee',
          mode: 'categories'
      },
      yaxis: {
          position: ($scope.app.layout.isRTL ? 'right' : 'left'),
          tickColor: '#eee'
      },
      shadowSize: 0
  };


//datepicker
$scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.initDate = new Date('2016-15-20');
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];



}]);



App.controller('equipController1', ['$scope', '$timeout', 'colors','$http', function ($scope, $timeout, colors,$http) {

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
	        categories: ['xx镇', 'xx镇', 'xx镇', 'xx镇', 'xxx镇', 'xxx镇', 'xxx镇', 'xxx镇']
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
            pointFormat: ' <b>{point.y}</b>',
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
                24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434
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
                ['xx镇',   25.0],
                ['xxx镇',       26.8],
                {
                    name: 'x镇',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['xxxx镇',    8.5],
                ['xxx镇',     6.2],
                ['xxx镇',   0.7]
            ]
        }]
        };
        // 图表初始化函数
        var chart = Highcharts.chart('pieChart2', options);


}]);




App.controller('equipController2', ['$scope', '$timeout', 'colors','$http', function ($scope, $timeout, colors,$http) {

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
	        categories: ['xx村', 'xxx村', 'xx村', 'xx村', 'xxx村', 'xxx村', 'xxx村', 'xxx村']
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
            pointFormat: ' <b>{point.y}</b>',
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
                24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434
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
                ['xx镇',   25.0],
                ['xxx镇',       26.8],
                {
                    name: 'x镇',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['xxxx镇',    8.5],
                ['xxx镇',     6.2],
                ['xxx镇',   0.7]
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


App.controller('equipDateCtrl', function ($scope) {
             $scope.dat = new Date();
             $scope.format = "yyyy/MM/dd";
             $scope.altInputFormats = ['yyyy/M!/d!'];
 
             $scope.popup1 = {
                 opened: false
             };
             $scope.open1 = function () {
                 $scope.popup1.opened = true;
             };
             
             $scope.popup2 = {
                 opened: false
             };
             $scope.open2 = function () {
                 $scope.popup2.opened = true;
             };
             
             
         });