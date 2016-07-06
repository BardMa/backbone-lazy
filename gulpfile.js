// 引入gulp
var gulp = require('gulp');

// 引入组件
var requirejsOptimize = require("gulp-requirejs-optimize"); //用于压缩 JS
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var inlineTemplate = require("gulp-minify-template-inline");

gulp.task('clean', function() {
    return gulp.src('build', {
            read: false
        })
        .pipe(clean());
});

gulp.task('js', ['clean'], function() {
    gulp.src('src/js/libs/require.js')
        .pipe(uglify())
        .pipe(gulp.dest("build"));
    gulp.src('src/js/global.js')
        .pipe(requirejsOptimize({
            name: 'global',
            mainConfigFile: "src/js/config.js",
            baseUrl: 'src/js',
            out: 'common.js'
        }))
        .pipe(gulp.dest("build"));
    gulp.src('src/js/home/app.js')
        .pipe(inlineTemplate({
            minify: true
        }))
        .pipe(requirejsOptimize({
            name: 'home/app',
            mainConfigFile: "src/js/config.js",
            baseUrl: 'src/js',
            exclude: ["global.js"],
            out: 'home.js'
        }))
        .pipe(gulp.dest("build"));
    gulp.src('src/js/shop/app.js')
        .pipe(inlineTemplate({
            minify: true
        }))
        .pipe(requirejsOptimize({
            name: 'shop/app',
            mainConfigFile: "src/js/config.js",
            baseUrl: 'src/js',
            exclude: ["global.js"],
            out: 'shop.js'
        }))
        .pipe(gulp.dest("build"));
});