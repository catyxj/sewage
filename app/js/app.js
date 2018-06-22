
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





/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/

App.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider',
function ($stateProvider, $locationProvider, $urlRouterProvider, helper) {
  'use strict';

  // Set the following to true to enable the HTML5 Mode
  // You may have to set <base> tag in index and a routing configuration in your server
  $locationProvider.html5Mode(false);

  // defaults to dashboard
  $urlRouterProvider.when("", "/app/dashboard");

  // 
  // Application Routes
  // -----------------------------------   
  $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/views/app.html',
        controller: 'AppController',
        resolve: helper.resolveFor('screenfull','icons','classyloader','sparklines','highcharts')
    })
    .state('app.dashboard', {
        url: '/dashboard',
        title: 'Dashboard',
        templateUrl: 'app/views/dashboard.html',
        controller: 'dashboardController',
        resolve: helper.resolveFor('vector-map', 'vector-map-maps','moment')
    })
    .state('app.warning', {
        url: '/warning',
        title: 'warning',        
        templateUrl: 'app/views/master-station/warning.html'
    })
    .state('app.warning.current', {
        url: '/warning_current',
        title: 'warning_current',
        controller: 'warningCurrentCtrl',
        templateUrl: 'app/views/master-station/warning_current.html'
    })
    .state('app.warning.history', {
        url: '/warning_history',
        title: 'warning_history',
        controller: 'warningHistoryCtrl',
        templateUrl: 'app/views/master-station/warning_history.html'
    })
    .state('app.malfunction', {
        url: '/malfunction',
        title: 'malfunction',
        controller: 'malfunctionCtrl',
        templateUrl: 'app/views/master-station/malfunction.html'
    })
    .state('app.malfunction.unsolved', {
        url: '/malfunction_unsolved',
        title: 'malfunction_unsolved',
        templateUrl: 'app/views/master-station/malfunction_unsolved.html'
    })
    .state('app.malfunction.solved', {
        url: '/malfunction_solved',
        title: 'malfunction_solved',
        templateUrl: 'app/views/master-station/malfunction_solved.html'
    })
    
    .state('app.warning3', {
        url: '/warning3',
        title: 'warning3',
        templateUrl: 'app/views/master-station/warning3.html',
        resolve: helper.resolveFor('flot-chart','flot-chart-plugins')
    })
    
    
    
    //统计分析----------------   
    .state('app.stat', {
        url: '/stat',
        title: 'stat',
        templateUrl: 'app/views/stat.html',
        controller: 'statController',
        resolve: helper.resolveFor('flot-chart','flot-chart-plugins','chartjs')
    })
    .state('app.stat_energy', {
        url: '/stat_energy',
        title: 'stat_energy',
        templateUrl: 'app/views/master-station/Energy.html',
        resolve: helper.resolveFor('chartjs')
    })
    .state('app.install', {
        url: '/install?area',
        title: 'install',
        controller: 'installController',
        templateUrl: 'app/views/tables/install.html',
        resolve: helper.resolveFor('highcharts.plugin')
    })
    .state('app.install2', {
        url: '/install2?area',
        title: 'install2',
        controller: 'installController2',
        templateUrl: 'app/views/tables/install_2.html',
        resolve: helper.resolveFor('highcharts.plugin')
    })
    .state('app.install3', {
        url: '/install3?area',
        title: 'install3',
        controller: 'installController3',
        templateUrl: 'app/views/tables/install_3.html',
        resolve: helper.resolveFor('highcharts.plugin')
    })
    .state('app.cash', {
        url: '/cash?area',
        title: 'cash',
        templateUrl: 'app/views/tables/cash.html',
    })
    .state('app.beneficiary', {
        url: '/beneficiary?area',
        title: 'beneficiary',
        templateUrl: 'app/views/tables/Beneficiary.html'
    })
    .state('app.water', {
        url: '/water-quality',
        title: 'water-quality',
        templateUrl: 'app/views/tables/water-quality.html',
        resolve: helper.resolveFor('chartjs')
    })
    
    .state('app.water2', {
        url: '/water-quality2',
        title: 'water-quality2',
        templateUrl: 'app/views/tables/water-quality2.html',
        resolve: helper.resolveFor('chartjs')
    })
    .state('app.water3', {
        url: '/water-quality3',
        title: 'water-quality3',
        templateUrl: 'app/views/tables/water-quality3.html',
        resolve: helper.resolveFor('chartjs')
    })
    
    .state('app.cash2', {
        url: '/cash2',
        title: 'cash2',
        templateUrl: 'app/views/tables/cash2.html',
    })
    .state('app.cash3', {
        url: '/cash3',
        title: 'cash3',
        templateUrl: 'app/views/tables/cash3.html',
    })
    
 
    
    
    
    //区县信息----------------------
    .state('app.county', {
        url: '/county',
        title: 'county',
        controller: 'countyController',
        templateUrl: 'app/views/information/county/main.html',
        resolve: helper.resolveFor('angularBootstrapNavTree')
    })
    .state('app.county.county_1_1', {
        url: '/county_1_1?area',
        title: 'county_1_1',
        controller: 'countyController1',
        templateUrl: 'app/views/information/county/county_1_1.html',
    })
    .state('app.county.county_1_2', {
        url: '/county_1_2?area',
        title: 'county_1_2',
        controller: 'countyController2',
        templateUrl: 'app/views/information/county/county_1_2.html',
    })
    .state('app.county.county_1_3', {
        url: '/county_1_3?area',
        title: 'county_1_3',
        controller: 'countyController3',
        templateUrl: 'app/views/information/county/county_1_3.html',
    })
    .state('app.county.county-onsite', {
        url: '/county-onsite',
        title: 'county-onsite',
        templateUrl: 'app/views/information/county/onsite.html',
        resolve: helper.resolveFor('angular-rickshaw')
    })
