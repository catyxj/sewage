App.controller("installController",['$scope',function($scope){
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
                categories: ['xxx区县（市）', 'xxx区县（市）', 'xxx区县（市）', 'xxx区县（市）', 'xxx区县（市）', 'xxx区县（市）']   // x 轴分类
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
                data: [1, 1, 4, 2, 3, 4]                     // 数据
            }, {
                name: '已安装',
                data: [5, 7, 3 , 5, 4, 3]
            }]
        };
        // 图表初始化函数
        var chart = Highcharts.chart('install', options);

 
}])



App.controller("installController2",['$scope',function($scope){
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
                categories: ['xxx乡镇（街道）', 'xxx乡镇（街道）', 'xxx乡镇（街道）', 'xxx乡镇（街道）', 'xxx乡镇（街道）', 'xxx乡镇（街道）']   // x 轴分类
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
                data: [1, 1, 4, 2, 3, 4]                     // 数据
            }, {
                name: '已安装',
                data: [5, 7, 3 , 5, 4, 3]
            }]
        };
        // 图表初始化函数
        var chart = Highcharts.chart('install', options);

 
}])



App.controller("installController3",['$scope',function($scope){
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
                categories: ['xxx村', 'xxx村', 'xxx村', 'xxx村', 'xxx村', 'xxx村']   // x 轴分类
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
                data: [1, 1, 4, 2, 3, 4]                     // 数据
            }, {
                name: '已安装',
                data: [5, 7, 3 , 5, 4, 3]
            }]
        };
        // 图表初始化函数
        var chart = Highcharts.chart('install', options);

 
}])

