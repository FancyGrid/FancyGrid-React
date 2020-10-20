let gulp = require('gulp');
let react = require('gulp-react');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let babel = require('gulp-babel');

gulp.task('dev', function(){
    return gulp.src(['./src/main.jsx'])
        .pipe(react({es6module: true}))
        .pipe(concat('fancygrid-react.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('prod', function(){
    return gulp.src(['./src/main.jsx'])
        .pipe(react({es6module: true}))
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('fancygrid-react.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('full', ['dev', 'prod']);
gulp.task('default', ['dev']);