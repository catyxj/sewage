
App.controller("waterQualityController",["$scope",function($scope){
	// Line chart
// ----------------------------------- 

	$scope.lineChart = function(){
		var ctx = document.getElementById("lineChart").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ["北仑区","镇海区","鄞州区","江北区","海曙区","奉化区","象山县","宁海县"],
		        datasets: [
			        {
			            label: '实际水质达标率（%）',
			            data: [65, 70, 80, 81, 77, 88, 84,90],
			            backgroundColor: 'rgba(114,102,186,0.5)',
						borderColor: 'rgba(114,102,186,1)',
			            borderWidth: 1
			        },
			        {
			            label: '水质平均达标率（%）',
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





App.controller("waterQualityController2",["$scope",function($scope){
	// Line chart
// ----------------------------------- 

	$scope.lineChart = function(){
		var ctx = document.getElementById("lineChart").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ["白峰街道","梅山街道","春晓街道","新碶街道","霞浦街道","小港街道","郭巨街道","柴桥街道"],
		        datasets: [
			        {
			            label: '实际水质达标率（%）',
			            data: [65, 70, 80, 81, 77, 88, 84,90],
			            backgroundColor: 'rgba(114,102,186,0.5)',
						borderColor: 'rgba(114,102,186,1)',
			            borderWidth: 1
			        },
			        {
			            label: '水质平均达标率（%）',
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




App.controller("waterQualityController3",["$scope",function($scope){
	// Line chart
// ----------------------------------- 

	$scope.lineChart = function(){
		var ctx = document.getElementById("lineChart").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ["白峰村","官庄村","勤山村","阳东村","司沿村","上阳村","下阳村","新峰村"],
		        datasets: [
			        {
			            label: '实际水质达标率（%）',
			            data: [65, 70, 80, 81, 77, 88, 84,90],
			            backgroundColor: 'rgba(114,102,186,0.5)',
						borderColor: 'rgba(114,102,186,1)',
			            borderWidth: 1
			        },
			        {
			            label: '水质平均达标率（%）',
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
