/**=========================================================

 =========================================================*/

App.controller('countyController', ['$scope', '$timeout', '$http',"$state", function($scope, $timeout, $http,$state) {

  $scope.my_tree_handler = function(branch) {
	console.log(branch);
	if(branch.level===1){
		$state.go("app.county.county_1_1");
	}else if(branch.level===2){
		$state.go("app.county.county_1_2");
	}else if(!branch.level){
		$state.go("app.county.county_1_3");
	}
	
//  $scope.output = "You selected: " + branch.label;
//
//  if (branch.data && branch.data.description) {
//    $scope.output += '(' + branch.data.description + ')';
//    return $scope.output;
//  }
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
  
  var treedata_geography = [
    {
      label: 'North America',
      children: [
        {
          label: 'Canada',
          children: ['Toronto', 'Vancouver']
        }, {
          label: 'USA',
          children: ['New York', 'Los Angeles']
        }, {
          label: 'Mexico',
          children: ['Mexico City', 'Guadalajara']
        }
      ]
    }, {
      label: 'South America',
      children: [
        {
          label: 'Venezuela',
          children: ['Caracas', 'Maracaibo']
        }, {
          label: 'Brazil',
          children: ['Sao Paulo', 'Rio de Janeiro']
        }, {
          label: 'Argentina',
          children: ['Buenos Aires', 'Cordoba']
        }
      ]
    }
  ];

  $scope.my_data = treedata_avm;

  
 
}]);
