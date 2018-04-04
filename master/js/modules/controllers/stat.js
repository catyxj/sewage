/**=========================================================
 * Module: notifications.js
 * Initializes the notifications system
 =========================================================*/
App.controller('statController', ['$scope','$http',"colors", function($scope,$http,colors){

	$scope.project = [
		{ value: "65", type: "darkblue" },
        { value: "35", type: "lightblue" }
    ];
    $scope.funds = [
		{ value: "60", type: "darkorange" },
        { value: "40", type: "lightorange" }
    ];


// BAR STACKED
 // ----------------------------------- 

	$http.get("server/chart/barstacked.json").then(function(res){
		$scope.barStackeData = res.data;
		var Color = ["#b2aaea","#7266ba","#554a96"];		
		for (i = 0 ; i<$scope.barStackeData.length; i++) {
			$scope.barStackeData[i].color = Color[i]; 
		};
		console.log($scope.barStackeData);
	})

	  $scope.barStackedOptions = {
	      series: {
	          stack: true,
	          bars: {
	              align: 'center',
	              lineWidth: 0,
	              show: true,
	              barWidth: 0.6,
	              fill: 0.9
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
	          tickColor: '#fcfcfc',
	          mode: 'categories'
	      },
	      yaxis: {
	          min: 0,
	          max: 200, // optional: use it for a clear represetation
	          position: ($scope.app.layout.isRTL ? 'right' : 'left'),
	          tickColor: '#eee'
	      },
	      shadowSize: 0
	  };




	
// Pie chart
// ----------------------------------- 

/*	$scope.pieChart = function(){		
		var ctx = document.getElementById("pieChart").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'pie',
		    data: {
				datasets: [{
					data: [
						80,
						20
					],
					backgroundColor: [
						'#7266ba',
						'#ffef2b'
					],
				}],
				labels: [
					'安装完成（台）',
					'等待安装（台）'
				]
			},
		    options: {
//		        responsive: true,
		        legend: {
		          display: true,
		          position: 'bottom',
		          boxWidth: 20,
		        }
		
		    }
		});
	}
	
	$scope.pieChart();*/

var options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        colors: ['#7266ba',
				'#ffef2b'],
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
            headerFormat: '{point.key}<br>',
            pointFormat: '{point.y} 台 <b>{point.percentage:.1f}%</b>'
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
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '设备分布情况',
            data: [
                ['安装完成',   160],
                ['等待安装',       40]                
            ]
        }]
        };
        // 图表初始化函数
        var chart = Highcharts.chart('statPieChart', options);




// Line chart
// ----------------------------------- 

	$scope.lineChart = function(){
		var ctx = document.getElementById("lineChart").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ['2018-08','2018-09','2018-10','2018-11','2018-12','2018-01','2018-02','2018-03'],
		        datasets: [
			        {
			            label: '总体水质平均达标情况（%）',
			            data: [65, 70, 80, 81, 77, 88, 84,90],
			            backgroundColor: 'rgba(114,102,186,0.5)',
						borderColor: 'rgba(114,102,186,1)',
			            borderWidth: 1
			        },
			        {
			            label: '水质达标要求（%）',
			            data: [70, 70, 70, 70, 70, 70,70,70],
			            backgroundColor: 'rgba(35,183,229,0.5)',
						borderColor: 'rgba(35,183,229,1)',
			            borderWidth: 1
			        },
		        ]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:false
		                }
		            }]
		        }
		    }
		});

	}
	
	$scope.lineChart();




}]);



