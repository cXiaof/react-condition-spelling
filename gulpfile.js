const gulp = require('gulp')
const cssmin = require('gulp-cssmin')

gulp.task('copy_css', () =>
    gulp
        .src('src/stylesheets/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/stylesheets'))
)

gulp.task('copy_iconfont', () =>
    gulp
        .src('src/stylesheets/iconfont/**/*')
        .pipe(gulp.dest('dist/stylesheets/iconfont'))
)

gulp.task('default', gulp.series('copy_css', 'copy_iconfont'))
