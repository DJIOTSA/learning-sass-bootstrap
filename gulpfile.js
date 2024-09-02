const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))


function buildStyles(){
    return src('./sass_tutorials/index.scss') // define the source file
    .pipe(sass())
    .pipe(dest('css'))
}

function watch(){

}

function watchTask(){
    gulp.watch(['./sass_tutorials/index.scss', buildStyles])
}

exports.default = series(buildStyles, watchTask)