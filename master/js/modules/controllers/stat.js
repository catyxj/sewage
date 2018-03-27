/**=========================================================
 * Module: notifications.js
 * Initializes the notifications system
 =========================================================*/
App.controller('statController', ['$scope','$http',"colors", function($scope,$http,colors){

	$scope.project = [
		{ value: "32", type: "darkblue" },
        { value: "33", type: "blue" },
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

	$scope.pieChart = function(){		
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
		        responsive: true,
		        legend: {
		          display: true,
		          position: 'bottom',
		          boxWidth: 20,
		        }
		
		    }
		});
	}
	
	$scope.pieChart();

 /* $scope.pieData =[
        {
          value: 300,
          color: colors.byName('purple'),
          highlight: colors.byName('purple'),
          label: 'Purple'
        },
        {
          value: 40,
          color: colors.byName('yellow'),
          highlight: colors.byName('yellow'),
          label: 'Yellow'
        },
        {
          value: 120,
          color: colors.byName('info'),
          highlight: colors.byName('info'),
          label: 'Info'
        }
      ];

  $scope.pieOptions = {
    segmentShowStroke : true,
    segmentStrokeColor : '#fff',
    segmentStrokeWidth : 2,
    percentageInnerCutout : 0, // Setting this to zero convert a doughnut into a Pie
    animationSteps : 100,
    animationEasing : 'easeOutBounce',
    animateRotate : true,
    animateScale : false
  };*/




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
			            label: '水质达标情况（%）',
			            data: [65, 70, 80, 81, 77, 88, 84,90],
			            backgroundColor: 'rgba(114,102,186,0.5)',
						borderColor: 'rgba(114,102,186,1)',
			            borderWidth: 1
			        },
			        {
			            label: '水质达标率（%）',
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

/*$scope.lineData = {
      labels : ['January','February','March','April','May','June','July'],
      datasets : [
        {
          label: 'My First dataset',
          fillColor : 'rgba(114,102,186,0.2)',
          strokeColor : 'rgba(114,102,186,1)',
          pointColor : 'rgba(114,102,186,1)',
          pointStrokeColor : '#fff',
          pointHighlightFill : '#fff',
          pointHighlightStroke : 'rgba(114,102,186,1)',
          data : [rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor()]
        },
        {
          label: 'My Second dataset',
          fillColor : 'rgba(35,183,229,0.2)',
          strokeColor : 'rgba(35,183,229,1)',
          pointColor : 'rgba(35,183,229,1)',
          pointStrokeColor : '#fff',
          pointHighlightFill : '#fff',
          pointHighlightStroke : 'rgba(35,183,229,1)',
          data : [rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor()]
        }
      ]
    };


$scope.lineOptions = {
    scaleShowGridLines : true,
    scaleGridLineColor : 'rgba(0,0,0,.05)',
    scaleGridLineWidth : 1,
    bezierCurve : true,
    bezierCurveTension : 0.4,
    pointDot : true,
    pointDotRadius : 4,
    pointDotStrokeWidth : 1,
    pointHitDetectionRadius : 20,
    datasetStroke : true,
    datasetStrokeWidth : 2,
    datasetFill : true,
};*/





}]);



