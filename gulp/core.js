var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');

function swallowError(error) { console.log(error.toString()); this.emit('end'); }

gulp.task('build', function() {
  return browserify({
      entries: './../app/jsx/app.jsx',
      extensions: ['.jsx'],
      debug: true
    })
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(fs.createWriteStream('./../app/dist/index.js'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./../app/jsx/**/*.jsx', ['build']);
});

gulp.task('default', ['build', 'watch']);