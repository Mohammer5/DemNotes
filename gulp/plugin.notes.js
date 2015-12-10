var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');
var sass = require('gulp-sass');

function swallowError(error) { console.log(error.toString()); this.emit('end'); }

/**
*
* JS
*
**/
gulp.task('buildJS', function() {
  return browserify({
      entries: '../Plugins/Notes/app/app.js',
      extensions: ['.js'],
      debug: true
    })
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .on('error', swallowError)
    .pipe(fs.createWriteStream('../Plugins/Notes/index.js'));
});

gulp.task('watchJS', ['buildJS'], function() {
  gulp.watch('../Plugins/Notes/app/**/*.js', ['buildJS']);
});

/**
*
* CSS
*
**/
gulp.task('buildCSS', function() {
  gulp.src('../Plugins/Notes/app/scss/index.scss').
    pipe(sass().on('error', sass.logError)).
    pipe(gulp.dest('../Plugins/Notes'));
});

gulp.task('watchCSS', ['buildCSS'], function() {
  gulp.watch('../Plugins/Notes/app/scss/**/*.scss', ['buildCSS']);
});

/**
*
* Init
*
**/
gulp.task('default', [
  'buildJS', 
  'watchJS', 
  'buildCSS',
  'watchCSS'
]);