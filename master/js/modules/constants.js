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