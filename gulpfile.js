var gulp    = require("gulp"),
	jade    = require("gulp-jade"),
	minCSS  = require("gulp-minify-css"),
	minHTML = require("gulp-minify-html"),
	react   = require("gulp-react"),
	uglify  = require("gulp-uglify");

gulp.task("build", function () {
	gulp.src("src/public/index.jade")
		.pipe(jade())
		.pipe(minHTML())
		.pipe(gulp.dest("dist/publc/"));

	gulp.src("src/public/jsx/**.jsx")
		.pipe(react())
		.pipe(uglify({ mangle: false }))
		.pipe(gulp.dest("dist/public/js/"));

	gulp.src("src/public/css/**.css")
		.pipe(minCSS())
		.pipe(gulp.dest("dist/public/css/"));

	gulp.src("src/app.js")
		.pipe(uglify({ mangle: false }))
		.pipe(gulp.dest("dist/"));
});