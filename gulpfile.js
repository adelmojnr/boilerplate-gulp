var gulp  = require('gulp');  
var sass = require('gulp-sass');  
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var reload = browserSync.reload;


gulp.task('serve', function() {
    browserSync.init({
        server:{
            baseDir: "./"
        }
    });
        gulp.watch('*.html').on("change", reload);

});

gulp.task('sass', function(){
    return gulp.src('src/scss/*scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
});

gulp.task('autoprefixer', function(){
   return gulp.src('src/css/*.css')
        .pipe(plumber())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass', 'serve', 'autoprefixer'], function(){
    gulp.watch('src/scss/*scss', ['sass']);
    gulp.watch('src/css/*.css', ['autoprefixer']);
});

