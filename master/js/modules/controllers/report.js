/**=========================================================
 * Module: datatable,js
 * Angular Datatable controller
 =========================================================*/

App.controller('reportController', ['$scope', '$http','$state',
  function($scope, $http,$state ) {
  'use strict';



	$scope.my_tree_handler = function(branch) {
	
  	};

  // onSelect event handlers
  var apple_selected = function(branch) {
    $scope.output = branch.data.description;
//  return $scope.output;
	$state.go($scope.output);
  };

  var treedata_avm = [
    {
      label: '运维记录',
      children: [
        {
          label: '故障报表',
		  data: {
            description: "app.report.table1"
          },
          onSelect: apple_selected
        }, {
          label: '巡检报表',
          data: {
            description: "app.report.table2"
          },
          onSelect: apple_selected
        }, {
          label: '化验报表',
          data: {
            description: "app.report.table3"
          },
          onSelect: apple_selected
        },
        {
          label: '运维月报表',
          data: {
            description: "app.report.table7"
          },
          onSelect: apple_selected
        },
        {
          label: '运维季报表',
          data: {
            description: "app.report.table8"
          },
          onSelect: apple_selected
        }
      ]
    }, {
      label: '行政机构',      
      children: [
        {
          label: '行政单位信息表',
          data: {
	        description: "app.report.table4"
	      },
//	      onSelect: apple_selected,
        }, {
          label: '运维单位信息表',
          data: {
	        description: "app.report.table5"
	      },
//	      onSelect: apple_selected,
        }
      ]
    }, {
      label: '设备相关',
      children: [
        {
          label: '设备信息表',
          data: {
	        description: "app.report.table6"
	      },
	      onSelect: apple_selected,
        }
      ]
    }
  ];
  

  $scope.my_data = treedata_avm;

  


  // Ajax 
  $scope.table1 = function(){
  	$http.get("server/malfunctions.json").then(function(res){
	  	$scope.malfunctions = res.data;
	  	$scope.totalItems = $scope.malfunctions.length;
	  })
  };
  
  $scope.table2 = function(){
  	$http.get("server/inspection.json").then(function(res){
	  	$scope.inspection = res.data;
	  	$scope.totalItems = $scope.inspection.length;
	  })
  };
  
  $scope.table3 = function(){
  	$http.get("server/laboratory.json").then(function(res){
	  	$scope.laboratory = res.data;
	  	$scope.totalItems = $scope.laboratory.length;
	  })
  };
  
  $scope.table4 = function(){
  	$http.get("server/malfunctions.json").then(function(res){
	  	$scope.adUnit = res.data;
	  	$scope.totalItems = $scope.adUnit.length;
	  })
  };
  
  $scope.table5 = function(){
  	$http.get("server/malfunctions.json").then(function(res){
	  	$scope.opUnit = res.data;
	  	$scope.totalItems = $scope.opUnit.length;
	  })
  };
  
  
  $scope.table6 = function(){
  	$http.get("server/equipment.json").then(function(res){
	  	$scope.equipment = res.data;
	  	$scope.totalItems = $scope.equipment.length;
	  })
  };
  
  $scope.table7 = function(){
  	$http.get("server/monthlyreport.json").then(function(res){
	  	$scope.monthly = res.data;
	  	$scope.totalItems = $scope.monthly.length;
	  })
  };
  
  $scope.table8 = function(){
  	$http.get("server/quarterlyreport.json").then(function(res){
	  	$scope.jidu = res.data;
	  	$scope.totalItems = $scope.jidu.length;
	  })
  };
  
  

$scope.currentPage = 1;
$scope.itemsPerPage = "10";
$scope.selectPage = function(page){
	$scope.currentPage = page;
};
$scope.changePageSize = function(page){
	$scope.itemsPerPage = page;
}


  // Changing data
/*$scope.person2Add = _buildPerson2Add(1);
$scope.addPerson = addPerson;
  $scope.modifyPerson = modifyPerson;*/
//$scope.removePerson = removePerson;

  /*function _buildPerson2Add(id) {
      return {
          id: id,
          firstName: 'Foo' + id,
          lastName: 'Bar' + id
      };
  }
  function addPerson() {
      $scope.malfunctions.push(angular.copy($scope.person2Add));
      $scope.person2Add = _buildPerson2Add($scope.person2Add.id + 1);
  }
  function modifyPerson(index) {
      $scope.malfunctions.splice(index, 1, angular.copy($scope.person2Add));
      $scope.person2Add = _buildPerson2Add($scope.person2Add.id + 1);
  }*/
//function removePerson(index) {
//    $scope.malfunctions.splice(index, 1);
//}

}]);



App.controller("reportEditCtrl",["$scope","$stateParams",function($scope,$stateParams){
//	console.log($stateParams.data);
	$scope.data = $stateParams.data;
	
    
}])


App.controller("PaginationCtrl",["$scope",function($scope){
//	$scope.maxSize = 5;
//  $scope.totalItems = 175;
    
}])