App.controller("countyWorkerCtrl",["$scope", "$http", "$filter","$stateParams",function($scope,$http,$filter,$stateParams){
	
	$scope.area = $stateParams.area;
	$scope.back = function(){
		history.go(-1);
	}
	
//传后台json格式的地址(area)得到工作人员信息json的数据 
//    .get("server/workers.json")
//
//String name//姓名
//String title//职称
//String handset//手机
//String telephone//固话
//String region//区域
//String administrativeVillage//行政村
//String remarks//备注
	
	$http.post("/Seom/pic/selectPeople",{area:$scope.area}).then(function(res){
		var workers = res.data;
		$scope.workers = workers;
		
		$scope.totalItems = $scope.workers.length;
		$scope.itemsPerPage = 25;
		$scope.currentPage = 1;
		
		$scope.searchworker = function(search){
			$scope.workers = $filter("filter")(workers,search);
			$scope.totalItems = $scope.workers.length;
		}
		
		
	},function(err){
		
	})

	
	
	
	
	
	
	
	
	
	
}])
