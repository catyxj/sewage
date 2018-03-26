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
        resolve: helper.resolveFor('screenfull','icons','classyloader','sparklines')
    })
    .state('app.dashboard', {
        url: '/dashboard',
        title: 'Dashboard',
        templateUrl: 'app/views/dashboard.html',
        controller: 'dashboardController',
        resolve: helper.resolveFor('vector-map', 'vector-map-maps','moment')
    })
    .state('app.stat', {
        url: '/stat',
        title: 'stat',
        templateUrl: 'app/views/stat.html',
        controller: 'statController',
        resolve: helper.resolveFor('flot-chart','flot-chart-plugins','chartjs')
    })
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
    .state('app.county.county_1_4', {
        url: '/county_1_4',
        title: 'county_1_4',
        templateUrl: 'app/views/information/county/county_1_4.html',
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
    .state('app.county-cash', {
        url: '/county-cash',
        title: 'county-cash',
        templateUrl: 'app/views/information/county/cash.html',
    })
    .state('app.county-chemistry', {
        url: '/county-chemistry',
        title: 'county-chemistry',
        templateUrl: 'app/views/information/county/chemistry.html',
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
        resolve: helper.resolveFor()
    })
    .state('app.equipment.equipment_2', {
        url: '/equipment_2',
        title: 'equipment_2',
        templateUrl: 'app/views/information/equipment/equipment_2.html',
        resolve: helper.resolveFor()
    })
    .state('app.equipment.equipment_2.table_1', {
        url: '/table_1',
        title: 'table_1',
        templateUrl: 'app/views/information/equipment/equipment_table_1.html',
        resolve: helper.resolveFor()
    })
    .state('app.equipment.equipment_2.table_2', {
        url: '/table_2',
        title: 'table_2',
        templateUrl: 'app/views/information/equipment/equipment_table_2.html',
        resolve: helper.resolveFor()
    })
    .state('app.equipment.equipment_2.table_3', {
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
    
    
    
    .state('app.widgets', {
        url: '/widgets',
        title: 'widgets',
        templateUrl: 'app/views/widgets.html'
    })
	.state('app.nestable', {
        url: '/nestable',
        title: 'Nestable',
        templateUrl: helper.basepath('nestable.html'),
        resolve: helper.resolveFor('ng-nestable')
    })
	.state('app.maps-vector', {
        url: '/maps-vector',
        title: 'Maps Vector',
        templateUrl: helper.basepath('maps-vector.html'),
        controller: 'VectorMapController',
        resolve: helper.resolveFor('vector-map', 'vector-map-maps')
    })

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