//  .state('app.county-analysis', {
//      url: '/county-analysis',
//      title: 'county-analysis',
//      templateUrl: 'app/views/information/county/analysis.html',
//  })
    .state('app.county-equipment', {
        url: '/county-equipment?area',
        title: 'county-equipment',
        controller: 'countyEquipCtrl',
        templateUrl: 'app/views/information/county/equipment.html',
    })
    .state('app.county-worker', {
        url: '/county-worker',
        title: 'county-worker',
        templateUrl: 'app/views/information/county/worker.html',
    })
    .state('app.county-chemistry', {
        url: '/county-chemistry',
        title: 'county-chemistry',
        templateUrl: 'app/views/information/county/chemistry.html',
        resolve: helper.resolveFor('chartjs')
    })
    .state('app.county-monitor', {
        url: '/county-monitor',
        title: 'county-monitor',
        templateUrl: 'app/views/information/county/monitor.html',
    })
    .state('app.county-Energy', {
        url: '/county-Energy',
        title: 'county-Energy',
        templateUrl: 'app/views/information/county/Energy.html',
        resolve: helper.resolveFor('chartjs')
    })
    .state('app.county-worker2', {
        url: '/county-worker2',
        title: 'county-worker2',
        templateUrl: 'app/views/information/county/worker2.html',
    })
    .state('app.county-worker3', {
        url: '/county-worker3',
        title: 'county-worker3',
        templateUrl: 'app/views/information/county/worker3.html',
    })
    .state('app.county-Energy2', {
        url: '/county-Energy2',
        title: 'county-Energy2',
        templateUrl: 'app/views/information/county/Energy2.html',
        resolve: helper.resolveFor('chartjs')
    })
    .state('app.county-Energy3', {
        url: '/county-Energy3',
        title: 'county-Energy3',
        templateUrl: 'app/views/information/county/Energy3.html',
        resolve: helper.resolveFor('chartjs')
    })
    .state('app.county-equipment-detail', {
        url: '/county-equipment-detail?code',
        title: 'county-equipment-detail',
        controller: 'countyEquipDetailCtrl',
        templateUrl: 'app/views/information/county/equipment_detail.html',
    })
    
    
    //展示页面
    .state('app.county.county_1_2_baifeng', {
        url: '/county_1_2_baifeng',
        title: 'county_1_2_baifeng',
        templateUrl: 'app/views/information/county/county_1_2_baifeng.html',
    })
    .state('app.county.county_1_3_baifeng', {
        url: '/county_1_3_baifeng',
        title: 'county_1_3_baifeng',
        templateUrl: 'app/views/information/shows/county_1_3_baifeng.html',
    })
    .state('app.county.county_1_3_guanzhuang', {
        url: '/county_1_3_guanzhuang',
        title: 'county_1_3_guanzhuang',
        templateUrl: 'app/views/information/shows/county_1_3_guanzhuang.html',
    })
    .state('app.county.county_1_3_siyan', {
        url: '/county_1_3_siyan',
        title: 'county_1_3_siyan',
        templateUrl: 'app/views/information/shows/county_1_3_siyan.html',
    })
    .state('app.county.county_1_3_xinfeng', {
        url: '/county_1_3_xinfeng',
        title: 'county_1_3_xinfeng',
        templateUrl: 'app/views/information/shows/county_1_3_xinfeng.html',
    })
    .state('app.county.county_1_3_yangdong', {
        url: '/county_1_3_yangdong',
        title: 'county_1_3_yangdong',
        templateUrl: 'app/views/information/shows/county_1_3_yangdong.html',
    })
    .state('app.county.county_1_3_qinshan', {
        url: '/county_1_3_qinshan',
        title: 'county_1_3_qinshan',
        templateUrl: 'app/views/information/shows/county_1_3_qinshan.html',
    })
    .state('app.county.county_1_3_shangyang', {
        url: '/county_1_3_shangyang',
        title: 'county_1_3_shangyang',
        templateUrl: 'app/views/information/shows/county_1_3_shangyang.html',
    })
    .state('app.county.county_1_3_xiayang', {
        url: '/county_1_3_xiayang',
        title: 'county_1_3_xiayang',
        templateUrl: 'app/views/information/shows/county_1_3_xiayang.html',
    })
    .state('app.county-equipment_baifeng', {
        url: '/county-equipment_baifeng',
        title: 'county-equipment_baifeng',
        templateUrl: 'app/views/information/shows/equipment_baifeng.html',
    })
    .state('app.county-equipment-detail_baifeng', {
        url: '/county-equipment-detail_baifeng',
        title: 'county-equipment-detail_baifeng',
        templateUrl: 'app/views/information/shows/equipment_detail_baifeng.html',
    })
    .state('app.county-equipment_guanzhuang', {
        url: '/county-equipment_guanzhuang',
        title: 'county-equipment_guanzhuang',
        templateUrl: 'app/views/information/shows/equipment_guanzhuang.html',
    })
    .state('app.county-equipment-detail_guanzhuang', {
        url: '/county-equipment-detail_guanzhuang',
        title: 'county-equipment-detail_guanzhuang',
        templateUrl: 'app/views/information/shows/equipment_detail_guanzhuang.html',
    })
    .state('app.county-equipment-detail_guanzhuang2', {
        url: '/county-equipment-detail_guanzhuang2',
        title: 'county-equipment-detail_guanzhuang2',
        templateUrl: 'app/views/information/shows/equipment_detail_guanzhuang2.html',
    })
    .state('app.county-equipment-detail_guanzhuang3', {
        url: '/county-equipment-detail_guanzhuang3',
        title: 'county-equipment-detail_guanzhuang3',
        templateUrl: 'app/views/information/shows/equipment_detail_guanzhuang3.html',
    })
    .state('app.county-equipment_siyan', {
        url: '/county-equipment_siyan',
        title: 'county-equipment_siyan',
        templateUrl: 'app/views/information/shows/equipment_siyan.html',
    })
    .state('app.county-equipment-detail_siyan', {
        url: '/county-equipment-detail_siyan',
        title: 'county-equipment-detail_siyan',
        templateUrl: 'app/views/information/shows/equipment_detail_siyan.html',
    })
    .state('app.county-equipment-detail_siyan2', {
        url: '/county-equipment-detail_siyan2',
        title: 'county-equipment-detail_siyan2',
        templateUrl: 'app/views/information/shows/equipment_detail_siyan2.html',
    })
    .state('app.county-equipment_xinfeng', {
        url: '/county-equipment_xinfeng',
        title: 'county-equipment_xinfeng',
        templateUrl: 'app/views/information/shows/equipment_xinfeng.html',
    })
    .state('app.county-equipment-detail_xinfeng', {
        url: '/county-equipment-detail_xinfeng',
        title: 'county-equipment-detail_xinfeng',
        templateUrl: 'app/views/information/shows/equipment_detail_xinfeng.html',
    })
    .state('app.county-equipment_yangdong', {
        url: '/county-equipment_yangdong',
        title: 'county-equipment_yangdong',
        templateUrl: 'app/views/information/shows/equipment_yangdong.html',
    })
    .state('app.county-equipment-detail_yangdong', {
        url: '/county-equipment-detail_yangdong',
        title: 'county-equipment-detail_yangdong',
        templateUrl: 'app/views/information/shows/equipment_detail_yangdong.html',
    })
    .state('app.county-equipment-detail_yangdong2', {
        url: '/county-equipment-detail_yangdong2',
        title: 'county-equipment-detail_yangdong2',
        templateUrl: 'app/views/information/shows/equipment_detail_yangdong2.html',
    })
    .state('app.county-equipment-detail_yangdong3', {
        url: '/county-equipment-detail_yangdong3',
        title: 'county-equipment-detail_yangdong3',
        templateUrl: 'app/views/information/shows/equipment_detail_yangdong3.html',
    })
    .state('app.county-equipment-detail_yangdong4', {
        url: '/county-equipment-detail_yangdong4',
        title: 'county-equipment-detail_yangdong4',
        templateUrl: 'app/views/information/shows/equipment_detail_yangdong4.html',
    })
    .state('app.county-equipment-detail_yangdong5', {
        url: '/county-equipment-detail_yangdong5',
        title: 'county-equipment-detail_yangdong5',
        templateUrl: 'app/views/information/shows/equipment_detail_yangdong5.html',
    })
    .state('app.county-equipment-detail_yangdong6', {
        url: '/county-equipment-detail_yangdong6',
        title: 'county-equipment-detail_yangdong6',
        templateUrl: 'app/views/information/shows/equipment_detail_yangdong6.html',
    })
    .state('app.county-equipment_qinshan', {
        url: '/county-equipment_qinshan',
        title: 'county-equipment_qinshan',
        templateUrl: 'app/views/information/shows/equipment_qinshan.html',
    })
    .state('app.county-equipment-detail_qinshan', {
        url: '/county-equipment-detail_qinshan',
        title: 'county-equipment-detail_qinshan',
        templateUrl: 'app/views/information/shows/equipment_detail_qinshan.html',
    })
    .state('app.county-equipment_shangyang', {
        url: '/county-equipment_shangyang',
        title: 'county-equipment_shangyang',
        templateUrl: 'app/views/information/shows/equipment_shangyang.html',
    })
    .state('app.county-equipment-detail_shangyang', {
        url: '/county-equipment-detail_shangyang',
        title: 'county-equipment-detail_shangyang',
        templateUrl: 'app/views/information/shows/equipment_detail_shangyang.html',
    })
    .state('app.county-equipment_xiayang', {
        url: '/county-equipment_xiayang',
        title: 'county-equipment_xiayang',
        templateUrl: 'app/views/information/shows/equipment_xiayang.html',
    })
    .state('app.county-equipment-detail_xiayang', {
        url: '/county-equipment-detail_xiayang',
        title: 'county-equipment-detail_xiayang',
        templateUrl: 'app/views/information/shows/equipment_detail_xiayang.html',
    })
    .state('app.county-equipment-detail_xiayang2', {
        url: '/county-equipment-detail_xiayang2',
        title: 'county-equipment-detail_xiayang2',
        templateUrl: 'app/views/information/shows/equipment_detail_xiayang2.html',
    })
    //工作人员
    .state('app.county-worker_beilun', {
        url: '/county-worker_beilun',
        title: 'county-worker_beilun',
        templateUrl: 'app/views/information/shows/workers/worker_beilun.html',
    })
    .state('app.county-worker2_baifeng', {
        url: '/county-worker2_baifeng',
        title: 'county-worker2_baifeng',
        templateUrl: 'app/views/information/shows/workers/worker2_baifeng.html',
    })
    .state('app.county-worker3_baifeng', {
        url: '/county-worker3_baifeng',
        title: 'county-worker3_baifeng',
        templateUrl: 'app/views/information/shows/workers/worker3_baifeng.html',
    })
    .state('app.county-worker3_guanzhuang', {
        url: '/county-worker3_guanzhuang',
        title: 'county-worker3_guanzhuang',
        templateUrl: 'app/views/information/shows/workers/worker3_guanzhuang.html',
    })
    .state('app.county-worker3_qinshan', {
        url: '/county-worker3_qinshan',
        title: 'county-worker3_qinshan',
        templateUrl: 'app/views/information/shows/workers/worker3_qinshan.html',
    })
    .state('app.county-worker3_siyan', {
        url: '/county-worker3_siyan',
        title: 'county-worker3_siyan',
        templateUrl: 'app/views/information/shows/workers/worker3_siyan.html',
    })
    .state('app.county-worker3_xinfeng', {
        url: '/county-worker3_xinfeng',
        title: 'county-worker3_xinfeng',
        templateUrl: 'app/views/information/shows/workers/worker3_xinfeng.html',
    })
    .state('app.county-worker3_yangdong', {
        url: '/county-worker3_yangdong',
        title: 'county-worker3_yangdong',
        templateUrl: 'app/views/information/shows/workers/worker3_yangdong.html',
    })
    .state('app.county-worker3_shangyang', {
        url: '/county-worker3_shangyang',
        title: 'county-worker3_shangyang',
        templateUrl: 'app/views/information/shows/workers/worker3_shangyang.html',
    })
    .state('app.county-worker3_xiayang', {
        url: '/county-worker3_xisyang',
        title: 'county-worker3_xiayang',
        templateUrl: 'app/views/information/shows/workers/worker3_xiayang.html',
    })
    
    

    //设备信息
    .state('app.equipment', {
        url: '/equipment',
        title: 'equipment',
        templateUrl: 'app/views/information/equipment/main.html',
        controller: 'equipmentController',
        resolve: helper.resolveFor('angularBootstrapNavTree','morris')
    })
    .state('app.equipment.equipment_1', {
        url: '/equipment_1?area',
        title: 'equipment_1',
        templateUrl: 'app/views/information/equipment/equipment_1.html',
        resolve: helper.resolveFor()
    })
    /*.state('app.equipment.equipment_2', {
        url: '/equipment_2',
        title: 'equipment_2',
        templateUrl: 'app/views/information/equipment/equipment_2.html',
        resolve: helper.resolveFor()
    })
    .state('app.equipment.equipment_2_1', {
        url: '/equipment_2',
        title: 'equipment_2',
        templateUrl: 'app/views/information/equipment/equipment_2_1.html',
        resolve: helper.resolveFor()
    })*/
    .state('app.equipment.equipment_3', {
        url: '/equipment_3?area',
        title: 'equipment_3',
        templateUrl: 'app/views/information/equipment/equipment_3.html',
        resolve: helper.resolveFor()
    })
    .state('app.equip_table_1', {
        url: '/table_1',
        title: 'table_1',
        controller: 'equipOperaCtrl',
        templateUrl: 'app/views/information/equipment/equipment_table_1.html',
        resolve: helper.resolveFor()
    })
    .state('app.equip_table_2', {
        url: '/table_2',
        title: 'table_2',
        templateUrl: 'app/views/information/equipment/equipment_table_2.html',
        resolve: helper.resolveFor()
    })
    .state('app.equip_table_3', {
        url: '/table_3',
        title: 'table_3',
        templateUrl: 'app/views/information/equipment/equipment_table_3.html',
        resolve: helper.resolveFor()
    })
    
    
    
    /*.state('app.dashboard2', {
        url: '/dashboard2',
        title: 'dashboard2',
        templateUrl: 'app/views/dashboard2.html',
        controller: 'dashboardController2'
    })*/
    
    
    //报表信息
    .state('app.report', {
        url: '/report',
        title: 'report',
        templateUrl: 'app/views/information/report/main.html',
        controller: 'reportController',
        resolve: helper.resolveFor('angularBootstrapNavTree')
    })
    .state('app.report.table1', {
        url: '/table1',
        title: 'table1',
        templateUrl: 'app/views/information/report/table_1.html'
    })
    .state('app.report_edit', {
        url: '/report_edit',
        title: 'report_edit',
        params:{"data":null},
        templateUrl: 'app/views/information/report/edit.html',
        resolve: helper.resolveFor('parsley')
    })
    .state('app.report.table2', {
        url: '/table2',
        title: 'table2',
        templateUrl: 'app/views/information/report/table_2.html'
    })
    .state('app.report.table3', {
        url: '/table3',
        title: 'table3',
        templateUrl: 'app/views/information/report/table_3.html'
    })
    .state('app.report.table4', {
        url: '/table4',
        title: 'table4',
        templateUrl: 'app/views/information/report/table_4.html'
    })
    .state('app.report.table5', {
        url: '/table5',
        title: 'table5',
        templateUrl: 'app/views/information/report/table_5.html'
    })
    .state('app.report.table6', {
        url: '/table6',
        title: 'table6',
        templateUrl: 'app/views/information/report/table_6.html'
    })
    .state('app.report.table7', {
        url: '/table7',
        title: 'table7',
        templateUrl: 'app/views/information/report/table_7.html'
    })
    .state('app.report.table8', {
        url: '/table8',
        title: 'table8',
        templateUrl: 'app/views/information/report/table_8.html'
    })
    .state('app.report.table9', {
        url: '/table9',
        title: 'table9',
        templateUrl: 'app/views/information/report/table_9.html'
    })
    .state('app.report.table10', {
        url: '/table10',
        title: 'table10',
        templateUrl: 'app/views/information/report/table_10.html'
    })
    .state('app.report.table11', {
        url: '/table11',
        title: 'table11',
        templateUrl: 'app/views/information/report/table_11.html'
    })
    .state('app.report.table12', {
        url: '/table12',
        title: 'table12',
        templateUrl: 'app/views/information/report/table_12.html'
    })
    
    
    
    
    .state('app.report_edit2', {
        url: '/report_edit2',
        title: 'report_edit2',
        params:{"data":null},
        templateUrl: 'app/views/information/report/edit2.html',
        resolve: helper.resolveFor()
    })
    .state('app.report_edit3', {
        url: '/report_edit3',
        title: 'report_edit3',
        params:{"data":null},
        templateUrl: 'app/views/information/report/edit3.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_edit4', {
        url: '/report_edit4',
        title: 'report_edit4',
        params:{"data":null},
        templateUrl: 'app/views/information/report/edit4.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_edit5', {
        url: '/report_edit5',
        title: 'report_edit5',
        params:{"data":null},
        templateUrl: 'app/views/information/report/edit5.html',
        resolve: helper.resolveFor('ui.select')
    })
	.state('app.report_edit6', {
        url: '/report_edit6',
        title: 'report_edit6',
        params:{"data":null},
        templateUrl: 'app/views/information/report/edit6.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_edit7', {
        url: '/report_edit7',
        title: 'report_edit7',
        params:{"data":null},
        templateUrl: 'app/views/information/report/edit7.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_edit8', {
        url: '/report_edit8',
        title: 'report_edit8',
        params:{"data":null},
        templateUrl: 'app/views/information/report/edit8.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_edit9', {
        url: '/report_edit9',
        title: 'report_edit9',
        params:{"data":null},
        templateUrl: 'app/views/information/report/edit9.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_edit10', {
        url: '/report_edit10',
        title: 'report_edit10',
        params:{"data":null},
        templateUrl: 'app/views/information/report/edit10.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_edit11', {
        url: '/report_edit11',
        title: 'report_edit11',
        params:{"data":null},
        templateUrl: 'app/views/information/report/edit11.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_edit12', {
        url: '/report_edit12',
        title: 'report_edit12',
        params:{"data":null},
        templateUrl: 'app/views/information/report/edit12.html',
        resolve: helper.resolveFor()
    })

//	.state('app.nestable', {
//      url: '/nestable',
//      title: 'Nestable',
//      templateUrl: helper.basepath('nestable.html'),
//      resolve: helper.resolveFor('ng-nestable')
//  })


    // 
    // Single Page Routes
    // ----------------------------------- 
    .state('page', {
        url: '/page',
        templateUrl: 'app/pages/page.html',
        controller: ["$rootScope", function($rootScope) {
            $rootScope.app.layout.isBoxed = false;
        }]
    })
    .state('page.login', {
        url: '/login',
        title: "Login",
        templateUrl: 'app/pages/login.html'
    })
    .state('page.register', {
        url: '/register',
        title: "Register",
        templateUrl: 'app/pages/register.html'
    })
    .state('page.recover', {
        url: '/recover',
        title: "Recover",
        templateUrl: 'app/pages/recover.html'
    })
    .state('page.lock', {
        url: '/lock',
        title: "Lock",
        templateUrl: 'app/pages/lock.html'
    })
    .state('page.404', {
        url: '/404',
        title: "Not Found",
        templateUrl: 'app/pages/404.html'
    })
   
    
    // 
    // CUSTOM RESOLVES
    //   Add your own resolves properties
    //   following this object extend
    //   method
    // ----------------------------------- 
    // .state('app.someroute', {
    //   url: '/some_url',
    //   templateUrl: 'path_to_template.html',
    //   controller: 'someController',
    //   resolve: angular.extend(
    //     helper.resolveFor(), {
    //     // YOUR RESOLVES GO HERE
    //     }
    //   )
    // })
    ;


}]).config(['$ocLazyLoadProvider', 'APP_REQUIRES', function ($ocLazyLoadProvider, APP_REQUIRES) {
    'use strict';

    // Lazy Load modules configuration
    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
      modules: APP_REQUIRES.modules
    });

}]).config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ( $controllerProvider, $compileProvider, $filterProvider, $provide) {
      'use strict';
      // registering components after bootstrap
      App.controller = $controllerProvider.register;
      App.directive  = $compileProvider.directive;
      App.filter     = $filterProvider.register;
      App.factory    = $provide.factory;
      App.service    = $provide.service;
      App.constant   = $provide.constant;
      App.value      = $provide.value;

}]);







//directives











/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/
App
  .constant('APP_COLORS', {
    'primary':                '#5d9cec',
    'success':                '#27c24c',
    'info':                   '#23b7e5',
    'warning':                '#ff902b',
    'danger':                 '#f05050',
    'inverse':                '#131e26',
    'green':                  '#37bc9b',
    'pink':                   '#f532e5',
    'purple':                 '#7266ba',
    'dark':                   '#3a3f51',
    'yellow':                 '#fad732',
    'gray-darker':            '#232735',
    'gray-dark':              '#3a3f51',
    'gray':                   '#dde6e9',
    'gray-light':             '#e4eaec',
    'gray-lighter':           '#edf1f2'
  })
  .constant('APP_MEDIAQUERY', {
    'desktopLG':             1200,
    'desktop':                992,
    'tablet':                 768,
    'mobile':                 480
  })
  .constant('APP_REQUIRES', {
    // jQuery based and standalone scripts
    scripts: {     
      'icons':              ['vendor/simple-line-icons/css/simple-line-icons.css'],
      'animate':            ['vendor/animate.css/animate.min.css'],
      'classyloader':       ['vendor/jquery-classyloader/js/jquery.classyloader.min.js'],
      'sparklines':         ['app/vendor/sparklines/jquery.sparkline.min.js'],
      'screenfull':         ['vendor/screenfull/dist/screenfull.js'], 
      'chartjs':            ['vendor/chart.js/dist/Chart.min.js'],
      'highcharts':         ['vendor/highcharts/highcharts.js'],
      'highcharts.plugin':  [
//    						'vendor/highcharts/modules/exporting.js',
//    						'vendor/highcharts/modules/series-label.js',
      						'vendor/highcharts/modules/oldie.js',
      						'vendor/highcharts-plugins/highcharts-zh_CN.js'
      						],
      'vector-map':         ['vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js',
                             'vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css'],
      'vector-map-maps':    ['vendor/jvectormap/jquery-jvectormap-cn-mill.js'],	
      'flot-chart':         ['vendor/Flot/jquery.flot.js'],
      'flot-chart-plugins': ['vendor/flot.tooltip/js/jquery.flot.tooltip.min.js',
                             'vendor/Flot/jquery.flot.resize.js',
                             'vendor/Flot/jquery.flot.pie.js',
                             'vendor/Flot/jquery.flot.time.js',
                             'vendor/Flot/jquery.flot.categories.js',
                             'vendor/flot-spline/js/jquery.flot.spline.min.js'],
      'moment':             ['vendor/moment/moment.js',
      						'vendor/moment/min/locales.min.js'],
      'parsley':            ['vendor/parsleyjs/dist/parsley.min.js'],
      'morris':             ['vendor/raphael/raphael.js',
                             'vendor/morris.js/morris.js',
                             'vendor/morris.js/morris.css'],
      'sweetalert':         ['vendor/sweetalert2/dist/sweetalert2.min.css',
      						 'vendor/sweetalert2/dist/sweetalert2.min.js']
                             

    },
    // Angular based script (use the right module name)
    modules: [
      {name: 'ui.select',                 files: ['vendor/angular-ui-select/dist/select.js',
                                                  'vendor/angular-ui-select/dist/select.css']},
      {name: 'datatables',                files: ['vendor/datatables/media/css/jquery.dataTables.css',
                                                  'vendor/datatables/media/js/jquery.dataTables.js',
                                                  'vendor/angular-datatables/dist/angular-datatables.js'], serie: true},
	  {name: 'ng-nestable',               files: ['vendor/angular-nestable/src/angular-nestable.js',
                                                  'vendor/angular-nestable/lib/jquery.nestable.js']},
      {name: 'angularBootstrapNavTree',   files: ['vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                                                  'vendor/angular-bootstrap-nav-tree/dist/abn_tree.css']}, 
      {name: 'angular-rickshaw',          files: ['vendor/d3/d3.min.js',
                                                  'vendor/rickshaw/rickshaw.js',
                                                  'vendor/rickshaw/rickshaw.min.css',
                                                  'vendor/angular-rickshaw/rickshaw.js'], serie: true},                                           

    ]
  })
;

App.controller("beneficiaryCtrl",["$scope","$stateParams", "$http", function($scope,$stateParams,$http){
	
	$scope.back = function(){
		history.go(-1);
	}
	
	var area = $stateParams.area;
	
	$scope.refreshBene = function(area){
		$http.post("/Seom/bhc/select",{area}).then(function(res){  //.get("server/select.json")
			$scope.benefit = res.data;
			$scope.currentPage = 1;
			$scope.totalItems = $scope.benefit.length;			
		},function(err){
			
		})
	};
	
	$scope.refreshBene(area);
	
	
	
}])


App.controller("cashCtrl",["$scope","$stateParams", "$http", function($scope,$stateParams,$http){
		
	$scope.back = function(){
		history.go(-1);
	}
	
	var area = $stateParams.area;
	
	$scope.refreshCash = function(area){
		$http.post("/Seom/msrc/select ",{area}).then(function(res){
			$scope.cash = res.data;
			$scope.currentPage = 1;
			$scope.totalItems = $scope.cash.length;			
		},function(err){
			
		})
	};
	
	$scope.refreshCash(area);
	
	
	
}])
/**=========================================================
区县信息
 =========================================================*/

App.controller('countyController', ['$scope',"$rootScope", '$timeout', '$http',"$state", function($scope,$rootScope, $timeout, $http,$state) {
 
 	$scope.defaultAddress = $rootScope.user.address;
 
	 //区县列表
	 $scope.my_tree = {};
	 $scope.level = $rootScope.user.jurisdiction;//权限
	
	 $scope.my_tree_handler = function(branch) {
	 	//	$scope.output = branch.data.description;
	 	$scope.output = branch.label;
//	 	$scope.area = $scope.output;
	 	//	console.log(branch);
	
	 	switch(branch.level) {
	 		case 1:
	 			$state.go("app.county.county_1_1", {
	 				area: $scope.output
	 			});
	 			/*if($scope.level <= 1) {
	 				
	 			} else {
	 				swal(
	 					'您没有查看该区域的权限',
	 					"",
	 					'error'
	 				)
	 			};*/
	 			break;
	 		case 2:
	 			$state.go("app.county.county_1_2", {
	 				area: $scope.output
	 			});
	 			/*if($scope.level <= 2) {
	 				
	 			} else {
					swal(
	 					'您没有查看该区域的权限',
	 					"",
	 					'error'
	 				)
	 			};*/
	 			break;
	 		case 3:
	 			$state.go("app.county.county_1_3", {
	 				area: $scope.output
	 			});
	 			break;
	
	 	}
	 };
	
	 $scope.my_data = angular.copy($rootScope.my_county);
	
	 //链接跳转	
	 $scope.goCounty2 = function(area) {
	 	//		$rootScope.area = area;
	 	var b = {}
	 	for(var i = 0; i < $scope.my_data.length; i++) {
	 		if($scope.my_data[i].label.indexOf(area) !== -1) {
	 			b = $scope.my_data[i];
	 			break;
	 		}
	 		if($scope.my_data[i].children) {
	 			for(var j = 0; j < $scope.my_data[i].children.length; j++) {
	 				if($scope.my_data[i].children[j].label.indexOf(area) !== -1) {
	 					b = $scope.my_data[i].children[j];
	 					break;
	 				}
	 				if($scope.my_data[i].children[j].children) {
	 					for(var n = 0; n < $scope.my_data[i].children[j].children.length; n++) {
	 						if($scope.my_data[i].children[j].children[n].label.indexOf(area) !== -1) {
	 							b = $scope.my_data[i].children[j].children[n];
	 							break;
	 						}
	 					}
	 				}
	 			}
	 		}
	
	 	}
	 	$scope.my_tree.select_branch(b);
	 	//		console.log($scope.my_tree,b);
	
	 }
	
	 
	
	 //图表 进度条
	
	 $scope.energy = [3, 6, 7, 8, 4, 5];
	 
}]);



App.controller("countyController1",["$scope","$rootScope","$http","$stateParams",function($scope,$rootScope,$http,$stateParams){
//	console.log($stateParams.area);
	$scope.area = $stateParams.area;

	//区县信息
	 $scope.itemsPerPage = 9;
	 $scope.currentPage = 1;
	 $http.post("/Seom/tbc/region",{area:$scope.area}).then(function(res) { //  get("server/county-11.json")
	 	var data = res.data;
	 	
	 	$scope.countyList = data.street;
	 	for(var i = 0; i < $scope.countyList.length; i++) {
	 		//图片
	 		if(!$scope.countyList[i].image){
				$scope.countyList[i].image = "app/img/county/baifengjiedao.jpg";
			}
	 		//简介
	 		if($scope.countyList[i].remarks.length > 60) {
	 			$scope.countyList[i].remark = $scope.countyList[i].remarks.slice(0, 60) + "...";
	 		}
	 	}
	 	$scope.totalItems = $scope.countyList.length;
	 	
	 	 
	 	 
	 	$scope.val1 = 80;//水质达标率
	 	$scope.val2 = (100*parseInt(data.install)/(parseInt(data.install)+parseInt(data.installNO))).toFixed(1) ;//设备安装率
	 	$scope.val3 = (100*parseInt(data.alreadyAreaBeneficiary)/parseInt(data.shouldAreaBeneficiary)).toFixed(1);//受益人数比例
	 	$scope.val4 = (100*parseInt(data.alreadyAreaPpaymentMoney)/parseInt(data.shouldAreaPpaymentMoney).toFixed(1));//资金支付比例
	 	$scope.pay = data.alreadyAreaPpaymentMoney;
	 	
	 }, function(err) {
	
	 })
	
}]);

App.controller("countyController2",["$scope","$rootScope","$http","$stateParams",function($scope,$rootScope,$http,$stateParams){
//	console.log($stateParams.area);
	$scope.area = $stateParams.area;
	$scope.itemsPerPage = 9;
	$scope.currentPage = 1;
	$http.post("/Seom/tbc/region",{area:$scope.area}).then(function(res){ // .get("server/county-12.json")
		var data = res.data;
		$scope.countyList = data.village;		
		$scope.totalItems = $scope.countyList.length;
		angular.forEach($scope.countyList,function(item,index){
			if(!item.image){
				item.image = "app/img/county/baifengcun.jpg";
			}
		})
		
		$scope.val1 = 80;//水质达标率
	 	$scope.val2 = (100*parseInt(data.install)/(parseInt(data.install)+parseInt(data.installNO))).toFixed(1) ;//设备安装率
	 	$scope.val3 = (100*parseInt(data.alreadyAreaBeneficiary)/parseInt(data.shouldAreaBeneficiary)).toFixed(1);//受益人数比例
	 	$scope.val4 = (100*parseInt(data.alreadyAreaPpaymentMoney)/parseInt(data.shouldAreaPpaymentMoney).toFixed(1));//资金支付比例
	 	$scope.pay = data.alreadyAreaPpaymentMoney;

	},function(err){
		
	})
	
}]);

App.controller("countyController3",["$scope","$rootScope","$http","$stateParams",function($scope,$rootScope,$http,$stateParams){
//	console.log($stateParams.area);
	$scope.area = $stateParams.area;
	
	
	$http.post("/Seom/tbc/region",{area:$scope.area}).then(function(res){ //get("server/county-13.json")
		$scope.village = res.data.v;
		if(!$scope.village.image){
			$scope.village.image = "app/img/county/baifengcun.jpg";
		}
	},function(err){
		
	})
	
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


//化验报告
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


App.controller("countyEquipCtrl",["$scope","$stateParams","$http",function($scope,$stateParams,$http){
	
	$scope.back = function(){
		history.go(-1);
	}
		
	
	$scope.refreshEquip = function(){
		$http.post("/Seom/fc/selectVillage",{area:$stateParams.area}).then(function(res){
			$scope.equip = res.data;

		},function(err){
			
		})
	}
	
	$scope.refreshEquip();
	
}])

App.controller("countyEquipDetailCtrl",["$scope","$stateParams","$http",function($scope,$stateParams,$http){
	
	$scope.back = function(){
		history.go(-1);
	}
	
	var code = $stateParams.code
	
	
	$scope.refreshEquipDel = function(){
		//设施信息
		$http.post("/Seom/equipmentc/selectCode",{facilityCode:code}).then(function(res){
			$scope.equipInfo = res.data[0];
			
			//设施状态
		  	$scope.facilitieStatus = [
		  		{id:1, name:"建设"}, {id:2, name:"运维"}, {id:3, name:"大修"}, {id:4, name:"重建"}, {id:5, name:"报废"}
		  	];
		  	for (var i = 0; i< $scope.facilitieStatus.length; i++) {
		  		if($scope.equipInfo.facilityState === $scope.facilitieStatus[i].id){
		  			$scope.equipInfo.facilityStateName = $scope.facilitieStatus[i].name;
		  		}
		  	}		  	
		},function(err){
			
		});
		
		//设施列表
		$http.post("/Seom/equipmentc/selectFacilityCode",{facilityCode:code}).then(function(res){
			$scope.equipList = res.data;
			if(!$scope.equipList){
				return;
			}
			
			//设备类型
	  		$scope.equipmentYypes = [{id:1, name:"土建"}, {id:2, name:"机电"}, {id:3, name:"监测"}, {id:4, name:"监控"}, {id:0, name:"其他"}];
	  		for (var i = 0; i<$scope.equipList.length; i++) {
	  			for(var j = 0; j<$scope.equipmentYypes.length; j++){
	  				if($scope.equipList[i].type === $scope.equipmentYypes[j].id){
	  					$scope.equipList[i].typeName = $scope.equipmentYypes[j].name;
	  				}
	  			}
	  		}

		},function(err){
			
		});
	}
	
	$scope.refreshEquipDel();
	
}])
//dashboard
App.controller("dashboardController",["$scope","$rootScope","$http","$state","$filter",function($scope,$rootScope,$http,$state,$filter){
	
	$scope.defaultAddress = $rootScope.user.address;
//	$scope.defaultAddress = "宁波";
	
	//站点数
	$http.get("/Seom/fc/selectTotal").then(function(res){
		$scope.siteNum = res.data;
	},function(err){
		
	});
	
	//故障数
	/*$http.get("/Seom/mrc/selectUnsolved").then(function(res){
		$scope.malfunction = res.data;
	},function(err){
		
	});*/
	
	
	
	
	$scope.waterInfo1 = 70;
	
	
	//站点搜索
	/*$http.get("/Seom/fc/selectRegion").then(function(res){  //   server/selectRegion.json
		var selectRegion = res.data;
		$scope.selectRegion = selectRegion;
		$scope.serachRegion = function(search){
			$scope.selectRegion = $filter('filter')(selectRegion, search);
		}
		
		for(var i=0; i<$scope.selectRegion.length; i++){
			switch($scope.selectRegion[i].facilityState){
				case "1":
					$scope.selectRegion[i].name = "建设";
					break;
				case "2":
					$scope.selectRegion[i].name = "运维";
					break;
				case "3":
					$scope.selectRegion[i].name = "大修";
					break;
				case "4":
					$scope.selectRegion[i].name = "重建";
					break;
				case "5":
					$scope.selectRegion[i].name = "报废";				
			}
		}
		

	},function(err){
		
	});*/
	
	





//天地图=====================================

//  server/map.json
// 是否在线isItOnline：1在线0离线；告警re：1告警，0正常；故障fault：是否故障1故障，0无故障；
	
	goState=function(area){
		
		$state.go("app.county-equipment",{area:area});
	}
	
	$http.get("/Seom/fc/selectAllFacilities").then(function(res){
						
		var map;
        var zoom = res.data.zoom;
        var mapData = res.data.json;
        $scope.villageNumber = res.data.villageNumber;
        $scope.personnelNumber = res.data.personnelNumber;
        
        //站点搜索--------------------
        var selectRegion = res.data.json;
		$scope.selectRegion = selectRegion;
		$scope.serachRegion = function(search){
			$scope.selectRegion = $filter('filter')(selectRegion, search);
			mapData = $scope.selectRegion;
			$scope.map();
			
		}
		
		for(var i=0; i<$scope.selectRegion.length; i++){
			switch($scope.selectRegion[i].facilityState){
				case "1":
					$scope.selectRegion[i].stateName = "建设";
					break;
				case "2":
					$scope.selectRegion[i].stateName = "运维";
					break;
				case "3":
					$scope.selectRegion[i].stateName = "大修";
					break;
				case "4":
					$scope.selectRegion[i].stateName = "重建";
					break;
				case "5":
					$scope.selectRegion[i].stateName = "报废";				
			}
		}


		//地图
        $scope.map = function(){
        	map = new T.Map('mapDiv');
        	if(mapData.length===0){
				map.centerAndZoom(new T.LngLat(121.56, 29.86), zoom);
				return;
			}
	        map.centerAndZoom(new T.LngLat(mapData[0].longitude_E, mapData[0].latitude_N), zoom);
	        
	        angular.forEach(mapData,function(data,index){
				var point = new T.LngLat(data.longitude_E,data.latitude_N);
	            
	            var icon;
	            if(data.isItOnline==1 && data.facilityState==="2"){
	            	data.isItOnline1="在线";
	            	icon = new T.Icon({
		                iconUrl: "app/img/map/mapicon2.png",
		                iconSize: new T.Point(25, 25),
		                iconAnchor: new T.Point(12, 23)
		            })
	            }else{
	            	data.isItOnline1="离线";
	            	icon = new T.Icon({
		                iconUrl: "app/img/map/mapicon4.png",
		                iconSize: new T.Point(25, 25),
		                iconAnchor: new T.Point(12, 23)
		            })
	            }
	            if(data.re==1){
	            	data.re1="告警";
	            	if(data.isItOnline==1 && data.facilityState==="2"){
	            		icon = new T.Icon({
			                iconUrl: "app/img/map/mapicon1.png",
			                iconSize: new T.Point(25, 25),
			                iconAnchor: new T.Point(12, 23)
			            })
	            	}
	            	
	            }else{
	            	data.re1="正常";
	            }
	            if(data.fault==1){
	            	data.fault1="故障";
	            	if(data.isItOnline==1 && data.facilityState==="2"){
	            		icon = new T.Icon({
			                iconUrl: "app/img/map/mapicon1.png",
			                iconSize: new T.Point(25, 25),
			                iconAnchor: new T.Point(12, 23)
			            })
	            	}
	            }else{
	            	data.fault1="无故障";
	            }
	            if(data.waterQuality<80){
	            	if(data.isItOnline==1 && data.facilityState==="2"){
	            		icon = new T.Icon({
			                iconUrl: "app/img/map/mapicon1.png",
			                iconSize: new T.Point(25, 25),
			                iconAnchor: new T.Point(12, 23)
			            })
	            	}
	            }
	            
	            var marker = new T.Marker(point, {icon: icon});// 创建标注
	            var content =  "<div>" +
	                "设施名称： " + "<span style='font-weight:bold; color:#5d9cec;'>" + data.name + "</span><br/>" +
	                "设施所在自然村： " + data.naturalVillage + "<br/>" +	 
	                "所在行政村： " + data.administrativeVillage + "<br/>" +	 
	                "在线状态： " + "<span>" + data.isItOnline1 + "</span><br/>" +
	                "告警状态： " + "<span>" + data.re1 + "</span><br/>" +
	                "故障状态： " + "<span>" + data.fault1 + "</span><br/>" +
	                "日处理量（吨）： " + data.dailyProcessing + "<br/>" +
	                "水质达标率： " + data.waterQuality + " % </span><br/> <div style='text-align:right;'>" +
	                "<a onClick='goState(&quot;"+ data.administrativeVillage+"&quot;);'>查看详情</a></div>"+
	                "</div>";
	            map.addOverLay(marker);
	            addClickHandler(content,marker,data.administrativeVillage);
			})
	        
	         function addClickHandler(content,marker,area){
	                marker.addEventListener("mouseover",function(e){
	                    openInfo(content,e)}
	                );
	                marker.addEventListener("click",function(e){
	                    goState(area);}
	                );
	            }
	         function openInfo(content,e){
	                var point = e.lnglat;
	                marker = new T.Marker(point);// 创建标注
	                var markerInfoWin = new T.InfoWindow(content,{offset:new T.Point(0,-20)}); // 创建信息窗口对象
	                map.openInfoWindow(markerInfoWin,point); //开启信息窗口
	            }
        }
        
		$scope.map();//地图初始化
		
	},function(err){
		
	})


		
	





	
/**=========================================================
 * Module: vmaps,js
 * jVector Maps support
 =========================================================*/
	
	/* $scope.seriesData = {
	    'CN-33': 138,   // 浙江
	  
	  };
	  
	  $scope.markersData = [
	    { latLng:[121, 29],  name:'NingBo City'},
	
	  ];	
	
	$scope.mapName = "cn_mill";*/
	
/*-------百度地图------------*/	
/*	var map = new BMap.Map("container");// 创建地图实例  

map.centerAndZoom("宁波", 11);// 初始化地图，设置中心点坐标和地图级别  
map.enableScrollWheelZoom(true);  //开启鼠标滚轮缩放
map.addControl(new BMap.NavigationControl());//开启左侧标尺工具
map.addControl(new BMap.MapTypeControl());//右上角地图类型
map.addControl(new BMap.ScaleControl());//左下角地图尺标
//map.enableContinuousZoom(); // 开启连续缩放效果

var point1 = new BMap.Point(121.9829107893,29.7909035932);// 创建点坐标  
var point2 = new BMap.Point(121.9834519127,29.8242360892);
var point3 = new BMap.Point(122.0001573897,29.8249272746);
var point4 = new BMap.Point(121.9871018426,29.8150895629);
var point5 = new BMap.Point(121.9990371438,29.8299256617);
var point6 = new BMap.Point(122.0145935722,29.8281734140);
var point7 = new BMap.Point(121.99654,29.884151);
var point8 = new BMap.Point(121.9845630227,29.8228471992);
var point9 = new BMap.Point(121.9803963527,29.8203471992);

var marker1 = new BMap.Marker(point1);
var marker2 = new BMap.Marker(point2);
var marker3 = new BMap.Marker(point3);
var marker4 = new BMap.Marker(point4);
var marker5 = new BMap.Marker(point5);
var marker6 = new BMap.Marker(point6);
var marker7 = new BMap.Marker(point7);
var marker8 = new BMap.Marker(point8);
var marker9 = new BMap.Marker(point9);

marker1.setTitle("北仑区白峰街道阳东村终端330206010209-04-030-D2");
marker2.setTitle("北仑区白峰街道阳东村终端330206010209-03-030-D2");
marker3.setTitle("北仑区白峰街道阳东村终端330206010209-02-030-D2");
marker4.setTitle("北仑区白峰街道阳东村终端330206010209-01-030-D2");
marker5.setTitle("北仑区白峰街道阳东村终端330206010209-05-030-D2");
marker6.setTitle("北仑区白峰街道阳东村终端330206010209-06-030-D2");
marker7.setTitle("北仑区白峰街道新峰村管网330206010204-01-000-00");
marker8.setTitle("北仑区白峰街道下阳村终端330206010207-02-036-D2");
marker9.setTitle("北仑区白峰街道下阳村终端330206010207-01-041-D2");

map.addOverlay(marker1);
map.addOverlay(marker2);
map.addOverlay(marker3);
map.addOverlay(marker4);
map.addOverlay(marker5);
map.addOverlay(marker6);
map.addOverlay(marker7);
map.addOverlay(marker8);
map.addOverlay(marker9);

marker1.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_yangdong");});
marker2.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_yangdong");});
marker3.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_yangdong");});
marker4.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_yangdong");});
marker5.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_yangdong");});
marker6.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_yangdong");});
marker7.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_xinfeng");});
marker8.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_xiayang");});
marker9.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_xiayang");});


var point10 = new BMap.Point(122.0048793434,29.8810418310);
var marker10 = new BMap.Marker(point10);
marker10.setTitle("北仑区白峰街道司沿村终端330206010205-02-200-D2");
map.addOverlay(marker10);
marker10.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_siyan");});

var point11 = new BMap.Point(121.9814911896,29.8381224756);
var marker11 = new BMap.Marker(point11);
marker11.setTitle("北仑区白峰街道勤山村终端330206010210-01-080-D2");
map.addOverlay(marker11);
marker11.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_qinshan");});

var point12 = new BMap.Point(122.0340009952,29.8777580698);
var marker12 = new BMap.Marker(point12);
marker12.setTitle("北仑区白峰街道官庄终端330206010202-03-030-D2");
map.addOverlay(marker12);
marker12.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_guanzhuang");});

var point13 = new BMap.Point(122.0512439540,29.8454169926);
var marker13 = new BMap.Marker(point13);
marker13.setTitle("北仑区白峰街道官庄终端330206010202-02-025-D2");
map.addOverlay(marker13);
marker13.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_guanzhuang");});

var point14 = new BMap.Point(122.0179009474,29.8783937828);
var marker14 = new BMap.Marker(point14);
marker14.setTitle("北仑区白峰街道官庄终端330206010202-01-020-D2");
map.addOverlay(marker14);
marker14.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_guanzhuang");});

var point15 = new BMap.Point(121.9814911896,29.8392335856);
var marker15 = new BMap.Marker(point15);
marker15.setTitle("北仑区白峰街道上阳村终端330206010208-01-046-D2");
map.addOverlay(marker15);
marker15.addEventListener("click", function showInfo(){ $state.go("app.county.county_1_3_shangyang");});*/


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//moment
	moment.locale('zh-cn', {
	    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	    weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	    longDateFormat : {
	        LT : 'HH:mm',
	        LTS : 'HH:mm:ss',
	        L : 'YYYY/MM/DD',
	        LL : 'YYYY年M月D日',
	        LLL : 'YYYY年M月D日Ah点mm分',
	        LLLL : 'YYYY年M月D日ddddAh点mm分',
	        l : 'YYYY/M/D',
	        ll : 'YYYY年M月D日',
	        lll : 'YYYY年M月D日 HH:mm',
	        llll : 'YYYY年M月D日dddd HH:mm'
	    },
	    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	    meridiemHour: function (hour, meridiem) {
	        if (hour === 12) {
	            hour = 0;
	        }
	        if (meridiem === '凌晨' || meridiem === '早上' ||
	                meridiem === '上午') {
	            return hour;
	        } else if (meridiem === '下午' || meridiem === '晚上') {
	            return hour + 12;
	        } else {
	            // '中午'
	            return hour >= 11 ? hour : hour + 12;
	        }
	    },
	    meridiem : function (hour, minute, isLower) {
	        var hm = hour * 100 + minute;
	        if (hm < 600) {
	            return '凌晨';
	        } else if (hm < 900) {
	            return '早上';
	        } else if (hm < 1130) {
	            return '上午';
	        } else if (hm < 1230) {
	            return '中午';
	        } else if (hm < 1800) {
	            return '下午';
	        } else {
	            return '晚上';
	        }
	    },
	    calendar : {
	        sameDay : '[今天]LT',
	        nextDay : '[明天]LT',
	        nextWeek : '[下]ddddLT',
	        lastDay : '[昨天]LT',
	        lastWeek : '[上]ddddLT',
	        sameElse : 'L'
	    },
	    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
	    ordinal : function (number, period) {
	        switch (period) {
	            case 'd':
	            case 'D':
	            case 'DDD':
	                return number + '日';
	            case 'M':
	                return number + '月';
	            case 'w':
	            case 'W':
	                return number + '周';
	            default:
	                return number;
	        }
	    },
	    relativeTime : {
	        future : '%s内',
	        past : '%s前',
	        s : '几秒',
	        ss : '%d 秒',
	        m : '1 分钟',
	        mm : '%d 分钟',
	        h : '1 小时',
	        hh : '%d 小时',
	        d : '1 天',
	        dd : '%d 天',
	        M : '1 个月',
	        MM : '%d 个月',
	        y : '1 年',
	        yy : '%d 年'
	    },
	    week : {
	        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
	        dow : 1, // Monday is the first day of the week.
	        doy : 4  // The week that contains Jan 4th is the first week of the year.
	    }
	});
	
	$scope.month = moment().format("MMMM");
	$scope.week = moment().format("dddd");
	
	
	





}]);


//dashboard2
App.controller("dashboardController2",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	//排序
	$scope.orderType = "id";
	$scope.order = "";
	$scope.changeOrder = function(type){
		$scope.orderType = type;
		if($scope.order === ""){
			$scope.order ="-";
		}else{
			$scope.order ="";
		}
		$scope.datasource = $filter('orderBy')($scope.datasource, $scope.order + $scope.orderType);
	};
	
	
	
	
	
	
	//下拉菜单		
    $scope.placement = {
        options: [5,10,20],                   
    };
        
	
	$scope.selectPage = function(newPage){
		$scope.selectedpage = newPage;
	}
	$scope.setPageSize = function(pagesize){
		$scope.pageSize = pagesize;
		$scope.selectedpage = 1;
	}
	
	
	
	//搜索
	$scope.searchItem = function(){
		$scope.totalItems = $filter('filter')($scope.datasource, $scope.search).length;
	}
	
	
	$http.get("server/datatable.json").then(function(res){
		$scope.datasource = res.data;
		$scope.totalItems = $scope.datasource.length;
	},function(err){
		console.warn(err);
	})
			
	$scope.selectedpage = 1;
	$scope.pageSize = 5;
	
	
	
}]);




//----------能耗统计----------

App.controller('energyController0', ['$scope',"colors", function($scope,colors ){
	  // Bar chart
// ----------------------------------- 

$scope.barChart = function(){		
		var ctx = document.getElementById("energyChart0").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
				datasets: [

		        {
		            backgroundColor : colors.byName('primary'),
		            data : [28,48,40,19,96,27,100,156,55,40],
		            label: '耗电量 单位 度'
		        }
				
				],
				labels: [
					"北仑区","镇海区","鄞州区","江北区","海曙区","奉化区","象山县","宁海县","慈溪市","余姚市"
				]
			},
		    options: {
		        responsive: true,
		        legend: {
		          display: true,
		          position: 'top',
		          boxWidth: 20,
		        }
		
		    }
		});
	}
	
$scope.barChart();
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

/*				{
		            backgroundColor : colors.byName('info'),
		            data : [65,59,90,81,56,55,40]
		        },*/
		        {
		            backgroundColor : colors.byName('primary'),
		            data : [28,48,40,19,96,27,100,156,55,40],
		            label: '耗电量 单位 度'
		        }
				
				],
				labels: [
					"白峰街道","梅山街道","春晓街道","新碶街道","霞浦街道","小港街道","郭巨街道","柴桥街道","大碶街道","大榭街道"
				]
			},
		    options: {
		        responsive: true,
		        legend: {
		          display: true,
		          position: 'top',
		          boxWidth: 20,
		        }
		
		    }
		});
	}
	
