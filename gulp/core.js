var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');
var sass = require('gulp-sass');

function swallowError(error) { console.log(error.toString()); this.emit('end'); }

/**
*
* Core JS
*
**/
gulp.task('buildJSCore', function() {
  return browserify({
      entries: './../app/jsx/app.jsx',
      extensions: ['.jsx'],
      debug: true
    })
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .on('error', swallowError)
    .pipe(fs.createWriteStream('./../app/dist/index.js'));
});

gulp.task('watchJSCore', ['buildJSCore'], function() {
  gulp.watch('./../app/jsx/**/*.jsx', ['buildJSCore']);
});

/**
*
* CSS
*
**/
gulp.task('buildCSSCore', function() {
  gulp.src('../css/scss/main.scss').
    pipe(sass().on('error', sass.logError)).
    pipe(gulp.dest('./../css'));
});

gulp.task('watchCSSCore', ['buildCSSCore'], function() {
  gulp.watch('./../css/scss/**/*.scss', ['buildCSSCore']);
});

/**
*
* Init
*
**/
gulp.task('default', [
  'buildJSCore', 
  'watchJSCore', 
  'buildCSSCore',
  'watchCSSCore'
]);