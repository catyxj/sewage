
App.controller("warningFlowCtrl",["$scope","$http","$uibModal",function($scope,$http,$uibModal){
	
  // LINE
  // ----------------------------------- 
  $http.get("server/chart/line.json").then(function(res){
		$scope.flowData = res.data;

	})

  $scope.flowOptions = {
      series: {
          lines: {
              show: true,
              fill: 0.01
          },
          points: {
              show: true,
              radius: 4
          }
      },
      grid: {
          borderColor: '#eee',
          borderWidth: 1,
          hoverable: true,
          backgroundColor: '#fcfcfc'
      },
      tooltip: true,
      tooltipOpts: {
          content: function (label, x, y) { return x + ' : ' + y; }
      },
      xaxis: {
          tickColor: '#eee',
          mode: 'categories'
      },
      yaxis: {
          position: ($scope.app.layout.isRTL ? 'right' : 'left'),
          tickColor: '#eee'
      },
      shadowSize: 0
  };
	
	
	

	$scope.openWarning = function () {
                var modalInstance = $uibModal.open({
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceCtrl',
                    backdrop: "static",
                    size: "",
                    /*resolve: {
                        items1: function () {
                            return $scope.items;
                        }
                    }*/
                });

                modalInstance.result.then(function (selectedItem) {
                    $scope.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };
	
	
	
}])


App.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {
            /*$scope.items = items1;
            $scope.selected = {
                item: $scope.items[0]
            };*/

            $scope.ok = function () {
                $uibModalInstance.close();
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        });