$scope.barChart();
}]);


App.controller('countybarController2', ['$scope',"colors", function($scope,colors ){
	  // Bar chart
// ----------------------------------- 

$scope.barChart = function(){		
		var ctx = document.getElementById("barChart2").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
				datasets: [

/*				{
		            backgroundColor : colors.byName('info'),
		            data : [65,59,90,81,56,55,40]
		        },*/
		        {
		            backgroundColor : colors.byName('primary'),
		            data : [28,48,40,19,96,27,100,156,55,40],
		            label: '耗电量 单位 度'
		        }
				
				],
				labels: [
					"白峰村","官庄村","勤山村","阳东村","司沿村","上阳村","下阳村","新峰村","神马村","门浦村"
				]
			},
		    options: {
		        responsive: true,
		        legend: {
		          display: true,
		          position: 'top',
		          boxWidth: 20,
		        }
		
		    }
		});
	}
	
$scope.barChart();
}]);

App.controller('countybarController3', ['$scope',"colors", function($scope,colors ){
	  // Bar chart
// ----------------------------------- 

$scope.barChart = function(){		
		var ctx = document.getElementById("barChart2").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
				datasets: [

		        {
		            backgroundColor : colors.byName('primary'),
		            data : [28,48,40,19,96,27,100,156,55,40],
		            label: '耗电量 单位 度'
		        }
				
				],
				labels: [
					"2017-09","2017-10","2017-11","2017-12","2018-01","2018-02","2018-03","2018-04","2018-05","2018-06"
				]
			},
		    options: {
		        responsive: true,
		        legend: {
		          display: true,
		          position: 'top',
		          boxWidth: 20,
		        }
		
		    }
		});
	}
	
