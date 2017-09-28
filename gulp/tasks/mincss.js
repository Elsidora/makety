'use strict';

module.exports = function() {
	
	$.gulp.task('mincss', function() {
		return $.gulp.src('./build/css/*.css'/*, !'./build/css/*.min.css'*/)
			.pipe($.glp.cssmin())
			.pipe($.glp.rename({suffix: '.min'}))
			.pipe($.gulp.dest('./build/css'));
	});
};