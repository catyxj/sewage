/**=========================================================
区县信息
 =========================================================*/

App.controller('countyController', ['$scope',"$rootScope", '$timeout', '$http',"$state", function($scope,$rootScope, $timeout, $http,$state) {
 
 	$scope.defaultAddress = $rootScope.user.address;
 
	 //区县列表
	 $scope.my_tree = {};
	 $scope.level = $rootScope.user.jurisdiction;//权限
	
	 $scope.my_tree_handler = function(branch) {
	 	//	$scope.output = branch.data.description;
	 	$scope.output = branch.label;
//	 	$scope.area = $scope.output;
	 	//	console.log(branch);
	
	 	switch(branch.level) {
	 		case 1:
	 			$state.go("app.county.county_1_1", {
	 				area: $scope.output
	 			});
	 			/*if($scope.level <= 1) {
	 				
	 			} else {
	 				swal(
	 					'您没有查看该区域的权限',
	 					"",
	 					'error'
	 				)
	 			};*/
	 			break;
	 		case 2:
	 			$state.go("app.county.county_1_2", {
	 				area: $scope.output
	 			});
	 			/*if($scope.level <= 2) {
	 				
	 			} else {
					swal(
	 					'您没有查看该区域的权限',
	 					"",
	 					'error'
	 				)
	 			};*/
	 			break;
	 		case 3:
	 			$state.go("app.county.county_1_3", {
	 				area: $scope.output
	 			});
	 			break;
	
	 	}
	 };
	
	 $scope.my_data = angular.copy($rootScope.my_county);
	
	 //链接跳转	
	 $scope.goCounty2 = function(area) {
	 	//		$rootScope.area = area;
	 	var b = {}
	 	for(var i = 0; i < $scope.my_data.length; i++) {
	 		if($scope.my_data[i].label.indexOf(area) !== -1) {
	 			b = $scope.my_data[i];
	 			break;
	 		}
	 		if($scope.my_data[i].children) {
	 			for(var j = 0; j < $scope.my_data[i].children.length; j++) {
	 				if($scope.my_data[i].children[j].label.indexOf(area) !== -1) {
	 					b = $scope.my_data[i].children[j];
	 					break;
	 				}
	 				if($scope.my_data[i].children[j].children) {
	 					for(var n = 0; n < $scope.my_data[i].children[j].children.length; n++) {
	 						if($scope.my_data[i].children[j].children[n].label.indexOf(area) !== -1) {
	 							b = $scope.my_data[i].children[j].children[n];
	 							break;
	 						}
	 					}
	 				}
	 			}
	 		}
	
	 	}
	 	$scope.my_tree.select_branch(b);
	 	//		console.log($scope.my_tree,b);
	
	 }
	
	 
	
	 //图表 进度条
	
	 $scope.energy = [3, 6, 7, 8, 4, 5];
	 
}]);



App.controller("countyController1",["$scope","$rootScope","$http","$stateParams",function($scope,$rootScope,$http,$stateParams){
//	console.log($stateParams.area);
	$scope.area = $stateParams.area;

	//区县信息
	 $scope.itemsPerPage = 9;
	 $scope.currentPage = 1;
	 $http.post("/Seom/tbc/region",{area:$scope.area}).then(function(res) { //  get("server/county-11.json")
	 	var data = res.data;
	 	
	 	$scope.countyList = data.street;
	 	for(var i = 0; i < $scope.countyList.length; i++) {
	 		//图片
	 		if(!$scope.countyList[i].image){
				$scope.countyList[i].image = "app/img/county/baifengjiedao.jpg";
			}
	 		//简介
	 		if($scope.countyList[i].remarks.length > 60) {
	 			$scope.countyList[i].remark = $scope.countyList[i].remarks.slice(0, 60) + "...";
	 		}
	 	}
	 	$scope.totalItems = $scope.countyList.length;
	 	
	 	 
	 	 
	 	$scope.val1 = 80;//水质达标率
	 	$scope.val2 = (100*parseInt(data.install)/(parseInt(data.install)+parseInt(data.installNO))).toFixed(1) ;//设备安装率
	 	$scope.val3 = (100*parseInt(data.alreadyAreaBeneficiary)/parseInt(data.shouldAreaBeneficiary)).toFixed(1);//受益人数比例
	 	$scope.val4 = (100*parseInt(data.alreadyAreaPpaymentMoney)/parseInt(data.shouldAreaPpaymentMoney).toFixed(1));//资金支付比例
	 	$scope.pay = data.alreadyAreaPpaymentMoney;
	 	
	 }, function(err) {
	
	 })
	
}]);

