App.controller("countyEquipDetailCtrl",["$scope","$stateParams","$http",function($scope,$stateParams,$http){
	
	$scope.back = function(){
		history.go(-1);
	}
	
	var code = $stateParams.code
	
	
	$scope.refreshEquipDel = function(){
		//设施信息
		$http.post("/Seom/equipmentc/selectCode",{facilityCode:code}).then(function(res){
			$scope.equipInfo = res.data[0];
			
			//设施状态
		  	$scope.facilitieStatus = [
		  		{id:1, name:"建设"}, {id:2, name:"运维"}, {id:3, name:"大修"}, {id:4, name:"重建"}, {id:5, name:"报废"}
		  	];
		  	for (var i = 0; i< $scope.facilitieStatus.length; i++) {
		  		if($scope.equipInfo.facilityState === $scope.facilitieStatus[i].id){
		  			$scope.equipInfo.facilityStateName = $scope.facilitieStatus[i].name;
		  		}
		  	}		  	
		},function(err){
			
		});
		
		//设施列表
		$http.post("/Seom/equipmentc/selectFacilityCode",{facilityCode:code}).then(function(res){
			$scope.equipList = res.data;
			$scope.currentPage = 1;
			$scope.totalItems = $scope.equipList.length;	
			if(!$scope.equipList){
				$scope.totalItems = 0;
				return;
			}
			
			//设备类型
	  		$scope.equipmentYypes = [{id:1, name:"土建"}, {id:2, name:"机电"}, {id:3, name:"监测"}, {id:4, name:"监控"}, {id:0, name:"其他"}];
	  		for (var i = 0; i<$scope.equipList.length; i++) {
	  			for(var j = 0; j<$scope.equipmentYypes.length; j++){
	  				if($scope.equipList[i].type === $scope.equipmentYypes[j].id){
	  					$scope.equipList[i].typeName = $scope.equipmentYypes[j].name;
	  				}
	  			}
	  		}

		},function(err){
			
		});
	}
	
	$scope.refreshEquipDel();
	
}])