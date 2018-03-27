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





App.controller('countybarController', ['$scope',"colors", function($scope,colors ){
	  // Bar chart
// ----------------------------------- 

$scope.barChart = function(){		
		var ctx = document.getElementById("barChart2").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
				datasets: [
/*				{data: [
						[200,50,100,150,20,30]
					],
					backgroundColor: [
						colors.byName('info')
					],
				}*/


				{
		            backgroundColor : colors.byName('info'),
		            data : [65,59,90,81,56,55,40]
		        },
		        {
		            backgroundColor : colors.byName('primary'),
		            data : [28,48,40,19,96,27,100]
		        }
				
				],
				labels: [
					"January","February","March","April","May","June","July"
				]
			},
		    options: {
		        responsive: true,
		        legend: {
		          display: false,
		          position: 'bottom',
		          boxWidth: 20,
		        }
		
		    }
		});
	}
	
$scope.barChart();
}]);


App.controller("countyrickController",['$scope',function($scope){
	$scope.renderers = [{
          id: 'area',
          name: 'Area'
      }, {
          id: 'line',
          name: 'Line'
      }, {
          id: 'bar',
          name: 'Bar'
      }, {
          id: 'scatterplot',
          name: 'Scatterplot'
      }];

$scope.palettes = [
      'spectrum14',
      'spectrum2000',
      'spectrum2001',
      'colorwheel',
      'cool',
      'classic9',
      'munin'
];

  $scope.rendererChanged = function(id) {
      $scope['options' + id] = {
          renderer: $scope['renderer' + id].id
      };
  };

$scope.paletteChanged = function(id) {
      $scope['features' + id] = {
          palette: $scope['palette' + id]
      };
};

$scope.changeSeriesData = function(id) {
      var seriesList = [];
      for (var i = 0; i < 3; i++) {
          var series = {
              name: 'Series ' + (i + 1),
              data: []
          };
          for (var j = 0; j < 10; j++) {
              series.data.push({x: j, y: Math.random() * 20});
          }
          seriesList.push(series);
          $scope['series' + id][i] = series;
      }
      //$scope['series' + id] = seriesList;
};

  $scope.series0 = [];

  $scope.options0 = {
    renderer: 'bar'
  };

  $scope.renderer0 = $scope.renderers[2];
$scope.palette0 = $scope.palettes[0];

  $scope.rendererChanged(0);
$scope.paletteChanged(0);
$scope.changeSeriesData(0);  

  // Graph 2

//var seriesData = [ [], [], [] ];
//var random = new Rickshaw.Fixtures.RandomData(150);
//
//for (var i = 0; i < 150; i++) {
//  random.addData(seriesData);
//}
//
//$scope.series2 = [
//  {
//    color: "#c05020",
//    data: seriesData[0],
//    name: 'New York'
//  }, {
//    color: "#30c020",
//    data: seriesData[1],
//    name: 'London'
//  }, {
//    color: "#6060c0",
//    data: seriesData[2],
//    name: 'Tokyo'
//  }
//];
//
//$scope.options2 = {
//  renderer: 'area'
//};
}])


App.controller("countywaterController",['$scope',function($scope){
	$scope.renderers = [{
          id: 'area',
          name: 'Area'
      }, {
          id: 'line',
          name: 'Line'
      }, {
          id: 'bar',
          name: 'Bar'
      }, {
          id: 'scatterplot',
          name: 'Scatterplot'
      }];

$scope.palettes = [
      'spectrum14',
      'spectrum2000',
      'spectrum2001',
      'colorwheel',
      'cool',
      'classic9',
      'munin'
];

  $scope.rendererChanged = function(id) {
      $scope['options' + id] = {
          renderer: $scope['renderer' + id].id
      };
  };

$scope.paletteChanged = function(id) {
      $scope['features' + id] = {
          palette: $scope['palette' + id]
      };
};

$scope.changeSeriesData = function(id) {
      var seriesList = [];
      for (var i = 0; i < 3; i++) {
          var series = {
              name: 'Series ' + (i + 1),
              data: []
          };
          for (var j = 0; j < 10; j++) {
              series.data.push({x: j, y: Math.random() * 20});
          }
          seriesList.push(series);
          $scope['series' + id][i] = series;
      }
      //$scope['series' + id] = seriesList;
};

  $scope.series0 = [];

  $scope.options0 = {
    renderer: 'area'
  };

  $scope.renderer0 = $scope.renderers[0];
$scope.palette0 = $scope.palettes[0];

  $scope.rendererChanged(0);
$scope.paletteChanged(0);
$scope.changeSeriesData(0);  

}])


App.controller("countychemistryController",['$scope',function($scope){
// Radar chart
// ----------------------------------- 

$scope.RadarChart = function(){		
		var ctx = document.getElementById("chemistryChart").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'radar',
		    data: {
				datasets: [
					{
			        label: 'My First dataset',
			        backgroundColor: 'rgba(114,102,186,0.2)',
			        borderColor: 'rgba(114,102,186,1)',
			        pointBackgroundColor: 'rgba(114,102,186,1)',
			        pointStrokeColor: '#fff',
			        pointHighlightFill: '#fff',
			        pointHighlightStroke: 'rgba(114,102,186,1)',
			        data: [65,59,90,81,56,55,40]
			      },
			      {
			        label: 'My Second dataset',
			        backgroundColor: 'rgba(151,187,205,0.2)',
			        borderColor: 'rgba(151,187,205,1)',
			        pointBackgroundColor: 'rgba(151,187,205,1)',
			        pointStrokeColor: '#fff',
			        pointHighlightFill: '#fff',
			        pointHighlightStroke: 'rgba(151,187,205,1)',
			        data: [28,48,40,19,96,27,100]
			      }				
				],
				labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
			},
		    options: {
		        responsive: true,
		        legend: {
		          display: false,
		          position: 'bottom',
		          boxWidth: 20,
		        },
		        scaleShowLine : true,
    angleShowLineOut : true,
    scaleShowLabels : false,
    scaleBeginAtZero : true,
    angleLineColor : 'rgba(0,0,0,.1)',
    angleLineWidth : 1,
    pointLabelFontFamily : "'Arial'",
    pointLabelFontStyle : 'bold',
    pointLabelFontSize : 10,
    pointLabelFontColor : '#565656',
    pointDot : true,
    pointDotRadius : 3,
    pointDotStrokeWidth : 1,
    pointHitDetectionRadius : 20,
    datasetStroke : true,
    datasetStrokeWidth : 2,
    datasetFill : true
		
		    }
		});
	}
	
$scope.RadarChart();

}])

