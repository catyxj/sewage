
App.controller("waterQualityController",["$scope",function($scope){
	// Line chart
// ----------------------------------- 

	$scope.lineChart = function(){
		var ctx = document.getElementById("lineChart").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ['xxx区县（市）','xxx区县（市）','xxx区县（市）','xxx区县（市）','xxx区县（市）','xxx区县（市）','xxx区县（市）','xxx区县（市）'],
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
		        labels: ['xxx乡镇（街道）','xxx乡镇（街道）','xxx乡镇（街道）','xxx乡镇（街道）','xxx乡镇（街道）','xxx乡镇（街道）','xxx乡镇（街道）','xxx乡镇（街道）'],
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
		        labels: ['xxx村','xxx村','xxx村','xxx村','xxx村','xxx村','xxx村','xxx村'],
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
