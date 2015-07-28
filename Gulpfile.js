var gulp = require('gulp'),
    $    = require('gulp-load-plugins')({
      pattern: ['gulp-*', 'del', 'main-bower-files', 'browser-sync', 'run-sequence']
    }),
    randomPort = getRandomInt(3000, 65536);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

gulp.task('autoprefixer', function() {
  return gulp.src('public/css/main.css')
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('babel', function() {
  return gulp.src('src/**/*.js')
    // .pipe($.sourcemaps.init())
    .pipe($.babel())
    // .pipe($.sourcemaps.write())
    .pipe(gulp.dest('public'));
});

gulp.task('bower-css', function() {
  return gulp.src($.mainBowerFiles('**/*.css'))
    .pipe($.concat('build.css'))
    .pipe(gulp.dest('public/lib'));
});

gulp.task('bower-js', function() {
  return gulp.src($.mainBowerFiles('**/*.js'))
    .pipe($.concat('build.js'))
    .pipe(gulp.dest('public/lib'));
});

gulp.task('browser-sync', function() {
  $.browserSync.init({
    server: {
      baseDir: "./public",
    },
    port: randomPort
  });
});

gulp.task('clean', function (cb) {
  $.del('public', cb);
});

gulp.task('copy', function () {
  gulp.src(['src/**', '!src/**/*.js', '!src/**/*.jade', '!src/**/*.scss', '!src/_*'])
    .pipe(gulp.dest('public'));
  gulp.src('bower_components/fontawesome/fonts/**') 
    .pipe(gulp.dest('public/fonts')); 
  gulp.src('bower_components/bootstrap/fonts/**') 
    .pipe(gulp.dest('public/fonts')); 
});

gulp.task('jade', function () {
  gulp
    .src(['src/**/*.jade', '!src/**/_*.jade'])
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('sass', function () {
  gulp
    .src('src/_styles/main.scss')
    .pipe($.sass()
      .on('error', $.sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('build', function () {
  $.runSequence('clean', 'copy', 'jade', 'sass', 'babel', 'bower-js', 'bower-css');
});

gulp.task('serve', function () {
  gulp.start('browser-sync');
  gulp.watch(['src/**/*.jade'], ['jade']);
  gulp.watch(['src/**/*.scss'], ['sass']);
  gulp.watch(['src/**/*.js'], ['babel']);
  gulp.watch('src/**/*.scss', ['autoprefixer']);
  gulp.watch(['public/**/**']).on('change', $.browserSync.reload);
});

gulp.task('default', function () {
});
