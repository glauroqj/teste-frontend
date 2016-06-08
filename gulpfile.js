var gulp = require ('gulp');
less = require('gulp-less');
plumber = require('gulp-plumber');
mincss = require('gulp-minify-css');
rename = require('gulp-rename');
jshint = require('gulp-jshint');
uglify = require('gulp-uglify');
browserSync = require('browser-sync');
reload = browserSync.reload;

gulp.task('less', function () {
  gulp.src('popup/less/templates.less')
  .pipe(plumber())
  .pipe(less())
  .pipe(mincss())
  .pipe(rename({
    suffix:'.min',
    basename: 'main'
  }))
  .pipe(gulp.dest('popup/dist'))
});

gulp.task('uglify', function () {
  gulp.src('popup/js/popup.js')
  .pipe(uglify())
  .pipe(rename({
    suffix:'.min',
    basename: 'main'
  }))
  .pipe(gulp.dest('popup/dist'))
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'popup'
    }
  });
});

gulp.task('watch', function(){
  gulp.watch('popup/less/*.less', ['less']);
  gulp.watch('popup/js/popup.js', ['uglify']);
  gulp.watch(['*.html', 'less/**/*.less', 'js/**/*.js'], {cwd: 'popup'}, reload);
});

gulp.task('default',  ['less', 'uglify', 'serve', 'watch']);