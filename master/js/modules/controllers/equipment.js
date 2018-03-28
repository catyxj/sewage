/**=========================================================
 * Module: morris.js
 =========================================================*/

App.controller('equipmentController', ['$scope', '$timeout', 'colors','$http','$state', function ($scope, $timeout, colors,$http,$state) {


$scope.my_tree_handler = function(branch) {
	console.log(branch);
	if(branch.level===1){
		$state.go("app.equipment.equipment_1");
	}else if(branch.level===2){
		$state.go("app.equipment.equipment_3");
	}else if(!branch.level){
		$state.go("app.equipment.equipment_2.table_1");
	}
};

  // onSelect event handlers
  var apple_selected = function(branch) {
    $scope.output = "APPLE! : " + branch.label;
    return $scope.output;
  };

  var treedata_avm = [
    {
      label: 'xxxxx县',
      children: [
        {
          label: 'xxxx镇',
          data: {
            description: "man's best friend"
          },
          children: ['xxxx村', 'xxxx村', 'xxxx村']
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
        definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
        data_can_contain_anything: true
      },
      onSelect: function(branch) {
        $scope.output = "Vegetable: " + branch.data.definition;
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
    }, {
      label: 'xxxxx县',
      children: [
        {
          label: 'xxxx镇',
          children: ['xxxx村', 'xxxx村', 'xxxx村']
        }, {
          label: 'xxxx镇',
          children: ['xxxx村', 'xxxx村', 'xxxx村']
        }
      ]
    }
  ];
  
  
  $scope.my_data = treedata_avm;



  $scope.chartdata = [
      { y: "2011-2", a: 100, b: 90 },
      { y: "2011-3", a: 75,  b: 65 },
      { y: "2011-4", a: 50,  b: 40 },
      { y: "2011-5", a: 75,  b: 65 },
      { y: "2011-6", a: 50,  b: 40 },
      { y: "2011-7", a: 75,  b: 65 },
      { y: "2011-8", a: 100, b: 90 }
  ];
  $scope.linedata = [
      {y: '2011-2', data: 1000},  
      {y: '2011-3', data: 8000},  
      {y: '2011-4', data: 6000},  
      {y: '2011-5', data: 4000},  
      {y: '2012-1', data: 5000},  
      {y: '2012-2', data: 6000},  
      {y: '2012-3', data: 7000},  
  ];

  /* test data update
  $timeout(function(){
    $scope.chartdata[0].a = 50;
    $scope.chartdata[0].b = 50;
  }, 3000); */


  $scope.barOptions = {
    xkey: 'y',
    ykeys: ["a", "b"],
    labels: ["已安装", "故障率"],
    xLabelMargin: 2,
    barColors: [ colors.byName('info'), colors.byName('danger') ],
    resize: true
  };

  $scope.lineOptions = {
    xkey: 'y',
    ykeys: ["data"],
    labels: ["xxx镇"],
    lineColors: ["#31C0BE"],
    resize: true
  };

//$scope.areaOptions = {
//  xkey: 'y',
//  ykeys: ["a", "b"],
//  labels: ["已安装", "故障率"],
//  lineColors: [ colors.byName('purple'), colors.byName('info') ],
//  resize: true
//};



// LINE
  // ----------------------------------- 
  $http.get("server/chart/line.json").then(function(res){
		$scope.flowData = res.data;
//		var Color = ["#b2aaea","#7266ba","#554a96"];		
//		for (i = 0 ; i<$scope.barStackeData.length; i++) {
//			$scope.barStackeData[i].color = Color[i]; 
//		};
		console.log($scope.flowData);
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
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
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






App.controller('equipController2', ['$scope', '$timeout', 'colors','$http', function ($scope, $timeout, colors,$http) {


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
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
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


