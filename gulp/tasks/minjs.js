'use strict';

module.exports = function() {
	
	$.gulp.task('minjs', function() {
		return $.gulp.src('./build/js/*.js')
			.pipe($.glp.uglify())
			.pipe($.glp.rename({suffix: '.min'}))
			.pipe($.gulp.dest('./build/js'));
	});
};
