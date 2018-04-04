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
        templateUrl: 'app/views/master-station/warning_current.html'
    })
    .state('app.warning.history', {
        url: '/warning_history',
        title: 'warning_history',
        templateUrl: 'app/views/master-station/warning_history.html'
    })
    .state('app.malfunction', {
        url: '/malfunction',
        title: 'malfunction',
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
        url: '/install',
        title: 'install',
        templateUrl: 'app/views/tables/install.html',
        resolve: helper.resolveFor('highcharts.plugin')
    })
    
    .state('app.cash', {
        url: '/cash',
        title: 'cash',
        templateUrl: 'app/views/tables/cash.html',
    })
    .state('app.beneficiary', {
        url: '/beneficiary',
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
    .state('app.install2', {
        url: '/install2',
        title: 'install2',
        templateUrl: 'app/views/tables/install_2.html',
        resolve: helper.resolveFor('highcharts.plugin')
    })
    .state('app.install3', {
        url: '/install3',
        title: 'install3',
        templateUrl: 'app/views/tables/install_3.html',
        resolve: helper.resolveFor('highcharts.plugin')
    })
    .state('app.beneficiary2', {
        url: '/beneficiary2',
        title: 'beneficiary2',
        templateUrl: 'app/views/tables/Beneficiary2.html'
    })
    .state('app.beneficiary3', {
        url: '/beneficiary3',
        title: 'beneficiary3',
        templateUrl: 'app/views/tables/Beneficiary3.html'
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
    
    
    
    
    
    //区县信息
    .state('app.county', {
        url: '/county',
        title: 'county',
        templateUrl: 'app/views/information/county/main.html',
        resolve: helper.resolveFor('angularBootstrapNavTree','chartjs')
    })
    .state('app.county.county_1_1', {
        url: '/county_1_1',
        title: 'county_1_1',
        templateUrl: 'app/views/information/county/county_1_1.html',
    })
    .state('app.county.county_1_2', {
        url: '/county_1_2',
        title: 'county_1_2',
        templateUrl: 'app/views/information/county/county_1_2.html',
    })
    .state('app.county.county_1_3', {
        url: '/county_1_3',
        title: 'county_1_3',
        templateUrl: 'app/views/information/county/county_1_3.html',
    })
    .state('app.county.county-onsite', {
        url: '/county-onsite',
        title: 'county-onsite',
        templateUrl: 'app/views/information/county/onsite.html',
        resolve: helper.resolveFor('angular-rickshaw')
    })
    .state('app.county-analysis', {
        url: '/county-analysis',
        title: 'county-analysis',
        templateUrl: 'app/views/information/county/analysis.html',
    })
    .state('app.county-equipment', {
        url: '/county-equipment',
        title: 'county-equipment',
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
    .state('app.county-run', {
        url: '/county-run',
        title: 'county-run',
        templateUrl: 'app/views/information/county/run.html',
    })
    .state('app.county-fault', {
        url: '/county-fault',
        title: 'county-fault',
        templateUrl: 'app/views/information/county/fault.html',
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
    

    //设备信息
    .state('app.equipment', {
        url: '/equipment',
        title: 'equipment',
        templateUrl: 'app/views/information/equipment/main.html',
        controller: 'equipmentController',
        resolve: helper.resolveFor('angularBootstrapNavTree','flot-chart','flot-chart-plugins','chartjs','morris')
    })
    .state('app.equipment.equipment_1', {
        url: '/equipment_1',
        title: 'equipment_1',
        templateUrl: 'app/views/information/equipment/equipment_1.html',
        resolve: helper.resolveFor('highcharts.plugin')
    })
    .state('app.equipment.equipment_2', {
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
    })
    .state('app.equipment.equipment_3', {
        url: '/equipment_3',
        title: 'equipment_3',
        templateUrl: 'app/views/information/equipment/equipment_3.html',
        resolve: helper.resolveFor()
    })
    .state('app.equipment.equipment_2_1.table_1', {
        url: '/table_1',
        title: 'table_1',
        templateUrl: 'app/views/information/equipment/equipment_table_1.html',
        resolve: helper.resolveFor()
    })
    .state('app.equipment.equipment_2_1.table_2', {
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
    .state('app.equipment-analysis', {
        url: '/equipment-analysis',
        title: 'equipment-analysis',
        templateUrl: 'app/views/information/equipment/analysis.html',
        resolve: helper.resolveFor('angularBootstrapNavTree')
    })
    
    
    .state('app.dashboard2', {
        url: '/dashboard2',
        title: 'dashboard2',
        templateUrl: 'app/views/dashboard2.html',
        controller: 'dashboardController2'
    })
    
    
    //报表信息
    .state('app.report', {
        url: '/report',
        title: 'report',
        templateUrl: 'app/views/information/report/main.html',
        controller: 'reportController',
        resolve: helper.resolveFor('angularBootstrapNavTree','datatables')
    })
    .state('app.report.table1', {
        url: '/table1',
        title: 'table1',
        templateUrl: 'app/views/information/report/table_1.html'
    })
    .state('app.report_edit', {
        url: '/report_edit',
        title: 'report_edit',
        templateUrl: 'app/views/information/report/edit.html',
        resolve: helper.resolveFor('parsley')
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










