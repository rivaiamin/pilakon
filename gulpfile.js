"use strict";

// web less

var gulp = require('gulp');
var uglify = require('gulp-uglify');
//var imagemin = require('gulp-imagemin');
var cssmin = require('gulp-cssmin');
//var stylus = require('gulp-stylus');
//var fontmin = require('fontmin');
var concat = require('gulp-concat');

//front-end
var paths = {
  js:[
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/semantic/dist/semantic.min.js',
    'bower_components/jquery.scrollex/jquery.scrollex.min.js',
	],
	css: [
    //semantic-ui
    'bower_components/semantic/dist/semantic.min.css',
    'bower_components/animate.css/animate.min.css',
  ],
};

gulp.task('jsmin', function() {
  return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(concat('pilakon.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('cssmin', function () {
    return gulp.src(paths.css)
        .pipe(cssmin({processImport: false}))
        .pipe(concat('pilakon.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.js, ['jsmin']);
  gulp.watch(paths.css, ['cssmin']);
});

gulp.task('default', ['watch', 'jsmin', 'cssmin']);
