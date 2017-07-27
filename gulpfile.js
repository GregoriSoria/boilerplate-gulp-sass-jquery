'use strict';

var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();
var path = require('path');

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 15',
  'chrome >= 30',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 2.3',
  'bb >= 10'
];

var browserSync = require("browser-sync").create();

browserSync.init({
    files: ["assets/styles/*.css", "index.html", "assets/scripts/main.js"],
    server: true
});

// lint JavaScript
gulp.task('jshint', function () {
  return gulp.src('assets/scripts/*.js')
    .pipe(plugin.jshint())
    .pipe(plugin.jshint.reporter('jshint-stylish'));
});


// copilando o less e adicionando os prefix
gulp.task('sass', function () {
  return gulp.src(['assets/styles/main.scss'])
    .pipe(plugin.sass().on('error', plugin.sass.logError))
    .pipe(plugin.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(plugin.csso())
    .pipe(gulp.dest('assets/styles'));
});

// observando mudanças para da reload
gulp.task('watch', function() {
    gulp.watch([
        "assets/styles/**/*.scss",
    ], ['sass']);
    gulp.watch([
        "assets/scripts/**/*.js",
    ], ['jshint'])
});

// Task padrão, exibe o menu de tasks
gulp.task('default', ['watch']);