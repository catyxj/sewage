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
        url: '/county-worker?area',
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
        url: '/county-worker2?area',
        title: 'county-worker2',
        templateUrl: 'app/views/information/county/worker2.html',
    })
    .state('app.county-worker3', {
        url: '/county-worker3?area',
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
    
    
    //edit
    
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
	
	
	
	
	
	
	
	
	//view
	.state('app.report_view', {
        url: '/report_view',
        title: 'report_view',
        params:{"data":null},
        templateUrl: 'app/views/information/report/view.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_view2', {
        url: '/report_view2',
        title: 'report_view2',
        params:{"data":null},
        templateUrl: 'app/views/information/report/view2.html',
        resolve: helper.resolveFor()
    })
    .state('app.report_view3', {
        url: '/report_view3',
        title: 'report_view3',
        params:{"data":null},
        templateUrl: 'app/views/information/report/view3.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_view4', {
        url: '/report_view4',
        title: 'report_view4',
        params:{"data":null},
        templateUrl: 'app/views/information/report/view4.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_view5', {
        url: '/report_view5',
        title: 'report_view5',
        params:{"data":null},
        templateUrl: 'app/views/information/report/view5.html',
        resolve: helper.resolveFor('ui.select')
    })
	.state('app.report_view6', {
        url: '/report_view6',
        title: 'report_view6',
        params:{"data":null},
        templateUrl: 'app/views/information/report/view6.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_view7', {
        url: '/report_view7',
        title: 'report_view7',
        params:{"data":null},
        templateUrl: 'app/views/information/report/view7.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_view8', {
        url: '/report_view8',
        title: 'report_view8',
        params:{"data":null},
        templateUrl: 'app/views/information/report/view8.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_view9', {
        url: '/report_view9',
        title: 'report_view9',
        params:{"data":null},
        templateUrl: 'app/views/information/report/view9.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_view10', {
        url: '/report_view10',
        title: 'report_view10',
        params:{"data":null},
        templateUrl: 'app/views/information/report/view10.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_view11', {
        url: '/report_view11',
        title: 'report_view11',
        params:{"data":null},
        templateUrl: 'app/views/information/report/view11.html',
        resolve: helper.resolveFor()
    })
	.state('app.report_view12', {
        url: '/report_view12',
        title: 'report_view12',
        params:{"data":null},
        templateUrl: 'app/views/information/report/view12.html',
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










