//实时告警
App.controller("warningCurrentCtrl",["$scope","$http",function($scope,$http){

	$scope.updateWarn = function(){
		$http.get("1").then(function(res){
			$scope.warnData = res.data;
			$scope.currentPage = 1;
			if(!$scope.warnData){
				$scope.totalItems=0;
				return;
			}
			
			$scope.totalItems = $scope.warnData.length;
			
		},function(err){
			
		})
	};
	
	$scope.updateWarn();
	
	
}]);



//历史告警
App.controller("warningHistoryCtrl",["$scope","$http",function($scope,$http){

	$scope.updateWarnHistory = function(){
		$http.get("2").then(function(res){
			$scope.warnHistoryData = res.data;
			$scope.currentPage = 1;
			if(!$scope.warnHistoryData){
				$scope.totalItems=0;
				return;
			}
			$scope.totalItems = $scope.warnHistoryData.length;
			
		},function(err){
			
		})
	};
	
	$scope.updateWarnHistory();
	
	
}])