$scope.barChart();
}]);
/**=========================================================
 * Module: 设备信息
 =========================================================*/

App.controller('equipmentController', ['$scope', "$rootScope", '$timeout', 'colors', '$http', '$state', function($scope, $rootScope, $timeout, colors, $http, $state) {
    $scope.defaultAddress = $rootScope.user.address;
	$scope.my_tree = {};

	$scope.my_tree_handler = function(branch) {

		$scope.output = branch.label;

		switch(branch.level) {
			case 1:
			case 2:
				$state.go("app.equipment.equipment_1", {
					area: $scope.output
				});
				break;
			case 3:
				$state.go("app.county-equipment", {
					area: $scope.output
				});
				break;

		}

	};

	// onSelect event handlers
	/*var apple_selected = function(branch) {
	  
	};*/

	$scope.my_data = angular.copy($rootScope.my_county);

	//链接跳转	
	$scope.goequip = function(area) {
		var b = {}
		for(var i = 0; i < $scope.my_data.length; i++) {
			if($scope.my_data[i].label.indexOf(area) !== -1) {
				b = $scope.my_data[i];
				break;
			}
			if($scope.my_data[i].children) {
				for(var j = 0; j < $scope.my_data[i].children.length; j++) {
					if($scope.my_data[i].children[j].label.indexOf(area) !== -1) {
						b = $scope.my_data[i].children[j];
						break;
					}
					if($scope.my_data[i].children[j].children) {
						for(var n = 0; n < $scope.my_data[i].children[j].children.length; n++) {
							if($scope.my_data[i].children[j].children[n].label.indexOf(area) !== -1) {
								b = $scope.my_data[i].children[j].children[n];
								break;
							}
						}
					}
				}
			}

		}
		$scope.my_tree.select_branch(b);

	}

}]);

App.controller('equipController1', ['$scope', '$stateParams', '$timeout', 'colors', '$http', function($scope, $stateParams, $timeout, colors, $http) {

	console.log($stateParams.area);
	$scope.area = $stateParams.area;
	$scope.area1 = $scope.area;
	$scope.area2 = $scope.area;

	
	$http.post("/Seom/equipmentc/region",{area:$scope.area}).then(function(res) { //server/equipment-1.json
		$scope.eq = res.data[0];
		
		//设备故障率------------
		$scope.chartdata = $scope.eq.efs;

		//设备巡检率---------
		$scope.inspection = $scope.eq.eis;
		$scope.xAxis = [];
		$scope.yAxis = [];
		angular.forEach($scope.inspection, function(item, index) {
			$scope.xAxis.push(item.shijian);
			$scope.yAxis.push(parseInt(item.num));
		})

		var options1 = {
			chart: {
				type: 'spline'
			},
			title: {
				text: ''
			},
			exporting: {
				buttons: {
					contextButton: {
						enabled: false,
					}
				}
			},
			credits: {
				enabled: false // 禁用版权信息
			},
			colors: ["#31C0BE"],
			xAxis: {
				categories: $scope.xAxis
			},
			yAxis: {
				title: {
					text: ''
				}
			},
			legend: {
				enabled: false
			},
			tooltip: {
				headerFormat: '{point.x}<br>',
				pointFormat: ' <b>{point.y}台</b>',
				style: { // 文字内容相关样式
					color: "#31C0BE",
					fontSize: "12px"
				}
			},

			plotOptions: {
				spline: {
					marker: {
						lineColor: '#31C0BE',
						lineWidth: 1
					}
				}
			},
			series: [{
				name: '设备巡检率',
				data: $scope.yAxis
			}]
		};
		// 图表初始化函数
		var chart = Highcharts.chart('inspection', options1);

		//设备分布情况
		$scope.distribution = $scope.eq.nis;
		var options = {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false
			},
			title: {
				text: ''
			},
			exporting: {
				buttons: {
					contextButton: {
						enabled: false,
					}
				}
			},
			credits: {
				enabled: false // 禁用版权信息
			},
			tooltip: {
				//          headerFormat: '{series.name}<br>',
				pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					minSize: 180,
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						distance: 10,
						format: '<span>{point.name}</span>: {point.percentage:.1f} %',
						style: {
							color: "#666666",
							fontSize: "12px",
							fontWeight: "normal",
							textOutline: "1px 1px contrast"
						}
					}
				}
			},
			series: [{
				type: 'pie',
				name: '设备分布情况',
				data: $scope.distribution
			}]
		};
		// 图表初始化函数
		var chart = Highcharts.chart('pieChart2', options);

		//街道列表
		$scope.areaList = $scope.eq.list;

	})
	/*$scope.chartdata = [
	    { y: "白峰街道", a: 100, b: 20 },
	    { y: "梅山街道", a: 75,  b: 15 },
	    { y: "春晓街道", a: 50,  b: 4 },
	    { y: "霞浦街道", a: 75,  b: 6 },
	    { y: "新碶街道", a: 50,  b: 4 },
	    { y: "小港街道", a: 75,  b: 15 },
	    { y: "郭巨街道", a: 100, b: 19 }
	];*/

	//----------设备故障率参数设置-----------
	$scope.barOptions = {
		xkey: 'shijian',
		ykeys: ["num"],
		labels: ["故障数"],
		//	    xLabelMargin: 2,
		barColors: [colors.byName('info'), colors.byName('danger')],
		resize: true
	};


	//巡检率选择
	$scope.selectInspect = function(area){
		$http.post("/Seom/equipmentc/selectEis",{area:area}).then(function(res){ //server/equip-inspect.json
			$scope.inspection = res.data;
			$scope.xAxis = [];
			$scope.yAxis = [];
			angular.forEach($scope.inspection, function(item, index) {
				$scope.xAxis.push(item.shijian);
				$scope.yAxis.push(parseInt(item.num));
			});
			
			var options1 = {
			chart: {
				type: 'spline'
			},
			title: {
				text: ''
			},
			exporting: {
				buttons: {
					contextButton: {
						enabled: false,
					}
				}
			},
			credits: {
				enabled: false // 禁用版权信息
			},
			colors: ["#31C0BE"],
			xAxis: {
				categories: $scope.xAxis
			},
			yAxis: {
				title: {
					text: ''
				}
			},
			legend: {
				enabled: false
			},
			tooltip: {
				headerFormat: '{point.x}<br>',
				pointFormat: ' <b>{point.y}台</b>',
				style: { // 文字内容相关样式
					color: "#31C0BE",
					fontSize: "12px"
				}
			},

			plotOptions: {
				spline: {
					marker: {
						lineColor: '#31C0BE',
						lineWidth: 1
					}
				}
			},
			series: [{
				name: '设备巡检率',
				data: $scope.yAxis
			}]
		};
		// 图表初始化函数
		var chart = Highcharts.chart('inspection', options1);
		},function(err){
			
		})
	}
	
	
	
	//故障率选择
	$scope.selectMal = function(area){
		$http.post("/Seom/equipmentc/selectEfs",{area:area}).then(function(res){ //server/equip-mal.json
			$scope.chartdata = res.data;
		},function(err){
			
		})
	}
	
	

}]);

//----------test---------
App.controller('equipController2', ['$scope', '$timeout', 'colors', '$http', function($scope, $timeout, colors, $http) {

	//设备故障率

	$scope.chartdata2 = [{
			area: "白峰村",
			a: 80,
			b: 9
		},
		{
			area: "官庄村",
			a: 75,
			b: 6
		},
		{
			area: "司沿村",
			a: 50,
			b: 4
		},
		{
			area: "新峰村",
			a: 75,
			b: 6
		},
		{
			area: "阳东村",
			a: 50,
			b: 4
		},
		{
			area: "勤山村",
			a: 75,
			b: 6
		},
		{
			area: "上阳村",
			a: 100,
			b: 9
		}
	];

	$scope.barOptions = {
		xkey: 'area',
		ykeys: ["a", "b"],
		labels: ["已安装", "故障率"],
		xLabelMargin: 2,
		barColors: [colors.byName('info'), colors.byName('danger')],
		resize: true
	};

	//设备巡检率
	var options1 = {
		chart: {
			type: 'spline'
		},
		title: {
			text: ''
		},
		exporting: {
			buttons: {
				contextButton: {
					enabled: false,
				}
			}
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		colors: ["#31C0BE"],
		xAxis: {
			categories: ['白峰村', '官庄村', '司沿村', '新峰村', '阳东村', '勤山村', '上阳村', '下阳村']
		},
		yAxis: {
			title: {
				text: ''
			}
		},
		legend: {
			enabled: false
		},
		tooltip: {
			headerFormat: '{point.x}<br>',
			pointFormat: ' <b>{point.y}%</b>',
			style: { // 文字内容相关样式
				color: "#31C0BE",
				fontSize: "12px"
			}
		},

		plotOptions: {
			spline: {
				marker: {
					lineColor: '#31C0BE',
					lineWidth: 1
				}
			}
		},
		series: [{
			name: '设备巡检率',
			data: [
				24, 14, 21, 29, 32, 30, 38, 40
			]
		}]
	};
	// 图表初始化函数
	var chart = Highcharts.chart('xunjianlv', options1);

	//设备分布情况
	var options = {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: ''
		},
		exporting: {
			buttons: {
				contextButton: {
					enabled: false,
				}
			}
		},
		credits: {
			enabled: false // 禁用版权信息
		},
		tooltip: {
			//          headerFormat: '{series.name}<br>',
			pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				minSize: 180,
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					distance: 10,
					format: '<span>{point.name}</span>: {point.percentage:.1f} %',
					style: {
						color: "#666666",
						fontSize: "12px",
						fontWeight: "normal",
						textOutline: "1px 1px contrast"
					}
				}
			}
		},
		series: [{
			type: 'pie',
			name: '设备分布情况',
			data: [
				['白峰村', 25.0],
				['官庄村', 26.8],
				{
					name: '司沿村',
					y: 12.8,
					sliced: true,
					selected: true
				},
				['新峰村', 8.5],
				['阳东村', 6.2],
				['勤山村', 17],
				['上阳村', 13]
			]
		}]
	};
	// 图表初始化函数
	var chart = Highcharts.chart('pieChart2', options);

	//piechart
	/*$scope.pieChart = function(){		
			var ctx = document.getElementById("pieChart2").getContext('2d');		
			var myChart = new Chart(ctx, {
			    type: 'pie',
			    data: {
					datasets: [{
						data: [
							200,
							50,
							100,
							150,
							20,
							30,
						],
						backgroundColor: [
							'#7266ba',
							'#ffef2b',						
							'rgba(35,183,229,1)',
							'#2b957a',
							'#ff902b',
							'#f05050'
						],
					}],
					labels: [
						'xxx村',
						'xx镇',
						'xx镇',
						'xx镇',
						'xx镇',
						'xx镇',
					]
				},
			    options: {
			        responsive: true,
			        legend: {
			          display: true,
			          position: 'bottom',
			          boxWidth: 10,
			        }
			
			    }
			});
		}
		
	$scope.pieChart();*/

}]);

