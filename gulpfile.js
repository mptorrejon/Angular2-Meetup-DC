var gulp = require('gulp'),
	tsc = require('gulp-typescript'),
	tslint =  require('gulp-tslint'),
	config = require('./gulp.config')(),
	tsProject = tsc.createProject('tsConfig.json'),
	connect = require('gulp-connect')
	browserSync = require('browser-sync'),
	superstatic = require('superstatic')
	sass = require('gulp-sass');

var ENV = "";

gulp.task('compile-ts', function(){
	var sourceFiles = [ config.allTs ];
	var tsResult = gulp
					.src(sourceFiles)
					.pipe(tsc(tsProject));
	return tsResult.js
			.pipe( gulp.dest(config.tsOutputPath) );
});

gulp.task('serve', ['compile-ts'/*, 'compile-sass'*/], function(){
	gulp.watch([config.allTs], ['compile-ts']);
	// gulp.watch([config.allStyles], ['compile-sass']);
	
	gulp.run
	browserSync({
		port: 3010,
		files: [ 
			'index.html',
			'dist/**/*.js',
			'assets/templates/**/*.html',
			'assets/styles/sass/**/*.scss' 
		],
		injectChanges: true,
		logFileChanges: false,
		logLevel: 'silent',
		notify: true,
		reloadDelay: 0,
		//serves index.html, set with baseDir './'
		server:{
			baseDir: ['./'],
			middleware: superstatic( {debug: false} )
		},
		//does it make reload faster??? does not seem like
		online: true
	});
});
gulp.task('default', [ 'serve']);
