App.controller("malfunctionCtrl",["$scope","$http",function($scope,$http){

	$scope.updateMal = function(){
		$http.get("server/malfunctions.json").then(function(res){
			$scope.malData = res.data;
			$scope.currentPage = 1;			
			$scope.totalItems = $scope.malData.length;
			
		},function(err){
			
		})
	};
	
	$scope.updateMal();
	
	
}])