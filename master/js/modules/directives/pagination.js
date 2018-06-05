
App.directive("pagination", function() {
    return {
        restrict: 'AE',
        templateUrl: './app/views/directives/pagination.html',
        replace: true
    }
});

App.directive("paginationC", function() {
    return {
        restrict: 'AE',
        templateUrl: './app/views/directives/pagination_c.html',
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

App.controller("PaginationCountyCtrl",["$scope",function($scope){	
	$scope.selectPage = function(page){
		$scope.currentPage = page;
	};
	$scope.changePageSize = function(page){
		$scope.itemsPerPage = page;
	}

    
}])