//日期选择
App.controller('equipDateCtrl', function($scope) {
	$scope.dat = new Date();
	$scope.format = "yyyy/MM/dd";
	$scope.altInputFormats = ['yyyy/M!/d!'];

	$scope.popup1 = {
		opened: false
	};
	$scope.open1 = function() {
		$scope.popup1.opened = true;
	};

	$scope.popup2 = {
		opened: false
	};
	$scope.open2 = function() {
		$scope.popup2.opened = true;
	};

});

//运行记录
App.controller("equipOperaCtrl", ["$scope", "$stateParams", "$http", function($scope, $stateParams, $http) {

	$scope.back = function() {
		history.go(-1);
	}

	console.log($stateParams.area);

	$scope.refreshEquip = function() {
		$http.get("server/selectVillage.json").then(function(res) {
			$scope.opera = res.data;

		}, function(err) {

		})
	}

	$scope.refreshEquip();

}])
App.controller("installController",['$scope',"$http","$stateParams",function($scope,$http,$stateParams){
	console.log($stateParams.area);
	
	$scope.refresh = function(){
		$http.post("/Seom/equipmentc/select",{area:$stateParams.area}).then(function(res){
			$scope.equipment = res.data;
			
			$scope.areas = [];
			$scope.uninstalls = [];
			$scope.installs = [];
			for (var i=0; i<$scope.equipment.length; i++) {
				$scope.areas[i] = $scope.equipment[i].region;
				$scope.uninstalls[i] = parseInt($scope.equipment[i].shouldInstalled) - parseInt($scope.equipment[i].alreadyInstalled);
				$scope.installs[i] = parseInt($scope.equipment[i].alreadyInstalled);
				$scope.equipment[i].completion = (100*$scope.installs[i]/parseInt($scope.equipment[i].shouldInstalled)).toFixed(2);
				}
			
			
			// 图表配置
	        var options = {
	            chart: {
	                type: 'column'                          //指定图表的类型，默认是折线图（line）
	            },
	            title: {
	                text: '设备安装' ,                // 标题
	                align:"left",
	                style:{fontWeight: 'bold',fontSize: '16px'}
	            },
	            colors: ['#9DC2D3','#387AA3'] ,
	            xAxis: {
	                categories: $scope.areas   // x 轴分类
	            },
	            yAxis: {
	                title: {
	                    text: ''                // y 轴标题
	                }
	            },
	            exporting:{
		        	buttons:{
		        		contextButton:{
		        			enabled:false,
		        		}
		        	}
		        },
				credits:{
				     enabled: false // 禁用版权信息
				},   
				legend: {
		            align: 'right',	            
		            verticalAlign: 'top',	
		            floating: true,
		        },
		        tooltip: {
			         headerFormat: '{point.key}<br>',
		            pointFormat: '{point.series.name}  {point.y}台 <br/> <b>{point.percentage:.1f}%</b>'
		        }, 
	            plotOptions: {
		            column: {
		                stacking: 'normal'
		            }
		        },
	            series: [{                              // 数据列
	                name: '未安装',                        // 数据列名
	                data: $scope.uninstalls                    // 数据
	            }, {
	                name: '已安装',
	                data: $scope.installs
	            }]
	        };
	        // 图表初始化函数
	        var chart = Highcharts.chart('install', options);
	        
		},function(err){
			
		})
	}
	
	$scope.refresh();
 	
}])



App.controller("installController2",['$scope',"$http","$stateParams",function($scope,$http,$stateParams){
	
	$scope.back = function(){
		history.go(-1);
	}
	
	
	$scope.refresh = function(){
		$http.post("/Seom/equipmentc/select",{area:$stateParams.area}).then(function(res){
			$scope.equipment = res.data;
			
			$scope.areas = [];
			$scope.uninstalls = [];
			$scope.installs = [];
			for (var i=0; i<$scope.equipment.length; i++) {
				$scope.areas[i] = $scope.equipment[i].region;
				$scope.uninstalls[i] = parseInt($scope.equipment[i].shouldInstalled) - parseInt($scope.equipment[i].alreadyInstalled);
				$scope.installs[i] = parseInt($scope.equipment[i].alreadyInstalled);
				$scope.equipment[i].completion = (100*$scope.installs[i]/parseInt($scope.equipment[i].shouldInstalled)).toFixed(2);
				}
			
			
			// 图表配置
	        var options = {
	            chart: {
	                type: 'column'                          //指定图表的类型，默认是折线图（line）
	            },
	            title: {
	                text: '设备安装' ,                // 标题
	                align:"left",
	                style:{fontWeight: 'bold',fontSize: '16px'}
	            },
	            colors: ['#9DC2D3','#387AA3'] ,
	            xAxis: {
	                categories: $scope.areas   // x 轴分类
	            },
	            yAxis: {
	                title: {
	                    text: ''                // y 轴标题
	                }
	            },
	            exporting:{
		        	buttons:{
		        		contextButton:{
		        			enabled:false,
		        		}
		        	}
		        },
				credits:{
				     enabled: false // 禁用版权信息
				},   
				legend: {
		            align: 'right',	            
		            verticalAlign: 'top',	
		            floating: true,
		        },
		        tooltip: {
			         headerFormat: '{point.key}<br>',
		            pointFormat: '{point.series.name}  {point.y}台 <br/> <b>{point.percentage:.1f}%</b>'
		        }, 
	            plotOptions: {
		            column: {
		                stacking: 'normal'
		            }
		        },
	            series: [{                              // 数据列
	                name: '未安装',                        // 数据列名
	                data: $scope.uninstalls                    // 数据
	            }, {
	                name: '已安装',
	                data: $scope.installs
	            }]
	        };
	        // 图表初始化函数
	        var chart = Highcharts.chart('install', options);
	        
		},function(err){
			
		})
	}
	
	$scope.refresh();

 
}])



App.controller("installController3",['$scope',"$http","$stateParams",function($scope,$http,$stateParams){
	
	$scope.back = function(){
		history.go(-1);
	}
	
	
	$scope.refresh = function(){
		$http.post("/Seom/equipmentc/select",{area:$stateParams.area}).then(function(res){
			$scope.equipment = res.data;
			
			$scope.areas = [];
			$scope.uninstalls = [];
			$scope.installs = [];
			for (var i=0; i<$scope.equipment.length; i++) {
				$scope.areas[i] = $scope.equipment[i].region;
				$scope.uninstalls[i] = parseInt($scope.equipment[i].shouldInstalled) - parseInt($scope.equipment[i].alreadyInstalled);
				$scope.installs[i] = parseInt($scope.equipment[i].alreadyInstalled);
				$scope.equipment[i].completion = (100*$scope.installs[i]/parseInt($scope.equipment[i].shouldInstalled)).toFixed(2);
				}
			
			
			// 图表配置
	        var options = {
	            chart: {
	                type: 'column'                          //指定图表的类型，默认是折线图（line）
	            },
	            title: {
	                text: '设备安装' ,                // 标题
	                align:"left",
	                style:{fontWeight: 'bold',fontSize: '16px'}
	            },
	            colors: ['#9DC2D3','#387AA3'] ,
	            xAxis: {
	                categories: $scope.areas   // x 轴分类
	            },
	            yAxis: {
	                title: {
	                    text: ''                // y 轴标题
	                }
	            },
	            exporting:{
		        	buttons:{
		        		contextButton:{
		        			enabled:false,
		        		}
		        	}
		        },
				credits:{
				     enabled: false // 禁用版权信息
				},   
				legend: {
		            align: 'right',	            
		            verticalAlign: 'top',	
		            floating: true,
		        },
		        tooltip: {
			         headerFormat: '{point.key}<br>',
		            pointFormat: '{point.series.name}  {point.y}台 <br/> <b>{point.percentage:.1f}%</b>'
		        }, 
	            plotOptions: {
		            column: {
		                stacking: 'normal'
		            }
		        },
	            series: [{                              // 数据列
	                name: '未安装',                        // 数据列名
	                data: $scope.uninstalls                    // 数据
	            }, {
	                name: '已安装',
	                data: $scope.installs
	            }]
	        };
	        // 图表初始化函数
	        var chart = Highcharts.chart('install', options);
	        
		},function(err){
			
		})
	}
	
	$scope.refresh();
 
 		
}])



/**=========================================================
 * Module: main.js
 * Main Application Controller
 =========================================================*/

App.controller('AppController',
  ['$rootScope', '$scope', '$state','$window', '$timeout', 'colors',
  function($rootScope, $scope, $state,  $window,  $timeout, toggle, colors) {
    "use strict";


    // Loading bar transition
    // ----------------------------------- 
    var thBar;
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if($('.wrapper > section').length) // check if bar container exists
          thBar = $timeout(function() {
            cfpLoadingBar.start();
          }, 0); // sets a latency Threshold
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        event.targetScope.$watch("$viewContentLoaded", function () {
          $timeout.cancel(thBar);
          cfpLoadingBar.complete();
        });
    });


    // Hook not found
    $rootScope.$on('$stateNotFound',
      function(event, unfoundState, fromState, fromParams) {
          console.log(unfoundState.to); // "lazy.state"
          console.log(unfoundState.toParams); // {a:1, b:2}
          console.log(unfoundState.options); // {inherit:false} + default options
      });
    // Hook error
    $rootScope.$on('$stateChangeError',
      function(event, toState, toParams, fromState, fromParams, error){
        console.log(error);
      });
    // Hook success
    $rootScope.$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams) {
        // display new view from top
        $window.scrollTo(0, 0);
        // Save the route title
        $rootScope.currTitle = $state.current.title;
      });

    $rootScope.currTitle = $state.current.title;
    $rootScope.pageTitle = function() {
      var title = $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
      document.title = title;
      return title;
    };

    // iPad may presents ghost click issues
    // if( ! browser.ipad )
      // FastClick.attach(document.body);

    // Close submenu when sidebar change from collapsed to normal
    $rootScope.$watch('app.layout.isCollapsed', function(newValue, oldValue) {
      if( newValue === false )
        $rootScope.$broadcast('closeSidebarMenu');
    });

    // Restore layout settings
//  if( angular.isDefined($localStorage.layout) )
//    $scope.app.layout = $localStorage.layout;
//  else
//    $localStorage.layout = $scope.app.layout;
//
//  $rootScope.$watch("app.layout", function () {
//    $localStorage.layout = $scope.app.layout;
//  }, true);

    
    // Allows to use branding color with interpolation
    // {{ colorByName('primary') }}
//  $scope.colorByName = colors.byName;

    // Hides/show user avatar on sidebar
    $scope.toggleUserBlock = function(){
      $scope.$broadcast('toggleUserBlock');
    };


    // Restore application classes state
//  toggle.restoreState( $(document.body) );

    // cancel click event easily
    $rootScope.cancel = function($event) {
      $event.stopPropagation();
    };

}]);

App.controller("malfunctionCtrl",["$scope","$http",function($scope,$http){

	$scope.updateMal = function(){
		$http.get("server/malfunctions.json").then(function(res){
			$scope.malData = res.data;
			$scope.currentPage = 1;			
			$scope.totalItems = $scope.malData.length;
			
		},function(err){
			
		})
	};
	
	$scope.updateMal();
	
	
}])
/**=========================================================
 * Module: nestable.js
 * Nestable controller
 =========================================================*/

App.controller('NestableController', ['$scope', function($scope) {
  
  'use strict';

  $scope.items =  [
    {
      item: {text: 'a'},
      children: []
    },
    {
      item: {text: 'b'},
      children: [
        {
          item: {text: 'c'},
          children: []
        },
        {
          item: {text: 'd'},
          children: []
        }
      ]
    },
    {
      item: {text: 'e'},
      children: []
    },
    {
      item: {text: 'f'},
      children: []
    }
  ];

  $scope.items2 =  [
    {
      item: {text: '1'},
      children: []
    },
    {
      item: {text: '2'},
      children: [
        {
          item: {text: '3'},
          children: []
        },
        {
          item: {text: '4'},
          children: []
        }
      ]
    },
    {
      item: {text: '5'},
      children: []
    },
    {
      item: {text: '6'},
      children: []
    }
  ]


}]);

/**=========================================================
 * Module: 
 * Angular controller
 =========================================================*/

App.controller('reportController', ['$scope','$rootScope', '$http','$state',function($scope,$rootScope, $http,$state ) {
  'use strict';
  
  $scope.level = $rootScope.user.jurisdiction;
  

	$scope.my_tree_handler = function(branch) {
		$scope.output = branch.data.description;
	//  return $scope.output;
		$state.go($scope.output);
  	};

  // onSelect event handlers
  var apple_selected = function(branch) {
    
  };

  var treedata_avm = [
    {
      label: '运维记录',
      children: [
        {
          label: '故障报表',
		  data: {
            description: "app.report.table1"
         }
        }, {
          label: '巡检报表',
          data: {
            description: "app.report.table2"
          }
        }, {
          label: '化验报表',
          data: {
            description: "app.report.table3"
          }
        },
        {
          label: '运维月报表',
          data: {
            description: "app.report.table7"
          }
        },
        {
          label: '运维季报表',
          data: {
            description: "app.report.table8"
          }
        }
      ]
    }, {
      label: '行政机构',      
      children: [
        {
          label: '镇基本信息表',
          data: {
	        description: "app.report.table4"
	      }
        }, {
          label: '镇工作人员信息表',
          data: {
	        description: "app.report.table5"
	      }
        },
        {
          label: '行政村基本信息表',
          data: {
	        description: "app.report.table9"
	      }
        },
        {
          label: '自然村信息表',
          data: {
	        description: "app.report.table10"
	      }
        }
      ]
    }, {
      label: '设备相关',
      children: [
     	
        {
          label: '设施基本信息表',
          data: {
	        description: "app.report.table11"
	      }
        },
        {
          label: '设施监督员关联表',
          data: {
	        description: "app.report.table12"
	      }
        },
        {
          label: '设施设备信息表',
          data: {
	        description: "app.report.table6"
	      }
        }
      ]
    }
  ];
  

  $scope.my_data = treedata_avm;

  


		




  // Ajax 
  $scope.table1 = function(){
  	$http.get("/Seom/mrc/get").then(function(res){
	  	$scope.malfunctions = res.data;
	  	$scope.totalItems = $scope.malfunctions.length;
	  })
  };
  
  $scope.table2 = function(){
  	$http.get("/Seom/irs/get").then(function(res){
	  	$scope.inspection = res.data;
	  	$scope.totalItems = $scope.inspection.length;
	  })
  };
  
  $scope.table3 = function(){
  	$http.get("/Seom/arc/get").then(function(res){
	  	$scope.laboratory = res.data;
	  	$scope.totalItems = $scope.laboratory.length;
	  })
  };
  
  $scope.table4 = function(){
  	$http.get("/Seom/tbc/get").then(function(res){
	  	$scope.adUnit = res.data;
	  	$scope.totalItems = $scope.adUnit.length;
	  })
  };
  
  $scope.table5 = function(){
  	$http.get("/Seom/pic/get").then(function(res){
	  	$scope.opUnit = res.data;
	  	$scope.totalItems = $scope.opUnit.length;
	  		  	
	  })
  };
  
  
  $scope.table6 = function(){
  	$http.get("/Seom/equipmentc/get").then(function(res){
	  	$scope.equipment = res.data;
	  	$scope.totalItems = $scope.equipment.length;
	  })
  };
  
  $scope.table7 = function(){
  	$http.get("/Seom/mmrc/get").then(function(res){
	  	$scope.monthly = res.data;
	  	$scope.totalItems = $scope.monthly.length;
	  })
  };
  
  $scope.table8 = function(){
  	$http.get("/Seom/msrc/get").then(function(res){
	  	$scope.jidu = res.data;
	  	$scope.totalItems = $scope.jidu.length;
	  })
  };
  
  $scope.table9 = function(){
  	$http.get("/Seom/aVillagec/get").then(function(res){
	  	$scope.vBasic = res.data;
	  	$scope.totalItems = $scope.vBasic.length;
	  })
  };
  
  $scope.table10 = function(){
  	$http.get("/Seom/avuvc/get").then(function(res){
	  	$scope.avuvc = res.data;
	  	$scope.totalItems = $scope.avuvc.length;
	  })
  };
  
  $scope.table11 = function(){
  	$http.get("/Seom/fc/get").then(function(res){
	  	$scope.fc = res.data;
	  	$scope.totalItems = $scope.fc.length;
	  })
  };
  
  $scope.table12 = function(){
  	$http.get("/Seom/fmsc/get").then(function(res){
	  	$scope.fmsc = res.data;
	  	$scope.totalItems = $scope.fmsc.length;
	  })
  };
  
$scope.pages=[5,10,25];
$scope.currentPage = 1;
$scope.itemsPerPage = 10;
$scope.selectPage = function(page){
	$scope.currentPage = page;
};
$scope.changePageSize = function(page){
	$scope.itemsPerPage = page;
}

//$scope.edit = function(data){
//	console.log("edit",data);
//	$state.go("app.report_edit10",{data:JSON.stringify(data)});
//};




//审核
  $scope.verify1 = function(id,verify){
  	$http.post("/Seom/mrc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify2 = function(id,verify){
  	$http.post("/Seom/irs/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify3 = function(id,verify){
  	$http.post("/Seom/arc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify4 = function(id,verify){
  	$http.post("/Seom/tbc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify5 = function(id,verify){
  	$http.post("/Seom/pic/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  		  	
	  })
  };
  
  
  $scope.verify6 = function(id,verify){
  	$http.post("/Seom/equipmentc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify7 = function(id,verify){
  	$http.post("/Seom/mmrc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify8 = function(id,verify){
  	$http.post("/Seom/msrc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify9 = function(id,verify){
  	$http.post("/Seom/aVillagec/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify10 = function(id,verify){
  	$http.post("/Seom/avuvc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify11 = function(id,verify){
  	$http.post("/Seom/fc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify12 = function(id,verify){
  	$http.post("/Seom/fmsc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };




//删除
$scope.remove1 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table1();
	},function(err){
		
	})
}
$scope.remove2 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table2();
	},function(err){
		
	})
}
$scope.remove3 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table3();
	},function(err){
		
	})
}
$scope.remove4 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table4();
	},function(err){
		
	})
}
$scope.remove5 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table5();
	},function(err){
		
	})
}
$scope.remove6 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table6();
	},function(err){
		
	})
}
$scope.remove7 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table7();
	},function(err){
		
	})
}
$scope.remove8 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table8();
	},function(err){
		
	})
}

