const gulp = require('gulp');
const gulpsass = require('gulp-sass');
const gulpsourcemaps = require('gulp-sourcemaps');
const gulpcssnano = require('gulp-cssnano');
const rev = require('gulp-rev');

gulp.task('styles', function () {
    var sassOptions = {
        style: 'expanded'
    };
    return gulp.src('styles.scss')
    .pipe(gulpsourcemaps.init())
    .pipe(gulpsass(sassOptions))
    .pipe(gulpcssnano())
    .pipe(gulpsourcemaps.write())
    .pipe(gulp.dest('.'));
});