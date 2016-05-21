var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('css', function() {
	gulp.src('css/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('assets'));
})

gulp.task('watch:css', ['css'], function() {
	gulp.watch('css/**/*.less', ['css']);
})