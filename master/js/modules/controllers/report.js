/**=========================================================
 * Module: datatable,js
 * Angular Datatable controller
 =========================================================*/

App.controller('reportController', ['$scope', '$http', 'DTOptionsBuilder', 'DTColumnDefBuilder',
  function($scope, $http, DTOptionsBuilder, DTColumnDefBuilder) {
  'use strict';



	$scope.my_tree_handler = function(branch) {
	console.log(branch);
	if(branch.level===1){
		$state.go("app.county.county_1_1");
	}else if(branch.level===2){
		$state.go("app.county.county_1_2");
	}else if(!branch.level){
		$state.go("app.county.county_1_3");
	}
	
  };

  // onSelect event handlers
  var apple_selected = function(branch) {
    $scope.output = "APPLE! : " + branch.label;
    return $scope.output;
  };

  var treedata_avm = [
    {
      label: 'xxxxx县',
      children: [
        {
          label: 'xxxx镇',
          data: {
            description: "man's best friend"
          },
          children: ['xxxx村', 'xxxx村', 'xxxx村']
        }, {
          label: 'xxxx镇',
          data: {
            description: "Felis catus"
          },
          children: ['xxxx村', 'xxxx村', 'xxxx村']
        }, {
          label: 'xxxx镇',
          data: {
            description: "hungry, hungry"
          },
          children: ['xxxx村', 'xxxx村', 'xxxx村']
        }, {
          label: 'xxxx镇',
          children: ['xxxx村', 'xxxx村', 'xxxx村']
        }
      ]
    }, {
      label: 'xxxxx县',
      data: {
        definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
        data_can_contain_anything: true
      },
      onSelect: function(branch) {
        $scope.output = "Vegetable: " + branch.data.definition;
        return $scope.output;
      },
      children: [
        {
          label: 'xxxx镇',
          children: ['xxxx村', 'xxxx村', 'xxxx村']
        }, {
          label: 'xxxx镇',
          children: [
            {
              label: 'xxxx村',
              onSelect: apple_selected
            }, {
              label: 'xxxx村',
              onSelect: apple_selected
            }, {
              label: 'xxxx村',
              onSelect: apple_selected
            }
          ]
        }
      ]
    }, {
      label: 'xxxxx县',
      children: [
        {
          label: 'xxxx镇',
          children: ['xxxx村', 'xxxx村', 'xxxx村']
        }, {
          label: 'xxxx镇',
          children: ['xxxx村', 'xxxx村', 'xxxx村']
        }
      ]
    }
  ];
  

  $scope.my_data = treedata_avm;

  
  









  // Ajax
  $http.get("server/datatable.json").then(function(res){
  	$scope.persons = res.data;
  })

//$resource('server/datatable.json').query().$promise.then(function(persons) {
//    $scope.persons = persons;
//});

  // Changing data

  $scope.heroes = [{
      "id": 860,
      "firstName": "Superman",
      "lastName": "Yoda"
    }, {
      "id": 870,
      "firstName": "Ace",
      "lastName": "Ventura"
    }, {
      "id": 590,
      "firstName": "Flash",
      "lastName": "Gordon"
    }, {
      "id": 803,
      "firstName": "Luke",
      "lastName": "Skywalker"
    }
  ];

  $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
  $scope.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2),
      DTColumnDefBuilder.newColumnDef(3).notSortable()
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
      $scope.heroes.push(angular.copy($scope.person2Add));
      $scope.person2Add = _buildPerson2Add($scope.person2Add.id + 1);
  }
  function modifyPerson(index) {
      $scope.heroes.splice(index, 1, angular.copy($scope.person2Add));
      $scope.person2Add = _buildPerson2Add($scope.person2Add.id + 1);
  }
  function removePerson(index) {
      $scope.heroes.splice(index, 1);
  }

}]);