'use strict';

module.exports = function()	{
	$.gulp.task('imagemin', function()	{
		return $.gulp.src('./source/img/*/*.*')
			.pipe($.glp.imagemin([
    			$.glp.imagemin.gifsicle({interlaced: true}),
    			$.glp.imagemin.jpegtran({progressive: true}),
    			$.glp.imagemin.optipng({optimizationLevel: 5}),
    			$.glp.imagemin.svgo({plugins: [{removeViewBox: true}]})
			]))
			.pipe($.gulp.dest('./build/img'))
	})
};