$scope.remove9 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table9();
	},function(err){
		
	})
}
$scope.remove10 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table10();
	},function(err){
		
	})
}
$scope.remove11 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table11();
	},function(err){
		
	})
}

$scope.remove12 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table12();
	},function(err){
		
	})
}




}]);



App.controller("reportEditCtrl",["$scope","$state","$stateParams","$http",function($scope,$state,$stateParams,$http){
//	console.log(JSON.parse($stateParams.data));
//	$scope.data =JSON.parse($stateParams.data);
	$scope.data = $stateParams.data;
	console.log($stateParams.data);
	if(($state.current.name ==="app.report_edit4"||$state.current.name ==="app.report_edit9"|| $state.current.name ==="app.report_edit10")&&!$scope.data){
		$scope.data = {
			image:null,
		};
		//image	
		var input  = document.getElementById("image"); // input file
		input.onchange = function(){		
		    var file = this.files[0];
		        if(!!file){
		            var reader = new FileReader();
		            // 图片文件转换为base64
		            reader.readAsDataURL(file);
		            reader.onload = function(){
		                // 显示图片
		                document.getElementById("file_img").src = this.result;
		                $scope.data.image = this.result;
		        }
		    }
		}
	}
	
	
		//人员类别
		$scope.personCategories=[
			{id:1, name:"1-工作人员"},
			{id:2, name:"2-部门联系人"},
			{id:3, name:"3-部门负责人"},
			{id:4, name:"4-分管负责人"},
			{id:5, name:"5-单位负责人"},
			{id:6, name:"6-投诉受理人"}
		];
	  	//纳厂信息
	  	$scope.plants = [
	  		{id:1, name:"1-全部纳厂"}, {id:2, name:"2-全部非纳厂"}, {id:3, name:"3-部分纳厂"}
	  	];
	  	//设施建设
	  	$scope.facilities = [
	  		{id:1, name:"1-未建（农污）"}, {id:2, name:"2-全部建（农污）"}, {id:3, name:"3-部分建（农污）"}
	  	];
	  	//设施状态
	  	$scope.facilitieStatus = [
	  		{id:1, name:"1-建设"}, {id:2, name:"2-运维"}, {id:3, name:"3-大修"}, {id:4, name:"4-重建"}, {id:5, name:"5-报废"}
	  	];
	  	//监测监控
	  	$scope.monitor = [{id:1, name:"1-是 "},{id:2, name:"2-否"}];
	  	//监督员级别
	  	$scope.supervisorLevels = [{id:1, name:"1-村"}, {id:2, name:"2-镇"}, {id:3, name:"3-县（区、市）"}];
	  	//设备类型
	  	$scope.equipmentYypes = [{id:1, name:"1-土建"}, {id:2, name:"2-机电"}, {id:3, name:"3-监测"}, {id:4, name:"4-监控"}, {id:0, name:"0-其他"}];
	
	
	//datepicker
		$scope.dat = new Date();
        $scope.format = "yyyy/MM/dd";
        $scope.altInputFormats = ['yyyy/M!/d!'];
 
        $scope.popup1 = {
            opened: false
            };
       	$scope.open1 = function () {
            $scope.popup1.opened = true;
        };
             
        $scope.popup2 = {
            opened: false
        };
        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };
        
        $scope.popup3 = {
            opened: false
        };
        $scope.open3 = function () {
            $scope.popup3.opened = true;
        };
	
	
	
	
	
	
	
	
    
    	$scope.update1 = function(){
    		$http.post("/Seom/mrc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    			
    		},function(err){
    			swal(				  
				  err.data,
				  '',
				  'error'
				)
    		});
    	};
    	
    	$scope.update2 = function(){
    		$http.post("/Seom/irs/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update3 = function(){
    		$http.post("/Seom/arc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update4 = function(){
    		$http.post("/Seom/tbc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update5 = function(){
    		console.log($scope.data);
    		$http.post("/Seom/pic/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update6 = function(){
    		$http.post("/Seom/equipmentc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update7 = function(){
    		$http.post("/Seom/mmrc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update8 = function(){
    		$http.post("/msrc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update9 = function(){
    		$http.post("/Seom/aVillagec/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update10 = function(){
    		$http.post("/Seom/avuvc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update11 = function(){
    		$http.post("/Seom/fc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update12 = function(){
    		$http.post("/Seom/fmsc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    
    
}])







App.controller("PaginationCtrl",["$scope",function($scope){
//	$scope.maxSize = 5;
//  $scope.totalItems = 175;
    
}])
/**=========================================================
 * Module: sidebar-menu.js
 * Handle sidebar collapsible elements
 =========================================================*/

App.controller('SidebarController', ['$rootScope', '$scope', '$state', '$http', '$timeout',"$filter",
  function($rootScope, $scope, $state, $http, $timeout,$filter){

    var collapseList = [];
    // demo: when switch from collapse to hover, close all items
    $rootScope.$watch('app.layout.asideHover', function(oldVal, newVal){
      if ( newVal === false && oldVal === true) {
        closeAllBut(-1);
      }
    });

    // Check item and children active state
    var isActive = function(item) {

      if(!item) return;

      if( !item.sref || item.sref == '#') {
        var foundActive = false;
        angular.forEach(item.submenu, function(value, key) {
          if(isActive(value)) foundActive = true;
        });
        return foundActive;
      }
      else
        return $state.is(item.sref) || $state.includes(item.sref);
    };

    // Load menu from json file
    // ----------------------------------- 
    
    $scope.getMenuItemPropClasses = function(item) {
      return (item.heading ? 'nav-heading' : '') +
             (isActive(item) ? ' active' : '') ;
    };

    $scope.loadSidebarMenu = function() {

      var menuJson = 'server/sidebar-menu.json',
          menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
      

      $http.get(menuURL).then(function(items){
           $scope.menuItems = items.data;
           if($rootScope.app.level>=2){
           	$scope.menuItems = $filter("filter")($scope.menuItems,function(item){
           		if(!item.level){
           			return true;
           		}
           	})
           }
       },function(err){
       		console.warn(err);
       });
       
     };

     $scope.loadSidebarMenu();
     

    // Handle sidebar collapse items
    // ----------------------------------- 

    $scope.addCollapse = function($index, item) {
      collapseList[$index] = $rootScope.app.layout.asideHover ? true : !isActive(item);
    };

    $scope.isCollapse = function($index) {
      return (collapseList[$index]);
    };

    $scope.toggleCollapse = function($index, isParentItem) {


      // collapsed sidebar doesn't toggle drodopwn
//    if( Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover ) return true;

      // make sure the item index exists
      if( angular.isDefined( collapseList[$index] ) ) {
        if ( ! $scope.lastEventFromChild ) {
          collapseList[$index] = !collapseList[$index];
          closeAllBut($index);
        }
      }
      else if ( isParentItem ) {
        closeAllBut(-1);
      }
      
      $scope.lastEventFromChild = isChild($index);

      return true;
    
    };

    function closeAllBut(index) {
      index += '';
      for(var i in collapseList) {
        if(index < 0 || index.indexOf(i) < 0)
          collapseList[i] = true;
      }
    }

    function isChild($index) {
      return (typeof $index === 'string') && !($index.indexOf('-') < 0);
    }

}]);

/**=========================================================
 * Module: notifications.js
 * Initializes the notifications system
 =========================================================*/
App.controller('statController', ['$scope','$http',"colors", function($scope,$http,colors){

	//受益户数
	$http.get("/Seom/tbc/ph").then(function(res){
		var project = res.data;	
		var alreadybene =100*parseInt(project.alreadyAreaBeneficiary)/parseInt(project.shouldAreaBeneficiary);
		var unbene = 100*(parseInt(project.shouldAreaBeneficiary) - parseInt(project.alreadyAreaBeneficiary))/parseInt(project.shouldAreaBeneficiary);
		$scope.project = [
			{ value: alreadybene, type: "darkblue" },
	        { value: unbene, type: "lightblue" }
	    ];
	    $scope.phAddress = project.address;
//	    console.log(project);
	},function(err){
		
	})
	
	
	//资金进度
	$http.get("/Seom/msrc/paymentMoney").then(function(res){
		var fund = res.data;	
		var f1 = parseInt(fund.paymentMoney);
		var f2 = parseInt(fund.NOpaymentMoney);
		var f0 = f1 + f2;
		var pay =100*f1/f0;
		var nopay = 100*f2/f0;
	    $scope.funds = [
			{ value: pay, type: "darkorange" },
	        { value: nopay, type: "lightorange" }
	    ];
	    $scope.fundsAddress = fund.address;
	    console.log($scope.funds);
	},function(err){
		
	})
	
    


// 耗能统计
 // ----------------------------------- 

	$http.get("server/chart/barstacked.json").then(function(res){
		$scope.barStackeData = res.data;
		var Color = ["#b2aaea","#7266ba","#554a96"];		
		for (i = 0 ; i<$scope.barStackeData.length; i++) {
			$scope.barStackeData[i].color = Color[i]; 
		};
		console.log($scope.barStackeData);
	})

	  $scope.barStackedOptions = {
	      series: {
	          stack: true,
	          bars: {
	              align: 'center',
	              lineWidth: 0,
	              show: true,
	              barWidth: 0.6,
	              fill: 0.9
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
	          tickColor: '#fcfcfc',
	          mode: 'categories'
	      },
	      yaxis: {
	          min: 0,
	          max: 200, // optional: use it for a clear represetation
	          position: ($scope.app.layout.isRTL ? 'right' : 'left'),
	          tickColor: '#eee'
	      },
	      shadowSize: 0
	  };




	
// 设备统计
// ----------------------------------- 
	
	$http.get("/Seom/equipmentc/selectInstall").then(function(res){
		$scope.installNum = res.data;
		var options = {
	        chart: {
	            plotBackgroundColor: null,
	            plotBorderWidth: null,
	            plotShadow: false
	        },
	        colors: ['#7266ba',
					'#ffef2b'],
	        title: {
	            text: ''
	        },
	        exporting:{
	        	buttons:{
	        		contextButton:{
	        			enabled:false,
	        		}
	        	}
	        },
			credits:{
			     enabled: false // 禁用版权信息
			},        
	        tooltip: {
	            headerFormat: '{point.key}<br>',
	            pointFormat: '{point.y} 台 <b>{point.percentage:.1f}%</b>'
	        },
	        plotOptions: {
	            pie: {
	            	minSize: 180,
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    distance: 10,                   
	                    format: '<span>{point.name}</span>: {point.percentage:.1f} %',
	                    style: {
	                        color: "#666666",
	                        fontSize: "12px",
	                        fontWeight: "normal",
	                        textOutline: "1px 1px contrast"
	                    }
	                },
	                showInLegend: true
	            }
	        },
	        series: [{
	            type: 'pie',
	            name: '设备分布情况',
	            data: [
	                ['安装完成',   parseInt($scope.installNum.install)],
	                ['等待安装',   parseInt($scope.installNum.installNO)]                
	            ]
	        }]
        };
	    // 图表初始化函数
	    var chart = Highcharts.chart('statPieChart', options);
	},function(err){
		
	})
	




// Line chart
// ----------------------------------- 

	$scope.lineChart = function(){
		var ctx = document.getElementById("lineChart").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ['2018-08','2018-09','2018-10','2018-11','2018-12','2018-01','2018-02','2018-03'],
		        datasets: [
			        {
			            label: '总体水质平均达标情况（%）',
			            data: [65, 70, 80, 81, 77, 88, 84,90],
			            backgroundColor: 'rgba(114,102,186,0.5)',
						borderColor: 'rgba(114,102,186,1)',
			            borderWidth: 1
			        },
			        {
			            label: '水质达标要求（%）',
			            data: [70, 70, 70, 70, 70, 70,70,70],
			            backgroundColor: 'rgba(35,183,229,0.5)',
						borderColor: 'rgba(35,183,229,1)',
			            borderWidth: 1
			        },
		        ]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:false
		                }
		            }]
		        }
		    }
		});

	}
	
	$scope.lineChart();




}]);




/**=========================================================
 * Module: vmaps,js
 * jVector Maps support
 =========================================================*/

App.controller('VectorMapController', ['$scope', function($scope) {
  'use strict';

  $scope.seriesData = {
    'CA': 11100,   // Canada
    'DE': 2510,    // Germany
    'FR': 3710,    // France
    'AU': 5710,    // Australia
    'GB': 8310,    // Great Britain
    'RU': 9310,    // Russia
    'BR': 6610,    // Brazil
    'IN': 7810,    // India
    'CN': 4310,    // China
    'US': 839,     // USA
    'SA': 410      // Saudi Arabia
  };
  
  $scope.markersData = [
    { latLng:[41.90, 12.45],  name:'Vatican City'          },
    { latLng:[43.73, 7.41],   name:'Monaco'                },
    { latLng:[-0.52, 166.93], name:'Nauru'                 },
    { latLng:[-8.51, 179.21], name:'Tuvalu'                },
    { latLng:[7.11,171.06],   name:'Marshall Islands'      },
    { latLng:[17.3,-62.73],   name:'Saint Kitts and Nevis' },
    { latLng:[3.2,73.22],     name:'Maldives'              },
    { latLng:[35.88,14.5],    name:'Malta'                 },
    { latLng:[41.0,-71.06],   name:'New England'           },
    { latLng:[12.05,-61.75],  name:'Grenada'               },
    { latLng:[13.16,-59.55],  name:'Barbados'              },
    { latLng:[17.11,-61.85],  name:'Antigua and Barbuda'   },
    { latLng:[-4.61,55.45],   name:'Seychelles'            },
    { latLng:[7.35,134.46],   name:'Palau'                 },
    { latLng:[42.5,1.51],     name:'Andorra'               }
  ];

}]);


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


//实时告警
App.controller("warningCurrentCtrl",["$scope","$http",function($scope,$http){

	$scope.updateWarn = function(){
		$http.get("1").then(function(res){
			$scope.warnData = res.data;
			$scope.currentPage = 1;
			if(!$scope.warnData){
				$scope.totalItems=0;
				return;
			}
			
			$scope.totalItems = $scope.warnData.length;
			
		},function(err){
			
		})
	};
	
	$scope.updateWarn();
	
	
}]);



//历史告警
App.controller("warningHistoryCtrl",["$scope","$http",function($scope,$http){

	$scope.updateWarnHistory = function(){
		$http.get("2").then(function(res){
			$scope.warnHistoryData = res.data;
			$scope.currentPage = 1;
			if(!$scope.warnHistoryData){
				$scope.totalItems=0;
				return;
			}
			$scope.totalItems = $scope.warnHistoryData.length;
			
		},function(err){
			
		})
	};
	
	$scope.updateWarnHistory();
	
	
}])

App.controller("waterQualityController",["$scope",function($scope){
	// Line chart
// ----------------------------------- 

	$scope.lineChart = function(){
		var ctx = document.getElementById("lineChart").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ["北仑区","镇海区","鄞州区","江北区","海曙区","奉化区","象山县","宁海县"],
		        datasets: [
			        {
			            label: '实际水质达标率（%）',
			            data: [65, 70, 80, 81, 77, 88, 84,90],
			            backgroundColor: 'rgba(114,102,186,0.5)',
						borderColor: 'rgba(114,102,186,1)',
			            borderWidth: 1
			        },
			        {
			            label: '水质平均达标率（%）',
			            data: [70, 70, 70, 70, 70, 70,70,70],
			            backgroundColor: 'rgba(35,183,229,0.5)',
						borderColor: 'rgba(35,183,229,1)',
			            borderWidth: 1
			        },
		        ]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:false
		                }
		            }]
		        }
		    }
		});

	}
	
	$scope.lineChart();
	
}]);





