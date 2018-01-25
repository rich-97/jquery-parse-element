const gulp    = require('gulp')
const babel   = require('gulp-babel')
const uglyfly = require('gulp-uglyfly')
const dest    = require('gulp-dest')

gulp.task('babel', function () {
  gulp.src('./jquery-parse-element.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist'))
    .pipe(uglyfly())
    .pipe(dest('dist', { ext: '.min.js' }))
    .pipe(gulp.dest('./'))
})

gulp.task('watch', function () {
  gulp.watch([ 'jquery-parse-element.js' ], [ 'babel' ])
})

gulp.task('default', ['babel'])
