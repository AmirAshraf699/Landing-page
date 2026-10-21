// Variables
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglify');


// HTML
gulp.task('html', function () {
    return gulp.src('./index.html')
        .pipe(concat('main.html'))
        .pipe(gulp.dest('gulp'))
        .pipe(livereload())
})


// CSS Normalize
gulp.task('css-plus', function () {
    return gulp.src(['./css/normalize.css'])
        .pipe(gulp.dest('gulp/css'))
        .pipe(livereload())
})


// CSS Style
gulp.task('css', function () {
    return gulp.src('./css/style.css')
        .pipe(concat('main.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('gulp/css'))
        .pipe(livereload())
})


// Javescript
gulp.task('js', function () {
    return gulp.src('./js/main.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('gulp/js'))
        .pipe(livereload())
})


// Gulp Watch
gulp.task('watch', function () {
    require('./server.js')
    gulp.watch('./index.html', gulp.series('html'))
    gulp.watch('./css/*.css', gulp.series('css'))
    gulp.watch('./js/main.js', gulp.series('js'))
})
