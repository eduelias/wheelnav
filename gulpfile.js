    //gulpfile.js
    var gulp = require('gulp');
    var concat = require('gulp-concat');
    var rename = require('gulp-rename');
    var uglify = require('gulp-uglify');
    var sourcemaps = require('gulp-sourcemaps');
    var plumber = require('gulp-plumber');

    var jsFiles = 'js/**/*.js',
        jsDest = 'dist/scripts';

    gulp.task('scripts', function() {
        return gulp.src(jsFiles)
            .pipe(concat('scripts.js'))
            .pipe(gulp.dest(jsDest));
    });

    gulp.task('default', function() {
        // Default task code
        console.log('GULP GULP GULP')
    });

    var jsFiles = [
            "./js/required/raphael.icons.js",
            "./js/required/raphael.js",
            "./js/source/wheelnav.core.js",
            "./js/source/wheelnav.parse.js",
            "./js/source/wheelnav.navItem.js",
            "./js/source/wheelnav.style.js",
            "./js/source/wheelnav.pathHelper.js",
            "./js/source/slicePath/wheelnav.slicePath.js",
            "./js/source/wheelnav.sliceTransform.js",
            "./js/source/spreader/wheelnav.spreader.js",
            "./js/source/marker/wheelnav.marker.js",
            "./js/source/wheelnav.colorPalettes.js"
        ],
        jsDest = 'dist/';

    gulp.task('scripts', function() {
        return gulp.src(jsFiles)
            .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe(concat('wheelnav.js'))
            .pipe(gulp.dest(jsDest))
            .pipe(uglify())
            .pipe(rename('wheelnav.min.js'))
            .pipe(sourcemaps.write('maps'))
            .pipe(gulp.dest(jsDest));
    });