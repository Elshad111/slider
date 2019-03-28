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
const del = require('del');
const browserSync = require('browser-sync').create();

const cssFile = [
	'css/normalize.css',
	'css/style.css'
];

const copyFile = [
	'index.html',
	'favicon.ico'
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
				.pipe(gulp.dest('build/css'))
				.pipe(browserSync.stream());;
});

gulp.task('copy-html', () => {
	return gulp.src(copyFile)
				.pipe(gulp.dest('build')).pipe(browserSync.stream());;
});

gulp.task('script', () => {
	return gulp.src('js/main.js')
				.pipe(sourcemaps.init())
				.pipe(rollup({}, 'iife'))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest('build/js')).pipe(browserSync.stream());;
});

gulp.task('clear', function (done) {
  return cache.clearAll(done);
});

gulp.task('imagemin', () => {
	return gulp.src('img/*')
				.pipe(imagemin())
				.pipe(gulp.dest('build/img')).pipe(browserSync.stream());;
});

gulp.task('clean', () => {
	return del(['build/*']);
});

gulp.task('watch', () => {
	browserSync.init({
        server: {
            baseDir: "./build",
       },
       notify: false
    });

	gulp.watch('css/**/*.css', gulp.series('styles'));
	gulp.watch('js/**/*.js', gulp.series('script'));
	gulp.watch('index.html', gulp.series('copy-html'));
	gulp.watch('img/*', gulp.series('imagemin'));
});

gulp.task('build', gulp.series('clean', 
						gulp.parallel('styles', 'script', 'copy-html', 'imagemin')));

gulp.task('dev', gulp.series('build', 'watch'));