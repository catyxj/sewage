App.controller("headerCtrl",["$scope","$stateParams", "$http", function($scope,$stateParams,$http){
	
	$scope.logout = function(){
		
		window.location.href = "index.html";
		/*$http.get("Seom/userC/de").then(function(res){
			
		},function(err){
			
		})*/
		
	}


}])