App.controller("waterQualityController2",["$scope",function($scope){
	// Line chart
// ----------------------------------- 

	$scope.lineChart = function(){
		var ctx = document.getElementById("lineChart").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ["白峰街道","梅山街道","春晓街道","新碶街道","霞浦街道","小港街道","郭巨街道","柴桥街道"],
		        datasets: [
			        {
			            label: '实际水质达标率（%）',
			            data: [65, 70, 80, 81, 77, 88, 84,90],
			            backgroundColor: 'rgba(114,102,186,0.5)',
						borderColor: 'rgba(114,102,186,1)',
			            borderWidth: 1
			        },
			        {
			            label: '水质平均达标率（%）',
			            data: [70, 70, 70, 70, 70, 70,70,70],
			            backgroundColor: 'rgba(35,183,229,0.5)',
						borderColor: 'rgba(35,183,229,1)',
			            borderWidth: 1
			        },
		        ]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:false
		                }
		            }]
		        }
		    }
		});

	}
	
	$scope.lineChart();
	
}]);




App.controller("waterQualityController3",["$scope",function($scope){
	// Line chart
// ----------------------------------- 

	$scope.lineChart = function(){
		var ctx = document.getElementById("lineChart").getContext('2d');		
		var myChart = new Chart(ctx, {
		    type: 'line',
		    data: {
		        labels: ["白峰村","官庄村","勤山村","阳东村","司沿村","上阳村","下阳村","新峰村"],
		        datasets: [
			        {
			            label: '实际水质达标率（%）',
			            data: [65, 70, 80, 81, 77, 88, 84,90],
			            backgroundColor: 'rgba(114,102,186,0.5)',
						borderColor: 'rgba(114,102,186,1)',
			            borderWidth: 1
			        },
			        {
			            label: '水质平均达标率（%）',
			            data: [70, 70, 70, 70, 70, 70,70,70],
			            backgroundColor: 'rgba(35,183,229,0.5)',
						borderColor: 'rgba(35,183,229,1)',
			            borderWidth: 1
			        },
		        ]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:false
		                }
		            }]
		        }
		    }
		});

	}
	
	$scope.lineChart();
	
}]);

App.controller("countyWorkerCtrl",["$scope",function($scope){
	
	
	/*$scope.cunNames=[
		"白峰村",
		"官庄村",
		"司岩村",
		"新峰村",
		"阳东村",
		"勤山村",
		"上阳村",
		"下阳村",
		"门浦村"
	]*/
	
	

	$scope.workers = [
		{
			name:"陈冠俊",
			work:"镇书记",
			mobile:"",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"",
			remark:""
		},
		{
			name:"汪越海",
			work:"镇长",
			mobile:"",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"",
			remark:""
		},
		{
			name:"沃波涛",
			work:"分管负责人",
			mobile:"13780078100",
			phone:"86787801",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"",
			remark:""
		},
		{
			name:"王志群",
			work:"部门负责人",
			mobile:"13819874987",
			phone:"86787922",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"",
			remark:""
		},
		{
			name:"汪可韩",
			work:"部门联系人",
			mobile:"15058299515",
			phone:"86787922",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"",
			remark:""
		},
		{
			name:"张建国",
			work:"党支部书记、分管负责人",
			mobile:"13858280218",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"门浦村",
			remark:""
		},
		{
			name:"胡世红",
			work:"村委会主任",
			mobile:"13567910333",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"门浦村",
			remark:""
		},
		{
			name:"周建成",
			work:"党支部书记、分管负责人",
			mobile:"13606842656",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"白峰村",
			remark:""
		},
		{
			name:"乐建明",
			work:"村委会主任",
			mobile:"13566331298",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"白峰村",
			remark:""
		},
		{
			name:"陈忠",
			work:"党支部书记、分管负责人",
			mobile:"13606843205",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"官庄村",
			remark:""
		},
		{
			name:"马汉东",
			work:"村委会主任",
			mobile:"13566517627",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"官庄村",
			remark:""
		},
		{
			name:"林纪伦",
			work:"党支部书记、分管负责人",
			mobile:"13685716090",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"勤山村",
			remark:""
		},
		{
			name:"胡彩祥",
			work:"村委会主任",
			mobile:"15968965198",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"勤山村",
			remark:""
		},
		{
			name:"王蛟龙",
			work:"党支部书记、分管负责人",
			mobile:"13486626223",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"上阳村",
			remark:""
		},
		{
			name:"王信平",
			work:"村委会主任",
			mobile:"15867308000",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"上阳村",
			remark:""
		},
		{
			name:"周祖青",
			work:"党支部书记、分管负责人",
			mobile:"13906692242",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"神马村",
			remark:""
		},
		{
			name:"曹静飞",
			work:"村委会主任",
			mobile:"13858361185",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"神马村",
			remark:""
		},
		{
			name:"金月芳",
			work:"党支部书记、分管负责人",
			mobile:"13906843419",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"司沿村",
			remark:""
		},
		{
			name:"郑伟",
			work:"村委会主任",
			mobile:"13806631586",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"司沿村",
			remark:""
		},
		{
			name:"方国久",
			work:"党支部书记、分管负责人",
			mobile:"13606841783",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"下阳村",
			remark:""
		},
		{
			name:"王泰君",
			work:"村委会主任",
			mobile:"13806631586",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"下阳村",
			remark:""
		},
		{
			name:"贝伟良",
			work:"党支部书记、分管负责人",
			mobile:"13906691340",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"小门村",
			remark:""
		},
		{
			name:"石夫藏",
			work:"村委会主任",
			mobile:"13906842303",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"小门村",
			remark:""
		},
		{
			name:"周波",
			work:"党支部书记、分管负责人",
			mobile:"13515849122",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"新峰村",
			remark:""
		},
		{
			name:"葛伟军",
			work:"村委会主任",
			mobile:"13175166055",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"新峰村",
			remark:""
		},
		{
			name:"王永红",
			work:"党支部书记、分管负责人",
			mobile:"13515848036",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"阳东村",
			remark:""
		},
		{
			name:"舒红",
			work:"村委会主任",
			mobile:"13306600909",
			phone:"",
			qu:"宁波市北仑区",
			jiedao:"白峰街道",
			cun:"阳东村",
			remark:""
		}
		
		
	];
	
	
	
	
	
	
	
	
	
}])

/**=========================================================
 * Module: chart.js
 * Wrapper directive for chartJS. 
 * Based on https://gist.github.com/AndreasHeiberg/9837868
 =========================================================*/

var ChartJS = function (type) {
    return {
        restrict: "A",
        scope: {
            data: "=",
            options: "=",
            id: "@",
            width: "=",
            height: "=",
            resize: "=",
            chart: "@",
            segments: "@",
            responsive: "=",
            tooltip: "=",
            legend: "="
        },
        link: function ($scope, $elem) {
            var ctx = $elem[0].getContext("2d");
            var autosize = false;

            $scope.size = function () {
                if ($scope.width <= 0) {
                    $elem.width($elem.parent().width());
                    ctx.canvas.width = $elem.width();
                } else {
                    ctx.canvas.width = $scope.width || ctx.canvas.width;
                    autosize = true;
                }

                if($scope.height <= 0){
                    $elem.height($elem.parent().height());
                    ctx.canvas.height = ctx.canvas.width / 2;
                } else {
                    ctx.canvas.height = $scope.height || ctx.canvas.height;
                    autosize = true;
                }
            };

            $scope.$watch("data", function (newVal, oldVal) {
                if(chartCreated)
                    chartCreated.destroy();

                // if data not defined, exit
                if (!newVal) {
                    return;
                }
                if ($scope.chart) { type = $scope.chart; }

                if(autosize){
                    $scope.size();
                    chart = new Chart(ctx);
                }

                if($scope.responsive || $scope.resize)
                    $scope.options.responsive = true;

                if($scope.responsive !== undefined)
                    $scope.options.responsive = $scope.responsive;

                chartCreated = chart[type]($scope.data, $scope.options);
                chartCreated.update();
                if($scope.legend)
                    angular.element($elem[0]).parent().after( chartCreated.generateLegend() );
            }, true);

            $scope.$watch("tooltip", function (newVal, oldVal) {
                if (chartCreated)
                    chartCreated.draw();
                if(newVal===undefined || !chartCreated.segments)
                    return;
                if(!isFinite(newVal) || newVal >= chartCreated.segments.length || newVal < 0)
                    return;
                var activeSegment = chartCreated.segments[newVal];
                activeSegment.save();
                activeSegment.fillColor = activeSegment.highlightColor;
                chartCreated.showTooltip([activeSegment]);
                activeSegment.restore();
            }, true);

            $scope.size();
            var chart = new Chart(ctx);
            var chartCreated;
        }
    };
};

/* Aliases for various chart types */
App.directive("chartjs",       function () { return ChartJS(); });
App.directive("linechart",     function () { return ChartJS("Line"); });
App.directive("barchart",      function () { return ChartJS("Bar"); });
App.directive("radarchart",    function () { return ChartJS("Radar"); });
App.directive("polarchart",    function () { return ChartJS("PolarArea"); });
App.directive("piechart",      function () { return ChartJS("Pie"); });
App.directive("doughnutchart", function () { return ChartJS("Doughnut"); });
App.directive("donutchart",    function () { return ChartJS("Doughnut"); });

/**=========================================================
 * Module: classy-loader.js
 * Enable use of classyloader directly from data attributes
 =========================================================*/

App.directive('classyloader', ["$timeout", "Utils", function($timeout, Utils) {
  'use strict';

  var $scroller       = $(window),
      inViewFlagClass = 'js-is-in-view'; // a classname to detect when a chart has been triggered after scroll

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      // run after interpolation  
      $timeout(function(){
  
        var $element = $(element),
            options  = $element.data();
        
        // At lease we need a data-percentage attribute
        if(options) {
          if( options.triggerInView ) {

            $scroller.scroll(function() {
              checkLoaderInVIew($element, options);
            });
            // if the element starts already in view
            checkLoaderInVIew($element, options);
          }
          else
            startLoader($element, options);
        }

      }, 0);

      function checkLoaderInVIew(element, options) {
        var offset = -20;
        if( ! element.hasClass(inViewFlagClass) &&
            Utils.isInView(element, {topoffset: offset}) ) {
          startLoader(element, options);
        }
      }
      function startLoader(element, options) {
        element.ClassyLoader(options).addClass(inViewFlagClass);
      }
    }
  };
}]);

/**=========================================================
 * Module: flot.js
 * Initializes the Flot chart plugin and handles data refresh
 =========================================================*/

App.directive('flot', ['$http', '$timeout', function($http, $timeout) {
  'use strict';
  return {
    restrict: 'EA',
    template: '<div></div>',
    scope: {
      dataset: '=?',
      options: '=',
      series: '=',
      callback: '=',
      src: '='
    },
    link: linkFunction
  };
  
  function linkFunction(scope, element, attributes) {
    var height, plot, plotArea, width;
    var heightDefault = 220;

    plot = null;

    width = attributes.width || '100%';
    height = attributes.height || heightDefault;

    plotArea = $(element.children()[0]);
    plotArea.css({
      width: width,
      height: height
    });

    function init() {
      var plotObj;
      if(!scope.dataset || !scope.options) return;
      plotObj = $.plot(plotArea, scope.dataset, scope.options);
      scope.$emit('plotReady', plotObj);
      if (scope.callback) {
        scope.callback(plotObj, scope);
      }

      return plotObj;
    }

    function onDatasetChanged(dataset) {
      if (plot) {
        plot.setData(dataset);
        plot.setupGrid();
        return plot.draw();
      } else {
        plot = init();
        onSerieToggled(scope.series);
        return plot;
      }
    }
    scope.$watchCollection('dataset', onDatasetChanged, true);

    function onSerieToggled (series) {
      if( !plot || !series ) return;
      var someData = plot.getData();
      for(var sName in series) {
        angular.forEach(series[sName], toggleFor(sName));
      }
      
      plot.setData(someData);
      plot.draw();
      
      function toggleFor(sName) {
        return function (s, i){
          if(someData[i] && someData[i][sName])
            someData[i][sName].show = s;
        };
      }
    }
    scope.$watch('series', onSerieToggled, true);
    
    function onSrcChanged(src) {

      if( src ) {

        $http.get(src)
          .success(function (data) {

            $timeout(function(){
              scope.dataset = data;
            });

        }).error(function(){
          $.error('Flot chart: Bad request.');
        });
        
      }
    }
    scope.$watch('src', onSrcChanged);
  }

}]);

/**=========================================================
 * Module: fullscreen.js
 * Toggle the fullscreen mode on/off
 =========================================================*/

App.directive('toggleFullscreen', function() {
  'use strict';

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      element.on('click', function (e) {
          e.preventDefault();

          if (screenfull.enabled) {
            
            screenfull.toggle();
            
            // Switch icon indicator
            if(screenfull.isFullscreen)
              $(this).children('em').removeClass('fa-expand').addClass('fa-compress');
            else
              $(this).children('em').removeClass('fa-compress').addClass('fa-expand');

          } else {
            $.error('Fullscreen not enabled');
          }

      });
    }
  };

});


/**=========================================================
 * Module: load-css.js
 * Request and load into the current page a css file
 =========================================================*/

App.directive('loadCss', function() {
  'use strict';

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.on('click', function (e) {
          if(element.is('a')) e.preventDefault();
          var uri = attrs.loadCss,
              link;

          if(uri) {
            link = createLink(uri);
            if ( !link ) {
              $.error('Error creating stylesheet link element.');
            }
          }
          else {
            $.error('No stylesheet location defined.');
          }

      });

    }
  };

  function createLink(uri) {
    var linkId = 'autoloaded-stylesheet',
        oldLink = $('#'+linkId).attr('id', linkId + '-old');

    $('head').append($('<link/>').attr({
      'id':   linkId,
      'rel':  'stylesheet',
      'href': uri
    }));

    if( oldLink.length ) {
      oldLink.remove();
    }

    return $('#'+linkId);
  }


});
/**=========================================================
 * Module: morris.js
 * AngularJS Directives for Morris Charts
 =========================================================*/

(function() {
    "use strict";

    App.directive('morrisBar',   morrisChart('Bar')   );
    App.directive('morrisDonut', morrisChart('Donut') );
    App.directive('morrisLine',  morrisChart('Line')  );
    App.directive('morrisArea',  morrisChart('Area')  );

    function morrisChart(type) {
      return function () {
        return {
          restrict: 'EA',
          scope: {
            morrisData: '=',
            morrisOptions: '='
          },
          link: function($scope, elem, attrs) {
            // start ready to watch for changes in data
            $scope.$watch("morrisData", function(newVal, oldVal) {
              if (newVal) {
                $scope.morrisInstance.setData(newVal);
                $scope.morrisInstance.redraw();
              }
            }, true);
            // the element that contains the chart
            $scope.morrisOptions.element = elem;
            // If data defined copy to options
            if($scope.morrisData)
              $scope.morrisOptions.data = $scope.morrisData;
            // Init chart
            $scope.morrisInstance = new Morris[type]($scope.morrisOptions);

          }
        }
      }
    }

})();

/**=========================================================
 * Module: now.js
 * Provides a simple way to display the current time formatted
 =========================================================*/

App.directive("now", ['dateFilter', '$interval', function(dateFilter, $interval){
    return {
      restrict: 'E',
      link: function(scope, element, attrs){
        
        var format = attrs.format;

        function updateTime() {
          var dt = dateFilter(new Date(), format);
          element.text(dt);
        }

        updateTime();
        $interval(updateTime, 1000);
      }
    };
}]);

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
/**=========================================================
 * Module: sparkline.js
 * SparkLines Mini Charts
 =========================================================*/
 
App.directive('sparkline', ['$timeout', '$window', function($timeout, $window){

  'use strict';

  return {
    restrict: 'EA',
    controller: ["$scope", "$element", function ($scope, $element) {
      var runSL = function(){
        initSparLine($element);
      };

      $timeout(runSL);
    }]
  };

  function initSparLine($element) {
    var options = $element.data();

    options.type = options.type || 'bar'; // default chart is bar
    options.disableHiddenCheck = true;

    $element.sparkline('html', options);

    if(options.resize) {
      $(window).resize(function(){
        $element.sparkline('html', options);
      });
    }
  }

}]);

/**=========================================================
 * Module: toggle-state.js
 * Toggle a classname from the BODY Useful to change a state that 
 * affects globally the entire layout or more than one item 
 * Targeted elements must have [toggle-state="CLASS-NAME-TO-TOGGLE"]
 * User no-persist to avoid saving the sate in browser storage
 =========================================================*/

App.directive('toggleState', ['toggleStateService', function(toggle) {
  'use strict';
  
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      var $body = $('body');

      $(element)
        .on('click', function (e) {
          e.preventDefault();
          var classname = attrs.toggleState;
          
          if(classname) {
            if( $body.hasClass(classname) ) {
              $body.removeClass(classname);
              if( ! attrs.noPersist)
                toggle.removeState(classname);
            }
            else {
              $body.addClass(classname);
              if( ! attrs.noPersist)
                toggle.addState(classname);
            }
            
          }

      });
    }
  };
  
}]);

/**=========================================================
 * Module: vector-map.js.js
 * Init jQuery Vector Map plugin
 =========================================================*/

App.directive('vectorMap', ['vectorMap', function(vectorMap){
  'use strict';

  var defaultColors = {
      markerColor:  '#23b7e5',      // the marker points
      bgColor:      'transparent',      // the background
      scaleColors:  ['#878c9a'],    // the color of the region in the serie
      regionFill:   '#bbbec6'       // the base region color
  };

  return {
    restrict: 'EA',
    link: function(scope, element, attrs) {

      var mapHeight   = attrs.height || '300',
          options     = {
            markerColor:  attrs.markerColor  || defaultColors.markerColor,
            bgColor:      attrs.bgColor      || defaultColors.bgColor,
            scale:        attrs.scale        || 1,
            scaleColors:  attrs.scaleColors  || defaultColors.scaleColors,
            regionFill:   attrs.regionFill   || defaultColors.regionFill,
            mapName:      attrs.mapName      || 'world_mill_en'
          };
      
      element.css('height', mapHeight);
      
      vectorMap.init( element , options, scope.seriesData, scope.markersData);

    }
  };

}]);
/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

