var gulp    = require("gulp"),
	jade    = require("gulp-jade"),
	minCSS  = require("gulp-minify-css"),
	minHTML = require("gulp-minify-html"),
	react   = require("gulp-react"),
	uglify  = require("gulp-uglify");

gulp.task("build:jade", function () {
	gulp.src("src/public/index.jade")
		.pipe(jade())
		.pipe(minHTML())
		.pipe(gulp.dest("dist/public/"));
});

gulp.task("build:jsx", function () {
	gulp.src("src/public/jsx/**.jsx")
		.pipe(react())
		.pipe(uglify({ mangle: false }))
		.pipe(gulp.dest("dist/public/js/"));
});

gulp.task("build:css", function () {
	gulp.src("src/public/css/**.css")
		.pipe(minCSS())
		.pipe(gulp.dest("dist/public/css/"));
});

gulp.task("build:serv", function () {
	gulp.src("src/app.js")
		.pipe(uglify({ mangle: false }))
		.pipe(gulp.dest("dist/"));
});

gulp.task("watch", ["build:jade", "build:jsx", "build:css", "build:serv"], function () {
	gulp.watch("src/public/index.jade", ["build:jade"]);
	gulp.watch("src/public/jsx/**.jsx", ["build:jsx"]);
	gulp.watch("src/public/css/**.css", ["build:css"]);
	gulp.watch("src/app.js", ["build:serv"]);
});