App.controller("countyController2",["$scope","$rootScope","$http","$stateParams",function($scope,$rootScope,$http,$stateParams){
//	console.log($stateParams.area);
	$scope.area = $stateParams.area;
	$scope.itemsPerPage = 9;
	$scope.currentPage = 1;
	$http.post("/Seom/tbc/region",{area:$scope.area}).then(function(res){ // .get("server/county-12.json")
		var data = res.data;
		$scope.countyList = data.village;		
		$scope.totalItems = $scope.countyList.length;
		angular.forEach($scope.countyList,function(item,index){
			if(!item.image){
				item.image = "app/img/county/baifengcun.jpg";
			}
		})
		
		$scope.val1 = 80;//水质达标率
	 	$scope.val2 = (100*parseInt(data.install)/(parseInt(data.install)+parseInt(data.installNO))).toFixed(1) ;//设备安装率
	 	$scope.val3 = (100*parseInt(data.alreadyAreaBeneficiary)/parseInt(data.shouldAreaBeneficiary)).toFixed(1);//受益人数比例
	 	$scope.val4 = (100*parseInt(data.alreadyAreaPpaymentMoney)/parseInt(data.shouldAreaPpaymentMoney).toFixed(1));//资金支付比例
	 	$scope.pay = data.alreadyAreaPpaymentMoney;

	},function(err){
		
	})
	
}]);

App.controller("countyController3",["$scope","$rootScope","$http","$stateParams",function($scope,$rootScope,$http,$stateParams){
//	console.log($stateParams.area);
	$scope.area = $stateParams.area;
	
	
	$http.post("/Seom/tbc/region",{area:$scope.area}).then(function(res){ //get("server/county-13.json")
		$scope.village = res.data.v;
		if(!$scope.village.image){
			$scope.village.image = "app/img/county/baifengcun.jpg";
		}
	},function(err){
		
	})
	
}]);


App.controller("countywaterController",['$scope',function($scope){
	$scope.renderers = [{
          id: 'area',
          name: 'Area'
      }, {
          id: 'line',
          name: 'Line'
      }, {
          id: 'bar',
          name: 'Bar'
      }, {
          id: 'scatterplot',
          name: 'Scatterplot'
      }];

$scope.palettes = [
      'spectrum14',
      'spectrum2000',
      'spectrum2001',
      'colorwheel',
      'cool',
      'classic9',
      'munin'
];

  $scope.rendererChanged = function(id) {
      $scope['options' + id] = {
          renderer: $scope['renderer' + id].id
      };
  };

$scope.paletteChanged = function(id) {
      $scope['features' + id] = {
          palette: $scope['palette' + id]
      };
};

$scope.changeSeriesData = function(id) {
      var seriesList = [];
      for (var i = 0; i < 3; i++) {
          var series = {
              name: 'Series ' + (i + 1),
              data: []
          };
          for (var j = 0; j < 10; j++) {
              series.data.push({x: j, y: Math.random() * 20});
          }
          seriesList.push(series);
          $scope['series' + id][i] = series;
      }
      //$scope['series' + id] = seriesList;
};

  $scope.series0 = [];

  $scope.options0 = {
    renderer: 'area'
  };

  $scope.renderer0 = $scope.renderers[0];
$scope.palette0 = $scope.palettes[0];

  $scope.rendererChanged(0);
$scope.paletteChanged(0);
$scope.changeSeriesData(0);  

}])


//化验报告
App.controller("countychemistryController",['$scope',function($scope){
// Radar chart
// ----------------------------------- 

$scope.RadarChart = function(){		
		var ctx = document.getElementById("chemistryChart").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'radar',
		    data: {
				datasets: [
					{
			        label: 'My First dataset',
			        backgroundColor: 'rgba(114,102,186,0.2)',
			        borderColor: 'rgba(114,102,186,1)',
			        pointBackgroundColor: 'rgba(114,102,186,1)',
			        pointStrokeColor: '#fff',
			        pointHighlightFill: '#fff',
			        pointHighlightStroke: 'rgba(114,102,186,1)',
			        data: [65,59,90,81,56,55,40]
			      },
			      {
			        label: 'My Second dataset',
			        backgroundColor: 'rgba(151,187,205,0.2)',
			        borderColor: 'rgba(151,187,205,1)',
			        pointBackgroundColor: 'rgba(151,187,205,1)',
			        pointStrokeColor: '#fff',
			        pointHighlightFill: '#fff',
			        pointHighlightStroke: 'rgba(151,187,205,1)',
			        data: [28,48,40,19,96,27,100]
			      }				
				],
				labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
			},
		    options: {
		        responsive: true,
		        legend: {
		          display: false,
		          position: 'bottom',
		          boxWidth: 20,
		        },
		        scaleShowLine : true,
    angleShowLineOut : true,
    scaleShowLabels : false,
    scaleBeginAtZero : true,
    angleLineColor : 'rgba(0,0,0,.1)',
    angleLineWidth : 1,
    pointLabelFontFamily : "'Arial'",
    pointLabelFontStyle : 'bold',
    pointLabelFontSize : 10,
    pointLabelFontColor : '#565656',
    pointDot : true,
    pointDotRadius : 3,
    pointDotStrokeWidth : 1,
    pointHitDetectionRadius : 20,
    datasetStroke : true,
    datasetStrokeWidth : 2,
    datasetFill : true
		
		    }
		});
	}
	
$scope.RadarChart();

}])

