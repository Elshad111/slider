'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rollup = require('gulp-better-rollup');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const imagemin = require('gulp-imagemin'); 
const cache = require('gulp-cache');
const plumber = require('gulp-plumber');

const cssFile = [
	'css/normalize.css',
	'css/style.css'
];

const copyFile = [
	'*.html',
	'*.ico'
];

gulp.task('styles', () => {
	return gulp.src(cssFile)
				.pipe(concat('main.css'))
				.pipe(autoprefixer({
					browsers: ['> 0.1%'],
					cascade:false
				}))
				.pipe(cleanCSS({
					level: 2
				}))
				.pipe(gulp.dest('build/css'));
});

gulp.task('copy-html', () => {
	return gulp.src(copyFile)
				.pipe(gulp.dest('build'));
});

gulp.task('script', () => {
	return gulp.src('js/main.js')
				.pipe(sourcemaps.init())
				.pipe(rollup({}, 'iife'))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest('build/js'));
});

gulp.task('clear', function (done) {
  return cache.clearAll(done);
});

gulp.task('imagemin', () => {
	return gulp.src('img/*')
				.pipe(imagemin())
				.pipe(gulp.dest('build/img'));
});
