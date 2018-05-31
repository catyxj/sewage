
App.directive("pagination", function() {
    return {
        restrict: 'AE',
        templateUrl: './app/views/directives/pagination.html',
        replace: true
    }
});

App.controller("PaginationDirCtrl",["$scope",function($scope){
	$scope.pages=[10,25,50];
	$scope.itemsPerPage = 10;
	$scope.selectPage = function(page){
		$scope.currentPage = page;
	};
	$scope.changePageSize = function(page){
		$scope.itemsPerPage = page;
	}

    
}])