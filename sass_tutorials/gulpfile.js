const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')  // Source folder
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));        // Destination folder
});

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));