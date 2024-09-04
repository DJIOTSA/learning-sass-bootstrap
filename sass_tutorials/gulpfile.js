const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require("gulp-purgecss");

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')  // Source folder
        .pipe(sass().on('error', sass.logError))
        .pipe(purgecss({ content: ["*.html"]})) // this remove all the css code that is not used on our html files
        .pipe(gulp.dest('assets/css'));        // Destination folder
});

gulp.task('watch', function () {
    gulp.watch(['src/scss/**/*.scss', '*.html'], gulp.series('sass')); // to make that gulp watch all the .scss and .html files
});

gulp.task('default', gulp.series('sass', 'watch'));