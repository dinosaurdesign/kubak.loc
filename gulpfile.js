//переменные модулей
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    browsersync = require('browser-sync'),
    watch = require('gulp-watch');
//переменные путей
var path = {
    src: {
        html: 'src/*.html',
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
gulp.task('sass', function () {// компиляция sass
    return gulp.src(path.src.sass) // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true})) // Создаем префиксы
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.src.css)) // Выгружаем результата в папку
});
gulp.task('browsersync', function () {
    browsersync({
        server: {
            baseDir: "src"
        },
        notify: false
    });
});
gulp.task('watch', ['browsersync', 'sass'], function () {
    gulp.watch(path.src.css, ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch(path.src.html, browsersync.reload); // Наблюдение за HTML файлами в корне проекта
});

