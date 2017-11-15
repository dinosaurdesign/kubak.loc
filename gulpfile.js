//переменные модулей
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    browsersync = require('browser-sync'),
    watch = require('gulp-watch'),
    ftp  =  require('gulp-ftp'),
    gutil    =   require('gulp-util'),
    changed = require ('gulp-changed'),
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber');
//переменные путей
var path = {
    src: {
        pug: 'src/pug/pages',
        html: 'src/*.html',
        css: 'src/css/',
        sass: 'src/sass/**/*.*',
        js: 'src/js/**/*.*'
    },
    dist: {
        pug: 'src/pug/*.*',
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
        .pipe(browsersync.reload({stream: true})) // Обновляем CSS на странице при изменении
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
    gulp.watch(path.src.sass, ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch(path.src.html, browsersync.reload); // Наблюдение за HTML файлами в корне проекта
});

gulp.task('pug', function() {
    return gulp.src(path.src.pug)
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        // .on("error", notify.onError(function(error) {
        //     return "Message to the notifier: " + error.message;
        // }))
        .pipe(gulp.dest(path.dist.pug));
});

gulp.task('ftp', function () {
    return gulp.src('src/*')
        .pipe(ftp({
            host: 'ftp.dds.by/kubak.by',
            user: 'ddsby',
            pass: 'ooqu9Uiv'
        }))
        // you need to have some kind of stream after gulp-ftp to make sure it's flushed
        // this can be a gulp plugin, gulp.dest, or any kind of stream
        // here we use a passthrough stream
        .pipe(gutil.noop());
});

