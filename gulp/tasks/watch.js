'use strict';

module.exports = function() {
	$.gulp.task('watch', function() {
		$.gulp.watch('./source/styles/**/*.sass', $.gulp.series('sass'));
		$.gulp.watch('./source/*.html', $.gulp.series('copy-html'));
	});
};