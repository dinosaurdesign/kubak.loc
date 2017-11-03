//переменные модулей
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    browsersynch = require('browser-sync'),
    watch = require('gulp-watch');
//переменные путей
var path = {
    src: {
        css: 'src/css/',
        sass: 'src/sass/**/*.*',
        js: 'src/js/**/*.*'
    },
    dist: {
        css: 'src/css/',
        sass: 'src/sass/*/*.*',
        js: 'src/js/*/*.*'
    }
};
// tasks
gulp.task('sass', function () {
    return gulp.src(path.src.sass) // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true})) // Создаем префиксы
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.src.css)) // Выгружаем результата в папку
});

