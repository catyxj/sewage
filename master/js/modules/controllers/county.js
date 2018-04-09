/**=========================================================

 =========================================================*/

App.controller('countyController', ['$scope', '$timeout', '$http',"$state", function($scope, $timeout, $http,$state) {

  $scope.my_tree_handler = function(branch) {
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
    $scope.output = branch.data.description;
	$state.go($scope.output);
  };

  var treedata_avm = [
    {
      label: '北仑区',
      data: {
            description: "app.county.county_1_1"
          },
          onSelect: apple_selected,
      children: [
        {
          label: '白峰街道',
          data: {
            description: "app.county.county_1_2_baifeng"
          },
          onSelect: apple_selected,
          children: [
          {label:'白峰村',
          data: {
            description: "app.county.county_1_3_baifeng"
          },
          onSelect: apple_selected,
          },
          {label:'官庄村',
          data: {
            description: "app.county.county_1_3_guanzhuang"
          },
          onSelect: apple_selected,
          },
          {label:'司岩村',
          data: {
            description: "app.county.county_1_3_siyan"
          },
          onSelect: apple_selected,
         },
         {label:'新峰村',
          data: {
            description: "app.county.county_1_3_xinfeng"
          },
          onSelect: apple_selected,
         },
         {label:'阳东村',
          data: {
            description: "app.county.county_1_3_yangdong"
          },
          onSelect: apple_selected,
         },
         {label:'勤山村',
          data: {
            description: "app.county.county_1_3_qinshan"
          },
          onSelect: apple_selected,
         },
         {label:'上阳村',
          data: {
            description: "app.county.county_1_3_shangyang"
          },
          onSelect: apple_selected,
         },
         {label:'下阳村',
          data: {
            description: "app.county.county_1_3_xiayang"
          },
          onSelect: apple_selected,
         }
         ]
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
        definition: "",
        data_can_contain_anything: true
      },
      onSelect: function(branch) {
        $scope.output = "" + branch.data.definition;
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

  
  
  //图表 进度条
  $scope.energy = [3,6,7,8,4,5];
	$scope.val1 = 80;
	$scope.val2 = 20;
	$scope.val3 = 50;
	$scope.val4 = 20;


 
 
}]);






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

