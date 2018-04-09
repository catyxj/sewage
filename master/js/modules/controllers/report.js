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
	      onSelect: apple_selected,
        }, {
          label: '运维单位信息表',
          data: {
	        description: "app.report.table5"
	      },
	      onSelect: apple_selected,
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
//$http.get("server/datatable.json").then(function(res){
//	$scope.persons = res.data;
//})

  // Changing data

  $scope.malfunctions = [{
      id: "ECW_109321SD_122",
      name: "流量计变压器损坏",
      equip: "NSECO193流量计",
      date:"2018-03-25",
      state:"未解决"
    }
  ];


$scope.person2Add = _buildPerson2Add(1);
$scope.addPerson = addPerson;
  $scope.modifyPerson = modifyPerson;
  $scope.removePerson = removePerson;

  function _buildPerson2Add(id) {
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
  }
  function removePerson(index) {
      $scope.malfunctions.splice(index, 1);
  }

}]);






App.controller("PaginationCtrl",["$scope",function($scope){
//	$scope.maxSize = 5;
//  $scope.totalItems = 175;
    $scope.currentPage = 1;
}])