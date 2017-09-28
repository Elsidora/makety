'use strict';

module.exports = function() {
	
$.gulp.task('copy-html', function() {
	return $.gulp.src('./source/pages/*.*')
		.pipe($.gulp.dest('./build'))
	})
};