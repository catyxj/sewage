var gulp = require('gulp');
var minifyCss = require("gulp-clean");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task('default', ['jsApp']);

//监听
gulp.task('watch', function () {
    gulp.watch('js/**/*.js', ['default']);
});


//插件路径
var vendor = {
	base:{
		source: require('./vendor.base.json'),
		dest: '../app/js',
	  name: 'base.js'
	},
	app: {
    source: require('./vendor.json'),
    dest: '../vendor',
   }	
}

//js路径
var source = {
  scripts: ['js/app.init.js',
            'js/modules/*.js',
            'js/modules/controllers/*.js',
            'js/modules/directives/*.js',
            'js/modules/services/*.js',
            'js/modules/filters/*.js',
            'js/custom/**/*.js'
  ]  
};



//合并压缩js插件
gulp.task('jsBase', function () {
    gulp.src(vendor.base.source)
        .pipe(concat(vendor.base.name))
        .pipe(gulp.dest(vendor.base.dest));
});

gulp.task('jsApp', function () {
    gulp.src(source.scripts)
        .pipe(concat("app.js"))
        .pipe(gulp.dest("../app/js"));
});

