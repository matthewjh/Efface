var gulp = require('gulp');
var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  var b = browserify({
    entries: require('./tsconfig.json').files
  });

  return b
    .plugin(tsify, { noImplicitAny: true })
    .bundle()
    .pipe(source('efface.js'))
    .pipe(gulp.dest('dist'));
});