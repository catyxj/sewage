//----------能耗统计----------

App.controller('energyController0', ['$scope',"colors", function($scope,colors ){
	  // Bar chart
// ----------------------------------- 

$scope.barChart = function(){		
		var ctx = document.getElementById("energyChart0").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
				datasets: [

		        {
		            backgroundColor : colors.byName('primary'),
		            data : [28,48,40,19,96,27,100,156,55,40],
		            label: '耗电量 单位 度'
		        }
				
				],
				labels: [
					"北仑区","镇海区","鄞州区","江北区","海曙区","奉化区","象山县","宁海县","慈溪市","余姚市"
				]
			},
		    options: {
		        responsive: true,
		        legend: {
		          display: true,
		          position: 'top',
		          boxWidth: 20,
		        }
		
		    }
		});
	}
	
$scope.barChart();
}]);








App.controller('countybarController', ['$scope',"colors", function($scope,colors ){
	  // Bar chart
// ----------------------------------- 

$scope.barChart = function(){		
		var ctx = document.getElementById("barChart2").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
				datasets: [

/*				{
		            backgroundColor : colors.byName('info'),
		            data : [65,59,90,81,56,55,40]
		        },*/
		        {
		            backgroundColor : colors.byName('primary'),
		            data : [28,48,40,19,96,27,100,156,55,40],
		            label: '耗电量 单位 度'
		        }
				
				],
				labels: [
					"白峰街道","梅山街道","春晓街道","新碶街道","霞浦街道","小港街道","郭巨街道","柴桥街道","大碶街道","大榭街道"
				]
			},
		    options: {
		        responsive: true,
		        legend: {
		          display: true,
		          position: 'top',
		          boxWidth: 20,
		        }
		
		    }
		});
	}
	
$scope.barChart();
}]);


App.controller('countybarController2', ['$scope',"colors", function($scope,colors ){
	  // Bar chart
// ----------------------------------- 

$scope.barChart = function(){		
		var ctx = document.getElementById("barChart2").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
				datasets: [

/*				{
		            backgroundColor : colors.byName('info'),
		            data : [65,59,90,81,56,55,40]
		        },*/
		        {
		            backgroundColor : colors.byName('primary'),
		            data : [28,48,40,19,96,27,100,156,55,40],
		            label: '耗电量 单位 度'
		        }
				
				],
				labels: [
					"白峰村","官庄村","勤山村","阳东村","司沿村","上阳村","下阳村","新峰村","神马村","门浦村"
				]
			},
		    options: {
		        responsive: true,
		        legend: {
		          display: true,
		          position: 'top',
		          boxWidth: 20,
		        }
		
		    }
		});
	}
	
$scope.barChart();
}]);

App.controller('countybarController3', ['$scope',"colors", function($scope,colors ){
	  // Bar chart
// ----------------------------------- 

$scope.barChart = function(){		
		var ctx = document.getElementById("barChart2").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
				datasets: [

		        {
		            backgroundColor : colors.byName('primary'),
		            data : [28,48,40,19,96,27,100,156,55,40],
		            label: '耗电量 单位 度'
		        }
				
				],
				labels: [
					"2017-09","2017-10","2017-11","2017-12","2018-01","2018-02","2018-03","2018-04","2018-05","2018-06"
				]
			},
		    options: {
		        responsive: true,
		        legend: {
		          display: true,
		          position: 'top',
		          boxWidth: 20,
		        }
		
		    }
		});
	}
	
$scope.barChart();
}]);