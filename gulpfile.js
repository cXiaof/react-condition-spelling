const gulp = require('gulp')
const csso = require('gulp-csso')

gulp.task('copy_css', () =>
    gulp
        .src('src/stylesheets/*.css')
        .pipe(csso())
        .pipe(gulp.dest('dist/stylesheets'))
)

gulp.task('copy_iconfont', () =>
    gulp
        .src('src/stylesheets/iconfont/**/*')
        .pipe(gulp.dest('dist/stylesheets/iconfont'))
)

gulp.task('default', gulp.series('copy_css', 'copy_iconfont'))
