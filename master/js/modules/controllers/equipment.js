/**=========================================================
 * Module: morris.js
 =========================================================*/

App.controller('equipmentController', ['$scope', '$timeout', 'colors', function ($scope, $timeout, colors) {

  $scope.chartdata = [
      { y: "xxx镇", a: 100, b: 90 },
      { y: "xx镇", a: 75,  b: 65 },
      { y: "xxx镇", a: 50,  b: 40 },
      { y: "xxx镇", a: 75,  b: 65 },
      { y: "xxxx镇", a: 50,  b: 40 },
      { y: "xxx1镇", a: 75,  b: 65 },
      { y: "xxx镇", a: 100, b: 90 }
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

//$scope.donutdata = [
//  {label: "Download Sales", value: 12},
//  {label: "In-Store Sales",value: 30},
//  {label: "Mail-Order Sales", value: 20}
//];
//
//$scope.donutOptions = {
//  colors: [ colors.byName('danger'), colors.byName('yellow'), colors.byName('warning') ],
//  resize: true
//};

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









}]);



App.controller('equipController1', ['$scope', '$timeout', 'colors', function ($scope, $timeout, colors) {
	
	
//piechart
$scope.pieChart = function(){		
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
		          display: false,
		          position: 'bottom',
		          boxWidth: 20,
		        }
		
		    }
		});
	}
	
$scope.pieChart();

}]);