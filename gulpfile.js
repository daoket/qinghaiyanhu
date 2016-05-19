
var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-clean-css'), //压缩css
  jshint = require('gulp-jshint'), //js代码校验
  uglify = require('gulp-uglify'), //压缩JS
  imagemin = require('gulp-imagemin'), //压缩图片
  rename = require('gulp-rename'), //合并js文件
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  spritesmith = require('gulp.spritesmith'),
  del = require('del');
// css
gulp.task('css', function() {
  return gulp.src('src/css/**/*.css')
    
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({
      message: 'css task complete'
    }));
});
// js
gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({
      message: 'js task complete'
    }));
});
// img
gulp.task('img', function() {
  return gulp.src('src/img/**/*')
    .pipe(cache(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({
      message: 'img task complete'
    }));
});
//sprite
gulp.task('s', function () {
  var spriteData = gulp.src('src/img/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('dist/img'));
});
// Clean 任务执行前，先清除之前生成的文件
gulp.task('clean', function(cb) {
  del(['dist/css', 'dist/js', 'dist/img'], cb)
});
// Default task 设置默认任务
gulp.task('default', function() {
  gulp.start('css', 'js', 'img','s');
});
监听文件: // Watch
  gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('src/**/*.css', ['css']);
    // Watch .js files
    gulp.watch('src/**/*.js', ['js']);
    // Watch image files
    gulp.watch('src/img/**/*', ['img']);
    // Create LiveReload server
    livereload.listen();
    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']).on('change', livereload.changed);
  });