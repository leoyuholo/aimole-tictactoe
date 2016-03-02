var gulp = require('gulp');

var browserify = require('browserify');
var babelify = require('babelify');

var source = require('vinyl-source-stream');

var gutil = require('gulp-util');
var watch = require('gulp-watch');

var server = require('gulp-server-livereload');

gulp.task('jsx', () => {
	browserify('./src/jsx/App.jsx', { debug: true, paths: ['./src/jsx'] })
		.transform(babelify, {
			presets: ["es2015", "react"],
			ignore: /(bower_components)|(node_modules)/
		})
		.bundle()
		.on("error", err => { gutil.log(err.message); })
		.on("end", err => { gutil.log('jsx completed.'); })
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('static', () => {
	gulp.src(['./src/index.html', './src/*.*'])
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
	watch('./src/jsx/**/*.jsx', () => { gulp.start('jsx'); });
	watch(['./src/index.html', './src/*.*'], () => { gulp.start('static'); });
});

gulp.task('webserver', function() {
	gulp.src('dist')
		.pipe(server({
			host: '0.0.0.0',
			livereload: true,
			directoryListing: true
		}));
});

gulp.task('default', ['watch', 'jsx', 'static']);

gulp.task('dev', ['default', 'webserver']);
