// 引入gulp
var gulp = require('gulp');

// 引入组件
var requirejsOptimize = require("gulp-requirejs-optimize"); //用于压缩 JS
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var inlineTemplate = require("gulp-minify-template-inline");

gulp.task('clean', function() {
    return gulp.src('build/js', {
            read: false
        })
        .pipe(clean());
});

gulp.task('js', ['clean'], function() {
    gulp.src('src/js/libs/require.js')
        .pipe(uglify())
        .pipe(gulp.dest("build/js"));
    gulp.src('src/js/global.js')
        .pipe(requirejsOptimize({
            name: 'global',
            mainConfigFile: "src/js/config.js",
            baseUrl: 'src/js',
            out: 'common.js'
        }))
        .pipe(gulp.dest("build/js"));

    gulp.src('src/js/pages/home/index.js')
        .pipe(requirejsOptimize({
            name: 'pages/home/index',
            mainConfigFile: "src/js/config.js",
            baseUrl: 'src/js',
            exclude: ["global.js"],
            out: 'home.js'
        }))
        .pipe(gulp.dest("build/js"));

    gulp.src('src/js/pages/button/index.js')
        .pipe(requirejsOptimize({
            name: 'pages/button/index',
            mainConfigFile: "src/js/config.js",
            baseUrl: 'src/js',
            exclude: ["global.js"],
            out: 'button.js'
        }))
        .pipe(gulp.dest("build/js"));

    gulp.src('src/js/pages/cell/index.js')
        .pipe(requirejsOptimize({
            name: 'pages/cell/index',
            mainConfigFile: "src/js/config.js",
            baseUrl: 'src/js',
            exclude: ["global.js"],
            out: 'cell.js'
        }))
        .pipe(gulp.dest("build/js"));

    gulp.src('src/js/pages/toast/index.js')
        .pipe(requirejsOptimize({
            name: 'pages/toast/index',
            mainConfigFile: "src/js/config.js",
            baseUrl: 'src/js',
            exclude: ["global.js"],
            out: 'toast.js'
        }))
        .pipe(gulp.dest("build/js"));

    gulp.src('src/js/pages/dialog/index.js')
        .pipe(requirejsOptimize({
            name: 'pages/dialog/index',
            mainConfigFile: "src/js/config.js",
            baseUrl: 'src/js',
            exclude: ["global.js"],
            out: 'dialog.js'
        }))
        .pipe(gulp.dest("build/js"));

});