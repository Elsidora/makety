'use strict';

global.$ = {
	path: {
		task: require('./gulp/paths/tasks.js')
	},
	gulp: require('gulp'),
	del: require('del'),
	browserSync: require('browser-sync').create(),
	gcmq: require('gulp-group-css-media-queries'),
	gsg: require('gulp-sass-glob'),
	spritesmith: require('gulp.spritesmith'),
	glp: require('gulp-load-plugins')()
}

$.path.task.forEach(function(taskPath) {
	require(taskPath)();
})

$.gulp.task('default', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'sprite',
		'sass',
		'copy-html',
		'copy-js',
		'fonts',
		'imagemin'
	),
	'mincss',
	'minjs',
	$.gulp.parallel(
		'watch',
		'serve'
	)
));