
App.controller("beneficiaryCtrl",["$scope","$stateParams", "$http", function($scope,$stateParams,$http){
	
	$scope.back = function(){
		history.go(-1);
	}
	
	var area = $stateParams.area;
	
	$scope.refreshBene = function(area){
		$http.post("/Seom/bhc/select",{area}).then(function(res){
			$scope.benefit = res.data;
			$scope.currentPage = 1;
			$scope.totalItems = $scope.benefit.length;			
		},function(err){
			
		})
	};
	
	$scope.refreshBene(area);
	
	
	
}])
