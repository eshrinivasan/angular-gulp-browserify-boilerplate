var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
/*var concat = require('gulp-concat');*/
var html2js = require('gulp-html2js');
var eslint = require('gulp-eslint');

gulp.task('eslint', function () {
    return gulp
        .src([
            'app/ui-grid/**/*.js'
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 4000
	})
})

gulp.task('browserify', ['eslint'], function() {
	// Grabs the app.js file
    return browserify('./app/app.js')
    	// bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
})

gulp.task('sass', function() {
	return sass('sass/style.sass')
		.pipe(gulp.dest('public/css'))
})


gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify'])
	gulp.watch('sass/style.sass', ['sass'])
})

gulp.task('templates', function () {
    gulp.src('app/ui-grid/**/*.html')
       .pipe(html2js('angular-template.js', {
            adapter: 'angular',
            name: 'angular-demo'
        }))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('default', ['connect','templates','watch'])