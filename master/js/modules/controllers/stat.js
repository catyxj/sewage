/**=========================================================
 * Module: notifications.js
 * Initializes the notifications system
 =========================================================*/
App.controller('statController', ['$scope','$http',"colors", function($scope,$http,colors){

	//受益户数
	$http.get("/Seom/tbc/ph").then(function(res){
		var project = res.data;	
		var alreadybene =100*parseInt(project.alreadyAreaBeneficiary)/parseInt(project.shouldAreaBeneficiary);
		var unbene = 100*(parseInt(project.shouldAreaBeneficiary) - parseInt(project.alreadyAreaBeneficiary))/parseInt(project.shouldAreaBeneficiary);
		$scope.project = [
			{ value: alreadybene, type: "darkblue" },
	        { value: unbene, type: "lightblue" }
	    ];
	    $scope.phAddress = project.address;
//	    console.log(project);
	},function(err){
		
	})
	
	
	//资金进度
	$http.get("/Seom/msrc/paymentMoney").then(function(res){
		var fund = res.data;	
		var f1 = parseInt(fund.paymentMoney);
		var f2 = parseInt(fund.NOpaymentMoney);
		var f0 = f1 + f2;
		var pay =100*f1/f0;
		var nopay = 100*f2/f0;
	    $scope.funds = [
			{ value: pay, type: "darkorange" },
	        { value: nopay, type: "lightorange" }
	    ];
	    $scope.fundsAddress = fund.address;
	    console.log($scope.funds);
	},function(err){
		
	})
	
    


// 耗能统计
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




	
// 设备统计
// ----------------------------------- 
	
	$http.get("/Seom/equipmentc/selectInstall").then(function(res){
		$scope.installNum = res.data;
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
	                ['安装完成',   parseInt($scope.installNum.install)],
	                ['等待安装',   parseInt($scope.installNum.installNO)]                
	            ]
	        }]
        };
	    // 图表初始化函数
	    var chart = Highcharts.chart('statPieChart', options);
	},function(err){
		
	})
	




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



