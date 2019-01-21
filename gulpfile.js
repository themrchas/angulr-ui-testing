var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('copy', function() {
    gulp.src('./node_modules/angular/angular.js')
    .pipe(gulp.dest('./js'))

    gulp.src('./node_modules/@uirouter/angularjs/release/angular-ui-router.js')
    .pipe(gulp.dest('./js'))

  });

  gulp.task('clean-up', function () {
    return gulp.src('./js/*.js', {read: false})
      .pipe(clean());
  });

  gulp.task('default', ['clean-up', 'copy']);




  



