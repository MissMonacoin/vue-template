var gulp=require("gulp");
var runSequence = require('run-sequence');
var browser = require("browser-sync").create();
var webpack = require("webpack-stream");
var plumber = require("gulp-plumber");
var eslint = require('gulp-eslint');
var uglifyes = require('uglify-es');
var composer = require('gulp-uglify/composer');
var pump = require('pump');
var translator= require("./util/translator.js")
var imagemin = require('gulp-imagemin');
var minify = composer(uglifyes, console);
var request = require('sync-request');

gulp.task("browserSync", function() {
  browser.init({
    server:{
      baseDir:"./"
    },
    open:false
  });
});

gulp.task("reload",function(){
  browser.reload()
})

gulp.task('webpack', function(){
  return gulp.src('js/main.js')
    .pipe(webpack(require("./webpack.config")))
    .pipe(gulp.dest('./'))
});

gulp.task("watch", function() {
  gulp.watch("dist/dist.js", ["reload"]);
  gulp.watch("component/*.html", ["reload"]);
});

gulp.task("default", function(cb) {
  return runSequence(
    ['browserSync',"webpack","watch"],
    cb
  );
});
