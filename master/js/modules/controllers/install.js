App.controller("installController",['$scope',"$http","$stateParams",function($scope,$http,$stateParams){
	console.log($stateParams.area);
	
	$scope.refresh = function(){
		$http.post("/Seom/equipmentc/select",{area:$stateParams.area}).then(function(res){
			$scope.equipment = res.data;
			
			$scope.areas = [];
			$scope.uninstalls = [];
			$scope.installs = [];
			for (var i=0; i<$scope.equipment.length; i++) {
				$scope.areas[i] = $scope.equipment[i].region;
				$scope.uninstalls[i] = parseInt($scope.equipment[i].shouldInstalled) - parseInt($scope.equipment[i].alreadyInstalled);
				$scope.installs[i] = parseInt($scope.equipment[i].alreadyInstalled);
				$scope.equipment[i].completion = (100*$scope.installs[i]/parseInt($scope.equipment[i].shouldInstalled)).toFixed(2);
				}
			
			
			// 图表配置
	        var options = {
	            chart: {
	                type: 'column'                          //指定图表的类型，默认是折线图（line）
	            },
	            title: {
	                text: '设备安装' ,                // 标题
	                align:"left",
	                style:{fontWeight: 'bold',fontSize: '16px'}
	            },
	            colors: ['#9DC2D3','#387AA3'] ,
	            xAxis: {
	                categories: $scope.areas   // x 轴分类
	            },
	            yAxis: {
	                title: {
	                    text: ''                // y 轴标题
	                }
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
				legend: {
		            align: 'right',	            
		            verticalAlign: 'top',	
		            floating: true,
		        },
		        tooltip: {
			         headerFormat: '{point.key}<br>',
		            pointFormat: '{point.series.name}  {point.y}台 <br/> <b>{point.percentage:.1f}%</b>'
		        }, 
	            plotOptions: {
		            column: {
		                stacking: 'normal'
		            }
		        },
	            series: [{                              // 数据列
	                name: '未安装',                        // 数据列名
	                data: $scope.uninstalls                    // 数据
	            }, {
	                name: '已安装',
	                data: $scope.installs
	            }]
	        };
	        // 图表初始化函数
	        var chart = Highcharts.chart('install', options);
	        
		},function(err){
			
		})
	}
	
	$scope.refresh();
 	
}])



App.controller("installController2",['$scope',"$http","$stateParams",function($scope,$http,$stateParams){
	
	$scope.back = function(){
		history.go(-1);
	}
	
	
	$scope.refresh = function(){
		$http.post("/Seom/equipmentc/select",{area:$stateParams.area}).then(function(res){
			$scope.equipment = res.data;
			
			$scope.areas = [];
			$scope.uninstalls = [];
			$scope.installs = [];
			for (var i=0; i<$scope.equipment.length; i++) {
				$scope.areas[i] = $scope.equipment[i].region;
				$scope.uninstalls[i] = parseInt($scope.equipment[i].shouldInstalled) - parseInt($scope.equipment[i].alreadyInstalled);
				$scope.installs[i] = parseInt($scope.equipment[i].alreadyInstalled);
				$scope.equipment[i].completion = (100*$scope.installs[i]/parseInt($scope.equipment[i].shouldInstalled)).toFixed(2);
				}
			
			
			// 图表配置
	        var options = {
	            chart: {
	                type: 'column'                          //指定图表的类型，默认是折线图（line）
	            },
	            title: {
	                text: '设备安装' ,                // 标题
	                align:"left",
	                style:{fontWeight: 'bold',fontSize: '16px'}
	            },
	            colors: ['#9DC2D3','#387AA3'] ,
	            xAxis: {
	                categories: $scope.areas   // x 轴分类
	            },
	            yAxis: {
	                title: {
	                    text: ''                // y 轴标题
	                }
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
				legend: {
		            align: 'right',	            
		            verticalAlign: 'top',	
		            floating: true,
		        },
		        tooltip: {
			         headerFormat: '{point.key}<br>',
		            pointFormat: '{point.series.name}  {point.y}台 <br/> <b>{point.percentage:.1f}%</b>'
		        }, 
	            plotOptions: {
		            column: {
		                stacking: 'normal'
		            }
		        },
	            series: [{                              // 数据列
	                name: '未安装',                        // 数据列名
	                data: $scope.uninstalls                    // 数据
	            }, {
	                name: '已安装',
	                data: $scope.installs
	            }]
	        };
	        // 图表初始化函数
	        var chart = Highcharts.chart('install', options);
	        
		},function(err){
			
		})
	}
	
	$scope.refresh();

 
}])



App.controller("installController3",['$scope',"$http","$stateParams",function($scope,$http,$stateParams){
	
	$scope.back = function(){
		history.go(-1);
	}
	
	
	$scope.refresh = function(){
		$http.post("/Seom/equipmentc/select",{area:$stateParams.area}).then(function(res){
			$scope.equipment = res.data;
			
			$scope.areas = [];
			$scope.uninstalls = [];
			$scope.installs = [];
			for (var i=0; i<$scope.equipment.length; i++) {
				$scope.areas[i] = $scope.equipment[i].region;
				$scope.uninstalls[i] = parseInt($scope.equipment[i].shouldInstalled) - parseInt($scope.equipment[i].alreadyInstalled);
				$scope.installs[i] = parseInt($scope.equipment[i].alreadyInstalled);
				$scope.equipment[i].completion = (100*$scope.installs[i]/parseInt($scope.equipment[i].shouldInstalled)).toFixed(2);
				}
			
			
			// 图表配置
	        var options = {
	            chart: {
	                type: 'column'                          //指定图表的类型，默认是折线图（line）
	            },
	            title: {
	                text: '设备安装' ,                // 标题
	                align:"left",
	                style:{fontWeight: 'bold',fontSize: '16px'}
	            },
	            colors: ['#9DC2D3','#387AA3'] ,
	            xAxis: {
	                categories: $scope.areas   // x 轴分类
	            },
	            yAxis: {
	                title: {
	                    text: ''                // y 轴标题
	                }
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
				legend: {
		            align: 'right',	            
		            verticalAlign: 'top',	
		            floating: true,
		        },
		        tooltip: {
			         headerFormat: '{point.key}<br>',
		            pointFormat: '{point.series.name}  {point.y}台 <br/> <b>{point.percentage:.1f}%</b>'
		        }, 
	            plotOptions: {
		            column: {
		                stacking: 'normal'
		            }
		        },
	            series: [{                              // 数据列
	                name: '未安装',                        // 数据列名
	                data: $scope.uninstalls                    // 数据
	            }, {
	                name: '已安装',
	                data: $scope.installs
	            }]
	        };
	        // 图表初始化函数
	        var chart = Highcharts.chart('install', options);
	        
		},function(err){
			
		})
	}
	
	$scope.refresh();
 
 		
}])


