var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//task sass
gulp.task('sass', function () {
 	return gulp.src('sass/**/*.sass')
 		.pipe(sass().on('error', sass.logError))
   		//.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   		.pipe(gulp.dest('css'));

});


//task para o watch
gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass', ['sass']);
});

//task default
gulp.task('default', ['sass', 'watch']);