App.service('browser', function(){
  "use strict";

  var matched, browser;

  var uaMatch = function( ua ) {
    ua = ua.toLowerCase();

    var match = /(opr)[\/]([\w.]+)/.exec( ua ) ||
      /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
      /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
      /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
      /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
      /(msie) ([\w.]+)/.exec( ua ) ||
      ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
      ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
      [];

    var platform_match = /(ipad)/.exec( ua ) ||
      /(iphone)/.exec( ua ) ||
      /(android)/.exec( ua ) ||
      /(windows phone)/.exec( ua ) ||
      /(win)/.exec( ua ) ||
      /(mac)/.exec( ua ) ||
      /(linux)/.exec( ua ) ||
      /(cros)/i.exec( ua ) ||
      [];

    return {
      browser: match[ 3 ] || match[ 1 ] || "",
      version: match[ 2 ] || "0",
      platform: platform_match[ 0 ] || ""
    };
  };

  matched = uaMatch( window.navigator.userAgent );
  browser = {};

  if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.version);
  }

  if ( matched.platform ) {
    browser[ matched.platform ] = true;
  }

  // These are all considered mobile platforms, meaning they run a mobile browser
  if ( browser.android || browser.ipad || browser.iphone || browser[ "windows phone" ] ) {
    browser.mobile = true;
  }

  // These are all considered desktop platforms, meaning they run a desktop browser
  if ( browser.cros || browser.mac || browser.linux || browser.win ) {
    browser.desktop = true;
  }

  // Chrome, Opera 15+ and Safari are webkit based browsers
  if ( browser.chrome || browser.opr || browser.safari ) {
    browser.webkit = true;
  }

  // IE11 has a new token so we will assign it msie to avoid breaking changes
  if ( browser.rv )
  {
    var ie = "msie";

    matched.browser = ie;
    browser[ie] = true;
  }

  // Opera 15+ are identified as opr
  if ( browser.opr )
  {
    var opera = "opera";

    matched.browser = opera;
    browser[opera] = true;
  }

  // Stock Android browsers are marked as Safari on Android.
  if ( browser.safari && browser.android )
  {
    var android = "android";

    matched.browser = android;
    browser[android] = true;
  }

  // Assign the name and platform variable
  browser.name = matched.browser;
  browser.platform = matched.platform;


  return browser;

});
/**=========================================================
 * Module: colors.js
 * Services to retrieve global colors
 =========================================================*/
 
App.factory('colors', ['APP_COLORS', function(colors) {
  
  return {
    byName: function(name) {
      return (colors[name] || '#fff');
    }
  };

}]);

/**=========================================================
 * Module: nav-search.js
 * Services to share navbar search functions
 =========================================================*/
 
App.service('navSearch', function() {
  var navbarFormSelector = 'form.navbar-form';
  return {
    toggle: function() {
      
      var navbarForm = $(navbarFormSelector);

      navbarForm.toggleClass('open');
      
      var isOpen = navbarForm.hasClass('open');
      
      navbarForm.find('input')[isOpen ? 'focus' : 'blur']();

    },

    dismiss: function() {
      $(navbarFormSelector)
        .removeClass('open')      // Close control
        .find('input[type="text"]').blur() // remove focus
        .val('')                    // Empty input
        ;
    }
  };

});
/**=========================================================
 * Module: notify.js
 * Create a notifications that fade out automatically.
 * Based on Notify addon from UIKit (http://getuikit.com/docs/addons_notify.html)
 =========================================================*/

App.service('Notify', ["$timeout", function($timeout){
    this.alert = alert;

    ////////////////

    function alert(msg, opts) {
        if ( msg ) {
            $timeout(function(){
                $.notify(msg, opts || {});
            });
        }
    }

}]);



/**
 * Notify Addon definition as jQuery plugin
 * Adapted version to work with Bootstrap classes
 * More information http://getuikit.com/docs/addons_notify.html
 */

(function($, window, document){

    var containers = {},
        messages   = {},

        notify     =  function(options){

            if ($.type(options) == 'string') {
                options = { message: options };
            }

            if (arguments[1]) {
                options = $.extend(options, $.type(arguments[1]) == 'string' ? {status:arguments[1]} : arguments[1]);
            }

            return (new Message(options)).show();
        },
        closeAll  = function(group, instantly){
            if(group) {
                for(var id in messages) { if(group===messages[id].group) messages[id].close(instantly); }
            } else {
                for(var id in messages) { messages[id].close(instantly); }
            }
        };

    var Message = function(options){

        var $this = this;

        this.options = $.extend({}, Message.defaults, options);

        this.uuid    = "ID"+(new Date().getTime())+"RAND"+(Math.ceil(Math.random() * 100000));
        this.element = $([
            // @geedmo: alert-dismissable enables bs close icon
            '<div class="uk-notify-message alert-dismissable">',
                '<a class="close">&times;</a>',
                '<div>'+this.options.message+'</div>',
            '</div>'

        ].join('')).data("notifyMessage", this);

        // status
        if (this.options.status) {
            this.element.addClass('alert alert-'+this.options.status);
            this.currentstatus = this.options.status;
        }

        this.group = this.options.group;

        messages[this.uuid] = this;

        if(!containers[this.options.pos]) {
            containers[this.options.pos] = $('<div class="uk-notify uk-notify-'+this.options.pos+'"></div>').appendTo('body').on("click", ".uk-notify-message", function(){
                $(this).data("notifyMessage").close();
            });
        }
    };


    $.extend(Message.prototype, {

        uuid: false,
        element: false,
        timout: false,
        currentstatus: "",
        group: false,

        show: function() {

            if (this.element.is(":visible")) return;

            var $this = this;

            containers[this.options.pos].show().prepend(this.element);

            var marginbottom = parseInt(this.element.css("margin-bottom"), 10);

            this.element.css({"opacity":0, "margin-top": -1*this.element.outerHeight(), "margin-bottom":0}).animate({"opacity":1, "margin-top": 0, "margin-bottom":marginbottom}, function(){

                if ($this.options.timeout) {

                    var closefn = function(){ $this.close(); };

                    $this.timeout = setTimeout(closefn, $this.options.timeout);

                    $this.element.hover(
                        function() { clearTimeout($this.timeout); },
                        function() { $this.timeout = setTimeout(closefn, $this.options.timeout);  }
                    );
                }

            });

            return this;
        },

        close: function(instantly) {

            var $this    = this,
                finalize = function(){
                    $this.element.remove();

                    if(!containers[$this.options.pos].children().length) {
                        containers[$this.options.pos].hide();
                    }

                    delete messages[$this.uuid];
                };

            if(this.timeout) clearTimeout(this.timeout);

            if(instantly) {
                finalize();
            } else {
                this.element.animate({"opacity":0, "margin-top": -1* this.element.outerHeight(), "margin-bottom":0}, function(){
                    finalize();
                });
            }
        },

        content: function(html){

            var container = this.element.find(">div");

            if(!html) {
                return container.html();
            }

            container.html(html);

            return this;
        },

        status: function(status) {

            if(!status) {
                return this.currentstatus;
            }

            this.element.removeClass('alert alert-'+this.currentstatus).addClass('alert alert-'+status);

            this.currentstatus = status;

            return this;
        }
    });

    Message.defaults = {
        message: "",
        status: "normal",
        timeout: 5000,
        group: null,
        pos: 'top-center'
    };


    $["notify"]          = notify;
    $["notify"].message  = Message;
    $["notify"].closeAll = closeAll;

    return notify;

}(jQuery, window, document));

/**=========================================================
 * Module: helpers.js
 * Provides helper functions for routes definition
 =========================================================*/

App.provider('RouteHelpers', ['APP_REQUIRES', function (appRequires) {
  "use strict";

  // Set here the base of the relative path
  // for all app views
  this.basepath = function (uri) {
    return 'app/views/' + uri;
  };

  // Generates a resolve object by passing script names
  // previously configured in constant.APP_REQUIRES
  this.resolveFor = function () {
    var _args = arguments;
    return {
      deps: ['$ocLazyLoad','$q', function ($ocLL, $q) {
        // Creates a promise chain for each argument
        var promise = $q.when(1); // empty promise
        for(var i=0, len=_args.length; i < len; i ++){
          promise = andThen(_args[i]);
        }
        return promise;

        // creates promise to chain dynamically
        function andThen(_arg) {
          // also support a function that returns a promise
          if(typeof _arg == 'function')
              return promise.then(_arg);
          else
              return promise.then(function() {
                // if is a module, pass the name. If not, pass the array
                var whatToLoad = getRequired(_arg);
                // simple error check
                if(!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                // finally, return a promise
                return $ocLL.load( whatToLoad );
              });
        }
        // check and returns required data
        // analyze module items with the form [name: '', files: []]
        // and also simple array of script files (for not angular js)
        function getRequired(name) {
          if (appRequires.modules)
              for(var m in appRequires.modules)
                  if(appRequires.modules[m].name && appRequires.modules[m].name === name)
                      return appRequires.modules[m];
          return appRequires.scripts && appRequires.scripts[name];
        }

      }]};
  }; // resolveFor

  // not necessary, only used in config block for routes
  this.$get = function(){
    return {
      basepath: this.basepath
    }
  };

}]);


/**=========================================================
 * Module: toggle-state.js
 * Services to share toggle state functionality
 =========================================================*/

App.service('toggleStateService', ['$rootScope', function($rootScope) {

  var storageKeyName  = 'toggleState';

  // Helper object to check for words in a phrase //
  var WordChecker = {
    hasWord: function (phrase, word) {
      return new RegExp('(^|\\s)' + word + '(\\s|$)').test(phrase);
    },
    addWord: function (phrase, word) {
      if (!this.hasWord(phrase, word)) {
        return (phrase + (phrase ? ' ' : '') + word);
      }
    },
    removeWord: function (phrase, word) {
      if (this.hasWord(phrase, word)) {
        return phrase.replace(new RegExp('(^|\\s)*' + word + '(\\s|$)*', 'g'), '');
      }
    }
  };

  // Return service public methods
  return {
    // Add a state to the browser storage to be restored later
    addState: function(classname){
      var data = angular.fromJson($rootScope.$storage[storageKeyName]);
      
      if(!data)  {
        data = classname;
      }
      else {
        data = WordChecker.addWord(data, classname);
      }

      $rootScope.$storage[storageKeyName] = angular.toJson(data);
    },

    // Remove a state from the browser storage
    removeState: function(classname){
      var data = $rootScope.$storage[storageKeyName];
      // nothing to remove
      if(!data) return;

      data = WordChecker.removeWord(data, classname);

      $rootScope.$storage[storageKeyName] = angular.toJson(data);
    },
    
    // Load the state string and restore the classlist
    restoreState: function($elem) {
      var data = angular.fromJson($rootScope.$storage[storageKeyName]);
      
      // nothing to restore
      if(!data) return;
      $elem.addClass(data);
    }

  };

}]);
/**=========================================================
 * Module: utils.js
 * Utility library to use across the theme
 =========================================================*/

App.service('Utils', ["$window", "APP_MEDIAQUERY", function($window, APP_MEDIAQUERY) {
    'use strict';
    
    var $html = angular.element("html"),
        $win  = angular.element($window),
        $body = angular.element('body');

    return {
      // DETECTION
      support: {
        transition: (function() {
                var transitionEnd = (function() {

                    var element = document.body || document.documentElement,
                        transEndEventNames = {
                            WebkitTransition: 'webkitTransitionEnd',
                            MozTransition: 'transitionend',
                            OTransition: 'oTransitionEnd otransitionend',
                            transition: 'transitionend'
                        }, name;

                    for (name in transEndEventNames) {
                        if (element.style[name] !== undefined) return transEndEventNames[name];
                    }
                }());

                return transitionEnd && { end: transitionEnd };
            })(),
        animation: (function() {

            var animationEnd = (function() {

                var element = document.body || document.documentElement,
                    animEndEventNames = {
                        WebkitAnimation: 'webkitAnimationEnd',
                        MozAnimation: 'animationend',
                        OAnimation: 'oAnimationEnd oanimationend',
                        animation: 'animationend'
                    }, name;

                for (name in animEndEventNames) {
                    if (element.style[name] !== undefined) return animEndEventNames[name];
                }
            }());

            return animationEnd && { end: animationEnd };
        })(),
        requestAnimationFrame: window.requestAnimationFrame ||
                               window.webkitRequestAnimationFrame ||
                               window.mozRequestAnimationFrame ||
                               window.msRequestAnimationFrame ||
                               window.oRequestAnimationFrame ||
                               function(callback){ window.setTimeout(callback, 1000/60); },
        touch: (
            ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
            (window.DocumentTouch && document instanceof window.DocumentTouch)  ||
            (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
            (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
            false
        ),
        mutationobserver: (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null)
      },
      // UTILITIES
      isInView: function(element, options) {

          var $element = $(element);

          if (!$element.is(':visible')) {
              return false;
          }

          var window_left = $win.scrollLeft(),
              window_top  = $win.scrollTop(),
              offset      = $element.offset(),
              left        = offset.left,
              top         = offset.top;

          options = $.extend({topoffset:0, leftoffset:0}, options);

          if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
              left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
            return true;
          } else {
            return false;
          }
      },
      langdirection: $html.attr("dir") == "rtl" ? "right" : "left",
      isTouch: function () {
        return $html.hasClass('touch');
      },
      isSidebarCollapsed: function () {
        return $body.hasClass('aside-collapsed');
      },
      isSidebarToggled: function () {
        return $body.hasClass('aside-toggled');
      },
      isMobile: function () {
        return $win.width() < APP_MEDIAQUERY.tablet;
      }
    };
}]);
/**=========================================================
 * Module: vector-map.js
 * Services to initialize vector map plugin
 =========================================================*/

App.service('vectorMap', function() {
  'use strict';
  return {
    init: function($element, opts, series, markers) {
          $element.vectorMap({
            map:             opts.mapName,
            backgroundColor: opts.bgColor,
            zoomMin:         1,
            zoomMax:         8,
            zoomOnScroll:    false,
            regionStyle: {
              initial: {
                'fill':           opts.regionFill,
                'fill-opacity':   1,
                'stroke':         'none',
                'stroke-width':   1.5,
                'stroke-opacity': 1
              },
              hover: {
                'fill-opacity': 0.8
              },
              selected: {
                fill: 'blue'
              },
              selectedHover: {
              }
            },
            focusOn:{ x:0.4, y:0.6, scale: opts.scale},
            markerStyle: {
              initial: {
                fill: opts.markerColor,
                stroke: opts.markerColor
              }
            },
            onRegionLabelShow: function(e, el, code) {
              if ( series && series[code] )
                el.html(el.html() + ': ' + series[code] + ' visitors');
            },
            markers: markers,
            series: {
                regions: [{
                    values: series,
                    scale: opts.scaleColors,
                    normalizeFunction: 'polynomial'
                }]
            },
          });
        }
  };
});
angular.module("customFilter",[])
 .filter("unique",function(){
 	return function(data,propertyName){
 		if(angular.isArray(data) && angular.isString(propertyName)){
 			var results = [];
 			var keys = {};
 			for(var i = 0; i < data.length; i++){
 				var val = data[i][propertyName];
 				if(angular.isUndefined(keys[val])){
 					keys[val] = true;
 					results.push(val);
 				}
 			}
 			return results;
 		}else{
 			return data;
 		}
 	}
 })
 .filter("range",function(){
 	return function(data,page,size){		
 		if(angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)){
 			var start_index = (page-1)*size;
 			var end_index = page*size;
 			if(data.length < start_index){
 				return [];
 			}else{
 				return data.slice(start_index,end_index);				
 			}
 		}else{
 			return data;
 		}
 	}
 })
 .filter("pageCount",function(){
 	return function(data,size){
 		if(angular.isArray(data)){
 			var result = [];
 			for(var i = 0; i < Math.ceil(data.length/size); i++){
 				result.push(i);
 			}
 			return result;
 		}else{
 			return data;
 		}
 	}
 })

 
 
 









// mainApp.filter('unique', function () {
//return function (collection, keyname) {
//  var output = [],
//    keys = [];
//  angular.forEach(collection, function (item) {
//    var key = item[keyname];
//    if (keys.indexOf(key) === -1) {
//      keys.push(key);
//      output.push(item);
//    }
//  });
//  return output;
//};
//});

// ----------------------------------- 

var myApp = angular.module('myAppName', ['sewageAdmin']);

myApp.run(["$log", function($log) {

  $log.log('I\'m a line from custom.js');

}]);

myApp.config(["RouteHelpersProvider", function(RouteHelpersProvider) {

  // Custom Route definition
  
}]);

myApp.controller('oneOfMyOwnController', ["$scope", function($scope) {
  /* controller code */
}]);

myApp.directive('oneOfMyOwnDirectives', function() {
  /*directive code*/
});

myApp.config(["$stateProvider", function($stateProvider /* ... */) {
  /* specific routes here (see file config.js) */
}]);