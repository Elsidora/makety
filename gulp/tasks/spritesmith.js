'use strict';

module.exports = function() {

$.gulp.task('sprite', function() {
	var spriteData = $.gulp.src('./source/img/icons/*.png').pipe($.glp.spritesmith({
		imgName: 'sprite.png',
		cssName: '_sprite.sass',
		cssFormat: 'sass',
		algorithm: 'binary-tree',
		/*cssTemplate: 'sass.template.mustache',*/
		cssVarMap: function(sprite) {
			sprite.name = 'icon-' + sprite.name
		},
		imgPath: '../img/sprite/sprite.png',
		padding: 5
	}));
	spriteData.img.pipe($.gulp.dest('./source/img/sprite/'));
	spriteData.css.pipe($.gulp.dest('./source/styles/sprite/'));
	
	return spriteData; 
	});
	
};
