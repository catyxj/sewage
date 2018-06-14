
// APP START
// ----------------------------------- 

var App = angular.module('sewageAdmin', [
    'ui.bootstrap',
    'ui.router',
    'oc.lazyLoad',
    'ngSanitize',
    "customFilter"
  ]);

App.run(["$rootScope", "$state", "$stateParams",  '$window', '$templateCache',"$http", function ($rootScope, $state, $stateParams, $window, $templateCache,$http) {
  // Set reference to access them from any scope
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$storage = $window.localStorage;

  // Uncomment this to disable template cache
  /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (typeof(toState) !== 'undefined'){
        $templateCache.remove(toState.templateUrl);
      }
  });*/
 
 
 
 
 $http.get("/Seom/acc/select").then(function(res){ //  server/county1.json
	var treedata_avm = res.data;
	$rootScope.my_county = treedata_avm;
});

$http.get("/Seom/userC/se").then(function(res){  //  server/userC.json
	$rootScope.user = res.data;
	//$rootScope.user.jurisdiction 权限1:全部，2:市，3:区(县)，4:街道(镇)
	//$rootScope.user.address 登录账号具体地址
},function(err){
	
})


  // Scope Globals
  // ----------------------------------- 
  $rootScope.app = {
    name: '宁波市农村生活污水运维信息化管理平台',
    description: '宁波市农村生活污水运维信息化管理平台',
    year: ((new Date()).getFullYear()),
    layout: {
      isFixed: true,
      isCollapsed: false,
      isBoxed: false,
      isRTL: false,
      horizontal: false,
      isFloat: false,
      asideHover: false,
      theme: null
    },
    useFullLayout: false,
    hiddenFooter: false,
    viewAnimation: 'ng-fadeInUp'
  };

}]);




