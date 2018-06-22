App.controller("headerCtrl",["$scope","$stateParams", "$http", function($scope,$stateParams,$http){
	
	$scope.logout = function(){
		$http.get("Seom/userC/de").then(function(res){
			window.location.href = "index.html";
		},function(err){
			
		})
	}


}])