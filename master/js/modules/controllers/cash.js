
App.controller("cashCtrl",["$scope","$stateParams", "$http", function($scope,$stateParams,$http){
		
	$scope.back = function(){
		history.go(-1);
	}
	
	var area = $stateParams.area;
	
	$scope.refreshCash = function(area){
		$http.post("/Seom/msrc/select ",{area}).then(function(res){
			$scope.cash = res.data;
			$scope.currentPage = 1;
			$scope.totalItems = $scope.cash.length;			
		},function(err){
			
		})
	};
	
	$scope.refreshCash(area);
	
	
	
}])