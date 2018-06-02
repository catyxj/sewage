App.controller("countyEquipCtrl",["$scope","$stateParams","$http",function($scope,$stateParams,$http){
	
	$scope.back = function(){
		history.go(-1);
	}
		
	
	$scope.refreshEquip = function(){
		$http.post("/Seom/fc/selectVillage",{area:$stateParams.area}).then(function(res){
			$scope.equip = res.data;

		},function(err){
			
		})
	}
	
	$scope.refreshEquip();
	
}])
